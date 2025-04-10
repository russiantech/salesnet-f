// import React, { useState, useRef, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// // import { AxioUserService } from '../../services/AxioUserService';
// import ResponseModal from '../ResponseModal';
// import { UsersService } from '../../../../services/local/UsersService';

// const PublishPage = () => {
//   const navigate = useNavigate();
//   const fileInputRef = useRef(null);
//   const [activeTab, setActiveTab] = useState('home');
//   const [responseModal, setResponseModal] = useState({ show: false, message: '', success: false });
//   const [uploadProgress, setUploadProgress] = useState(0);
//   const [mediaFiles, setMediaFiles] = useState([]);
//   const [previews, setPreviews] = useState([]);
//   const [formData, setFormData] = useState({
//     name: '',
//     categories: '',
//     price: '',
//     condition: '',
//     description: '',
//     listing_type: 'sell',
//     delivery_option: 'delivery',
//     first_name: '',
//     last_name: '',
//     email: '',
//     phone: '',
//     country: '',
//     state: '',
//     city: '',
//     zip_code: '',
//     address: '',
//     video_link: '',
//     promotion_plan: ''
//   });

//   // Check authentication on component mount
//   useEffect(() => {
//     const checkAuth = async () => {
//       try {
//         const isAuthenticated = await UsersService.isAuthenticated();
//         if (!isAuthenticated) {
//           navigate('/login');
//         }
//       } catch (error) {
//         navigate('/login');
//       }
//     };
//     checkAuth();
//   }, [navigate]);

//   // Handle file selection
//   const handleFileChange = (e) => {
//     const files = Array.from(e.target.files);
//     const validFiles = files.filter(file => 
//       file.type.startsWith('image/') || file.type.startsWith('video/')
//     );
    
//     if (validFiles.length !== files.length) {
//       setResponseModal({
//         show: true,
//         message: 'Only image and video files are allowed',
//         success: false
//       });
//     }

//     const newMediaFiles = [...mediaFiles, ...validFiles];
//     setMediaFiles(newMediaFiles);

//     // Generate previews
//     const newPreviews = [];
//     validFiles.forEach(file => {
//       const reader = new FileReader();
//       reader.onload = (e) => {
//         newPreviews.push({
//           url: e.target.result,
//           type: file.type.startsWith('image/') ? 'image' : 'video',
//           name: file.name
//         });
//         setPreviews([...previews, ...newPreviews]);
//       };
//       reader.readAsDataURL(file);
//     });
//   };

//   // Remove a media file
//   const removeMedia = (index) => {
//     const newMediaFiles = [...mediaFiles];
//     const newPreviews = [...previews];
    
//     newMediaFiles.splice(index, 1);
//     newPreviews.splice(index, 1);
    
//     setMediaFiles(newMediaFiles);
//     setPreviews(newPreviews);
//   };

//   // Handle input changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     try {
//       // Validate required fields
//       if (!formData.name || !formData.price || !formData.description) {
//         setResponseModal({
//           show: true,
//           message: 'Please fill in all required fields',
//           success: false
//         });
//         return;
//       }

//       // Prepare FormData for upload
//       const submissionData = new FormData();
      
//       // Append form data
//       Object.keys(formData).forEach(key => {
//         submissionData.append(key, formData[key]);
//       });

//       // Append media files
//       mediaFiles.forEach(file => {
//         submissionData.append('media', file);
//       });

//       // Get auth token
//       const token = await AxioUserService.getToken();
      
//       // Submit data
//       const response = await axios.post('/api/products', submissionData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//           'Authorization': `Bearer ${token}`
//         },
//         onUploadProgress: (progressEvent) => {
//           const progress = Math.round((progressEvent.loaded * 100) / progressEvent.total);
//           setUploadProgress(progress);
//         }
//       });

//       setResponseModal({
//         show: true,
//         message: 'Product published successfully!',
//         success: true
//       });

//       // Reset form after successful submission
//       if (response.data.success) {
//         setTimeout(() => {
//           setFormData({
//             name: '',
//             categories: '',
//             price: '',
//             condition: '',
//             description: '',
//             listing_type: 'sell',
//             delivery_option: 'delivery',
//             first_name: '',
//             last_name: '',
//             email: '',
//             phone: '',
//             country: '',
//             state: '',
//             city: '',
//             zip_code: '',
//             address: '',
//             video_link: '',
//             promotion_plan: ''
//           });
//           setMediaFiles([]);
//           setPreviews([]);
//           setActiveTab('home');
//         }, 2000);
//       }
//     } catch (error) {
//       setResponseModal({
//         show: true,
//         message: error.response?.data?.message || 'Failed to publish product',
//         success: false
//       });
//     }
//   };

//   // Tab navigation
//   const handleNext = (e) => {
//     e.preventDefault();
//     const tabs = ['home', 'listing-type', 'images', 'contact', 'location', 'promote'];
//     const currentIndex = tabs.indexOf(activeTab);
    
//     if (currentIndex < tabs.length - 1) {
//       setActiveTab(tabs[currentIndex + 1]);
//     } else {
//       handleSubmit(e);
//     }
//   };

//   const handleBack = () => {
//     const tabs = ['home', 'listing-type', 'images', 'contact', 'location', 'promote'];
//     const currentIndex = tabs.indexOf(activeTab);
    
//     if (currentIndex > 0) {
//       setActiveTab(tabs[currentIndex - 1]);
//     }
//   };

//   // Calculate progress percentage for UI
//   const progressPercentage = () => {
//     const tabs = ['home', 'listing-type', 'images', 'contact', 'location', 'promote'];
//     const currentIndex = tabs.indexOf(activeTab);
//     return ((currentIndex + 1) / tabs.length) * 100;
//   };

//   return (
//     <div className="container pt-4 justify-content-center">
//       <div className="row pt-sm-2" style={{ marginLeft: "-15px", marginRight: "-15px" }}>
//         <section id="pills-tabs" className="docs-section">
//           <h4>Create your product listing</h4>
//           <div className="card border-0 shadow - row g-0 overflow-x-auto pb-3 mb-2 mb-md-3 mb-lg-4" data-simplebar data-simplebar-auto-hide="false">
//             <div className="card-body position-relative z-2 col-auto">
//               {/* Nav pills */}
//               <ul className="nav nav-pills mb-3 - flex-nowrap gap-2 text-nowrap pb-3" role="tablist">
//                 {['home', 'listing-type', 'images', 'contact', 'location', 'promote'].map((tab) => (
//                   <li className="nav-item" role="presentation" key={tab}>
//                     <button
//                       type="button"
//                       className={`nav-link ${activeTab === tab ? 'active' : ''}`}
//                       onClick={() => setActiveTab(tab)}
//                     >
//                       {tab === 'home' && <><i className="fi-home me-2 ms-n1" />Home</>}
//                       {tab === 'listing-type' && <><i className="fi-list me-2 ms-n1" />Listing Type</>}
//                       {tab === 'images' && <><i className="fi-image me-2 ms-n1" />Media</>}
//                       {tab === 'contact' && <><i className="fi-user me-2 ms-n1" />Contact</>}
//                       {tab === 'location' && <><i className="fi-map-pin me-2 ms-n1" />Location</>}
//                       {tab === 'promote' && <><i className="fi-award me-2 ms-n1" />Promote</>}
//                     </button>
//                   </li>
//                 ))}
//               </ul>

//               {/* Response Modal - Placed just above the buttons */}
//               <ResponseModal
//                 show={responseModal.show}
//                 message={responseModal.message}
//                 success={responseModal.success}
//                 onClose={() => setResponseModal({...responseModal, show: false})}
//               />

//               {/* Pills content */}
//               <div className="tab-content" id="pills-tabContent">
//                 {/* Home/Listing Details Tab */}
//                 <div className={`tab-pane fade ${activeTab === 'home' ? 'show active' : ''}`} id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
//                   <section className="position-relative bg-body rounded p-4 mt-4">
//                     <div className="position-relative z-1 pb-md-2 px-md-2">
//                       <h2 className="h4 mb-3 mb-sm-4">Listing details</h2>
//                       <div className="row row-cols-1 row-cols-sm-2 g-3 g-md-4 mb-3 mb-md-4">
//                         <div className="col">
//                           <label htmlFor="name" className="form-label">Product name *</label>
//                           <input
//                             type="text"
//                             className="form-control form-control-lg"
//                             id="name"
//                             name="name"
//                             minLength={10}
//                             placeholder="Product name"
//                             value={formData.name}
//                             onChange={handleInputChange}
//                             required
//                           />
//                         </div>
//                         <div className="col">
//                           <label htmlFor="categories" className="form-label d-flex align-items-center">
//                             Categories *
//                             <i className="fi-info fs-base ms-2" data-bs-toggle="tooltip" aria-label="Select the most relevant category" />
//                           </label>
//                           <select
//                             className="form-select form-select-lg"
//                             name="categories"
//                             value={formData.categories}
//                             onChange={handleInputChange}
//                             required
//                           >
//                             <option value="">Select category...</option>
//                             <option value="electronics">Electronics</option>
//                             <option value="fashion">Fashion</option>
//                             <option value="home">Home & Garden</option>
//                             <option value="vehicles">Vehicles</option>
//                             <option value="property">Property</option>
//                           </select>
//                         </div>
//                         <div className="col">
//                           <label htmlFor="price" className="form-label">Price *</label>
//                           <input
//                             type="number"
//                             className="form-control form-control-lg"
//                             id="price"
//                             name="price"
//                             value={formData.price}
//                             onChange={handleInputChange}
//                             min="0"
//                             step="0.01"
//                             required
//                           />
//                         </div>
//                         <div className="col">
//                           <label htmlFor="condition" className="form-label">Condition *</label>
//                           <select
//                             className="form-select form-select-lg"
//                             id="condition"
//                             name="condition"
//                             value={formData.condition}
//                             onChange={handleInputChange}
//                             required
//                           >
//                             <option value="">Select condition...</option>
//                             <option value="new">Brand New</option>
//                             <option value="used">Used - Like New</option>
//                             <option value="good">Used - Good</option>
//                             <option value="fair">Used - Fair</option>
//                           </select>
//                         </div>
//                       </div>
//                       <label htmlFor="description" className="form-label fs-6 fw-semibold">Description *</label>
//                       <p className="fs-sm mb-2">Describe your product in detail to attract buyers</p>
//                       <textarea
//                         className="form-control form-control-lg"
//                         rows={5}
//                         id="description"
//                         name="description"
//                         placeholder="Describe your product (minimum 50 characters)"
//                         minLength={50}
//                         maxLength={1000}
//                         value={formData.description}
//                         onChange={handleInputChange}
//                         required
//                       />
//                     </div>
//                   </section>
//                 </div>

