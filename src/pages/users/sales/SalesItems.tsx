// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import LoadingSpinner from '../../../components/shared/LoadingSpinner';
// import { OrdersAxiosService } from '../../../services/net/OrdersAxiosService';
// import { SalesAxiosService } from '../../../services/net/SalesAxiosService';
// import { formatCurrency } from '../../../utils/currencyUtils';
// import { formatDate, formatRelativeTime } from '../../../utils/dateUtils';

// interface SalesItemsProps {
//   selectedSale: any;
//   onStatusUpdate: (saleId: number, newStatus: string) => void;
//   onDelete: (saleId: number) => void;
// }

// const SalesItems: React.FC<SalesItemsProps> = ({ 
//   selectedSale, 
//   onStatusUpdate, 
//   onDelete 
// }) => {
//   const [saleDetails, setSaleDetails] = useState<any | null>(null);
//   const [loading, setLoading] = useState(false);
//   const [statusUpdateLoading, setStatusUpdateLoading] = useState(false);

//   useEffect(() => {
//     if (selectedSale) {
//       setSaleDetails(selectedSale);
//     } else {
//       setSaleDetails(null);
//     }
//   }, [selectedSale]);

//   // Handle status update
//   const handleStatusUpdate = async (newStatus: string) => {
//     if (!saleDetails || !saleDetails.id) return;
    
//     setStatusUpdateLoading(true);
//     try {
//       await onStatusUpdate(saleDetails.id, newStatus);
      
//       // Update local state
//       setSaleDetails(prev => prev ? { ...prev, status: newStatus } : null);
//     } catch (error) {
//       console.error("Failed to update sale status:", error);
//     } finally {
//       setStatusUpdateLoading(false);
//     }
//   };

//   // Handle delete
//   const handleDelete = async () => {
//     if (!saleDetails || !saleDetails.id) return;
    
//     await onDelete(saleDetails.id);
//     setSaleDetails(null);
//   };

//   // Handle sending notification to customer
//   const handleNotifyCustomer = async () => {
//     if (!saleDetails || !saleDetails.id) return;
    
//     setLoading(true);
//     try {
//       await SalesAxiosService.notifyCustomer(saleDetails.id, {
//         message: `Your order #${saleDetails.tracking_number} status has been updated to: ${getStatusLabel(saleDetails.status)}`,
//         type: 'status_update'
//       });
      
//       // Show success feedback (you might want to use a toast notification)
//       console.log('Customer notified successfully');
//     } catch (error) {
//       console.error("Failed to notify customer:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Determine status color class based on sale status
//   const getStatusColor = (status: string) => {
//     const statusInfo = OrdersAxiosService.getStatusDisplayInfo(status);
//     return statusInfo.color || "secondary";
//   };

//   // Get status label
//   const getStatusLabel = (status: string) => {
//     const statusInfo = OrdersAxiosService.getStatusDisplayInfo(status);
//     return statusInfo.label || status;
//   };

//   // Format delivery date and time for display
//   const formatDeliveryDateTime = (date?: string, timeSlot?: string) => {
//     if (!date) return "Not scheduled";
    
//     const formattedDate = new Date(date).toLocaleDateString('en-US', {
//       month: 'short',
//       day: 'numeric',
//       year: 'numeric'
//     });
    
//     return timeSlot ? `${formattedDate} / ${timeSlot}` : formattedDate;
//   };

//   // Handle image error with proper typing
//   const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
//     const target = e.target as HTMLImageElement;
//     target.onerror = null;
//     target.src = "/assets/img/placeholder.jpg";
//   };

//   // Get available status transitions
//   const getAvailableStatusTransitions = () => {
//     if (!saleDetails) return [];
    
//     const allStatuses = OrdersAxiosService.getStatusOptions();
//     switch (saleDetails.status) {
//       case 'pending':
//         return allStatuses.filter(s => ['confirmed', 'cancelled'].includes(s.value));
//       case 'confirmed':
//         return allStatuses.filter(s => ['processing', 'cancelled'].includes(s.value));
//       case 'processing':
//         return allStatuses.filter(s => ['shipped', 'cancelled'].includes(s.value));
//       case 'shipped':
//         return allStatuses.filter(s => ['delivered', 'returned'].includes(s.value));
//       case 'delivered':
//         return allStatuses.filter(s => ['completed', 'returned'].includes(s.value));
//       default:
//         return [];
//     }
//   };

