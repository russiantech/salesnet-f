import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
// import React, { useState, useEffect, useRef, useCallback } from 'react';
// import { OffersAxiosService } from '../../../services/net/OffersAxiosService';
// import { ProductAxiosService } from '../../../services/net/ProductAxiosService';
// import ResponseModal from '../../../components/shared/modals/ResponseModal';
// import PropTypes from 'prop-types';
// import LoadingSpinner from '../../../components/shared/LoadingSpinner';
// import { UsersService } from '../../../services/local/UsersService';
// import { NotificationService } from '../../../services/local/NotificationService';
// const initialFormData = {
//     name: '',
//     description: '',
//     discount_type: 'percentage',
//     discount_value: 10,
//     promo_code: null,
//     start_date: new Date(),
//     end_date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
//     is_featured: false,
//     banner_image: '',
//     background_gradient: '',
//     text_color: '#ffffff',
//     product_ids: [],  // Changed from selectedProducts to match backend
//     category_ids: [], // Changed from selectedCategories to match backend
//     media: {
//         files: [],
//         video_link: ''
//     },
// };
// // interface OfferFormProps {
// //     onSuccess?: () => void;
// //     offer?: typeof initialFormData;  // Make offer optional with default
// // }
// // const OfferForm = ({ 
// //     offer = initialFormData, 
// //     onSuccess = () => {} 
// // }: OfferFormProps) => {
// const OfferForm = ({ offer, onSuccess }) => {
//     const [products, setProducts] = useState([]);
//     const [categories, setCategories] = useState([]);
//     const [filteredProducts, setFilteredProducts] = useState([]);
//     const [filteredCategories, setFilteredCategories] = useState([]);
//     const [isLoading, setIsLoading] = useState(true);
//     const [formData, setFormData] = useState(initialFormData);
//     const [previews, setPreviews] = useState([]);
//     const [responseModal, setResponseModal] = useState({
//         show: false,
//         message: '',
//         success: false
//     });
//     const fileInputRef = useRef(null);
//     // 
//       const [isAuthenticated, setIsAuthenticated] = useState(false);
//       useEffect(() => {
//         const checkAuth = () => {
//           const authStatus = UsersService.isAuthenticated();
//           setIsAuthenticated(authStatus);
//         };
//         checkAuth();
//         UsersService.subscribe(checkAuth);
//         return () => UsersService.unsubscribe(checkAuth);
//       }, [products]);
//     // 
//     // Fetch products and categories on mount
//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const [productsRes, categoriesRes] = await Promise.all([
//                     ProductAxiosService.fetchPage(),
//                     ProductAxiosService.fetchCategories()
//                 ]);
//                 setProducts(productsRes.data.products);
//                 setFilteredProducts(productsRes.data.products);
//                 setCategories(categoriesRes.data.categories);
//                 setFilteredCategories(categoriesRes.data.categories);
//                 if (offer) {
//                     populateFormWithOfferData(offer);
//                 }
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//                 setResponseModal({
//                     show: true,
//                     message: 'Failed to load required data. Please try again later.',
//                     success: false
//                 });
//             } finally {
//                 setIsLoading(false);
//             }
//         };
//         fetchData();
//     }, [offer]);
//     const populateFormWithOfferData = useCallback((offerData) => {
//         setFormData(prevData => ({
//             ...prevData,
//             name: offerData.name || offerData.title || '', // Handle both name and title
//             description: offerData.description,
//             discount_type: offerData.discount_type,
//             discount_value: offerData.discount_value,
//             promo_code: offerData.promo_code,
//             start_date: new Date(offerData.start_date),
//             end_date: new Date(offerData.end_date),
//             is_featured: offerData.is_featured,
//             banner_image: offerData.banner_image,
//             background_gradient: offerData.background_gradient,
//             text_color: offerData.text_color,
//             product_ids: offerData.products?.map(p => p.id) || [], // Changed to product_ids
//             category_ids: offerData.categories?.map(c => c.id) || [], // Changed to category_ids
//             media: {
//                 files: offerData.media_files || [],
//                 video_link: offerData.video_link || ''
//             }
//         }));
//         // Set previews for existing media
//         if (offerData.media_files?.length > 0) {
//             setPreviews(offerData.media_files.map(file => ({
//                 url: file.url,
//                 name: file.name,
//                 size: file.size,
//                 type: file.type.startsWith('image') ? 'image' : 'video'
//             })));
//         }
//     }, []);
//     const handleChange = (e) => {
//         // const { name, value, type, checked } = e.target;
//         // console.log('Checkbox toggled:', e.target.checked); // Debugging line
//         const { name, value, type, checked } = e.target;
//         // Special handling for date inputs
//         if (name === 'start_date' || name === 'end_date') {
//             setFormData(prevData => ({
//                 ...prevData,
//                 [name]: value ? new Date(value) : new Date() // Fallback to current date if empty
//             }));
//         } else {
//             setFormData(prevData => ({
//                 ...prevData,
//                 // is_featured: e.target.checked,
//                 [name]: type === 'checkbox' ? checked : value,
//             }));
//         }
//         // console.log(`name:-${name}, value:-${value}, type:-${type}, checked:-${checked}`)
//     };
//     const handleMediaInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prevData => ({
//             ...prevData,
//             media: {
//                 ...prevData.media,
//                 [name]: value
//             }
//         }));
//     };
//     // 
//     const handleProductToggle = (productId) => {
//         setFormData(prevData => {
//             const newSelected = prevData.product_ids.includes(productId)
//                 ? prevData.product_ids.filter(id => id !== productId)
//                 : [...prevData.product_ids, productId];
//             return {
//                 ...prevData,
//                 product_ids: newSelected
//             };
//         });
//     };
//     const handleCategoryToggle = (categoryId) => {
//         setFormData(prevData => {
//             const newSelected = prevData.category_ids.includes(categoryId)
//                 ? prevData.category_ids.filter(id => id !== categoryId)
//                 : [...prevData.category_ids, categoryId];
//             return {
//                 ...prevData,
//                 category_ids: newSelected
//             };
//         });
//     };
//     const handleSearch = (e, type) => {
//         const query = e.target.value.toLowerCase();
//         if (type === 'products') {
//             setFilteredProducts(products.filter(product =>
//                 product.name.toLowerCase().includes(query)
//             ));
//         } else if (type === 'categories') {
//             setFilteredCategories(categories.filter(category =>
//                 category.name.toLowerCase().includes(query)
//             ));
//         }
//     };
//     const handleFileChange = async (e) => {
//         const files = Array.from(e.target.files);
//         if (files.length === 0) return;
//         // Validate file sizes and types
//         const validFiles = files.filter(file => {
//             const isValidSize = file.size <= 8 * 1024 * 1024; // 8MB
//             const isValidType = /\.(jpe?g|png|mp4|mov)$/i.test(file.name);
//             if (!isValidSize) {
//                 setResponseModal({
//                     show: true,
//                     message: `File ${file.name} exceeds 8MB limit`,
//                     success: false
//                 });
//             }
//             if (!isValidType) {
//                 setResponseModal({
//                     show: true,
//                     message: `File ${file.name} has unsupported format`,
//                     success: false
//                 });
//             }
//             return isValidSize && isValidType;
//         });
//         if (validFiles.length === 0) return;
//         const newPreviews = await Promise.all(validFiles.map(file => {
//             return new Promise((resolve) => {
//                 const reader = new FileReader();
//                 reader.onload = (e) => {
//                     resolve({
//                         url: e.target.result,
//                         name: file.name,
//                         size: file.size,
//                         type: file.type.startsWith('image') ? 'image' : 'video'
//                     });
//                 };
//                 reader.readAsDataURL(file);
//             });
//         }));
//         setPreviews(prev => [...prev, ...newPreviews]);
//         setFormData(prev => ({
//             ...prev,
//             media: {
//                 ...prev.media,
//                 files: [...prev.media.files, ...validFiles]
//             }
//         }));
//     };
//     const removeMedia = (index) => {
//         setPreviews(prev => prev.filter((_, i) => i !== index));
//         setFormData(prev => ({
//             ...prev,
//             media: {
//                 ...prev.media,
//                 files: prev.media.files.filter((_, i) => i !== index)
//             }
//         }));
//     };
//     const validateForm = () => {
//         if (!formData.name.trim()) {
//             setResponseModal({
//                 show: true,
//                 message: 'Offer name is required',
//                 success: false
//             });
//             return false;
//         }
//         if (formData.product_ids.length === 0) {
//             setResponseModal({
//                 show: true,
//                 message: 'Please select at least one product',
//                 success: false
//             });
//             return false;
//         }
//         const startDate = formData.start_date instanceof Date ?
//             formData.start_date : new Date(formData.start_date);
//         const endDate = formData.end_date instanceof Date ?
//             formData.end_date : new Date(formData.end_date);
//         if (startDate >= endDate) {
//             setResponseModal({
//                 show: true,
//                 message: 'End date must be after start date',
//                 success: false
//             });
//             return false;
//         }
//         if (previews.length === 0 && !formData.media.video_link) {
//             setResponseModal({
//                 show: true,
//                 message: 'Please upload at least one image or provide a video link',
//                 success: false
//             });
//             return false;
//         }
//         return true;
//     };
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         // Validate the form before proceeding
//         if (!validateForm()) return;
//         // Prepare the offer data object
//         const offerData = {
//             name: formData.name,
//             description: formData.description,
//             discount_type: formData.discount_type,
//             discount_value: parseInt(formData.discount_value, 10), // Ensure this is an integer
//             product_ids: formData.product_ids.map(id => parseInt(id, 10)), // Convert to integers
//             category_ids: formData.category_ids.map(id => parseInt(id, 10)), // Convert to integers
//             is_featured: formData.is_featured,
//             promo_code: formData.promo_code,
//             start_date: new Date(formData.start_date).toISOString(),
//             end_date: new Date(formData.end_date).toISOString(),
//             banner_image: formData.banner_image,
//             background_gradient: formData.background_gradient,
//             text_color: formData.text_color,
//             media_files: formData.media.files.filter(file => file && file.name) // Ensure valid media files
//         };
//         // console.log('Offer Data to be sent:', offerData); // Debugging line
//         // Create a FormData object to send the offer data
//         const formDataToSend = new FormData();
//         // Append offer data to FormData
//         Object.entries(offerData).forEach(([key, value]) => {
//             if (Array.isArray(value)) {
//                 value.forEach(item => formDataToSend.append(`${key}[]`, item));
//             } else if (value !== undefined && value !== null) {
//                 formDataToSend.append(key, value);
//             }
//         });
//         // Append media files to FormData
//         if (formData.media?.files) {
//             formData.media.files.forEach(file => {
//                 formDataToSend.append('media_files[]', file);
//             });
//         }
//         // Append video link if it exists
//         if (formData.media?.video_link) {
//             formDataToSend.append('video_link', formData.media.video_link);
//         }
//         // check if authenticated
//         if (!isAuthenticated) {
//             NotificationService.showDialog('Please sign in to compare products', 'info');
//             ShowSigninCanvas();
//             return;
//         }
//         try {
//             // Determine whether to update or create an offer
//             const response = offer
//                 ? await OffersAxiosService.updateOffer(offer.id, formDataToSend)
//                 : await OffersAxiosService.createOffer(formDataToSend);
//             // console.log(formDataToSend)
//             // Handle success response
//             // onSuccess(response.data);
//             // if (onSuccess) await onSuccess();
//             NotificationService.showDialog(
//                 offer ? response?.data?.message : 'Offer created successfully',
//                 'info'
//             );
//             setResponseModal({
//                 show: true,
//                 message: offer ? response?.data?.message : 'Offer created successfully',
//                 success: true
//             });
//             // close the offer form 
//             const canvasElement = document.getElementById('OfferForm');
//             if (canvasElement) {
//               const existingBackdrops = document.querySelectorAll('.offcanvas-backdrop');
//               existingBackdrops.forEach(backdrop => backdrop.remove());
//               const offcanvas = new window.bootstrap.Offcanvas(canvasElement);
//               offcanvas.hide();
//             }
//             // 
//         } catch (error) {
//             console.error('Error saving offer:', error);
//             setResponseModal({
//                 show: true,
//                 message: error.response?.data?.error || 'Failed to save offer. Please try again.',
//                 success: false
//             });
//         }
//     };
//     if (isLoading) {
//         return (
//             <LoadingSpinner />
//         );
//     }
//     return (
//         // <div id="OfferForm" className="modal fade container mt-4">
//         <>
//             <div className="modal fade" id="OfferForm" tabIndex={-1} aria-modal="true" role="dialog">
//                 <div className="modal-dialog modal-xl" role="document">
//                     <div className="modal-content">
//                         <div className="modal-header">
//                             <h5 className="modal-title">{offer ? 'Edit Offer' : 'Create New Offer'}</h5>
//                             <button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close" />
//                         </div>
//                         <div className="modal-body d-flex flex-column gap-4 pt-2">
//                             <form onSubmit={handleSubmit}>
//                                 <div className="row">
//                                     <div className="col-md-8">
//                                         {/* Basic Info */}
//                                         <div className="mb-3">
//                                             <label className="form-label">Offer Title*</label>
//                                             <input
//                                                 name="name"
//                                                 type="text"
//                                                 className="form-control"
//                                                 value={formData.name}
//                                                 onChange={handleChange}
//                                                 placeholder="Summer Sale 2023"
//                                                 required
//                                             />
//                                         </div>
//                                         <div className="mb-3">
//                                             <label className="form-label">Description</label>
//                                             <textarea
//                                                 name="description"
//                                                 className="form-control"
//                                                 rows="3"
//                                                 value={formData.description}
//                                                 onChange={handleChange}
//                                             />
//                                         </div>
//                                         {/* Products Selection */}
//                                         <div className="mb-3">
//                                             <label className="form-label">Select Products*</label>
//                                             <div className="dropdown">
//                                                 <input
//                                                     type="text"
//                                                     className="form-control mb-2"
//                                                     placeholder="Search products..."
//                                                     data-bs-toggle="dropdown"
//                                                     aria-expanded="false"
//                                                     onChange={(e) => handleSearch(e, 'products')}
//                                                 />
//                                                 <div className="dropdown-menu w-100">
//                                                     <ul className="list-unstyled" style={{ maxHeight: '200px', overflowY: 'auto' }}>
//                                                         {filteredProducts.map(product => (
//                                                             <li key={product.id} className="dropdown-item">
//                                                                 <div className="form-check">
//                                                                     <input
//                                                                         className="form-check-input"
//                                                                         id={`prod-${product.id}`}
//                                                                         type="checkbox"
//                                                                         checked={formData.product_ids.includes(product.id)}
//                                                                         onChange={() => handleProductToggle(product.id)}
//                                                                     />
//                                                                     <label className="form-check-label" htmlFor={`prod-${product.id}`}>
//                                                                         {`${product.name} ($${product.price})`}
//                                                                     </label>
//                                                                 </div>
//                                                             </li>
//                                                         ))}
//                                                     </ul>
//                                                 </div>
//                                             </div>
//                                             {formData.product_ids.length > 0 && (
//                                                 <div className="mt-2">
//                                                     <h6>Selected Products:</h6>
//                                                     <div className="d-flex flex-wrap gap-2">
//                                                         {formData.product_ids.map(prodId => {
//                                                             const product = products.find(p => p.id === prodId);
//                                                             return product ? (
//                                                                 <span key={prodId} className="badge bg-primary">
//                                                                     {product.name}
//                                                                 </span>
//                                                             ) : null;
//                                                         })}
//                                                     </div>
//                                                 </div>
//                                             )}
//                                         </div>
//                                         {/* Categories Selection */}
//                                         <div className="mb-3">
//                                             <label className="form-label">Select Categories*</label>
//                                             <div className="dropdown">
//                                                 <input
//                                                     type="text"
//                                                     className="form-control mb-2"
//                                                     placeholder="Search categories..."
//                                                     data-bs-toggle="dropdown"
//                                                     aria-expanded="false"
//                                                     onChange={(e) => handleSearch(e, 'categories')}
//                                                 />
//                                                 <div className="dropdown-menu w-100">
//                                                     <ul className="list-unstyled" style={{ maxHeight: '200px', overflowY: 'auto' }}>
//                                                         {filteredCategories.map(category => (
//                                                             <li key={category.id} className="dropdown-item">
//                                                                 <div className="form-check">
//                                                                     <input
//                                                                         className="form-check-input"
//                                                                         id={`cat-${category.id}`}
//                                                                         type="checkbox"
//                                                                         checked={formData.category_ids.includes(category.id)}
//                                                                         onChange={() => handleCategoryToggle(category.id)}
//                                                                     />
//                                                                     <label className="form-check-label" htmlFor={`cat-${category.id}`}>
//                                                                         {category.name}
//                                                                     </label>
//                                                                 </div>
//                                                             </li>
//                                                         ))}
//                                                     </ul>
//                                                 </div>
//                                             </div>
//                                             {formData.category_ids.length > 0 && (
//                                                 <div className="mt-2">
//                                                     <h6>Selected Categories:</h6>
//                                                     <div className="d-flex flex-wrap gap-2">
//                                                         {formData.category_ids.map(catId => {
//                                                             const category = categories.find(c => c.id === catId);
//                                                             return category ? (
//                                                                 <span key={catId} className="badge bg-secondary">
//                                                                     {category.name}
//                                                                 </span>
//                                                             ) : null;
//                                                         })}
//                                                     </div>
//                                                 </div>
//                                             )}
//                                         </div>
//                                         {/* Media Upload Section */}
//                                         <section className="position-relative bg-body rounded p-2 m-2">
//                                             <div className="position-relative z-1 p-2 m-2">
//                                                 <div className="d-sm-flex align-items-center justify-content-between mb-3 mb-sm-4">
//                                                     <h2 className="h4 mb-2 mb-sm-0 me-3">Photos & Videos</h2>
//                                                     <div className="position-relative d-flex">
//                                                         <i className="fi-info text-info mt-1 me-2" />
//                                                     </div>
//                                                 </div>
//                                                 <small className="fs-sm text-warning mb-3">
//                                                     The maximum file size is 8 MB. Formats: jpeg, jpg, png, mp4, mov. Put the main picture first.
//                                                     {previews.length === 0 && (<>At least one image is required for your listing</>)}
//                                                 </small>
//                                                 <div style={{ maxWidth: '852px' }}>
//                                                     <div className="row row-cols-2 row-cols-sm-3 g-2 g-md-4 g-lg-3 g-xl-4">
//                                                         {/* Media previews */}
//                                                         {previews.map((preview, index) => (
//                                                             <div className="col" key={index}>
//                                                                 <div className="hover-effect-opacity position-relative overflow-hidden rounded">
//                                                                     {index === 0 && (
//                                                                         <span className="badge text-bg-light position-absolute top-0 start-0 z-3 mt-2 ms-2">Cover</span>
//                                                                     )}
//                                                                     <div className="ratio" style={{ aspectRatio: '4/3' }}>
//                                                                         {preview.type === 'image' ? (
//                                                                             <img src={preview.url} alt={`Preview ${index + 1}`} className="img-fluid object-fit-cover" />
//                                                                         ) : (
//                                                                             <video controls className="w-100 h-100 object-fit-cover">
//                                                                                 <source src={preview.url} type={formData.media.files[index].type} />
//                                                                             </video>
//                                                                         )}
//                                                                     </div>
//                                                                     <div className="hover-effect-target position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100 opacity-0">
//                                                                         <button
//                                                                             type="button"
//                                                                             className="btn btn-icon btn-sm btn-light position-relative z-2"
//                                                                             aria-label="Remove"
//                                                                             onClick={() => removeMedia(index)}
//                                                                         >
//                                                                             <i className="ci-trash-empty"></i>
//                                                                         </button>
//                                                                         <span className="position-absolute top-0 start-0 w-100 h-100 bg-black bg-opacity-25 z-1" />
//                                                                     </div>
//                                                                 </div>
//                                                                 <small className="text-muted d-block text-truncate mt-1">
//                                                                     {preview.name} ({Math.round(preview.size / 1024)} KB)
//                                                                 </small>
//                                                             </div>
//                                                         ))}
//                                                         {/* Upload button */}
//                                                         <div className="col">
//                                                             <div
//                                                                 className="d-flex align-items-center justify-content-center position-relative h-100 cursor-pointer bg-body-tertiary border border-2 border-dotted rounded p-3"
//                                                                 onClick={() => fileInputRef.current.click()}
//                                                                 style={{ minHeight: '150px' }}
//                                                             >
//                                                                 <div className="text-center">
//                                                                     <i className="fi-plus-circle fs-4 text-secondary-emphasis mb-2" />
//                                                                     <div className="hover-effect-underline stretched-link fs-sm fw-medium">
//                                                                         Upload photos/videos
//                                                                     </div>
//                                                                     <input
//                                                                         type="file"
//                                                                         ref={fileInputRef}
//                                                                         onChange={handleFileChange}
//                                                                         className="d-none"
//                                                                         multiple
//                                                                         accept="image/*,video/*"
//                                                                     />
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                                 <div className="pt-3 mt-2 mt-md-3">
//                                                     <label htmlFor="video_link" className="form-label">Link to YouTube/Vimeo video (optional)</label>
//                                                     <div className="position-relative">
//                                                         <i className="fi-link position-absolute top-50 start-0 translate-middle-y fs-lg ms-3" />
//                                                         <input
//                                                             type="url"
//                                                             className="form-control form-control-lg form-icon-start"
//                                                             id="video_link"
//                                                             name="video_link"
//                                                             placeholder="www.youtube.com/..."
//                                                             value={formData.media.video_link}
//                                                             onChange={handleMediaInputChange}
//                                                         />
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </section>
//                                     </div>
//                                     <div className="col-md-4">
//                                         {/* Discount Settings */}
//                                         <div className="card mb-3">
//                                             <div className="card-header bg-light">
//                                                 <h5>Discount Settings</h5>
//                                             </div>
//                                             <div className="card-body">
//                                                 <div className="mb-3">
//                                                     <label className="form-label">Discount Type*</label>
//                                                     <select
//                                                         name="discount_type"
//                                                         className="form-select"
//                                                         value={formData.discount_type}
//                                                         onChange={handleChange}
//                                                     >
//                                                         <option value="percentage">Percentage</option>
//                                                         <option value="fixed_amount">Fixed Amount</option>
//                                                     </select>
//                                                 </div>
//                                                 <div className="mb-3">
//                                                     <label className="form-label">
//                                                         {formData.discount_type === 'percentage' ? 'Discount Percentage*' : 'Discount Amount*'}
//                                                     </label>
//                                                     <div className="input-group">
//                                                         <input
//                                                             name="discount_value"
//                                                             type="number"
//                                                             className="form-control"
//                                                             value={formData.discount_value}
//                                                             onChange={handleChange}
//                                                             min="0"
//                                                             step={formData.discount_type === 'percentage' ? '1' : '0.01'}
//                                                             required
//                                                         />
//                                                         <span className="input-group-text">
//                                                             {formData.discount_type === 'percentage' ? '%' : '$'}
//                                                         </span>
//                                                     </div>
//                                                 </div>
//                                                 <div className="mb-3">
//                                                     <label className="form-label">Promo Code (Optional)</label>
//                                                     <input
//                                                         name="promo_code"
//                                                         type="text"
//                                                         className="form-control"
//                                                         value={formData.promo_code}
//                                                         onChange={handleChange}
//                                                         placeholder="SUMMER2023"
//                                                     />
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         {/* Date Settings */}
//                                         <div className="card mb-3">
//                                             <div className="card-header bg-light">
//                                                 <h5>Schedule</h5>
//                                             </div>
//                                             <div className="card-body">
//                                                 <div className="mb-3">
//                                                     <label className="form-label">Start Date*</label>
//                                                     <input
//                                                         type="datetime-local"
//                                                         name="start_date"
//                                                         className="form-control"
//                                                         value={formData.start_date instanceof Date ?
//                                                             formData.start_date.toISOString().slice(0, 16) :
//                                                             new Date(formData.start_date).toISOString().slice(0, 16)}
//                                                         onChange={handleChange}
//                                                         required
//                                                     />
//                                                 </div>
//                                                 <div className="mb-3">
//                                                     <label className="form-label">End Date*</label>
//                                                     <input
//                                                         type="datetime-local"
//                                                         name="end_date"
//                                                         className="form-control"
//                                                         value={formData.end_date instanceof Date ?
//                                                             formData.end_date.toISOString().slice(0, 16) :
//                                                             new Date(formData.end_date).toISOString().slice(0, 16)}
//                                                         onChange={handleChange}
//                                                         required
//                                                     />
//                                                 </div>
//                                                 <div className="form-check form-switch mb-3">
//                                                     <input
//                                                         type="checkbox"
//                                                         name="is_featured"
//                                                         className="form-check-input"
//                                                         checked={formData.is_featured}
//                                                         onChange={handleChange}
//                                                     />
//                                                     <label className="form-check-label">
//                                                         Featured Offer
//                                                     </label>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 {/* Visual Settings */}
//                                 <div className="card mb-3">
//                                     <div className="card-header bg-light">
//                                         <h5>Visual Presentation</h5>
//                                     </div>
//                                     <div className="card-body">
//                                         <div className="row">
//                                             <div className="col-md-6 mb-3">
//                                                 <label className="form-label">Banner Image URL</label>
//                                                 <input
//                                                     name="banner_image"
//                                                     type="text"
//                                                     className="form-control"
//                                                     value={formData.banner_image}
//                                                     onChange={handleChange}
//                                                     placeholder="https://salesnet.co/banners/banner.jpg"
//                                                 />
//                                             </div>
//                                             <div className="col-md-6 mb-3">
//                                                 <label className="form-label">Background Gradient</label>
//                                                 <input
//                                                     name="background_gradient"
//                                                     type="text"
//                                                     className="form-control"
//                                                     value={formData.background_gradient}
//                                                     onChange={handleChange}
//                                                     placeholder="linear-gradient(90deg, #ff9966, #ff5e62)"
//                                                 />
//                                                 <small className="text-muted">Example: linear-gradient(90deg, #ff9966, #ff5e62)</small>
//                                             </div>
//                                         </div>
//                                         <div className="row">
//                                             <div className="col-md-6">
//                                                 <label htmlFor="text_color" className="form-label">Text Color</label>
//                                                 <div className="input-group">
//                                                     <input
//                                                         type="color"
//                                                         id="text_color"
//                                                         name="text_color"
//                                                         className="form-control form-control-color"
//                                                         value={formData.text_color}
//                                                         onChange={handleChange}
//                                                         title="Choose text color"
//                                                     />
//                                                     <input
//                                                         type="text"
//                                                         className="form-control"
//                                                         value={formData.text_color}
//                                                         onChange={(e) => {
//                                                             // Ensure the value starts with #
//                                                             const value = e.target.value.startsWith('#') ? e.target.value : `#${e.target.value}`;
//                                                             setFormData(prev => ({
//                                                                 ...prev,
//                                                                 text_color: value
//                                                             }));
//                                                         }}
//                                                         maxLength={7}
//                                                     />
//                                                 </div>
//                                                 <div className="mt-2">
//                                                     <div
//                                                         className="p-2 rounded"
//                                                         style={{
//                                                             backgroundColor: formData.background_gradient || '#f8f9fa',
//                                                             color: formData.text_color,
//                                                             border: '1px solid #dee2e6'
//                                                         }}
//                                                     >
//                                                         Preview text with selected color
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                             <div className="col-md-6">
//                                                 <label className="form-label">Gradient Preview</label>
//                                                 <div
//                                                     className="p-4 rounded"
//                                                     style={{
//                                                         background: formData.background_gradient || 'linear-gradient(90deg, #f8f9fa, #e9ecef)',
//                                                         border: '1px solid #dee2e6',
//                                                         height: '100px'
//                                                     }}
//                                                 >
//                                                     <p
//                                                         className="m-0"
//                                                         style={{ color: formData.text_color }}
//                                                     >
//                                                         {formData.name || 'Your offer title will appear here'}
//                                                     </p>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="d-flex justify-content-end gap-2">
//                                     <button
//                                         type="button"
//                                         className="btn btn-outline-secondary"
//                                         onClick={() => setFormData(initialFormData)}
//                                     >
//                                         Reset
//                                     </button>
//                                     <button
//                                         type="submit"
//                                         className="btn btn-primary"
//                                     >
//                                         {offer ? 'Update Offer' : 'Create Offer'}
//                                     </button>
//                                 </div>
//                             </form>
//                             {/*  */}
//                             <ResponseModal
//                                 show={responseModal.show}
//                                 message={responseModal.message}
//                                 success={responseModal.success}
//                                 onClose={() => setResponseModal({ ...responseModal, show: false })}
//                             />
//                         </div>
//                         <div className="modal-footer flex-column flex-sm-row align-items-stretch">
//                             <button className="btn btn-primary" type="button" data-bs-dismiss="modal">
//                                 Close
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };
// OfferForm.propTypes = {
//     offer: PropTypes.shape({
//         id: PropTypes.number,
//         name: PropTypes.string,
//         description: PropTypes.string,
//         discount_type: PropTypes.string,
//         discount_value: PropTypes.number,
//         promo_code: PropTypes.string,
//         start_date: PropTypes.string,
//         end_date: PropTypes.string,
//         is_featured: PropTypes.bool,
//         banner_image: PropTypes.string,
//         background_gradient: PropTypes.string,
//         text_color: PropTypes.string,
//         products: PropTypes.arrayOf(PropTypes.shape({
//             id: PropTypes.number
//         })),
//         categories: PropTypes.arrayOf(PropTypes.shape({
//             id: PropTypes.number
//         })),
//         media_files: PropTypes.array,
//         video_link: PropTypes.string
//     }),
//     onSuccess: PropTypes.func.isRequired
// };
// export default OfferForm;
// 
import { useState, useEffect, useRef, useCallback } from 'react';
import { OffersAxiosService } from '../../../services/net/OffersAxiosService';
import { ProductAxiosService } from '../../../services/net/ProductAxiosService';
// import ResponseModal from '../../../components/shared/modals/ResponseModal';
import PropTypes from 'prop-types';
import LoadingSpinner from '../../../components/shared/LoadingSpinner';
import { UsersService } from '../../../services/local/UsersService';
import { NotificationService } from '../../../services/local/NotificationService';
import ResponseModal from '../../../components/shared/modals/ResponseModal';
import { ShowSigninCanvas } from '../../../utils/ShowSigninCanvas';
const initialFormData = {
    name: '',
    description: '',
    discount_type: 'percentage',
    discount_value: 10,
    promo_code: null,
    start_date: new Date(),
    end_date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    is_featured: false,
    banner_image: '',
    background_gradient: '',
    text_color: '#ffffff',
    product_ids: [], // Changed from selectedProducts to match backend
    category_ids: [], // Changed from selectedCategories to match backend
    media: {
        files: [],
        video_link: ''
    },
};
const OfferForm = ({ offer, onSuccess }) => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [filteredCategories, setFilteredCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState(initialFormData);
    const [previews, setPreviews] = useState([]);
    const [responseModal, setResponseModal] = useState({
        show: false,
        message: '',
        success: false
    });
    const fileInputRef = useRef(null);
    // Authentication check
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    useEffect(() => {
        const checkAuth = () => {
            const authStatus = UsersService.isAuthenticated();
            setIsAuthenticated(authStatus);
        };
        checkAuth();
        UsersService.subscribe(checkAuth);
        return () => UsersService.unsubscribe(checkAuth);
    }, [products]);
    // check if authenticated
    // if (!isAuthenticated) {
    //     NotificationService.showDialog('Please sign in to create offers', 'info');
    //     ShowSigninCanvas();
    //     return;
    // }
    // Fetch products and categories on mount
    useEffect(() => {
        const fetchData = async () => {
            try {
                const [productsRes, categoriesRes] = await Promise.all([
                    ProductAxiosService.fetchPage(),
                    ProductAxiosService.fetchCategories()
                ]);
                setProducts(productsRes.data.products);
                setFilteredProducts(productsRes.data.products);
                setCategories(categoriesRes.data.categories);
                setFilteredCategories(categoriesRes.data.categories);
                if (offer) {
                    populateFormWithOfferData(offer);
                }
            }
            catch (error) {
                console.error('Error fetching data:', error);
                setResponseModal({
                    show: true,
                    message: 'Failed to load required data. Please try again later.',
                    success: false
                });
            }
            finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, [offer]);
    const populateFormWithOfferData = useCallback((offerData) => {
        setFormData(prevData => ({
            ...prevData,
            name: offerData.name || offerData.title || '', // Handle both name and title
            description: offerData.description,
            discount_type: offerData.discount_type,
            discount_value: offerData.discount_value,
            promo_code: offerData.promo_code,
            start_date: new Date(offerData.start_date),
            end_date: new Date(offerData.end_date),
            is_featured: offerData.is_featured,
            banner_image: offerData.banner_image,
            background_gradient: offerData.background_gradient,
            text_color: offerData.text_color,
            product_ids: offerData.products?.map(p => p.id) || [], // Changed to product_ids
            category_ids: offerData.categories?.map(c => c.id) || [], // Changed to category_ids
            media: {
                files: offerData.media_files || [],
                video_link: offerData.video_link || ''
            }
        }));
        // Set previews for existing media
        if (offerData.media_files?.length > 0) {
            setPreviews(offerData.media_files.map(file => ({
                url: file.url,
                name: file.name,
                size: file.size,
                type: file.type.startsWith('image') ? 'image' : 'video'
            })));
        }
    }, []);
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        // Special handling for date inputs
        if (name === 'start_date' || name === 'end_date') {
            setFormData(prevData => ({
                ...prevData,
                [name]: value ? new Date(value) : new Date() // Fallback to current date if empty
            }));
        }
        else {
            setFormData(prevData => ({
                ...prevData,
                [name]: type === 'checkbox' ? checked : value,
            }));
        }
    };
    const handleMediaInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            media: {
                ...prevData.media,
                [name]: value
            }
        }));
    };
    const handleProductToggle = (productId) => {
        setFormData(prevData => {
            const newSelected = prevData.product_ids.includes(productId)
                ? prevData.product_ids.filter(id => id !== productId)
                : [...prevData.product_ids, productId];
            return {
                ...prevData,
                product_ids: newSelected
            };
        });
    };
    const handleCategoryToggle = (categoryId) => {
        setFormData(prevData => {
            const newSelected = prevData.category_ids.includes(categoryId)
                ? prevData.category_ids.filter(id => id !== categoryId)
                : [...prevData.category_ids, categoryId];
            return {
                ...prevData,
                category_ids: newSelected
            };
        });
    };
    const handleSearch = (e, type) => {
        const query = e.target.value.toLowerCase();
        if (type === 'products') {
            setFilteredProducts(products.filter(product => product.name.toLowerCase().includes(query)));
        }
        else if (type === 'categories') {
            setFilteredCategories(categories.filter(category => category.name.toLowerCase().includes(query)));
        }
    };
    const handleFileChange = async (e) => {
        const files = Array.from(e.target.files);
        if (files.length === 0)
            return;
        // Validate file sizes and types
        const validFiles = files.filter(file => {
            const isValidSize = file.size <= 8 * 1024 * 1024; // 8MB
            const isValidType = /\.(jpe?g|png|mp4|mov)$/i.test(file.name);
            if (!isValidSize) {
                setResponseModal({
                    show: true,
                    message: `File ${file.name} exceeds 8MB limit`,
                    success: false
                });
            }
            if (!isValidType) {
                setResponseModal({
                    show: true,
                    message: `File ${file.name} has unsupported format`,
                    success: false
                });
            }
            return isValidSize && isValidType;
        });
        if (validFiles.length === 0)
            return;
        const newPreviews = await Promise.all(validFiles.map(file => {
            return new Promise((resolve) => {
                const reader = new FileReader();
                reader.onload = (e) => {
                    resolve({
                        url: e.target.result,
                        name: file.name,
                        size: file.size,
                        type: file.type.startsWith('image') ? 'image' : 'video'
                    });
                };
                reader.readAsDataURL(file);
            });
        }));
        setPreviews(prev => [...prev, ...newPreviews]);
        setFormData(prev => ({
            ...prev,
            media: {
                ...prev.media,
                files: [...prev.media.files, ...validFiles]
            }
        }));
    };
    const removeMedia = (index) => {
        setPreviews(prev => prev.filter((_, i) => i !== index));
        setFormData(prev => ({
            ...prev,
            media: {
                ...prev.media,
                files: prev.media.files.filter((_, i) => i !== index)
            }
        }));
    };
    const validateForm = () => {
        if (!formData.name.trim()) {
            setResponseModal({
                show: true,
                message: 'Offer name is required',
                success: false
            });
            return false;
        }
        if (formData.product_ids.length === 0) {
            setResponseModal({
                show: true,
                message: 'Please select at least one product',
                success: false
            });
            return false;
        }
        const startDate = formData.start_date instanceof Date ?
            formData.start_date : new Date(formData.start_date);
        const endDate = formData.end_date instanceof Date ?
            formData.end_date : new Date(formData.end_date);
        if (startDate >= endDate) {
            setResponseModal({
                show: true,
                message: 'End date must be after start date',
                success: false
            });
            return false;
        }
        if (previews.length === 0 && !formData.media.video_link) {
            setResponseModal({
                show: true,
                message: 'Please upload at least one image or provide a video link',
                success: false
            });
            return false;
        }
        return true;
    };
    const closeOfferForm = () => {
        const canvasElement = document.getElementById('OfferForm');
        if (canvasElement) {
            const bsModal = window.bootstrap.Modal.getInstance(canvasElement);
            if (bsModal) {
                bsModal.hide();
            }
            // Remove any existing backdrops
            const existingBackdrops = document.querySelectorAll('.modal-backdrop');
            existingBackdrops.forEach(backdrop => backdrop.remove());
            // Remove modal-open class from body
            document.body.classList.remove('modal-open');
            document.body.style.overflow = '';
            document.body.style.paddingRight = '';
        }
    };
    // const ShowSigninCanvas = () => {
    //     // Implementation would depend on your authentication flow
    //     // This is a placeholder for the function referenced in the original code
    // };
    const handleSubmit = async (e) => {
        e.preventDefault();
        // Validate the form before proceeding
        if (!validateForm())
            return;
        // check if authenticated
        if (!isAuthenticated) {
            NotificationService.showDialog('Please sign in to create offers', 'info');
            ShowSigninCanvas();
            return;
        }
        // Set loading state
        setIsSubmitting(true);
        // Prepare the offer data object
        const offerData = {
            name: formData.name,
            description: formData.description,
            discount_type: formData.discount_type,
            discount_value: parseInt(formData.discount_value, 10), // Ensure this is an integer
            product_ids: formData.product_ids.map(id => parseInt(id, 10)), // Convert to integers
            category_ids: formData.category_ids.map(id => parseInt(id, 10)), // Convert to integers
            is_featured: formData.is_featured,
            promo_code: formData.promo_code,
            start_date: new Date(formData.start_date).toISOString(),
            end_date: new Date(formData.end_date).toISOString(),
            banner_image: formData.banner_image,
            background_gradient: formData.background_gradient,
            text_color: formData.text_color,
            media_files: formData.media.files.filter(file => file && file.name) // Ensure valid media files
        };
        // Create a FormData object to send the offer data
        const formDataToSend = new FormData();
        // Append offer data to FormData
        Object.entries(offerData).forEach(([key, value]) => {
            if (Array.isArray(value)) {
                value.forEach(item => formDataToSend.append(`${key}[]`, item));
            }
            else if (value !== undefined && value !== null) {
                formDataToSend.append(key, value);
            }
        });
        // Append media files to FormData
        if (formData.media?.files) {
            formData.media.files.forEach(file => {
                formDataToSend.append('media_files[]', file);
            });
        }
        // Append video link if it exists
        if (formData.media?.video_link) {
            formDataToSend.append('video_link', formData.media.video_link);
        }
        try {
            // Determine whether to update or create an offer
            const response = offer
                ? await OffersAxiosService.updateOffer(offer.id, formDataToSend)
                : await OffersAxiosService.createOffer(formDataToSend);
            // Call success callback if provided
            if (onSuccess && typeof onSuccess === 'function') {
                onSuccess(response?.data);
            }
            // Show notification
            NotificationService.showDialog(offer ? response?.data?.message || 'Offer updated successfully' : 'Offer created successfully', 'success');
            // Show success modal
            setResponseModal({
                show: true,
                message: offer ? response?.data?.message || 'Offer updated successfully' : 'Offer created successfully',
                success: true
            });
            // Close the modal after a short delay
            setTimeout(() => {
                closeOfferForm();
            }, 500);
        }
        catch (error) {
            console.error('Error saving offer:', error);
            setResponseModal({
                show: true,
                message: error.response?.data?.error || 'Failed to save offer. Please try again.',
                success: false
            });
        }
        finally {
            setIsSubmitting(false);
        }
    };
    if (isLoading) {
        return _jsx(LoadingSpinner, {});
    }
    return (_jsx(_Fragment, { children: _jsx("div", { className: "modal fade", id: "OfferForm", tabIndex: -1, "aria-modal": "true", role: "dialog", children: _jsx("div", { className: "modal-dialog modal-xl", role: "document", children: _jsxs("div", { className: "modal-content", children: [_jsxs("div", { className: "modal-header", children: [_jsx("h5", { className: "modal-title", children: offer ? 'Edit Offer' : 'Create New Offer' }), _jsx("button", { className: "btn-close", type: "button", "data-bs-dismiss": "modal", "aria-label": "Close" })] }), _jsxs("div", { className: "modal-body d-flex flex-column gap-4 pt-2", children: [isSubmitting && (_jsx("div", { className: "position-absolute w-100 h-100 d-flex justify-content-center align-items-center", style: {
                                        top: 0,
                                        left: 0,
                                        backgroundColor: 'rgba(255,255,255,0.7)',
                                        zIndex: 10
                                    }, children: _jsx("div", { className: "spinner-border text-primary", role: "status", children: _jsx("span", { className: "visually-hidden", children: "Loading..." }) }) })), _jsxs("form", { onSubmit: handleSubmit, children: [_jsxs("div", { className: "row", children: [_jsxs("div", { className: "col-md-8", children: [_jsxs("div", { className: "mb-3", children: [_jsx("label", { className: "form-label", children: "Offer Title*" }), _jsx("input", { name: "name", type: "text", className: "form-control", value: formData.name, onChange: handleChange, placeholder: "Summer Sale 2023", required: true })] }), _jsxs("div", { className: "mb-3", children: [_jsx("label", { className: "form-label", children: "Description" }), _jsx("textarea", { name: "description", className: "form-control", rows: "3", value: formData.description, onChange: handleChange })] }), _jsxs("div", { className: "mb-3", children: [_jsx("label", { className: "form-label", children: "Select Products*" }), _jsxs("div", { className: "dropdown", children: [_jsx("input", { type: "text", className: "form-control mb-2", placeholder: "Search products...", "data-bs-toggle": "dropdown", "aria-expanded": "false", onChange: (e) => handleSearch(e, 'products') }), _jsx("div", { className: "dropdown-menu w-100", children: _jsx("ul", { className: "list-unstyled", style: { maxHeight: '200px', overflowY: 'auto' }, children: filteredProducts.map(product => (_jsx("li", { className: "dropdown-item", children: _jsxs("div", { className: "form-check", children: [_jsx("input", { className: "form-check-input", id: `prod-${product.id}`, type: "checkbox", checked: formData.product_ids.includes(product.id), onChange: () => handleProductToggle(product.id) }), _jsx("label", { className: "form-check-label", htmlFor: `prod-${product.id}`, children: `${product.name} ($${product.price})` })] }) }, product.id))) }) })] }), formData.product_ids.length > 0 && (_jsxs("div", { className: "mt-2", children: [_jsx("h6", { children: "Selected Products:" }), _jsx("div", { className: "d-flex flex-wrap gap-2", children: formData.product_ids.map(prodId => {
                                                                                const product = products.find(p => p.id === prodId);
                                                                                return product ? (_jsx("span", { className: "badge bg-primary", children: product.name }, prodId)) : null;
                                                                            }) })] }))] }), _jsxs("div", { className: "mb-3", children: [_jsx("label", { className: "form-label", children: "Select Categories*" }), _jsxs("div", { className: "dropdown", children: [_jsx("input", { type: "text", className: "form-control mb-2", placeholder: "Search categories...", "data-bs-toggle": "dropdown", "aria-expanded": "false", onChange: (e) => handleSearch(e, 'categories') }), _jsx("div", { className: "dropdown-menu w-100", children: _jsx("ul", { className: "list-unstyled", style: { maxHeight: '200px', overflowY: 'auto' }, children: filteredCategories.map(category => (_jsx("li", { className: "dropdown-item", children: _jsxs("div", { className: "form-check", children: [_jsx("input", { className: "form-check-input", id: `cat-${category.id}`, type: "checkbox", checked: formData.category_ids.includes(category.id), onChange: () => handleCategoryToggle(category.id) }), _jsx("label", { className: "form-check-label", htmlFor: `cat-${category.id}`, children: category.name })] }) }, category.id))) }) })] }), formData.category_ids.length > 0 && (_jsxs("div", { className: "mt-2", children: [_jsx("h6", { children: "Selected Categories:" }), _jsx("div", { className: "d-flex flex-wrap gap-2", children: formData.category_ids.map(catId => {
                                                                                const category = categories.find(c => c.id === catId);
                                                                                return category ? (_jsx("span", { className: "badge bg-secondary", children: category.name }, catId)) : null;
                                                                            }) })] }))] }), _jsx("section", { className: "position-relative bg-body rounded p-2 m-2", children: _jsxs("div", { className: "position-relative z-1 p-2 m-2", children: [_jsxs("div", { className: "d-sm-flex align-items-center justify-content-between mb-3 mb-sm-4", children: [_jsx("h2", { className: "h4 mb-2 mb-sm-0 me-3", children: "Photos & Videos" }), _jsx("div", { className: "position-relative d-flex", children: _jsx("i", { className: "fi-info text-info mt-1 me-2" }) })] }), _jsxs("small", { className: "fs-sm text-warning mb-3", children: ["The maximum file size is 8 MB. Formats: jpeg, jpg, png, mp4, mov. Put the main picture first.", previews.length === 0 && (_jsx(_Fragment, { children: "At least one image is required for your listing" }))] }), _jsx("div", { style: { maxWidth: '852px' }, children: _jsxs("div", { className: "row row-cols-2 row-cols-sm-3 g-2 g-md-4 g-lg-3 g-xl-4", children: [previews.map((preview, index) => (_jsxs("div", { className: "col", children: [_jsxs("div", { className: "hover-effect-opacity position-relative overflow-hidden rounded", children: [index === 0 && (_jsx("span", { className: "badge text-bg-light position-absolute top-0 start-0 z-3 mt-2 ms-2", children: "Cover" })), _jsx("div", { className: "ratio", style: { aspectRatio: '4/3' }, children: preview.type === 'image' ? (_jsx("img", { src: preview.url, alt: `Preview ${index + 1}`, className: "img-fluid object-fit-cover" })) : (_jsx("video", { controls: true, className: "w-100 h-100 object-fit-cover", children: _jsx("source", { src: preview.url, type: formData.media.files[index].type }) })) }), _jsxs("div", { className: "hover-effect-target position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100 opacity-0", children: [_jsx("button", { type: "button", className: "btn btn-icon btn-sm btn-light position-relative z-2", "aria-label": "Remove", onClick: () => removeMedia(index), children: _jsx("i", { className: "ci-trash-empty" }) }), _jsx("span", { className: "position-absolute top-0 start-0 w-100 h-100 bg-black bg-opacity-25 z-1" })] })] }), _jsxs("small", { className: "text-muted d-block text-truncate mt-1", children: [preview.name, " (", Math.round(preview.size / 1024), " KB)"] })] }, index))), _jsx("div", { className: "col", children: _jsx("div", { className: "d-flex align-items-center justify-content-center position-relative h-100 cursor-pointer bg-body-tertiary border border-2 border-dotted rounded p-3", onClick: () => fileInputRef.current.click(), style: { minHeight: '150px' }, children: _jsxs("div", { className: "text-center", children: [_jsx("i", { className: "fi-plus-circle fs-4 text-secondary-emphasis mb-2" }), _jsx("div", { className: "hover-effect-underline stretched-link fs-sm fw-medium", children: "Upload photos/videos" }), _jsx("input", { type: "file", ref: fileInputRef, onChange: handleFileChange, className: "d-none", multiple: true, accept: "image/*,video/*" })] }) }) })] }) }), _jsxs("div", { className: "pt-3 mt-2 mt-md-3", children: [_jsx("label", { htmlFor: "video_link", className: "form-label", children: "Link to YouTube/Vimeo video (optional)" }), _jsxs("div", { className: "position-relative", children: [_jsx("i", { className: "fi-link position-absolute top-50 start-0 translate-middle-y fs-lg ms-3" }), _jsx("input", { type: "url", className: "form-control form-control-lg form-icon-start", id: "video_link", name: "video_link", placeholder: "www.youtube.com/...", value: formData.media.video_link, onChange: handleMediaInputChange })] })] })] }) })] }), _jsxs("div", { className: "col-md-4", children: [_jsxs("div", { className: "card mb-3", children: [_jsx("div", { className: "card-header bg-light", children: _jsx("h5", { children: "Discount Settings" }) }), _jsxs("div", { className: "card-body", children: [_jsxs("div", { className: "mb-3", children: [_jsx("label", { className: "form-label", children: "Discount Type*" }), _jsxs("select", { name: "discount_type", className: "form-select", value: formData.discount_type, onChange: handleChange, children: [_jsx("option", { value: "percentage", children: "Percentage" }), _jsx("option", { value: "fixed_amount", children: "Fixed Amount" })] })] }), _jsxs("div", { className: "mb-3", children: [_jsx("label", { className: "form-label", children: formData.discount_type === 'percentage' ? 'Discount Percentage*' : 'Discount Amount*' }), _jsxs("div", { className: "input-group", children: [_jsx("input", { name: "discount_value", type: "number", className: "form-control", value: formData.discount_value, onChange: handleChange, min: "0", step: formData.discount_type === 'percentage' ? '1' : '0.01', required: true }), _jsx("span", { className: "input-group-text", children: formData.discount_type === 'percentage' ? '%' : '$' })] })] }), _jsxs("div", { className: "mb-3", children: [_jsx("label", { className: "form-label", children: "Promo Code (Optional)" }), _jsx("input", { name: "promo_code", type: "text", className: "form-control", value: formData.promo_code, onChange: handleChange, placeholder: "SUMMER2023" })] })] })] }), _jsxs("div", { className: "card mb-3", children: [_jsx("div", { className: "card-header bg-light", children: _jsx("h5", { children: "Schedule" }) }), _jsxs("div", { className: "card-body", children: [_jsxs("div", { className: "mb-3", children: [_jsx("label", { className: "form-label", children: "Start Date*" }), _jsx("input", { type: "datetime-local", name: "start_date", className: "form-control", value: formData.start_date instanceof Date ?
                                                                                        formData.start_date.toISOString().slice(0, 16) :
                                                                                        new Date(formData.start_date).toISOString().slice(0, 16), onChange: handleChange, required: true })] }), _jsxs("div", { className: "mb-3", children: [_jsx("label", { className: "form-label", children: "End Date*" }), _jsx("input", { type: "datetime-local", name: "end_date", className: "form-control", value: formData.end_date instanceof Date ?
                                                                                        formData.end_date.toISOString().slice(0, 16) :
                                                                                        new Date(formData.end_date).toISOString().slice(0, 16), onChange: handleChange, required: true })] }), _jsxs("div", { className: "form-check form-switch mb-3", children: [_jsx("input", { type: "checkbox", name: "is_featured", className: "form-check-input", checked: formData.is_featured, onChange: handleChange }), _jsx("label", { className: "form-check-label", children: "Featured Offer" })] })] })] })] })] }), _jsxs("div", { className: "card mb-3", children: [_jsx("div", { className: "card-header bg-light", children: _jsx("h5", { children: "Visual Presentation" }) }), _jsxs("div", { className: "card-body", children: [_jsxs("div", { className: "row", children: [_jsxs("div", { className: "col-md-6 mb-3", children: [_jsx("label", { className: "form-label", children: "Banner Image URL" }), _jsx("input", { name: "banner_image", type: "text", className: "form-control", value: formData.banner_image, onChange: handleChange, placeholder: "https://salesnet.co/banners/banner.jpg" })] }), _jsxs("div", { className: "col-md-6 mb-3", children: [_jsx("label", { className: "form-label", children: "Background Gradient" }), _jsx("input", { name: "background_gradient", type: "text", className: "form-control", value: formData.background_gradient, onChange: handleChange, placeholder: "linear-gradient(90deg, #ff9966, #ff5e62)" }), _jsx("small", { className: "text-muted", children: "Example: linear-gradient(90deg, #ff9966, #ff5e62)" })] })] }), _jsxs("div", { className: "row", children: [_jsxs("div", { className: "col-md-6", children: [_jsx("label", { htmlFor: "text_color", className: "form-label", children: "Text Color" }), _jsxs("div", { className: "input-group", children: [_jsx("input", { type: "color", id: "text_color", name: "text_color", className: "form-control form-control-color", value: formData.text_color, onChange: handleChange, title: "Choose text color" }), _jsx("input", { type: "text", className: "form-control", value: formData.text_color, onChange: (e) => {
                                                                                        // Ensure the value starts with #
                                                                                        const value = e.target.value.startsWith('#') ? e.target.value : `#${e.target.value}`;
                                                                                        setFormData(prev => ({
                                                                                            ...prev,
                                                                                            text_color: value
                                                                                        }));
                                                                                    }, maxLength: 7 })] }), _jsx("div", { className: "mt-2", children: _jsx("div", { className: "p-2 rounded", style: {
                                                                                    backgroundColor: formData.background_gradient || '#f8f9fa',
                                                                                    color: formData.text_color,
                                                                                    border: '1px solid #dee2e6'
                                                                                }, children: "Preview text with selected color" }) })] }), _jsxs("div", { className: "col-md-6", children: [_jsx("label", { className: "form-label", children: "Gradient Preview" }), _jsx("div", { className: "p-4 rounded", style: {
                                                                                background: formData.background_gradient || 'linear-gradient(90deg, #f8f9fa, #e9ecef)',
                                                                                border: '1px solid #dee2e6',
                                                                                height: '100px'
                                                                            }, children: _jsx("p", { className: "m-0", style: { color: formData.text_color }, children: formData.name || 'Your offer title will appear here' }) })] })] })] })] }), _jsxs("div", { className: "d-flex justify-content-end gap-2", children: [_jsx("button", { type: "button", className: "btn btn-outline-secondary", onClick: () => setFormData(initialFormData), children: "Reset" }), _jsx("button", { type: "submit", className: "btn btn-primary", children: offer ? 'Update Offer' : 'Create Offer' })] })] }), _jsx(ResponseModal, { show: responseModal.show, message: responseModal.message, success: responseModal.success, onClose: () => setResponseModal({ ...responseModal, show: false }) })] }), _jsx("div", { className: "modal-footer flex-column flex-sm-row align-items-stretch", children: _jsx("button", { className: "btn btn-primary", type: "button", "data-bs-dismiss": "modal", children: "Close" }) })] }) }) }) }));
};
OfferForm.propTypes = {
    offer: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        description: PropTypes.string,
        discount_type: PropTypes.string,
        discount_value: PropTypes.number,
        promo_code: PropTypes.string,
        start_date: PropTypes.string,
        end_date: PropTypes.string,
        is_featured: PropTypes.bool,
        banner_image: PropTypes.string,
        background_gradient: PropTypes.string,
        text_color: PropTypes.string,
        products: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number
        })),
        categories: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number
        })),
        media_files: PropTypes.array,
        video_link: PropTypes.string
    }),
    onSuccess: PropTypes.func.isRequired
};
export default OfferForm;