//                 {/* Listing Type Tab */}
//                 <div className={`tab-pane fade ${activeTab === 'listing-type' ? 'show active' : ''}`} id="pills-listing-type" role="tabpanel" aria-labelledby="pills-listing-tab">
//                   <section className="container pt-2 mt-1 mt-sm-3 mt-lg-4">
//                     <div className="row">
//                       <h4 className="h4 mb-3 mb-sm-4">Select a listing type</h4>
//                       <div className="d-flex flex-wrap gap-2">
//                         {['sell', 'service', 'property', 'vehicle'].map((type) => (
//                           <React.Fragment key={type}>
//                             <input
//                               type="radio"
//                               className="btn-check"
//                               name="listing_type"
//                               id={`listing-${type}`}
//                               value={type}
//                               checked={formData.listing_type === type}
//                               onChange={handleInputChange}
//                             />
//                             <label htmlFor={`listing-${type}`} className="btn btn-sm border-2 btn-outline-secondary">
//                               <div className="d-flex flex-column flex-xxl-row align-items-center">
//                                 <div className="d-flex text-dark-emphasis bg-body-tertiary rounded-circle p-4 mb-3 mb-xxl-0">
//                                   <i className={`fi-${type === 'sell' ? 'shopping-bag' : type === 'service' ? 'settings' : type === 'property' ? 'home' : 'car'} fs-2 m-xxl-1`} />
//                                 </div>
//                                 <div className="text-center text-xxl-start ps-xxl-3">
//                                   <h3 className="h6 mb-1">
//                                     {type === 'sell' && 'Sell an item'}
//                                     {type === 'service' && 'Offer a service'}
//                                     {type === 'property' && 'Sell property'}
//                                     {type === 'vehicle' && 'Sell a vehicle'}
//                                   </h3>
//                                 </div>
//                               </div>
//                             </label>
//                           </React.Fragment>
//                         ))}
//                       </div>
//                     </div>
//                   </section>
//                 </div>

//                 {/* Media Tab */}
//                 <div className={`tab-pane fade ${activeTab === 'images' ? 'show active' : ''}`} id="pills-images" role="tabpanel" aria-labelledby="pills-images-tab">
//                   <section className="position-relative bg-body rounded p-4 mt-4">
//                     <div className="position-relative z-1 pb-md-2 px-md-2">
//                       <div className="d-sm-flex align-items-center justify-content-between mb-3 mb-sm-4">
//                         <h2 className="h4 mb-2 mb-sm-0 me-3">Photos & Videos</h2>
//                         <div className="position-relative d-flex">
//                           <i className="fi-info text-info mt-1 me-2" />
//                           <a className="fs-sm fw-medium stretched-link text-bg-light rounded" href="#!">Photo guidelines</a>
//                         </div>
//                       </div>
//                       <small className="fs-sm text-warning">The maximum file size is 8 MB. Formats: jpeg, jpg, png, mp4, mov. Put the main picture first.</small>
//                       <div style={{ maxWidth: '852px' }}>
//                         <div className="row row-cols-2 row-cols-sm-3 g-2 g-md-4 g-lg-3 g-xl-4">
//                           {/* Media previews */}
//                           {previews.map((preview, index) => (
//                             <div className="col" key={index}>
//                               <div className="hover-effect-opacity position-relative overflow-hidden rounded">
//                                 {index === 0 && (
//                                   <span className="badge text-bg-light position-absolute top-0 start-0 z-3 mt-2 ms-2">Cover</span>
//                                 )}
//                                 <div className="ratio" style={{ aspectRatio: '4/3' }}>
//                                   {preview.type === 'image' ? (
//                                     <img src={preview.url} alt={`Preview ${index + 1}`} className="img-fluid object-fit-cover" />
//                                   ) : (
//                                     <video controls className="w-100 h-100 object-fit-cover">
//                                       <source src={preview.url} type={mediaFiles[index].type} />
//                                     </video>
//                                   )}
//                                 </div>
//                                 <div className="hover-effect-target position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100 opacity-0">
//                                   <button
//                                     type="button"
//                                     className="btn btn-icon btn-sm btn-light position-relative z-2"
//                                     aria-label="Remove"
//                                     onClick={() => removeMedia(index)}>
//                                     <i className="ci-trash-empty"></i>
//                                   </button>
//                                   <span className="position-absolute top-0 start-0 w-100 h-100 bg-black bg-opacity-25 z-1" />
//                                 </div>
//                               </div>
//                             </div>
//                           ))}

//                           {/* Upload button */}
//                           <div className="col">
//                             <div 
//                               className="d-flex align-items-center justify-content-center position-relative h-100 cursor-pointer bg-body-tertiary border border-2 border-dotted rounded p-3"
//                               onClick={() => fileInputRef.current.click()}
//                               style={{ minHeight: '150px' }}
//                             >
//                               <div className="text-center">
//                                 <i className="fi-plus-circle fs-4 text-secondary-emphasis mb-2" />
//                                 <div className="hover-effect-underline stretched-link fs-sm fw-medium">
//                                   Upload photos/videos
//                                 </div>
//                                 <input
//                                   type="file"
//                                   ref={fileInputRef}
//                                   onChange={handleFileChange}
//                                   className="d-none"
//                                   multiple
//                                   accept="image/*,video/*"
//                                 />
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="pt-3 mt-2 mt-md-3">
//                         <label htmlFor="video_link" className="form-label">Link to YouTube/Vimeo video</label>
//                         <div className="position-relative">
//                           <i className="fi-link position-absolute top-50 start-0 translate-middle-y fs-lg ms-3" />
//                           <input
//                             type="url"
//                             className="form-control form-control-lg form-icon-start"
//                             id="video_link"
//                             name="video_link"
//                             placeholder="www.youtube.com/..."
//                             value={formData.video_link}
//                             onChange={handleInputChange}
//                           />
//                         </div>
//                       </div>
//                     </div>
//                   </section>
//                 </div>

//                 {/* Contact Tab */}
//                 <div className={`tab-pane fade ${activeTab === 'contact' ? 'show active' : ''}`} id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
//                   <section className="position-relative bg-body rounded p-4 mt-4">
//                     <div className="position-relative z-1 pb-md-2 px-md-2">
//                       <h2 className="h4 mb-3 mb-sm-4">Contact Information</h2>
//                       <div className="nav nav-pills flex-wrap gap-3 mb-3 mb-sm-4">
//                         <div>
//                           <input
//                             type="radio"
//                             className="btn-check"
//                             id="delivery"
//                             name="delivery_option"
//                             value="delivery"
//                             checked={formData.delivery_option === 'delivery'}
//                             onChange={handleInputChange}
//                           />
//                           <label className="nav-link" htmlFor="delivery">
//                             <i className="fi-truck fs-base ms-n1 me-2" />
//                             Delivery Available
//                           </label>
//                         </div>
//                         <div>
//                           <input
//                             type="radio"
//                             className="btn-check"
//                             id="pickup"
//                             name="delivery_option"
//                             value="pickup"
//                             checked={formData.delivery_option === 'pickup'}
//                             onChange={handleInputChange}
//                           />
//                           <label className="nav-link" htmlFor="pickup">
//                             <i className="fi-map-pin fs-base ms-n1 me-2" />
//                             Pick-up Only
//                           </label>
//                         </div>
//                       </div>
//                       <div className="row row-cols-1 row-cols-sm-2 g-3 g-md-4">
//                         <div className="col">
//                           <label htmlFor="first_name" className="form-label">First name *</label>
//                           <input
//                             type="text"
//                             className="form-control form-control-lg"
//                             id="first_name"
//                             name="first_name"
//                             value={formData.first_name}
//                             onChange={handleInputChange}
//                             required
//                           />
//                         </div>
//                         <div className="col">
//                           <label htmlFor="last_name" className="form-label">Last name *</label>
//                           <input
//                             type="text"
//                             className="form-control form-control-lg"
//                             id="last_name"
//                             name="last_name"
//                             value={formData.last_name}
//                             onChange={handleInputChange}
//                             required
//                           />
//                         </div>
//                         <div className="col">
//                           <label htmlFor="email" className="form-label">Email *</label>
//                           <input
//                             type="email"
//                             className="form-control form-control-lg"
//                             id="email"
//                             name="email"
//                             value={formData.email}
//                             onChange={handleInputChange}
//                             required
//                           />
//                         </div>
//                         <div className="col">
//                           <label htmlFor="phone" className="form-label">Phone number *</label>
//                           <input
//                             type="tel"
//                             className="form-control form-control-lg"
//                             id="phone"
//                             name="phone"
//                             value={formData.phone}
//                             onChange={handleInputChange}
//                             placeholder="(___) ___-____"
//                             required
//                           />
//                         </div>
//                       </div>
//                     </div>
//                   </section>
//                 </div>

