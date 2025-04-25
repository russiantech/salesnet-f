
import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import ResponseModal from '../ResponseModal';
import { ProductAxiosService } from '../../../../services/net/ProductAxiosService';

import PropTypes from 'prop-types';
import LoadingSpinner from '../../LoadingSpinner';

// Add this at the top of your PublishPage component
interface PublishPageProps {
    productSlug?: string; // If using routing params
    editProductData?: ProductFormData; // If receiving data via props
}

const PublishPage = ({ productSlug, editProductData }: PublishPageProps) => {

    const navigate = useNavigate();
    const fileInputRef = useRef<HTMLInputElement>(null);
    const closeButtonRef = useRef<HTMLButtonElement>(null);
    const [activeTab, setActiveTab] = useState('home');
    const [isEditMode, setIsEditMode] = useState(false);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [mediaFiles, setMediaFiles] = useState<File[]>([]);
    const [previews, setPreviews] = useState<Array<{ url: string, type: string, name: string, size: number }>>([]);
    const [removedMediaIds, setRemovedMediaIds] = useState<string[]>([]);
    const [removedNewFiles, setRemovedNewFiles] = useState<File[]>([]);
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [categories, setCategories] = useState<Category[]>([]);
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
            categories: new Set<string>(),
            price: 0.1,
            stock: 1,
            condition: 'new' as 'new' | 'used' | 'good' | 'fair',
            description: '',
            listing_type: 'product' as 'product' | 'service' | 'property' | 'rental' | 'vehicle'
        },
        delivery_options: {
            delivery_type: 'delivery' as 'delivery' | 'pickup'
        },
        contact_info: {
            first_name: '',
            email: '',
            phone: ''
        },
        location: {
            address: '',
            latitude: null as number | null,
            longitude: null as number | null
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
            } else if (editProductData) {
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

        } catch (error) {
            console.error('Error initializing edit data:', error);
            // Handle error appropriately
        }
    };

    // HANDLE CATEGORIES / NESTED ALSO.
    const [selectedCategoryIds, setSelectedCategoryIds] = useState<Set<string>>(new Set());
    const [loading, setLoading] = useState(true);

    // Add this useEffect for fetching categories
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await ProductAxiosService.fetchCategories();
                console.log(response) // 26 as of now.
                // const data = await response.json();
                setCategories(response.data.categories);

            } catch (error) {
                console.error('Error fetching categories:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchCategories();
    }, []);

    // ==================================================

    const NestedCategoryList = ({
        categories,
        selectedIds,
        onSelect,
        depth = 0,
        initiallyExpanded = false
    }) => {
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

        return (
            <ul className="list-unstyled" style={{ paddingLeft: `${depth * 20}px` }}>
                {categories.map(category => {
                    const hasChildren = category.children?.length > 0;

                    return (
                        <li key={category.id} className="mb-1">
                            <div className="d-flex align-items-center">
                                {hasChildren && (
                                    <button
                                        type="button"
                                        className="btn btn-sm btn-link p-0 me-1"
                                        onClick={() => toggleExpand(category.id)}
                                        aria-label={expandedIds.has(category.id) ? 'Collapse' : 'Expand'}
                                    >
                                        <i className={`bi ${expandedIds.has(category.id) ? 'bi-chevron-down' : 'bi-chevron-right'
                                            }`} />
                                    </button>
                                )}

                                <div className="form-check flex-grow-1">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id={`cat-${category.id}`}
                                        checked={selectedIds.has(category.id)}
                                        onChange={() => onSelect(category.id)}
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor={`cat-${category.id}`}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        {category.name}
                                    </label>
                                </div>
                            </div>

                            {hasChildren && expandedIds.has(category.id) && (
                                <NestedCategoryList
                                    categories={category.children}
                                    selectedIds={selectedIds}
                                    onSelect={onSelect}
                                    depth={depth + 1}
                                    initiallyExpanded={initiallyExpanded}
                                />
                            )}
                        </li>
                    );
                })}
            </ul>
        );
    };

    const CategorySelector = ({
        categories,
        selectedIds,
        onChange,
        error,
        initiallyExpanded = true
    }) => {
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
            if (!searchQuery) return categories;

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
                    if (selectedIds.has(item.id)) acc.push(item.name);
                    if (item.children) acc.push(...getNames(item.children));
                    return acc;
                }, []);
            };
            return getNames(categories);
        }, [categories, selectedIds]);

        return (
            <div className="position-relative" ref={containerRef}>
                <div
                    className={`form-control ${error ? 'is-invalid' : ''}`}
                    onClick={() => setIsOpen(!isOpen)}
                    style={{ cursor: 'pointer', minHeight: '38px' }}
                >
                    <div className="d-flex flex-wrap gap-1">
                        {selectedCategoryNames.length > 0 ? (
                            selectedCategoryNames.map((name, i) => (
                                <span key={i} className="badge bg-primary">
                                    {name}
                                </span>
                            ))
                        ) : (
                            <span className="text-muted">Select categories...</span>
                        )}
                    </div>
                </div>

                {isOpen && (
                    <div className="card position-absolute w-100 mt-1 shadow" style={{ zIndex: 1000 }}>
                        <div className="card-body p-2">
                            <input
                                type="text"
                                className="form-control mb-2"
                                placeholder="Search categories..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />

                            <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
                                <NestedCategoryList
                                    categories={filteredCategories}
                                    selectedIds={selectedIds}
                                    onSelect={(id) => {
                                        const newSet = new Set(selectedIds);
                                        newSet.has(id) ? newSet.delete(id) : newSet.add(id);
                                        onChange(newSet);
                                    }}
                                    initiallyExpanded={initiallyExpanded}
                                />
                            </div>
                        </div>
                    </div>
                )}

                {error && <div className="invalid-feedback d-block">{error}</div>}
            </div>
        );
    };

    // ==================================================

    // PropTypes and default props
    CategorySelector.propTypes = {
        categories: PropTypes.array.isRequired,
        selectedIds: PropTypes.instanceOf(Set).isRequired,
        onChange: PropTypes.func.isRequired,
        error: PropTypes.string,
    };

    const handleMediaUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.target.files || []);
        const newFiles = files.filter(file =>
            !mediaFiles.some(existingFile =>
                existingFile.name === file.name &&
                existingFile.size === file.size
            )
        );

        setMediaFiles(prev => [...prev, ...newFiles]);

        // Generate previews
        newFiles.forEach(file => {
            const reader = new FileReader();
            reader.onload = (e) => {
                setPreviews(prev => [...prev, e.target?.result as string]);
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

        navigator.geolocation.getCurrentPosition(
            async (position) => {
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
                    const response = await fetch(
                        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
                    );
                    const data = await response.json();
                    const address = data.display_name || "Current Location";

                    setFormData(prev => ({
                        ...prev,
                        location: {
                            ...prev.location,
                            address
                        }
                    }));
                } catch (error) {
                    console.error("Geocoding error:", error);
                }
                setIsLocating(false);
            },
            (error) => {
                alert("Error getting location: " + error.message);
                setIsLocating(false);
            }
        );
    };


    const validateMedia = (media: typeof initialFormData.media) => {
        const errors: string[] = [];
        if (media.video_link && !isValidURL(media.video_link)) {
            errors.push('Invalid video URL format');
        }
        return errors;
    };


    // 2. Modify handleCategoryChange to update basic_info
    const handleCategoryChange = (newCategories: Set<string>) => {
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

    // Validate form fields
    const validateField = (name, value) => {
        const rules = validateRules[name];
        if (!rules) return true; // No validation rules for this field

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
            } else {
                delete newErrors.address;
            }
        }

        // Latitude validation
        if (name === 'latitude' && value) {
            if (isNaN(value) || value < -90 || value > 90) {
                newErrors.latitude = 'Invalid latitude (-90 to 90)';
            } else {
                delete newErrors.latitude;
            }
        }

        // Longitude validation
        if (name === 'longitude' && value) {
            if (isNaN(value) || value < -180 || value > 180) {
                newErrors.longitude = 'Invalid longitude (-180 to 180)';
            } else {
                delete newErrors.longitude;
            }
        }

        // Categories validation
        if (name === 'categories') {
            if ((value as Set<string>).size === 0) {
                newErrors.categories = 'At least one category must be selected';
            } else {
                delete newErrors.categories;
            }
        }
        // Email validation
        else if (name === 'email') {
            if (rules.required && !value) {
                newErrors.email = 'This field is required';
            } else if (rules.pattern && value && !rules.pattern.test(value)) {
                newErrors.email = 'Invalid format';
            } else {
                delete newErrors.email;
            }
        }
        // General validation for other fields
        else if (rules.required && !value) {
            newErrors[name] = 'This field is required';
        } else if (rules.minLength && value.length < rules.minLength) {
            newErrors[name] = `Minimum ${rules.minLength} characters required`;
        } else if (rules.maxLength && value.length > rules.maxLength) {
            newErrors[name] = `Maximum ${rules.maxLength} characters allowed`;
        } else if (rules.min && parseFloat(value) < rules.min) {
            newErrors[name] = `Minimum value is ${rules.min}`;
        } else {
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
        const validFiles = files.filter(file =>
            (file.type.startsWith('image/') || file.type.startsWith('video/')) &&
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
        if (name in formData.contact_info) formSection = 'contact_info';
        // if (name in formData.listing_type) formSection = 'listing_type'; // cannot use the in operator here.
        if (name in formData.location) formSection = 'location';
        if (name in formData.media) formSection = 'media';
        if (name in formData.promotion) formSection = 'promotion';
        if (name in formData.delivery_options) formSection = 'delivery_options';

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

        // Process form data sections
        Object.entries(formData).forEach(([section, data]) => {
            Object.entries(data).forEach(([key, value]) => {
                // Skip unmodified fields in edit mode
                if (isEditMode && !isFieldModified(key, section)) return;

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
    const processFormValue = (key: string, value: any): string | Blob => {
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

    // Revised media processing function
    const processMediaFiles = (submissionData: FormData) => {

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
    const handleRemoveMedia = (index: number, id?: string) => {
        if (id) {
            // Existing file from server
            setRemovedMediaIds(prev => [...prev, id]);
        } else {
            // New file not yet uploaded
            setRemovedNewFiles(prev => [...prev, mediaFiles[index]]);
        }

        // Update UI state
        setMediaFiles(prev => prev.filter((_, i) => i !== index));
        setPreviews(prev => prev.filter((_, i) => i !== index));
    };

    const isFieldModified = (key: string, section: string): boolean => {
        // Implement field modification check logic for edit mode
        if (!initialFormData[section]) return true;
        return JSON.stringify(formData[section][key]) !==
            JSON.stringify(initialFormData[section][key]);
    };

    const logFormData = (submissionData: FormData) => {
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
            } else {

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
        } catch (error) {
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
            const errorMessage = (
                error?.response?.data?.error ||
                error?.response?.data?.message ||
                error?.message ||
                'Failed to publish product. Please try again.'
            );

            // Handle array error messages
            const displayMessage = Array.isArray(errorMessage)
                ? errorMessage[0]
                : errorMessage;

            setResponseModal({
                show: true,
                message: displayMessage,
                success: false
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    // 6. Update form reset
    const resetForm = () => {
        setFormData({
            ...initialFormData,
            basic_info: {
                ...initialFormData.basic_info,
                categories: new Set<string>()
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

        if (!validateCurrentTab()) return;

        const tabs = ['home', 'listing-type', 'images', 'contact', 'location', 'promote'];
        const currentIndex = tabs.indexOf(activeTab);

        if (currentIndex < tabs.length - 1) {
            setActiveTab(tabs[currentIndex + 1]);
        } else {
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


    return (

        <section id="PublishPage" className="modal fade">

            <div className="modal-dialog modal-xl w-100" role="document">
                <div className="modal-content">
                    {/* Nav pills */}
                    <div className="modal-header">
                        <ul className="nav nav-pills - flex-nowrap gap-2 text-nowrap card-header modal-title" role="tablist">
                            {['home', 'listing-type', 'images', 'contact', 'location', 'promote'].map((tab) => (
                                <li className="nav-item" role="presentation" key={tab}>
                                    <button
                                        type="button"
                                        className={`nav-link ${activeTab === tab ? 'active' : ''}`}
                                        onClick={() => setActiveTab(tab)}
                                    >
                                        {tab === 'home' && <><i className="fi-home me-2 ms-n1" />Basic Info</>}
                                        {tab === 'listing-type' && <><i className="fi-list me-2 ms-n1" />Type</>}
                                        {tab === 'images' && <><i className="fi-image me-2 ms-n1" />Media</>}
                                        {tab === 'contact' && <><i className="fi-user me-2 ms-n1" />Contact</>}
                                        {tab === 'location' && <><i className="fi-map-pin me-2 ms-n1" />Location</>}
                                        {tab === 'promote' && <><i className="fi-award me-2 ms-n1" />Promote</>}
                                    </button>
                                </li>
                            ))}
                        </ul>
                        <button className="btn-close fs-4" type="button" data-bs-dismiss="modal" aria-label="Close"
                            onClick={handleClose} ref={closeButtonRef} />
                    </div>

                    {/* Pills content */}
                    <div className=" modal-body p-0" style={{ maxHeight: "800px", overflowY: "auto" }}>
                        <div className="tab-content" id="pills-tabContent">
                            {/* Home/Listing Details Tab */}
                            <div className={`tab-pane fade ${activeTab === 'home' ? 'show active' : ''}`} id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" style={{ height: "100%", overflowY: "auto" }}>
                                <section className="position-relative bg-body rounded p-2 m-2">
                                    <div className="position-relative z-1">
                                        <h2 className="h4 mb-3 mb-sm-4">Basic Information</h2>
                                        <div className="row row-cols-1 row-cols-sm-2 g-3 g-md-4 mb-3 mb-md-4">
                                            <div className="col">
                                                <label htmlFor="name" className="form-label">Product name *</label>
                                                <input
                                                    type="text"
                                                    className={`form-control form-control-lg ${errors.name ? 'is-invalid' : ''}`}
                                                    id="name"
                                                    name="name"
                                                    minLength={5}
                                                    placeholder="Product name"
                                                    value={formData.basic_info.name}
                                                    onChange={handleInputChange}
                                                    onBlur={(e) => validateField('name', e.target.value)}
                                                    required
                                                />
                                                {errors.name && (
                                                    <div className="invalid-feedback">{errors.name}</div>
                                                )}
                                            </div>

                                            <div className="col">
                                                <label className="form-label">Categories *</label>
                                                {Array.isArray(categories) && categories.length > 0 ? (
                                                    <CategorySelector
                                                        categories={categories}
                                                        selectedIds={formData.basic_info.categories}
                                                        onChange={handleCategoryChange}
                                                        error={errors.categories}
                                                    />
                                                ) : (
                                                    <div className="text-muted">
                                                        <LoadingSpinner />
                                                        {categories === null ? '...' : 'Fetching categories...'}
                                                    </div>
                                                )}
                                            </div>

                                            <div className="col">
                                                <label htmlFor="price" className="form-label">Price *</label>
                                                <div className="input-group">
                                                    <input
                                                        type="number"
                                                        className={`form-control form-control-lg ${errors.price ? 'is-invalid' : ''}`}
                                                        id="price"
                                                        name="price"
                                                        value={formData.basic_info.price}
                                                        onChange={handleInputChange}
                                                        onBlur={(e) => validateField('price', e.target.value)}
                                                        min="0.01"
                                                        step="0.01"
                                                        required
                                                    />
                                                    {errors.price && (
                                                        <div className="invalid-feedback">{errors.price}</div>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="col">
                                                <label htmlFor="condition" className="form-label">Condition *</label>
                                                <select
                                                    className={`form-select form-select-lg ${errors.condition ? 'is-invalid' : ''}`}
                                                    id="condition"
                                                    name="condition"
                                                    value={formData.basic_info.condition}
                                                    onChange={handleInputChange}
                                                    onBlur={(e) => validateField('condition', e.target.value)}
                                                    required
                                                >
                                                    <option value="">Select condition...</option>
                                                    <option value="new">Brand New</option>
                                                    <option value="used">Used - Like New</option>
                                                    <option value="good">Used - Good</option>
                                                    <option value="fair">Used - Fair</option>
                                                </select>
                                                {errors.condition && (
                                                    <div className="invalid-feedback">{errors.condition}</div>
                                                )}
                                            </div>
                                        </div>
                                        <label htmlFor="description" className="form-label fs-6 fw-semibold">Description *</label>
                                        <p className="fs-sm mb-2">Describe your product in detail to attract buyers</p>
                                        <textarea
                                            className={`form-control form-control-lg ${errors.description ? 'is-invalid' : ''}`}
                                            rows={4}
                                            id="description"
                                            name="description"
                                            placeholder="Describe your product (minimum 10 characters)"
                                            minLength={10}
                                            maxLength={1000}
                                            value={formData.basic_info.description}
                                            onChange={handleInputChange}
                                            onBlur={(e) => validateField('description', e.target.value)}
                                            required
                                        />
                                        {errors.description && (
                                            <div className="invalid-feedback">{errors.description}</div>
                                        )}
                                        <div className="text-end mt-1">
                                            <small className="text-muted">
                                                {formData.basic_info.description.length}/1000 characters
                                            </small>
                                        </div>
                                    </div>
                                </section>
                            </div>

                            {/* Listing Type Tab */}
                            <div className={`tab-pane fade ${activeTab === 'listing-type' ? 'show active' : ''}`} id="pills-listing-type" role="tabpanel" aria-labelledby="pills-listing-tab">
                                <section className="position-relative bg-body rounded p-2 m-2">
                                    <div className="position-relative z-1 p-2 m-2">
                                        <h4 className="h4 mb-3 mb-sm-4">Select a listing type</h4>
                                        {/* <div className="d-flex flex-wrap gap-2"> */}
                                        <div className="nav - flex-nowrap gap-2 text-nowrap">
                                            {['product', 'service', 'property', 'rental', 'vehicle'].map((type) => (
                                                <React.Fragment key={type}>
                                                    <input
                                                        type="radio"
                                                        className="btn-check"
                                                        name="listing_type"
                                                        id={`listing-${type}`}
                                                        value={type}
                                                        checked={formData.basic_info.listing_type === type}
                                                        onChange={handleInputChange}
                                                    />
                                                    <label htmlFor={`listing-${type}`} className="btn btn-outline-dark rounded-pill">
                                                        <div className="d-flex flex-column flex-xxl-row align-items-center m-1">
                                                            {/* <div className="nav-item"> */}
                                                            <div className="d-flex text-dark-emphasis bg-body-tertiary rounded-circle">
                                                                <i className={`fi-${type === 'product' ? 'shopping-bag' : type === 'service' ? 'settings' : type === 'property' ? 'home' : 'car'} fs-2 m-xxl-1`} />
                                                            </div>
                                                            <div className="text-center">
                                                                {/* <h3 className="h6 mb-1"> */}
                                                                {type === 'product' && 'Sell item'}
                                                                {type === 'rental' && 'Rent'}
                                                                {type === 'service' && 'Offer service'}
                                                                {type === 'property' && 'Sell property'}
                                                                {type === 'vehicle' && 'Sell a vehicle'}
                                                                {/* </h3> */}
                                                            </div>
                                                        </div>
                                                    </label>
                                                </React.Fragment>
                                            ))}
                                        </div>
                                    </div>
                                </section>
                            </div>

                            {/* Media Tab */}
                            <div className={`tab-pane fade ${activeTab === 'images' ? 'show active' : ''}`} id="pills-images" role="tabpanel" aria-labelledby="pills-images-tab">
                                <section className="position-relative bg-body rounded p-2 m-2">
                                    <div className="position-relative z-1 p-2 m-2">
                                        <div className="d-sm-flex align-items-center justify-content-between mb-3 mb-sm-4">
                                            <h2 className="h4 mb-2 mb-sm-0 me-3">Photos & Videos</h2>
                                            <div className="position-relative d-flex">
                                                <i className="fi-info text-info mt-1 me-2" />
                                            </div>
                                        </div>
                                        <small className="fs-sm text-warning mb-3">
                                            The maximum file size is 8 MB. Formats: jpeg, jpg, png, mp4, mov. Put the main picture first.
                                            {mediaFiles.length === 0 && (<>At least one image is required for your listing</>)}
                                        </small>
                                        <div style={{ maxWidth: '852px' }}>
                                            <div className="row row-cols-2 row-cols-sm-3 g-2 g-md-4 g-lg-3 g-xl-4">
                                                {/* Media previews */}
                                                {previews.map((preview, index) => (
                                                    <div className="col" key={index}>
                                                        <div className="hover-effect-opacity position-relative overflow-hidden rounded">
                                                            {index === 0 && (
                                                                <span className="badge text-bg-light position-absolute top-0 start-0 z-3 mt-2 ms-2">Cover</span>
                                                            )}
                                                            <div className="ratio" style={{ aspectRatio: '4/3' }}>
                                                                {preview.type === 'image' ? (
                                                                    <img src={preview.url} alt={`Preview ${index + 1}`} className="img-fluid object-fit-cover" />
                                                                ) : (
                                                                    <video controls className="w-100 h-100 object-fit-cover">
                                                                        <source src={preview.url} type={mediaFiles[index].type} />
                                                                    </video>
                                                                )}
                                                            </div>
                                                            <div className="hover-effect-target position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100 opacity-0">
                                                                <button
                                                                    type="button"
                                                                    className="btn btn-icon btn-sm btn-light position-relative z-2"
                                                                    aria-label="Remove"
                                                                    onClick={() => removeMedia(index)}
                                                                >
                                                                    <i className="ci-trash-empty"></i>
                                                                </button>
                                                                <span className="position-absolute top-0 start-0 w-100 h-100 bg-black bg-opacity-25 z-1" />
                                                            </div>
                                                        </div>
                                                        <small className="text-muted d-block text-truncate mt-1">
                                                            {preview.name} ({Math.round(preview.size / 1024)} KB)
                                                        </small>
                                                    </div>
                                                ))}

                                                {/* Upload button */}
                                                <div className="col">
                                                    <div
                                                        className="d-flex align-items-center justify-content-center position-relative h-100 cursor-pointer bg-body-tertiary border border-2 border-dotted rounded p-3"
                                                        onClick={() => fileInputRef.current.click()}
                                                        style={{ minHeight: '150px' }}
                                                    >
                                                        <div className="text-center">
                                                            <i className="fi-plus-circle fs-4 text-secondary-emphasis mb-2" />
                                                            <div className="hover-effect-underline stretched-link fs-sm fw-medium">
                                                                Upload photos/videos
                                                            </div>
                                                            <input
                                                                type="file"
                                                                ref={fileInputRef}
                                                                onChange={handleFileChange}
                                                                className="d-none"
                                                                multiple
                                                                accept="image/*,video/*"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pt-3 mt-2 mt-md-3">
                                            <label htmlFor="video_link" className="form-label">Link to YouTube/Vimeo video (optional)</label>
                                            <div className="position-relative">
                                                <i className="fi-link position-absolute top-50 start-0 translate-middle-y fs-lg ms-3" />
                                                <input
                                                    type="url"
                                                    className="form-control form-control-lg form-icon-start"
                                                    id="video_link"
                                                    name="video_link"
                                                    placeholder="www.youtube.com/..."
                                                    value={formData.media.video_link}
                                                    onChange={handleInputChange}
                                                />
                                                {/* <input
                                            type="url"
                                            className="form-control"
                                            // value={formData.media.video_link || ''}
                                            value={formData.media?.video_link || ''}
                                            onChange={(e) => setFormData(prev => ({
                                                ...prev,
                                                media: {
                                                    ...prev.media,
                                                    video_link: e.target.value
                                                }
                                            }))}
                                            placeholder="YouTube/Vimeo link"
                                        /> */}

                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>

                            {/* Contact Tab */}
                            <div className={`tab-pane fade ${activeTab === 'contact' ? 'show active' : ''}`} id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                                <section className="position-relative bg-body rounded p-2 m-2">
                                    <div className="position-relative z-1 p-2 m-2">
                                        <h2 className="h4 mb-3 mb-sm-4">Contact Information</h2>
                                        <div className="nav nav-pills flex-wrap gap-3">
                                            <div>
                                                <input
                                                    type="radio"
                                                    className="btn-check"
                                                    id="delivery"
                                                    name="delivery_type"
                                                    value="delivery"
                                                    checked={formData.delivery_options.delivery_type === 'delivery'}
                                                    onChange={handleInputChange}
                                                />
                                                <label className="nav-link" htmlFor="delivery">
                                                    <i className="fi-truck fs-base ms-n1 me-2" />
                                                    Delivery Available
                                                </label>
                                            </div>
                                            <div>
                                                <input
                                                    type="radio"
                                                    className="btn-check"
                                                    id="pickup"
                                                    name="delivery_type"
                                                    value="pickup"
                                                    checked={formData.delivery_options.delivery_type === 'pickup'}
                                                    onChange={handleInputChange}
                                                />
                                                <label className="nav-link" htmlFor="pickup">
                                                    <i className="fi-map-pin fs-base ms-n1 me-2" />
                                                    Pick-up Only
                                                </label>
                                            </div>
                                        </div>
                                        <div className="row row-cols-1 row-cols-sm-2 g-3 g-md-2">

                                            <div className="col">
                                                <label htmlFor="email" className="form-label">Email *</label>
                                                <input
                                                    type="email"
                                                    className={`form-control form-control-lg ${errors.email ? 'is-invalid' : ''}`}
                                                    id="email"
                                                    name="email"
                                                    value={formData.contact_info.email || ''}
                                                    onChange={handleInputChange}
                                                    onBlur={(e) => validateField('email', e.target.value)}
                                                    required
                                                />

                                                {errors.email && (
                                                    <div className="invalid-feedback">{errors.email}</div>
                                                )}
                                            </div>
                                            <div className="col">
                                                <label htmlFor="phone" className="form-label">Phone number *</label>
                                                <input
                                                    type="tel"
                                                    className={`form-control form-control-lg ${errors.phone ? 'is-invalid' : ''}`}
                                                    id="phone"
                                                    name="phone"
                                                    value={formData.contact_info.phone}
                                                    onChange={handleInputChange}
                                                    onBlur={(e) => validateField('phone', e.target.value || '')}
                                                    placeholder="(___) ___-____"
                                                    required
                                                />
                                                {errors.phone && (
                                                    <div className="invalid-feedback">{errors.phone}</div>
                                                )}
                                            </div>
                                            <div className="col">
                                                <label htmlFor="first_name" className="form-label">Your name *</label>
                                                <input
                                                    type="text"
                                                    className={`form-control form-control-lg ${errors.first_name ? 'is-invalid' : ''}`}
                                                    id="first_name"
                                                    name="first_name"
                                                    value={formData.contact_info.first_name}
                                                    onChange={handleInputChange}
                                                    onBlur={(e) => validateField('first_name', e.target.value)}
                                                    required
                                                />
                                                {errors.first_name && (
                                                    <div className="invalid-feedback">{errors.first_name}</div>
                                                )}
                                            </div>

                                        </div>
                                    </div>
                                </section>
                            </div>

                            {/* Location Tab */}
                            <div className={`tab-pane fade ${activeTab === 'location' ? 'show active' : ''}`} id="pills-location" role="tabpanel" aria-labelledby="pills-location-tab">
                                <section className="position-relative bg-body rounded p-2 m-2">
                                    <div className="position-relative z-1 p-2 m-2">
                                        <h2 className="h4 mb-3 mb-sm-4">Location Details</h2>
                                        <small className="fs-sm text-warning mb-3">Leave blank to use your current location details.</small>

                                        <div className="row g-4">
                                            {/* Address Field */}
                                            <div className="col">
                                                <div className="position-relative">
                                                    <label htmlFor="address" className="form-label">Address *</label>
                                                    <input
                                                        type="text"
                                                        name="address"
                                                        className={`form-control form-control-lg ${errors.address ? 'is-invalid' : ''}`}
                                                        id="address"
                                                        value={formData.location.address}
                                                        onChange={handleInputChange}
                                                        onBlur={(e) => validateField('address', e.target.value)}
                                                        required
                                                    />
                                                    {errors.address && (
                                                        <div className="invalid-feedback">{errors.address}</div>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Latitude Field */}
                                            <div className="col-sm-3">
                                                <div className="position-relative">
                                                    <label htmlFor="latitude" className="form-label">Latitude</label>
                                                    <input
                                                        type="number"
                                                        name="latitude"
                                                        className="form-control form-control-lg"
                                                        id="latitude"
                                                        step="any"
                                                        value={formData.location.latitude || null}
                                                        onChange={handleInputChange}
                                                        placeholder="40.7128"
                                                    />
                                                    {/* <input
                            type="number"
                            name="longitude"
                            className="form-control form-control-lg"
                            id="latitude"
                            value={formData.location.longitude?.toString() || ''}
                            onChange={e => setFormData(prev => ({
                                ...prev,
                                location: {
                                ...prev.location,
                                longitude: Number(e.target.value) || null
                                }
                            }))}
                            /> */}
                                                    {errors.latitude && (
                                                        <div className="invalid-feedback">{errors.latitude}</div>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Longitude Field */}
                                            <div className="col-sm-3">
                                                <div className="position-relative">
                                                    <label htmlFor="longitude" className="form-label">Longitude</label>
                                                    <input
                                                        type="number"
                                                        name="longitude"
                                                        className="form-control form-control-lg"
                                                        id="longitude"
                                                        step="any"
                                                        value={formData.location.longitude || null}
                                                        onChange={handleInputChange}
                                                        placeholder="-74.0060"
                                                    />
                                                    {/* <input
                            type="number"
                            name="latitude"
                            value={formData.location.latitude?.toString() || ''} // Convert to string or empty
                            onChange={e => setFormData(prev => ({
                                ...prev,
                                location: {
                                ...prev.location,
                                latitude: Number(e.target.value) || null
                                }
                            }))}
                            /> */}
                                                    {errors.longitude && (
                                                        <div className="invalid-feedback">{errors.longitude}</div>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Map Picker (Optional) */}
                                            <div className="col-12">
                                                <div className="map-container" style={{ height: '300px', borderRadius: '8px' }}>
                                                    {/* Integrate your map component here */}
                                                    <p className="text-muted">Map picker component would go here</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>

                            {/* Promote Tab */}
                            <div className={`tab-pane fade ${activeTab === 'promote' ? 'show active' : ''}`} id="pills-promote" role="tabpanel" aria-labelledby="pills-promote-tab">
                                <section className="position-relative bg-body rounded p-2 m-2">
                                    <div className="position-relative z-1 p-2 m-2">
                                        <h2 className="h4 mb-3 mb-sm-4">Promotion Options</h2>
                                        <div className="alert alert-info">
                                            <i className="ci-circle me-2"></i>
                                            Boost your listing's visibility with our promotion plans / Promotion plans help your listing stand out and reach more potential buyers
                                        </div>

                                        <div className="row g-4">
                                            {[
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
                                            ].map((plan) => (
                                                <div className="col-md-4" key={plan.id}>
                                                    <div className={`card h-100 ${plan.recommended ? 'border-primary border-2' : ''}`}>
                                                        <div className="card-body">
                                                            {plan.recommended && (
                                                                <div className="badge bg-primary text-white position-absolute top-0 start-50 translate-middle mt-2">
                                                                    Recommended
                                                                </div>
                                                            )}
                                                            <h3 className="h5 text-center">{plan.name}</h3>
                                                            <div className="text-center my-3">
                                                                <span className="display-5 fw-bold">${plan.price}</span>
                                                                <span className="text-muted"> / {plan.duration}</span>
                                                            </div>
                                                            <ul className="list-unstyled">
                                                                {plan.features.map((feature, index) => (
                                                                    <li key={index} className="mb-2">
                                                                        <i className="fi-check-circle text-success me-2"></i>
                                                                        {feature}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                            <div className="text-center mt-3">
                                                                <input
                                                                    type="radio"
                                                                    className="btn-check"
                                                                    name="promotion_plan"
                                                                    id={plan.id}
                                                                    value={plan.id}
                                                                    checked={formData.promotion.promotion_plan === plan.id}
                                                                    onChange={handleInputChange}
                                                                />
                                                                <label className={`btn btn-outline-${plan.recommended ? 'primary' : 'secondary'} w-100`}
                                                                    htmlFor={plan.id} >
                                                                    Select {plan.name}
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                    </div>
                                </section>
                            </div>

                        </div>
                        {/* Response Modal - Placed just above the buttons */}
                        <div className="position-relative z-1 p-2 m-2">
                            <ResponseModal
                                show={responseModal.show}
                                message={responseModal.message}
                                success={responseModal.success}
                                onClose={() => setResponseModal({ ...responseModal, show: false })}
                            /></div>
                    </div>

                    <div className="progress rounded-0" role="progressbar" style={{ height: '4px' }}>
                        <div
                            className={`progress-bar ${uploadProgress > 0 ? 'bg-info' : 'bg-dark'}`}
                            style={{ width: `${uploadProgress > 0 ? uploadProgress : progressPercentage()}%` }}
                        />
                    </div>

                    {/* Progress bar and navigation buttons */}
                    <footer className="sticky-bottom1 modal-footer text-muted">

                        {/* <div className="container1 d-flex "> */}
                        <button
                            type="button"
                            className="btn btn-outline-dark animate-slide-start"
                            onClick={handleBack}
                            disabled={activeTab === 'home' || isSubmitting}
                        >
                            <i className="fi-arrow-left animate-target fs-base ms-n1 me-2" />
                            Back
                        </button>
                        <button
                            type="button"
                            className="btn btn-dark animate-slide-end ms-auto"
                            onClick={handleNext}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <div className="spinner-grow spinner-grow-sm" role="status">
                                    <span className="visually-hidden">{uploadProgress > 0 ? 'Uploading...' : 'Processing...'}</span>
                                </div>

                            ) : (
                                <>
                                    {activeTab === 'promote' ? 'Publish Listing' : 'Next'}
                                    <i className="fi-arrow-right animate-target fs-base ms-2 me-n1" />
                                </>
                            )}
                        </button>
                        {/* </div> */}
                    </footer>
                </div>
            </div>
        </section>

    );
};

export default PublishPage;
