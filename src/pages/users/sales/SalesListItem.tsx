import React from 'react';
import { OrdersAxiosService } from "../../../services/net/OrdersAxiosService";
import { formatCurrency } from "../../../utils/currencyUtils";
import { formatDate } from "../../../utils/dateUtils";
import { Link } from 'react-router-dom';

interface SalesListItemProps {
  sale: any;
  onSaleClick: (saleId: number) => void;
  onStatusUpdate: (saleId: number, newStatus: string) => void;
  onDelete: (saleId: number) => void;
}

const SalesListItem: React.FC<SalesListItemProps> = ({ 
  sale, 
  onSaleClick, 
  onStatusUpdate, 
  onDelete 
}) => {
  // Format date for sorting (hidden span)
  const getSortableDate = (dateString: string) => {
    const date = new Date(dateString);
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
  };

  // Get status color based on status value
  const getStatusColor = (statusValue: string) => {
    const statusInfo = OrdersAxiosService.getStatusDisplayInfo(statusValue);
    return statusInfo.color || "secondary";
  };

  // Get status label based on status value
  const getStatusLabel = (statusValue: string) => {
    const statusInfo = OrdersAxiosService.getStatusDisplayInfo(statusValue);
    return statusInfo.label || statusValue;
  };

  // Handle click on sale item
  const handleClick = () => {
    onSaleClick(sale.id);
  };

  // Handle status update
  const handleStatusUpdate = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.stopPropagation();
    const newStatus = e.target.value;
    if (newStatus && newStatus !== sale.status) {
      onStatusUpdate(sale.id, newStatus);
    }
  };

  // Handle delete
  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    onDelete(sale.id);
  };

  // Get available status options for updates
  const getStatusUpdateOptions = () => {
    const allStatuses = OrdersAxiosService.getStatusOptions();
    // Filter based on current status to show only valid transitions
    switch (sale.status) {
      case 'pending':
        return allStatuses.filter(s => ['confirmed', 'cancelled'].includes(s.value));
      case 'confirmed':
        return allStatuses.filter(s => ['processing', 'cancelled'].includes(s.value));
      case 'processing':
        return allStatuses.filter(s => ['shipped', 'cancelled'].includes(s.value));
      case 'shipped':
        return allStatuses.filter(s => ['delivered', 'returned'].includes(s.value));
      case 'delivered':
        return allStatuses.filter(s => ['completed', 'returned'].includes(s.value));
      default:
        return [];
    }
  };

  const statusUpdateOptions = getStatusUpdateOptions();
  const canUpdateStatus = statusUpdateOptions.length > 0;
  const canDelete = ['pending', 'cancelled'].includes(sale.status);

  return (
    <tr className="sale-list-item">
      <td className="fw-medium pt-2 pb-3 py-md-2 ps-0">
        <Link
          className="d-inline-block animate-underline text-body-emphasis text-decoration-none py-2 cursor-pointer" 
          to="#salesDetails" 
          data-bs-toggle="offcanvas" 
          aria-controls="salesDetails" 
          aria-label="Show sale details"
          onClick={handleClick}
        >
          <span className="animate-target">#{sale.tracking_number}</span>
        </Link>
        <ul className="list-unstyled fw-normal text-body m-0 d-md-none">
          <li className="text-muted small">{formatDate(sale.created_at)}</li>
          <li className="d-flex align-items-center mt-1">
            <span className={`bg-${getStatusColor(sale.status)} rounded-circle p-1 me-2`} />
            <small>{getStatusLabel(sale.status)}</small>
          </li>
          <li className="fw-medium text-body-emphasis mt-1">
            {formatCurrency(sale.total_amount, 'NGN', { short: true })}
          </li>
          {sale.customer && (
            <li className="text-muted small mt-1">
              <i className="ci-user me-1"></i>
              {sale.customer.name || sale.customer.username}
            </li>
          )}
        </ul>
      </td>
      
      <td className="fw-medium py-3 d-none d-md-table-cell">
        {formatDate(sale.created_at)}
        <span className="date d-none">{getSortableDate(sale.created_at)}</span>
      </td>
      
      <td className="py-3 d-none d-md-table-cell">
        <span className="d-flex align-items-center">
          <span className={`bg-${getStatusColor(sale.status)} rounded-circle p-1 me-2`} />
          <span className="fw-medium">{getStatusLabel(sale.status)}</span>
        </span>
      </td>
      
      <td className="py-3 d-none d-lg-table-cell">
        {sale.customer ? (
          <div className="d-flex align-items-center">
            <div className="flex-shrink-0 me-2">
              <img 
                className="rounded-circle" 
                src={sale.customer.avatar || '/assets/img/us/logos/avatar.png'}
                alt={sale.customer.name || sale.customer.username}
                width="32" 
                height="32"
                style={{objectFit: "cover", height:32, width:32}}
                onError={(e) => {
                  e.currentTarget.src = '/assets/img/us/logos/avatar.png';
                }}
              />
            </div>
            <div>
              <div className="fw-medium text-body-emphasis fs-sm text-truncate" style={{maxWidth: "200px"}}>
                {sale.customer.name || sale.customer.username}
              </div>
              {sale.customer.email && (
                // <div className="text-muted fs-xs">
                  <div className="text-muted fs-xs text-truncate" style={{maxWidth: "100px"}}>
                  {sale.customer.email}
                </div>
              )}
            </div>
          </div>
        ) : (
          <span className="text-muted">Unknown Customer</span>
        )}
      </td>
      
      <td className="fw-medium py-3 d-none d-md-table-cell">
        <div className="d-flex flex-column">
          <span className="text-body-emphasis">
            {formatCurrency(sale.total_amount, "NGN", {short: true})}
          </span>
          {sale.items && sale.items.length > 0 && (
            <small className="text-muted">
              {sale.items.length} item{sale.items.length !== 1 ? 's' : ''}
            </small>
          )}
        </div>
        <span className="total d-none">{parseFloat(sale.total_amount) * 100}</span>
      </td>
      
      <td className="py-3 pe-0">
        <div className="d-flex align-items-center justify-content-end gap-1">
          {/* Product images preview */}
          <div className="d-flex align-items-center gap-1 me-2">
            {sale.items && sale.items.slice(0, 3).map((item: any, index: number) => (
              <div key={index} className="position-relative">
                <img 
                  className="rounded border"
                  style={{width: 32, height: 32}}
                  src={item.image_url || "/assets/img/placeholder.jpg"} 
                  width={32} 
                  height={32}
                  alt={item.name} 
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "/assets/img/placeholder.jpg";
                  }}
                />
              </div>
            ))}
            {sale.items && sale.items.length > 3 && (
              <span className="badge bg-secondary rounded-pill fs-xs">
                +{sale.items.length - 3}
              </span>
            )}
          </div>

          {/* Action buttons */}
          <div className="btn-group" role="group">
            {/* Status update dropdown */}
            {canUpdateStatus && (
              <div className="dropdown">
                <button 
                  className="btn btn-sm btn-outline-primary dropdown-toggle rounded-pill me-1" 
                  type="button" 
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  onClick={(e) => e.stopPropagation()}
                >
                  <i className="ci-edit-3 fs-sm me-1"></i>
                  Status
                </button>
                <ul className="dropdown-menu dropdown-menu-end">
                  {statusUpdateOptions.map((status) => (
                    <li key={status.value}>
                      <button 
                        className="dropdown-item d-flex align-items-center"
                        onClick={(e) => {
                          e.stopPropagation();
                          onStatusUpdate(sale.id, status.value);
                        }}
                      >
                        <span className={`bg-${status.color} rounded-circle p-1 me-2`} />
                        {status.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* View details button */}
            <button 
              className="btn btn-sm btn-outline-secondary rounded-pill me-1"
              onClick={handleClick}
              data-bs-toggle="offcanvas" 
              data-bs-target="#salesDetails"
              aria-label="View sale details"
            >
              <i className="ci-eye fs-sm"></i>
            </button>

            {/* Delete button */}
            {canDelete && (
              <button 
                className="btn btn-sm btn-outline-danger rounded-pill"
                onClick={handleDelete}
                aria-label="Delete sale"
                title="Delete sale"
              >
                <i className="ci-trash fs-sm"></i>
              </button>
            )}
          </div>
        </div>
      </td>
    </tr>
  );
};

export default SalesListItem;