//                 {/* Location Tab */}
//                 <div className={`tab-pane fade ${activeTab === 'location' ? 'show active' : ''}`} id="pills-location" role="tabpanel" aria-labelledby="pills-location-tab">
//                   <section className="position-relative bg-body rounded p-4 mt-4">
//                     <div className="position-relative z-1 pb-md-2 px-md-2">
//                       <h2 className="h4 mb-3 mb-sm-4">Location Details</h2>
//                       <div className="row g-3 g-md-4">
//                         <div className="col-sm-4">
//                           <div className="position-relative">
//                             <label className="form-label">Country *</label>
//                             <select
//                               name="country"
//                               className="form-select"
//                               value={formData.country}
//                               onChange={handleInputChange}
//                               required
//                             >
//                               <option value="">Select country...</option>
//                               <option value="US">United States</option>
//                               <option value="UK">United Kingdom</option>
//                               <option value="CA">Canada</option>
//                               <option value="AU">Australia</option>
//                               <option value="NG">Nigeria</option>
//                               {/* Add more countries as needed */}
//                             </select>
//                           </div>
//                         </div>
//                         <div className="col-sm-4">
//                           <div className="position-relative">
//                             <label className="form-label">State/Region *</label>
//                             <input
//                               type="text"
//                               className="form-control"
//                               name="state"
//                               value={formData.state}
//                               onChange={handleInputChange}
//                               required
//                             />
//                           </div>
//                         </div>
//                         <div className="col-sm-4">
//                           <div className="position-relative">
//                             <label className="form-label">City *</label>
//                             <input
//                               type="text"
//                               className="form-control"
//                               name="city"
//                               value={formData.city}
//                               onChange={handleInputChange}
//                               required
//                             />
//                           </div>
//                         </div>
//                         <div className="col-sm-4">
//                           <div className="position-relative">
//                             <label htmlFor="zip_code" className="form-label">ZIP/Postal code</label>
//                             <input
//                               type="text"
//                               name="zip_code"
//                               className="form-control"
//                               id="zip_code"
//                               value={formData.zip_code}
//                               onChange={handleInputChange}
//                             />
//                           </div>
//                         </div>
//                         <div className="col-sm-8">
//                           <div className="position-relative">
//                             <label htmlFor="address" className="form-label">Address *</label>
//                             <input
//                               type="text"
//                               name="address"
//                               className="form-control"
//                               id="address"
//                               value={formData.address}
//                               onChange={handleInputChange}
//                               required
//                             />
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </section>
//                 </div>

//                 {/* Promote Tab */}
//                 <div className={`tab-pane fade ${activeTab === 'promote' ? 'show active' : ''}`} id="pills-promote" role="tabpanel" aria-labelledby="pills-promote-tab">
//                   <section className="position-relative bg-body rounded p-4 mt-4">
//                     <div className="position-relative z-1 pb-md-2 px-md-2">
//                       <h2 className="h4 mb-3 mb-sm-4">Promotion Options</h2>
//                       <p className="mb-4">Boost your listing's visibility with our promotion plans</p>
                      
//                       <div className="row g-4">
//                         {[
//                           {
//                             id: 'easy-start',
//                             name: 'Easy Start',
//                             price: 25,
//                             duration: '7 days',
//                             features: [
//                               'Basic exposure for your listing',
//                               'Standard placement in search results',
//                               'Email support'
//                             ]
//                           },
//                           {
//                             id: 'fast-sale',
//                             name: 'Fast Sale',
//                             price: 49,
//                             duration: '14 days',
//                             features: [
//                               'Enhanced visibility in search results',
//                               'Featured placement in category pages',
//                               'Priority email support',
//                               'Basic performance analytics'
//                             ],
//                             recommended: true
//                           },
//                           {
//                             id: 'turbo-boost',
//                             name: 'Turbo Boost',
//                             price: 99,
//                             duration: '30 days',
//                             features: [
//                               'Premium placement on homepage',
//                               'Maximum visibility in all listings',
//                               '24/7 priority support',
//                               'Advanced analytics dashboard',
//                               'Social media promotion'
//                             ]
//                           }
//                         ].map((plan) => (
//                           <div className="col-md-4" key={plan.id}>
//                             <div className={`card h-100 ${plan.recommended ? 'border-primary border-2' : ''}`}>
//                               <div className="card-body">
//                                 {plan.recommended && (
//                                   <div className="badge bg-primary text-white position-absolute top-0 start-50 translate-middle mt-2">
//                                     Recommended
//                                   </div>
//                                 )}
//                                 <h3 className="h5 text-center">{plan.name}</h3>
//                                 <div className="text-center my-3">
//                                   <span className="display-5 fw-bold">${plan.price}</span>
//                                   <span className="text-muted"> / {plan.duration}</span>
//                                 </div>
//                                 <ul className="list-unstyled">
//                                   {plan.features.map((feature, index) => (
//                                     <li key={index} className="mb-2">
//                                       <i className="fi-check-circle text-success me-2"></i>
//                                       {feature}
//                                     </li>
//                                   ))}
//                                 </ul>
//                                 <div className="text-center mt-3">
//                                   <input
//                                     type="radio"
//                                     className="btn-check"
//                                     name="promotion_plan"
//                                     id={plan.id}
//                                     value={plan.id}
//                                     checked={formData.promotion_plan === plan.id}
//                                     onChange={handleInputChange}
//                                   />
//                                   <label
//                                     className={`btn btn-outline-${plan.recommended ? 'primary' : 'secondary'} w-100`}
//                                     htmlFor={plan.id}
//                                   >
//                                     Select {plan.name}
//                                   </label>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   </section>
//                 </div>
//               </div>
//             </div>
            
//             {/* Progress bar and navigation buttons */}
//             <footer className="sticky-bottom bg-body pb-3">
//               <div className="progress rounded-0" role="progressbar" style={{ height: '4px' }}>
//                 <div
//                   className={`progress-bar ${uploadProgress > 0 ? 'bg-info' : 'bg-dark'}`}
//                   style={{ width: `${uploadProgress > 0 ? uploadProgress : progressPercentage()}%` }}
//                 />
//               </div>
//               <div className="container d-flex gap-3 pt-3">
//                 <button
//                   type="button"
//                   className="btn btn-outline-dark animate-slide-start"
//                   onClick={handleBack}
//                   disabled={activeTab === 'home'}
//                 >
//                   <i className="fi-arrow-left animate-target fs-base ms-n1 me-2" />
//                   Back
//                 </button>
//                 <button
//                   type="button"
//                   className="btn btn-dark animate-slide-end ms-auto"
//                   onClick={handleNext}
//                 >
//                   {activeTab === 'promote' ? 'Publish Listing' : 'Next'}
//                   <i className="fi-arrow-right animate-target fs-base ms-2 me-n1" />
//                 </button>
//               </div>
//             </footer>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default PublishPage;



// 02

// import React, { useState, useRef, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import ResponseModal from '../ResponseModal';
// import { UsersService } from '../../../../services/local/UsersService';

// const PublishPage = () => {
//   const navigate = useNavigate();
//   const fileInputRef = useRef(null);
//   const [activeTab, setActiveTab] = useState('home');
//   const [responseModal, setResponseModal] = useState({ 
//     show: false, 
//     message: '', 
//     success: false 
//   });
//   const [uploadProgress, setUploadProgress] = useState(0);
//   const [mediaFiles, setMediaFiles] = useState([]);
//   const [previews, setPreviews] = useState([]);
//   const [errors, setErrors] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false);
  
//   // Initial form state
//   const initialFormData = {
//     basicDetails: {
//       name: '',
//       categories: '',
//       price: '',
//       condition: '',
//       description: '',
//       listing_type: 'sell'
//     },
//     deliveryOptions: {
//       delivery_type: 'delivery'
//     },
//     contactInfo: {
//       first_name: '',
//       last_name: '',
//       email: '',
//       phone: ''
//     },
//     location: {
//       country: '',
//       state: '',
//       city: '',
//       zip_code: '',
//       address: ''
//     },
//     media: {
//       video_link: ''
//     },
//     promotion: {
//       promotion_plan: ''
//     }
//   };

//   const [formData, setFormData] = useState(initialFormData);

//   // Check authentication on component mount
//   useEffect(() => {
//     const checkAuth = async () => {
//       try {
//         const isAuthenticated = await UsersService.isAuthenticated();
//         if (!isAuthenticated) {
//           navigate('/login');
//         }
//       } catch (error) {
//         navigate('/login');
//       }
//     };
//     checkAuth();
//   }, [navigate]);

//   // Validation rules for each field
//   const validateRules = {
//     name: {
//       required: true,
//       minLength: 5,
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
//       minLength: 50,
//       maxLength: 1000
//     },
//     first_name: {
//       required: true,
//       minLength: 2
//     },
//     last_name: {
//       required: true,
//       minLength: 2
//     },
//     email: {
//       required: true,
//       pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
//     },
//     phone: {
//       required: true,
//       pattern: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
//     },
//     country: {
//       required: true
//     },
//     state: {
//       required: true
//     },
//     city: {
//       required: true
//     },
//     address: {
//       required: true
//     }
//   };

//   // Validate form fields
//   const validateField = (name, value) => {
//     const rules = validateRules[name];
//     if (!rules) return true; // No validation rules for this field
    
//     const newErrors = { ...errors };
    
