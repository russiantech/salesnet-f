import React, { useEffect, useState } from "react";
import { AxiosOrdersService } from "../../../services/net/AxiosOrdersService";
import NavigationMenu from "../../partials/NavigationMenu";
import Layout from "../../partials/Layout";

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const classNames = ['card bg-light mb-3', 'card text-white bg-dark mb-3'];

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const res = await AxiosOrdersService.fetchAll();
                setOrders(res.data.orders);
            } catch (err) {
                console.error(err);
            }
        };

        fetchOrders();
    }, []);

    const ordersView = orders.map((order, index) => (
        <div className={classNames[index % 2]} style={{ maxWidth: "18rem" }} key={order.tracking_number}>
            <div className="card-header">{order.tracking_number}</div>
            <div className="card-body">
                <h5 className="card-title">{order.order_status}</h5>
                <p className="card-text">{order.total_price}$ for {order.order_items_count}</p>
            </div>
        </div>
    ));

    return (
        <div className="container">
            <div className="row" style={{ marginTop: "100px", marginBottom: "100px" }}>
                {orders.length > 0 ? ordersView : <h3>You have not made any order yet</h3>}
            </div>
        </div>
    );
};

export default Orders;