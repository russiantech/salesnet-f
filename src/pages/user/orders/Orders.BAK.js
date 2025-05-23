import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { AxiosOrdersService } from "../../../services/net/AxiosOrdersService";
const Orders = () => {
    const [orders, setOrders] = useState([]);
    const classNames = ['card bg-light mb-3', 'card text-white bg-dark mb-3'];
    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const res = await AxiosOrdersService.fetchAll();
                setOrders(res.data.orders);
            }
            catch (err) {
                console.error(err);
            }
        };
        fetchOrders();
    }, []);
    const ordersView = orders.map((order, index) => (_jsxs("div", { className: classNames[index % 2], style: { maxWidth: "18rem" }, children: [_jsx("div", { className: "card-header", children: order.tracking_number }), _jsxs("div", { className: "card-body", children: [_jsx("h5", { className: "card-title", children: order.order_status }), _jsxs("p", { className: "card-text", children: [order.total_price, "$ for ", order.order_items_count] })] })] }, order.tracking_number)));
    return (_jsx("div", { className: "container", children: _jsx("div", { className: "row", style: { marginTop: "100px", marginBottom: "100px" }, children: orders.length > 0 ? ordersView : _jsx("h3", { children: "You have not made any order yet" }) }) }));
};
export default Orders;