//     if (rules.required && !value) {
//       newErrors[name] = 'This field is required';
//     } else if (rules.minLength && value.length < rules.minLength) {
//       newErrors[name] = `Minimum ${rules.minLength} characters required`;
//     } else if (rules.maxLength && value.length > rules.maxLength) {
//       newErrors[name] = `Maximum ${rules.maxLength} characters allowed`;
//     } else if (rules.min && parseFloat(value) < rules.min) {
//       newErrors[name] = `Minimum value is ${rules.min}`;
//     } else if (rules.pattern && !rules.pattern.test(value)) {
//       newErrors[name] = 'Invalid format';
//     } else {
//       delete newErrors[name];
//     }
    
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   // Validate current tab before proceeding
//   const validateCurrentTab = () => {
//     const tabValidations = {
//       home: () => {
//         const requiredFields = ['name', 'categories', 'price', 'condition', 'description'];
//         return requiredFields.every(field => {
//           const value = formData.basicDetails[field];
//           return validateField(field, value) && value;
//         });
//       },
//       contact: () => {
//         const requiredFields = ['first_name', 'last_name', 'email', 'phone'];
//         return requiredFields.every(field => {
//           const value = formData.contactInfo[field];
//           return validateField(field, value) && value;
//         });
//       },
//       location: () => {
//         const requiredFields = ['country', 'state', 'city', 'address'];
//         return requiredFields.every(field => {
//           const value = formData.location[field];
//           return validateField(field, value) && value;
//         });
//       },
//       promote: () => true, // No validation required for promotion tab
//       'listing-type': () => true, // No validation required for listing type
//       images: () => mediaFiles.length > 0 // At least one media file required
//     };

//     const isValid = tabValidations[activeTab]();
//     if (!isValid) {
//       setResponseModal({
//         show: true,
//         message: 'Please fill in all required fields correctly',
//         success: false
//       });
//     }
//     return isValid;
//   };

//   // Handle file selection
//   const handleFileChange = (e) => {
//     const files = Array.from(e.target.files);
//     const validFiles = files.filter(file => 
//       (file.type.startsWith('image/') || file.type.startsWith('video/')) && 
//       file.size <= 8 * 1024 * 1024 // 8MB limit
//     );
    
//     if (validFiles.length !== files.length) {
//       setResponseModal({
//         show: true,
//         message: 'Only image and video files under 8MB are allowed',
//         success: false
//       });
//     }

//     const newMediaFiles = [...mediaFiles, ...validFiles];
//     setMediaFiles(newMediaFiles);

//     // Generate previews
//     const newPreviews = [];
//     validFiles.forEach(file => {
//       const reader = new FileReader();
//       reader.onload = (e) => {
//         newPreviews.push({
//           url: e.target.result,
//           type: file.type.startsWith('image/') ? 'image' : 'video',
//           name: file.name,
//           size: file.size
//         });
//         setPreviews([...previews, ...newPreviews]);
//       };
//       reader.readAsDataURL(file);
//     });
//   };

//   // Remove a media file
//   const removeMedia = (index) => {
//     const newMediaFiles = [...mediaFiles];
//     const newPreviews = [...previews];
    
//     newMediaFiles.splice(index, 1);
//     newPreviews.splice(index, 1);
    
//     setMediaFiles(newMediaFiles);
//     setPreviews(newPreviews);
//   };

//   // Handle input changes with validation
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     let formSection = 'basicDetails';
    
//     // Determine which section of the form this field belongs to
//     if (name in formData.contactInfo) formSection = 'contactInfo';
//     if (name in formData.location) formSection = 'location';
//     if (name in formData.media) formSection = 'media';
//     if (name in formData.promotion) formSection = 'promotion';
//     if (name in formData.deliveryOptions) formSection = 'deliveryOptions';

//     // Update form data
//     setFormData(prev => ({
//       ...prev,
//       [formSection]: {
//         ...prev[formSection],
//         [name]: value
//       }
//     }));

//     // Validate the field
//     validateField(name, value);
//   };

//   // Structure data for submission
//   const prepareSubmissionData = () => {
//     const submissionData = new FormData();
    
//     // Flatten form data and append to FormData
//     Object.entries(formData).forEach(([section, data]) => {
//       Object.entries(data).forEach(([key, value]) => {
//         if (value !== undefined && value !== null && value !== '') {
//           submissionData.append(key, value);
//         }
//       });
//     });

//     // Append media files with metadata
//     mediaFiles.forEach((file, index) => {
//       submissionData.append('media_files', file);
//       submissionData.append(`media_${index}_type`, file.type.startsWith('image/') ? 'image' : 'video');
//       submissionData.append(`media_${index}_is_cover`, index === 0 ? 'true' : 'false');
//     });

//     return submissionData;
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
    
//     try {
//       // Final validation before submission
//       if (!validateCurrentTab()) {
//         setIsSubmitting(false);
//         return;
//       }

//       // Prepare structured data
//       const submissionData = prepareSubmissionData();
      
//       // Get auth token
//       const token = await UsersService.getAuthToken();
      
//       // Submit data with progress tracking
//       const response = await axios.post('/api/products', submissionData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//           'Authorization': `Bearer ${token}`
//         },
//         onUploadProgress: (progressEvent) => {
//           const progress = Math.round((progressEvent.loaded * 100) / progressEvent.total);
//           setUploadProgress(progress);
//         }
//       });

//       // Handle successful submission
//       if (response.data.success) {
//         setResponseModal({
//           show: true,
//           message: 'Product published successfully! Redirecting...',
//           success: true
//         });

//         // Reset form and redirect after delay
//         setTimeout(() => {
//           setFormData(initialFormData);
//           setMediaFiles([]);
//           setPreviews([]);
//           setActiveTab('home');
//           setUploadProgress(0);
//           navigate('/my-listings');
//         }, 2000);
//       } else {
//         throw new Error(response.data.message || 'Submission failed');
//       }
//     } catch (error) {
//       const errorMessage = error.response?.data?.message || 
//                          error.message || 
//                          'Failed to publish product. Please try again.';
      
//       setResponseModal({
//         show: true,
//         message: errorMessage,
//         success: false
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   // Tab navigation with validation
//   const handleNext = (e) => {
//     e.preventDefault();
    
//     if (!validateCurrentTab()) return;
    
//     const tabs = ['home', 'listing-type', 'images', 'contact', 'location', 'promote'];
//     const currentIndex = tabs.indexOf(activeTab);
    
//     if (currentIndex < tabs.length - 1) {
//       setActiveTab(tabs[currentIndex + 1]);
//     } else {
//       handleSubmit(e);
//     }
//   };

//   const handleBack = () => {
//     const tabs = ['home', 'listing-type', 'images', 'contact', 'location', 'promote'];
//     const currentIndex = tabs.indexOf(activeTab);
    
//     if (currentIndex > 0) {
//       setActiveTab(tabs[currentIndex - 1]);
//     }
//   };

//   // Calculate progress percentage for UI
//   const progressPercentage = () => {
//     const tabs = ['home', 'listing-type', 'images', 'contact', 'location', 'promote'];
//     const currentIndex = tabs.indexOf(activeTab);
//     return ((currentIndex + 1) / tabs.length) * 100;
//   };

//   return (
//     <div className="container pt-4 justify-content-center">
//       <div className="row pt-sm-2" style={{ marginLeft: "-15px", marginRight: "-15px" }}>
//         <section id="pills-tabs" className="docs-section">
//           <h4>Create your product listing</h4>
//           <div className="card border-0 shadow - row g-0 overflow-x-auto pb-3 mb-2 mb-md-3 mb-lg-4" data-simplebar data-simplebar-auto-hide="false">
//             <div className="card-body position-relative z-2 col-auto">
//               {/* Nav pills */}
//               <ul className="nav nav-pills mb-3 - flex-nowrap gap-2 text-nowrap pb-3" role="tablist">
//                 {['home', 'listing-type', 'images', 'contact', 'location', 'promote'].map((tab) => (
//                   <li className="nav-item" role="presentation" key={tab}>
//                     <button
//                       type="button"
//                       className={`nav-link ${activeTab === tab ? 'active' : ''}`}
//                       onClick={() => setActiveTab(tab)}
//                     >
//                       {tab === 'home' && <><i className="fi-home me-2 ms-n1" />Basic Info</>}
//                       {tab === 'listing-type' && <><i className="fi-list me-2 ms-n1" />Type</>}
//                       {tab === 'images' && <><i className="fi-image me-2 ms-n1" />Media</>}
//                       {tab === 'contact' && <><i className="fi-user me-2 ms-n1" />Contact</>}
//                       {tab === 'location' && <><i className="fi-map-pin me-2 ms-n1" />Location</>}
//                       {tab === 'promote' && <><i className="fi-award me-2 ms-n1" />Promote</>}
//                     </button>
//                   </li>
//                 ))}
//               </ul>

//               {/* Response Modal - Placed just above the buttons */}
//               <ResponseModal
//                 show={responseModal.show}
//                 message={responseModal.message}
//                 success={responseModal.success}
//                 onClose={() => setResponseModal({...responseModal, show: false})}
//               />

