import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const LoadingSpinner_0 = ({ size = 'md' }) => (_jsx("div", { className: `spinner-border text-primary spinner-border-${size}`, role: "status", children: _jsx("span", { className: "visually-hidden", children: "Loading..." }) }));
const LoadingSpinner = ({ size = 'md' }) => (_jsx("div", { className: "loading-spinner", children: _jsx("div", { className: "spinner" }) }));
export const LoadingZoom = ({ size = 'sm' }) => (_jsxs("span", { className: "loading-zoom", children: [_jsx("span", { className: `spinner-grow spinner-grow-${size}`, role: "status", "aria-hidden": "true" }), _jsx("span", { className: "visually-hidden", children: "Loading..." })] }));
// Export all components as default
// const LoadingComponents = {
//   LoadingSpinner_0,
//   LoadingSpinner,
//   LoadingZoom,
// };
// export default LoadingComponents;
export default LoadingSpinner;