//   const availableStatuses = getAvailableStatusTransitions();
//   const canUpdateStatus = availableStatuses.length > 0;
//   const canDelete = saleDetails && ['pending', 'cancelled'].includes(saleDetails.status);

//   return (
//     <div 
//       className="offcanvas offcanvas-end pb-sm-2 px-sm-2" 
//       id="salesDetails" 
//       tabIndex={-1} 
//       aria-labelledby="salesDetailsLabel" 
//       style={{ width: '500px' }}
//     >
//       {saleDetails ? (
//         <>
//           {/* Header */}
//           <div className="offcanvas-header align-items-start py-3 pt-lg-4">
//             <div className="flex-grow-1">
//               <h4 className="offcanvas-title mb-1" id="salesDetailsLabel">
//                 Sale #{saleDetails.tracking_number}
//               </h4>
//               <div className="d-flex align-items-center justify-content-between">
//                 <span className="d-flex align-items-center fs-sm fw-medium text-body-emphasis">
//                   <span className={`bg-${getStatusColor(saleDetails.status)} rounded-circle p-1 me-2`} />
//                   {getStatusLabel(saleDetails.status)}
//                 </span>
//                 <span className="fs-xs text-muted">
//                   {formatRelativeTime(saleDetails.created_at)}
//                 </span>
//               </div>
//             </div>
//             <button 
//               type="button" 
//               className="btn-close mt-0 ms-2" 
//               data-bs-dismiss="offcanvas" 
//               aria-label="Close" 
//             />
//           </div>
          
//           {/* Body */}
//           <div className="offcanvas-body d-flex flex-column gap-4 pt-2 pb-3">
            
//             {/* Customer Information */}
//             <div className="border rounded-3 p-3">
//               <h6 className="mb-3">Customer Information</h6>
//               {saleDetails.customer ? (
//                 <div className="d-flex align-items-center mb-3">
//                   <img 
//                     className="rounded-circle me-3"
//                     src={saleDetails.customer.avatar || '/assets/img/us/logos/avatar.png'}
//                     alt={saleDetails.customer.name || saleDetails.customer.username}
//                     width="48"
//                     height="48"
//                     onError={handleImageError}
//                   />
//                   <div>
//                     <div className="fw-medium text-body-emphasis">
//                       {saleDetails.customer.name || saleDetails.customer.username}
//                     </div>
//                     {saleDetails.customer.email && (
//                       <div className="text-muted fs-sm">{saleDetails.customer.email}</div>
//                     )}
//                     {saleDetails.customer.phone && (
//                       <div className="text-muted fs-sm">{saleDetails.customer.phone}</div>
//                     )}
//                   </div>
//                 </div>
//               ) : (
//                 <p className="text-muted mb-3">Customer information not available</p>
//               )}
              
//               {/* Quick actions for customer */}
//               <div className="d-flex gap-2">
//                 <button 
//                   className="btn btn-sm btn-outline-primary"
//                   onClick={handleNotifyCustomer}
//                   disabled={loading}
//                 >
//                   <i className="ci-bell me-1"></i>
//                   Notify Customer
//                 </button>
//                 {saleDetails.customer?.email && (
//                   <a 
//                     href={`mailto:${saleDetails.customer.email}`}
//                     className="btn btn-sm btn-outline-secondary"
//                   >
//                     <i className="ci-mail me-1"></i>
//                     Email
//                   </a>
//                 )}
//                 {saleDetails.customer?.phone && (
//                   <a 
//                     href={`tel:${saleDetails.customer.phone}`}
//                     className="btn btn-sm btn-outline-secondary"
//                   >
//                     <i className="ci-phone me-1"></i>
//                     Call
//                   </a>
//                 )}
//               </div>
//             </div>

