// import { formatCurrency } from '../../utils/formatters';
// import  OrdersAxiosService.from '../../services/OrderService';

import { OrdersAxiosService } from "../../../services/net/OrdersAxiosService";
import { formatCurrency } from "../../../utils/currencyUtils";
import { formatDate } from "../../../utils/dateUtils";

const OrderListItem = ({ order, onOrderClick }) => {
    // Format date for display
    // const formatDate = (dateString) => {
    //     const date = new Date(dateString);
    //     return date.toLocaleDateString('en-US', {
    //         month: 'short',
    //         day: 'numeric',
    //         year: 'numeric'
    //     });
    // };

    // Format date for sorting (hidden span)
    const getSortableDate = (dateString) => {
        const date = new Date(dateString);
        return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
    };

    // Get status color based on status value
    const getStatusColor = (statusValue) => {
        const statusInfo =  OrdersAxiosService.getStatusDisplayInfo(statusValue);
        return statusInfo.color || "secondary";
    };

    // Get status label based on status value
    const getStatusLabel = (statusValue) => {
        const statusInfo =  OrdersAxiosService.getStatusDisplayInfo(statusValue);
        return statusInfo.label || statusValue;
    };

    // Handle click on order item
    const handleClick = () => {
        onOrderClick(order.id);
    };

    return (
        <tr>
            <td className="fw-medium pt-2 pb-3 py-md-2 ps-0">
                <a 
                    className="d-inline-block animate-underline text-body-emphasis text-decoration-none py-2" 
                    href="#orderDetails" 
                    data-bs-toggle="offcanvas" 
                    aria-controls="orderDetails" 
                    aria-label="Show order details"
                    onClick={handleClick}
                >
                    <span className="animate-target">{order.tracking_number}</span>
                </a>
                <ul className="list-unstyled fw-normal text-body m-0 d-md-none">
                    <li>{formatDate(order.created_at)}</li>
                    <li className="d-flex align-items-center">
                        <span className={`bg-${getStatusColor(order.status)} rounded-circle p-1 me-2`} />
                        {getStatusLabel(order.status)}
                    </li>
                    <li className="fw-medium text-body-emphasis">{formatCurrency(order.total_amount)}</li>
                </ul>
            </td>
            <td className="fw-medium py-3 d-none d-md-table-cell">
                {formatDate(order.created_at)}
                <span className="date d-none">{getSortableDate(order.created_at)}</span>
            </td>
            <td className="fw-medium py-3 d-none d-md-table-cell">
                <span className="d-flex align-items-center">
                    <span className={`bg-${getStatusColor(order.status)} rounded-circle p-1 me-2`} />
                    {getStatusLabel(order.status)}
                </span>
            </td>
            <td className="fw-medium py-3 d-none d-md-table-cell">
                {formatCurrency(order.total_amount)}
                <span className="total d-none">{parseFloat(order.total_amount) * 100}</span>
            </td>
            <td className="py-3 pe-0">
                <span className="d-flex align-items-center justify-content-end position-relative gap-1 gap-sm-2 ms-n2 ms-sm-0">
                    {order.items && order.items.slice(0, 3).map((item, index) => (
                        <span key={index}>
                            <img 
                                className="rounded"
                                style={{width:64, height:64 }}
                                src={item.image_url || "/assets/img/placeholder.jpg" } 
                                width={64} 
                                alt={item.name} 
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = "/assets/img/placeholder.jpg";
                                }}
                            />
                        </span>
                    ))}
                    {/* {console.log(`order.items in orderListItem`, order)}
                    {order.items && order.items.length >= 1 && (
                        <span className="fw-medium me-1">+{order.items.length - 3}</span>
                    )} */}
                    {/* {order.items && order.items.length > 3 && (
                        <span className="fw-medium me-1">+ {order.items.length > 3 && order.items.length - 3}</span>
                    )} */}
                    {/* {console.log(`order.items in orderListItem`, order)}
                    {order.items && (
                        <span className="fw-medium me-1">
                            {order.items.length > 3
                                ? `+${order.items.length - 3}`
                                : order.items.length < 3
                                ? `${3 - order.items.length}`
                                : null}
                        </span>
                    )} */}
                    {console.log(`order.items in orderListItem`, order)}
                    {order.items && (
                        <span className="fw-medium me-1">
                            {order.items.length > 3 ? `+${order.items.length - 3}` : null}
                        </span>
                    )}

                    <a className="btn btn-icon btn-ghost btn-secondary stretched-link border-0" 
                        href="#orderDetails" 
                        data-bs-toggle="offcanvas" 
                        aria-controls="orderDetails" 
                        aria-label="Show order details"
                        onClick={handleClick}
                    >
                        <i className="ci-chevron-right fs-lg" />
                    </a>
                </span>
            </td>
        </tr>
    );
};

export default OrderListItem;