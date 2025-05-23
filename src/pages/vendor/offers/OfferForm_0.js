import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// // src/components/offers/OfferForm.tsx
// import React, { useState, useEffect } from 'react';
// import { OffersAxiosService } from '../services/net/OffersAxiosService';
// import { ProductAxiosService } from '../services/net/ProductAxiosService';
// const OfferForm = ({ offer, onSuccess }) => {
//   const [products, setProducts] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//     discount_type: 'percentage',
//     discount_value: 10,
//     promo_code: '',
//     start_date: new Date(),
//     end_date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
//     is_featured: false,
//     banner_image: '',
//     background_gradient: '',
//     text_color: '#ffffff',
//     selectedProducts: [],
//     selectedCategories: [],
//   });
//   // Fetch products and categories on mount
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const [productsRes, categoriesRes] = await Promise.all([
//           // OffersAxiosService.fetchProducts({ page_size: 100 }),
//           // OffersAxiosService.fetchCategories()
//           ProductAxiosService.fetchPage(),
//           ProductAxiosService.fetchCategories()
//         ]);
//         setProducts(productsRes.data.products);
//         setCategories(categoriesRes.data.categories);
//         if (offer) {
//           setFormData(prevData => ({
//             ...prevData,
//             title: offer.title,
//             description: offer.description,
//             discount_type: offer.discount_type,
//             discount_value: offer.discount_value,
//             promo_code: offer.promo_code,
//             start_date: new Date(offer.start_date),
//             end_date: new Date(offer.end_date),
//             is_featured: offer.is_featured,
//             banner_image: offer.banner_image,
//             background_gradient: offer.background_gradient,
//             text_color: offer.text_color,
//             selectedProducts: offer.products.map(p => p.id),
//             selectedCategories: offer.categories.map(c => c.id),
//           }));
//         }
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     fetchData();
//   }, [offer]);
//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData(prevData => ({
//       ...prevData,
//       [name]: type === 'checkbox' ? checked : value,
//     }));
//   };
//   const handleMultiSelectChange = (name, selectedOptions) => {
//     setFormData(prevData => ({
//       ...prevData,
//       [name]: selectedOptions.map(option => option.value),
//     }));
//   };
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const offerData = {
//       ...formData,
//       product_ids: formData.selectedProducts,
//       category_ids: formData.selectedCategories,
//     };
//     try {
//       const response = offer 
//         ? await OffersAxiosService.updateOffer(offer.id, offerData)
//         : await OffersAxiosService.createOffer(offerData);
//       onSuccess(response.data);
//     } catch (error) {
//       console.error('Error saving offer:', error);
//     }
//   };
//   if (isLoading) return <div className="text-center my-5">Loading...</div>;
//   return (
//     <div className="container mt-4">
//       <div className="card shadow">
//         <div className="card-header bg-primary text-white">
//           <h3>{offer ? 'Edit Offer' : 'Create New Offer'}</h3>
//         </div>
//         <div className="card-body">
//           <form onSubmit={handleSubmit}>
//             <div className="row">
//               <div className="col-md-8">
//                 {/* Basic Info */}
//                 <div className="mb-3">
//                   <label className="form-label">Offer Title*</label>
//                   <input 
//                     name="title" 
//                     type="text" 
//                     className="form-control" 
//                     value={formData.title} 
//                     onChange={handleChange} 
//                     placeholder="Summer Sale 2023"
//                     required
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <label className="form-label">Description</label>
//                   <textarea 
//                     name="description" 
//                     className="form-control" 
//                     rows="3" 
//                     value={formData.description} 
//                     onChange={handleChange}
//                   />
//                 </div>
//                 {/* Products Selection */}
//                 <div className="mb-3">
//                   <label className="form-label">Select Products*</label>
//                   <select 
//                     multiple 
//                     className="form-control" 
//                     value={formData.selectedProducts} 
//                     onChange={(e) => handleMultiSelectChange('selectedProducts', Array.from(e.target.selectedOptions))}
//                     required
//                   >
//                     {products.map(product => (
//                       <option key={product.id} value={product.id}>
//                         {`${product.name} ($${product.price})`}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//                 {/* Categories Selection */}
//                 <div className="mb-3">
//                   <label className="form-label">Select Categories (Optional)</label>
//                   <select 
//                     multiple 
//                     className="form-control" 
//                     value={formData.selectedCategories} 
//                     onChange={(e) => handleMultiSelectChange('selectedCategories', Array.from(e.target.selectedOptions))}
//                   >
//                     {categories.map(category => (
//                       <option key={category.id} value={category.id}>
//                         {category.name}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//               </div>
//               <div className="col-md-4">
//                 {/* Discount Settings */}
//                 <div className="card mb-3">
//                   <div className="card-header bg-light">
//                     <h5>Discount Settings</h5>
//                   </div>
//                   <div className="card-body">
//                     <div className="mb-3">
//                       <label className="form-label">Discount Type*</label>
//                       <select 
//                         name="discount_type" 
//                         className="form-select" 
//                         value={formData.discount_type} 
//                         onChange={handleChange}
//                       >
//                         <option value="percentage">Percentage</option>
//                         <option value="fixed_amount">Fixed Amount</option>
//                       </select>
//                     </div>
//                     <div className="mb-3">
//                       <label className="form-label">
//                         {formData.discount_type === 'percentage' ? 'Discount Percentage*' : 'Discount Amount*'}
//                       </label>
//                       <div className="input-group">
//                         <input 
//                           name="discount_value" 
//                           type="number" 
//                           className="form-control" 
//                           value={formData.discount_value} 
//                           onChange={handleChange} 
//                           min="0"
//                           step={formData.discount_type === 'percentage' ? '1' : '0.01'}
//                           required
//                         />
//                         <span className="input-group-text">
//                           {formData.discount_type === 'percentage' ? '%' : '$'}
//                         </span>
//                       </div>
//                     </div>
//                     <div className="mb-3">
//                       <label className="form-label">Promo Code (Optional)</label>
//                       <input 
//                         name="promo_code" 
//                         type="text" 
//                         className="form-control" 
//                         value={formData.promo_code} 
//                         onChange={handleChange} 
//                         placeholder="SUMMER2023"
//                       />
//                     </div>
//                   </div>
//                 </div>
//                 {/* Date Settings */}
//                 <div className="card mb-3">
//                   <div className="card-header bg-light">
//                     <h5>Schedule</h5>
//                   </div>
//                   <div className="card-body">
//                     <div className="mb-3">
//                       <label className="form-label">Start Date*</label>
//                       <input 
//                         type="datetime-local" 
//                         name="start_date" 
//                         className="form-control" 
//                         value={formData.start_date.toISOString().slice(0, 16)} 
//                         onChange={handleChange} 
//                         required
//                       />
//                     </div>
//                     <div className="mb-3">
//                       <label className="form-label">End Date*</label>
//                       <input 
//                         type="datetime-local" 
//                         name="end_date" 
//                         className="form-control" 
//                         value={formData.end_date.toISOString().slice(0, 16)} 
//                         onChange={handleChange} 
//                         required
//                       />
//                     </div>
//                     <div className="form-check form-switch mb-3">
//                       <input 
//                         type="checkbox" 
//                         name="is_featured" 
//                         className="form-check-input" 
//                         checked={formData.is_featured} 
//                         onChange={handleChange} 
//                       />
//                       <label className="form-check-label">
//                         Featured Offer
//                       </label>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/* Visual Settings */}
//             <div className="card mb-3">
//               <div className="card-header bg-light">
//                 <h5>Visual Presentation</h5>
//               </div>
//               <div className="card-body">
//                 <div className="row">
//                   <div className="col-md-6 mb-3">
//                     <label className="form-label">Banner Image URL</label>
//                     <input 
//                       name="banner_image" 
//                       type="text" 
//                       className="form-control" 
//                       value={formData.banner_image} 
//                       onChange={handleChange} 
//                       placeholder="https://example.com/banner.jpg"
//                     />
//                   </div>
//                   <div className="col-md-6 mb-3">
//                     <label className="form-label">Background Gradient</label>
//                     <input 
//                       name="background_gradient" 
//                       type="text" 
//                       className="form-control" 
//                       value={formData.background_gradient} 
//                       onChange={handleChange} 
//                       placeholder="linear-gradient(90deg, #ff9966, #ff5e62)"
//                     />
//                   </div>
//                 </div>
//                 <div className="row">
//                   <div className="col-md-6">
//                     <label className="form-label">Text Color</label>
//                     <div className="input-group">
//                       <span className="input-group-text">#</span>
//                       <input 
//                         name="text_color" 
//                         type="text" 
//                         className="form-control" 
//                         value={formData.text_color.replace('#', '')} 
//                         onChange={handleChange} 
//                         maxLength="6"
//                       />
//                       <span 
//                         className="input-group-text color-preview" 
//                         style={{ 
//                           backgroundColor: formData.text_color,
//                           width: '40px'
//                         }}
//                       ></span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="d-flex justify-content-end">
//               <button 
//                 type="submit" 
//                 className="btn btn-primary"
//               >
//                 {offer ? 'Update Offer' : 'Create Offer'}
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default OfferForm;
// 
// src/components/offers/OfferForm.tsx
// import React, { useState, useEffect } from 'react';
// import { OffersAxiosService } from '../services/net/OffersAxiosService';
// import { ProductAxiosService } from '../services/net/ProductAxiosService';
// const OfferForm = ({ offer, onSuccess }) => {
//   const [products, setProducts] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [filteredCategories, setFilteredCategories] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//     discount_type: 'percentage',
//     discount_value: 10,
//     promo_code: '',
//     start_date: new Date(),
//     end_date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
//     is_featured: false,
//     banner_image: '',
//     background_gradient: '',
//     text_color: '#ffffff',
//     selectedProducts: [],
//     selectedCategories: [],
//     media: null,
//   });
//   // Fetch products and categories on mount
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const [productsRes, categoriesRes] = await Promise.all([
//           ProductAxiosService.fetchPage(),
//           ProductAxiosService.fetchCategories()
//         ]);
//         setProducts(productsRes.data.products);
//         setFilteredProducts(productsRes.data.products);
//         setCategories(categoriesRes.data.categories);
//         if (offer) {
//           setFormData(prevData => ({
//             ...prevData,
//             title: offer.title,
//             description: offer.description,
//             discount_type: offer.discount_type,
//             discount_value: offer.discount_value,
//             promo_code: offer.promo_code,
//             start_date: new Date(offer.start_date),
//             end_date: new Date(offer.end_date),
//             is_featured: offer.is_featured,
//             banner_image: offer.banner_image,
//             background_gradient: offer.background_gradient,
//             text_color: offer.text_color,
//             selectedProducts: offer.products.map(p => p.id),
//             selectedCategories: offer.categories.map(c => c.id),
//           }));
//         }
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     fetchData();
//   }, [offer]);
//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData(prevData => ({
//       ...prevData,
//       [name]: type === 'checkbox' ? checked : value,
//     }));
//   };
//   const handleMultiSelectChange = (name, selectedOptions) => {
//     setFormData(prevData => ({
//       ...prevData,
//       [name]: selectedOptions.map(option => option.value),
//     }));
//   };
//   const handleSearch = (e, type) => {
//     const query = e.target.value.toLowerCase();
//     if (type === 'products') {
//       setFilteredProducts(products.filter(product => product.name.toLowerCase().includes(query)));
//     } else if (type === 'categories') {
//       setFilteredCategories(categories.filter(category => category.name.toLowerCase().includes(query)));
//     }
//   };
//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setFormData(prevData => ({
//         ...prevData,
//         media: file,
//       }));
//     }
//   };
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const offerData = {
//       ...formData,
//       product_ids: formData.selectedProducts,
//       category_ids: formData.selectedCategories,
//     };
//     const formDataToSend = new FormData();
//     Object.keys(offerData).forEach(key => {
//       formDataToSend.append(key, offerData[key]);
//     });
//     if (formData.media) {
//       formDataToSend.append('media', formData.media);
//     }
//     try {
//       const response = offer 
//         ? await OffersAxiosService.updateOffer(offer.id, formDataToSend)
//         : await OffersAxiosService.createOffer(formDataToSend);
//       onSuccess(response.data);
//     } catch (error) {
//       console.error('Error saving offer:', error);
//     }
//   };
//   if (isLoading) return <div className="text-center my-5">Loading...</div>;
//   return (
//     <div className="container mt-4">
//       <div className="card shadow">
//         <div className="card-header bg-primary text-white">
//           <h3>{offer ? 'Edit Offer' : 'Create New Offer'}</h3>
//         </div>
//         <div className="card-body">
//           <form onSubmit={handleSubmit}>
//             <div className="row">
//               <div className="col-md-8">
//                 {/* Basic Info */}
//                 <div className="mb-3">
//                   <label className="form-label">Offer Title*</label>
//                   <input 
//                     name="title" 
//                     type="text" 
//                     className="form-control" 
//                     value={formData.title} 
//                     onChange={handleChange} 
//                     placeholder="Summer Sale 2023"
//                     required
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <label className="form-label">Description</label>
//                   <textarea 
//                     name="description" 
//                     className="form-control" 
//                     rows="3" 
//                     value={formData.description} 
//                     onChange={handleChange}
//                   />
//                 </div>
//                 {/* Products Selection */}
//                 <div className="mb-3">
//                   <label className="form-label">Select Products*</label>
//                   <input 
//                     type="text" 
//                     className="form-control mb-2" 
//                     placeholder="Search products..."
//                     onChange={(e) => handleSearch(e, 'products')}
//                   />
//                   <select 
//                     multiple 
//                     className="form-control" 
//                     value={formData.selectedProducts} 
//                     onChange={(e) => handleMultiSelectChange('selectedProducts', Array.from(e.target.selectedOptions))}
//                     required
//                   >
//                     {filteredProducts.map(product => (
//                       <option key={product.id} value={product.id}>
//                         {`${product.name} ($${product.price})`}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//                 {/* Categories Selection */}
//                 <div className="mb-3">
//                   <label className="form-label">Select Categories (Optional)</label>
//                   <input 
//                     type="text" 
//                     className="form-control mb-2" 
//                     placeholder="Search categories..."
//                     onChange={(e) => handleSearch(e, 'categories')}
//                   />
//                   <select 
//                     multiple 
//                     className="form-control" 
//                     value={formData.selectedCategories} 
//                     onChange={(e) => handleMultiSelectChange('selectedCategories', Array.from(e.target.selectedOptions))}
//                   >
//                     {filteredCategories.map(category => (
//                       <option key={category.id} value={category.id}>
//                         {category.name}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//               </div>
//               <div className="col-md-4">
//                 {/* Discount Settings */}
//                 <div className="card mb-3">
//                   <div className="card-header bg-light">
//                     <h5>Discount Settings</h5>
//                   </div>
//                   <div className="card-body">
//                     <div className="mb-3">
//                       <label className="form-label">Discount Type*</label>
//                       <select 
//                         name="discount_type" 
//                         className="form-select" 
//                         value={formData.discount_type} 
//                         onChange={handleChange}
//                       >
//                         <option value="percentage">Percentage</option>
//                         <option value="fixed_amount">Fixed Amount</option>
//                       </select>
//                     </div>
//                     <div className="mb-3">
//                       <label className="form-label">
//                         {formData.discount_type === 'percentage' ? 'Discount Percentage*' : 'Discount Amount*'}
//                       </label>
//                       <div className="input-group">
//                         <input 
//                           name="discount_value" 
//                           type="number" 
//                           className="form-control" 
//                           value={formData.discount_value} 
//                           onChange={handleChange} 
//                           min="0"
//                           step={formData.discount_type === 'percentage' ? '1' : '0.01'}
//                           required
//                         />
//                         <span className="input-group-text">
//                           {formData.discount_type === 'percentage' ? '%' : '$'}
//                         </span>
//                       </div>
//                     </div>
//                     <div className="mb-3">
//                       <label className="form-label">Promo Code (Optional)</label>
//                       <input 
//                         name="promo_code" 
//                         type="text" 
//                         className="form-control" 
//                         value={formData.promo_code} 
//                         onChange={handleChange} 
//                         placeholder="SUMMER2023"
//                       />
//                     </div>
//                   </div>
//                 </div>
//                 {/* Date Settings */}
//                 <div className="card mb-3">
//                   <div className="card-header bg-light">
//                     <h5>Schedule</h5>
//                   </div>
//                   <div className="card-body">
//                     <div className="mb-3">
//                       <label className="form-label">Start Date*</label>
//                       <input 
//                         type="datetime-local" 
//                         name="start_date" 
//                         className="form-control" 
//                         value={formData.start_date.toISOString().slice(0, 16)} 
//                         onChange={handleChange} 
//                         required
//                       />
//                     </div>
//                     <div className="mb-3">
//                       <label className="form-label">End Date*</label>
//                       <input 
//                         type="datetime-local" 
//                         name="end_date" 
//                         className="form-control" 
//                         value={formData.end_date.toISOString().slice(0, 16)} 
//                         onChange={handleChange} 
//                         required
//                       />
//                     </div>
//                     <div className="form-check form-switch mb-3">
//                       <input 
//                         type="checkbox" 
//                         name="is_featured" 
//                         className="form-check-input" 
//                         checked={formData.is_featured} 
//                         onChange={handleChange} 
//                       />
//                       <label className="form-check-label">
//                         Featured Offer
//                       </label>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/* Media Upload */}
//             <div className="mb-3">
//               <label className="form-label">Upload Media (Image/Video)</label>
//               <input 
//                 type="file" 
//                 className="form-control" 
//                 accept="image/*,video/*" 
//                 onChange={handleFileChange} 
//               />
//               {formData.media && (
//                 <div className="mt-2">
//                   <h6>Preview:</h6>
//                   {formData.media.type.startsWith('image/') ? (
//                     <img 
//                       src={URL.createObjectURL(formData.media)} 
//                       alt="Preview" 
//                       style={{ width: '100%', height: 'auto' }} 
//                     />
//                   ) : (
//                     <video 
//                       src={URL.createObjectURL(formData.media)} 
//                       controls 
//                       style={{ width: '100%', height: 'auto' }} 
//                     />
//                   )}
//                 </div>
//               )}
//             </div>
//             {/* Visual Settings */}
//             <div className="card mb-3">
//               <div className="card-header bg-light">
//                 <h5>Visual Presentation</h5>
//               </div>
//               <div className="card-body">
//                 <div className="row">
//                   <div className="col-md-6 mb-3">
//                     <label className="form-label">Banner Image URL</label>
//                     <input 
//                       name="banner_image" 
//                       type="text" 
//                       className="form-control" 
//                       value={formData.banner_image} 
//                       onChange={handleChange} 
//                       placeholder="https://example.com/banner.jpg"
//                     />
//                   </div>
//                   <div className="col-md-6 mb-3">
//                     <label className="form-label">Background Gradient</label>
//                     <input 
//                       name="background_gradient" 
//                       type="text" 
//                       className="form-control" 
//                       value={formData.background_gradient} 
//                       onChange={handleChange} 
//                       placeholder="linear-gradient(90deg, #ff9966, #ff5e62)"
//                     />
//                   </div>
//                 </div>
//                 <div className="row">
//                   <div className="col-md-6">
//                     <label className="form-label">Text Color</label>
//                     <div className="input-group">
//                       <span className="input-group-text">#</span>
//                       <input 
//                         name="text_color" 
//                         type="text" 
//                         className="form-control" 
//                         value={formData.text_color.replace('#', '')} 
//                         onChange={handleChange} 
//                         maxLength="6"
//                       />
//                       <span 
//                         className="input-group-text color-preview" 
//                         style={{ 
//                           backgroundColor: formData.text_color,
//                           width: '40px'
//                         }}
//                       ></span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="d-flex justify-content-end">
//               <button 
//                 type="submit" 
//                 className="btn btn-primary"
//               >
//                 {offer ? 'Update Offer' : 'Create Offer'}
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default OfferForm;
// 
// src/components/offers/OfferForm.tsx
import { useState, useEffect } from 'react';
import { OffersAxiosService } from '../../../services/net/OffersAxiosService';
import { ProductAxiosService } from '../../../services/net/ProductAxiosService';
const OfferForm = ({ offer, onSuccess }) => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [filteredCategories, setFilteredCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        discount_type: 'percentage',
        discount_value: 10,
        promo_code: '',
        start_date: new Date(),
        end_date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        is_featured: false,
        banner_image: '',
        background_gradient: '',
        text_color: '#ffffff',
        selectedProducts: [],
        selectedCategories: [],
        media: null,
    });
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
                if (offer) {
                    setFormData(prevData => ({
                        ...prevData,
                        title: offer.title,
                        description: offer.description,
                        discount_type: offer.discount_type,
                        discount_value: offer.discount_value,
                        promo_code: offer.promo_code,
                        start_date: new Date(offer.start_date),
                        end_date: new Date(offer.end_date),
                        is_featured: offer.is_featured,
                        banner_image: offer.banner_image,
                        background_gradient: offer.background_gradient,
                        text_color: offer.text_color,
                        selectedProducts: offer.products.map(p => p.id),
                        selectedCategories: offer.categories.map(c => c.id),
                    }));
                }
            }
            catch (error) {
                console.error('Error fetching data:', error);
            }
            finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, [offer]);
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };
    const handleMultiSelectChange = (name, selectedOptions) => {
        setFormData(prevData => ({
            ...prevData,
            [name]: selectedOptions.map(option => option.value),
        }));
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
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData(prevData => ({
                ...prevData,
                media: file,
            }));
        }
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const offerData = {
            ...formData,
            product_ids: formData.selectedProducts,
            category_ids: formData.selectedCategories,
        };
        const formDataToSend = new FormData();
        Object.keys(offerData).forEach(key => {
            formDataToSend.append(key, offerData[key]);
        });
        if (formData.media) {
            formDataToSend.append('media', formData.media);
        }
        try {
            const response = offer
                ? await OffersAxiosService.updateOffer(offer.id, formDataToSend)
                : await OffersAxiosService.createOffer(formDataToSend);
            onSuccess(response.data);
        }
        catch (error) {
            console.error('Error saving offer:', error);
        }
    };
    if (isLoading)
        return _jsx("div", { className: "text-center my-5", children: "Loading..." });
    return (_jsx("div", { className: "container mt-4", children: _jsxs("div", { className: "card shadow", children: [_jsx("div", { className: "card-header bg-primary text-white", children: _jsx("h3", { children: offer ? 'Edit Offer' : 'Create New Offer' }) }), _jsx("div", { className: "card-body", children: _jsxs("form", { onSubmit: handleSubmit, children: [_jsxs("div", { className: "row", children: [_jsxs("div", { className: "col-md-8", children: [_jsxs("div", { className: "mb-3", children: [_jsx("label", { className: "form-label", children: "Offer Title*" }), _jsx("input", { name: "title", type: "text", className: "form-control", value: formData.title, onChange: handleChange, placeholder: "Summer Sale 2023", required: true })] }), _jsxs("div", { className: "mb-3", children: [_jsx("label", { className: "form-label", children: "Description" }), _jsx("textarea", { name: "description", className: "form-control", rows: "3", value: formData.description, onChange: handleChange })] }), _jsxs("div", { className: "mb-3", children: [_jsx("label", { className: "form-label", children: "Select Products*" }), _jsx("input", { type: "text", className: "form-control mb-2", placeholder: "Search products...", onChange: (e) => handleSearch(e, 'products') }), _jsxs("div", { className: "position-relative", children: [_jsx("div", { className: "form-control", style: { cursor: 'pointer', minHeight: '38px' }, children: _jsx("div", { className: "d-flex flex-wrap gap-1", children: formData.selectedProducts.length === 0 ? (_jsx("span", { className: "text-muted", children: "Select products..." })) : (formData.selectedProducts.map(id => {
                                                                        const product = products.find(p => p.id === id);
                                                                        return _jsx("span", { className: "badge bg-primary me-1", children: product.name }, id);
                                                                    })) }) }), _jsx("div", { className: "card position-absolute w-100 mt-1 shadow", style: { zIndex: 1000 }, children: _jsx("div", { className: "card-body p-2", children: _jsx("div", { style: { maxHeight: '300px', overflowY: 'auto' }, children: _jsx("ul", { className: "list-unstyled", style: { paddingLeft: 0 }, children: filteredProducts.map(product => (_jsx("li", { className: "mb-1", children: _jsxs("div", { className: "form-check", children: [_jsx("input", { className: "form-check-input", id: `prod-${product.id}`, type: "checkbox", checked: formData.selectedProducts.includes(product.id), onChange: (e) => {
                                                                                                const selectedOptions = e.target.checked
                                                                                                    ? [...formData.selectedProducts, product.id]
                                                                                                    : formData.selectedProducts.filter(id => id !== product.id);
                                                                                                handleMultiSelectChange('selectedProducts', selectedOptions);
                                                                                            } }), _jsx("label", { className: "form-check-label", htmlFor: `prod-${product.id}`, style: { cursor: 'pointer' }, children: `${product.name} ($${product.price})` })] }) }, product.id))) }) }) }) })] })] }), _jsxs("div", { className: "mb-3", children: [_jsx("label", { className: "form-label", children: "Select Categories*" }), _jsx("input", { type: "text", className: "form-control mb-2", placeholder: "Search categories...", onChange: (e) => handleSearch(e, 'categories') }), _jsxs("div", { className: "position-relative", children: [_jsx("div", { className: "form-control", style: { cursor: 'pointer', minHeight: '38px' }, children: _jsx("div", { className: "d-flex flex-wrap gap-1", children: formData.selectedCategories.length === 0 ? (_jsx("span", { className: "text-muted", children: "Select categories..." })) : (formData.selectedCategories.map(id => {
                                                                        const category = categories.find(c => c.id === id);
                                                                        return _jsx("span", { className: "badge bg-primary me-1", children: category.name }, id);
                                                                    })) }) }), _jsx("div", { className: "card position-absolute w-100 mt-1 shadow", style: { zIndex: 1000 }, children: _jsx("div", { className: "card-body p-2", children: _jsx("div", { style: { maxHeight: '300px', overflowY: 'auto' }, children: _jsx("ul", { className: "list-unstyled", style: { paddingLeft: 0 }, children: filteredCategories.map(category => (_jsx("li", { className: "mb-1", children: _jsxs("div", { className: "form-check", children: [_jsx("input", { className: "form-check-input", id: `cat-${category.id}`, type: "checkbox", checked: formData.selectedCategories.includes(category.id), onChange: (e) => {
                                                                                                const selectedOptions = e.target.checked
                                                                                                    ? [...formData.selectedCategories, category.id]
                                                                                                    : formData.selectedCategories.filter(id => id !== category.id);
                                                                                                handleMultiSelectChange('selectedCategories', selectedOptions);
                                                                                            } }), _jsx("label", { className: "form-check-label", htmlFor: `cat-${category.id}`, style: { cursor: 'pointer' }, children: category.name })] }) }, category.id))) }) }) }) })] })] })] }), _jsxs("div", { className: "col-md-4", children: [_jsxs("div", { className: "card mb-3", children: [_jsx("div", { className: "card-header bg-light", children: _jsx("h5", { children: "Discount Settings" }) }), _jsxs("div", { className: "card-body", children: [_jsxs("div", { className: "mb-3", children: [_jsx("label", { className: "form-label", children: "Discount Type*" }), _jsxs("select", { name: "discount_type", className: "form-select", value: formData.discount_type, onChange: handleChange, children: [_jsx("option", { value: "percentage", children: "Percentage" }), _jsx("option", { value: "fixed_amount", children: "Fixed Amount" })] })] }), _jsxs("div", { className: "mb-3", children: [_jsx("label", { className: "form-label", children: formData.discount_type === 'percentage' ? 'Discount Percentage*' : 'Discount Amount*' }), _jsxs("div", { className: "input-group", children: [_jsx("input", { name: "discount_value", type: "number", className: "form-control", value: formData.discount_value, onChange: handleChange, min: "0", step: formData.discount_type === 'percentage' ? '1' : '0.01', required: true }), _jsx("span", { className: "input-group-text", children: formData.discount_type === 'percentage' ? '%' : '$' })] })] }), _jsxs("div", { className: "mb-3", children: [_jsx("label", { className: "form-label", children: "Promo Code (Optional)" }), _jsx("input", { name: "promo_code", type: "text", className: "form-control", value: formData.promo_code, onChange: handleChange, placeholder: "SUMMER2023" })] })] })] }), _jsxs("div", { className: "card mb-3", children: [_jsx("div", { className: "card-header bg-light", children: _jsx("h5", { children: "Schedule" }) }), _jsxs("div", { className: "card-body", children: [_jsxs("div", { className: "mb-3", children: [_jsx("label", { className: "form-label", children: "Start Date*" }), _jsx("input", { type: "datetime-local", name: "start_date", className: "form-control", value: formData.start_date.toISOString().slice(0, 16), onChange: handleChange, required: true })] }), _jsxs("div", { className: "mb-3", children: [_jsx("label", { className: "form-label", children: "End Date*" }), _jsx("input", { type: "datetime-local", name: "end_date", className: "form-control", value: formData.end_date.toISOString().slice(0, 16), onChange: handleChange, required: true })] }), _jsxs("div", { className: "form-check form-switch mb-3", children: [_jsx("input", { type: "checkbox", name: "is_featured", className: "form-check-input", checked: formData.is_featured, onChange: handleChange }), _jsx("label", { className: "form-check-label", children: "Featured Offer" })] })] })] })] })] }), _jsxs("div", { className: "mb-3", children: [_jsx("label", { className: "form-label", children: "Upload Media (Image/Video)" }), _jsx("input", { type: "file", className: "form-control", accept: "image/*,video/*", onChange: handleFileChange }), formData.media && (_jsxs("div", { className: "mt-2", children: [_jsx("h6", { children: "Preview:" }), formData.media.type.startsWith('image/') ? (_jsx("img", { src: URL.createObjectURL(formData.media), alt: "Preview", style: { width: '100%', height: 'auto' } })) : (_jsx("video", { src: URL.createObjectURL(formData.media), controls: true, style: { width: '100%', height: 'auto' } }))] }))] }), _jsxs("div", { className: "card mb-3", children: [_jsx("div", { className: "card-header bg-light", children: _jsx("h5", { children: "Visual Presentation" }) }), _jsxs("div", { className: "card-body", children: [_jsxs("div", { className: "row", children: [_jsxs("div", { className: "col-md-6 mb-3", children: [_jsx("label", { className: "form-label", children: "Banner Image URL" }), _jsx("input", { name: "banner_image", type: "text", className: "form-control", value: formData.banner_image, onChange: handleChange, placeholder: "https://example.com/banner.jpg" })] }), _jsxs("div", { className: "col-md-6 mb-3", children: [_jsx("label", { className: "form-label", children: "Background Gradient" }), _jsx("input", { name: "background_gradient", type: "text", className: "form-control", value: formData.background_gradient, onChange: handleChange, placeholder: "linear-gradient(90deg, #ff9966, #ff5e62)" })] })] }), _jsx("div", { className: "row", children: _jsxs("div", { className: "col-md-6", children: [_jsx("label", { className: "form-label", children: "Text Color" }), _jsxs("div", { className: "input-group", children: [_jsx("span", { className: "input-group-text", children: "#" }), _jsx("input", { name: "text_color", type: "text", className: "form-control", value: formData.text_color.replace('#', ''), onChange: handleChange, maxLength: "6" }), _jsx("span", { className: "input-group-text color-preview", style: {
                                                                        backgroundColor: formData.text_color,
                                                                        width: '40px'
                                                                    } })] })] }) })] })] }), _jsx("div", { className: "d-flex justify-content-end", children: _jsx("button", { type: "submit", className: "btn btn-primary", children: offer ? 'Update Offer' : 'Create Offer' }) })] }) })] }) }));
};
export default OfferForm;