//             {/* Items */}
//             <div>
//               <h6 className="mb-3">Order Items</h6>
//               <div className="d-flex flex-column gap-3">
//                 {saleDetails.items && saleDetails.items.map((item: any, index: number) => (
//                   <div className="d-flex align-items-center border rounded-3 p-3" key={index}>
//                     <Link className="flex-shrink-0" to={`/products/${item.slug}`}>
//                       <img 
//                         className='rounded'
//                         style={{height: 80, width: 80}}
//                         src={item.image_url || "/assets/img/placeholder.jpg"} 
//                         alt={item.name} 
//                         onError={handleImageError}
//                       />
//                     </Link>
//                     <div className="w-100 min-w-0 ps-3">
//                       <h6 className="d-flex animate-underline mb-2">
//                         <Link 
//                           className="d-block fs-sm fw-medium text-truncate animate-target" 
//                           to={`/products/${item.slug}`}
//                         >
//                           {item.name}
//                         </Link>
//                       </h6>
//                       <div className="d-flex justify-content-between align-items-center">
//                         <div>
//                           <div className="fw-medium text-body-emphasis">
//                             {formatCurrency(item.price, 'NGN', {short: true})}
//                           </div>
//                           <div className="fs-xs text-muted">Qty: {item.quantity}</div>
//                         </div>
//                         <div className="text-end">
//                           <div className="fw-medium">
//                             {formatCurrency(item.price * item.quantity, 'NGN', {short: true})}
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
            
//             {/* Delivery & Payment info */}
//             <div className="border-top pt-4">
//               <h6>Delivery & Shipping</h6>
//               <ul className="list-unstyled fs-sm mb-4">
//                 <li className="d-flex justify-content-between mb-2">
//                   <span>Delivery date:</span>
//                   <span className="text-body-emphasis fw-medium text-end ms-2">
//                     {formatDeliveryDateTime(
//                       saleDetails.delivery?.estimatedDeliveryDate,
//                       saleDetails.delivery?.estimatedTimeSlot
//                     )}
//                   </span>
//                 </li>
//                 <li className="d-flex justify-content-between mb-2">
//                   <span>Shipping method:</span>
//                   <span className="text-body-emphasis fw-medium text-end ms-2">
//                     {saleDetails.delivery?.shippingMethod || "Standard delivery"}
//                   </span>
//                 </li>
//                 <li className="d-flex justify-content-between">
//                   <span>Shipping address:</span>
//                   <span className="text-body-emphasis fw-medium text-end ms-2">
//                     {saleDetails.addresses?.street_address ? (
//                       <>
//                         {saleDetails.addresses.street_address}<br />
//                         {saleDetails.addresses.city?.name || ""}
//                       </>
//                     ) : (
//                       "Not provided"
//                     )}
//                   </span>
//                 </li>
//               </ul>
              
//               <h6>Payment Details</h6>
//               <ul className="list-unstyled fs-sm m-0">
//                 <li className="d-flex justify-content-between mb-2">
//                   <span>Payment method:</span>
//                   <span className="text-body-emphasis fw-medium text-end ms-2">
//                     {saleDetails?.payment?.method || "Not specified"}
//                   </span>
//                 </li>
//                 <li className="d-flex justify-content-between mb-2">
//                   <span>Tax collected:</span>
//                   <span className="text-body-emphasis fw-medium text-end ms-2">
//                     {formatCurrency(saleDetails.tax_amount || 0, 'NGN', {short: true})}
//                   </span>
//                 </li>
//                 <li className="d-flex justify-content-between">
//                   <span>Shipping cost:</span>
//                   <span className="text-body-emphasis fw-medium text-end ms-2">
//                     {formatCurrency(saleDetails.shipping_cost || 0, 'NGN', {short: true})}
//                   </span>
//                 </li>
//               </ul>
//             </div>
            
//             {/* Total */}
//             <div className="d-flex align-items-center justify-content-between fs-sm border-top pt-4">
//               <span className="fw-medium">Total Amount:</span>
//               <span className="h5 text-end ms-2 mb-0 text-success">
//                 {formatCurrency(saleDetails.total_amount, 'NGN', {short: false})}
//               </span>
//             </div>

//             {/* Status Update Section */}
//             {canUpdateStatus && (
//               <div className="border rounded-3 p-3 bg-light">
//                 <h6 className="mb-3">Update Order Status</h6>
//                 <div className="row g-2">
//                   {availableStatuses.map((status) => (
//                     <div className="col-6" key={status.value}>
//                       <button
//                         className="btn btn-outline-primary w-100 d-flex align-items-center justify-content-center"
//                         onClick={() => handleStatusUpdate(status.value)}
//                         disabled={statusUpdateLoading}
//                       >
//                         <span className={`bg-${status.color} rounded-circle p-1 me-2`} />
//                         <span className="fs-xs">{status.label}</span>
//                       </button>
//                     </div>
//                   ))}
//                 </div>
//                 {statusUpdateLoading && (
//                   <div className="text-center mt-2">
//                     <LoadingSpinner size="sm" />
//                     <span className="ms-2 fs-sm">Updating status...</span>
//                   </div>
//                 )}
//               </div>
//             )}
//           </div>
          
