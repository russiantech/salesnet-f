
// // v3
// // src/components/shared/modals/publish/ProductForm.tsx
// import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { NotificationService } from '../../../../services/local/NotificationService';
// import { ProductAxiosService } from '../../../../services/net/ProductAxiosService';
// import PropTypes from 'prop-types';
// import { LoadingZoom } from '../../LoadingSpinner';
// import { SubscriptionPlans } from './Promote';
// import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import L from 'leaflet';
// import { Fragment } from 'react/jsx-runtime';

// // Fix leaflet marker icons
// delete (L.Icon.Default.prototype as any)._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
//   iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
//   shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
// });

// interface ProductFormProps {
//   productSlug?: string;
//   editProductData?: any;
//   onSuccess?: (updatedProduct?: any) => void;
//   onClose?: () => void;
//   mode?: 'create' | 'edit';
// }

// interface Category {
//   id: string;
//   name: string;
//   children?: Category[];
// }

// interface MediaFile {
//   url: string;
//   type: 'image' | 'video';
//   name: string;
//   size: number;
//   id?: string | number; // Can be string for new files, number for existing
// }

// interface ProductFormData {
//   id?: string;
//   slug?: string;
//   basic_info: {
//     name: string;
//     categories: Set<string>;
//     price: number;
//     stock: number;
//     condition: 'new' | 'used' | 'good' | 'fair';
//     description: string;
//     listing_type: 'product' | 'service' | 'property' | 'rental' | 'vehicle';
//     status?: 'published' | 'draft';
//   };
//   delivery_options: {
//     delivery_type: 'delivery' | 'pickup';
//   };
//   contact_info: {
//     first_name: string;
//     email: string;
//     phone: string;
//   };
//   location: {
//     address: string;
//     latitude: number | null;
//     longitude: number | null;
//   };
//   media: {
//     video_link: string;
//     image_urls: string[];
//   };
//   images?: Array<{id: number, url: string}>; // Add images array for tracking
//   attributes?: ProductAttribute[];
//   promotion: {
//     promotion_plan: string;
//   };
//   version?: number;
// }


// interface ProductAttribute {
//   key: string;
//   value: string;
// }

// const LocationMarker: React.FC<{
//   position: [number, number] | null;
//   setPosition: (lat: number, lng: number) => void;
// }> = ({ position, setPosition }) => {
//   useMapEvents({
//     click(e) {
//       setPosition(e.latlng.lat, e.latlng.lng);
//     },
//   });

//   return position ? (
//     <Marker position={position} />
//   ) : null;
// };

// const ProductForm = ({ productSlug, editProductData, onSuccess, mode = 'create' }: ProductFormProps) => {
//   const navigate = useNavigate();
//   const fileInputRef = useRef<HTMLInputElement>(null);
//   const closeButtonRef = useRef<HTMLButtonElement>(null);
//   const uploadAreaRef = useRef<HTMLDivElement>(null);
  
//   // State declarations
//   const [activeTab, setActiveTab] = useState('home');
//   const [uploadProgress, setUploadProgress] = useState(0);
//   const [mediaFiles, setMediaFiles] = useState<File[]>([]);
//   const [previews, setPreviews] = useState<MediaFile[]>([]);
//   const [removedMediaIds, setRemovedMediaIds] = useState<string[]>([]);
//   const [errors, setErrors] = useState<Record<string, string>>({});
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [categories, setCategories] = useState<Category[]>([]);
//   const [isLocating, setIsLocating] = useState(false);
//   const [attributes, setAttributes] = useState<ProductAttribute[]>([{ key: '', value: '' }]);
//   const [isSavingDraft, setIsSavingDraft] = useState(false);
//   const [draftError, setDraftError] = useState<string | null>(null);
//   const [isDragging, setIsDragging] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const [isPasteAllowed, setIsPasteAllowed] = useState(true);
//   const [showPostPublishModal, setShowPostPublishModal] = useState(false);
//   const [publishedProductSlug, setPublishedProductSlug] = useState<string | null>(null);
//   const [productId, setProductId] = useState<string | null>(null);

//   const initialFormData: ProductFormData = {
//     basic_info: {
//       name: '',
//       categories: new Set<string>(),
//       price: 0.1,
//       stock: 1,
//       condition: 'new',
//       description: '',
//       listing_type: 'product',
//       status: 'draft'
//     },
//     delivery_options: {
//       delivery_type: 'delivery'
//     },
//     contact_info: {
//       first_name: '',
//       email: '',
//       phone: ''
//     },
//     location: {
//       address: '',
//       latitude: null,
//       longitude: null
//     },
//     media: {
//       video_link: '',
//       image_urls: []
//     },
//     promotion: {
//       promotion_plan: ''
//     }
//   };

//   const [formData, setFormData] = useState<ProductFormData>(initialFormData);
//   const isEditMode = mode === 'edit';
// /*
// // Fixed transformProductToFormData to properly handle media
// const transformProductToFormData = (apiProduct: any): ProductFormData => {
//   const categories = new Set<string>();
  
//   if (apiProduct.categories && Array.isArray(apiProduct.categories)) {
//     apiProduct.categories.forEach((category: any) => {
//       categories.add(category.id.toString());
//     });
//   }

//   // Fixed: Properly collect all image URLs
//   const imageUrls: string[] = [];
//   if (apiProduct.media?.image_urls && Array.isArray(apiProduct.media.image_urls)) {
//     imageUrls.push(...apiProduct.media.image_urls);
//   } else if (apiProduct.image_urls && Array.isArray(apiProduct.image_urls)) {
//     // Handle case where image_urls is at top level
//     imageUrls.push(...apiProduct.image_urls);
//   } else if (apiProduct.image_url) {
//     imageUrls.push(apiProduct.image_url);
//   }

//   // Contact info handling
//   let contactInfo = {
//     first_name: '',
//     email: '',
//     phone: ''
//   };

//   if (apiProduct.users && apiProduct.users.length > 0) {
//     const user = apiProduct.users[0];
//     contactInfo = {
//       first_name: user.name || '',
//       email: user.email || '',
//       phone: user.phone || ''
//     };
//   }

//   // Location handling
//   let location = {
//     address: '',
//     latitude: null,
//     longitude: null
//   };

//   if (apiProduct.users && apiProduct.users.length > 0) {
//     const user = apiProduct.users[0];
//     const primaryAddress = user.addresses?.find((addr: any) => addr.is_primary);
    
//     if (primaryAddress) {
//       location = {
//         address: primaryAddress.street_address || '',
//         latitude: null,
//         longitude: null
//       };
//     }
//   }

//   return {
//     id: apiProduct.id?.toString(),
//     slug: apiProduct.slug, // Keep as string
//     basic_info: {
//       name: apiProduct.name || '',
//       categories: categories,
//       price: parseFloat(apiProduct.price || apiProduct.original_price || 0),
//       stock: parseInt(apiProduct.stock?.toString() || '1'),
//       condition: apiProduct.condition || 'new',
//       description: apiProduct.description || '',
//       listing_type: apiProduct.listing_type || 'product',
//       status: apiProduct.status || 'draft'
//     },
//     delivery_options: {
//       delivery_type: apiProduct.delivery_type || 
//                     apiProduct.delivery_options?.delivery_type || 
//                     'delivery'
//     },
//     contact_info: contactInfo,
//     location: location,
//     media: {
//       video_link: apiProduct.media?.video_link || apiProduct.video_link || '',
//       image_urls: imageUrls // This should be an array
//     },
//     attributes: apiProduct.attributes || [],
//     promotion: {
//       promotion_plan: apiProduct.promotion?.plan || apiProduct.promotion_plan || ''
//     },
//     version: apiProduct.version || 0
//   };
// };
// */
// // 2. Fix transformProductToFormData to properly handle images array
// const transformProductToFormData = (apiProduct: any): ProductFormData => {
//   const categories = new Set<string>();
  
//   if (apiProduct.categories && Array.isArray(apiProduct.categories)) {
//     apiProduct.categories.forEach((category: any) => {
//       categories.add(category.id.toString());
//     });
//   }

//   // Fixed: Handle images array with proper IDs
//   const imageUrls: string[] = [];
//   if (apiProduct.images && Array.isArray(apiProduct.images)) {
//     // Use the images array from backend which has proper structure
//     imageUrls.push(...apiProduct.images.map((img: any) => img.url));
//   } else if (apiProduct.media?.image_urls && Array.isArray(apiProduct.media.image_urls)) {
//     imageUrls.push(...apiProduct.media.image_urls);
//   } else if (apiProduct.image_urls && Array.isArray(apiProduct.image_urls)) {
//     imageUrls.push(...apiProduct.image_urls);
//   } else if (apiProduct.image_url) {
//     imageUrls.push(apiProduct.image_url);
//   }

//   // Contact info handling
//   let contactInfo = {
//     first_name: '',
//     email: '',
//     phone: ''
//   };

//   if (apiProduct.users && apiProduct.users.length > 0) {
//     const user = apiProduct.users[0];
//     contactInfo = {
//       first_name: user.name || '',
//       email: user.email || '',
//       phone: user.phone || ''
//     };
//   }

//   // Location handling
//   let location = {
//     address: '',
//     latitude: null,
//     longitude: null
//   };

//   if (apiProduct.users && apiProduct.users.length > 0) {
//     const user = apiProduct.users[0];
//     const primaryAddress = user.addresses?.find((addr: any) => addr.is_primary);
    
//     if (primaryAddress) {
//       location = {
//         address: primaryAddress.street_address || '',
//         latitude: null,
//         longitude: null
//       };
//     }
//   }

//   return {
//     id: apiProduct.id?.toString(),
//     slug: apiProduct.slug,
//     basic_info: {
//       name: apiProduct.name || '',
//       categories: categories,
//       price: parseFloat(apiProduct.price || apiProduct.original_price || 0),
//       stock: parseInt(apiProduct.stock?.toString() || '1'),
//       condition: apiProduct.condition || 'new',
//       description: apiProduct.description || '',
//       listing_type: apiProduct.listing_type || 'product',
//       status: apiProduct.status || 'draft'
//     },
//     delivery_options: {
//       delivery_type: apiProduct.delivery_type || 
//                     apiProduct.delivery_options?.delivery_type || 
//                     'delivery'
//     },
//     contact_info: contactInfo,
//     location: location,
//     media: {
//       video_link: apiProduct.media?.video_link || apiProduct.video_link || '',
//       image_urls: imageUrls
//     },
//     // Store the full images array with IDs for reference
//     images: apiProduct.images || [],
//     attributes: apiProduct.attributes || [],
//     promotion: {
//       promotion_plan: apiProduct.promotion?.plan || apiProduct.promotion_plan || ''
//     },
//     version: apiProduct.version || 0
//   };
// };

// /*
// // Fixed initialization of media previews in useEffect
// useEffect(() => {
//   const initializeFormData = async () => {
//     try {
//       setLoading(true);
//       let productData: ProductFormData | null = null;
      
//       if (isEditMode) {
//         if (editProductData) {
//           productData = transformProductToFormData(editProductData);
//         } else if (productSlug) {
//           const response = await ProductAxiosService.getBySlug(productSlug);
//           if (response.data) {
//             productData = transformProductToFormData(response.data);
//           }
//         }
//       }

//       if (productData) {
//         setFormData(productData);
        
//         if (productData.id) {
//           setProductId(productData.id);
//         }
        
//         // Fixed: Initialize media previews from image_urls array
//         if (productData.media?.image_urls && productData.media.image_urls.length > 0) {
//           const mediaPreviews = productData.media.image_urls.map((url, index) => ({
//             url,
//             type: 'image' as const,
//             name: `Image ${index + 1}`,
//             size: 0,
//             id: `existing-${index}` // Add ID for tracking
//           }));
//           setPreviews(mediaPreviews);
//           console.log('Initialized previews:', mediaPreviews); // Debug log
//         }
        