//               {/* Pills content */}
//               <div className="tab-content" id="pills-tabContent">
//                 {/* Home/Listing Details Tab */}
//                 <div className={`tab-pane fade ${activeTab === 'home' ? 'show active' : ''}`} id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
//                   <section className="position-relative bg-body rounded p-4 mt-4">
//                     <div className="position-relative z-1 pb-md-2 px-md-2">
//                       <h2 className="h4 mb-3 mb-sm-4">Basic Information</h2>
//                       <div className="row row-cols-1 row-cols-sm-2 g-3 g-md-4 mb-3 mb-md-4">
//                         <div className="col">
//                           <label htmlFor="name" className="form-label">Product name *</label>
//                           <input
//                             type="text"
//                             className={`form-control form-control-lg ${errors.name ? 'is-invalid' : ''}`}
//                             id="name"
//                             name="name"
//                             minLength={5}
//                             placeholder="Product name"
//                             value={formData.basicDetails.name}
//                             onChange={handleInputChange}
//                             onBlur={(e) => validateField('name', e.target.value)}
//                             required
//                           />
//                           {errors.name && (
//                             <div className="invalid-feedback">{errors.name}</div>
//                           )}
//                         </div>
//                         <div className="col">
//                           <label htmlFor="categories" className="form-label d-flex align-items-center">
//                             Categories *
//                             <i className="fi-info fs-base ms-2" data-bs-toggle="tooltip" aria-label="Select the most relevant category" />
//                           </label>
//                           <select
//                             className={`form-select form-select-lg ${errors.categories ? 'is-invalid' : ''}`}
//                             name="categories"
//                             value={formData.basicDetails.categories}
//                             onChange={handleInputChange}
//                             onBlur={(e) => validateField('categories', e.target.value)}
//                             required
//                           >
//                             <option value="">Select category...</option>
//                             <option value="electronics">Electronics</option>
//                             <option value="fashion">Fashion</option>
//                             <option value="home">Home & Garden</option>
//                             <option value="vehicles">Vehicles</option>
//                             <option value="property">Property</option>
//                           </select>
//                           {errors.categories && (
//                             <div className="invalid-feedback">{errors.categories}</div>
//                           )}
//                         </div>
//                         <div className="col">
//                           <label htmlFor="price" className="form-label">Price *</label>
//                           <div className="input-group">
//                             <span className="input-group-text">$</span>
//                             <input
//                               type="number"
//                               className={`form-control form-control-lg ${errors.price ? 'is-invalid' : ''}`}
//                               id="price"
//                               name="price"
//                               value={formData.basicDetails.price}
//                               onChange={handleInputChange}
//                               onBlur={(e) => validateField('price', e.target.value)}
//                               min="0.01"
//                               step="0.01"
//                               required
//                             />
//                             {errors.price && (
//                               <div className="invalid-feedback">{errors.price}</div>
//                             )}
//                           </div>
//                         </div>
//                         <div className="col">
//                           <label htmlFor="condition" className="form-label">Condition *</label>
//                           <select
//                             className={`form-select form-select-lg ${errors.condition ? 'is-invalid' : ''}`}
//                             id="condition"
//                             name="condition"
//                             value={formData.basicDetails.condition}
//                             onChange={handleInputChange}
//                             onBlur={(e) => validateField('condition', e.target.value)}
//                             required
//                           >
//                             <option value="">Select condition...</option>
//                             <option value="new">Brand New</option>
//                             <option value="used">Used - Like New</option>
//                             <option value="good">Used - Good</option>
//                             <option value="fair">Used - Fair</option>
//                           </select>
//                           {errors.condition && (
//                             <div className="invalid-feedback">{errors.condition}</div>
//                           )}
//                         </div>
//                       </div>
//                       <label htmlFor="description" className="form-label fs-6 fw-semibold">Description *</label>
//                       <p className="fs-sm mb-2">Describe your product in detail to attract buyers</p>
//                       <textarea
//                         className={`form-control form-control-lg ${errors.description ? 'is-invalid' : ''}`}
//                         rows={5}
//                         id="description"
//                         name="description"
//                         placeholder="Describe your product (minimum 50 characters)"
//                         minLength={50}
//                         maxLength={1000}
//                         value={formData.basicDetails.description}
//                         onChange={handleInputChange}
//                         onBlur={(e) => validateField('description', e.target.value)}
//                         required
//                       />
//                       {errors.description && (
//                         <div className="invalid-feedback">{errors.description}</div>
//                       )}
//                       <div className="text-end mt-1">
//                         <small className="text-muted">
//                           {formData.basicDetails.description.length}/1000 characters
//                         </small>
//                       </div>
//                     </div>
//                   </section>
//                 </div>

//                 {/* Listing Type Tab */}
//                 <div className={`tab-pane fade ${activeTab === 'listing-type' ? 'show active' : ''}`} id="pills-listing-type" role="tabpanel" aria-labelledby="pills-listing-tab">
//                   <section className="container pt-2 mt-1 mt-sm-3 mt-lg-4">
//                     <div className="row">
//                       <h4 className="h4 mb-3 mb-sm-4">Select a listing type</h4>
//                       <div className="d-flex flex-wrap gap-2">
//                         {['sell', 'service', 'property', 'vehicle'].map((type) => (
//                           <React.Fragment key={type}>
//                             <input
//                               type="radio"
//                               className="btn-check"
//                               name="listing_type"
//                               id={`listing-${type}`}
//                               value={type}
//                               checked={formData.basicDetails.listing_type === type}
//                               onChange={handleInputChange}
//                             />
//                             <label htmlFor={`listing-${type}`} className="btn btn-sm border-2 btn-outline-secondary">
//                               <div className="d-flex flex-column flex-xxl-row align-items-center">
//                                 <div className="d-flex text-dark-emphasis bg-body-tertiary rounded-circle p-4 mb-3 mb-xxl-0">
//                                   <i className={`fi-${type === 'sell' ? 'shopping-bag' : type === 'service' ? 'settings' : type === 'property' ? 'home' : 'car'} fs-2 m-xxl-1`} />
//                                 </div>
//                                 <div className="text-center text-xxl-start ps-xxl-3">
//                                   <h3 className="h6 mb-1">
//                                     {type === 'sell' && 'Sell an item'}
//                                     {type === 'service' && 'Offer a service'}
//                                     {type === 'property' && 'Sell property'}
//                                     {type === 'vehicle' && 'Sell a vehicle'}
//                                   </h3>
//                                 </div>
//                               </div>
//                             </label>
//                           </React.Fragment>
//                         ))}
//                       </div>
//                     </div>
//                   </section>
//                 </div>

//                 {/* Media Tab */}
//                 <div className={`tab-pane fade ${activeTab === 'images' ? 'show active' : ''}`} id="pills-images" role="tabpanel" aria-labelledby="pills-images-tab">
//                   <section className="position-relative bg-body rounded p-4 mt-4">
//                     <div className="position-relative z-1 pb-md-2 px-md-2">
//                       <div className="d-sm-flex align-items-center justify-content-between mb-3 mb-sm-4">
//                         <h2 className="h4 mb-2 mb-sm-0 me-3">Photos & Videos</h2>
//                         <div className="position-relative d-flex">
//                           <i className="fi-info text-info mt-1 me-2" />
//                           <a className="fs-sm fw-medium stretched-link text-bg-light rounded" href="#!">Photo guidelines</a>
//                         </div>
//                       </div>
//                       <small className="fs-sm text-warning">The maximum file size is 8 MB. Formats: jpeg, jpg, png, mp4, mov. Put the main picture first.</small>
//                       {mediaFiles.length === 0 && (
//                         <div className="alert alert-warning mt-3">
//                           <i className="fi-alert-circle me-2"></i>
//                           At least one image is required for your listing
//                         </div>
//                       )}
//                       <div style={{ maxWidth: '852px' }}>
//                         <div className="row row-cols-2 row-cols-sm-3 g-2 g-md-4 g-lg-3 g-xl-4">
//                           {/* Media previews */}
//                           {previews.map((preview, index) => (
//                             <div className="col" key={index}>
//                               <div className="hover-effect-opacity position-relative overflow-hidden rounded">
//                                 {index === 0 && (
//                                   <span className="badge text-bg-light position-absolute top-0 start-0 z-3 mt-2 ms-2">Cover</span>
//                                 )}
//                                 <div className="ratio" style={{ aspectRatio: '4/3' }}>
//                                   {preview.type === 'image' ? (
//                                     <img src={preview.url} alt={`Preview ${index + 1}`} className="img-fluid object-fit-cover" />
//                                   ) : (
//                                     <video controls className="w-100 h-100 object-fit-cover">
//                                       <source src={preview.url} type={mediaFiles[index].type} />
//                                     </video>
//                                   )}
//                                 </div>
//                                 <div className="hover-effect-target position-absolute top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100 opacity-0">
//                                   <button
//                                     type="button"
//                                     className="btn btn-icon btn-sm btn-light position-relative z-2"
//                                     aria-label="Remove"
//                                     onClick={() => removeMedia(index)}
//                                   >
//                                     <i className="ci-trash-empty"></i>
//                                   </button>
//                                   <span className="position-absolute top-0 start-0 w-100 h-100 bg-black bg-opacity-25 z-1" />
//                                 </div>
//                               </div>
//                               <small className="text-muted d-block text-truncate mt-1">
//                                 {preview.name} ({Math.round(preview.size / 1024)} KB)
//                               </small>
//                             </div>
//                           ))}

//                           {/* Upload button */}
//                           <div className="col">
//                             <div 
//                               className="d-flex align-items-center justify-content-center position-relative h-100 cursor-pointer bg-body-tertiary border border-2 border-dotted rounded p-3"
//                               onClick={() => fileInputRef.current.click()}
//                               style={{ minHeight: '150px' }}
//                             >
//                               <div className="text-center">
//                                 <i className="fi-plus-circle fs-4 text-secondary-emphasis mb-2" />
//                                 <div className="hover-effect-underline stretched-link fs-sm fw-medium">
//                                   Upload photos/videos
//                                 </div>
//                                 <input
//                                   type="file"
//                                   ref={fileInputRef}
//                                   onChange={handleFileChange}
//                                   className="d-none"
//                                   multiple
//                                   accept="image/*,video/*"
//                                 />
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="pt-3 mt-2 mt-md-3">
//                         <label htmlFor="video_link" className="form-label">Link to YouTube/Vimeo video (optional)</label>
//                         <div className="position-relative">
//                           <i className="fi-link position-absolute top-50 start-0 translate-middle-y fs-lg ms-3" />
//                           <input
//                             type="url"
//                             className="form-control form-control-lg form-icon-start"
//                             id="video_link"
//                             name="video_link"
//                             placeholder="www.youtube.com/..."
//                             value={formData.media.video_link}
//                             onChange={handleInputChange}
//                           />
//                         </div>
//                       </div>
//                     </div>
//                   </section>
//                 </div>

