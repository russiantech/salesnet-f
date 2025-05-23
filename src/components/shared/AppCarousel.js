import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Component } from 'react';
class AppCarousel extends Component {
    render() {
        const Items = this.props.items.map((item, index) => (_jsx("div", { className: `carousel-item ${index === 0 ? 'active' : ''}`, style: { backgroundImage: item.image ? `url(${item.image})` : `url('/images/macbook.jpg')` }, children: _jsxs("div", { className: "carousel-caption d-none d-md-block", children: [_jsx("h3", { children: item.name }), _jsx("p", { children: item.description })] }) }, item.id)));
        return (_jsx("header", { children: _jsxs("div", { id: "carouselExampleIndicators", className: "carousel slide", "data-ride": "carousel", children: [_jsx("ol", { className: "carousel-indicators", children: this.props.items.map((item, index) => (_jsx("li", { "data-target": "#carouselExampleIndicators", "data-slide-to": index, className: index === 0 ? 'active' : '' }, index))) }), _jsx("div", { className: "carousel-inner", role: "listbox", children: Items }), _jsxs("a", { className: "carousel-control-prev", href: "#carouselExampleIndicators", role: "button", "data-slide": "prev", children: [_jsx("span", { className: "carousel-control-prev-icon", "aria-hidden": "true" }), _jsx("span", { className: "sr-only", children: "Previous" })] }), _jsxs("a", { className: "carousel-control-next", href: "#carouselExampleIndicators", role: "button", "data-slide": "next", children: [_jsx("span", { className: "carousel-control-next-icon", "aria-hidden": "true" }), _jsx("span", { className: "sr-only", children: "Next" })] })] }) }));
    }
}
export default AppCarousel;
