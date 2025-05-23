import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
        const statusInfo = OrdersAxiosService.getStatusDisplayInfo(statusValue);
        return statusInfo.color || "secondary";
    };
    // Get status label based on status value
    const getStatusLabel = (statusValue) => {
        const statusInfo = OrdersAxiosService.getStatusDisplayInfo(statusValue);
        return statusInfo.label || statusValue;
    };
    // Handle click on order item
    const handleClick = () => {
        onOrderClick(order.id);
    };
    return (_jsxs("tr", { children: [_jsxs("td", { className: "fw-medium pt-2 pb-3 py-md-2 ps-0", children: [_jsx("a", { className: "d-inline-block animate-underline text-body-emphasis text-decoration-none py-2", href: "#orderDetails", "data-bs-toggle": "offcanvas", "aria-controls": "orderDetails", "aria-label": "Show order details", onClick: handleClick, children: _jsx("span", { className: "animate-target", children: order.tracking_number }) }), _jsxs("ul", { className: "list-unstyled fw-normal text-body m-0 d-md-none", children: [_jsx("li", { children: formatDate(order.created_at) }), _jsxs("li", { className: "d-flex align-items-center", children: [_jsx("span", { className: `bg-${getStatusColor(order.status)} rounded-circle p-1 me-2` }), getStatusLabel(order.status)] }), _jsx("li", { className: "fw-medium text-body-emphasis", children: formatCurrency(order.total_amount) })] })] }), _jsxs("td", { className: "fw-medium py-3 d-none d-md-table-cell", children: [formatDate(order.created_at), _jsx("span", { className: "date d-none", children: getSortableDate(order.created_at) })] }), _jsx("td", { className: "fw-medium py-3 d-none d-md-table-cell", children: _jsxs("span", { className: "d-flex align-items-center", children: [_jsx("span", { className: `bg-${getStatusColor(order.status)} rounded-circle p-1 me-2` }), getStatusLabel(order.status)] }) }), _jsxs("td", { className: "fw-medium py-3 d-none d-md-table-cell", children: [formatCurrency(order.total_amount), _jsx("span", { className: "total d-none", children: parseFloat(order.total_amount) * 100 })] }), _jsx("td", { className: "py-3 pe-0", children: _jsxs("span", { className: "d-flex align-items-center justify-content-end position-relative gap-1 gap-sm-2 ms-n2 ms-sm-0", children: [order.items && order.items.slice(0, 3).map((item, index) => (_jsx("span", { children: _jsx("img", { className: "rounded", style: { width: 64, height: 64 }, src: item.image_url || "/assets/img/placeholder.jpg", width: 64, alt: item.name, onError: (e) => {
                                    e.target.onerror = null;
                                    e.target.src = "/assets/img/placeholder.jpg";
                                } }) }, index))), console.log(`order.items in orderListItem`, order), order.items && (_jsx("span", { className: "fw-medium me-1", children: order.items.length > 3 ? `+${order.items.length - 3}` : null })), _jsx("a", { className: "btn btn-icon btn-ghost btn-secondary stretched-link border-0", href: "#orderDetails", "data-bs-toggle": "offcanvas", "aria-controls": "orderDetails", "aria-label": "Show order details", onClick: handleClick, children: _jsx("i", { className: "ci-chevron-right fs-lg" }) })] }) })] }));
};
export default OrderListItem;
