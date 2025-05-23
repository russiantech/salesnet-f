import { jsxs as _jsxs, jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
// const OrderItems = () => {
//     {/* Order details offcanvas */ }
//     return (
//         <div className="offcanvas offcanvas-end pb-sm-2 px-sm-2" id="orderDetails" tabIndex={-1} aria-labelledby="orderDetailsLabel" style={{ width: '500px' }}>
//             {/* Header */}
//             <div className="offcanvas-header align-items-start py-3 pt-lg-4">
//                 <div>
//                     <h4 className="offcanvas-title mb-1" id="orderDetailsLabel">Order # 78A6431D409</h4>
//                     <span className="d-flex align-items-center fs-sm fw-medium text-body-emphasis">
//                         <span className="bg-info rounded-circle p-1 me-2" />
//                         In progress
//                     </span>
//                 </div>
//                 <button type="button" className="btn-close mt-0" data-bs-dismiss="offcanvas" aria-label="Close" />
//             </div>
//             {/* Body */}
//             <div className="offcanvas-body d-flex flex-column gap-4 pt-2 pb-3">
//                 {/* Items */}
//                 <div className="d-flex flex-column gap-3">
//                     {/* Item */}
//                     <div className="d-flex align-items-center">
//                         <a className="flex-shrink-0" href="shop-product-general-electronics.html">
//                             <img src="/assets/img/shop/electronics/thumbs/01.png" width={110} alt="Smart Watch" />
//                         </a>
//                         <div className="w-100 min-w-0 ps-2 ps-sm-3">
//                             <h5 className="d-flex animate-underline mb-2">
//                                 <a className="d-block fs-sm fw-medium text-truncate animate-target" href="shop-product-general-electronics.html">Smart Watch Series 7, White</a>
//                             </h5>
//                             <div className="h6 mb-2">$429.00</div>
//                             <div className="fs-xs">Qty: 1</div>
//                         </div>
//                     </div>
//                     {/* Item */}
//                     <div className="d-flex align-items-center">
//                         <a className="flex-shrink-0" href="shop-product-general-electronics.html">
//                             <img src="/assets/img/shop/electronics/thumbs/08.png" width={110} alt="iPhone 14" />
//                         </a>
//                         <div className="w-100 min-w-0 ps-2 ps-sm-3">
//                             <h5 className="d-flex animate-underline mb-2">
//                                 <a className="d-block fs-sm fw-medium text-truncate animate-target" href="shop-product-general-electronics.html">Apple iPhone 14 128GB White</a>
//                             </h5>
//                             <div className="h6 mb-2">$899.00</div>
//                             <div className="fs-xs">Qty: 1</div>
//                         </div>
//                     </div>
//                     {/* Item */}
//                     <div className="d-flex align-items-center">
//                         <a className="flex-shrink-0" href="shop-product-general-electronics.html">
//                             <img src="/assets/img/shop/electronics/thumbs/09.png" width={110} alt="iPad Pro" />
//                         </a>
//                         <div className="w-100 min-w-0 ps-2 ps-sm-3">
//                             <h5 className="d-flex animate-underline mb-2">
//                                 <a className="d-block fs-sm fw-medium text-truncate animate-target" href="shop-product-general-electronics.html">Tablet Apple iPad Pro M2</a>
//                             </h5>
//                             <div className="h6 mb-2">$989.00</div>
//                             <div className="fs-xs">Qty: 1</div>
//                         </div>
//                     </div>
//                 </div>
//                 {/* Delivery + Payment info */}
//                 <div className="border-top pt-4">
//                     <h6>Delivery</h6>
//                     <ul className="list-unstyled fs-sm mb-4">
//                         <li className="d-flex justify-content-between mb-1">
//                             Estimated delivery date:
//                             <span className="text-body-emphasis fw-medium text-end ms-2">Feb 8, 2025 / 10:00 - 12:00</span>
//                         </li>
//                         <li className="d-flex justify-content-between mb-1">
//                             Shipping method:
//                             <span className="text-body-emphasis fw-medium text-end ms-2">Courier delivery</span>
//                         </li>
//                         <li className="d-flex justify-content-between">
//                             Shipping address:
//                             <span className="text-body-emphasis fw-medium text-end ms-2">567 Cherry Lane Apt B12,<br />Harrisburg</span>
//                         </li>
//                     </ul>
//                     <h6>Payment</h6>
//                     <ul className="list-unstyled fs-sm m-0">
//                         <li className="d-flex justify-content-between mb-1">
//                             Payment method:
//                             <span className="text-body-emphasis fw-medium text-end ms-2">Cash on delivery </span>
//                         </li>
//                         <li className="d-flex justify-content-between mb-1">
//                             Tax collected:
//                             <span className="text-body-emphasis fw-medium text-end ms-2">$12.40</span>
//                         </li>
//                         <li className="d-flex justify-content-between">
//                             Shipping:
//                             <span className="text-body-emphasis fw-medium text-end ms-2">$26.50</span>
//                         </li>
//                     </ul>
//                 </div>
//                 {/* Total */}
//                 <div className="d-flex align-items-center justify-content-between fs-sm border-top pt-4">
//                     Estimated total:
//                     <span className="h5 text-end ms-2 mb-0">$2,105.90</span>
//                 </div>
//             </div>
//             {/* Footer */}
//             <div className="offcanvas-header">
//                 <a className="btn btn-lg btn-secondary w-100" href="#!">Change the delivery time</a>
//             </div>
//         </div>
//     )
// }
// export default OrderItems
// 
// VERSION-02
import { useState, useEffect } from 'react';
// import  OrdersAxiosService.from '../../services/OrderService';
// import { formatCurrency } from '../../utils/formatters';
import LoadingSpinner from '../../../components/shared/LoadingSpinner';
import { OrdersAxiosService } from '../../../services/net/OrdersAxiosService';
import { formatCurrency } from '../../../utils/currencyUtils';
import { Link } from 'react-router-dom';
const OrderItems = ({ selectedOrder }) => {
    const [orderDetails, setOrderDetails] = useState(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        if (selectedOrder) {
            setOrderDetails(selectedOrder);
        }
        else {
            setOrderDetails(null);
        }
    }, [selectedOrder]);
    // Handle changing delivery time
    const handleChangeDeliveryTime = async () => {
        if (!orderDetails || !orderDetails.id)
            return;
        setLoading(true);
        try {
            // Mock implementation - would normally open a modal with date/time picker
            const mockNewDeliveryTime = {
                date: "2025-02-10",
                timeSlot: "14:00 - 16:00"
            };
            await OrdersAxiosService.updateDeliveryDetails(orderDetails.id, {
                deliveryDate: mockNewDeliveryTime.date,
                deliveryTimeSlot: mockNewDeliveryTime.timeSlot
            });
            // Refresh order details
            const updatedOrder = await OrdersAxiosService.getOrderById(orderDetails.id);
            console.log('updatedOrder', updatedOrder);
            setOrderDetails(updatedOrder);
        }
        catch (error) {
            console.error("Failed to update delivery time:", error);
        }
        finally {
            setLoading(false);
        }
    };
    // Determine status color class based on order status
    const getStatusColor = (status) => {
        const statusInfo = OrdersAxiosService.getStatusDisplayInfo(status);
        return statusInfo.color || "secondary";
    };
    // Format delivery date and time for display
    const formatDeliveryDateTime = (date, timeSlot) => {
        if (!date)
            return "Not available";
        const formattedDate = new Date(date).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });
        return timeSlot ? `${formattedDate} / ${timeSlot}` : formattedDate;
    };
    return (_jsx("div", { className: "offcanvas offcanvas-end pb-sm-2 px-sm-2", id: "orderDetails", tabIndex: -1, "aria-labelledby": "orderDetailsLabel", style: { width: '500px' }, children: orderDetails ? (_jsxs(_Fragment, { children: [_jsxs("div", { className: "offcanvas-header align-items-start py-3 pt-lg-4", children: [_jsxs("div", { children: [_jsxs("h4", { className: "offcanvas-title mb-1", id: "orderDetailsLabel", children: ["Order # ", orderDetails.tracking_number] }), _jsxs("span", { className: "d-flex align-items-center fs-sm fw-medium text-body-emphasis", children: [_jsx("span", { className: `bg-${getStatusColor(orderDetails.status)} rounded-circle p-1 me-2` }), OrdersAxiosService.getStatusDisplayInfo(orderDetails.status).label] })] }), _jsx("button", { type: "button", className: "btn-close mt-0", "data-bs-dismiss": "offcanvas", "aria-label": "Close" })] }), _jsxs("div", { className: "offcanvas-body d-flex flex-column gap-4 pt-2 pb-3", children: [_jsxs("div", { className: "d-flex flex-column gap-3", children: [console.log('orderDetails in OrderItems', orderDetails), orderDetails.items && orderDetails.items.map((item, index) => (_jsxs("div", { className: "d-flex align-items-center", children: [_jsx(Link, { className: "flex-shrink-0", to: `/products/${item.slug}`, children: _jsx("img", { className: 'rounded', style: { height: 110 }, src: item.image_url || "/assets/img/placeholder.jpg", width: 110, 
                                                // MaxHeight={110}
                                                alt: item.name, onError: (e) => {
                                                    e.target.onerror = null;
                                                    e.target.src = "/assets/img/placeholder.jpg";
                                                } }) }), _jsxs("div", { className: "w-100 min-w-0 ps-2 ps-sm-3", children: [_jsx("h5", { className: "d-flex animate-underline mb-2", children: _jsx(Link, { className: "d-block fs-sm fw-medium text-truncate animate-target", to: `/products/${item.slug}`, children: item.name }) }), _jsx("div", { className: "h6 mb-2", children: formatCurrency(item.price) }), _jsxs("div", { className: "fs-xs", children: ["Qty: ", item.quantity] })] })] }, index)))] }), _jsxs("div", { className: "border-top pt-4", children: [_jsx("h6", { children: "Delivery" }), _jsxs("ul", { className: "list-unstyled fs-sm mb-4", children: [_jsxs("li", { className: "d-flex justify-content-between mb-1", children: ["Estimated delivery date:", _jsx("span", { className: "text-body-emphasis fw-medium text-end ms-2", children: formatDeliveryDateTime(orderDetails.delivery?.estimatedDeliveryDate, orderDetails.delivery?.estimatedTimeSlot) })] }), _jsxs("li", { className: "d-flex justify-content-between mb-1", children: ["Shipping method:", _jsx("span", { className: "text-body-emphasis fw-medium text-end ms-2", children: orderDetails.delivery?.shippingMethod || "Standard delivery" })] }), _jsxs("li", { className: "d-flex justify-content-between", children: ["Shipping address:", _jsxs("span", { className: "text-body-emphasis fw-medium text-end ms-2", children: [orderDetails.addresses?.street_address || "", ",", _jsx("br", {}), orderDetails.addresses?.city?.name || ""] })] })] }), _jsx("h6", { children: "Payment" }), _jsxs("ul", { className: "list-unstyled fs-sm m-0", children: [_jsxs("li", { className: "d-flex justify-content-between mb-1", children: ["Payment method:", _jsx("span", { className: "text-body-emphasis fw-medium text-end ms-2", children: orderDetails.payment?.method || "N/A" })] }), _jsxs("li", { className: "d-flex justify-content-between mb-1", children: ["Tax collected:", _jsx("span", { className: "text-body-emphasis fw-medium text-end ms-2", children: formatCurrency(orderDetails?.tax_amount) })] }), _jsxs("li", { className: "d-flex justify-content-between", children: ["Shipping:", _jsx("span", { className: "text-body-emphasis fw-medium text-end ms-2", children: formatCurrency(orderDetails?.shipping_cost) })] })] })] }), _jsxs("div", { className: "d-flex align-items-center justify-content-between fs-sm border-top pt-4", children: ["Estimated total:", _jsx("span", { className: "h5 text-end ms-2 mb-0", children: formatCurrency(orderDetails.total_amount) })] })] }), _jsx("div", { className: "offcanvas-header", children: _jsx("button", { className: "btn btn-lg btn-secondary w-100", onClick: handleChangeDeliveryTime, disabled: loading || orderDetails.status !== 'progress', children: loading ? 'Processing...' : 'Change the delivery time' }) })] })) : (_jsx("div", { className: "d-flex justify-content-center align-items-center h-100", children: _jsx(LoadingSpinner, {}) })) }));
};
export default OrderItems;