//           {/* Footer Actions */}
//           <div className="offcanvas-header border-top">
//             <div className="d-flex gap-2 w-100">
//               <button 
//                 className="btn btn-outline-primary flex-grow-1"
//                 onClick={handleNotifyCustomer}
//                 disabled={loading}
//               >
//                 <i className="ci-bell me-2"></i>
//                 Notify Customer
//               </button>
//               {canDelete && (
//                 <button 
//                   className="btn btn-outline-danger"
//                   onClick={handleDelete}
//                 >
//                   <i className="ci-trash"></i>
//                 </button>
//               )}
//             </div>
//           </div>
//         </>
//       ) : (
//         <div className="d-flex justify-content-center align-items-center h-100">
//           <div className="text-center">
//             <LoadingSpinner />
//             <p className="mt-3 text-muted">Loading sale details...</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SalesItems;

// v2 - but test v1 first, and then v2, if no difference, use it.
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../../../components/shared/LoadingSpinner';
import { OrdersAxiosService } from '../../../services/net/OrdersAxiosService';
import { SalesAxiosService } from '../../../services/net/SalesAxiosService';
import { formatCurrency } from '../../../utils/currencyUtils';
import { formatDate, formatRelativeTime } from '../../../utils/dateUtils';

interface SalesItemsProps {
  selectedSale: any;
  onStatusUpdate: (saleId: number, newStatus: string) => void;
  onDelete: (saleId: number) => void;
}

