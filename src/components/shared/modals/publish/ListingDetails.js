import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { ProductAxiosService } from '../../../../services/net/ProductAxiosService';
const ListingDetails = ({ onChange }) => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await ProductAxiosService.fetchCategories();
                console.log("Fetched categories:", response.data);
                setCategories(response.data.categories); // Store the categories array
            }
            catch (error) {
                console.error("Error fetching categories:", error);
            }
            finally {
                setLoading(false);
            }
        };
        fetchCategories();
    }, []);
    const flattenCategories = (categories) => {
        let flatList = [];
        const flatten = (cats) => {
            for (const cat of cats) {
                flatList.push({ id: cat.id, name: cat.name });
                if (cat.children && cat.children.length > 0) {
                    flatten(cat.children);
                }
            }
        };
        flatten(categories);
        return flatList;
    };
    const flatCategories = flattenCategories(categories);
    return (_jsx("section", { className: "position-relative bg-body rounded p-4 mt-4", children: _jsxs("div", { className: "position-relative z-1 pb-md-2 px-md-2", children: [_jsx("h2", { className: "h4 mb-3 mb-sm-4", children: "Listing Basic Details" }), _jsxs("div", { className: "row row-cols-1 row-cols-sm-2 g-3 g-md-4 mb-3 mb-md-4", children: [_jsxs("div", { className: "col", children: [_jsx("label", { htmlFor: "name", className: "form-label", children: "Product Name" }), _jsx("input", { type: "text", className: "form-control", id: "name", name: "name", minLength: 10, placeholder: "Enter product name", onChange: onChange })] }), _jsxs("div", { className: "col", children: [_jsx("label", { htmlFor: "price", className: "form-label", children: "Price" }), _jsx("input", { type: "number", className: "form-control", id: "price", name: "price", placeholder: "Enter price", onChange: onChange })] }), _jsxs("div", { className: "col", children: [_jsxs("label", { htmlFor: "categories", className: "form-label d-flex align-items-center", children: ["Categories", loading && _jsx("span", { className: "ms-2", children: "Loading..." }), _jsx("i", { className: "fi-info fs-base ms-2", "data-bs-toggle": "tooltip", "aria-label": "Select a category" })] }), _jsxs("select", { className: "form-select", name: "categories", onChange: onChange, disabled: loading, children: [_jsx("option", { value: "", children: "Select option..." }), flatCategories.map((category, index) => (_jsx("option", { value: category.id, children: category.name }, `${category.id}-${index}`)))] })] }), _jsxs("div", { className: "col", children: [_jsx("label", { htmlFor: "condition", className: "form-label", children: "Condition" }), _jsxs("select", { className: "form-select", id: "condition", name: "condition", onChange: onChange, children: [_jsx("option", { value: "", children: "Select option..." }), _jsx("option", { value: 1, children: "Used Item" }), _jsx("option", { value: 2, children: "Brand New" })] })] })] }), _jsx("label", { htmlFor: "description", className: "form-label fs-6 fw-semibold", children: "Description *" }), _jsx("p", { className: "fs-sm mb-2", children: "Describe the product in detail (maximum 300 characters)." }), _jsx("textarea", { className: "form-control", rows: 4, id: "description", name: "description", placeholder: "Maximum 300 characters", required: true, onChange: onChange })] }) }));
};
export default ListingDetails;
