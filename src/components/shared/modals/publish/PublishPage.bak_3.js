import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ResponseModal from '../ResponseModal';
import { ProductAxiosService } from '../../../../services/net/ProductAxiosService';
import { NotificationService } from '../../../../services/local/NotificationService';
const PublishPage = () => {
    const navigate = useNavigate();
    const fileInputRef = useRef(null);
    const [activeTab, setActiveTab] = useState('home');
    const [responseModal, setResponseModal] = useState({
        show: false,
        message: '',
        success: false
    });
    const [uploadProgress, setUploadProgress] = useState(0);
    const [mediaFiles, setMediaFiles] = useState([]);
    const [previews, setPreviews] = useState([]);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    // Initial form state
    const initialFormData = {
        basic_info: {
            name: '',
            categories: [],
            price: '',
            condition: '',
            description: '',
            listing_type: 'sell'
        },
        delivery_options: {
            delivery_type: 'delivery'
        },
        contact_info: {
            first_name: '',
            last_name: '',
            email: '',
            phone: ''
        },
        location: {
            country: '',
            state: '',
            city: '',
            zip_code: '',
            address: ''
        },
        media: {
            video_link: ''
        },
        promotion: {
            promotion_plan: ''
        }
    };
    const [formData, setFormData] = useState(initialFormData);
    // Validation rules for each field
    const validateRules = {
        name: {
            required: true,
            minLength: 5,
            maxLength: 100
        },
        categories: {
            required: true
        },
        price: {
            required: true,
            min: 0.01
        },
        condition: {
            required: true
        },
        description: {
            required: true,
            minLength: 50,
            maxLength: 1000
        },
        first_name: {
            required: true,
            minLength: 2
        },
        last_name: {
            required: true,
            minLength: 2
        },
        email: {
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        },
        phone: {
            required: true,
            pattern: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
        },
        country: {
            required: true
        },
        state: {
            required: true
        },
        city: {
            required: true
        },
        address: {
            required: true
        }
    };
    // Validate form fields
    const validateField = (name, value) => {
        const rules = validateRules[name];
        if (!rules)
            return true; // No validation rules for this field
        const newErrors = { ...errors };
        if (rules.required && !value) {
            newErrors[name] = 'This field is required';
        }
        else if (rules.minLength && value.length < rules.minLength) {
            newErrors[name] = `Minimum ${rules.minLength} characters required`;
        }
        else if (rules.maxLength && value.length > rules.maxLength) {
            newErrors[name] = `Maximum ${rules.maxLength} characters allowed`;
        }
        else if (rules.min && parseFloat(value) < rules.min) {
            newErrors[name] = `Minimum value is ${rules.min}`;
        }
        else if (rules.pattern && !rules.pattern.test(value)) {
            newErrors[name] = 'Invalid format';
        }
        else {
            delete newErrors[name];
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    // Validate current tab before proceeding
    const validateCurrentTab = () => {
        const tabValidations = {
            home: () => {
                const requiredFields = ['name', 'categories', 'price', 'condition', 'description'];
                return requiredFields.every(field => {
                    const value = formData.basic_info[field];
                    return validateField(field, value) && value;
                });
            },
            contact: () => {
                const requiredFields = ['first_name', 'last_name', 'email', 'phone'];
                return requiredFields.every(field => {
                    const value = formData.contact_info[field];
                    return validateField(field, value) && value;
                });
            },
            location: () => {
                const requiredFields = ['country', 'state', 'city', 'address'];
                return requiredFields.every(field => {
                    const value = formData.location[field];
                    return validateField(field, value) && value;
                });
            },
            promote: () => true, // No validation required for promotion tab
            'listing-type': () => true, // No validation required for listing type
            images: () => mediaFiles.length > 0 // At least one media file required
        };
        const isValid = tabValidations[activeTab]();
        if (!isValid) {
            setResponseModal({
                show: true,
                message: 'Please fill in all required fields correctly',
                success: false
            });
        }
        return isValid;
    };
    // Handle file selection
    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        const validFiles = files.filter(file => (file.type.startsWith('image/') || file.type.startsWith('video/')) &&
            file.size <= 8 * 1024 * 1024 // 8MB limit
        );
        if (validFiles.length !== files.length) {
            setResponseModal({
                show: true,
                message: 'Only image and video files under 8MB are allowed',
                success: false
            });
        }
        const newMediaFiles = [...mediaFiles, ...validFiles];
        setMediaFiles(newMediaFiles);
        // Generate previews
        const newPreviews = [];
        validFiles.forEach(file => {
            const reader = new FileReader();
            reader.onload = (e) => {
                newPreviews.push({
                    url: e.target.result,
                    type: file.type.startsWith('image/') ? 'image' : 'video',
                    name: file.name,
                    size: file.size
                });
                setPreviews([...previews, ...newPreviews]);
            };
            reader.readAsDataURL(file);
        });
    };
    // Remove a media file
    const removeMedia = (index) => {
        const newMediaFiles = [...mediaFiles];
        const newPreviews = [...previews];
        newMediaFiles.splice(index, 1);
        newPreviews.splice(index, 1);
        setMediaFiles(newMediaFiles);
        setPreviews(newPreviews);
    };
    // Handle input changes with validation
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        let formSection = 'basic_info';
        // Determine which section of the form this field belongs to
        if (name in formData.contact_info)
            formSection = 'contact_info';
        if (name in formData.location)
            formSection = 'location';
        if (name in formData.media)
            formSection = 'media';
        if (name in formData.promotion)
            formSection = 'promotion';
        if (name in formData.delivery_options)
            formSection = 'delivery_options';
        // Update form data
        setFormData(prev => ({
            ...prev,
            [formSection]: {
                ...prev[formSection],
                [name]: value
            }
        }));
        // Validate the field
        validateField(name, value);
    };
    const prepareSubmissionData = () => {
        const submissionData = new FormData();
        // Append nested form data
        Object.entries(formData).forEach(([section, data]) => {
            Object.entries(data).forEach(([key, value]) => {
                submissionData.append(`${section}[${key}]`, value);
            });
        });
        // Append media files with correct field name
        mediaFiles.forEach((file, index) => {
            submissionData.append("media[]", file); // Key must match backend expectation
            submissionData.append(`mediaMetadata[${index}][isCover]`, index === 0 ? "true" : "false");
        });
        // Debugging: Log actual FormData contents
        console.log("--- FormData Entries ---");
        for (const [key, value] of submissionData.entries()) {
            console.log(key, value);
        }
        return submissionData;
    };
    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            // Final validation before submission
            if (!validateCurrentTab()) {
                setIsSubmitting(false);
                return;
            }
            // Prepare structured data
            const submissionData = prepareSubmissionData();
            // Get auth token
            // const token = await UsersService.getToken();
            // console.log(`submissionData: ${JSON.stringify(submissionData)}`);
            // Log FormData entries properly
            console.log("--- Submission Data 02---");
            for (const [key, value] of submissionData) {
                console.log(key + ":", value);
            }
            // Submit data with progress tracking
            const response = await ProductAxiosService.createProduct(submissionData);
            // Handle successful submission
            if (response.data.success) {
                setResponseModal({
                    show: true,
                    message: response.data.message || 'Product published successfully! Redirecting...',
                    success: true
                });
                // Reset form and redirect after delay
                setTimeout(() => {
                    setFormData(initialFormData);
                    setMediaFiles([]);
                    setPreviews([]);
                    setActiveTab('home');
                    setUploadProgress(0);
                    navigate(`products/${response.data.slug}`);
                }, 2000);
            }
            else {
                throw new Error(response.data.message || 'Submission failed');
            }
        }
        catch (error) {
            console.log(`error-at-publishing: ${error}`);
            // const errorMessage = error.response?.data?.message || error.error || 'Failed to publish product. Please try again.';
            const errorMessage = error.response?.data?.error || error.message || error.error || 'Failed to publish product. Please try again.';
            // NotificationService.showDialog(errorMessage, 'error');
            setResponseModal({
                show: true,
                message: errorMessage,
                success: false
            });
        }
        finally {
            setIsSubmitting(false);
        }
    };
    // Tab navigation with validation
    const handleNext = (e) => {
        e.preventDefault();
        if (!validateCurrentTab())
            return;
        const tabs = ['home', 'listing-type', 'images', 'contact', 'location', 'promote'];
        const currentIndex = tabs.indexOf(activeTab);
        if (currentIndex < tabs.length - 1) {
            setActiveTab(tabs[currentIndex + 1]);
        }
        else {
            handleSubmit(e);
        }
    };
    const handleBack = () => {
        const tabs = ['home', 'listing-type', 'images', 'contact', 'location', 'promote'];
        const currentIndex = tabs.indexOf(activeTab);
        if (currentIndex > 0) {
            setActiveTab(tabs[currentIndex - 1]);
        }
    };
    // Calculate progress percentage for UI
    const progressPercentage = () => {
        const tabs = ['home', 'listing-type', 'images', 'contact', 'location', 'promote'];
        const currentIndex = tabs.indexOf(activeTab);
        return ((currentIndex + 1) / tabs.length) * 100;
    };
    // categories
    // Add state for categories at the top of your component
    const [categories, setCategories] = useState([]);
    // Add useEffect to fetch categories
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await ProductAxiosService.fetchCategories();
                console.log(response.data.categories);
                setCategories(response.data.categories);
            }
            catch (error) {
                console.error('Error fetching categories:', error);
                NotificationService.showDialog('Failed to load categories', 'error');
            }
        };
        fetchCategories();
    }, []);
    // Add renderCategories function inside your component (before return)
    const renderCategories = (categoryList, level = 0) => {
        return categoryList.map(category => (_jsxs("div", { style: { marginLeft: `${level * 20}px` }, children: [_jsxs("div", { className: "form-check", children: [_jsx("input", { className: `form-check-input ${errors.categories ? 'is-invalid' : ''}`, type: "checkbox", id: `cat-${category.id}`, checked: formData.basic_info.categories.includes(category.id), onChange: (e) => handleCategoryChange(e, category.id), disabled: category.children.length > 0 }), _jsx("label", { className: "form-check-label", htmlFor: `cat-${category.id}`, children: category.name })] }), category.children.length > 0 && renderCategories(category.children, level + 1)] }, category.id)));
    };
    // Add separate handler for category changes
    const handleCategoryChange = (e, categoryId) => {
        const newCategories = e.target.checked
            ? [...formData.basic_info.categories, categoryId]
            : formData.basic_info.categories.filter(c => c !== categoryId);
        setFormData(prev => ({
            ...prev,
            basic_info: {
                ...prev.basic_info,
                categories: newCategories
            }
        }));
        validateField('categories', newCategories);
    };
    // Update your categories section in the JSX
    // Add this recursive rendering function above your component's return
    // const renderCategories = (categories, level = 0) => {
    //   return categories.map(category => (
    //     <div key={category.id} style={{ marginLeft: `${level * 20}px` }}>
    //       <div className="form-check">
    //         <input
    //           className={`form-check-input ${errors.categories ? 'is-invalid' : ''}`}
    //           type="checkbox"
    //           id={`cat-${category.id}`}
    //           checked={formData.basic_info.categories.includes(category.id)}
    //           onChange={(e) => {
    //             const newCategories = e.target.checked
    //               ? [...formData.basic_info.categories, category.id]
    //               : formData.basic_info.categories.filter(c => c !== category.id);
    //             setFormData(prev => ({
    //               ...prev,
    //               basic_info: {
    //                 ...prev.basic_info,
    //                 categories: newCategories
    //               }
    //             }));
    //             validateField('categories', newCategories);
    //           }}
    //           disabled={category.children.length > 0} // Disable parent categories
    //         />
    //         <label className="form-check-label" htmlFor={`cat-${category.id}`}>
    //           {category.name}
    //         </label>
    //       </div>
    //       {/* Recursively render children */}
    //       {category.children.length > 0 && renderCategories(category.children, level + 1)}
    //     </div>
    //   ));
    // };
    return (_jsx("div", { className: "container pt-4 justify-content-center", children: _jsx("div", { className: "row pt-sm-2", style: { marginLeft: "-15px", marginRight: "-15px" }, children: _jsx("section", { id: "pills-tabs", className: "docs-section", children: _jsxs("div", { className: "card border-0 shadow - row g-0 overflow-x-auto pb-3 mb-2 mb-md-3 mb-lg-4", "data-simplebar": true, "data-simplebar-auto-hide": "false", children: [_jsxs("div", { className: "card-body position-relative z-2 col-auto", children: [_jsx("ul", { className: "nav nav-pills mb-3 - flex-nowrap gap-2 text-nowrap pb-3", role: "tablist", children: ['home', 'listing-type', 'images', 'contact', 'location', 'promote'].map((tab) => (_jsx("li", { className: "nav-item", role: "presentation", children: _jsxs("button", { type: "button", className: `nav-link ${activeTab === tab ? 'active' : ''}`, onClick: () => setActiveTab(tab), children: [tab === 'home' && _jsxs(_Fragment, { children: [_jsx("i", { className: "fi-home me-2 ms-n1" }), "Basic Info"] }), tab === 'listing-type' && _jsxs(_Fragment, { children: [_jsx("i", { className: "fi-list me-2 ms-n1" }), "Type"] }), tab === 'images' && _jsxs(_Fragment, { children: [_jsx("i", { className: "fi-image me-2 ms-n1" }), "Media"] }), tab === 'contact' && _jsxs(_Fragment, { children: [_jsx("i", { className: "fi-user me-2 ms-n1" }), "Contact"] }), tab === 'location' && _jsxs(_Fragment, { children: [_jsx("i", { className: "fi-map-pin me-2 ms-n1" }), "Location"] }), tab === 'promote' && _jsxs(_Fragment, { children: [_jsx("i", { className: "fi-award me-2 ms-n1" }), "Promote"] })] }) }, tab))) }), _jsxs("div", { className: "tab-content", id: "pills-tabContent", children: [_jsx("div", { className: `tab-pane fade ${activeTab === 'home' ? 'show active' : ''}`, id: "pills-home", role: "tabpanel", "aria-labelledby": "pills-home-tab", children: _jsx("section", { className: "position-relative bg-body rounded p-4 mt-4", children: _jsxs("div", { className: "position-relative z-1 pb-md-2 px-md-2", children: [_jsx("h2", { className: "h4 mb-3 mb-sm-4", children: "Basic Information" }), _jsxs("div", { className: "row row-cols-1 row-cols-sm-2 g-3 g-md-4 mb-3 mb-md-4", children: [_jsxs("div", { className: "col", children: [_jsx("label", { htmlFor: "name", className: "form-label", children: "Product name *" }), _jsx("input", { type: "text", className: `form-control form-control-sm ${errors.name ? 'is-invalid' : ''}`, id: "name", name: "name", minLength: 5, placeholder: "Product name", value: formData.basic_info.name, onChange: handleInputChange, onBlur: (e) => validateField('name', e.target.value), required: true }), errors.name && (_jsx("div", { className: "invalid-feedback", children: errors.name }))] }), _jsxs("div", { className: "col", children: [_jsx("label", { className: "form-label", children: "Categories *" }), _jsxs("div", { className: "d-flex flex-wrap gap-2", children: [categories.length > 0 ? (renderCategories(categories)) : (_jsx("div", { className: "text-muted", children: "Loading categories..." })), errors.categories && (_jsx("div", { className: "invalid-feedback d-block", children: errors.categories }))] })] }), _jsxs("div", { className: "col", children: [_jsx("label", { htmlFor: "price", className: "form-label", children: "Price *" }), _jsxs("div", { className: "input-group", children: [_jsx("input", { type: "number", className: `form-control form-control-sm ${errors.price ? 'is-invalid' : ''}`, id: "price", name: "price", value: formData.basic_info.price, onChange: handleInputChange, onBlur: (e) => validateField('price', e.target.value), min: "0.01", step: "0.01", required: true }), errors.price && (_jsx("div", { className: "invalid-feedback", children: errors.price }))] })] }), _jsxs("div", { className: "col", children: [_jsx("label", { htmlFor: "condition", className: "form-label", children: "Condition *" }), _jsxs("select", { className: `form-select form-select-md ${errors.condition ? 'is-invalid' : ''}`, id: "condition", name: "condition", value: formData.basic_info.condition, onChange: handleInputChange, onBlur: (e) => validateField('condition', e.target.value), required: true, children: [_jsx("option", { value: "", children: "Select condition..." }), _jsx("option", { value: "new", children: "Brand New" }), _jsx("option", { value: "used", children: "Used - Like New" }), _jsx("option", { value: "good", children: "Used - Good" }), _jsx("option", { value: "fair", children: "Used - Fair" })] }), errors.condition && (_jsx("div", { className: "invalid-feedback", children: errors.condition }))] })] }), _jsx("label", { htmlFor: "description", className: "form-label fs-6 fw-semibold", children: "Description *" }), _jsx("p", { className: "fs-sm mb-2", children: "Describe your product in detail to attract buyers" }), _jsx("textarea", { className: `form-control form-control-sm ${errors.description ? 'is-invalid' : ''}`, rows: 4, id: "description", name: "description", placeholder: "Describe your product (minimum 50 characters)", minLength: 20, maxLength: 1000, value: formData.basic_info.description, onChange: handleInputChange, onBlur: (e) => validateField('description', e.target.value), required: true }), errors.description && (_jsx("div", { className: "invalid-feedback", children: errors.description })), _jsx("div", { className: "text-end mt-1", children: _jsxs("small", { className: "text-muted", children: [formData.basic_info.description.length, "/1000 characters"] }) })] }) }) }), _jsx("div", { className: `tab-pane fade ${activeTab === 'listing-type' ? 'show active' : ''}`, id: "pills-listing-type", role: "tabpanel", "aria-labelledby": "pills-listing-tab", children: _jsx("section", { className: "container pt-2 mt-1 mt-sm-3 mt-lg-4", children: _jsxs("div", { className: "row", children: [_jsx("h4", { className: "h4 mb-3 mb-sm-4", children: "Select a listing type" }), _jsx("div", { className: "d-flex flex-wrap gap-2", children: ['sell', 'service', 'property', 'vehicle'].map((type) => (_jsxs(React.Fragment, { children: [_jsx("input", { type: "radio", className: "btn-check", name: "listing_type", id: `listing-${type}`, value: type, checked: formData.basic_info.listing_type === type, onChange: handleInputChange }), _jsx("label", { htmlFor: `listing-${type}`, className: "btn btn-sm border-2 btn-outline-secondary", children: _jsxs("div", { className: "d-flex flex-column flex-xxl-row align-items-center", children: [_jsx("div", { className: "d-flex text-dark-emphasis bg-body-tertiary rounded-circle p-4 mb-3 mb-xxl-0", children: _jsx("i", { className: `fi-${type === 'sell' ? 'shopping-bag' : type === 'service' ? 'settings' : type === 'property' ? 'home' : 'car'} fs-2 m-xxl-1` }) }), _jsx("div", { className: "text-center text-xxl-start ps-xxl-3", children: _jsxs("h3", { className: "h6 mb-1", children: [type === 'sell' && 'Sell an item', type === 'service' && 'Offer a service', type === 'property' && 'Sell property', type === 'vehicle' && 'Sell a vehicle'] }) })] }) })] }, type))) })] }) }) }), _jsx("div", { className: `tab-pane fade ${activeTab === 'images' ? 'show active' : ''}`, id: "pills-images", role: "tabpanel", "aria-labelledby": "pills-images-tab", children: _jsx("section", { className: "position-relative bg-body rounded p-4 mt-4", children: _jsxs("div", { className: "position-relative z-1 pb-md-2 px-md-2", children: [_jsxs("div", { className: "d-sm-flex align-items-center justify-content-between mb-3 mb-sm-4", children: [_jsx("h2", { className: "h4 mb-2 mb-sm-0 me-3", children: "Photos & Videos" }), _jsxs("div", { className: "position-relative d-flex", children: [_jsx("i", { className: "fi-info text-info mt-1 me-2" }), _jsx("a", { className: "fs-sm fw-medium stretched-link text-bg-light rounded", href: "#!", children: "Photo guidelines" })] })] }), _jsxs("small", { className: "fs-sm text-warning", children: ["The maximum file size is 8 MB. Formats: jpeg, jpg, png, mp4, mov. Put the main picture first.", mediaFiles.length === 0 && (_jsx(_Fragment, { children: "At least one image is required for your listing" }))] }), _jsx("div", { style: { maxWidth: '852px' }, children: _jsxs("div", { className: "row row-cols-2 row-cols-sm-3 g-2 g-md-4 g-lg-3 g-xl-4", children: [previews.map((preview, index) => (_jsxs("div", { className: "col", children: [_jsxs("div", { className: "hover-effect-opacity position-relative overflow-hidden rounded", children: [index === 0 && (_jsx("span", { className: "badge text-bg-light position-absolute top-0 start-0 z-3 mt-2 ms-2", children: "Cover" })), _jsx("div", { className: "ratio", style: { aspectRatio: '4/3' }, children: preview.type === 'image' ? (_jsx("img", { src: preview.url, alt: `Preview ${index + 1}`, className: "img-fluid object-fit-cover" })) : (_jsx("video", { controls: true, className: "w-100 h-100 object-fit-cover", children: _jsx("source", { src: preview.url, type: mediaFiles[index].type }) })) }), _jsxs("div", { className: "hover-effect-target position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100 opacity-0", children: [_jsx("button", { type: "button", className: "btn btn-icon btn-sm btn-light position-relative z-2", "aria-label": "Remove", onClick: () => removeMedia(index), children: _jsx("i", { className: "ci-trash-empty" }) }), _jsx("span", { className: "position-absolute top-0 start-0 w-100 h-100 bg-black bg-opacity-25 z-1" })] })] }), _jsxs("small", { className: "text-muted d-block text-truncate mt-1", children: [preview.name, " (", Math.round(preview.size / 1024), " KB)"] })] }, index))), _jsx("div", { className: "col", children: _jsx("div", { className: "d-flex align-items-center justify-content-center position-relative h-100 cursor-pointer bg-body-tertiary border border-2 border-dotted rounded p-3", onClick: () => fileInputRef.current.click(), style: { minHeight: '150px' }, children: _jsxs("div", { className: "text-center", children: [_jsx("i", { className: "fi-plus-circle fs-4 text-secondary-emphasis mb-2" }), _jsx("div", { className: "hover-effect-underline stretched-link fs-sm fw-medium", children: "Upload photos/videos" }), _jsx("input", { type: "file", ref: fileInputRef, onChange: handleFileChange, className: "d-none", multiple: true, accept: "image/*,video/*" })] }) }) })] }) }), _jsxs("div", { className: "pt-3 mt-2 mt-md-3", children: [_jsx("label", { htmlFor: "video_link", className: "form-label", children: "Link to YouTube/Vimeo video (optional)" }), _jsxs("div", { className: "position-relative", children: [_jsx("i", { className: "fi-link position-absolute top-50 start-0 translate-middle-y fs-lg ms-3" }), _jsx("input", { type: "url", className: "form-control form-control-sm form-icon-start", id: "video_link", name: "video_link", placeholder: "www.youtube.com/...", value: formData.media.video_link, onChange: handleInputChange })] })] })] }) }) }), _jsx("div", { className: `tab-pane fade ${activeTab === 'contact' ? 'show active' : ''}`, id: "pills-contact", role: "tabpanel", "aria-labelledby": "pills-contact-tab", children: _jsx("section", { className: "position-relative bg-body rounded p-4 mt-4", children: _jsxs("div", { className: "position-relative z-1 pb-md-2 px-md-2", children: [_jsx("h2", { className: "h4 mb-3 mb-sm-4", children: "Contact Information" }), _jsxs("div", { className: "nav nav-pills flex-wrap gap-3 mb-3 mb-sm-4", children: [_jsxs("div", { children: [_jsx("input", { type: "radio", className: "btn-check", id: "delivery", name: "delivery_type", value: "delivery", checked: formData.delivery_options.delivery_type === 'delivery', onChange: handleInputChange }), _jsxs("label", { className: "nav-link", htmlFor: "delivery", children: [_jsx("i", { className: "fi-truck fs-base ms-n1 me-2" }), "Delivery Available"] })] }), _jsxs("div", { children: [_jsx("input", { type: "radio", className: "btn-check", id: "pickup", name: "delivery_type", value: "pickup", checked: formData.delivery_options.delivery_type === 'pickup', onChange: handleInputChange }), _jsxs("label", { className: "nav-link", htmlFor: "pickup", children: [_jsx("i", { className: "fi-map-pin fs-base ms-n1 me-2" }), "Pick-up Only"] })] })] }), _jsxs("div", { className: "row row-cols-1 row-cols-sm-2 g-3 g-md-4", children: [_jsxs("div", { className: "col", children: [_jsx("label", { htmlFor: "first_name", className: "form-label", children: "First name *" }), _jsx("input", { type: "text", className: `form-control form-control-sm ${errors.first_name ? 'is-invalid' : ''}`, id: "first_name", name: "first_name", value: formData.contact_info.first_name, onChange: handleInputChange, onBlur: (e) => validateField('first_name', e.target.value), required: true }), errors.first_name && (_jsx("div", { className: "invalid-feedback", children: errors.first_name }))] }), _jsxs("div", { className: "col", children: [_jsx("label", { htmlFor: "last_name", className: "form-label", children: "Last name *" }), _jsx("input", { type: "text", className: `form-control form-control-sm ${errors.last_name ? 'is-invalid' : ''}`, id: "last_name", name: "last_name", value: formData.contact_info.last_name, onChange: handleInputChange, onBlur: (e) => validateField('last_name', e.target.value), required: true }), errors.last_name && (_jsx("div", { className: "invalid-feedback", children: errors.last_name }))] }), _jsxs("div", { className: "col", children: [_jsx("label", { htmlFor: "email", className: "form-label", children: "Email *" }), _jsx("input", { type: "email", className: `form-control form-control-sm ${errors.email ? 'is-invalid' : ''}`, id: "email", name: "email", value: formData.contact_info.email, onChange: handleInputChange, onBlur: (e) => validateField('email', e.target.value), required: true }), errors.email && (_jsx("div", { className: "invalid-feedback", children: errors.email }))] }), _jsxs("div", { className: "col", children: [_jsx("label", { htmlFor: "phone", className: "form-label", children: "Phone number *" }), _jsx("input", { type: "tel", className: `form-control form-control-sm ${errors.phone ? 'is-invalid' : ''}`, id: "phone", name: "phone", value: formData.contact_info.phone, onChange: handleInputChange, onBlur: (e) => validateField('phone', e.target.value), placeholder: "(___) ___-____", required: true }), errors.phone && (_jsx("div", { className: "invalid-feedback", children: errors.phone }))] })] })] }) }) }), _jsx("div", { className: `tab-pane fade ${activeTab === 'location' ? 'show active' : ''}`, id: "pills-location", role: "tabpanel", "aria-labelledby": "pills-location-tab", children: _jsx("section", { className: "position-relative bg-body rounded p-4 mt-4", children: _jsxs("div", { className: "position-relative z-1 pb-md-2 px-md-2", children: [_jsx("h2", { className: "h4 mb-3 mb-sm-4", children: "Location Details" }), _jsxs("div", { className: "row g-3 g-md-4", children: [_jsx("div", { className: "col-sm-4", children: _jsxs("div", { className: "position-relative", children: [_jsx("label", { className: "form-label", children: "Country *" }), _jsxs("select", { name: "country", className: `form-select ${errors.country ? 'is-invalid' : ''}`, value: formData.location.country, onChange: handleInputChange, onBlur: (e) => validateField('country', e.target.value), required: true, children: [_jsx("option", { value: "", children: "Select country..." }), _jsx("option", { value: "US", children: "United States" }), _jsx("option", { value: "UK", children: "United Kingdom" }), _jsx("option", { value: "CA", children: "Canada" }), _jsx("option", { value: "AU", children: "Australia" }), _jsx("option", { value: "NG", children: "Nigeria" })] }), errors.country && (_jsx("div", { className: "invalid-feedback", children: errors.country }))] }) }), _jsx("div", { className: "col-sm-4", children: _jsxs("div", { className: "position-relative", children: [_jsx("label", { className: "form-label", children: "State/Region *" }), _jsx("input", { type: "text", className: `form-control ${errors.state ? 'is-invalid' : ''}`, name: "state", value: formData.location.state, onChange: handleInputChange, onBlur: (e) => validateField('state', e.target.value), required: true }), errors.state && (_jsx("div", { className: "invalid-feedback", children: errors.state }))] }) }), _jsx("div", { className: "col-sm-4", children: _jsxs("div", { className: "position-relative", children: [_jsx("label", { className: "form-label", children: "City *" }), _jsx("input", { type: "text", className: `form-control ${errors.city ? 'is-invalid' : ''}`, name: "city", value: formData.location.city, onChange: handleInputChange, onBlur: (e) => validateField('city', e.target.value), required: true }), errors.city && (_jsx("div", { className: "invalid-feedback", children: errors.city }))] }) }), _jsx("div", { className: "col-sm-4", children: _jsxs("div", { className: "position-relative", children: [_jsx("label", { htmlFor: "zip_code", className: "form-label", children: "ZIP/Postal code" }), _jsx("input", { type: "text", name: "zip_code", className: "form-control", id: "zip_code", value: formData.location.zip_code, onChange: handleInputChange })] }) }), _jsx("div", { className: "col-sm-8", children: _jsxs("div", { className: "position-relative", children: [_jsx("label", { htmlFor: "address", className: "form-label", children: "Address *" }), _jsx("input", { type: "text", name: "address", className: `form-control ${errors.address ? 'is-invalid' : ''}`, id: "address", value: formData.location.address, onChange: handleInputChange, onBlur: (e) => validateField('address', e.target.value), required: true }), errors.address && (_jsx("div", { className: "invalid-feedback", children: errors.address }))] }) })] })] }) }) }), _jsx("div", { className: `tab-pane fade ${activeTab === 'promote' ? 'show active' : ''}`, id: "pills-promote", role: "tabpanel", "aria-labelledby": "pills-promote-tab", children: _jsx("section", { className: "position-relative bg-body rounded p-4 mt-4", children: _jsxs("div", { className: "position-relative z-1 pb-md-2 px-md-2", children: [_jsx("h2", { className: "h4 mb-3 mb-sm-4", children: "Promotion Options" }), _jsx("p", { className: "mb-4", children: "Boost your listing's visibility with our promotion plans" }), _jsxs("div", { className: "alert alert-info", children: [_jsx("i", { className: "fi-info-circle me-2" }), "Promotion plans help your listing stand out and reach more potential buyers"] }), _jsx("div", { className: "row g-4", children: [
                                                                {
                                                                    id: 'easy-start',
                                                                    name: 'Easy Start',
                                                                    price: 25,
                                                                    duration: '7 days',
                                                                    features: [
                                                                        'Basic exposure for your listing',
                                                                        'Standard placement in search results',
                                                                        'Email support'
                                                                    ]
                                                                },
                                                                {
                                                                    id: 'fast-sale',
                                                                    name: 'Fast Sale',
                                                                    price: 49,
                                                                    duration: '14 days',
                                                                    features: [
                                                                        'Enhanced visibility in search results',
                                                                        'Featured placement in category pages',
                                                                        'Priority email support',
                                                                        'Basic performance analytics'
                                                                    ],
                                                                    recommended: true
                                                                },
                                                                {
                                                                    id: 'turbo-boost',
                                                                    name: 'Turbo Boost',
                                                                    price: 99,
                                                                    duration: '30 days',
                                                                    features: [
                                                                        'Premium placement on homepage',
                                                                        'Maximum visibility in all listings',
                                                                        '24/7 priority support',
                                                                        'Advanced analytics dashboard',
                                                                        'Social media promotion'
                                                                    ]
                                                                }
                                                            ].map((plan) => (_jsx("div", { className: "col-md-4", children: _jsx("div", { className: `card h-100 ${plan.recommended ? 'border-primary border-2' : ''}`, children: _jsxs("div", { className: "card-body", children: [plan.recommended && (_jsx("div", { className: "badge bg-primary text-white position-absolute top-0 start-50 translate-middle mt-2", children: "Recommended" })), _jsx("h3", { className: "h5 text-center", children: plan.name }), _jsxs("div", { className: "text-center my-3", children: [_jsxs("span", { className: "display-5 fw-bold", children: ["$", plan.price] }), _jsxs("span", { className: "text-muted", children: [" / ", plan.duration] })] }), _jsx("ul", { className: "list-unstyled", children: plan.features.map((feature, index) => (_jsxs("li", { className: "mb-2", children: [_jsx("i", { className: "fi-check-circle text-success me-2" }), feature] }, index))) }), _jsxs("div", { className: "text-center mt-3", children: [_jsx("input", { type: "radio", className: "btn-check", name: "promotion_plan", id: plan.id, value: plan.id, checked: formData.promotion.promotion_plan === plan.id, onChange: handleInputChange }), _jsxs("label", { className: `btn btn-outline-${plan.recommended ? 'primary' : 'secondary'} w-100`, htmlFor: plan.id, children: ["Select ", plan.name] })] })] }) }) }, plan.id))) })] }) }) })] }), _jsx(ResponseModal, { show: responseModal.show, message: responseModal.message, success: responseModal.success, onClose: () => setResponseModal({ ...responseModal, show: false }) })] }), _jsxs("footer", { className: "sticky-bottom bg-body pb-3", children: [_jsx("div", { className: "progress rounded-0", role: "progressbar", style: { height: '4px' }, children: _jsx("div", { className: `progress-bar ${uploadProgress > 0 ? 'bg-info' : 'bg-dark'}`, style: { width: `${uploadProgress > 0 ? uploadProgress : progressPercentage()}%` } }) }), _jsxs("div", { className: "container d-flex gap-3 pt-3", children: [_jsxs("button", { type: "button", className: "btn btn-outline-dark animate-slide-start", onClick: handleBack, disabled: activeTab === 'home' || isSubmitting, children: [_jsx("i", { className: "fi-arrow-left animate-target fs-base ms-n1 me-2" }), "Back"] }), _jsx("button", { type: "button", className: "btn btn-dark animate-slide-end ms-auto", onClick: handleNext, disabled: isSubmitting, children: isSubmitting ? (_jsx("div", { className: "spinner-grow spinner-grow-sm", role: "status", children: _jsx("span", { className: "visually-hidden", children: uploadProgress > 0 ? 'Uploading...' : 'Processing...' }) })) : (_jsxs(_Fragment, { children: [activeTab === 'promote' ? 'Publish Listing' : 'Next', _jsx("i", { className: "fi-arrow-right animate-target fs-base ms-2 me-n1" })] })) })] })] })] }) }) }) }));
};
export default PublishPage;
