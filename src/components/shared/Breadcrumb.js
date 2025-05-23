import { jsx as _jsx } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
const Breadcrumb = ({ items }) => {
    return (_jsx("nav", { "aria-label": "breadcrumb", children: _jsx("ol", { className: "breadcrumb pt-3 mt-2 mt-md-3 mb-md-4", children: items.map((item, index) => (_jsx("li", { className: `breadcrumb-item ${index === items.length - 1 ? 'active' : ''}`, "aria-current": index === items.length - 1 ? 'page' : undefined, children: item.path ? (_jsx(Link, { to: item.path, children: item.label })) : (_jsx("span", { children: item.label })) }, index))) }) }));
};
Breadcrumb.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string.isRequired,
        path: PropTypes.string
    })).isRequired
};
export default Breadcrumb;
