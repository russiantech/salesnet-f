
// v3
import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { NotificationService } from '../../../../services/local/NotificationService';
import { ProductAxiosService } from '../../../../services/net/ProductAxiosService';
import PropTypes from 'prop-types';
import LoadingSpinner, { LoadingZoom } from '../../LoadingSpinner';
import { SubscriptionPlans } from './Promote';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { Fragment } from 'react/jsx-runtime';

// Fix leaflet marker icons
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface PublishPageProps {
  productSlug?: string;
  editProductData?: ProductFormData;
}

interface Category {
  id: string;
  name: string;
  children?: Category[];
}

interface MediaFile {
  url: string;
  type: 'image' | 'video';
  name: string;
  size: number;
}

interface ProductFormData {
  id?: string;
  basic_info: {
    name: string;
    categories: Set<string>;
    price: number;
    stock: number;
    condition: 'new' | 'used' | 'good' | 'fair';
    description: string;
    listing_type: 'product' | 'service' | 'property' | 'rental' | 'vehicle';
    status?: 'draft' | 'published';
  };
  delivery_options: {
    delivery_type: 'delivery' | 'pickup';
  };
  contact_info: {
    first_name: string;
    email: string;
    phone: string;
  };
  location: {
    address: string;
    latitude: number | null;
    longitude: number | null;
  };
  media: {
    video_link: string;
  };
  promotion: {
    promotion_plan: string;
  };
  version?: number;
}

interface ProductAttribute {
  key: string;
  value: string;
}

const LocationMarker: React.FC<{
  position: [number, number] | null;
  setPosition: (lat: number, lng: number) => void;
}> = ({ position, setPosition }) => {
  useMapEvents({
    click(e) {
      setPosition(e.latlng.lat, e.latlng.lng);
    },
  });

  return position ? (
    <Marker position={position} />
  ) : null;
};

