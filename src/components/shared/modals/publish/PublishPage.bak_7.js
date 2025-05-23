import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import ResponseModal from '../ResponseModal';
import { ProductAxiosService } from '../../../../services/net/ProductAxiosService';
import PropTypes from 'prop-types';
import LoadingSpinner from '../../LoadingSpinner';
const PublishPage = ({ productSlug, editProductData }) => {
    // // Add state for edit mode
    // const [isEditMode, setIsEditMode] = useState(false);
    // // const [mediaFiles, setMediaFiles] = useState<File[]>([]);
    // // const [previews, setPreviews] = useState<string[]>([]);
    // const [removedMediaIds, setRemovedMediaIds] = useState<string[]>([]);
    // const [removedNewFiles, setRemovedNewFiles] = useState<File[]>([]);
    const navigate = useNavigate();
    const fileInputRef = useRef(null);
    const closeButtonRef = useRef(null);
    const [activeTab, setActiveTab] = useState('home');
    const [isEditMode, setIsEditMode] = useState(false);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [mediaFiles, setMediaFiles] = useState([]);
    const [previews, setPreviews] = useState([]);
    const [removedMediaIds, setRemovedMediaIds] = useState([]);
    const [removedNewFiles, setRemovedNewFiles] = useState([]);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [categories, setCategories] = useState([]);
    const [loadingCategories, setLoadingCategories] = useState(true);
    // Add state for location loading
    const [isLocating, setIsLocating] = useState(false);
    // 
    // const initialFormData = {
    // basic_info: {
    //     name: '',
    //     // categories: [],
    //     // categories: new Set(), // Initialize as empty Set,
    //     categories: new Set<string>(),
    //     price: 0.1,
    //     stock: 1,
    //     condition: 'new',
    //     description: '',
    //     listing_type: 'product'
    //     // listing_type: null
    // },
    // delivery_options: {
    //     delivery_type: 'delivery'
    // },
    // contact_info: {
    //     first_name: '',
    //     email: '',
    //     phone: ''
    // },
    // location: {
    //     address: '',
    //     latitude: null,
    //     longitude: null
    // },
    // media: {
    //     images: [],
    //     video_link: '', // Initialize video_link
    //     documents: []
    // },
    // promotion: {
    //     promotion_plan: ''
    // }
    // };
    const initialFormData = {
        basic_info: {
            name: '',
            categories: new Set(),
            price: 0.1,
            stock: 1,
            condition: 'new',
            description: '',
            listing_type: 'product'
        },
        delivery_options: {
            delivery_type: 'delivery'
        },
        contact_info: {
            first_name: '',
            email: '',
            phone: ''
        },
        location: {
            address: '',
            latitude: null,
            longitude: null
        },
        media: {
            video_link: ''
        },
        promotion: {
            promotion_plan: ''
        }
    };
    const [formData, setFormData] = useState(initialFormData);
    const [responseModal, setResponseModal] = useState({
        show: false,
        message: '',
        success: false
    });
    // Add this useEffect for initializing edit data
    useEffect(() => {
        if (productSlug || editProductData) {
            setIsEditMode(true);
            initializeEditData();
        }
    }, [productSlug, editProductData]);
    const initializeEditData = async () => {
        try {
            let productData;
            if (productSlug && !editProductData) {
                // Fetch product data if not passed via props
                const response = await ProductAxiosService.getBySlug(productSlug);
                productData = response.data;
            }
            else if (editProductData) {
                productData = editProductData;
            }
            if (productData) {
                setFormData({
                    basic_info: {
                        name: productData.basic_info?.name || '',
                        price: productData.basic_info?.price || '',
                        description: productData.basic_info?.description || '',
                        categories: new Set(productData.basic_info?.categories || []),
                        // Add other basic_info fields with fallbacks
                    },
                    contact_info: {
                        first_name: productData.contact_info?.name || '',
                        email: productData.contact_info?.email || '',
                        phone: productData.contact_info?.phone || '',
                        // ... other contact fields
                    },
                    location: {
                        address: '',
                        latitude: null,
                        longitude: null
                    },
                    promotion: productData.promotion?.promotion || initialFormData.promotion,
                    delivery_options: productData?.delivery_options || initialFormData.delivery_options,
                    // Repeat for other sections
                });
                // Initialize media previews for existing files
                if (productData.media?.length) {
                    setPreviews(productData.media.map(file => file.url));
                }
            }
            // if (productData) {
            //   // Initialize all form fields including categories
            //   setFormData({
            //     basic_info: {
            //       ...productData.basic_info,
            //       categories: new Set(productData.basic_info.categories)
            //     },
            //     contact_info: productData.contact_info || initialFormData.contact_info,
            //     location: productData.location || initialFormData.location,
            //     media: productData.media || initialFormData.media,
            //      // Initialize media files if needed
            //       // if (productData.media) {
            //       //   setPreviews(productData.media.urls);
            //       //   setMediaFiles(productData.media.files);
            //       // },
            //     promotion: productData.promotion || initialFormData.promotion,
            //     delivery_options: productData.delivery_options || initialFormData.delivery_options
            //   });
            // }
        }
        catch (error) {
            console.error('Error initializing edit data:', error);
            // Handle error appropriately
        }
    };
    // HANDLE CATEGORIES / NESTED ALSO.
    const [selectedCategoryIds, setSelectedCategoryIds] = useState(new Set());
    const [loading, setLoading] = useState(true);
    // Add this useEffect for fetching categories
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await ProductAxiosService.fetchCategories();
                console.log(response); // 26 as of now.
                // const data = await response.json();
                setCategories(response.data.categories);
            }
            catch (error) {
                console.error('Error fetching categories:', error);
            }
            finally {
                setLoading(false);
            }
        };
        fetchCategories();
    }, []);
    // ==================================================
    // const NestedCategoryList = ({ 
    //     categories, 
    //     selectedIds, 
    //     searchQuery, 
    //     onSelect, 
    //     depth = 0 
    // }) => {
    //     const [expandedIds, setExpandedIds] = useState(new Set());
    //     const toggleExpand = useCallback((id) => {
    //         setExpandedIds(prev => {
    //             const newSet = new Set(prev);
    //             if (newSet.has(id)) {
    //                 newSet.delete(id);
    //             } else {
    //                 newSet.add(id);
    //             }
    //             return newSet;
    //         });
    //     }, []);
    //     const filteredCategories = useMemo(() => {
    //         if (!searchQuery) return categories;
    //         const filter = (items) => {
    //             return items.filter(item => {
    //                 const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    //                 const childMatches = item.children?.length ? filter(item.children).length > 0 : false;
    //                 return matchesSearch || childMatches;
    //             }).map(item => {
    //                 if (item.children?.length) {
    //                     return {
    //                         ...item,
    //                         children: filter(item.children)
    //                     };
    //                 }
    //                 return item;
    //             });
    //         };
    //         return filter(categories);
    //     }, [categories, searchQuery]);
    //     // console.log('filteredCategories', filteredCategories);
    //     return (
    //         <ul className="list-unstyled">
    //             {filteredCategories.map(category => (
    //                 <li key={category.id} style={{ paddingLeft: `${depth * 16}px` }}>
    //                     <div className="d-flex align-items-center gap-2 py-1">
    //                         {category.children?.length > 0 && (
    //                             <button
    //                                 type="button"
    //                                 className="btn btn-sm btn-link p-0 border-0 bg-transparent"
    //                                 onClick={() => toggleExpand(category.id)}
    //                                 aria-expanded={expandedIds.has(category.id)}
    //                                 aria-label={expandedIds.has(category.id) ? "Collapse" : "Expand"}
    //                             >
    //                                 <i className={`bi ${expandedIds.has(category.id) ? 'bi-chevron-down' : 'bi-chevron-right'}`} />
    //                             </button>
    //                         )}
    //                         <div className="form-check flex-grow-1">
    //                             <input
    //                                 className="form-check-input"
    //                                 type="checkbox"
    //                                 checked={selectedIds.has(category.id)}
    //                                 onChange={() => onSelect(category.id)}
    //                                 id={`cat-${category.id}`}
    //                             />
    //                             <label
    //                                 className="form-check-label w-100"
    //                                 htmlFor={`cat-${category.id}`}
    //                                 style={{ cursor: 'pointer' }}
    //                             >
    //                                 {category.name}
    //                             </label>
    //                         </div>
    //                     </div>
    //                     {category.children?.length > 0 && expandedIds.has(category.id) && (
    //                         <NestedCategoryList
    //                             categories={category.children}
    //                             selectedIds={selectedIds}
    //                             searchQuery={searchQuery}
    //                             onSelect={onSelect}
    //                             depth={depth + 1}
    //                         />
    //                     )}
    //                 </li>
    //             ))}
    //         </ul>
    //     );
    // };
    // const CategorySelector = ({
    //     categories,
    //     selectedIds,
    //     onChange,
    //     error
    // }) => {
    //     // console.log('categories in selector', categories);
    //     const [isExpanded, setIsExpanded] = useState(false);
    //     const [searchQuery, setSearchQuery] = useState('');
    //     const selectorRef = useRef(null);
    //     // Close dropdown when clicking outside
    //     useEffect(() => {
    //         const handleClickOutside = (event) => {
    //             if (selectorRef.current && !selectorRef.current.contains(event.target)) {
    //                 setIsExpanded(false);
    //             }
    //         };
    //         document.addEventListener('mousedown', handleClickOutside);
    //         return () => {
    //             document.removeEventListener('mousedown', handleClickOutside);
    //         };
    //     }, []);
    //     const toggleExpansion = useCallback(() => {
    //         setIsExpanded(prev => !prev);
    //     }, []);
    //     const handleSelect = useCallback((categoryId) => {
    //         const newSelection = new Set(selectedIds);
    //         if (newSelection.has(categoryId)) {
    //             newSelection.delete(categoryId);
    //         } else {
    //             newSelection.add(categoryId);
    //         }
    //         onChange(newSelection);
    //     }, [selectedIds, onChange]);
    //     // Flatten categories for display in the input
    //     const selectedCategoryNames = useMemo(() => {
    //         const flattenCategories = (items) => {
    //             return items.reduce((acc, item) => {
    //                 if (selectedIds.has(item.id)) {
    //                     acc.push(item.name);
    //                 }
    //                 if (item.children?.length) {
    //                     acc.push(...flattenCategories(item.children));
    //                 }
    //                 return acc;
    //             }, []);
    //         };
    //         return flattenCategories(categories);
    //     }, [categories, selectedIds]);
    //     return (
    //         <div 
    //             className={`category-selector ${error ? 'is-invalid' : ''}`} 
    //             ref={selectorRef}
    //             style={{ position: 'relative' }}
    //         >
    //             <div 
    //                 className="form-control form-control-lg d-flex align-items-center" 
    //                 onClick={toggleExpansion}
    //                 style={{ cursor: 'pointer', minHeight: '3.5rem' }}
    //             >
    //                 <div className="d-flex flex-wrap gap-1 flex-grow-1">
    //                     {selectedCategoryNames.length === 0 ? (
    //                         <span className="text-muted align-self-center">Select categories...</span>
    //                     ) : (
    //                         selectedCategoryNames.map((name, index) => (
    //                             <span key={index} className="badge bg-primary rounded-pill">
    //                                 {name}
    //                             </span>
    //                         ))
    //                     )}
    //                 </div>
    //                 <i className={`bi ${isExpanded ? 'bi-chevron-up' : 'bi-chevron-down'}`} />
    //             </div>
    //             {isExpanded && (
    //                 <div 
    //                     className="category-selector-popover position-absolute w-100 mt-1 shadow" 
    //                     style={{
    //                         zIndex: 1000,
    //                         maxHeight: '400px',
    //                         overflow: 'hidden',
    //                         backgroundColor: 'white'
    //                     }}
    //                 >
    //                     <div className="p-2 border rounded bg-white h-100 d-flex flex-column">
    //                         <input
    //                             type="text"
    //                             className="form-control form-control-lg mb-2"
    //                             placeholder="Search categories..."
    //                             value={searchQuery}
    //                             onChange={(e) => setSearchQuery(e.target.value)}
    //                             onClick={(e) => e.stopPropagation()}
    //                         />
    //                         <div className="category-list flex-grow-1" style={{ overflowY: 'auto' }} >
    //                             {categories.length > 0 ? (
    //                                 <NestedCategoryList
    //                                     categories={categories}
    //                                     selectedIds={selectedIds}
    //                                     searchQuery={searchQuery}
    //                                     onSelect={handleSelect}
    //                                 />
    //                             ) : (
    //                                 <div className="text-center py-3">No categories available</div>
    //                             )}
    //                         </div>
    //                     </div>
    //                 </div>
    //             )}
    //             {error && (
    //                 <div className="invalid-feedback d-block">{error}</div>
    //             )}
    //         </div>
    //     );
    // };
    const NestedCategoryList = ({ categories, selectedIds, onSelect, depth = 0, initiallyExpanded = false }) => {
        const [expandedIds, setExpandedIds] = useState(new Set());
        // Initialize with parent categories expanded
        useEffect(() => {
            if (initiallyExpanded) {
                const parentIds = categories
                    .filter(cat => cat.children?.length > 0)
                    .map(cat => cat.id);
                setExpandedIds(new Set(parentIds));
            }
        }, [categories, initiallyExpanded]);
        const toggleExpand = useCallback((id) => {
            setExpandedIds(prev => {
                const newSet = new Set(prev);
                newSet.has(id) ? newSet.delete(id) : newSet.add(id);
                return newSet;
            });
        }, []);
        return (_jsx("ul", { className: "list-unstyled", style: { paddingLeft: `${depth * 20}px` }, children: categories.map(category => {
                const hasChildren = category.children?.length > 0;
                return (_jsxs("li", { className: "mb-1", children: [_jsxs("div", { className: "d-flex align-items-center", children: [hasChildren && (_jsx("button", { type: "button", className: "btn btn-sm btn-link p-0 me-1", onClick: () => toggleExpand(category.id), "aria-label": expandedIds.has(category.id) ? 'Collapse' : 'Expand', children: _jsx("i", { className: `bi ${expandedIds.has(category.id) ? 'bi-chevron-down' : 'bi-chevron-right'}` }) })), _jsxs("div", { className: "form-check flex-grow-1", children: [_jsx("input", { type: "checkbox", className: "form-check-input", id: `cat-${category.id}`, checked: selectedIds.has(category.id), onChange: () => onSelect(category.id) }), _jsx("label", { className: "form-check-label", htmlFor: `cat-${category.id}`, style: { cursor: 'pointer' }, children: category.name })] })] }), hasChildren && expandedIds.has(category.id) && (_jsx(NestedCategoryList, { categories: category.children, selectedIds: selectedIds, onSelect: onSelect, depth: depth + 1, initiallyExpanded: initiallyExpanded }))] }, category.id));
            }) }));
    };
    const CategorySelector = ({ categories, selectedIds, onChange, error, initiallyExpanded = true }) => {
        const [isOpen, setIsOpen] = useState(false);
        const [searchQuery, setSearchQuery] = useState('');
        const containerRef = React.useRef(null);
        // Close when clicking outside
        useEffect(() => {
            const handleClickOutside = (event) => {
                if (containerRef.current && !containerRef.current.contains(event.target)) {
                    setIsOpen(false);
                }
            };
            document.addEventListener('mousedown', handleClickOutside);
            return () => document.removeEventListener('mousedown', handleClickOutside);
        }, []);
        const filteredCategories = useMemo(() => {
            if (!searchQuery)
                return categories;
            const searchLower = searchQuery.toLowerCase();
            const filter = (items) => {
                return items.filter(item => {
                    const matches = item.name.toLowerCase().includes(searchLower);
                    const childMatches = item.children ? filter(item.children).length > 0 : false;
                    return matches || childMatches;
                }).map(item => ({
                    ...item,
                    children: item.children ? filter(item.children) : undefined
                }));
            };
            return filter(categories);
        }, [categories, searchQuery]);
        const selectedCategoryNames = useMemo(() => {
            const getNames = (items) => {
                return items.reduce((acc, item) => {
                    if (selectedIds.has(item.id))
                        acc.push(item.name);
                    if (item.children)
                        acc.push(...getNames(item.children));
                    return acc;
                }, []);
            };
            return getNames(categories);
        }, [categories, selectedIds]);
        return (_jsxs("div", { className: "position-relative", ref: containerRef, children: [_jsx("div", { className: `form-control ${error ? 'is-invalid' : ''}`, onClick: () => setIsOpen(!isOpen), style: { cursor: 'pointer', minHeight: '38px' }, children: _jsx("div", { className: "d-flex flex-wrap gap-1", children: selectedCategoryNames.length > 0 ? (selectedCategoryNames.map((name, i) => (_jsx("span", { className: "badge bg-primary", children: name }, i)))) : (_jsx("span", { className: "text-muted", children: "Select categories..." })) }) }), isOpen && (_jsx("div", { className: "card position-absolute w-100 mt-1 shadow", style: { zIndex: 1000 }, children: _jsxs("div", { className: "card-body p-2", children: [_jsx("input", { type: "text", className: "form-control mb-2", placeholder: "Search categories...", value: searchQuery, onChange: (e) => setSearchQuery(e.target.value) }), _jsx("div", { style: { maxHeight: '300px', overflowY: 'auto' }, children: _jsx(NestedCategoryList, { categories: filteredCategories, selectedIds: selectedIds, onSelect: (id) => {
                                        const newSet = new Set(selectedIds);
                                        newSet.has(id) ? newSet.delete(id) : newSet.add(id);
                                        onChange(newSet);
                                    }, initiallyExpanded: initiallyExpanded }) })] }) })), error && _jsx("div", { className: "invalid-feedback d-block", children: error })] }));
    };
    // ==================================================
    const CategorySelector1 = ({ categories, selectedIds, onChange, error }) => {
        const [isExpanded, setIsExpanded] = useState(false);
        const [searchQuery, setSearchQuery] = useState('');
        const toggleExpansion = useCallback(() => {
            setIsExpanded(prev => !prev);
        }, []);
        const handleSelect = useCallback((categoryId) => {
            const newSelection = new Set(selectedIds);
            newSelection.has(categoryId)
                ? newSelection.delete(categoryId)
                : newSelection.add(categoryId);
            onChange(newSelection);
        }, [selectedIds, onChange]);
        return (_jsxs("div", { className: `category-selector ${error ? 'is-invalid' : ''}`, style: { position: 'relative' }, children: [_jsx("div", { className: "form-control form-control-lg", onClick: toggleExpansion, children: _jsxs("div", { className: "d-flex justify-content-between align-items-center", children: [_jsx("div", { className: "d-flex flex-wrap gap-1", children: selectedIds.size === 0 ? (_jsx("span", { className: "text-muted", children: "Select categories..." })) : (Array.from(selectedIds).map(id => (_jsx("span", { className: "badge bg-primary rounded-pill", children: categories.find(c => c.id === id)?.name }, id)))) }), _jsx("i", { className: `bi ${isExpanded ? 'bi-chevron-up' : 'bi-chevron-down'}` })] }) }), isExpanded && (_jsx("div", { className: "category-selector-popover position-absolute w-100 mt-1 shadow", style: { zIndex: 1000 }, children: _jsxs("div", { className: "p-2 border rounded bg-white", children: [_jsx("input", { type: "text", className: "form-control form-control-lg mb-2", placeholder: "Search categories...", value: searchQuery, onChange: (e) => setSearchQuery(e.target.value), onClick: (e) => e.stopPropagation() }), _jsx("div", { className: "category-list", style: { maxHeight: '200px', overflowY: 'auto' }, children: _jsx(NestedCategoryList, { categories: categories, selectedIds: selectedIds, searchQuery: searchQuery, onSelect: handleSelect }) })] }) })), error && (_jsx("div", { className: "invalid-feedback d-block", children: error }))] }));
    };
    const CategorySelector2 = ({ categories, selectedIds, onChange, error }) => {
        const [isExpanded, setIsExpanded] = useState(false);
        const [searchQuery, setSearchQuery] = useState('');
        const toggleExpansion = useCallback(() => {
            setIsExpanded(prev => !prev);
        }, []);
        const handleSelect = useCallback((categoryId) => {
            const newSelection = new Set(selectedIds);
            newSelection.has(categoryId)
                ? newSelection.delete(categoryId)
                : newSelection.add(categoryId);
            onChange(newSelection);
        }, [selectedIds, onChange]);
        return (_jsxs("div", { className: `category-selector ${error ? 'is-invalid' : ''}`, style: { position: 'relative' }, children: [_jsx("div", { className: "form-control form-control-lg", onClick: toggleExpansion, children: _jsxs("div", { className: "d-flex justify-content-between align-items-center", children: [_jsx("div", { className: "d-flex flex-wrap gap-1", children: selectedIds.size === 0 ? (_jsx("span", { className: "text-muted", children: "Select categories..." })) : (Array.from(selectedIds).map(id => (_jsx("span", { className: "badge bg-primary rounded-pill", children: categories.find(c => c.id === id)?.name }, id)))) }), _jsx("i", { className: `bi ${isExpanded ? 'bi-chevron-up' : 'bi-chevron-down'}` })] }) }), isExpanded && (_jsx("div", { className: "category-selector-popover position-absolute mt-1 shadow", children: _jsxs("div", { className: "p-2 border rounded bg-white", children: [_jsx("input", { type: "text", className: "form-control form-control-lg mb-2", placeholder: "Search categories...", value: searchQuery, onChange: (e) => setSearchQuery(e.target.value), onClick: (e) => e.stopPropagation() }), _jsx("div", { className: "category-list", style: { maxHeight: '200px', overflowY: 'auto' }, children: _jsx(NestedCategoryList, { categories: categories, selectedIds: selectedIds, searchQuery: searchQuery, onSelect: handleSelect }) })] }) })), error && (_jsx("div", { className: "invalid-feedback d-block", children: error }))] }));
    };
    // export default CategorySelector;
    // PropTypes and default props
    CategorySelector.propTypes = {
        categories: PropTypes.array.isRequired,
        selectedIds: PropTypes.instanceOf(Set).isRequired,
        onChange: PropTypes.func.isRequired,
        error: PropTypes.string,
    };
    const NestedCategoryList1 = ({ categories, selectedIds, searchQuery, onSelect, depth = 0 }) => {
        const [expandedIds, setExpandedIds] = useState(new Set());
        const toggleExpand = useCallback((id) => {
            setExpandedIds(prev => new Set(prev).toggle(id));
        }, []);
        const filteredCategories = useMemo(() => {
            const filter = (items) => items.filter(item => {
                const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
                const childMatches = item.children?.length && filter(item.children).length;
                return matchesSearch || childMatches;
            });
            return filter(categories);
        }, [categories, searchQuery]);
        // 
        // 
        return (_jsx("ul", { className: "list-unstyled", children: filteredCategories.map(category => (_jsxs("li", { style: { paddingLeft: `${depth * 24}px` }, children: [_jsxs("div", { className: "d-flex align-items-center gap-2 py-1", children: [category.children?.length > 0 && (_jsx("button", { className: "btn btn-sm btn-link p-0", onClick: () => toggleExpand(category.id), children: _jsx("i", { className: `bi ${expandedIds.has(category.id) ? 'bi-chevron-down' : 'bi-chevron-right'}` }) })), _jsxs("div", { className: "form-check flex-grow-1", children: [_jsx("input", { className: "form-check-input", type: "checkbox", checked: selectedIds.has(category.id), onChange: () => onSelect(category.id), id: `cat-${category.id}` }), _jsx("label", { className: "form-check-label", htmlFor: `cat-${category.id}`, children: category.name })] })] }), category.children?.length > 0 && expandedIds.has(category.id) && (_jsx(NestedCategoryList, { categories: category.children, selectedIds: selectedIds, searchQuery: searchQuery, onSelect: onSelect, depth: depth + 1 }))] }, category.id))) }));
    };
    const handleMediaUpload = (e) => {
        const files = Array.from(e.target.files || []);
        const newFiles = files.filter(file => !mediaFiles.some(existingFile => existingFile.name === file.name &&
            existingFile.size === file.size));
        setMediaFiles(prev => [...prev, ...newFiles]);
        // Generate previews
        newFiles.forEach(file => {
            const reader = new FileReader();
            reader.onload = (e) => {
                setPreviews(prev => [...prev, e.target?.result]);
            };
            reader.readAsDataURL(file);
        });
    };
    // Geolocation handler
    const handleGetLocation = () => {
        setIsLocating(true);
        if (!navigator.geolocation) {
            alert("Geolocation is not supported by your browser");
            setIsLocating(false);
            return;
        }
        navigator.geolocation.getCurrentPosition(async (position) => {
            try {
                const { latitude, longitude } = position.coords;
                // Update form with coordinates
                setFormData(prev => ({
                    ...prev,
                    location: {
                        ...prev.location,
                        latitude,
                        longitude
                    }
                }));
                // Optional: Reverse geocode to get address
                const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);
                const data = await response.json();
                const address = data.display_name || "Current Location";
                setFormData(prev => ({
                    ...prev,
                    location: {
                        ...prev.location,
                        address
                    }
                }));
            }
            catch (error) {
                console.error("Geocoding error:", error);
            }
            setIsLocating(false);
        }, (error) => {
            alert("Error getting location: " + error.message);
            setIsLocating(false);
        });
    };
    const validateMedia = (media) => {
        const errors = [];
        if (media.video_link && !isValidURL(media.video_link)) {
            errors.push('Invalid video URL format');
        }
        return errors;
    };
    // 2. Modify handleCategoryChange to update basic_info
    const handleCategoryChange = (newCategories) => {
        setFormData(prev => ({
            ...prev,
            basic_info: {
                ...prev.basic_info,
                categories: newCategories
            }
        }));
        // Validate categories
        validateField('categories', newCategories);
    };
    // Validation rules for each field
    // const validateRules = {
    //     name: {
    //         required: true,
    //         minLength: 2,
    //         maxLength: 100
    //     },
    //     categories: {
    //         required: true
    //     },
    //     price: {
    //         required: true,
    //         min: 0.01
    //     },
    //     condition: {
    //         required: true
    //     },
    //     description: {
    //         required: true,
    //         minLength: 10,
    //         maxLength: 1000
    //     },
    //     first_name: {
    //         required: false,
    //         minLength: 2
    //     },
    //     email: {
    //         required: false,
    //         pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    //     },
    //     phone: {
    //         required: false,
    //         pattern: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
    //     },
    //     address: {
    //         required: false
    //     }
    // };
    const validateRules = {
        name: {
            required: true,
            minLength: 2,
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
            minLength: 10,
            maxLength: 1000
        },
        first_name: {
            required: false, // Changed to false
            minLength: 2
        },
        email: {
            required: false, // Changed to false
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        },
        phone: {
            required: false, // Changed to false
            pattern: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
        },
        address: {
            required: false // Changed to false
        }
    };
    // const validateField = (name, value) => {
    //     const rules = validateRules[name];
    //     if (!rules) return true; // No validation rules for this field
    //     const newErrors = { ...errors };
    //     // Skip validation if the field is empty and not required
    //     if (rules.required === false && !value) {
    //         delete newErrors[name]; // Clear any previous error
    //         setErrors(newErrors);
    //         return true; // No error
    //     }
    //     // Existing validation logic
    //     if (rules.pattern && value && !rules.pattern.test(value)) {
    //         newErrors[name] = 'Invalid format';
    //     } else {
    //         delete newErrors[name];
    //     }
    //     setErrors(newErrors);
    //     return Object.keys(newErrors).length === 0;
    // };
    // Validate form fields
    // const validateField = (name, value) => {
    //     const rules = validateRules[name];
    //     if (!rules) return true; // No validation rules for this field
    //     const newErrors = { ...errors };
    //         // Location validation
    //         if (name === 'address' && value ) {
    //             if (!value.trim()) {
    //                 newErrors.address = 'Invalid Address Format.';
    //             } else {
    //                 delete newErrors.address;
    //             }
    //         }
    //         if (name === 'latitude' && value) {
    //             if (isNaN(value) || value < -90 || value > 90) {
    //                 newErrors.latitude = 'Invalid latitude (-90 to 90)';
    //             }
    //             //  else {
    //             //     delete newErrors.latitude;
    //             // }
    //         }
    //         if (name === 'longitude' && value) {
    //             if (isNaN(value) || value < -180 || value > 180) {
    //                 newErrors.longitude = 'Invalid longitude (-180 to 180)';
    //             } else {
    //                 delete newErrors.longitude;
    //             }
    //         }
    //     // 
    //     if (name === 'categories') {
    //         if ((value as Set<string>).size === 0) {
    //             newErrors.categories = 'At least one category must be selected';
    //         } else {
    //             delete newErrors.categories;
    //         }
    //     }
    //     else if (rules.required && !value) {
    //         newErrors[name] = 'This field is required';
    //     } else if (rules.minLength && value.length < rules.minLength) {
    //         newErrors[name] = `Minimum ${rules.minLength} characters required`;
    //     } else if (rules.maxLength && value.length > rules.maxLength) {
    //         newErrors[name] = `Maximum ${rules.maxLength} characters allowed`;
    //     } else if (rules.min && parseFloat(value) < rules.min) {
    //         newErrors[name] = `Minimum value is ${rules.min}`;
    //     } else if (rules.pattern && !rules.pattern.test(value)) {
    //         newErrors[name] = 'Invalid format';
    //     } else {
    //         delete newErrors[name];
    //     }
    //     setErrors(newErrors);
    //     return Object.keys(newErrors).length === 0;
    // };
    // Validate form fields
    const validateField = (name, value) => {
        const rules = validateRules[name];
        if (!rules)
            return true; // No validation rules for this field
        const newErrors = { ...errors };
        // Skip validation if the field is empty and not required
        if (rules.required === false && !value) {
            delete newErrors[name]; // Clear any previous error
            setErrors(newErrors);
            return true; // No error
        }
        // Location validation
        if (name === 'address' && value) {
            if (!value.trim()) {
                newErrors.address = 'Invalid Address Format.';
            }
            else {
                delete newErrors.address;
            }
        }
        // Latitude validation
        if (name === 'latitude' && value) {
            if (isNaN(value) || value < -90 || value > 90) {
                newErrors.latitude = 'Invalid latitude (-90 to 90)';
            }
            else {
                delete newErrors.latitude;
            }
        }
        // Longitude validation
        if (name === 'longitude' && value) {
            if (isNaN(value) || value < -180 || value > 180) {
                newErrors.longitude = 'Invalid longitude (-180 to 180)';
            }
            else {
                delete newErrors.longitude;
            }
        }
        // Categories validation
        if (name === 'categories') {
            if (value.size === 0) {
                newErrors.categories = 'At least one category must be selected';
            }
            else {
                delete newErrors.categories;
            }
        }
        // Email validation
        else if (name === 'email') {
            if (rules.required && !value) {
                newErrors.email = 'This field is required';
            }
            else if (rules.pattern && value && !rules.pattern.test(value)) {
                newErrors.email = 'Invalid format';
            }
            else {
                delete newErrors.email;
            }
        }
        // General validation for other fields
        else if (rules.required && !value) {
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
                const requiredFields = ['name', 'categories', 'price', 'description'];
                return requiredFields.every(field => {
                    const value = formData.basic_info[field];
                    return validateField(field, value) && value;
                });
            },
            contact: () => {
                const requiredFields = ['email', 'phone'];
                return requiredFields.every(field => {
                    const value = formData.contact_info[field];
                    return validateField(field, value);
                });
            },
            location: () => {
                const hasAddress = !!formData.location.address?.trim();
                const hasCoords = formData.location.latitude && formData.location.longitude;
                // Validate at least one exists
                if (!hasAddress && !hasCoords) {
                    setErrors(prev => ({ ...prev, location: 'Address or location coordinates are required' }));
                    return true; // Allow submission if both are empty
                }
                // Validate coordinate format if present
                let valid = true;
                if (formData.location.latitude) {
                    const lat = parseFloat(formData.location.latitude);
                    if (isNaN(lat) || lat < -90 || lat > 90) {
                        setErrors(prev => ({ ...prev, latitude: 'Invalid latitude (-90 to 90)' }));
                        valid = false;
                    }
                }
                if (formData.location.longitude) {
                    const lng = parseFloat(formData.location.longitude);
                    if (isNaN(lng) || lng < -180 || lng > 180) {
                        setErrors(prev => ({ ...prev, longitude: 'Invalid longitude (-180 to 180)' }));
                        valid = false;
                    }
                }
                return valid;
            },
            // contact: () => {
            //     const requiredFields = ['email', 'phone'];
            //     return requiredFields.every(field => {
            //         const value = formData.contact_info[field];
            //         return validateField(field, value) && value;
            //     });
            // },
            // location: () => {
            //     // const requiredFields = ['country', 'state', 'city', 'address'];
            //     const requiredFields = ['country', 'state', 'city', 'address'];
            //     return requiredFields.every(field => {
            //         const value = formData.location[field];
            //         return validateField(field, value) && value;
            //     });
            // },
            // 
            // location: () => {
            //     // Required fields based on new structure
            //     const requiredFields = ['address'];
            //     const validations = [
            //         // Validate required address
            //         requiredFields.every(field => {
            //             const value = formData.location[field];
            //             return validateField(field, value) && value;
            //         }),
            //         // Validate latitude format if present
            //         formData.location.latitude ? 
            //             !isNaN(formData.location.latitude) && 
            //             formData.location.latitude >= -90 && 
            //             formData.location.latitude <= 90 : true,
            //         // Validate longitude format if present
            //         formData.location.longitude ? 
            //             !isNaN(formData.location.longitude) && 
            //             formData.location.longitude >= -180 && 
            //             formData.location.longitude <= 180 : true
            //     ];
            //     return validations.every(v => v === true);
            // },
            // location: () => {
            //     const hasAddress = !!formData.location.address?.trim();
            //     const hasCoords = formData.location.latitude && formData.location.longitude;
            //     // Validate at least one exists
            //     if (!hasAddress && !hasCoords) {
            //         setErrors(prev => ({ ...prev, location: 'Address or location coordinates are required' }));
            //         return false;
            //     }
            //     // Validate coordinate format if present
            //     let valid = true;
            //     if (formData.location.latitude) {
            //         const lat = parseFloat(formData.location.latitude);
            //         if (isNaN(lat) || lat < -90 || lat > 90) {
            //         setErrors(prev => ({ ...prev, latitude: 'Invalid latitude (-90 to 90)' }));
            //         valid = false;
            //         }
            //     }
            //     if (formData.location.longitude) {
            //         const lng = parseFloat(formData.location.longitude);
            //         if (isNaN(lng) || lng < -180 || lng > 180) {
            //         setErrors(prev => ({ ...prev, longitude: 'Invalid longitude (-180 to 180)' }));
            //         valid = false;
            //         }
            //     }
            //     return valid;
            //     },
            promote: () => true, // No validation required for promotion tab
            'listing-type': () => true, // No validation required for listing type
            images: () => mediaFiles.length > 0 // At least one media file required
        };
        const isValid = tabValidations[activeTab]();
        if (!isValid) {
            setResponseModal({
                show: true,
                message: 'Please fill in all required fields(*) correctly',
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
        // if (name in formData.listing_type) formSection = 'listing_type'; // cannot use the in operator here.
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
    // const prepareSubmissionData = () => {
    //   const submissionData = new FormData();
    //   // Append nested form data
    //   // Object.entries(formData).forEach(([section, data]) => {
    //   //   Object.entries(data).forEach(([key, value]) => {
    //   //     submissionData.append(`${section}[${key}]`, value);
    //   //   });
    //   // });
    //   // // Append all form data including nested basic_info
    //   // Object.entries(formData).forEach(([section, data]) => {
    //   //   Object.entries(data).forEach(([key, value]) => {
    //   //     // Handle Set conversion for categories
    //   //     const finalValue = key === 'categories' 
    //   //       ? JSON.stringify(Array.from(value as Set<string>))
    //   //       : value;
    //   //     submissionData.append(`${section}[${key}]`, finalValue);
    //   //   });
    //   // });
    //   // // Append media files with correct field name
    //   // mediaFiles.forEach((file, index) => {
    //   //   submissionData.append("media[]", file); // Key must match backend expectation
    //   //   submissionData.append(`mediaMetadata[${index}][isCover]`, index === 0 ? "true" : "false");
    //   // });
    //    // Append modified fields
    //    Object.entries(formData).forEach(([section, data]) => {
    //     Object.entries(data).forEach(([key, value]) => {
    //       if (key === 'categories') {
    //         submissionData.append(`${section}[${key}]`, JSON.stringify(Array.from(value)));
    //       } else if (section === 'media' && key === 'files') {
    //         // Handle file updates
    //       } else {
    //         submissionData.append(`${section}[${key}]`, value);
    //       }
    //     });
    //   });
    //   // // Append deletion flags for removed files
    //   // removedFiles.forEach(fileId => {
    //   //   submissionData.append('removed_files[]', fileId);
    //   // });
    //   // Debugging: Log actual FormData contents
    //   console.log("--- FormData Entries ---");
    //   for (const [key, value] of submissionData.entries()) {
    //     console.log(key, value);
    //   }
    //   return submissionData;
    // };
    const prepareSubmissionData = () => {
        const submissionData = new FormData();
        // Process form data sections
        Object.entries(formData).forEach(([section, data]) => {
            Object.entries(data).forEach(([key, value]) => {
                // Skip unmodified fields in edit mode
                if (isEditMode && !isFieldModified(key, section))
                    return;
                // Handle special data types
                const processedValue = processFormValue(key, value);
                submissionData.append(`${section}[${key}]`, processedValue);
            });
        });
        // Handle media files
        processMediaFiles(submissionData);
        // Add version control for optimistic locking
        if (isEditMode) {
            submissionData.append('version', formData.version.toString());
        }
        // Debugging
        logFormData(submissionData);
        return submissionData;
    };
    // Helper functions
    const processFormValue = (key, value) => {
        // Convert Sets to JSON arrays
        if (value instanceof Set) {
            return JSON.stringify(Array.from(value));
        }
        // Convert Date objects to ISO strings
        if (value instanceof Date) {
            return value.toISOString();
        }
        // Handle boolean values
        if (typeof value === 'boolean') {
            return value ? 'true' : 'false';
        }
        // Convert numbers to strings
        if (typeof value === 'number') {
            return value.toString();
        }
        return value;
    };
    // const processMediaFiles = (submissionData: FormData) => {
    //   // Append new media files
    //   mediaFiles.forEach((file, index) => {
    //     if (file instanceof File) {
    //       submissionData.append('media[]', file);
    //       submissionData.append(`media[${index}][isCover]`, index === 0 ? 'true' : 'false');
    //     }
    //   });
    //   // Append removed file IDs
    //   removedFiles.forEach(fileId => {
    //     submissionData.append('removed_files[]', fileId);
    //   });
    // };
    // 
    // Add these state definitions at the component level
    // const [removedMediaIds, setRemovedMediaIds] = useState<string[]>([]);
    // const [removedNewFiles, setRemovedNewFiles] = useState<File[]>([]);
    // Revised media processing function
    const processMediaFiles = (submissionData) => {
        // 
        // Append valid removed media IDs
        // removedMediaIds.forEach(id => {
        //     if (typeof id === 'string' && id.startsWith('media_')) {
        //         submissionData.append('removed_media_ids[]', id);
        //     }
        // });
        // Append new media files (excluding removed ones)
        mediaFiles
            .filter(file => !removedNewFiles.includes(file))
            .forEach((file, index) => {
            submissionData.append('media[]', file);
            submissionData.append(`media[${index}][isCover]`, index === 0 ? 'true' : 'false');
            // submissionData.append('images[]', file)
            // submissionData.append(`images[${index}][isCover]`, index === 0 ? 'true' : 'false');
        });
        // Append removed existing media IDs
        removedMediaIds.forEach(id => {
            submissionData.append('removed_media_ids[]', id);
        });
    };
    // Update your removal handler
    const handleRemoveMedia = (index, id) => {
        if (id) {
            // Existing file from server
            setRemovedMediaIds(prev => [...prev, id]);
        }
        else {
            // New file not yet uploaded
            setRemovedNewFiles(prev => [...prev, mediaFiles[index]]);
        }
        // Update UI state
        setMediaFiles(prev => prev.filter((_, i) => i !== index));
        setPreviews(prev => prev.filter((_, i) => i !== index));
    };
    const isFieldModified = (key, section) => {
        // Implement field modification check logic for edit mode
        if (!initialFormData[section])
            return true;
        return JSON.stringify(formData[section][key]) !==
            JSON.stringify(initialFormData[section][key]);
    };
    const logFormData = (submissionData) => {
        if (process.env.NODE_ENV === 'development') {
            console.log('--- FormData Entries ---');
            for (const [key, value] of submissionData.entries()) {
                console.log(key, value instanceof File ? `${value.name} (File)` : value);
            }
        }
    };
    const [showModal, setShowModal] = useState(false);
    // const closeButtonRef = useRef(null);
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            if (!validateCurrentTab()) {
                setIsSubmitting(false);
                return;
            }
            const submissionData = prepareSubmissionData();
            // Enhanced FormData logging
            //   console.log("--- Submission Data Structure ---");
            //   console.log("FormData Entries:");
            //   for (const [key, value] of submissionData.entries()) {
            //     console.log(`${key}:`, value);
            //   }
            // Execute request
            const response = isEditMode && productSlug
                ? await ProductAxiosService.updateProduct(productSlug, submissionData)
                : await ProductAxiosService.createProduct(submissionData);
            // Full response logging
            console.log("--- API Response ---");
            console.log("Full response object:", response);
            console.log("Response status:", response.status);
            console.log("Response headers:", response.headers);
            console.log("Response data:", response.data);
            console.log("Response data.error:", response.data.error);
            if (response.data.success) {
                // Handle array messages
                const successMessage = Array.isArray(response.data.message)
                    ? response.data.message[0]
                    : response.data.message;
                setResponseModal({
                    show: true,
                    message: successMessage || 'Product published successfully! Redirecting...',
                    success: true
                });
                setTimeout(() => {
                    // Reset logic...
                    //   document.querySelector('.btn-close').click()
                    closeButtonRef.current.click();
                    navigate(`products/${response.data.slug}`);
                    // alert(true)
                }, 2000);
            }
            else {
                // Log detailed error information
                // console.error("API Error Response:", {
                //   status: response.status,
                //   headers: response.headers,
                //   data: response.data
                // });
                // Handle array errors
                const errorMessage = Array.isArray(response.data.error)
                    ? response.data.error[0]
                    : response.data.error || response.data.message;
                throw new Error(errorMessage || 'Submission failed');
            }
        }
        catch (error) {
            // Enhanced error logging
            //   console.error("Submission Error:", {
            //     name: error.name,
            //     message: error.message,
            //     stack: error.stack,
            //     response: error.response ? {
            //       status: error.response.status,
            //       data: error.response.data
            //     } : null
            //   });
            // Extract error message from different error formats
            const errorMessage = (error?.response?.data?.error ||
                error?.response?.data?.message ||
                error?.message ||
                'Failed to publish product. Please try again.');
            // Handle array error messages
            const displayMessage = Array.isArray(errorMessage)
                ? errorMessage[0]
                : errorMessage;
            setResponseModal({
                show: true,
                message: displayMessage,
                success: false
            });
        }
        finally {
            setIsSubmitting(false);
        }
    };
    // 6. Update form reset
    const resetForm = () => {
        setFormData({
            ...initialFormData,
            basic_info: {
                ...initialFormData.basic_info,
                categories: new Set()
            }
        });
    };
    // 7. Update edit initialization
    useEffect(() => {
        if (editProductData) {
            setFormData(prev => ({
                ...prev,
                basic_info: {
                    ...prev.basic_info,
                    categories: new Set(editProductData.basic_info.categories)
                }
            }));
        }
    }, [editProductData]);
    // 
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
    return (_jsx("section", { id: "PublishPage", className: "modal fade", children: _jsx("div", { className: "modal-dialog modal-xl w-100", role: "document", children: _jsxs("div", { className: "modal-content", children: [_jsxs("div", { className: "modal-header", children: [_jsx("ul", { className: "nav nav-pills - flex-nowrap gap-2 text-nowrap card-header modal-title", role: "tablist", children: ['home', 'listing-type', 'images', 'contact', 'location', 'promote'].map((tab) => (_jsx("li", { className: "nav-item", role: "presentation", children: _jsxs("button", { type: "button", className: `nav-link ${activeTab === tab ? 'active' : ''}`, onClick: () => setActiveTab(tab), children: [tab === 'home' && _jsxs(_Fragment, { children: [_jsx("i", { className: "fi-home me-2 ms-n1" }), "Basic Info"] }), tab === 'listing-type' && _jsxs(_Fragment, { children: [_jsx("i", { className: "fi-list me-2 ms-n1" }), "Type"] }), tab === 'images' && _jsxs(_Fragment, { children: [_jsx("i", { className: "fi-image me-2 ms-n1" }), "Media"] }), tab === 'contact' && _jsxs(_Fragment, { children: [_jsx("i", { className: "fi-user me-2 ms-n1" }), "Contact"] }), tab === 'location' && _jsxs(_Fragment, { children: [_jsx("i", { className: "fi-map-pin me-2 ms-n1" }), "Location"] }), tab === 'promote' && _jsxs(_Fragment, { children: [_jsx("i", { className: "fi-award me-2 ms-n1" }), "Promote"] })] }) }, tab))) }), _jsx("button", { className: "btn-close fs-4", type: "button", "data-bs-dismiss": "modal", "aria-label": "Close", onClick: handleClose, ref: closeButtonRef })] }), _jsxs("div", { className: " modal-body p-0", style: { maxHeight: "800px", overflowY: "auto" }, children: [_jsxs("div", { className: "tab-content", id: "pills-tabContent", children: [_jsx("div", { className: `tab-pane fade ${activeTab === 'home' ? 'show active' : ''}`, id: "pills-home", role: "tabpanel", "aria-labelledby": "pills-home-tab", style: { height: "100%", overflowY: "auto" }, children: _jsx("section", { className: "position-relative bg-body rounded p-2 m-2", children: _jsxs("div", { className: "position-relative z-1", children: [_jsx("h2", { className: "h4 mb-3 mb-sm-4", children: "Basic Information" }), _jsxs("div", { className: "row row-cols-1 row-cols-sm-2 g-3 g-md-4 mb-3 mb-md-4", children: [_jsxs("div", { className: "col", children: [_jsx("label", { htmlFor: "name", className: "form-label", children: "Product name *" }), _jsx("input", { type: "text", className: `form-control form-control-lg ${errors.name ? 'is-invalid' : ''}`, id: "name", name: "name", minLength: 5, placeholder: "Product name", value: formData.basic_info.name, onChange: handleInputChange, onBlur: (e) => validateField('name', e.target.value), required: true }), errors.name && (_jsx("div", { className: "invalid-feedback", children: errors.name }))] }), _jsxs("div", { className: "col", children: [_jsx("label", { className: "form-label", children: "Categories *" }), Array.isArray(categories) && categories.length > 0 ? (_jsx(CategorySelector, { categories: categories, selectedIds: formData.basic_info.categories, onChange: handleCategoryChange, error: errors.categories })) : (_jsxs("div", { className: "text-muted", children: [_jsx(LoadingSpinner, {}), categories === null ? '...' : 'Fetching categories...'] }))] }), _jsxs("div", { className: "col", children: [_jsx("label", { htmlFor: "price", className: "form-label", children: "Price *" }), _jsxs("div", { className: "input-group", children: [_jsx("input", { type: "number", className: `form-control form-control-lg ${errors.price ? 'is-invalid' : ''}`, id: "price", name: "price", value: formData.basic_info.price, onChange: handleInputChange, onBlur: (e) => validateField('price', e.target.value), min: "0.01", step: "0.01", required: true }), errors.price && (_jsx("div", { className: "invalid-feedback", children: errors.price }))] })] }), _jsxs("div", { className: "col", children: [_jsx("label", { htmlFor: "condition", className: "form-label", children: "Condition *" }), _jsxs("select", { className: `form-select form-select-lg ${errors.condition ? 'is-invalid' : ''}`, id: "condition", name: "condition", value: formData.basic_info.condition, onChange: handleInputChange, onBlur: (e) => validateField('condition', e.target.value), required: true, children: [_jsx("option", { value: "", children: "Select condition..." }), _jsx("option", { value: "new", children: "Brand New" }), _jsx("option", { value: "used", children: "Used - Like New" }), _jsx("option", { value: "good", children: "Used - Good" }), _jsx("option", { value: "fair", children: "Used - Fair" })] }), errors.condition && (_jsx("div", { className: "invalid-feedback", children: errors.condition }))] })] }), _jsx("label", { htmlFor: "description", className: "form-label fs-6 fw-semibold", children: "Description *" }), _jsx("p", { className: "fs-sm mb-2", children: "Describe your product in detail to attract buyers" }), _jsx("textarea", { className: `form-control form-control-lg ${errors.description ? 'is-invalid' : ''}`, rows: 4, id: "description", name: "description", placeholder: "Describe your product (minimum 10 characters)", minLength: 10, maxLength: 1000, value: formData.basic_info.description, onChange: handleInputChange, onBlur: (e) => validateField('description', e.target.value), required: true }), errors.description && (_jsx("div", { className: "invalid-feedback", children: errors.description })), _jsx("div", { className: "text-end mt-1", children: _jsxs("small", { className: "text-muted", children: [formData.basic_info.description.length, "/1000 characters"] }) })] }) }) }), _jsx("div", { className: `tab-pane fade ${activeTab === 'listing-type' ? 'show active' : ''}`, id: "pills-listing-type", role: "tabpanel", "aria-labelledby": "pills-listing-tab", children: _jsx("section", { className: "position-relative bg-body rounded p-2 m-2", children: _jsxs("div", { className: "position-relative z-1 p-2 m-2", children: [_jsx("h4", { className: "h4 mb-3 mb-sm-4", children: "Select a listing type" }), _jsx("div", { className: "nav - flex-nowrap gap-2 text-nowrap", children: ['product', 'service', 'property', 'rental', 'vehicle'].map((type) => (_jsxs(React.Fragment, { children: [_jsx("input", { type: "radio", className: "btn-check", name: "listing_type", id: `listing-${type}`, value: type, checked: formData.basic_info.listing_type === type, onChange: handleInputChange }), _jsx("label", { htmlFor: `listing-${type}`, className: "btn btn-outline-dark rounded-pill", children: _jsxs("div", { className: "d-flex flex-column flex-xxl-row align-items-center m-1", children: [_jsx("div", { className: "d-flex text-dark-emphasis bg-body-tertiary rounded-circle", children: _jsx("i", { className: `fi-${type === 'product' ? 'shopping-bag' : type === 'service' ? 'settings' : type === 'property' ? 'home' : 'car'} fs-2 m-xxl-1` }) }), _jsxs("div", { className: "text-center", children: [type === 'product' && 'Sell item', type === 'rental' && 'Rent', type === 'service' && 'Offer service', type === 'property' && 'Sell property', type === 'vehicle' && 'Sell a vehicle'] })] }) })] }, type))) })] }) }) }), _jsx("div", { className: `tab-pane fade ${activeTab === 'images' ? 'show active' : ''}`, id: "pills-images", role: "tabpanel", "aria-labelledby": "pills-images-tab", children: _jsx("section", { className: "position-relative bg-body rounded p-2 m-2", children: _jsxs("div", { className: "position-relative z-1 p-2 m-2", children: [_jsxs("div", { className: "d-sm-flex align-items-center justify-content-between mb-3 mb-sm-4", children: [_jsx("h2", { className: "h4 mb-2 mb-sm-0 me-3", children: "Photos & Videos" }), _jsx("div", { className: "position-relative d-flex", children: _jsx("i", { className: "fi-info text-info mt-1 me-2" }) })] }), _jsxs("small", { className: "fs-sm text-warning mb-3", children: ["The maximum file size is 8 MB. Formats: jpeg, jpg, png, mp4, mov. Put the main picture first.", mediaFiles.length === 0 && (_jsx(_Fragment, { children: "At least one image is required for your listing" }))] }), _jsx("div", { style: { maxWidth: '852px' }, children: _jsxs("div", { className: "row row-cols-2 row-cols-sm-3 g-2 g-md-4 g-lg-3 g-xl-4", children: [previews.map((preview, index) => (_jsxs("div", { className: "col", children: [_jsxs("div", { className: "hover-effect-opacity position-relative overflow-hidden rounded", children: [index === 0 && (_jsx("span", { className: "badge text-bg-light position-absolute top-0 start-0 z-3 mt-2 ms-2", children: "Cover" })), _jsx("div", { className: "ratio", style: { aspectRatio: '4/3' }, children: preview.type === 'image' ? (_jsx("img", { src: preview.url, alt: `Preview ${index + 1}`, className: "img-fluid object-fit-cover" })) : (_jsx("video", { controls: true, className: "w-100 h-100 object-fit-cover", children: _jsx("source", { src: preview.url, type: mediaFiles[index].type }) })) }), _jsxs("div", { className: "hover-effect-target position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100 opacity-0", children: [_jsx("button", { type: "button", className: "btn btn-icon btn-sm btn-light position-relative z-2", "aria-label": "Remove", onClick: () => removeMedia(index), children: _jsx("i", { className: "ci-trash-empty" }) }), _jsx("span", { className: "position-absolute top-0 start-0 w-100 h-100 bg-black bg-opacity-25 z-1" })] })] }), _jsxs("small", { className: "text-muted d-block text-truncate mt-1", children: [preview.name, " (", Math.round(preview.size / 1024), " KB)"] })] }, index))), _jsx("div", { className: "col", children: _jsx("div", { className: "d-flex align-items-center justify-content-center position-relative h-100 cursor-pointer bg-body-tertiary border border-2 border-dotted rounded p-3", onClick: () => fileInputRef.current.click(), style: { minHeight: '150px' }, children: _jsxs("div", { className: "text-center", children: [_jsx("i", { className: "fi-plus-circle fs-4 text-secondary-emphasis mb-2" }), _jsx("div", { className: "hover-effect-underline stretched-link fs-sm fw-medium", children: "Upload photos/videos" }), _jsx("input", { type: "file", ref: fileInputRef, onChange: handleFileChange, className: "d-none", multiple: true, accept: "image/*,video/*" })] }) }) })] }) }), _jsxs("div", { className: "pt-3 mt-2 mt-md-3", children: [_jsx("label", { htmlFor: "video_link", className: "form-label", children: "Link to YouTube/Vimeo video (optional)" }), _jsxs("div", { className: "position-relative", children: [_jsx("i", { className: "fi-link position-absolute top-50 start-0 translate-middle-y fs-lg ms-3" }), _jsx("input", { type: "url", className: "form-control", 
                                                                        // value={formData.media.video_link || ''}
                                                                        value: formData.media?.video_link || '', onChange: (e) => setFormData(prev => ({
                                                                            ...prev,
                                                                            media: {
                                                                                ...prev.media,
                                                                                video_link: e.target.value
                                                                            }
                                                                        })), placeholder: "YouTube/Vimeo link" })] })] })] }) }) }), _jsx("div", { className: `tab-pane fade ${activeTab === 'contact' ? 'show active' : ''}`, id: "pills-contact", role: "tabpanel", "aria-labelledby": "pills-contact-tab", children: _jsx("section", { className: "position-relative bg-body rounded p-2 m-2", children: _jsxs("div", { className: "position-relative z-1 p-2 m-2", children: [_jsx("h2", { className: "h4 mb-3 mb-sm-4", children: "Contact Information" }), _jsxs("div", { className: "nav nav-pills flex-wrap gap-3", children: [_jsxs("div", { children: [_jsx("input", { type: "radio", className: "btn-check", id: "delivery", name: "delivery_type", value: "delivery", checked: formData.delivery_options.delivery_type === 'delivery', onChange: handleInputChange }), _jsxs("label", { className: "nav-link", htmlFor: "delivery", children: [_jsx("i", { className: "fi-truck fs-base ms-n1 me-2" }), "Delivery Available"] })] }), _jsxs("div", { children: [_jsx("input", { type: "radio", className: "btn-check", id: "pickup", name: "delivery_type", value: "pickup", checked: formData.delivery_options.delivery_type === 'pickup', onChange: handleInputChange }), _jsxs("label", { className: "nav-link", htmlFor: "pickup", children: [_jsx("i", { className: "fi-map-pin fs-base ms-n1 me-2" }), "Pick-up Only"] })] })] }), _jsxs("div", { className: "row row-cols-1 row-cols-sm-2 g-3 g-md-2", children: [_jsxs("div", { className: "col", children: [_jsx("label", { htmlFor: "email", className: "form-label", children: "Email *" }), _jsx("input", { type: "email", className: `form-control form-control-lg ${errors.email ? 'is-invalid' : ''}`, id: "email", name: "email", value: formData.contact_info.email || '', onChange: handleInputChange, onBlur: (e) => validateField('email', e.target.value), required: true }), errors.email && (_jsx("div", { className: "invalid-feedback", children: errors.email }))] }), _jsxs("div", { className: "col", children: [_jsx("label", { htmlFor: "phone", className: "form-label", children: "Phone number *" }), _jsx("input", { type: "tel", className: `form-control form-control-lg ${errors.phone ? 'is-invalid' : ''}`, id: "phone", name: "phone", value: formData.contact_info.phone, onChange: handleInputChange, onBlur: (e) => validateField('phone', e.target.value || ''), placeholder: "(___) ___-____", required: true }), errors.phone && (_jsx("div", { className: "invalid-feedback", children: errors.phone }))] }), _jsxs("div", { className: "col", children: [_jsx("label", { htmlFor: "first_name", className: "form-label", children: "Your name *" }), _jsx("input", { type: "text", className: `form-control form-control-lg ${errors.first_name ? 'is-invalid' : ''}`, id: "first_name", name: "first_name", value: formData.contact_info.first_name, onChange: handleInputChange, onBlur: (e) => validateField('first_name', e.target.value), required: true }), errors.first_name && (_jsx("div", { className: "invalid-feedback", children: errors.first_name }))] })] })] }) }) }), _jsx("div", { className: `tab-pane fade ${activeTab === 'location' ? 'show active' : ''}`, id: "pills-location", role: "tabpanel", "aria-labelledby": "pills-location-tab", children: _jsx("section", { className: "position-relative bg-body rounded p-2 m-2", children: _jsxs("div", { className: "position-relative z-1 p-2 m-2", children: [_jsx("h2", { className: "h4 mb-3 mb-sm-4", children: "Location Details" }), _jsx("small", { className: "fs-sm text-warning mb-3", children: "Leave blank to use your current location details." }), _jsxs("div", { className: "row g-4", children: [_jsx("div", { className: "col", children: _jsxs("div", { className: "position-relative", children: [_jsx("label", { htmlFor: "address", className: "form-label", children: "Address *" }), _jsx("input", { type: "text", name: "address", className: `form-control form-control-lg ${errors.address ? 'is-invalid' : ''}`, id: "address", value: formData.location.address, onChange: handleInputChange, onBlur: (e) => validateField('address', e.target.value), required: true }), errors.address && (_jsx("div", { className: "invalid-feedback", children: errors.address }))] }) }), _jsx("div", { className: "col-sm-3", children: _jsxs("div", { className: "position-relative", children: [_jsx("label", { htmlFor: "latitude", className: "form-label", children: "Latitude" }), _jsx("input", { type: "number", name: "latitude", className: "form-control form-control-lg", id: "latitude", step: "any", value: formData.location.latitude || null, onChange: handleInputChange, placeholder: "40.7128" }), errors.latitude && (_jsx("div", { className: "invalid-feedback", children: errors.latitude }))] }) }), _jsx("div", { className: "col-sm-3", children: _jsxs("div", { className: "position-relative", children: [_jsx("label", { htmlFor: "longitude", className: "form-label", children: "Longitude" }), _jsx("input", { type: "number", name: "longitude", className: "form-control form-control-lg", id: "longitude", step: "any", value: formData.location.longitude || null, onChange: handleInputChange, placeholder: "-74.0060" }), errors.longitude && (_jsx("div", { className: "invalid-feedback", children: errors.longitude }))] }) }), _jsx("div", { className: "col-12", children: _jsx("div", { className: "map-container", style: { height: '300px', borderRadius: '8px' }, children: _jsx("p", { className: "text-muted", children: "Map picker component would go here" }) }) })] })] }) }) }), _jsx("div", { className: `tab-pane fade ${activeTab === 'promote' ? 'show active' : ''}`, id: "pills-promote", role: "tabpanel", "aria-labelledby": "pills-promote-tab", children: _jsx("section", { className: "position-relative bg-body rounded p-2 m-2", children: _jsxs("div", { className: "position-relative z-1 p-2 m-2", children: [_jsx("h2", { className: "h4 mb-3 mb-sm-4", children: "Promotion Options" }), _jsxs("div", { className: "alert alert-info", children: [_jsx("i", { className: "ci-circle me-2" }), "Boost your listing's visibility with our promotion plans / Promotion plans help your listing stand out and reach more potential buyers"] }), _jsx("div", { className: "row g-4", children: [
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
                                                        ].map((plan) => (_jsx("div", { className: "col-md-4", children: _jsx("div", { className: `card h-100 ${plan.recommended ? 'border-primary border-2' : ''}`, children: _jsxs("div", { className: "card-body", children: [plan.recommended && (_jsx("div", { className: "badge bg-primary text-white position-absolute top-0 start-50 translate-middle mt-2", children: "Recommended" })), _jsx("h3", { className: "h5 text-center", children: plan.name }), _jsxs("div", { className: "text-center my-3", children: [_jsxs("span", { className: "display-5 fw-bold", children: ["$", plan.price] }), _jsxs("span", { className: "text-muted", children: [" / ", plan.duration] })] }), _jsx("ul", { className: "list-unstyled", children: plan.features.map((feature, index) => (_jsxs("li", { className: "mb-2", children: [_jsx("i", { className: "fi-check-circle text-success me-2" }), feature] }, index))) }), _jsxs("div", { className: "text-center mt-3", children: [_jsx("input", { type: "radio", className: "btn-check", name: "promotion_plan", id: plan.id, value: plan.id, checked: formData.promotion.promotion_plan === plan.id, onChange: handleInputChange }), _jsxs("label", { className: `btn btn-outline-${plan.recommended ? 'primary' : 'secondary'} w-100`, htmlFor: plan.id, children: ["Select ", plan.name] })] })] }) }) }, plan.id))) })] }) }) })] }), _jsx("div", { className: "position-relative z-1 p-2 m-2", children: _jsx(ResponseModal, { show: responseModal.show, message: responseModal.message, success: responseModal.success, onClose: () => setResponseModal({ ...responseModal, show: false }) }) })] }), _jsx("div", { className: "progress rounded-0", role: "progressbar", style: { height: '4px' }, children: _jsx("div", { className: `progress-bar ${uploadProgress > 0 ? 'bg-info' : 'bg-dark'}`, style: { width: `${uploadProgress > 0 ? uploadProgress : progressPercentage()}%` } }) }), _jsxs("footer", { className: "sticky-bottom1 modal-footer text-muted", children: [_jsxs("button", { type: "button", className: "btn btn-outline-dark animate-slide-start", onClick: handleBack, disabled: activeTab === 'home' || isSubmitting, children: [_jsx("i", { className: "fi-arrow-left animate-target fs-base ms-n1 me-2" }), "Back"] }), _jsx("button", { type: "button", className: "btn btn-dark animate-slide-end ms-auto", onClick: handleNext, disabled: isSubmitting, children: isSubmitting ? (_jsx("div", { className: "spinner-grow spinner-grow-sm", role: "status", children: _jsx("span", { className: "visually-hidden", children: uploadProgress > 0 ? 'Uploading...' : 'Processing...' }) })) : (_jsxs(_Fragment, { children: [activeTab === 'promote' ? 'Publish Listing' : 'Next', _jsx("i", { className: "fi-arrow-right animate-target fs-base ms-2 me-n1" })] })) })] })] }) }) }));
};
export default PublishPage;