const SalesItems: React.FC<SalesItemsProps> = ({ 
  selectedSale, 
  onStatusUpdate, 
  onDelete 
}) => {
  const [saleDetails, setSaleDetails] = useState<any | null>(null);
  const [loading, setLoading] = useState(false);
  const [statusUpdateLoading, setStatusUpdateLoading] = useState(false);

  useEffect(() => {
    if (selectedSale) {
      setSaleDetails(selectedSale);
    } else {
      setSaleDetails(null);
    }
  }, [selectedSale]);

  // Handle status update
  const handleStatusUpdate = async (newStatus: string) => {
    if (!saleDetails || !saleDetails.id) return;
    
    setStatusUpdateLoading(true);
    try {
      await onStatusUpdate(saleDetails.id, newStatus);
      
      // Update local state
      setSaleDetails(prev => prev ? { ...prev, status: newStatus } : null);
    } catch (error) {
      console.error("Failed to update sale status:", error);
    } finally {
      setStatusUpdateLoading(false);
    }
  };

  // Handle delete
  const handleDelete = async () => {
    if (!saleDetails || !saleDetails.id) return;
    
    await onDelete(saleDetails.id);
    setSaleDetails(null);
  };

  // Handle sending notification to customer
  const handleNotifyCustomer = async () => {
    if (!saleDetails || !saleDetails.id) return;
    
    setLoading(true);
    try {
      await SalesAxiosService.notifyCustomer(saleDetails.id, {
        message: `Your order #${saleDetails.tracking_number} status has been updated to: ${getStatusLabel(saleDetails.status)}`,
        type: 'status_update'
      });
      
      // Customer notified successfully
    } catch (error) {
      // Failed to notify customer
    } finally {
      setLoading(false);
    }
  };

  // Determine status color class based on sale status
  const getStatusColor = (status: string) => {
    const statusInfo = OrdersAxiosService.getStatusDisplayInfo(status);
    return statusInfo.color || "secondary";
  };

  // Get status label
  const getStatusLabel = (status: string) => {
    const statusInfo = OrdersAxiosService.getStatusDisplayInfo(status);
    return statusInfo.label || status;
  };

  // Format delivery date and time for display
  const formatDeliveryDateTime = (date?: string, timeSlot?: string) => {
    if (!date) return "Not scheduled";
    
    const formattedDate = new Date(date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
    
    return timeSlot ? `${formattedDate} / ${timeSlot}` : formattedDate;
  };

  // Handle image error with proper typing
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.onerror = null;
    target.src = "/assets/img/placeholder.jpg";
  };

  // Get available status transitions
  const getAvailableStatusTransitions = () => {
    if (!saleDetails) return [];
    
    const allStatuses = OrdersAxiosService.getStatusOptions();
    switch (saleDetails.status) {
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

  const availableStatuses = getAvailableStatusTransitions();
  const canUpdateStatus = availableStatuses.length > 0;
  const canDelete = saleDetails && ['pending', 'cancelled'].includes(saleDetails.status);

  return (
    <div 
      className="offcanvas offcanvas-end pb-sm-2 px-sm-2" 
      id="salesDetails" 
      tabIndex={-1} 
      aria-labelledby="salesDetailsLabel" 
      style={{ width: '500px' }}
    >
      {saleDetails ? (
        <>
          {/* Header */}
          <div className="offcanvas-header align-items-start py-3 pt-lg-4">
            <div className="flex-grow-1">
              <h4 className="offcanvas-title mb-1" id="salesDetailsLabel">
                Sale #{saleDetails.tracking_number}
              </h4>
              <div className="d-flex align-items-center justify-content-between">
                <span className="d-flex align-items-center fs-sm fw-medium text-body-emphasis">
                  <span className={`bg-${getStatusColor(saleDetails.status)} rounded-circle p-1 me-2`} />
                  {getStatusLabel(saleDetails.status)}
                </span>
                <span className="fs-xs text-muted">
                  {formatRelativeTime(saleDetails.created_at)}
                </span>
              </div>
            </div>
            <button 
              type="button" 
              className="btn-close mt-0 ms-2" 
              data-bs-dismiss="offcanvas" 
              aria-label="Close" 
            />
          </div>
          
          {/* Body */}
          <div className="offcanvas-body d-flex flex-column gap-4 pt-2 pb-3">
            
            {/* Customer Information */}
            <div className="border rounded-3 p-3">
              <h6 className="mb-3">Customer Information</h6>
              {saleDetails.customer ? (
                <div className="d-flex align-items-center mb-3">
                  <img 
                    className="rounded-circle me-3"
                    src={saleDetails.customer.avatar || '/assets/img/us/logos/avatar.png'}
                    alt={saleDetails.customer.name || saleDetails.customer.username}
                    width="48"
                    height="48"
                    onError={handleImageError}
                  />
                  <div>
                    <div className="fw-medium text-body-emphasis">
                      {saleDetails.customer.name || saleDetails.customer.username}
                    </div>
                    {saleDetails.customer.email && (
                      <div className="text-muted fs-sm">{saleDetails.customer.email}</div>
                    )}
                    {saleDetails.customer.phone && (
                      <div className="text-muted fs-sm">{saleDetails.customer.phone}</div>
                    )}
                  </div>
                </div>
              ) : (
                <p className="text-muted mb-3">Customer information not available</p>
              )}
              
              {/* Quick actions for customer */}
              <div className="d-flex gap-2">
                <button 
                  className="btn btn-sm btn-outline-primary"
                  onClick={handleNotifyCustomer}
                  disabled={loading}
                >
                  <i className="ci-bell me-1"></i>
                  Notify Customer
                </button>
                {saleDetails.customer?.email && (
                  <Link
                    to={`mailto:${saleDetails.customer.email}`}
                    className="btn btn-sm btn-outline-secondary"
                  >
                    <i className="ci-mail me-1"></i>
                    Email
                  </Link>
                )}
                {saleDetails.customer?.phone && (
                  <Link
                    to={`tel:${saleDetails.customer.phone}`}
                    className="btn btn-sm btn-outline-secondary"
                  >
                    <i className="ci-phone me-1"></i>
                    Call
                  </Link>
                )}
              </div>
            </div>

            {/* Items */}
            <div>
              <h6 className="mb-3">Order Items</h6>
              <div className="d-flex flex-column gap-3">
                {saleDetails.items && saleDetails.items.map((item: any, index: number) => (
                  <div className="d-flex align-items-center border rounded-3 p-3" key={index}>
                    <Link className="flex-shrink-0" to={`/products/${item.slug}`}>
                      <img 
                        className='rounded'
                        style={{height: 80, width: 80}}
                        src={item.image_url || "/assets/img/placeholder.jpg"} 
                        alt={item.name} 
                        onError={handleImageError}
                      />
                    </Link>
                    <div className="w-100 min-w-0 ps-3">
                      <h6 className="d-flex animate-underline mb-2">
                        <Link 
                          className="d-block fs-sm fw-medium text-truncate animate-target" 
                          to={`/products/${item.slug}`}
                        >
                          {item.name}
                        </Link>
                      </h6>
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <div className="fw-medium text-body-emphasis">
                            {formatCurrency(item.price, 'NGN', {short: true})}
                          </div>
                          <div className="fs-xs text-muted">Qty: {item.quantity}</div>
                        </div>
                        <div className="text-end">
                          <div className="fw-medium">
                            {formatCurrency(item.price * item.quantity, 'NGN', {short: true})}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Delivery & Payment info */}
            <div className="border-top pt-4">
              <h6>Delivery & Shipping</h6>
              <ul className="list-unstyled fs-sm mb-4">
                <li className="d-flex justify-content-between mb-2">
                  <span>Delivery date:</span>
                  <span className="text-body-emphasis fw-medium text-end ms-2">
                    {formatDeliveryDateTime(
                      saleDetails.delivery?.estimatedDeliveryDate,
                      saleDetails.delivery?.estimatedTimeSlot
                    )}
                  </span>
                </li>
                <li className="d-flex justify-content-between mb-2">
                  <span>Shipping method:</span>
                  <span className="text-body-emphasis fw-medium text-end ms-2">
                    {saleDetails.delivery?.shippingMethod || "Standard delivery"}
                  </span>
                </li>
                <li className="d-flex justify-content-between">
                  <span>Shipping address:</span>
                  <span className="text-body-emphasis fw-medium text-end ms-2">
                    {saleDetails.addresses?.street_address ? (
                      <>
                        {saleDetails.addresses.street_address}<br />
                        {saleDetails.addresses.city?.name || ""}
                      </>
                    ) : (
                      "Not provided"
                    )}
                  </span>
                </li>
              </ul>
              
              <h6>Payment Details</h6>
              <ul className="list-unstyled fs-sm m-0">
                <li className="d-flex justify-content-between mb-2">
                  <span>Payment method:</span>
                  <span className="text-body-emphasis fw-medium text-end ms-2">
                    {saleDetails?.payment?.method || "Not specified"}
                  </span>
                </li>
                <li className="d-flex justify-content-between mb-2">
                  <span>Tax collected:</span>
                  <span className="text-body-emphasis fw-medium text-end ms-2">
                    {formatCurrency(saleDetails.tax_amount || 0, 'NGN', {short: true})}
                  </span>
                </li>
                <li className="d-flex justify-content-between">
                  <span>Shipping cost:</span>
                  <span className="text-body-emphasis fw-medium text-end ms-2">
                    {formatCurrency(saleDetails.shipping_cost || 0, 'NGN', {short: true})}
                  </span>
                </li>
              </ul>
            </div>
            
            {/* Total */}
            <div className="d-flex align-items-center justify-content-between fs-sm border-top pt-4">
              <span className="fw-medium">Total Amount:</span>
              <span className="h5 text-end ms-2 mb-0 text-success">
                {formatCurrency(saleDetails.total_amount, 'NGN', {short: false})}
              </span>
            </div>

            {/* Status Update Section */}
            {canUpdateStatus && (
              <div className="border rounded-3 p-3 bg-light">
                <h6 className="mb-3">Update Order Status</h6>
                <div className="row g-2">
                  {availableStatuses.map((status) => (
                    <div className="col-6" key={status.value}>
                      <button
                        className="btn btn-outline-primary w-100 d-flex align-items-center justify-content-center"
                        onClick={() => handleStatusUpdate(status.value)}
                        disabled={statusUpdateLoading}
                      >
                        <span className={`bg-${status.color} rounded-circle p-1 me-2`} />
                        <span className="fs-xs">{status.label}</span>
                      </button>
                    </div>
                  ))}
                </div>
                {statusUpdateLoading && (
                  <div className="text-center mt-2">
                    <LoadingSpinner size="sm" />
                    <span className="ms-2 fs-sm">Updating status...</span>
                  </div>
                )}
              </div>
            )}
          </div>
          
          {/* Footer Actions */}
          <div className="offcanvas-header border-top">
            <div className="d-flex gap-2 w-100">
              <button 
                className="btn btn-outline-primary flex-grow-1"
                onClick={handleNotifyCustomer}
                disabled={loading}
              >
                <i className="ci-bell me-2"></i>
                Notify Customer
              </button>
              {canDelete && (
                <button 
                  className="btn btn-outline-danger"
                  onClick={handleDelete}
                >
                  <i className="ci-trash"></i>
                </button>
              )}
            </div>
          </div>
        </>
      ) : (
        <div className="d-flex justify-content-center align-items-center h-100">
          <div className="text-center">
            <LoadingSpinner />
            <p className="mt-3 text-muted">Loading sale details...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SalesItems;