//         // Initialize attributes
//         if (productData.attributes && productData.attributes.length > 0) {
//           setAttributes(productData.attributes);
//         } else {
//           setAttributes([{ key: '', value: '' }]);
//         }
//       } else if (!isEditMode) {
//         setFormData(initialFormData);
//         setPreviews([]);
//       }
//     } catch (error) {
//       console.error('Initialization error:', error);
//       NotificationService.showDialog('Failed to load product data', 'error');
//     } finally {
//       setLoading(false);
//     }
//   };

//   initializeFormData();
// }, [productSlug, editProductData, mode]);
// */

// useEffect(() => {
//   const initializeFormData = async () => {
//     try {
//       setLoading(true);
//       let productData: ProductFormData | null = null;
      
//       if (isEditMode) {
//         if (editProductData) {
//           productData = transformProductToFormData(editProductData);
//         } else if (productSlug) {
//           const response = await ProductAxiosService.getBySlug(productSlug);
//           if (response.data) {
//             productData = transformProductToFormData(response.data);
//           }
//         }
//       }

//       if (productData) {
//         setFormData(productData);
        
//         if (productData.id) {
//           setProductId(productData.id);
//         }
        
//         // Fixed: Initialize media previews using the images array with proper IDs
//         if (productData.images && productData.images.length > 0) {
//           const mediaPreviews = productData.images.map((image, index) => ({
//             url: image.url,
//             type: 'image' as const,
//             name: `Image ${index + 1}`,
//             size: 0,
//             id: image.id // Use actual image ID from backend
//           }));
//           setPreviews(mediaPreviews);
//           console.log('Initialized previews with IDs:', mediaPreviews);
//         } else if (productData.media?.image_urls && productData.media.image_urls.length > 0) {
//           // Fallback for old format
//           const mediaPreviews = productData.media.image_urls.map((url, index) => ({
//             url,
//             type: 'image' as const,
//             name: `Image ${index + 1}`,
//             size: 0,
//             id: `legacy-${index}` // Fallback ID for legacy data
//           }));
//           setPreviews(mediaPreviews);
//         }
        
//         // Initialize attributes
//         if (productData.attributes && productData.attributes.length > 0) {
//           setAttributes(productData.attributes);
//         } else {
//           setAttributes([{ key: '', value: '' }]);
//         }
//       } else if (!isEditMode) {
//         setFormData(initialFormData);
//         setPreviews([]);
//       }
//     } catch (error) {
//       console.error('Initialization error:', error);
//       NotificationService.showDialog('Failed to load product data', 'error');
//     } finally {
//       setLoading(false);
//     }
//   };

//   initializeFormData();
// }, [productSlug, editProductData, mode]);


//   // Attribute handlers
//   const handleAttributeChange = (index: number, field: keyof ProductAttribute, value: string) => {
//     const newAttributes = [...attributes];
//     newAttributes[index][field] = value;
//     setAttributes(newAttributes);
//   };

//   const addAttribute = () => {
//     setAttributes([...attributes, { key: '', value: '' }]);
//   };

//   const removeAttribute = (index: number) => {
//     if (attributes.length > 1) {
//       const newAttributes = [...attributes];
//       newAttributes.splice(index, 1);
//       setAttributes(newAttributes);
//     }
//   };

//   // Save product as draft before promoting
//   const saveProductAsDraft = async (): Promise<string | null> => {
//     setIsSavingDraft(true);
//     setDraftError(null);

//     try {
//       const submissionData = prepareSubmissionData();
//       submissionData.append('status', 'draft');

//       const response = isEditMode && productSlug
//         ? await ProductAxiosService.updateProduct(productSlug, submissionData)
//         : await ProductAxiosService.createProduct(submissionData);

//       if (response.data.success) {
//         const id = response?.data?.id || response.data?.products?.id;
//         setProductId(id);
//         setFormData(prev => ({
//           ...prev,
//           id,
//           basic_info: { ...prev.basic_info, status: 'draft' }
//         }));
//         return id;
//       } else {
//         throw new Error(response.data.error || 'Failed to save draft');
//       }
//     } catch (error: any) {
//       console.error('Draft save error:', error);
//       setDraftError(error?.response?.data?.message || error?.response?.data?.error || 'Failed to save product draft');
//       return null;
//     } finally {
//       setIsSavingDraft(false);
//     }
//   };

//   const handleFreePublish = async () => {
//     try {
//       let slug = '';
      
//       if (!productId) {
//         // Save as published directly
//         const submissionData = prepareSubmissionData();
//         submissionData.append('status', 'published');
        
//         const response = await ProductAxiosService.createProduct(submissionData);
//         if (!response.data.success) {
//           throw new Error(response.data.error || 'Failed to publish');
//         }
//         slug = response.data.slug;
//         setProductId(response.data.id);
//       } else {
//         // Update existing draft to published
//         const submissionData = prepareSubmissionData();
//         submissionData.append('status', 'published');
//         const response = await ProductAxiosService.updateProduct(productId, submissionData);
//         if (!response.data.success) {
//           throw new Error(response.data.error || 'Failed to publish');
//         }
//         slug = response.data.slug || productSlug || '';
//       }

//       setPublishedProductSlug(slug);
//       setShowPostPublishModal(true);
//     } catch (error: any) {
//       console.error('Publishing error:', error);
//       NotificationService.showDialog(
//         error?.response?.data?.message || error?.response?.data?.error || 'Failed to publish product', 
//         'danger'
//       );
//     }
//   };

//   // Handle subscription success
//   const handleSubscriptionSuccess = async (subscription: any) => {
//     try {
//       if (productId) {
//         const submissionData = prepareSubmissionData();
//         submissionData.append('status', 'published');
//         const response = await ProductAxiosService.updateProduct(productId, submissionData);
//         if (!response.data.success) {
//           throw new Error(response.data.error || 'Failed to publish');
//         }
//         setPublishedProductSlug(response.data.slug || productSlug || '');
//       } else {
//         // For new products published directly
//         const response = await ProductAxiosService.getBySlug(subscription.entity_id);
//         if (response.data.success) {
//           setPublishedProductSlug(response.data.product.slug);
//         }
//       }

//       setShowPostPublishModal(true);
//     } catch (error) {
//       console.error('Publishing error:', error);
//       NotificationService.showDialog(
//         (error as any)?.response?.data?.message || (error as any)?.response?.data?.error || 'Failed to publish product after subscription', 
//         'error'
//       );
//     }
//   };

//   // DRAG & DROP & PASTE FROM CLIPBOARD
//   useEffect(() => {
//     const handlePaste = (e: ClipboardEvent) => {
//       if (!isPasteAllowed || !uploadAreaRef.current) return;

//       const items = e.clipboardData?.items;
//       if (!items) return;

//       const files: File[] = [];

//       for (let i = 0; i < items.length; i++) {
//         const item = items[i];
//         if (item.kind === 'file') {
//           const file = item.getAsFile();
//           if (file &&
//             (file.type.startsWith('image/') || file.type.startsWith('video/')) &&
//             file.size <= 8 * 1024 * 1024
//           ) {
//             files.push(file);
//           }
//         }
//       }

//       if (files.length > 0) {
//         e.preventDefault();
//         handleFileChange({ target: { files } } as React.ChangeEvent<HTMLInputElement>);
//       }
//     };

//     document.addEventListener('paste', handlePaste);
//     return () => document.removeEventListener('paste', handlePaste);
//   }, [isPasteAllowed]);

//   // Drag and drop handlers
//   const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
//     e.preventDefault();
//     e.stopPropagation();
//     setIsDragging(true);
//   };

//   const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
//     e.preventDefault();
//     e.stopPropagation();
//     setIsDragging(false);
//   };

//   const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
//     e.preventDefault();
//     e.stopPropagation();
//   };

//   const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
//     e.preventDefault();
//     e.stopPropagation();
//     setIsDragging(false);

//     if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
//       const files = Array.from(e.dataTransfer.files);
//       handleFileChange({ target: { files } } as React.ChangeEvent<HTMLInputElement>);
//     }
//   };

//   // Fetch categories
//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const response = await ProductAxiosService.fetchCategories();
//         setCategories(response.data.categories);
//       } catch (error: any) {
//         console.error('Error fetching categories:', error);
//         NotificationService.showDialog(
//           error?.response?.data?.message || 'Failed to load categories', 
//           'error'
//         );
//       }
//     };

//     fetchCategories();
//   }, []);

//   // Nested Category List Component
//   const NestedCategoryList = ({
//     categories,
//     selectedIds,
//     onSelect,
//     depth = 0,
//     initiallyExpanded = false
//   }: any) => {
//     const [expandedIds, setExpandedIds] = useState(new Set());

//     useEffect(() => {
//       if (initiallyExpanded) {
//         const parentIds = categories
//           .filter((cat: any) => cat.children?.length > 0)
//           .map((cat: any) => cat.id);
//         setExpandedIds(new Set(parentIds));
//       }
//     }, [categories, initiallyExpanded]);

//     const toggleExpand = useCallback((id: any) => {
//       setExpandedIds(prev => {
//         const newSet = new Set(prev);
//         newSet.has(id) ? newSet.delete(id) : newSet.add(id);
//         return newSet;
//       });
//     }, []);

//     return (
//       <ul className="list-unstyled" style={{ paddingLeft: `${depth * 20}px` }}>
//         {categories.map((category: any) => {
//           const hasChildren = category.children?.length > 0;

//           return (
//             <li key={category.id} className="mb-1">
//               <div className="d-flex align-items-center">
//                 {hasChildren && (
//                   <button
//                     type="button"
//                     className="btn btn-sm btn-link p-0 me-1"
//                     onClick={() => toggleExpand(category.id)}
//                     aria-label={expandedIds.has(category.id) ? 'Collapse' : 'Expand'}
//                   >
//                     <i className={`bi ${expandedIds.has(category.id) ? 'bi-chevron-down' : 'bi-chevron-right'}`} />
//                   </button>
//                 )}

//                 <div className="form-check flex-grow-1">
//                   <input
//                     type="checkbox"
//                     className="form-check-input"
//                     id={`cat-${category.id}`}
//                     checked={selectedIds.has(category.id)}
//                     onChange={() => onSelect(category.id)}
//                   />
//                   <label
//                     className="form-check-label"
//                     htmlFor={`cat-${category.id}`}
//                     style={{ cursor: 'pointer' }}
//                   >
//                     {category.name}
//                   </label>
//                 </div>
//               </div>

//               {hasChildren && expandedIds.has(category.id) && (
//                 <NestedCategoryList
//                   categories={category.children}
//                   selectedIds={selectedIds}
//                   onSelect={onSelect}
//                   depth={depth + 1}
//                   initiallyExpanded={initiallyExpanded}
//                 />
//               )}
//             </li>
//           );
//         })}
//       </ul>
//     );
//   };

//   interface CategorySelectorProps {
//     categories: Category[];
//     selectedIds: Set<string>;
//     onChange: (newSelectedIds: Set<string>) => void;
//     error?: string;
//     initiallyExpanded?: boolean;
//   }

//   const CategorySelector: React.FC<CategorySelectorProps> = ({
//     categories,
//     selectedIds,
//     onChange,
//     error,
//     initiallyExpanded = true
//   }) => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [searchQuery, setSearchQuery] = useState('');
//     const containerRef = useRef<HTMLDivElement>(null);

//     useEffect(() => {
//       const handleClickOutside = (event: MouseEvent) => {
//         if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
//           setIsOpen(false);
//         }
//       };

//       document.addEventListener('mousedown', handleClickOutside);
//       return () => document.removeEventListener('mousedown', handleClickOutside);
//     }, []);

//     const handleDropdownInteraction = (e: React.MouseEvent) => {
//       e.stopPropagation();
//     };

//     const filteredCategories = useMemo(() => {
//       if (!searchQuery.trim()) return categories;

