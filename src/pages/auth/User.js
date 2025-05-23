import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
class User extends React.Component {
    render() {
        const cardStyle = {
            width: '50%'
        };
        return (_jsx("div", { className: "container", style: cardStyle, children: _jsxs("div", { className: "card-group", children: [_jsxs("div", { className: "card btn shadow-lg bg-white", onClick: () => this.props.history.push('/profile/addresses'), children: [_jsx("img", { className: "card-img-top mx-auto", src: "/images/world.svg", alt: "Card image cap" }), _jsxs("div", { className: "card-body", children: [_jsx("h5", { className: "card-title", children: "Addresses" }), _jsx("p", { className: "card-text", children: "Make sure your addresses are up to date" }), _jsx("p", { className: "card-text", children: _jsx("small", { className: "text-muted", children: _jsx("router-link", { to: "/profile/addresses", children: "My Addresses" }) }) })] })] }), "\u00A0", _jsxs("div", { className: "card btn shadow-lg bg-white", onClick: () => this.props.history.push('/profile/orders'), children: [_jsx("img", { className: "card-img-top mx-auto", src: "/images/package.svg", alt: "Map" }), _jsxs("div", { className: "card-body", children: [_jsx("h5", { className: "card-title", children: "My Orders" }), _jsx("p", { className: "card-text", children: "Check all your orders" }), _jsx("p", { className: "card-text", children: _jsx("small", { className: "text-muted", children: _jsx("router-link", { to: "/profile/orders", children: "My Orders" }) }) })] })] })] }) }));
    }
}
export default User;