//                 {/* Contact Tab */}
//                 <div className={`tab-pane fade ${activeTab === 'contact' ? 'show active' : ''}`} id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
//                   <section className="position-relative bg-body rounded p-4 mt-4">
//                     <div className="position-relative z-1 pb-md-2 px-md-2">
//                       <h2 className="h4 mb-3 mb-sm-4">Contact Information</h2>
//                       <div className="nav nav-pills flex-wrap gap-3 mb-3 mb-sm-4">
//                         <div>
//                           <input
//                             type="radio"
//                             className="btn-check"
//                             id="delivery"
//                             name="delivery_type"
//                             value="delivery"
//                             checked={formData.deliveryOptions.delivery_type === 'delivery'}
//                             onChange={handleInputChange}
//                           />
//                           <label className="nav-link" htmlFor="delivery">
//                             <i className="fi-truck fs-base ms-n1 me-2" />
//                             Delivery Available
//                           </label>
//                         </div>
//                         <div>
//                           <input
//                             type="radio"
//                             className="btn-check"
//                             id="pickup"
//                             name="delivery_type"
//                             value="pickup"
//                             checked={formData.deliveryOptions.delivery_type === 'pickup'}
//                             onChange={handleInputChange}
//                           />
//                           <label className="nav-link" htmlFor="pickup">
//                             <i className="fi-map-pin fs-base ms-n1 me-2" />
//                             Pick-up Only
//                           </label>
//                         </div>
//                       </div>
//                       <div className="row row-cols-1 row-cols-sm-2 g-3 g-md-4">
//                         <div className="col">
//                           <label htmlFor="first_name" className="form-label">First name *</label>
//                           <input
//                             type="text"
//                             className={`form-control form-control-lg ${errors.first_name ? 'is-invalid' : ''}`}
//                             id="first_name"
//                             name="first_name"
//                             value={formData.contactInfo.first_name}
//                             onChange={handleInputChange}
//                             onBlur={(e) => validateField('first_name', e.target.value)}
//                             required
//                           />
//                           {errors.first_name && (
//                             <div className="invalid-feedback">{errors.first_name}</div>
//                           )}
//                         </div>
//                         <div className="col">
//                           <label htmlFor="last_name" className="form-label">Last name *</label>
//                           <input
//                             type="text"
//                             className={`form-control form-control-lg ${errors.last_name ? 'is-invalid' : ''}`}
//                             id="last_name"
//                             name="last_name"
//                             value={formData.contactInfo.last_name}
//                             onChange={handleInputChange}
//                             onBlur={(e) => validateField('last_name', e.target.value)}
//                             required
//                           />
//                           {errors.last_name && (
//                             <div className="invalid-feedback">{errors.last_name}</div>
//                           )}
//                         </div>
//                         <div className="col">
//                           <label htmlFor="email" className="form-label">Email *</label>
//                           <input
//                             type="email"
//                             className={`form-control form-control-lg ${errors.email ? 'is-invalid' : ''}`}
//                             id="email"
//                             name="email"
//                             value={formData.contactInfo.email}
//                             onChange={handleInputChange}
//                             onBlur={(e) => validateField('email', e.target.value)}
//                             required
//                           />
//                           {errors.email && (
//                             <div className="invalid-feedback">{errors.email}</div>
//                           )}
//                         </div>
//                         <div className="col">
//                           <label htmlFor="phone" className="form-label">Phone number *</label>
//                           <input
//                             type="tel"
//                             className={`form-control form-control-lg ${errors.phone ? 'is-invalid' : ''}`}
//                             id="phone"
//                             name="phone"
//                             value={formData.contactInfo.phone}
//                             onChange={handleInputChange}
//                             onBlur={(e) => validateField('phone', e.target.value)}
//                             placeholder="(___) ___-____"
//                             required
//                           />
//                           {errors.phone && (
//                             <div className="invalid-feedback">{errors.phone}</div>
//                           )}
//                         </div>
//                       </div>
//                     </div>
//                   </section>
//                 </div>

//                 {/* Location Tab */}
//                 <div className={`tab-pane fade ${activeTab === 'location' ? 'show active' : ''}`} id="pills-location" role="tabpanel" aria-labelledby="pills-location-tab">
//                   <section className="position-relative bg-body rounded p-4 mt-4">
//                     <div className="position-relative z-1 pb-md-2 px-md-2">
//                       <h2 className="h4 mb-3 mb-sm-4">Location Details</h2>
//                       <div className="row g-3 g-md-4">
//                         <div className="col-sm-4">
//                           <div className="position-relative">
//                             <label className="form-label">Country *</label>
//                             <select
//                               name="country"
//                               className={`form-select ${errors.country ? 'is-invalid' : ''}`}
//                               value={formData.location.country}
//                               onChange={handleInputChange}
//                               onBlur={(e) => validateField('country', e.target.value)}
//                               required
//                             >
//                               <option value="">Select country...</option>
//                               <option value="US">United States</option>
//                               <option value="UK">United Kingdom</option>
//                               <option value="CA">Canada</option>
//                               <option value="AU">Australia</option>
//                               <option value="NG">Nigeria</option>
//                             </select>
//                             {errors.country && (
//                               <div className="invalid-feedback">{errors.country}</div>
//                             )}
//                           </div>
//                         </div>
//                         <div className="col-sm-4">
//                           <div className="position-relative">
//                             <label className="form-label">State/Region *</label>
//                             <input
//                               type="text"
//                               className={`form-control ${errors.state ? 'is-invalid' : ''}`}
//                               name="state"
//                               value={formData.location.state}
//                               onChange={handleInputChange}
//                               onBlur={(e) => validateField('state', e.target.value)}
//                               required
//                             />
//                             {errors.state && (
//                               <div className="invalid-feedback">{errors.state}</div>
//                             )}
//                           </div>
//                         </div>
//                         <div className="col-sm-4">
//                           <div className="position-relative">
//                             <label className="form-label">City *</label>
//                             <input
//                               type="text"
//                               className={`form-control ${errors.city ? 'is-invalid' : ''}`}
//                               name="city"
//                               value={formData.location.city}
//                               onChange={handleInputChange}
//                               onBlur={(e) => validateField('city', e.target.value)}
//                               required
//                             />
//                             {errors.city && (
//                               <div className="invalid-feedback">{errors.city}</div>
//                             )}
//                           </div>
//                         </div>
//                         <div className="col-sm-4">
//                           <div className="position-relative">
//                             <label htmlFor="zip_code" className="form-label">ZIP/Postal code</label>
//                             <input
//                               type="text"
//                               name="zip_code"
//                               className="form-control"
//                               id="zip_code"
//                               value={formData.location.zip_code}
//                               onChange={handleInputChange}
//                             />
//                           </div>
//                         </div>
//                         <div className="col-sm-8">
//                           <div className="position-relative">
//                             <label htmlFor="address" className="form-label">Address *</label>
//                             <input
//                               type="text"
//                               name="address"
//                               className={`form-control ${errors.address ? 'is-invalid' : ''}`}
//                               id="address"
//                               value={formData.location.address}
//                               onChange={handleInputChange}
//                               onBlur={(e) => validateField('address', e.target.value)}
//                               required
//                             />
//                             {errors.address && (
//                               <div className="invalid-feedback">{errors.address}</div>
//                             )}
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </section>
//                 </div>

//                 {/* Promote Tab */}
//                 <div className={`tab-pane fade ${activeTab === 'promote' ? 'show active' : ''}`} id="pills-promote" role="tabpanel" aria-labelledby="pills-promote-tab">
//                   <section className="position-relative bg-body rounded p-4 mt-4">
//                     <div className="position-relative z-1 pb-md-2 px-md-2">
//                       <h2 className="h4 mb-3 mb-sm-4">Promotion Options</h2>
//                       <p className="mb-4">Boost your listing's visibility with our promotion plans</p>
                      
//                       <div className="alert alert-info">
//                         <i className="fi-info-circle me-2"></i>
//                         Promotion plans help your listing stand out and reach more potential buyers
//                       </div>
                      
//                       <div className="row g-4">
//                         {[
//                           {
//                             id: 'easy-start',
//                             name: 'Easy Start',
//                             price: 25,
//                             duration: '7 days',
//                             features: [
//                               'Basic exposure for your listing',
//                               'Standard placement in search results',
//                               'Email support'
//                             ]
//                           },
//                           {
//                             id: 'fast-sale',
//                             name: 'Fast Sale',
//                             price: 49,
//                             duration: '14 days',
//                             features: [
//                               'Enhanced visibility in search results',
//                               'Featured placement in category pages',
//                               'Priority email support',
//                               'Basic performance analytics'
//                             ],
//                             recommended: true
//                           },
//                           {
//                             id: 'turbo-boost',
//                             name: 'Turbo Boost',
//                             price: 99,
//                             duration: '30 days',
//                             features: [
//                               'Premium placement on homepage',
//                               'Maximum visibility in all listings',
//                               '24/7 priority support',
//                               'Advanced analytics dashboard',
//                               'Social media promotion'
//                             ]
//                           }
//                         ].map((plan) => (
//                           <div className="col-md-4" key={plan.id}>
//                             <div className={`card h-100 ${plan.recommended ? 'border-primary border-2' : ''}`}>
//                               <div className="card-body">
//                                 {plan.recommended && (
//                                   <div className="badge bg-primary text-white position-absolute top-0 start-50 translate-middle mt-2">
//                                     Recommended
//                                   </div>
//                                 )}
//                                 <h3 className="h5 text-center">{plan.name}</h3>
//                                 <div className="text-center my-3">
//                                   <span className="display-5 fw-bold">${plan.price}</span>
//                                   <span className="text-muted"> / {plan.duration}</span>
//                                 </div>
//                                 <ul className="list-unstyled">
//                                   {plan.features.map((feature, index) => (
//                                     <li key={index} className="mb-2">
//                                       <i className="fi-check-circle text-success me-2"></i>
//                                       {feature}
//                                     </li>
//                                   ))}
//                                 </ul>
//                                 <div className="text-center mt-3">
//                                   <input
//                                     type="radio"
//                                     className="btn-check"
//                                     name="promotion_plan"
//                                     id={plan.id}
//                                     value={plan.id}
//                                     checked={formData.promotion.promotion_plan === plan.id}
//                                     onChange={handleInputChange}
//                                   />
//                                   <label
//                                     className={`btn btn-outline-${plan.recommended ? 'primary' : 'secondary'} w-100`}
//                                     htmlFor={plan.id}
//                                   >
//                                     Select {plan.name}
//                                   </label>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   </section>
//                 </div>
//               </div>
//             </div>
            