const PublishPage = ({ productSlug, editProductData }: PublishPageProps) => {
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const uploadAreaRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState('home');
  const [isEditMode, setIsEditMode] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [mediaFiles, setMediaFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<MediaFile[]>([]);
  const [removedMediaIds, setRemovedMediaIds] = useState<string[]>([]);
  const [removedNewFiles, setRemovedNewFiles] = useState<File[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [isLocating, setIsLocating] = useState(false);
  const [attributes, setAttributes] = useState<ProductAttribute[]>([{ key: '', value: '' }]);
  const [productId, setProductId] = useState<string | null>(null);
  const [isSavingDraft, setIsSavingDraft] = useState(false);
  const [draftError, setDraftError] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [selectedCategoryIds, setSelectedCategoryIds] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(true);
  const [isPasteAllowed, setIsPasteAllowed] = useState(true);
  const [showPostPublishModal, setShowPostPublishModal] = useState(false);
  const [publishedProductId, setPublishedProductId] = useState<string | null>(null);
  const [publishedProductSlug, setPublishedProductSlug] = useState<string | null>(null);
  const [isPublishing, setIsPublishing] = useState(false);

  const initialFormData: ProductFormData = {
    basic_info: {
      name: '',
      categories: new Set<string>(),
      price: 0.1,
      stock: 1,
      condition: 'new',
      description: '',
      listing_type: 'product',
      status: 'draft'
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

  const [formData, setFormData] = useState<ProductFormData>(initialFormData);
/*
  const resetForm = () => {
  // Reset all form data to initial state
  setFormData(initialFormData);
  
  // Reset media
  setMediaFiles([]);
  setPreviews([]);
  setRemovedMediaIds([]);
  setRemovedNewFiles([]);
  
  // Reset attributes
  setAttributes([{ key: '', value: '' }]);
  
  // Reset categories
  setSelectedCategoryIds(new Set());
  
  // Reset states
  setProductId(null);
  setPublishedProductId(null);
  setPublishedProductSlug(null);
  setErrors({});
  setIsEditMode(false);
  setUploadProgress(0);
  
  // Go back to first tab
  setActiveTab('home');
  
  // Clear file input
  if (fileInputRef.current) {
    fileInputRef.current.value = '';
  }
  
  // Show success message
  NotificationService.showDialog('Form reset! Ready to create a new listing.', 'success');
};
*/

// v2 - adds confirmation to reset to prevents accidental clicks:
const resetForm = () => {
  // Show confirmation if user has entered data
  const hasData = 
    formData.basic_info.name || 
    formData.basic_info.description || 
    mediaFiles.length > 0;

  if (hasData && !window.confirm('Are you sure you want to create a new listing? Current data will be cleared.')) {
    return;
  }

  // Reset all form data to initial state
  setFormData({
    ...initialFormData,
    basic_info: {
      ...initialFormData.basic_info,
      status: 'draft' // Reset to draft for new listing
    }
  });
  
  // Reset media
  setMediaFiles([]);
  setPreviews([]);
  setRemovedMediaIds([]);
  setRemovedNewFiles([]);
  
  // Reset attributes
  setAttributes([{ key: '', value: '' }]);
  
  // Reset categories
  setSelectedCategoryIds(new Set());
  
  // Reset states
  setProductId(null);
  setPublishedProductId(null);
  setPublishedProductSlug(null);
  setErrors({});
  setIsEditMode(false);
  setUploadProgress(0);
  setIsSubmitting(false);
  setIsSavingDraft(false);
  setIsPublishing(false);
  setShowPostPublishModal(false);
  
  // Go back to first tab
  setActiveTab('home');
  
  // Clear file input
  if (fileInputRef.current) {
    fileInputRef.current.value = '';
  }
  
  // Show success message
  NotificationService.showDialog('Form reset! Ready to create a new listing.', 'success');
};


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
        const response = await ProductAxiosService.getBySlug(productSlug);
        productData = response.data;
      } else if (editProductData) {
        productData = editProductData;
      }

      if (productData) {
        setFormData({
          ...productData,
          basic_info: {
            ...productData.basic_info,
            categories: new Set(productData.basic_info.categories || []),
            status: productData.basic_info.status || 'published'
          }
        });
        setProductId(productData.id || null);
        
        if (productData.media?.length) {
          setPreviews(productData.media);
        }
      }
    } catch (error: any) {
      console.error('Error initializing edit data:', error);
      NotificationService.showDialog(
        error?.response?.data?.error || 'Failed to load product data', 
        'error'
      );
    }
  };

  // Attribute handlers
  const handleAttributeChange = (index: number, field: keyof ProductAttribute, value: string) => {
    const newAttributes = [...attributes];
    newAttributes[index][field] = value;
    setAttributes(newAttributes);
  };

  const addAttribute = () => {
    setAttributes([...attributes, { key: '', value: '' }]);
  };

  const removeAttribute = (index: number) => {
    if (attributes.length > 1) {
      const newAttributes = [...attributes];
      newAttributes.splice(index, 1);
      setAttributes(newAttributes);
    }
  };

  // Save product as draft before promoting
  const saveProductAsDraft = async (): Promise<string | null> => {
    setIsSavingDraft(true);
    setDraftError(null);

    try {
      const submissionData = prepareSubmissionData();
      submissionData.append('status', 'draft');

      const response = isEditMode && productSlug
        ? await ProductAxiosService.updateProduct(productSlug, submissionData)
        : await ProductAxiosService.createProduct(submissionData);

      if (response.data.success) {
        const id = response?.data?.id || response.data?.products?.id;
        setProductId(id);
        setFormData(prev => ({
          ...prev,
          id,
          basic_info: { ...prev.basic_info, status: 'draft' }
        }));
        return id;
      } else {
        throw new Error(response.data.error || 'Failed to save draft');
      }
    } catch (error: any) {
      console.error('Draft save error:', error);
      setDraftError(error?.response?.data?.message || error?.response?.data?.error || 'Failed to save product draft');
      return null;
    } finally {
      setIsSavingDraft(false);
    }
  };

  const handleFreePublish = async () => {
    setIsPublishing(true);
    try {
      let slug = '';
      
      if (!productId) {
        // Save as published directly
        const submissionData = prepareSubmissionData();
        submissionData.append('status', 'published');
        
        const response = await ProductAxiosService.createProduct(submissionData);
        if (!response.data.success) {
          throw new Error(response.data.error || 'Failed to publish');
        }
        slug = response.data.slug;
        setProductId(response.data.id);
      } else {
        // Update existing draft to published
        const submissionData = new FormData();
        submissionData.append('status', 'published');
        const response = await ProductAxiosService.updateProduct(productId, submissionData);
        if (!response.data.success) {
          throw new Error(response.data.error || 'Failed to publish');
        }
        slug = response.data.slug || productSlug || '';
      }

      setPublishedProductSlug(slug);
      setShowPostPublishModal(true);
    } catch (error: any) {
      console.error('Publishing error:', error);
      NotificationService.showDialog(
        error?.response?.data?.message || error?.response?.data?.error || 'Failed to publish product', 
        'danger'
      );
    } finally {
      setIsPublishing(false);
    }
  };

  // Handle subscription success
  const handleSubscriptionSuccess = async (subscription: any) => {
    setIsPublishing(true);
    try {
      if (productId) {
        const statusData = new FormData();
        statusData.append('status', 'published');
        const response = await ProductAxiosService.updateProduct(productId, statusData);
        if (!response.data.success) {
          throw new Error(response.data.error || 'Failed to publish');
        }
        setPublishedProductSlug(response.data.slug || productSlug || '');
      } else {
        // For new products published directly
        const response = await ProductAxiosService.getBySlug(subscription.entity_id);
        if (response.data.success) {
          setPublishedProductSlug(response.data.product.slug);
        }
      }
      
      setShowPostPublishModal(true);
    } catch (error) {
      console.error('Publishing error:', error);
      NotificationService.showDialog(
        (error as any)?.response?.data?.message || (error as any)?.response?.data?.errror || 'Failed to publish product after subscription', 
        'error'
      );
    } finally {
      setIsPublishing(false);
    }
  };

  // DRAG & DROP & PASTE FROM CLIPBOARD
  useEffect(() => {
    const handlePaste = (e: ClipboardEvent) => {
      if (!isPasteAllowed || !uploadAreaRef.current) return;

      const items = e.clipboardData?.items;
      if (!items) return;

      const files: File[] = [];

      for (let i = 0; i < items.length; i++) {
        const item = items[i];
        if (item.kind === 'file') {
          const file = item.getAsFile();
          if (file &&
            (file.type.startsWith('image/') || file.type.startsWith('video/')) &&
            file.size <= 8 * 1024 * 1024
          ) {
            files.push(file);
          }
        }
      }

      if (files.length > 0) {
        e.preventDefault();
        handleFileChange({ target: { files } } as React.ChangeEvent<HTMLInputElement>);
      }
    };

    document.addEventListener('paste', handlePaste);
    return () => document.removeEventListener('paste', handlePaste);
  }, [isPasteAllowed]);

  // Drag and drop handlers
  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const files = Array.from(e.dataTransfer.files);
      handleFileChange({ target: { files } } as React.ChangeEvent<HTMLInputElement>);
    }
  };

  // Fetch categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await ProductAxiosService.fetchCategories();
        setCategories(response.data.categories);
      } catch (error: any) {
        console.error('Error fetching categories:', error);
        NotificationService.showDialog(
          error?.response?.data?.message || 'Failed to load categories', 
          'error'
        );
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  // Nested Category List Component
  const NestedCategoryList = ({
    categories,
    selectedIds,
    onSelect,
    depth = 0,
    initiallyExpanded = false
  }) => {
    const [expandedIds, setExpandedIds] = useState(new Set());

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
                    <i className={`bi ${expandedIds.has(category.id) ? 'bi-chevron-down' : 'bi-chevron-right'}`} />
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

  interface CategorySelectorProps {
    categories: Category[];
    selectedIds: Set<string>;
    onChange: (newSelectedIds: Set<string>) => void;
    error?: string;
    initiallyExpanded?: boolean;
  }

  const CategorySelector: React.FC<CategorySelectorProps> = ({
    categories,
    selectedIds,
    onChange,
    error,
    initiallyExpanded = true
  }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
          setIsOpen(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleDropdownInteraction = (e: React.MouseEvent) => {
      e.stopPropagation();
    };

    const filteredCategories = useMemo(() => {
      if (!searchQuery.trim()) return categories;

      const searchLower = searchQuery.toLowerCase();
      const filterItems = (items: Category[]): Category[] => {
        return items.filter(item => {
          const matches = item.name.toLowerCase().includes(searchLower);
          const childMatches = item.children ? filterItems(item.children).length > 0 : false;
          return matches || childMatches;
        }).map(item => ({
          ...item,
          children: item.children ? filterItems(item.children) : undefined
        }));
      };

      return filterItems(categories);
    }, [categories, searchQuery]);

    const selectedCategoryNames = useMemo(() => {
      const getNames = (items: Category[]): string[] => {
        return items.reduce<string[]>((acc, item) => {
          if (selectedIds.has(item.id)) acc.push(item.name);
          if (item.children) acc.push(...getNames(item.children));
          return acc;
        }, []);
      };
      return getNames(categories);
    }, [categories, selectedIds]);

    const handleCategorySelect = (id: string) => {
      const newSet = new Set(selectedIds);
      newSet.has(id) ? newSet.delete(id) : newSet.add(id);
      onChange(newSet);
    };

    return (
      <div className="position-relative" ref={containerRef}>
        <div
          className={`form-control form-control-lg ${error ? 'is-invalid' : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(!isOpen);
          }}
          style={{ cursor: 'pointer', minHeight: '38px' }}
        >
          <div className="d-flex flex-wrap gap-1">
            {selectedCategoryNames.length > 0 ? (
              selectedCategoryNames.map((name, i) => (
                <span key={`${name}-${i}`} className="badge bg-primary">
                  {name}
                </span>
              ))
            ) : (
              <span className="text-muted">Select categories...</span>
            )}
          </div>
        </div>

        {isOpen && (
          <div
            className="card position-absolute w-100 mt-1 shadow"
            style={{ zIndex: 1000 }}
            onClick={handleDropdownInteraction}
          >
            <div className="card-body p-2">
              <input
                type="text"
                className="form-control form-control-lg mb-2"
                placeholder="Search categories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onClick={handleDropdownInteraction}
              />

              <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
                <NestedCategoryList
                  categories={filteredCategories}
                  selectedIds={selectedIds}
                  onSelect={handleCategorySelect}
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

  // Geolocation handler
  const handleGetLocation = () => {
    setIsLocating(true);
    if (!navigator.geolocation) {
      NotificationService.showDialog("Geolocation is not supported by your browser", 'error');
      setIsLocating(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;
          setFormData(prev => ({
            ...prev,
            location: {
              ...prev.location,
              latitude,
              longitude
            }
          }));

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
          NotificationService.showDialog("Failed to get address from coordinates", 'error');
        }
        setIsLocating(false);
      },
      (error) => {
        NotificationService.showDialog("Error getting location: " + error.message, 'error');
        setIsLocating(false);
      }
    );
  };

  const handleCategoryChange = (newCategories: Set<string>) => {
    setFormData(prev => ({
      ...prev,
      basic_info: {
        ...prev.basic_info,
        categories: newCategories
      }
    }));

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
      required: false,
      minLength: 2
    },
    email: {
      required: false,
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    },
    phone: {
      required: false,
      pattern: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
    },
    address: {
      required: false
    }
  };

  const validateField = (name, value) => {
    const rules = validateRules[name];
    if (!rules) return true;

    const newErrors = { ...errors };

    if (rules.required === false && !value) {
      delete newErrors[name];
      setErrors(newErrors);
      return true;
    }

    if (name === 'address' && value) {
      if (!value.trim()) {
        newErrors.address = 'Invalid Address Format.';
      } else {
        delete newErrors.address;
      }
    }

    if (name === 'latitude' && value) {
      if (isNaN(value) || value < -90 || value > 90) {
        newErrors.latitude = 'Invalid latitude (-90 to 90)';
      } else {
        delete newErrors.latitude;
      }
    }

    if (name === 'longitude' && value) {
      if (isNaN(value) || value < -180 || value > 180) {
        newErrors.longitude = 'Invalid longitude (-180 to 180)';
      } else {
        delete newErrors.longitude;
      }
    }

    if (name === 'categories') {
      if ((value as Set<string>).size === 0) {
        newErrors.categories = 'At least one category must be selected';
      } else {
        delete newErrors.categories;
      }
    } else if (name === 'email') {
      if (rules.required && !value) {
        newErrors.email = 'This field is required';
      } else if (rules.pattern && value && !rules.pattern.test(value)) {
        newErrors.email = 'Invalid format';
      } else {
        delete newErrors.email;
      }
    } else if (rules.required && !value) {
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

        if (!hasAddress && !hasCoords) {
          setErrors(prev => ({ ...prev, location: 'Address or location coordinates are required' }));
          return false;
        }

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

      promote: () => true,
      'listing-type': () => true,
      images: () => mediaFiles.length > 0
    };

    const isValid = tabValidations[activeTab]();
    if (!isValid) {
      NotificationService.showDialog('Please fill in all required fields(*) correctly', 'danger');
    }
    return isValid;
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement> | { target: { files: File[] | FileList } }) => {
    const files = Array.from(e.target.files || []);
    const validFiles = files.filter(file =>
      (file.type.startsWith('image/') || file.type.startsWith('video/')) &&
      file.size <= 8 * 1024 * 1024
    );

    if (validFiles.length !== files.length) {
      NotificationService.showDialog('Only image and video files under 8MB are allowed', 'error');
    }

    // Filter out duplicates
    const newFiles = validFiles.filter(file =>
      !mediaFiles.some(existingFile =>
        existingFile.name === file.name && existingFile.size === file.size
      )
    );

    if (newFiles.length === 0) return;

    setMediaFiles(prev => [...prev, ...newFiles]);

    // Generate previews for new files
    newFiles.forEach(file => {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviews(prev => [...prev, {
          url: e.target?.result as string,
          type: file.type.startsWith('image/') ? 'image' : 'video',
          name: file.name,
          size: file.size
        }]);
      };
      reader.readAsDataURL(file);
    });

    // Reset file input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const removeMedia = (index: number) => {
    const newMediaFiles = [...mediaFiles];
    const newPreviews = [...previews];

    newMediaFiles.splice(index, 1);
    newPreviews.splice(index, 1);

    setMediaFiles(newMediaFiles);
    setPreviews(newPreviews);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let formSection = 'basic_info';

    if (name in formData.contact_info) formSection = 'contact_info';
    if (name in formData.location) formSection = 'location';
    if (name in formData.media) formSection = 'media';
    if (name in formData.promotion) formSection = 'promotion';
    if (name in formData.delivery_options) formSection = 'delivery_options';

    setFormData(prev => ({
      ...prev,
      [formSection]: {
        ...prev[formSection],
        [name]: value
      }
    }));

    validateField(name, value);
  };

  const prepareSubmissionData = () => {
    const submissionData = new FormData();

    attributes.forEach((attr, index) => {
      if (attr.key && attr.value) {
        submissionData.append(`attributes[${index}][key]`, attr.key);
        submissionData.append(`attributes[${index}][value]`, attr.value);
      }
    });

    Object.entries(formData).forEach(([section, data]) => {
      Object.entries(data).forEach(([key, value]) => {
        if (isEditMode && !isFieldModified(key, section)) return;

        const processedValue = processFormValue(key, value);
        submissionData.append(`${section}[${key}]`, processedValue);
      });
    });

    processMediaFiles(submissionData);

    if (isEditMode) {
      submissionData.append('version', formData.version?.toString() || '1');
    }

    return submissionData;
  };

  const processFormValue = (key: string, value: any): string | Blob => {
    if (value instanceof Set) {
      return JSON.stringify(Array.from(value));
    }

    if (value instanceof Date) {
      return value.toISOString();
    }

    if (typeof value === 'boolean') {
      return value ? 'true' : 'false';
    }

    if (typeof value === 'number') {
      return value.toString();
    }

    return value;
  };

  const processMediaFiles = (submissionData: FormData) => {
    mediaFiles
      .filter(file => !removedNewFiles.includes(file))
      .forEach((file, index) => {
        submissionData.append('media[]', file);
        submissionData.append(`media[${index}][isCover]`, index === 0 ? 'true' : 'false');
      });

    removedMediaIds.forEach(id => {
      submissionData.append('removed_media_ids[]', id);
    });
  };


  const isFieldModified = (key: string, section: string): boolean => {
    if (!initialFormData[section]) return true;
    return JSON.stringify(formData[section][key]) !==
      JSON.stringify(initialFormData[section][key]);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (!validateCurrentTab()) {
        setIsSubmitting(false);
        return;
      }

      const submissionData = prepareSubmissionData();

      const response = isEditMode && productSlug
        ? await ProductAxiosService.updateProduct(productSlug, submissionData)
        : await ProductAxiosService.createProduct(submissionData);

      if (response.data.success) {
        const id = response.data.id || response.data?.products?.id;
        setProductId(id);
        setFormData(prev => ({
          ...prev,
          id,
          basic_info: { ...prev.basic_info, status: 'published' }
        }));
        
        setPublishedProductId(id);
        setPublishedProductSlug(response.data.slug);
        setShowPostPublishModal(true);
      } else {
        throw new Error(response.data.error || 'Submission failed');
      }
    } catch (error: any) {
        
      NotificationService.showDialog(
        error?.response?.data?.message || error?.response?.data?.error || 'Failed to publish product. Please try again.',
        'warning'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

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

  // Tab navigation with validation
  const handleNext = (e: React.MouseEvent) => {
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

  // Progress percentage calculation
  const progressPercentage = () => {
    const tabs = ['home', 'listing-type', 'images', 'contact', 'location', 'promote'];
    const currentIndex = tabs.indexOf(activeTab);
    return ((currentIndex + 1) / tabs.length) * 100;
  };

  const handleSetLocation = (lat: number, lng: number) => {
    setFormData(prev => ({
      ...prev,
      location: {
        ...prev.location,
        latitude: lat,
        longitude: lng
      }
    }));
  };

  const handleViewListing = () => {
    if (closeButtonRef.current) closeButtonRef.current.click();
    navigate(`/products/${publishedProductSlug}`);
  };

  return (
    <section id="PublishPage" className="modal fade">
      <div className="modal-dialog modal-xl modal-dialog-scrollable" role="document">
        <div className="modal-content">
          {/* Navigation tabs */}
          <div className="modal-header">
            <div className="nav flex-nowrap gap-2 text-nowrap overflow-auto w-100 pe-2" data-simplebar data-simplebar-auto-hide="true">
            <ul className="nav nav-pills flex-nowrap gap-2 text-nowrap" role="tablist">
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
            </div>
            <button 
              className="btn-close fs-4" 
              type="button" 
              data-bs-dismiss="modal" 
              aria-label="Close"
              ref={closeButtonRef} 
            />
          </div>

          <div className="modal-body p-0" style={{ maxHeight: "80vh", overflowY: "auto" }}>
            <div className="tab-content">
              {/* Basic Info Tab */}
              <div className={`tab-pane fade ${activeTab === 'home' ? 'show active' : ''}`}>
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
                            <LoadingZoom size='sm' />
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
              <div className={`tab-pane fade ${activeTab === 'listing-type' ? 'show active' : ''}`}>
                <section className="position-relative bg-body rounded p-2 m-2">
                  <div className="position-relative z-1 p-2 m-2">
                    <h4 className="h4 mb-3 mb-sm-4">Select a listing type</h4>
                    <div className="nav flex-nowrap gap-2 text-nowrap overflow-auto" data-simplebar data-simplebar-auto-hide="true">
                      {['product', 'service', 'property', 'rental', 'vehicle'].map((type) => (
                        <Fragment key={type}>
                          <input
                            type="radio"
                            className="btn-check"
                            name="listing_type"
                            id={`listing-${type}`}
                            value={type}
                            checked={formData.basic_info.listing_type === type}
                            onChange={handleInputChange}
                          />
                          <label htmlFor={`listing-${type}`} className="btn btn-sm btn-outline-dark rounded-pill me-1">
                            <div className="d-flex flex-column flex-xxl-row align-items-center m-1">
                              <div className="d-flex text-dark-emphasis bg-body-tertiary rounded-circle">
                                <i className={`fi-${type === 'product' ? 'shopping-bag' : type === 'service' ? 'settings' : type === 'property' ? 'home' : 'car'} fs-2 m-xxl-1`} />
                              </div>
                              <div className="text-center">
                                {type === 'product' && 'Sell item'}
                                {type === 'rental' && 'Rent'}
                                {type === 'service' && 'Offer service'}
                                {type === 'property' && 'Sell property'}
                                {type === 'vehicle' && 'Sell a vehicle'}
                              </div>
                            </div>
                          </label>
                        </Fragment>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Product Attributes Section */}
                <section className="position-relative bg-body rounded p-2 m-2">
                  <div className="position-relative z-1">
                    <h2 className="h4 mb-3">Product Attributes</h2>
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>Attribute</th>
                            <th>Value</th>
                            <th width="50px"></th>
                          </tr>
                        </thead>
                        <tbody>
                          {attributes.map((attr, index) => (
                            <tr key={index}>
                              <td>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="e.g., Color"
                                  value={attr.key}
                                  onChange={(e) => handleAttributeChange(index, 'key', e.target.value)}
                                />
                              </td>
                              <td>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="e.g., Red"
                                  value={attr.value}
                                  onChange={(e) => handleAttributeChange(index, 'value', e.target.value)}
                                />
                              </td>
                              <td>
                                <button
                                  type="button"
                                  className="btn btn-sm btn-danger"
                                  onClick={() => removeAttribute(index)}
                                  disabled={attributes.length <= 1}
                                >
                                  <i className="ci-trash"></i>
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <button
                      type="button"
                      className="btn btn-outline-primary"
                      onClick={addAttribute}
                    >
                      <i className="ci-add me-2"></i> Add Attribute
                    </button>
                  </div>
                </section>
              </div>

              {/* Media Tab */}
              <div className={`tab-pane fade ${activeTab === 'images' ? 'show active' : ''}`}>
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
                                    <source src={preview.url} type={mediaFiles[index]?.type || 'video/mp4'} />
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
                            ref={uploadAreaRef}
                            className={`d-flex align-items-center justify-content-center position-relative h-100 cursor-pointer bg-body-tertiary border border-2 border-dotted rounded p-3 ${isDragging ? 'border-primary bg-primary bg-opacity-10' : ''}`}
                            onClick={() => fileInputRef.current?.click()}
                            onDragEnter={handleDragEnter}
                            onDragLeave={handleDragLeave}
                            onDragOver={handleDragOver}
                            onDrop={handleDrop}
                            style={{ minHeight: '150px' }}
                          >
                            <div className="text-center">
                              <i className={`fi-plus-circle fs-4 ${isDragging ? 'text-primary' : 'text-secondary-emphasis'} mb-2`} />
                              <div className="hover-effect-underline stretched-link fs-sm fw-medium">
                                {isDragging ? 'Drop files here' : 'Upload photos/videos'}
                              </div>
                              <div className="fs-xs text-muted mt-1">
                                or drag and drop, paste from clipboard
                              </div>
                            </div>
                          </div>
                          <input
                            ref={fileInputRef}
                            type="file"
                            multiple
                            accept="image/*,video/*"
                            onChange={handleFileChange}
                            style={{ display: 'none' }}
                          />
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
                      </div>
                    </div>
                  </div>
                </section>
              </div>

              {/* Contact Tab */}
              <div className={`tab-pane fade ${activeTab === 'contact' ? 'show active' : ''}`}>
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
              <div className={`tab-pane fade ${activeTab === 'location' ? 'show active' : ''}`}>
                <section className="position-relative bg-body rounded p-2 m-2">
                  <div className="position-relative z-1 p-2 m-2">
                    <h2 className="h4 mb-3 mb-sm-4">Location Details</h2>

                    <div className="col-12">
                      <small className="fs-sm text-warning me-2">Leave blank to use your current location details.</small>
                      <button
                        type="button"
                        className="btn btn-outline-primary btn-sm rounded-pill"
                        onClick={handleGetLocation}
                        disabled={isLocating}
                      >
                        {isLocating ? (
                          <>
                            <LoadingZoom size='sm' />
                            Getting location...
                          </>
                        ) : (
                          <>
                            <i className="ci-map-pin me-2"></i>
                            Use Current Location
                          </>
                        )}
                      </button>
                    </div>

                    <div className="row g-4">
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

                      <div className="col-sm-3">
                        <div className="position-relative">
                          <label htmlFor="latitude" className="form-label">Latitude</label>
                          <input
                            type="number"
                            name="latitude"
                            className="form-control form-control-lg"
                            id="latitude"
                            step="any"
                            value={formData.location.latitude || ''}
                            onChange={handleInputChange}
                            placeholder="40.7128"
                          />
                          {errors.latitude && (
                            <div className="invalid-feedback">{errors.latitude}</div>
                          )}
                        </div>
                      </div>

                      <div className="col-sm-3">
                        <div className="position-relative">
                          <label htmlFor="longitude" className="form-label">Longitude</label>
                          <input
                            type="number"
                            name="longitude"
                            className="form-control form-control-lg"
                            id="longitude"
                            step="any"
                            value={formData.location.longitude || ''}
                            onChange={handleInputChange}
                            placeholder="-74.0060"
                          />
                          {errors.longitude && (
                            <div className="invalid-feedback">{errors.longitude}</div>
                          )}
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="map-container" style={{ height: '300px', borderRadius: '8px' }}>
                          {formData.location.latitude && formData.location.longitude ? (
                            <MapContainer 
                              center={[formData.location.latitude, formData.location.longitude]} 
                              zoom={13}
                              style={{ height: '100%', width: '100%' }}
                            >
                              <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                              />
                              <LocationMarker 
                                position={[formData.location.latitude, formData.location.longitude]}
                                setPosition={handleSetLocation}
                              />
                            </MapContainer>
                          ) : (
                            <div className="d-flex justify-content-center align-items-center h-100 bg-light">
                              <p className="text-muted">Map will appear after setting location</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>

              {/* Promote Tab */}
              <div className={`tab-pane fade ${activeTab === 'promote' ? 'show active' : ''}`}>
                
                <section className="position-relative bg-body rounded p-2 m-2">
                  <div className="position-relative z-1 p-2 m-2">
                    <h2 className="h4 mb-3 mb-sm-4">Boost Your Listing Visibility</h2>
                    
                    <div className="col-12 mb-2">
                      <small className="fs-sm text-warning me-2">You can still publish for a free basic visibility.</small>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-primary rounded-pill"
                        onClick={handleFreePublish}
                        disabled={isSubmitting || isSavingDraft || isPublishing || formData.basic_info.status === 'published'}
                      >
                        {isPublishing ? (
                          <>
                            <LoadingZoom size='sm' />
                            Publishing...
                          </>
                        ) : (
                          'Publish for Free'
                        )}
                      </button>
                    </div>

                    {/* Premium Plans */}
                    <div className="mb-3">
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <span className="badge bg-faded-primary text-primary fs-sm">Recommended</span>
                      </div>
                      <p className="fs-sm mb-4">Get more visibility with our promotion plans</p>
                    </div>

                    {isSavingDraft ? (
                      <div className="text-center py-4">
                        <LoadingZoom size="sm" />
                        <p className="text-muted mt-2">Preparing your listing for promotion</p>
                      </div>
                    ) : draftError ? (
                      <div className="alert alert-danger">
                        <i className="ci-close-circle me-2"></i>
                        {draftError}
                        <div className="mt-2">
                          <button 
                            className="btn btn-sm btn-danger"
                            onClick={saveProductAsDraft}
                          >
                            Retry Saving Draft
                          </button>
                        </div>
                      </div>
                    ) : productId ? (
                      <SubscriptionPlans
                        entityType="product"
                        entityId={productId}
                        onSubscriptionSuccess={handleSubscriptionSuccess}
                      />
                    ) : (
                      <div className="alert alert-info">
                        <i className="ci-info-circle me-2"></i>
                        Complete the previous steps to enable promotion options
                      </div>
                    )}
                  </div>
                </section>

              </div>

            </div>
          </div>

          {/* Progress bar and navigation buttons */}
          <div className="progress rounded-0" role="progressbar" style={{ height: '4px' }}>
            <div
              className={`progress-bar ${uploadProgress > 0 ? 'bg-info' : 'bg-dark'}`}
              style={{ width: `${uploadProgress > 0 ? uploadProgress : progressPercentage()}%` }}
            />
          </div>

          {/* <footer className="sticky-bottom modal-footer">
            <button
              type="button"
              className="btn btn-outline-dark"
              onClick={handleBack}
              disabled={activeTab === 'home' || isSubmitting || isPublishing}
            >
              <i className="fi-arrow-left me-2" />
              Back
            </button>
            
            <button
              type="button"
              className="btn btn-dark ms-auto"
              onClick={handleNext}
              disabled={isSubmitting || isSavingDraft || isPublishing || formData.basic_info.status === 'published'}
            >
              {isSubmitting || isPublishing ? (
                <>
                  <LoadingZoom size='sm' />
                  {uploadProgress > 0 ? 'Uploading...' : 'Processing...'}
                </>
              ) : activeTab === 'promote' ? (
                formData.basic_info.status === 'published' ? 'Already Published' : 'Publish Listing'
              ) : (
                <>
                  Next <i className="fi-arrow-right ms-2" />
                </>
              )}
            </button>
          </footer>
           */}

           <footer className="sticky-bottom modal-footer">
  <button
    type="button"
    className="btn btn-outline-dark"
    onClick={handleBack}
    disabled={activeTab === 'home' || isSubmitting || isPublishing}
  >
    <i className="fi-arrow-left me-2" />
    Back
  </button>
  
  {/* Show reset button after successful publish */}
  {formData.basic_info.status === 'published' && productId && (
    <button
      type="button"
      className="btn btn-outline-success"
      onClick={resetForm}
      title="Create a new listing"
    >
      <i className="ci-add-circle me-2"></i>
      New Listing
    </button>
  )}
  
  <button
    type="button"
    className="btn btn-dark ms-auto"
    onClick={handleNext}
    disabled={isSubmitting || isSavingDraft || isPublishing || formData.basic_info.status === 'published'}
  >
    {isSubmitting || isPublishing ? (
      <>
        <LoadingZoom size='sm' />
        {uploadProgress > 0 ? 'Uploading...' : 'Processing...'}
      </>
    ) : activeTab === 'promote' ? (
      formData.basic_info.status === 'published' ? (
        <>
          <i className="ci-check me-2"></i>
          Published
        </>
      ) : (
        'Publish Listing'
      )
    ) : (
      <>
        Next <i className="fi-arrow-right ms-2" />
      </>
    )}
  </button>
</footer>


        </div>

      </div>

      {/* Post Publish Modal */}
      {/* {showPostPublishModal && publishedProductSlug && (
          <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Listing Published!</h5>
                  <button 
                    type="button" 
                    className="btn-close" 
                    onClick={() => {
                      setShowPostPublishModal(false);
                      handleViewListing();
                    }}
                  />
                </div>
                <div className="modal-body">
                  <div className="text-center py-4">
                    <i className="ci-check-circle text-success display-4 mb-3"></i>
                    <h3>Congratulations!</h3>
                    <p className="mb-4">Your listing is now live and visible to buyers.</p>
                  </div>

                  <div className="d-grid gap-3">
                    <button className="btn btn-outline-primary"
                      onClick={handleViewListing}
                    >
                      <i className="ci-eye me-2"></i> View Listing
                    </button>
                    <button
                      className="btn btn-outline-dark"
                      onClick={() => {
                        navigator.clipboard.writeText(`${window.location.origin}/products/${publishedProductSlug}`);
                        NotificationService.showDialog('Link copied to clipboard!', 'success');
                      }}
                    >
                      <i className="ci-share me-2"></i> Share Listing
                    </button>
                    <button
                      className="btn btn-warning"
                      onClick={() => {
                        setActiveTab('promote');
                        setShowPostPublishModal(false);
                      }}
                    >
                      <i className="ci-award me-2"></i> Promote Listing
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )} */}
      
      
{/* // Update the Post Publish Modal section (replace the existing modal code): */}

{/* Post Publish Modal */}
{showPostPublishModal && publishedProductSlug && (
  <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header border-0">
          <h5 className="modal-title">
            <i className="ci-check-circle text-success me-2"></i>
            Listing Published!
          </h5>
          <button 
            type="button" 
            className="btn-close" 
            onClick={() => {
              setShowPostPublishModal(false);
              handleViewListing();
            }}
          />
        </div>
        <div className="modal-body">
          <div className="text-center py-3">
            <div className="mb-3">
              <div className="d-inline-flex align-items-center justify-content-center bg-success bg-opacity-10 rounded-circle" 
                   style={{ width: '80px', height: '80px' }}>
                <i className="ci-check text-success" style={{ fontSize: '2.5rem' }}></i>
              </div>
            </div>
            <h4 className="mb-2">Congratulations!</h4>
            <p className="text-muted mb-0">Your listing is now live and visible to buyers.</p>
          </div>

          <div className="d-grid gap-2">
            <button 
              className="btn btn-primary"
              onClick={handleViewListing}
            >
              <i className="ci-eye me-2"></i>
              View Listing
            </button>
            
            <div className="row g-2">
              <div className="col-6">
                <button
                  className="btn btn-outline-secondary w-100"
                  onClick={() => {
                    navigator.clipboard.writeText(`${window.location.origin}/products/${publishedProductSlug}`);
                    NotificationService.showDialog('Link copied to clipboard!', 'success');
                  }}
                >
                  <i className="ci-share me-1"></i>
                  Share
                </button>
              </div>
              <div className="col-6">
                <button
                  className="btn btn-outline-warning w-100"
                  onClick={() => {
                    setActiveTab('promote');
                    setShowPostPublishModal(false);
                  }}
                >
                  <i className="ci-award me-1"></i>
                  Promote
                </button>
              </div>
            </div>

            <button
              className="btn btn-success"
              onClick={() => {
                setShowPostPublishModal(false);
                resetForm();
              }}
            >
              <i className="ci-add-circle me-2"></i>
              Create Another Listing
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
)}


    </section>
  );
};

export default PublishPage;