//       const searchLower = searchQuery.toLowerCase();
//       const filterItems = (items: Category[]): Category[] => {
//         return items.filter(item => {
//           const matches = item.name.toLowerCase().includes(searchLower);
//           const childMatches = item.children ? filterItems(item.children).length > 0 : false;
//           return matches || childMatches;
//         }).map(item => ({
//           ...item,
//           children: item.children ? filterItems(item.children) : undefined
//         }));
//       };

//       return filterItems(categories);
//     }, [categories, searchQuery]);

//     // const selectedCategoryNames = useMemo(() => {
//     //   const getNames = (items: Category[]): string[] => {
//     //     return items.reduce<string[]>((acc, item) => {
//     //       if (selectedIds.has(item.id)) acc.push(item.name);
//     //       if (item.children) acc.push(...getNames(item.children));
//     //       return acc;
//     //     }, []);
//     //   };
//     //   return getNames(categories);
//     // }, [categories, selectedIds]);

//     const selectedCategoryNames = useMemo(() => {
//     const selectedNames: string[] = [];
//     const findCategoryName = (items: Category[], id: string): string | null => {
//       for (const item of items) {
//         if (item.id === id) return item.name;
//         if (item.children) {
//           const found = findCategoryName(item.children, id);
//           if (found) return found;
//         }
//       }
//       return null;
//     };

//     selectedIds.forEach(id => {
//       const name = findCategoryName(categories, id);
//       if (name) selectedNames.push(name);
//     });

//     return selectedNames;
//   }, [categories, selectedIds]);

//     const handleCategorySelect = (id: string) => {
//       const newSet = new Set(selectedIds);
//       newSet.has(id) ? newSet.delete(id) : newSet.add(id);
//       onChange(newSet);
//     };

//     return (
//       <div className="position-relative" ref={containerRef}>
//         <div
//           className={`form-control ${error ? 'is-invalid' : ''}`}
//           onClick={(e) => {
//             e.stopPropagation();
//             setIsOpen(!isOpen);
//           }}
//           style={{ cursor: 'pointer', minHeight: '38px' }}
//         >
//           <div className="d-flex flex-wrap gap-1">
//             {selectedCategoryNames.length > 0 ? (
//               selectedCategoryNames.map((name, i) => (
//                 <span key={`${name}-${i}`} className="badge bg-primary">
//                   {name}
//                 </span>
//               ))
//             ) : (
//               <span className="text-muted">Select categories...</span>
//             )}
//           </div>
//         </div>

//         {isOpen && (
//           <div
//             className="card position-absolute w-100 mt-1 shadow"
//             style={{ zIndex: 1000 }}
//             onClick={handleDropdownInteraction}
//           >
//             <div className="card-body p-2">
//               <input
//                 type="text"
//                 className="form-control mb-2"
//                 placeholder="Search categories..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 onClick={handleDropdownInteraction}
//               />

//               <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
//                 <NestedCategoryList
//                   categories={filteredCategories}
//                   selectedIds={selectedIds}
//                   onSelect={handleCategorySelect}
//                   initiallyExpanded={initiallyExpanded}
//                 />
//               </div>
//             </div>
//           </div>
//         )}

//         {error && <div className="invalid-feedback d-block">{error}</div>}
//       </div>
//     );
//   };

//   // Geolocation handler
//   const handleGetLocation = () => {
//     setIsLocating(true);
//     if (!navigator.geolocation) {
//       NotificationService.showDialog("Geolocation is not supported by your browser", 'error');
//       setIsLocating(false);
//       return;
//     }

//     navigator.geolocation.getCurrentPosition(
//       async (position) => {
//         try {
//           const { latitude, longitude } = position.coords;
//           setFormData(prev => ({
//             ...prev,
//             location: {
//               ...prev.location,
//               latitude,
//               longitude
//             }
//           }));

//           const response = await fetch(
//             `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
//           );
//           const data = await response.json();
//           const address = data.display_name || "Current Location";

//           setFormData(prev => ({
//             ...prev,
//             location: {
//               ...prev.location,
//               address
//             }
//           }));
//         } catch (error) {
//           console.error("Geocoding error:", error);
//           NotificationService.showDialog("Failed to get address from coordinates", 'error');
//         }
//         setIsLocating(false);
//       },
//       (error) => {
//         NotificationService.showDialog("Error getting location: " + error.message, 'error');
//         setIsLocating(false);
//       }
//     );
//   };

//   /*
//   const handleCategoryChange = (newCategories: Set<string>) => {
//     setFormData(prev => ({
//       ...prev,
//       basic_info: {
//         ...prev.basic_info,
//         categories: newCategories
//       }
//     }));

//     validateField('categories', newCategories);
//   };
// */

// // Fixed CategorySelector to handle categories properly
// const handleCategoryChange = (newCategories: Set<string>) => {
//   setFormData(prev => ({
//     ...prev,
//     basic_info: {
//       ...prev.basic_info,
//       categories: newCategories
//     }
//   }));

//   validateField('categories', newCategories);
// };

//   const validateRules = {
//     name: {
//       required: true,
//       minLength: 2,
//       maxLength: 100
//     },
//     categories: {
//       required: true
//     },
//     price: {
//       required: true,
//       min: 0.01
//     },
//     condition: {
//       required: true
//     },
//     description: {
//       required: true,
//       minLength: 10,
//       maxLength: 1000
//     },
//     first_name: {
//       required: false,
//       minLength: 2
//     },
//     email: {
//       required: false,
//       pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
//     },
//     phone: {
//       required: false,
//       pattern: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
//     },
//     address: {
//       required: false
//     }
//   } as const;

//   const validateField = (name: string, value: any) => {
//     const rules = validateRules[name as keyof typeof validateRules];
//     if (!rules) return true;

//     const newErrors = { ...errors };

//     if (rules.required === false && !value) {
//       delete newErrors[name];
//       setErrors(newErrors);
//       return true;
//     }

//     if (name === 'address' && value) {
//       if (!value.trim()) {
//         newErrors.address = 'Invalid Address Format.';
//       } else {
//         delete newErrors.address;
//       }
//     }

//     if (name === 'latitude' && value) {
//       if (isNaN(value) || value < -90 || value > 90) {
//         newErrors.latitude = 'Invalid latitude (-90 to 90)';
//       } else {
//         delete newErrors.latitude;
//       }
//     }

//     if (name === 'longitude' && value) {
//       if (isNaN(value) || value < -180 || value > 180) {
//         newErrors.longitude = 'Invalid longitude (-180 to 180)';
//       } else {
//         delete newErrors.longitude;
//       }
//     }