//             {/* Progress bar and navigation buttons */}
//             <footer className="sticky-bottom bg-body pb-3">
//               <div className="progress rounded-0" role="progressbar" style={{ height: '4px' }}>
//                 <div
//                   className={`progress-bar ${uploadProgress > 0 ? 'bg-info' : 'bg-dark'}`}
//                   style={{ width: `${uploadProgress > 0 ? uploadProgress : progressPercentage()}%` }}
//                 />
//               </div>
//               <div className="container d-flex gap-3 pt-3">
//                 <button
//                   type="button"
//                   className="btn btn-outline-dark animate-slide-start"
//                   onClick={handleBack}
//                   disabled={activeTab === 'home' || isSubmitting}
//                 >
//                   <i className="fi-arrow-left animate-target fs-base ms-n1 me-2" />
//                   Back
//                 </button>
//                 <button
//                   type="button"
//                   className="btn btn-dark animate-slide-end ms-auto"
//                   onClick={handleNext}
//                   disabled={isSubmitting}
//                 >
//                   {isSubmitting ? (
//                     <>
//                       <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
//                       {uploadProgress > 0 ? 'Uploading...' : 'Processing...'}
//                     </>
//                   ) : (
//                     <>
//                       {activeTab === 'promote' ? 'Publish Listing' : 'Next'}
//                       <i className="fi-arrow-right animate-target fs-base ms-2 me-n1" />
//                     </>
//                   )}
//                 </button>
//               </div>
//             </footer>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default PublishPage;

// 03

