import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { CartService } from '../../../services/local/CartService';
import './Basket.css';
const Basket = () => {
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    useEffect(() => {
        const onCartUpdated = (items) => {
            if (items) {
                setCartItems(items);
                setTotalPrice(items.reduce((accumulator, currentValue) => accumulator + currentValue.quantity * currentValue.price, 0));
            }
        };
        CartService.subscribe(onCartUpdated, true);
        return () => {
            CartService.unsubscribe(onCartUpdated);
        };
    }, []);
    const updateCart = (cartItem, quantity) => {
        CartService.addItem(cartItem, parseInt(quantity));
    };
    const deleteProductFromCart = (cartItem) => {
        CartService.removeItem(cartItem);
    };
    const calculateSubtotal = (cartItem) => {
        return cartItem.quantity * cartItem.price;
    };
    const checkoutImageStyle = {
        height: '100px',
        width: '100px'
    };
    return (_jsx("div", { className: "container", style: { marginTop: '100px', marginBottom: '110px' }, children: _jsxs("table", { id: "cart", className: "table table-hover table-condensed", children: [_jsx("thead", { children: _jsxs("tr", { children: [_jsx("th", { style: { width: "50%" }, children: "Product" }), _jsx("th", { style: { width: "10%" }, children: "Price" }), _jsx("th", { style: { width: "8%" }, children: "Quantity" }), _jsx("th", { style: { width: "22%" }, className: "text-center", children: "Subtotal" }), _jsx("th", { style: { width: "10%" } })] }) }), _jsx("tbody", { children: cartItems.map(cartItem => (_jsxs("tr", { children: [_jsx("td", { "data-th": "Product", children: _jsxs("div", { className: "row", children: [_jsx("div", { className: "col-sm-3 hidden-xs", children: _jsx("img", { src: cartItem.image_urls[0], style: checkoutImageStyle, alt: cartItem.name, className: "img-responsive" }) }), _jsxs("div", { className: "col-sm-9", children: [_jsx("h4", { className: "nomargin", children: cartItem.name }), _jsx("p", { children: cartItem.description })] })] }) }), _jsxs("td", { "data-th": "Price", children: ["$", cartItem.price] }), _jsx("td", { "data-th": "Quantity", children: _jsx("input", { className: "form-control text-center", type: "number", min: "1", onChange: (e) => updateCart(cartItem, e.target.value), defaultValue: cartItem.quantity }) }), _jsxs("td", { "data-th": "Subtotal", className: "text-center", children: [calculateSubtotal(cartItem), "$"] }), _jsx("td", { className: "my-auto", "data-th": "", children: _jsx("button", { className: "remove-product", onClick: () => deleteProductFromCart(cartItem), children: "X" }) })] }, cartItem.id))) }), _jsxs("tfoot", { children: [_jsx("tr", { className: "visible-xs", children: _jsx("td", { className: "text-center", children: _jsxs("strong", { children: ["Total $", totalPrice] }) }) }), _jsxs("tr", { children: [_jsx("td", { children: _jsxs(NavLink, { to: "/products", className: "btn btn-warning", children: [_jsx("i", { className: "fa fa-angle-left" }), " Continue Shopping"] }) }), _jsx("td", { colSpan: "2", className: "hidden-xs" }), _jsx("td", { className: "hidden-xs text-center", children: _jsxs("strong", { children: ["Total $", totalPrice] }) }), _jsx("td", { children: _jsxs(NavLink, { to: "/checkout", className: "btn btn-success btn-block", children: ["Checkout", _jsx("i", { className: "fa fa-angle-right" })] }) })] })] })] }) }));
};
export default Basket;
