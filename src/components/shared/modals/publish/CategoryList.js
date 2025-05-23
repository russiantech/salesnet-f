import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
// Main container component
const TabbedInterface = ({ categories }) => {
    const [activeTab, setActiveTab] = useState('categories');
    const [interfaceState, setInterfaceState] = useState({
        categories: {
            checkedIds: new Set(),
            expandedIds: new Set(),
            searchQuery: '',
        },
        // Add other tabs' state here
    });
    return (_jsx("div", { className: "container mt-4", children: _jsxs("div", { className: "card", children: [_jsx("div", { className: "card-header", children: _jsxs("ul", { className: "nav nav-tabs card-header-tabs", children: [_jsx(TabButton, { id: "categories", label: "Categories", activeTab: activeTab, setActiveTab: setActiveTab }), _jsx(TabButton, { id: "settings", label: "Settings", activeTab: activeTab, setActiveTab: setActiveTab })] }) }), _jsxs("div", { className: "card-body", children: [_jsx(TabContent, { id: "categories", activeTab: activeTab, children: _jsx(CategoryList, { categories: categories, state: interfaceState.categories, setState: (newState) => setInterfaceState(prev => ({
                                    ...prev,
                                    categories: newState
                                })) }) }), _jsx(TabContent, { id: "settings", activeTab: activeTab, children: _jsx(SettingsPanel, {}) })] })] }) }));
};
// Tab Button Component
const TabButton = ({ id, label, activeTab, setActiveTab }) => (_jsx("li", { className: "nav-item", children: _jsx("button", { className: `nav-link ${activeTab === id ? 'active' : ''}`, onClick: () => setActiveTab(id), "aria-controls": `${id}-tab`, "aria-selected": activeTab === id, children: label }) }));
// Tab Content Component
const TabContent = ({ id, activeTab, children }) => (_jsx("div", { id: `${id}-tab`, role: "tabpanel", "aria-labelledby": `${id}-tab`, className: activeTab === id ? '' : 'visually-hidden', children: children }));
// Enhanced Category List Component
const CategoryList = ({ categories, state, setState }) => {
    const handleStateUpdate = (newPartialState) => {
        setState({ ...state, ...newPartialState });
    };
    return (_jsxs("div", { className: "category-interface", children: [_jsx(SearchControl, { searchQuery: state.searchQuery, setSearchQuery: (query) => handleStateUpdate({ searchQuery: query }) }), _jsx("div", { className: "nested-list-container mt-3", children: _jsx(NestedList, { categories: categories, checkedIds: state.checkedIds, expandedIds: state.expandedIds, onCheck: handleCheckedState, onToggle: handleToggleExpansion }) })] }));
};
// Search Control Component
const SearchControl = ({ searchQuery, setSearchQuery }) => (_jsxs("div", { className: "input-group mb-3", children: [_jsx("span", { className: "input-group-text", children: _jsx("i", { className: "bi bi-search" }) }), _jsx("input", { type: "search", className: "form-control", placeholder: "Search categories...", value: searchQuery, onChange: (e) => setSearchQuery(e.target.value), "aria-label": "Search categories" })] }));
// Nested List Component
const NestedList = ({ categories, checkedIds, expandedIds, onCheck, onToggle }) => {
    const [localExpanded, setLocalExpanded] = useState(new Set());
    const toggleVisibility = (categoryId) => {
        const newExpanded = new Set(localExpanded);
        newExpanded.has(categoryId) ? newExpanded.delete(categoryId) : newExpanded.add(categoryId);
        setLocalExpanded(newExpanded);
    };
    return (_jsx("ul", { className: "list-group", children: categories.map((category) => (_jsx(CategoryNode, { category: category, depth: 0, checkedIds: checkedIds, expandedIds: expandedIds, localExpanded: localExpanded, onCheck: onCheck, onToggle: onToggle, onVisibilityToggle: toggleVisibility }, category.id))) }));
};
// Category Node Component
const CategoryNode = ({ category, depth, checkedIds, expandedIds, localExpanded, onCheck, onToggle, onVisibilityToggle }) => {
    const hasChildren = category.children?.length > 0;
    const isExpanded = expandedIds.has(category.id) && localExpanded.has(category.id);
    return (_jsxs(_Fragment, { children: [_jsx("li", { className: "list-group-item", children: _jsxs("div", { className: "d-flex align-items-center", style: { paddingLeft: `${depth * 32}px` }, children: [_jsx(ToggleButton, { isExpanded: isExpanded, hasChildren: hasChildren, onToggle: () => {
                                onVisibilityToggle(category.id);
                                onToggle(category.id);
                            } }), _jsx(CheckboxControl, { category: category, checkedIds: checkedIds, onCheck: onCheck })] }) }), hasChildren && isExpanded && (_jsx(NestedList, { categories: category.children, depth: depth + 1, checkedIds: checkedIds, expandedIds: expandedIds, localExpanded: localExpanded, onCheck: onCheck, onToggle: onToggle, onVisibilityToggle: onVisibilityToggle }))] }));
};
// Toggle Button Component
const ToggleButton = ({ isExpanded, hasChildren, onToggle }) => (_jsx("button", { className: "btn btn-sm btn-link me-2", onClick: onToggle, disabled: !hasChildren, "aria-expanded": isExpanded, children: hasChildren && (_jsx("i", { className: `bi ${isExpanded ? 'bi-chevron-down' : 'bi-chevron-right'}` })) }));
// Checkbox Control Component
const CheckboxControl = ({ category, checkedIds, onCheck }) => {
    const isChecked = checkedIds.has(category.id);
    const isIndeterminate = false; // Add indeterminate state logic here
    return (_jsxs("div", { className: "form-check flex-grow-1", children: [_jsx("input", { className: "form-check-input", type: "checkbox", id: `check-${category.id}`, checked: isChecked, ref: (el) => el && (el.indeterminate = isIndeterminate), onChange: (e) => onCheck(category.id, e.target.checked) }), _jsx("label", { className: "form-check-label ms-2", htmlFor: `check-${category.id}`, children: category.name })] }));
};
// Settings Panel Component (example secondary tab)
const SettingsPanel = () => (_jsxs("div", { className: "settings-panel", children: [_jsx("h3", { children: "Settings" }), _jsx("p", { children: "Additional configuration options..." })] }));
export default TabbedInterface;