import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ResponseModal from '../ResponseModal';
import { UsersService } from '../../../../services/local/UsersService';
import { ProductAxiosService } from '../../../../services/net/ProductAxiosService';

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
    basicDetails: {
      name: '',
      categories: '',
      price: '',
      condition: '',
      description: '',
      listing_type: 'sell'
    },
    deliveryOptions: {
      delivery_type: 'delivery'
    },
    contactInfo: {
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

  // Check authentication on component mount
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const isAuthenticated = await UsersService.isAuthenticated();
        if (!isAuthenticated) {
          navigate('/auth/signin');
        }
      } catch (error) {
        navigate('/auth/signin');
      }
    };
    checkAuth();
  }, [navigate]);

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
    if (!rules) return true; // No validation rules for this field
    
    const newErrors = { ...errors };
    
    if (rules.required && !value) {
      newErrors[name] = 'This field is required';
    } else if (rules.minLength && value.length < rules.minLength) {
      newErrors[name] = `Minimum ${rules.minLength} characters required`;
    } else if (rules.maxLength && value.length > rules.maxLength) {
      newErrors[name] = `Maximum ${rules.maxLength} characters allowed`;
    } else if (rules.min && parseFloat(value) < rules.min) {
      newErrors[name] = `Minimum value is ${rules.min}`;
    } else if (rules.pattern && !rules.pattern.test(value)) {
      newErrors[name] = 'Invalid format';
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
        const requiredFields = ['name', 'categories', 'price', 'condition', 'description'];
        return requiredFields.every(field => {
          const value = formData.basicDetails[field];
          return validateField(field, value) && value;
        });
      },
      contact: () => {
        const requiredFields = ['first_name', 'last_name', 'email', 'phone'];
        return requiredFields.every(field => {
          const value = formData.contactInfo[field];
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
    let formSection = 'basicDetails';
    
    // Determine which section of the form this field belongs to
    if (name in formData.contactInfo) formSection = 'contactInfo';
    if (name in formData.location) formSection = 'location';
    if (name in formData.media) formSection = 'media';
    if (name in formData.promotion) formSection = 'promotion';
    if (name in formData.deliveryOptions) formSection = 'deliveryOptions';

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

  // Structure data for submission
  const prepareSubmissionData = () => {
    const submissionData = new FormData();
    
    // Flatten form data and append to FormData
    Object.entries(formData).forEach(([section, data]) => {
      Object.entries(data).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== '') {
          submissionData.append(key, value);
        }
      });
    });

    // Append media files with metadata
    mediaFiles.forEach((file, index) => {
      submissionData.append('media_files', file);
      submissionData.append(`media_${index}_type`, file.type.startsWith('image/') ? 'image' : 'video');
      submissionData.append(`media_${index}_is_cover`, index === 0 ? 'true' : 'false');
    });

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
      const token = await UsersService.getToken();
      
    //   // Submit data with progress tracking
    //   const response = await ProductAxiosService.createProduct('/products', submissionData, {
    //     headers: {
    //       'Content-Type': 'multipart/form-data',
    //       'Authorization': `Bearer ${token}`
    //     },
    //     onUploadProgress: (progressEvent) => {
    //       const progress = Math.round((progressEvent.loaded * 100) / progressEvent.total);
    //       setUploadProgress(progress);
    //     }
    //   });
    // Submit data with progress tracking
const response = await ProductAxiosService.createProduct('/products', submissionData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      'Authorization': `Bearer ${token}`
    },
    onUploadProgress: (progressEvent) => {
      const progress = Math.round((progressEvent.loaded * 100) / progressEvent.total);
      setUploadProgress(progress);
    }
  });

      // Handle successful submission
      if (response.data.success) {
        setResponseModal({
          show: true,
          message: 'Product published successfully! Redirecting...',
          success: true
        });

        // Reset form and redirect after delay
        setTimeout(() => {
          setFormData(initialFormData);
          setMediaFiles([]);
          setPreviews([]);
          setActiveTab('home');
          setUploadProgress(0);
          navigate(`products/slug`);
        }, 2000);
      } else {
        throw new Error(response.data.message || 'Submission failed');
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || 
                         error.message || 
                         'Failed to publish product. Please try again.';
      
      setResponseModal({
        show: true,
        message: errorMessage,
        success: false
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
    <div className="container pt-4 justify-content-center">
      <div className="row pt-sm-2" style={{ marginLeft: "-15px", marginRight: "-15px" }}>
        <section id="pills-tabs" className="docs-section">
          <h4>Create your product listing</h4>
          <div className="card border-0 shadow - row g-0 overflow-x-auto pb-3 mb-2 mb-md-3 mb-lg-4" data-simplebar data-simplebar-auto-hide="false">
            <div className="card-body position-relative z-2 col-auto">
              {/* Nav pills */}
              <ul className="nav nav-pills mb-3 - flex-nowrap gap-2 text-nowrap pb-3" role="tablist">
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

              {/* Pills content */}
              <div className="tab-content" id="pills-tabContent">
                {/* Home/Listing Details Tab */}
                <div className={`tab-pane fade ${activeTab === 'home' ? 'show active' : ''}`} id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                  <section className="position-relative bg-body rounded p-4 mt-4">
                    <div className="position-relative z-1 pb-md-2 px-md-2">
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
                            value={formData.basicDetails.name}
                            onChange={handleInputChange}
                            onBlur={(e) => validateField('name', e.target.value)}
                            required
                          />
                          {errors.name && (
                            <div className="invalid-feedback">{errors.name}</div>
                          )}
                        </div>
                        <div className="col">
                          <label htmlFor="categories" className="form-label d-flex align-items-center">
                            Categories *
                            <i className="fi-info fs-base ms-2" data-bs-toggle="tooltip" aria-label="Select the most relevant category" />
                          </label>
                          <select
                            className={`form-select form-select-lg ${errors.categories ? 'is-invalid' : ''}`}
                            name="categories"
                            value={formData.basicDetails.categories}
                            onChange={handleInputChange}
                            onBlur={(e) => validateField('categories', e.target.value)}
                            required
                          >
                            <option value="">Select category...</option>
                            <option value="electronics">Electronics</option>
                            <option value="fashion">Fashion</option>
                            <option value="home">Home & Garden</option>
                            <option value="vehicles">Vehicles</option>
                            <option value="property">Property</option>
                          </select>
                          {errors.categories && (
                            <div className="invalid-feedback">{errors.categories}</div>
                          )}
                        </div>
                        <div className="col">
                          <label htmlFor="price" className="form-label">Price *</label>
                          <div className="input-group">
                            <span className="input-group-text">$</span>
                            <input
                              type="number"
                              className={`form-control form-control-lg ${errors.price ? 'is-invalid' : ''}`}
                              id="price"
                              name="price"
                              value={formData.basicDetails.price}
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
                            value={formData.basicDetails.condition}
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
                        rows={5}
                        id="description"
                        name="description"
                        placeholder="Describe your product (minimum 50 characters)"
                        minLength={50}
                        maxLength={1000}
                        value={formData.basicDetails.description}
                        onChange={handleInputChange}
                        onBlur={(e) => validateField('description', e.target.value)}
                        required
                      />
                      {errors.description && (
                        <div className="invalid-feedback">{errors.description}</div>
                      )}
                      <div className="text-end mt-1">
                        <small className="text-muted">
                          {formData.basicDetails.description.length}/1000 characters
                        </small>
                      </div>
                    </div>
                  </section>
                </div>

                {/* Listing Type Tab */}
                <div className={`tab-pane fade ${activeTab === 'listing-type' ? 'show active' : ''}`} id="pills-listing-type" role="tabpanel" aria-labelledby="pills-listing-tab">
                  <section className="container pt-2 mt-1 mt-sm-3 mt-lg-4">
                    <div className="row">
                      <h4 className="h4 mb-3 mb-sm-4">Select a listing type</h4>
                      <div className="d-flex flex-wrap gap-2">
                        {['sell', 'service', 'property', 'vehicle'].map((type) => (
                          <React.Fragment key={type}>
                            <input
                              type="radio"
                              className="btn-check"
                              name="listing_type"
                              id={`listing-${type}`}
                              value={type}
                              checked={formData.basicDetails.listing_type === type}
                              onChange={handleInputChange}
                            />
                            <label htmlFor={`listing-${type}`} className="btn btn-sm border-2 btn-outline-secondary">
                              <div className="d-flex flex-column flex-xxl-row align-items-center">
                                <div className="d-flex text-dark-emphasis bg-body-tertiary rounded-circle p-4 mb-3 mb-xxl-0">
                                  <i className={`fi-${type === 'sell' ? 'shopping-bag' : type === 'service' ? 'settings' : type === 'property' ? 'home' : 'car'} fs-2 m-xxl-1`} />
                                </div>
                                <div className="text-center text-xxl-start ps-xxl-3">
                                  <h3 className="h6 mb-1">
                                    {type === 'sell' && 'Sell an item'}
                                    {type === 'service' && 'Offer a service'}
                                    {type === 'property' && 'Sell property'}
                                    {type === 'vehicle' && 'Sell a vehicle'}
                                  </h3>
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
                  <section className="position-relative bg-body rounded p-4 mt-4">
                    <div className="position-relative z-1 pb-md-2 px-md-2">
                      <div className="d-sm-flex align-items-center justify-content-between mb-3 mb-sm-4">
                        <h2 className="h4 mb-2 mb-sm-0 me-3">Photos & Videos</h2>
                        <div className="position-relative d-flex">
                          <i className="fi-info text-info mt-1 me-2" />
                          <a className="fs-sm fw-medium stretched-link text-bg-light rounded" href="#!">Photo guidelines</a>
                        </div>
                      </div>
                      <small className="fs-sm text-warning">The maximum file size is 8 MB. Formats: jpeg, jpg, png, mp4, mov. Put the main picture first.</small>
                      {mediaFiles.length === 0 && (
                        <div className="alert alert-warning mt-3">
                          <i className="fi-alert-circle me-2"></i>
                          At least one image is required for your listing
                        </div>
                      )}
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
                        </div>
                      </div>
                    </div>
                  </section>
                </div>

                {/* Contact Tab */}
                <div className={`tab-pane fade ${activeTab === 'contact' ? 'show active' : ''}`} id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                  <section className="position-relative bg-body rounded p-4 mt-4">
                    <div className="position-relative z-1 pb-md-2 px-md-2">
                      <h2 className="h4 mb-3 mb-sm-4">Contact Information</h2>
                      <div className="nav nav-pills flex-wrap gap-3 mb-3 mb-sm-4">
                        <div>
                          <input
                            type="radio"
                            className="btn-check"
                            id="delivery"
                            name="delivery_type"
                            value="delivery"
                            checked={formData.deliveryOptions.delivery_type === 'delivery'}
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
                            checked={formData.deliveryOptions.delivery_type === 'pickup'}
                            onChange={handleInputChange}
                          />
                          <label className="nav-link" htmlFor="pickup">
                            <i className="fi-map-pin fs-base ms-n1 me-2" />
                            Pick-up Only
                          </label>
                        </div>
                      </div>
                      <div className="row row-cols-1 row-cols-sm-2 g-3 g-md-4">
                        <div className="col">
                          <label htmlFor="first_name" className="form-label">First name *</label>
                          <input
                            type="text"
                            className={`form-control form-control-lg ${errors.first_name ? 'is-invalid' : ''}`}
                            id="first_name"
                            name="first_name"
                            value={formData.contactInfo.first_name}
                            onChange={handleInputChange}
                            onBlur={(e) => validateField('first_name', e.target.value)}
                            required
                          />
                          {errors.first_name && (
                            <div className="invalid-feedback">{errors.first_name}</div>
                          )}
                        </div>
                        <div className="col">
                          <label htmlFor="last_name" className="form-label">Last name *</label>
                          <input
                            type="text"
                            className={`form-control form-control-lg ${errors.last_name ? 'is-invalid' : ''}`}
                            id="last_name"
                            name="last_name"
                            value={formData.contactInfo.last_name}
                            onChange={handleInputChange}
                            onBlur={(e) => validateField('last_name', e.target.value)}
                            required
                          />
                          {errors.last_name && (
                            <div className="invalid-feedback">{errors.last_name}</div>
                          )}
                        </div>
                        <div className="col">
                          <label htmlFor="email" className="form-label">Email *</label>
                          <input
                            type="email"
                            className={`form-control form-control-lg ${errors.email ? 'is-invalid' : ''}`}
                            id="email"
                            name="email"
                            value={formData.contactInfo.email}
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
                            value={formData.contactInfo.phone}
                            onChange={handleInputChange}
                            onBlur={(e) => validateField('phone', e.target.value)}
                            placeholder="(___) ___-____"
                            required
                          />
                          {errors.phone && (
                            <div className="invalid-feedback">{errors.phone}</div>
                          )}
                        </div>
                      </div>
                    </div>
                  </section>
                </div>

                {/* Location Tab */}
                <div className={`tab-pane fade ${activeTab === 'location' ? 'show active' : ''}`} id="pills-location" role="tabpanel" aria-labelledby="pills-location-tab">
                  <section className="position-relative bg-body rounded p-4 mt-4">
                    <div className="position-relative z-1 pb-md-2 px-md-2">
                      <h2 className="h4 mb-3 mb-sm-4">Location Details</h2>
                      <div className="row g-3 g-md-4">
                        <div className="col-sm-4">
                          <div className="position-relative">
                            <label className="form-label">Country *</label>
                            <select
                              name="country"
                              className={`form-select ${errors.country ? 'is-invalid' : ''}`}
                              value={formData.location.country}
                              onChange={handleInputChange}
                              onBlur={(e) => validateField('country', e.target.value)}
                              required
                            >
                              <option value="">Select country...</option>
                              <option value="US">United States</option>
                              <option value="UK">United Kingdom</option>
                              <option value="CA">Canada</option>
                              <option value="AU">Australia</option>
                              <option value="NG">Nigeria</option>
                            </select>
                            {errors.country && (
                              <div className="invalid-feedback">{errors.country}</div>
                            )}
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="position-relative">
                            <label className="form-label">State/Region *</label>
                            <input
                              type="text"
                              className={`form-control ${errors.state ? 'is-invalid' : ''}`}
                              name="state"
                              value={formData.location.state}
                              onChange={handleInputChange}
                              onBlur={(e) => validateField('state', e.target.value)}
                              required
                            />
                            {errors.state && (
                              <div className="invalid-feedback">{errors.state}</div>
                            )}
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="position-relative">
                            <label className="form-label">City *</label>
                            <input
                              type="text"
                              className={`form-control ${errors.city ? 'is-invalid' : ''}`}
                              name="city"
                              value={formData.location.city}
                              onChange={handleInputChange}
                              onBlur={(e) => validateField('city', e.target.value)}
                              required
                            />
                            {errors.city && (
                              <div className="invalid-feedback">{errors.city}</div>
                            )}
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="position-relative">
                            <label htmlFor="zip_code" className="form-label">ZIP/Postal code</label>
                            <input
                              type="text"
                              name="zip_code"
                              className="form-control"
                              id="zip_code"
                              value={formData.location.zip_code}
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>
                        <div className="col-sm-8">
                          <div className="position-relative">
                            <label htmlFor="address" className="form-label">Address *</label>
                            <input
                              type="text"
                              name="address"
                              className={`form-control ${errors.address ? 'is-invalid' : ''}`}
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
                      </div>
                    </div>
                  </section>
                </div>

                {/* Promote Tab */}
                <div className={`tab-pane fade ${activeTab === 'promote' ? 'show active' : ''}`} id="pills-promote" role="tabpanel" aria-labelledby="pills-promote-tab">
                  <section className="position-relative bg-body rounded p-4 mt-4">
                    <div className="position-relative z-1 pb-md-2 px-md-2">
                      <h2 className="h4 mb-3 mb-sm-4">Promotion Options</h2>
                      <p className="mb-4">Boost your listing's visibility with our promotion plans</p>
                      
                      <div className="alert alert-info">
                        <i className="fi-info-circle me-2"></i>
                        Promotion plans help your listing stand out and reach more potential buyers
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
                                  <label
                                    className={`btn btn-outline-${plan.recommended ? 'primary' : 'secondary'} w-100`}
                                    htmlFor={plan.id}
                                  >
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
               <ResponseModal
                show={responseModal.show}
                message={responseModal.message}
                success={responseModal.success}
                onClose={() => setResponseModal({...responseModal, show: false})}
              />

            </div>
            
            {/* Progress bar and navigation buttons */}
            <footer className="sticky-bottom bg-body pb-3">
              <div className="progress rounded-0" role="progressbar" style={{ height: '4px' }}>
                <div
                  className={`progress-bar ${uploadProgress > 0 ? 'bg-info' : 'bg-dark'}`}
                  style={{ width: `${uploadProgress > 0 ? uploadProgress : progressPercentage()}%` }}
                />
              </div>
              <div className="container d-flex gap-3 pt-3">
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
              </div>
            </footer>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PublishPage;