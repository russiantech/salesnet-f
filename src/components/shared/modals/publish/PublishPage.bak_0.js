import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import ListingDetails from './ListingDetails';
import Media from './Media';
import Contact from './Contact';
import Location from './Location';
import Promote from './Promote';
const PublishPage = () => {
    const [activeTab, setActiveTab] = useState('home');
    const [formData, setFormData] = useState({});
    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Handle the submission logic (e.g., API call)
    };
    const handleNext = (event) => {
        const tabs = ['home', 'media', 'contact', 'location', 'promote'];
        const currentIndex = tabs.indexOf(activeTab);
        if (activeTab === 'promote') {
            handleSubmit(event); // Submit the form if on the promote tab
        }
        else if (currentIndex < tabs.length - 1) {
            setActiveTab(tabs[currentIndex + 1]);
        }
    };
    const handleBack = () => {
        const tabs = ['home', 'media', 'contact', 'location', 'promote'];
        const currentIndex = tabs.indexOf(activeTab);
        if (currentIndex > 0) {
            setActiveTab(tabs[currentIndex - 1]);
        }
    };
    return (_jsx("form", { onSubmit: handleSubmit, children: _jsx("div", { className: "card", children: _jsxs("div", { className: "card-body", style: { padding: "2 2" }, children: [_jsx("ul", { className: "nav nav-pills mb-3 flex-nowrap gap-2 text-nowrap pb-3", role: "tablist", children: ['home', 'media', 'contact', 'location', 'promote'].map(tab => (_jsx("li", { className: "nav-item", role: "presentation", children: _jsx("button", { type: "button", className: `nav-link ${activeTab === tab ? 'active' : ''}`, onClick: () => handleTabChange(tab), children: tab.charAt(0).toUpperCase() + tab.slice(1).replace('-', ' ') }) }, tab))) }), _jsxs("div", { className: "tab-content", id: "pills-tabContent", children: [_jsx("div", { className: `tab-pane fade ${activeTab === 'home' ? 'show active' : ''}`, children: _jsx(ListingDetails, { onChange: handleInputChange }) }), _jsx("div", { className: `tab-pane fade ${activeTab === 'media' ? 'show active' : ''}`, children: _jsx(Media, { onChange: handleInputChange }) }), _jsx("div", { className: `tab-pane fade ${activeTab === 'contact' ? 'show active' : ''}`, children: _jsx(Contact, { onChange: handleInputChange }) }), _jsx("div", { className: `tab-pane fade ${activeTab === 'location' ? 'show active' : ''}`, children: _jsx(Location, { onChange: handleInputChange }) }), _jsx("div", { className: `tab-pane fade ${activeTab === 'promote' ? 'show active' : ''}`, children: _jsx(Promote, { onChange: handleInputChange }) }), _jsx("footer", { className: "sticky-bottom bg-body pb-3 w-100", children: _jsxs("div", { className: "container d-flex gap-3 pt-3", children: [_jsx("button", { type: "button", className: "btn btn-outline-dark border-1", onClick: handleBack, disabled: activeTab === 'home', children: "Back" }), _jsx("button", { type: "button", className: "btn btn-dark ms-auto", onClick: handleNext, children: activeTab === 'promote' ? 'Submit' : 'Next' })] }) })] })] }) }) }));
};
export default PublishPage;