//     if (name === 'categories') {
//       if ((value as Set<string>).size === 0) {
//         newErrors.categories = 'At least one category must be selected';
//       } else {
//         delete newErrors.categories;
//       }
//     } else if (name === 'email') {
//       if (rules.required && !value) {
//         newErrors.email = 'This field is required';
//       } else if ('pattern' in rules && rules.pattern && value && !rules.pattern.test(value)) {
//         newErrors.email = 'Invalid format';
//       } else {
//         delete newErrors.email;
//       }
//     } else if (rules.required && !value) {
//       newErrors[name] = 'This field is required';
//     } else if ('minLength' in rules && rules.minLength && value.length < rules.minLength) {
//       newErrors[name] = `Minimum ${rules.minLength} characters required`;
//     } else if ('maxLength' in rules && rules.maxLength && value.length > rules.maxLength) {
//       newErrors[name] = `Maximum ${rules.maxLength} characters allowed`;
//     } else if ('min' in rules && rules.min && parseFloat(value) < rules.min) {
//       newErrors[name] = `Minimum value is ${rules.min}`;
//     } else {
//       delete newErrors[name];
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const validateCurrentTab = () => {
//     const tabValidations = {
//       home: () => {
//         const requiredFields = ['name', 'categories', 'price', 'description'];
//         return requiredFields.every(field => {
//           const value = formData.basic_info[field as keyof typeof formData.basic_info];
//           return validateField(field, value) && value;
//         });
//       },

//       contact: () => {
//         const requiredFields = ['email', 'phone'];
//         return requiredFields.every(field => {
//           const value = formData.contact_info[field as keyof typeof formData.contact_info];
//           return validateField(field, value);
//         });
//       },

//       location: () => {
//         const hasAddress = !!formData.location.address?.trim();
//         const hasCoords = formData.location.latitude && formData.location.longitude;

//         if (!hasAddress && !hasCoords) {
//           setErrors(prev => ({ ...prev, location: 'Address or location coordinates are required' }));
//           return false;
//         }

//         let valid = true;
//         if (formData.location.latitude) {
//           const lat = parseFloat(formData.location.latitude.toString());
//           if (isNaN(lat) || lat < -90 || lat > 90) {
//             setErrors(prev => ({ ...prev, latitude: 'Invalid latitude (-90 to 90)' }));
//             valid = false;
//           }
//         }

//         if (formData.location.longitude) {
//           const lng = parseFloat(formData.location.longitude.toString());
//           if (isNaN(lng) || lng < -180 || lng > 180) {
//             setErrors(prev => ({ ...prev, longitude: 'Invalid longitude (-180 to 180)' }));
//             valid = false;
//           }
//         }

//         return valid;
//       },

//       promote: () => true,
//       'listing-type': () => true,
//       images: () => previews.length > 0 // FIX: Check previews instead of mediaFiles
//     };

//     const isValid = tabValidations[activeTab as keyof typeof tabValidations]();
//     if (!isValid) {
//       NotificationService.showDialog('Please fill in all required fields(*) correctly', 'error');
//     }
//     return isValid;
//   };
//   /*
//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement> | { target: { files: File[] | FileList } }) => {
//     const files = Array.from(e.target.files || []);
//     const validFiles = files.filter(file =>
//       (file.type.startsWith('image/') || file.type.startsWith('video/')) &&
//       file.size <= 8 * 1024 * 1024
//     );

//     if (validFiles.length !== files.length) {
//       NotificationService.showDialog('Only image and video files under 8MB are allowed', 'error');
//     }

//     // Filter out duplicates
//     const newFiles = validFiles.filter(file =>
//       !mediaFiles.some(existingFile =>
//         existingFile.name === file.name && existingFile.size === file.size
//       )
//     );

//     if (newFiles.length === 0) return;

//     setMediaFiles(prev => [...prev, ...newFiles]);

//     // Generate previews for new files
//     newFiles.forEach(file => {
//       const reader = new FileReader();
//       reader.onload = (e) => {
//         setPreviews(prev => [...prev, {
//           url: e.target?.result as string,
//           type: file.type.startsWith('image/') ? 'image' : 'video',
//           name: file.name,
//           size: file.size
//         }]);
//       };
//       reader.readAsDataURL(file);
//     });

//     // Reset file input
//     if (fileInputRef.current) {
//       fileInputRef.current.value = '';
//     }
//   };
//   */

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement> | { target: { files: File[] | FileList } }) => {
//   const files = Array.from(e.target.files || []);
//   const validFiles = files.filter(file =>
//     (file.type.startsWith('image/') || file.type.startsWith('video/')) &&
//     file.size <= 8 * 1024 * 1024
//   );

//   if (validFiles.length !== files.length) {
//     NotificationService.showDialog('Only image and video files under 8MB are allowed', 'error');
//   }

//   // Filter out duplicates
//   const newFiles = validFiles.filter(file =>
//     !mediaFiles.some(existingFile =>
//       existingFile.name === file.name && existingFile.size === file.size
//     )
//   );

//   if (newFiles.length === 0) return;

//   setMediaFiles(prev => [...prev, ...newFiles]);

//   // Generate previews for new files with temporary IDs
//   newFiles.forEach((file, fileIndex) => {
//     const reader = new FileReader();
//     reader.onload = (e) => {
//       setPreviews(prev => [...prev, {
//         url: e.target?.result as string,
//         type: file.type.startsWith('image/') ? 'image' : 'video',
//         name: file.name,
//         size: file.size,
//         id: `temp-${Date.now()}-${fileIndex}` // Unique temporary ID for new uploads
//       }]);
//     };
//     reader.readAsDataURL(file);
//   });

//   // Reset file input
//   if (fileInputRef.current) {
//     fileInputRef.current.value = '';
//   }
// };

//   /*
//   const removeMedia = (index: number) => {
//     const preview = previews[index];
//     if (preview.id) {
//       setRemovedMediaIds(prev => [...prev, preview.id]);
//     }
    
//     const newMediaFiles = [...mediaFiles];
//     newMediaFiles.splice(index, 1);
//     setMediaFiles(newMediaFiles);

//     const newPreviews = [...previews];
//     newPreviews.splice(index, 1);
//     setPreviews(newPreviews);
//   }; */

//   /*
//   const removeMedia = (index: number) => {
//   const preview = previews[index];
  
//   // Only add to removedMediaIds if it's an actual backend ID (number)
//   if (preview.id && typeof preview.id === 'number') {
//     setRemovedMediaIds(prev => [...prev, preview.id.toString()]);
//   }
  
//   // Remove from mediaFiles array (only affects new uploads)
//   const newMediaFiles = [...mediaFiles];
//   if (index < newMediaFiles.length) {
//     newMediaFiles.splice(index, 1);
//     setMediaFiles(newMediaFiles);
//   }

//   // Remove from previews
//   const newPreviews = [...previews];
//   newPreviews.splice(index, 1);
//   setPreviews(newPreviews);
// };*/

// // Enhanced removeMedia function with better ID handling
// const removeMedia = (index: number) => {
//   const preview = previews[index];
  
//   // Only add to removedMediaIds if it's an actual backend ID (number)
//   if (preview.id && typeof preview.id === 'number') {
//     setRemovedMediaIds(prev => [...prev, preview.id.toString()]);
//     console.log(`Marking media ${preview.id} for removal`);
//   }
  
//   // Remove from mediaFiles array (only affects new uploads)
//   // Find the corresponding file in mediaFiles by matching properties
//   const fileIndex = mediaFiles.findIndex(file => 
//     file.name === preview.name && file.size === preview.size
//   );
  
//   if (fileIndex !== -1) {
//     const newMediaFiles = [...mediaFiles];
//     newMediaFiles.splice(fileIndex, 1);
//     setMediaFiles(newMediaFiles);
//   }

//   // Remove from previews
//   const newPreviews = [...previews];
//   newPreviews.splice(index, 1);
//   setPreviews(newPreviews);
// };

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     let formSection = 'basic_info';

//     if (name in formData.contact_info) formSection = 'contact_info';
//     if (name in formData.location) formSection = 'location';
//     if (name in formData.media) formSection = 'media';
//     if (name in formData.promotion) formSection = 'promotion';
//     if (name in formData.delivery_options) formSection = 'delivery_options';

//     setFormData(prev => ({
//       ...prev,
//       [formSection]: {
//         ...prev[formSection as keyof typeof prev],
//         [name]: value
//       }
//     }));

//     validateField(name, value);
//   };
// /*
//   const prepareSubmissionData = () => {
//     const submissionData = new FormData();

//     // Append attributes
//     attributes.forEach((attr, index) => {
//       if (attr.key && attr.value) {
//         submissionData.append(`attributes[${index}][key]`, attr.key);
//         submissionData.append(`attributes[${index}][value]`, attr.value);
//       }
//     });

//     // Append form data
//     Object.entries(formData).forEach(([section, data]) => {
//       Object.entries(data).forEach(([key, value]) => {
//         if (isEditMode && !isFieldModified(key, section)) return;

//         const processedValue = processFormValue(key, value);
//         submissionData.append(`${section}[${key}]`, processedValue);
//       });
//     });

//     // Process media files
//     processMediaFiles(submissionData);

//     if (isEditMode) {
//       submissionData.append('version', formData.version?.toString() || '1');
//     }

//     return submissionData;
//   };
//   */
//   /*
//   const processFormValue = (key: string, value: any): string | Blob => {
//     if (value instanceof Set) {
//       return JSON.stringify(Array.from(value));
//     }

//     if (value instanceof Date) {
//       return value.toISOString();
//     }

//     if (typeof value === 'boolean') {
//       return value ? 'true' : 'false';
//     }

//     if (typeof value === 'number') {
//       return value.toString();
//     }

//     return value;
//   };*/

//   const prepareSubmissionData = () => {
//   const submissionData = new FormData();

//   // Append attributes
//   attributes.forEach((attr, index) => {
//     if (attr.key && attr.value) {
//       submissionData.append(`attributes[${index}][key]`, attr.key);
//       submissionData.append(`attributes[${index}][value]`, attr.value);
//     }
//   });

//   // Handle basic_info section with special cases
//   if (formData.basic_info) {
//     Object.entries(formData.basic_info).forEach(([key, value]) => {
//       if (isEditMode && !isFieldModified(key, 'basic_info')) return;

//       if (key === 'categories' && value instanceof Set) {
//         // Convert categories Set to array for backend
//         const categoryIds = Array.from(value);
//         categoryIds.forEach((catId, index) => {
//           submissionData.append(`basic_info[categories][${index}]`, catId);
//         });
//       } else {
//         const processedValue = processFormValue(key, value);
//         submissionData.append(`basic_info[${key}]`, processedValue);
//       }
//     });
//   }

//   // Handle other sections normally
//   ['contact_info', 'location', 'delivery_options', 'promotion'].forEach(section => {
//     if (formData[section as keyof typeof formData]) {
//       Object.entries(formData[section as keyof typeof formData]).forEach(([key, value]) => {
//         if (isEditMode && !isFieldModified(key, section)) return;
        
//         const processedValue = processFormValue(key, value);
//         submissionData.append(`${section}[${key}]`, processedValue);
//       });
//     }
//   });

//   // Handle media section specially
//   if (formData.media) {
//     Object.entries(formData.media).forEach(([key, value]) => {
//       if (isEditMode && !isFieldModified(key, 'media')) return;

//       if (key === 'image_urls' && Array.isArray(value)) {
//         // Send existing image URLs as individual entries
//         value.forEach((url, index) => {
//           submissionData.append(`media[image_urls][${index}]`, url);
//         });
//       } else {
//         const processedValue = processFormValue(key, value);
//         submissionData.append(`media[${key}]`, processedValue);
//       }
//     });
//   }

//   // Process media files
//   processMediaFiles(submissionData);

//   // Add product ID and slug as top-level fields, not arrays
//   if (formData.id) {
//     submissionData.append('id', formData.id);
//   }
//   if (formData.slug) {
//     submissionData.append('slug', formData.slug);
//   }

//   if (isEditMode) {
//     submissionData.append('version', formData.version?.toString() || '1');
//   }

//   return submissionData;
// };


//   const processFormValue = (key: string, value: any): string | Blob => {
//   // Special handling for categories - convert Set to JSON array
//   if (key === 'categories' && value instanceof Set) {
//     return JSON.stringify(Array.from(value));
//   }

//   // Special handling for slug - keep as string
//   if (key === 'slug' && typeof value === 'string') {
//     return value;
//   }

//   // Special handling for image_urls - convert array to JSON
//   if (key === 'image_urls' && Array.isArray(value)) {
//     return JSON.stringify(value);
//   }

//   if (value instanceof Set) {
//     return JSON.stringify(Array.from(value));
//   }

//   if (value instanceof Date) {
//     return value.toISOString();
//   }

//   if (typeof value === 'boolean') {
//     return value ? 'true' : 'false';
//   }

//   if (typeof value === 'number') {
//     return value.toString();
//   }

//   // Ensure we return a string, not an array
//   return typeof value === 'string' ? value : String(value || '');
// };

//   /*
//   const processMediaFiles = (submissionData: FormData) => {
//     // Add new media files
//     mediaFiles.forEach((file) => {
//       submissionData.append('media[]', file);
//     });

//     // Add removed media IDs
//     removedMediaIds.forEach(id => {
//       submissionData.append('removed_media_ids[]', id);
//     });
//   };*/
// /*
//   const processMediaFiles = (submissionData: FormData) => {
//   // Add new media files
//   mediaFiles.forEach((file) => {
//     submissionData.append('media[]', file);
//   });

//   // Add removed media IDs (only actual backend IDs)
//   removedMediaIds.forEach(id => {
//     // Ensure we only send actual numeric IDs, not our frontend identifiers
//     if (!isNaN(Number(id)) && !id.startsWith('legacy-')) {
//       submissionData.append('removed_media_ids[]', id);
//     }
//   });
// };*/

// const processMediaFiles = (submissionData: FormData) => {
//   // Add new media files
//   mediaFiles.forEach((file) => {
//     submissionData.append('media[]', file);
//   });

//   // Handle removed media IDs - send inside media object as your backend expects
//   const validRemovedIds = removedMediaIds.filter(id => 
//     !isNaN(Number(id)) && !id.startsWith('legacy-') && !id.startsWith('temp-')
//   );

//   if (validRemovedIds.length > 0) {
//     // Send as media[removed_ids] to match backend expectation
//     validRemovedIds.forEach(id => {
//       submissionData.append('media[removed_media_ids][]', id);
//     });
//   }
// };


//   const isFieldModified = (key: string, section: string): boolean => {
//     if (!initialFormData[section as keyof typeof initialFormData]) return true;
//     return JSON.stringify(formData[section as keyof typeof formData][key as any]) !==
//       JSON.stringify(initialFormData[section as keyof typeof initialFormData][key as any]);
//   };

//   /*
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       if (!validateCurrentTab()) {
//         setIsSubmitting(false);
//         return;
//       }

//       const submissionData = prepareSubmissionData();

//       const response = isEditMode && productSlug
//         ? await ProductAxiosService.updateProduct(productSlug, submissionData)
//         : await ProductAxiosService.createProduct(submissionData);

//       if (response.data.success) {
//         const id = response.data.id || response.data?.products?.id;
//         setProductId(id);
//         setFormData(prev => ({
//           ...prev,
//           id,
//           basic_info: { ...prev.basic_info, status: 'published' }
//         }));
        
//         setPublishedProductSlug(response.data.slug);
//         setShowPostPublishModal(true);

//         if (onSuccess) {
//           onSuccess(response.data);
//         }
//       } else {
//         throw new Error(response.data.error || 'Submission failed');
//       }
//     } catch (error: any) {
//       NotificationService.showDialog(
//         error?.response?.data?.message || error?.response?.data?.error || 'Failed to publish product. Please try again.',
//         'warning'
//       );
//     } finally {
//       setIsSubmitting(false);
//     }
//   };
//   */

//   // Debug logging for form submission
// const handleSubmit = async (e: React.FormEvent) => {
//   e.preventDefault();
//   setIsSubmitting(true);

//   try {
//     if (!validateCurrentTab()) {
//       setIsSubmitting(false);
//       return;
//     }

//     const submissionData = prepareSubmissionData();
    
//     // Debug: Log what we're sending
//     console.log('Form submission data:');
//     for (let [key, value] of submissionData.entries()) {
//       console.log(`${key}:`, value);
//     }

//     const response = isEditMode && productSlug
//       ? await ProductAxiosService.updateProduct(productSlug, submissionData)
//       : await ProductAxiosService.createProduct(submissionData);

//     if (response.data.success) {
//       const id = response.data.id || response.data?.products?.id;
//       setProductId(id);
//       setFormData(prev => ({
//         ...prev,
//         id,
//         basic_info: { ...prev.basic_info, status: 'published' }
//       }));
      
//       setPublishedProductSlug(response.data.slug);
//       setShowPostPublishModal(true);

//       if (onSuccess) {
//         onSuccess(response.data);
//       }
//     } else {
//       throw new Error(response.data.error || 'Submission failed');
//     }
//   } catch (error: any) {
//     console.error('Submission error:', error);
//     NotificationService.showDialog(
//       error?.response?.data?.message || error?.response?.data?.error || 'Failed to publish product. Please try again.',
//       'warning'
//     );
//   } finally {
//     setIsSubmitting(false);
//   }
// };


//   // Tab navigation with validation
//   const handleNext = (e: React.MouseEvent) => {
//     e.preventDefault();

//     if (!validateCurrentTab()) return;

//     const tabs = ['home', 'listing-type', 'images', 'contact', 'location', 'promote'];
//     const currentIndex = tabs.indexOf(activeTab);

//     if (currentIndex < tabs.length - 1) {
//       setActiveTab(tabs[currentIndex + 1]);
//     } else {
//       handleSubmit(e as any);
//     }
//   };

//   const handleBack = () => {
//     const tabs = ['home', 'listing-type', 'images', 'contact', 'location', 'promote'];
//     const currentIndex = tabs.indexOf(activeTab);

//     if (currentIndex > 0) {
//       setActiveTab(tabs[currentIndex - 1]);
//     }
//   };

//   // Progress percentage calculation
//   const progressPercentage = () => {
//     const tabs = ['home', 'listing-type', 'images', 'contact', 'location', 'promote'];
//     const currentIndex = tabs.indexOf(activeTab);
//     return ((currentIndex + 1) / tabs.length) * 100;
//   };

//   const handleSetLocation = (lat: number, lng: number) => {
//     setFormData(prev => ({
//       ...prev,
//       location: {
//         ...prev.location,
//         latitude: lat,
//         longitude: lng
//       }
//     }));
//   };

//   const handleViewListing = () => {
//     if (closeButtonRef.current) closeButtonRef.current.click();
//     navigate(`/products/${publishedProductSlug}`);
//   };

//   if (loading) {
//     return (
//       <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '400px' }}>
//         <LoadingZoom />
//         <span className="ms-2">Loading form...</span>
//       </div>
//     );
//   }
  
//   return (
//     <div className="product-form-container">
//       <div className="tabs-header">
//         <ul className="nav nav-pills flex-nowrap gap-2 text-nowrap overflow-y-auto pe-1" role="tablist">
//           {['home', 'listing-type', 'images', 'contact', 'location', 'promote'].map((tab) => (
//             <li className="nav-item" role="presentation" key={tab}>
//               <button
//                 type="button"
//                 className={`nav-link ${activeTab === tab ? 'active' : ''}`}
//                 onClick={() => setActiveTab(tab)}
//               >
//                 {tab === 'home' && <><i className="fi-home me-2 ms-n1" />Basic Info</>}
//                 {tab === 'listing-type' && <><i className="fi-list me-2 ms-n1" />Type</>}
//                 {tab === 'images' && <><i className="fi-image me-2 ms-n1" />Media</>}
//                 {tab === 'contact' && <><i className="fi-user me-2 ms-n1" />Contact</>}
//                 {tab === 'location' && <><i className="fi-map-pin me-2 ms-n1" />Location</>}
//                 {tab === 'promote' && <><i className="fi-award me-2 ms-n1" />Promote</>}
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>

//       <div className="tab-content">
//         {/* Basic Info Tab */}
//         <div className={`tab-pane fade ${activeTab === 'home' ? 'show active' : ''}`}>
//           <section className="position-relative bg-body rounded p-2 m-2">
//             <div className="position-relative z-1">
//               <h2 className="h4 mb-3 mb-sm-4">Basic Information</h2>
//               <div className="row row-cols-1 row-cols-sm-2 g-3 g-md-4 mb-3 mb-md-4">
//                 <div className="col">
//                   <label htmlFor="name" className="form-label">Product name *</label>
//                   <input
//                     type="text"
//                     className={`form-control form-control-lg ${errors.name ? 'is-invalid' : ''}`}
//                     id="name"
//                     name="name"
//                     minLength={5}
//                     placeholder="Product name"
//                     value={formData.basic_info.name}
//                     onChange={handleInputChange}
//                     onBlur={(e) => validateField('name', e.target.value)}
//                     required
//                   />
//                   {errors.name && (
//                     <div className="invalid-feedback">{errors.name}</div>
//                   )}
//                 </div>

//                 <div className="col">
//                   <label className="form-label">Categories *</label>
//                   {Array.isArray(categories) && categories.length > 0 ? (
//                     <CategorySelector
//                       categories={categories}
//                       selectedIds={formData.basic_info.categories}
//                       onChange={handleCategoryChange}
//                       error={errors.categories}
//                     />
//                   ) : (
//                     <div className="text-muted">
//                       <LoadingZoom size='sm' />
//                       {categories === null ? '...' : 'Fetching categories...'}
//                     </div>
//                   )}
//                 </div>

//                 <div className="col">
//                   <label htmlFor="price" className="form-label">Price *</label>
//                   <div className="input-group">
//                     <input
//                       type="number"
//                       className={`form-control form-control-lg ${errors.price ? 'is-invalid' : ''}`}
//                       id="price"
//                       name="price"
//                       value={formData.basic_info.price}
//                       onChange={handleInputChange}
//                       onBlur={(e) => validateField('price', e.target.value)}
//                       min="0.01"
//                       step="0.01"
//                       required
//                     />
//                     {errors.price && (
//                       <div className="invalid-feedback">{errors.price}</div>
//                     )}
//                   </div>
//                 </div>
//                 <div className="col">
//                   <label htmlFor="condition" className="form-label">Condition *</label>
//                   <select
//                     className={`form-select form-select-lg ${errors.condition ? 'is-invalid' : ''}`}
//                     id="condition"
//                     name="condition"
//                     value={formData.basic_info.condition}
//                     onChange={handleInputChange}
//                     onBlur={(e) => validateField('condition', e.target.value)}
//                     required
//                   >
//                     <option value="">Select condition...</option>
//                     <option value="new">Brand New</option>
//                     <option value="used">Used - Like New</option>
//                     <option value="good">Used - Good</option>
//                     <option value="fair">Used - Fair</option>
//                   </select>
//                   {errors.condition && (
//                     <div className="invalid-feedback">{errors.condition}</div>
//                   )}
//                 </div>
//               </div>
//               <label htmlFor="description" className="form-label fs-6 fw-semibold">Description *</label>
//               <p className="fs-sm mb-2">Describe your product in detail to attract buyers</p>
//               <textarea
//                 className={`form-control form-control-lg ${errors.description ? 'is-invalid' : ''}`}
//                 rows={4}
//                 id="description"
//                 name="description"
//                 placeholder="Describe your product (minimum 10 characters)"
//                 minLength={10}
//                 maxLength={1000}
//                 value={formData.basic_info.description}
//                 onChange={handleInputChange}
//                 onBlur={(e) => validateField('description', e.target.value)}
//                 required
//               />
//               {errors.description && (
//                 <div className="invalid-feedback">{errors.description}</div>
//               )}
//               <div className="text-end mt-1">
//                 <small className="text-muted">
//                   {formData.basic_info.description.length}/1000 characters
//                 </small>
//               </div>
//             </div>
//           </section>
//         </div>

//         {/* Listing Type Tab */}
//         <div className={`tab-pane fade ${activeTab === 'listing-type' ? 'show active' : ''}`}>
//           <section className="position-relative bg-body rounded p-2 m-2">
//             <div className="position-relative z-1 p-2 m-2">
//               <h4 className="h4 mb-3 mb-sm-4">Select a listing type</h4>
//               <div className="nav flex-nowrap gap-2 text-nowrap overflow-auto">
//                 {['product', 'service', 'property', 'rental', 'vehicle'].map((type) => (
//                   <Fragment key={type}>
//                     <input
//                       type="radio"
//                       className="btn-check"
//                       name="listing_type"
//                       id={`listing-${type}`}
//                       value={type}
//                       checked={formData.basic_info.listing_type === type}
//                       onChange={handleInputChange}
//                     />
//                     <label htmlFor={`listing-${type}`} className="btn btn-outline-dark rounded-pill">
//                       <div className="d-flex flex-column flex-xxl-row align-items-center m-1">
//                         <div className="d-flex text-dark-emphasis bg-body-tertiary rounded-circle">
//                           <i className={`fi-${type === 'product' ? 'shopping-bag' : type === 'service' ? 'settings' : type === 'property' ? 'home' : 'car'} fs-2 m-xxl-1`} />
//                         </div>
//                         <div className="text-center">
//                           {type === 'product' && 'Sell item'}
//                           {type === 'rental' && 'Rent'}
//                           {type === 'service' && 'Offer service'}
//                           {type === 'property' && 'Sell property'}
//                           {type === 'vehicle' && 'Sell a vehicle'}
//                         </div>
//                       </div>
//                     </label>
//                   </Fragment>
//                 ))}
//               </div>
//             </div>
//           </section>

//           {/* Product Attributes Section */}
//           <section className="position-relative bg-body rounded p-2 m-2">
//             <div className="position-relative z-1">
//               <h2 className="h4 mb-3">Product Attributes</h2>
//               <div className="table-responsive">
//                 <table className="table">
//                   <thead>
//                     <tr>
//                       <th>Attribute</th>
//                       <th>Value</th>
//                       <th width={"50px"}></th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {attributes.map((attr, index) => (
//                       <tr key={index}>
//                         <td>
//                           <input
//                             type="text"
//                             className="form-control rounded-pill"
//                             placeholder="e.g., Color"
//                             value={attr.key}
//                             onChange={(e) => handleAttributeChange(index, 'key', e.target.value)}
//                           />
//                         </td>
//                         <td>
//                           <input
//                             type="text"
//                             className="form-control rounded-pill"
//                             placeholder="e.g., Red"
//                             value={attr.value}
//                             onChange={(e) => handleAttributeChange(index, 'value', e.target.value)}
//                           />
//                         </td>
//                         <td  className='align-items-center'>
//                           <button
//                             type="button"
//                             className="btn btn-sm btn-danger form-control rounded-pill"
//                             onClick={() => removeAttribute(index)}
//                             disabled={attributes.length <= 1}
//                           >
//                             <i className="ci-trash"></i>
//                           </button>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//               <button
//                 type="button"
//                 className="btn btn-outline-primary rounded-pill"
//                 onClick={addAttribute}
//               >
//                 <i className="ci-add me-2"></i> Add Attribute
//               </button>
//             </div>
//           </section>
//         </div>

//         {/* Media Tab */}
//         <div className={`tab-pane fade ${activeTab === 'images' ? 'show active' : ''}`}>
//           <section className="position-relative bg-body rounded p-2 m-2">
//             <div className="position-relative z-1 p-2 m-2">
//               <div className="d-sm-flex align-items-center justify-content-between mb-3 mb-sm-4">
//                 <h2 className="h4 mb-2 mb-sm-0 me-3">Photos & Videos</h2>
//                 <div className="position-relative d-flex">
//                   <i className="fi-info text-info mt-1 me-2" />
//                 </div>
//               </div>
//               <small className="fs-sm text-warning mb-3">
//                 The maximum file size is 8 MB. Formats: jpeg, jpg, png, mp4, mov. Put the main picture first.
//                 {previews.length === 0 && (<>At least one image is required for your listing</>)}
//               </small>
//               <div style={{ maxWidth: '852px' }}>
//                 <div className="row row-cols-2 row-cols-sm-3 g-2 g-md-4 g-lg-3 g-xl-4">
//                   {/* Media previews */}
//                   {previews.map((preview, index) => (
//                     <div className="col" key={index}>
//                       <div className="hover-effect-opacity position-relative overflow-hidden rounded">
//                         {index === 0 && (
//                           <span className="badge text-bg-light position-absolute top-0 start-0 z-3 mt-2 ms-2">Cover</span>
//                         )}
//                         <div className="ratio" style={{ aspectRatio: '4/3' }}>
//                           {preview.type === 'image' ? (
//                             <img src={preview.url} alt={`Preview ${index + 1}`} className="img-fluid object-fit-cover" />
//                           ) : (
//                             <video controls className="w-100 h-100 object-fit-cover">
//                               <source src={preview.url} type={mediaFiles[index]?.type || 'video/mp4'} />
//                             </video>
//                           )}
//                         </div>
//                         <div className="hover-effect-target position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100 opacity-0">
//                           <button
//                             type="button"
//                             className="btn btn-icon btn-sm btn-light position-relative z-2"
//                             aria-label="Remove"
//                             onClick={() => removeMedia(index)}
//                           >
//                             <i className="ci-trash-empty"></i>
//                           </button>
//                           <span className="position-absolute top-0 start-0 w-100 h-100 bg-black bg-opacity-25 z-1" />
//                         </div>
//                       </div>
//                       <small className="text-muted d-block text-truncate mt-1">
//                         {preview.name} ({Math.round(preview.size / 1024)} KB)
//                       </small>
//                     </div>
//                   ))}

//                   {/* Upload button */}
//                   <div className="col">
//                     <div
//                       ref={uploadAreaRef}
//                       className={`d-flex align-items-center justify-content-center position-relative h-100 cursor-pointer bg-body-tertiary border border-2 border-dotted rounded p-3 ${isDragging ? 'border-primary bg-primary bg-opacity-10' : ''}`}
//                       onClick={() => fileInputRef.current?.click()}
//                       onDragEnter={handleDragEnter}
//                       onDragLeave={handleDragLeave}
//                       onDragOver={handleDragOver}
//                       onDrop={handleDrop}
//                       style={{ minHeight: '150px' }}
//                     >
//                       <div className="text-center">
//                         <i className={`fi-plus-circle fs-4 ${isDragging ? 'text-primary' : 'text-secondary-emphasis'} mb-2`} />
//                         <div className="hover-effect-underline stretched-link fs-sm fw-medium">
//                           {isDragging ? 'Drop files here' : 'Upload photos/videos'}
//                         </div>
//                         <div className="fs-xs text-muted mt-1">
//                           or drag and drop, paste from clipboard
//                         </div>
//                       </div>
//                     </div>
//                     <input
//                       ref={fileInputRef}
//                       type="file"
//                       multiple
//                       accept="image/*,video/*"
//                       onChange={handleFileChange}
//                       style={{ display: 'none' }}
//                     />
//                   </div>
//                 </div>
//               </div>
//               <div className="pt-3 mt-2 mt-md-3">
//                 <label htmlFor="video_link" className="form-label">Link to YouTube/Vimeo video (optional)</label>
//                 <div className="position-relative">
//                   <i className="fi-link position-absolute top-50 start-0 translate-middle-y fs-lg ms-3" />
//                   <input
//                     type="url"
//                     className="form-control form-control-lg form-icon-start"
//                     id="video_link"
//                     name="video_link"
//                     placeholder="www.youtube.com/..."
//                     value={formData.media.video_link}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//               </div>
//             </div>
//           </section>
//         </div>

//         {/* Contact Tab */}
//         <div className={`tab-pane fade ${activeTab === 'contact' ? 'show active' : ''}`}>
//           <section className="position-relative bg-body rounded p-2 m-2">
//             <div className="position-relative z-1 p-2 m-2">
//               <h2 className="h4 mb-3 mb-sm-4">Contact Information</h2>
//               <div className="nav nav-pills flex-wrap gap-3">
//                 <div>
//                   <input
//                     type="radio"
//                     className="btn-check"
//                     id="delivery"
//                     name="delivery_type"
//                     value="delivery"
//                     checked={formData.delivery_options.delivery_type === 'delivery'}
//                     onChange={handleInputChange}
//                   />
//                   <label className="nav-link" htmlFor="delivery">
//                     <i className="fi-truck fs-base ms-n1 me-2" />
//                     Delivery Available
//                   </label>
//                 </div>
//                 <div>
//                   <input
//                     type="radio"
//                     className="btn-check"
//                     id="pickup"
//                     name="delivery_type"
//                     value="pickup"
//                     checked={formData.delivery_options.delivery_type === 'pickup'}
//                     onChange={handleInputChange}
//                   />
//                   <label className="nav-link" htmlFor="pickup">
//                     <i className="fi-map-pin fs-base ms-n1 me-2" />
//                     Pick-up Only
//                   </label>
//                 </div>
//               </div>
//               <div className="row row-cols-1 row-cols-sm-2 g-3 g-md-2">
//                 <div className="col">
//                   <label htmlFor="email" className="form-label">Email *</label>
//                   <input
//                     type="email"
//                     className={`form-control form-control-lg ${errors.email ? 'is-invalid' : ''}`}
//                     id="email"
//                     name="email"
//                     value={formData.contact_info.email || ''}
//                     onChange={handleInputChange}
//                     onBlur={(e) => validateField('email', e.target.value)}
//                     required
//                   />
//                   {errors.email && (
//                     <div className="invalid-feedback">{errors.email}</div>
//                   )}
//                 </div>
//                 <div className="col">
//                   <label htmlFor="phone" className="form-label">Phone number *</label>
//                   <input
//                     type="tel"
//                     className={`form-control form-control-lg ${errors.phone ? 'is-invalid' : ''}`}
//                     id="phone"
//                     name="phone"
//                     value={formData.contact_info.phone}
//                     onChange={handleInputChange}
//                     onBlur={(e) => validateField('phone', e.target.value || '')}
//                     placeholder="(___) ___-____"
//                     required
//                   />
//                   {errors.phone && (
//                     <div className="invalid-feedback">{errors.phone}</div>
//                   )}
//                 </div>
//                 <div className="col">
//                   <label htmlFor="first_name" className="form-label">Your name *</label>
//                   <input
//                     type="text"
//                     className={`form-control form-control-lg ${errors.first_name ? 'is-invalid' : ''}`}
//                     id="first_name"
//                     name="first_name"
//                     value={formData.contact_info.first_name}
//                     onChange={handleInputChange}
//                     onBlur={(e) => validateField('first_name', e.target.value)}
//                     required
//                   />
//                   {errors.first_name && (
//                     <div className="invalid-feedback">{errors.first_name}</div>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </section>
//         </div>

//         {/* Location Tab */}
//         <div className={`tab-pane fade ${activeTab === 'location' ? 'show active' : ''}`}>
//           <section className="position-relative bg-body rounded p-2 m-2">
//             <div className="position-relative z-1 p-2 m-2">
//               <h2 className="h4 mb-3 mb-sm-4">Location Details</h2>

//                <div className="col-12">
//                    <small className="fs-sm text-warning me-2">Leave blank to use your current location details.</small>
//                   <button
//                     type="button"
//                     className="btn btn-outline-primary btn-sm rounded-pill"
//                     onClick={handleGetLocation}
//                     disabled={isLocating}
//                   >
//                     {isLocating ? (
//                       <>
//                         <LoadingZoom size='sm' />
//                         Getting location...
//                       </>
//                     ) : (
//                       <>
//                         <i className="ci-map-pin me-2"></i>
//                         Use Current Location
//                       </>
//                     )}
//                   </button>
//                 </div> 

//               <div className="row g-4">
//                 <div className="col">
//                   <div className="position-relative">
//                     <label htmlFor="address" className="form-label">Address *</label>
//                     <input
//                       type="text"
//                       name="address"
//                       className={`form-control form-control-lg ${errors.address ? 'is-invalid' : ''}`}
//                       id="address"
//                       value={formData.location.address}
//                       onChange={handleInputChange}
//                       onBlur={(e) => validateField('address', e.target.value)}
//                       required
//                     />
//                     {errors.address && (
//                       <div className="invalid-feedback">{errors.address}</div>
//                     )}
//                   </div>
//                 </div>

//                 <div className="col-sm-3">
//                   <div className="position-relative">
//                     <label htmlFor="latitude" className="form-label">Latitude</label>
//                     <input
//                       type="number"
//                       name="latitude"
//                       className="form-control form-control-lg"
//                       id="latitude"
//                       step="any"
//                       value={formData.location.latitude || ''}
//                       onChange={handleInputChange}
//                       placeholder="40.7128"
//                     />
//                     {errors.latitude && (
//                       <div className="invalid-feedback">{errors.latitude}</div>
//                     )}
//                   </div>
//                 </div>

//                 <div className="col-sm-3">
//                   <div className="position-relative">
//                     <label htmlFor="longitude" className="form-label">Longitude</label>
//                     <input
//                       type="number"
//                       name="longitude"
//                       className="form-control form-control-lg"
//                       id="longitude"
//                       step="any"
//                       value={formData.location.longitude || ''}
//                       onChange={handleInputChange}
//                       placeholder="-74.0060"
//                     />
//                     {errors.longitude && (
//                       <div className="invalid-feedback">{errors.longitude}</div>
//                     )}
//                   </div>
//                 </div>

//                 <div className="col-12">
//                   <div className="map-container" style={{ height: '300px', borderRadius: '8px' }}>
//                     {formData.location.latitude && formData.location.longitude ? (
//                       <MapContainer 
//                         center={[formData.location.latitude, formData.location.longitude]} 
//                         zoom={13}
//                         style={{ height: '100%', width: '100%' }}
//                       >
//                         <TileLayer
//                           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//                         />
//                         <LocationMarker 
//                           position={[formData.location.latitude, formData.location.longitude]}
//                           setPosition={handleSetLocation}
//                         />
//                       </MapContainer>
//                     ) : (
//                       <div className="d-flex justify-content-center align-items-center h-100 bg-light">
//                         <p className="text-muted">Map will appear after setting location</p>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </section>
//         </div>

//         {/* Promote Tab */}
//         <div className={`tab-pane fade ${activeTab === 'promote' ? 'show active' : ''}`}>
//           <section className="position-relative bg-body rounded p-2 m-2">
//             <div className="position-relative z-1 p-2 m-2">
//               <h2 className="h4 mb-3 mb-sm-4">Boost Your Listing Visibility</h2>
              
//                <div className="col-12 mb-2">
//                    <small className="fs-sm text-warning me-2">You can still publish for a free basic visibility.</small>
//                   <button
//                     type="button"
//                     className="btn btn-sm btn-outline-primary rounded-pill"
//                     onClick={handleFreePublish}
//                     disabled={isSubmitting || isSavingDraft}
//                   >
//                     {isSubmitting ? (
//                       <>
//                         <LoadingZoom size='sm' />
//                         Publishing...
//                       </>
//                     ) : (
//                       'Publish for Free'
//                     )}
//                   </button>
//                 </div> 

//               {/* Premium Plans */}
//               <div className="mb-3">
//                 <div className="d-flex align-items-center justify-content-between mb-3">
//                   <span className="badge bg-faded-primary text-primary fs-sm">Recommended</span>
//                 </div>
//                 <p className="fs-sm mb-4">Get more visibility with our promotion plans</p>
//               </div>

//               {isSavingDraft ? (
//                 <div className="text-center py-4">
//                   <LoadingZoom size="sm" />
//                   <p className="text-muted mt-2">Preparing your listing for promotion</p>
//                 </div>
//               ) : draftError ? (
//                 <div className="alert alert-danger">
//                   <i className="ci-close-circle me-2"></i>
//                   {draftError}
//                   <div className="mt-2">
//                     <button 
//                       className="btn btn-sm btn-danger"
//                       onClick={saveProductAsDraft}
//                     >
//                       Retry Saving Draft
//                     </button>
//                   </div>
//                 </div>
//               ) : productId ? (
//                 <SubscriptionPlans
//                   entityType="product"
//                   entityId={productId}
//                   onSubscriptionSuccess={handleSubscriptionSuccess}
//                 />
//               ) : (
//                 <div className="alert alert-info">
//                   <i className="ci-info-circle me-2"></i>
//                   Complete the previous steps to enable promotion options
//                 </div>
//               )}
//             </div>
//           </section>
//         </div>

//       </div>
      
//       {/* Progress bar and navigation buttons */}
//       <div className="progress rounded-0 mb-2" role="progressbar" style={{ height: '4px' }}>
//         <div
//           className={`progress-bar ${uploadProgress > 0 ? 'bg-info' : 'bg-dark'}`}
//           style={{ width: `${uploadProgress > 0 ? uploadProgress : progressPercentage()}%` }}
//         />
//       </div>

//          <footer className="sticky-bottom modal-footer mb-4">
//                     <button
//                       type="button"
//                       className="btn btn-outline-dark"
//                       onClick={handleBack}
//                       disabled={activeTab === 'home' || isSubmitting}
//                     >
//                       <i className="ci-arrow-left me-2" />
//                       Back
//                     </button>
                    
//                     <button
//                       type="button"
//                       className="btn btn-dark ms-auto"
//                       onClick={handleNext}
//                       disabled={isSubmitting || isSavingDraft}
//                     >
//                        {isSubmitting ? (
//             <>
//               <LoadingZoom size='sm' />
//               {uploadProgress > 0 ? 'Uploading...' : 'Processing...'}
//             </>
//           ) : activeTab === 'promote' ? (
//             isEditMode ? 'Update Listing' : 'Publish Listing'
//           ) : (
//             <>
//               Next <i className="ci-arrow-right ms-2" />
//             </>
//           )}
//                     </button>
//                   </footer>

//       {/* Post-publish modal */}
//       {showPostPublishModal && (
//         <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
//           <div className="modal-dialog modal-dialog-centered">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h5 className="modal-title">Product Published Successfully!</h5>
//                 <button
//                   type="button"
//                   className="btn-close"
//                   onClick={() => setShowPostPublishModal(false)}
//                   ref={closeButtonRef}
//                 ></button>
//               </div>
//               <div className="modal-body text-center">
//                 <i className="ci-check-circle text-success display-4 mb-3"></i>
//                 <p className="mb-4">Your product has been successfully published and is now live!</p>
//               </div>
//               <div className="modal-footer">
//                 <button
//                   type="button"
//                   className="btn btn-outline-secondary"
//                   onClick={() => setShowPostPublishModal(false)}
//                 >
//                   Close
//                 </button>
//                 <button
//                   type="button"
//                   className="btn btn-primary"
//                   onClick={handleViewListing}
//                 >
//                   View Listing
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// ProductForm.propTypes = {
//   productSlug: PropTypes.string,
//   editProductData: PropTypes.object,
//   onSuccess: PropTypes.func,
//   onClose: PropTypes.func,
//   mode: PropTypes.oneOf(['create', 'edit'])
// };

// export default ProductForm;

// v4
import React, { useState, useRef, useEffect, useCallback, useMemo, Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import { NotificationService } from '../../../../services/local/NotificationService';
import { ProductAxiosService } from '../../../../services/net/ProductAxiosService';
import PropTypes from 'prop-types';
import { LoadingZoom } from '../../LoadingSpinner';
import { SubscriptionPlans } from './Promote';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix leaflet marker icons
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface ProductFormProps {
  productSlug?: string;
  editProductData?: any;
  onSuccess?: (updatedProduct?: any) => void;
  onClose?: () => void;
  mode?: 'create' | 'edit';
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
  id?: string | number;
}

interface ProductFormData {
  id?: string;
  slug?: string;
  basic_info: {
    name: string;
    categories: Set<string>;
    price: number;
    stock: number;
    condition: 'new' | 'used' | 'good' | 'fair';
    description: string;
    listing_type: 'product' | 'service' | 'property' | 'rental' | 'vehicle';
    status?: 'published' | 'draft';
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
    image_urls: string[];
    removed_media_ids?: string[]; // Moved here
  };
  images?: Array<{id: number, url: string}>;
  attributes?: ProductAttribute[];
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

  return position ? <Marker position={position} /> : null;
};

const ProductForm = ({ productSlug, editProductData, onSuccess, mode = 'create' }: ProductFormProps) => {
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const uploadAreaRef = useRef<HTMLDivElement>(null);
  
  const [activeTab, setActiveTab] = useState('home');
  const [uploadProgress, setUploadProgress] = useState(0);
  const [mediaFiles, setMediaFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<MediaFile[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLocating, setIsLocating] = useState(false);
  const [attributes, setAttributes] = useState<ProductAttribute[]>([{ key: '', value: '' }]);
  const [isSavingDraft, setIsSavingDraft] = useState(false);
  const [draftError, setDraftError] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isPasteAllowed] = useState(true);
  const [showPostPublishModal, setShowPostPublishModal] = useState(false);
  const [publishedProductSlug, setPublishedProductSlug] = useState<string | null>(null);
  const [productId, setProductId] = useState<string | null>(null);

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
      video_link: '',
      image_urls: []
    },
    promotion: {
      promotion_plan: ''
    }
  };

  const [formData, setFormData] = useState<ProductFormData>(initialFormData);
  const isEditMode = mode === 'edit';

  const transformProductToFormData = (apiProduct: any): ProductFormData => {
    const categories = new Set<string>();
    
    if (apiProduct.categories && Array.isArray(apiProduct.categories)) {
      apiProduct.categories.forEach((category: any) => {
        categories.add(category.id.toString());
      });
    }

    const imageUrls: string[] = [];
    if (apiProduct.images && Array.isArray(apiProduct.images)) {
      imageUrls.push(...apiProduct.images.map((img: any) => img.url));
    } else if (apiProduct.media?.image_urls && Array.isArray(apiProduct.media.image_urls)) {
      imageUrls.push(...apiProduct.media.image_urls);
    } else if (apiProduct.image_urls && Array.isArray(apiProduct.image_urls)) {
      imageUrls.push(...apiProduct.image_urls);
    } else if (apiProduct.image_url) {
      imageUrls.push(apiProduct.image_url);
    }

    let contactInfo = {
      first_name: '',
      email: '',
      phone: ''
    };

    if (apiProduct.users && apiProduct.users.length > 0) {
      const user = apiProduct.users[0];
      contactInfo = {
        first_name: user.name || '',
        email: user.email || '',
        phone: user.phone || ''
      };
    }

    let location = {
      address: '',
      latitude: null,
      longitude: null
    };

    if (apiProduct.users && apiProduct.users.length > 0) {
      const user = apiProduct.users[0];
      const primaryAddress = user.addresses?.find((addr: any) => addr.is_primary);
      
      if (primaryAddress) {
        location = {
          address: primaryAddress.street_address || '',
          latitude: null,
          longitude: null
        };
      }
    }

    return {
      id: apiProduct.id?.toString(),
      slug: apiProduct.slug,
      basic_info: {
        name: apiProduct.name || '',
        categories: categories,
        price: parseFloat(apiProduct.price || apiProduct.original_price || 0),
        stock: parseInt(apiProduct.stock?.toString() || '1'),
        condition: apiProduct.condition || 'new',
        description: apiProduct.description || '',
        listing_type: apiProduct.listing_type || 'product',
        status: apiProduct.status || 'draft'
      },
      delivery_options: {
        delivery_type: apiProduct.delivery_type || 
                      apiProduct.delivery_options?.delivery_type || 
                      'delivery'
      },
      contact_info: contactInfo,
      location: location,
      media: {
        video_link: apiProduct.media?.video_link || apiProduct.video_link || '',
        image_urls: imageUrls
      },
      images: apiProduct.images || [],
      attributes: apiProduct.attributes || [],
      promotion: {
        promotion_plan: apiProduct.promotion?.plan || apiProduct.promotion_plan || ''
      },
      version: apiProduct.version || 0
    };
  };

  useEffect(() => {
    const initializeFormData = async () => {
      try {
        setLoading(true);
        let productData: ProductFormData | null = null;
        
        if (isEditMode) {
          if (editProductData) {
            productData = transformProductToFormData(editProductData);
          } else if (productSlug) {
            const response = await ProductAxiosService.getBySlug(productSlug);
            if (response.data) {
              productData = transformProductToFormData(response.data);
            }
          }
        }

        if (productData) {
          setFormData(productData);
          
          if (productData.id) {
            setProductId(productData.id);
          }
          
          if (productData.images && productData.images.length > 0) {
            const mediaPreviews = productData.images.map((image, index) => ({
              url: image.url,
              type: 'image' as const,
              name: `Image ${index + 1}`,
              size: 0,
              id: image.id
            }));
            setPreviews(mediaPreviews);
          } else if (productData.media?.image_urls && productData.media.image_urls.length > 0) {
            const mediaPreviews = productData.media.image_urls.map((url, index) => ({
              url,
              type: 'image' as const,
              name: `Image ${index + 1}`,
              size: 0,
              id: `legacy-${index}`
            }));
            setPreviews(mediaPreviews);
          }
          
          if (productData.attributes && productData.attributes.length > 0) {
            setAttributes(productData.attributes);
          } else {
            setAttributes([{ key: '', value: '' }]);
          }
        } else if (!isEditMode) {
          setFormData(initialFormData);
          setPreviews([]);
        }
      } catch (error) {
        console.error('Initialization error:', error);
        NotificationService.showDialog('Failed to load product data', 'error');
      } finally {
        setLoading(false);
      }
    };

    initializeFormData();
  }, [productSlug, editProductData, mode]);

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
    try {
      let slug = '';
      
      if (!productId) {
        const submissionData = prepareSubmissionData();
        submissionData.append('status', 'published');
        
        const response = await ProductAxiosService.createProduct(submissionData);
        if (!response.data.success) {
          throw new Error(response.data.error || 'Failed to publish');
        }
        slug = response.data.slug;
        setProductId(response.data.id);
      } else {
        const submissionData = prepareSubmissionData();
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
    }
  };

  const handleSubscriptionSuccess = async (subscription: any) => {
    try {
      if (productId) {
        const submissionData = prepareSubmissionData();
        submissionData.append('status', 'published');
        const response = await ProductAxiosService.updateProduct(productId, submissionData);
        if (!response.data.success) {
          throw new Error(response.data.error || 'Failed to publish');
        }
        setPublishedProductSlug(response.data.slug || productSlug || '');
      } else {
        const response = await ProductAxiosService.getBySlug(subscription.entity_id);
        if (response.data.success) {
          setPublishedProductSlug(response.data.product.slug);
        }
      }

      setShowPostPublishModal(true);
    } catch (error) {
      console.error('Publishing error:', error);
      NotificationService.showDialog(
        (error as any)?.response?.data?.message || (error as any)?.response?.data?.error || 'Failed to publish product after subscription', 
        'error'
      );
    }
  };

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
      }
    };

    fetchCategories();
  }, []);

  const NestedCategoryList = ({
    categories,
    selectedIds,
    onSelect,
    depth = 0,
    initiallyExpanded = false
  }: any) => {
    const [expandedIds, setExpandedIds] = useState(new Set());

    useEffect(() => {
      if (initiallyExpanded) {
        const parentIds = categories
          .filter((cat: any) => cat.children?.length > 0)
          .map((cat: any) => cat.id);
        setExpandedIds(new Set(parentIds));
      }
    }, [categories, initiallyExpanded]);

    const toggleExpand = useCallback((id: any) => {
      setExpandedIds(prev => {
        const newSet = new Set(prev);
        newSet.has(id) ? newSet.delete(id) : newSet.add(id);
        return newSet;
      });
    }, []);

    return (
      <ul className="list-unstyled" style={{ paddingLeft: `${depth * 20}px` }}>
        {categories.map((category: any) => {
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
      const selectedNames: string[] = [];
      const findCategoryName = (items: Category[], id: string): string | null => {
        for (const item of items) {
          if (item.id === id) return item.name;
          if (item.children) {
            const found = findCategoryName(item.children, id);
            if (found) return found;
          }
        }
        return null;
      };

      selectedIds.forEach(id => {
        const name = findCategoryName(categories, id);
        if (name) selectedNames.push(name);
      });

      return selectedNames;
    }, [categories, selectedIds]);

    const handleCategorySelect = (id: string) => {
      const newSet = new Set(selectedIds);
      newSet.has(id) ? newSet.delete(id) : newSet.add(id);
      onChange(newSet);
    };

    return (
      <div className="position-relative" ref={containerRef}>
        <div
          className={`form-control ${error ? 'is-invalid' : ''}`}
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
                className="form-control mb-2"
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
  } as const;

  const validateField = (name: string, value: any) => {
    const rules = validateRules[name as keyof typeof validateRules];
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
      } else if ('pattern' in rules && rules.pattern && value && !rules.pattern.test(value)) {
        newErrors.email = 'Invalid format';
      } else {
        delete newErrors.email;
      }
    } else if (rules.required && !value) {
      newErrors[name] = 'This field is required';
    } else if ('minLength' in rules && rules.minLength && value.length < rules.minLength) {
      newErrors[name] = `Minimum ${rules.minLength} characters required`;
    } else if ('maxLength' in rules && rules.maxLength && value.length > rules.maxLength) {
      newErrors[name] = `Maximum ${rules.maxLength} characters allowed`;
    } else if ('min' in rules && rules.min && parseFloat(value) < rules.min) {
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
          const value = formData.basic_info[field as keyof typeof formData.basic_info];
          return validateField(field, value) && value;
        });
      },
      contact: () => {
        const requiredFields = ['email', 'phone'];
        return requiredFields.every(field => {
          const value = formData.contact_info[field as keyof typeof formData.contact_info];
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
          const lat = parseFloat(formData.location.latitude.toString());
          if (isNaN(lat) || lat < -90 || lat > 90) {
            setErrors(prev => ({ ...prev, latitude: 'Invalid latitude (-90 to 90)' }));
            valid = false;
          }
        }

        if (formData.location.longitude) {
          const lng = parseFloat(formData.location.longitude.toString());
          if (isNaN(lng) || lng < -180 || lng > 180) {
            setErrors(prev => ({ ...prev, longitude: 'Invalid longitude (-180 to 180)' }));
            valid = false;
          }
        }

        return valid;
      },
      promote: () => true,
      'listing-type': () => true,
      images: () => previews.length > 0
    };

    const isValid = tabValidations[activeTab as keyof typeof tabValidations]();
    if (!isValid) {
      NotificationService.showDialog('Please fill in all required fields(*) correctly', 'error');
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

    const newFiles = validFiles.filter(file =>
      !mediaFiles.some(existingFile =>
        existingFile.name === file.name && existingFile.size === file.size
      )
    );

    if (newFiles.length === 0) return;

    setMediaFiles(prev => [...prev, ...newFiles]);

    newFiles.forEach((file, fileIndex) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviews(prev => [...prev, {
          url: e.target?.result as string,
          type: file.type.startsWith('image/') ? 'image' : 'video',
          name: file.name,
          size: file.size,
          id: `temp-${Date.now()}-${fileIndex}`
        }]);
      };
      reader.readAsDataURL(file);
    });

    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const removeMedia = (index: number) => {
    const preview = previews[index];
    const newPreviews = [...previews];
    newPreviews.splice(index, 1);
    setPreviews(newPreviews);

    // Update formData to include removed media ID if applicable
    if (preview.id && typeof preview.id === 'number') {
      setFormData(prev => {
        const existingRemoved = prev.media.removed_media_ids || [];
        return {
          ...prev,
          media: {
            ...prev.media,
            removed_media_ids: [...existingRemoved, preview.id!.toString()]
          }
        };
      });
    }

    // Remove from mediaFiles if it's a new file
    const fileIndex = mediaFiles.findIndex(file => 
      file.name === preview.name && file.size === preview.size
    );
    
    if (fileIndex !== -1) {
      const newMediaFiles = [...mediaFiles];
      newMediaFiles.splice(fileIndex, 1);
      setMediaFiles(newMediaFiles);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
        ...prev[formSection as keyof typeof prev],
        [name]: value
      }
    }));

    validateField(name, value);
  };

  const prepareSubmissionData = () => {
    const submissionData = new FormData();

    // Append attributes
    attributes.forEach((attr, index) => {
      if (attr.key && attr.value) {
        submissionData.append(`attributes[${index}][key]`, attr.key);
        submissionData.append(`attributes[${index}][value]`, attr.value);
      }
    });

    // Handle basic_info
    if (formData.basic_info) {
      Object.entries(formData.basic_info).forEach(([key, value]) => {
        if (isEditMode && !isFieldModified(key, 'basic_info')) return;

        if (key === 'categories' && value instanceof Set) {
          const categoryIds = Array.from(value);
          categoryIds.forEach((catId, index) => {
            submissionData.append(`basic_info[categories][${index}]`, catId);
          });
        } else {
          const processedValue = processFormValue(key, value);
          submissionData.append(`basic_info[${key}]`, processedValue);
        }
      });
    }

    // Handle other sections
    ['contact_info', 'location', 'delivery_options', 'promotion'].forEach(section => {
      if (formData[section as keyof typeof formData]) {
        Object.entries(formData[section as keyof typeof formData]).forEach(([key, value]) => {
          if (isEditMode && !isFieldModified(key, section)) return;
          
          const processedValue = processFormValue(key, value);
          submissionData.append(`${section}[${key}]`, processedValue);
        });
      }
    });

    // Handle media section
    if (formData.media) {
      Object.entries(formData.media).forEach(([key, value]) => {
        if (isEditMode && !isFieldModified(key, 'media')) return;

        if (key === 'image_urls' && Array.isArray(value)) {
          value.forEach((url, index) => {
            submissionData.append(`media[image_urls][${index}]`, url);
          });
        } else {
          const processedValue = processFormValue(key, value);
          submissionData.append(`media[${key}]`, processedValue);
        }
      });
    }

    // Add media files
    mediaFiles.forEach((file) => {
      submissionData.append('media[]', file);
    });

    // Add product ID and slug
    if (formData.id) {
      submissionData.append('id', formData.id);
    }
    if (formData.slug) {
      submissionData.append('slug', formData.slug);
    }

    if (isEditMode) {
      submissionData.append('version', formData.version?.toString() || '1');
    }

    return submissionData;
  };

  const processFormValue = (key: string, value: any): string | Blob => {
    if (key === 'categories' && value instanceof Set) {
      return JSON.stringify(Array.from(value));
    }

    if (key === 'image_urls' && Array.isArray(value)) {
      return JSON.stringify(value);
    }

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

    return typeof value === 'string' ? value : String(value || '');
  };

  const isFieldModified = (key: string, section: string): boolean => {
    if (!initialFormData[section as keyof typeof initialFormData]) return true;
    return JSON.stringify(formData[section as keyof typeof formData][key as any]) !== JSON.stringify(initialFormData[section as keyof typeof initialFormData][key as any]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
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
        
        setPublishedProductSlug(response.data.slug);
        setShowPostPublishModal(true);

        if (onSuccess) {
          onSuccess(response.data);
        }
      } else {
        throw new Error(response.data.error || 'Submission failed');
      }
    } catch (error: any) {
      console.error('Submission error:', error);
      NotificationService.showDialog(
        error?.response?.data?.message || error?.response?.data?.error || 'Failed to publish product. Please try again.',
        'warning'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // console.log(`submissionData: ${JSON.stringify(submissionData)}, & submissionData: ${JSON.stringify(submissionData)}`);
  console.log(`formData: ${JSON.stringify(formData)}`);

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();

    if (!validateCurrentTab()) return;

    const tabs = ['home', 'listing-type', 'images', 'contact', 'location', 'promote'];
    const currentIndex = tabs.indexOf(activeTab);

    if (currentIndex < tabs.length - 1) {
      setActiveTab(tabs[currentIndex + 1]);
    } else {
      handleSubmit(e as any);
    }
  };

  const handleBack = () => {
    const tabs = ['home', 'listing-type', 'images', 'contact', 'location', 'promote'];
    const currentIndex = tabs.indexOf(activeTab);

    if (currentIndex > 0) {
      setActiveTab(tabs[currentIndex - 1]);
    }
  };

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

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '400px' }}>
        <LoadingZoom />
        <span className="ms-2">Loading form...</span>
      </div>
    );
  }
  
  return (
    <div className="product-form-container">
      <div className="tabs-header">
        <ul className="nav nav-pills flex-nowrap gap-2 text-nowrap overflow-y-auto pe-1" role="tablist">
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
              <div className="nav flex-nowrap gap-2 text-nowrap overflow-auto">
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
                    <label htmlFor={`listing-${type}`} className="btn btn-outline-dark rounded-pill">
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
                      <th width={"50px"}></th>
                    </tr>
                  </thead>
                  <tbody>
                    {attributes.map((attr, index) => (
                      <tr key={index}>
                        <td>
                          <input
                            type="text"
                            className="form-control rounded-pill"
                            placeholder="e.g., Color"
                            value={attr.key}
                            onChange={(e) => handleAttributeChange(index, 'key', e.target.value)}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control rounded-pill"
                            placeholder="e.g., Red"
                            value={attr.value}
                            onChange={(e) => handleAttributeChange(index, 'value', e.target.value)}
                          />
                        </td>
                        <td  className='align-items-center'>
                          <button
                            type="button"
                            className="btn btn-sm btn-danger form-control rounded-pill"
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
                className="btn btn-outline-primary rounded-pill"
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
                {previews.length === 0 && (<>At least one image is required for your listing</>)}
              </small>
              <div style={{ maxWidth: '852px' }}>
                <div className="row row-cols-2 row-cols-sm-3 g-2 g-md-4 g-lg-3 g-xl-4">
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
                    disabled={isSubmitting || isSavingDraft}
                  >
                    {isSubmitting ? (
                      <>
                        <LoadingZoom size='sm' />
                        Publishing...
                      </>
                    ) : 'Publish for Free'}
                  </button>
                </div> 

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
      
      <div className="progress rounded-0 mb-2" role="progressbar" style={{ height: '4px' }}>
        <div
          className={`progress-bar ${uploadProgress > 0 ? 'bg-info' : 'bg-dark'}`}
          style={{ width: `${uploadProgress > 0 ? uploadProgress : progressPercentage()}%` }}
        />
      </div>

      <footer className="sticky-bottom modal-footer mb-4">
        <button
          type="button"
          className="btn btn-outline-dark"
          onClick={handleBack}
          disabled={activeTab === 'home' || isSubmitting}
        >
          <i className="ci-arrow-left me-2" />
          Back
        </button>
        
        <button
          type="button"
          className="btn btn-dark ms-auto"
          onClick={handleNext}
          disabled={isSubmitting || isSavingDraft}
        >
          {isSubmitting ? (
            <>
              <LoadingZoom size='sm' />
              {uploadProgress > 0 ? 'Uploading...' : 'Processing...'}
            </>
          ) : activeTab === 'promote' ? (
            isEditMode ? 'Update Listing' : 'Publish Listing'
          ) : (
            <>
              Next <i className="ci-arrow-right ms-2" />
            </>
          )}
        </button>
      </footer>

      {showPostPublishModal && (
        <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Product Published Successfully!</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowPostPublishModal(false)}
                  ref={closeButtonRef}
                ></button>
              </div>
              <div className="modal-body text-center">
                <i className="ci-check-circle text-success display-4 mb-3"></i>
                <p className="mb-4">Your product has been successfully published and is now live!</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={() => setShowPostPublishModal(false)}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleViewListing}
                >
                  View Listing
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

ProductForm.propTypes = {
  productSlug: PropTypes.string,
  editProductData: PropTypes.object,
  onSuccess: PropTypes.func,
  onClose: PropTypes.func,
  mode: PropTypes.oneOf(['create', 'edit'])
};

export default ProductForm;