// import React from 'react'

// const DeliveryOptionsOffCanvas = () => {
//   return (
//     <>
//     <div
//     className="offcanvas offcanvas-end pb-sm-2 px-sm-2"
//     id="deliveryOptions"
//     tabIndex={-1}
//     aria-labelledby="deliveryOptionsLabel"
//     style={{ width: 500 }}
//   >
//     {/* Header with nav tabs */}
//     <div className="offcanvas-header flex-column align-items-start py-3 pt-lg-4">
//       <div className="d-flex align-items-center justify-content-between w-100 pb-xl-1 mb-4">
//         <h4 className="offcanvas-title" id="deliveryOptionsLabel">
//           Delivery options
//         </h4>
//         <button
//           type="button"
//           className="btn-close"
//           data-bs-dismiss="offcanvas"
//           aria-label="Close"
//         />
//       </div>
//       <ul className="nav nav-pills nav-justified w-100" role="tablist">
//         <li className="nav-item" role="presentation">
//           <button
//             type="button"
//             className="nav-link active"
//             id="delivery-tab"
//             data-bs-toggle="tab"
//             data-bs-target="#delivery-tab-pane"
//             role="tab"
//             aria-controls="delivery-tab-pane"
//             aria-selected="true"
//           >
//             <i className="ci-shopping-bag fs-base ms-n1 me-2" />
//             Delivery
//           </button>
//         </li>
//         <li className="nav-item" role="presentation">
//           <button
//             type="button"
//             className="nav-link"
//             id="pickup-tab"
//             data-bs-toggle="tab"
//             data-bs-target="#pickup-tab-pane"
//             role="tab"
//             aria-controls="pickup-tab-pane"
//             aria-selected="false"
//           >
//             <i className="ci-box fs-base ms-n1 me-2" />
//             Pickup
//           </button>
//         </li>
//       </ul>
//     </div>
//     <div className="offcanvas-body tab-content py-2 py-sm-3">
//       {/* Delivery tab */}
//       <div
//         className="tab-pane fade show active"
//         id="delivery-tab-pane"
//         role="tabpanel"
//         aria-labelledby="delivery-tab"
//       >
//         {/* Address options collapse */}
//         <div
//           className="collapse delivery-address show"
//           id="deliveryAddressOptions"
//         >
//           <div className="mt-n3">
//             <div className="form-check border-bottom py-4 m-0">
//               <input
//                 type="radio"
//                 className="form-check-input"
//                 id="address-1"
//                 name="delivery-address"
//                 defaultChecked=""
//               />
//               <label
//                 htmlFor="address-1"
//                 className="form-check-label text-dark-emphasis fw-semibold"
//               >
//                 567 Cherry Lane Apt B12 Sacramento, 95829
//               </label>
//             </div>
//             <div className="form-check border-bottom py-4 m-0">
//               <input
//                 type="radio"
//                 className="form-check-input"
//                 id="address-2"
//                 name="delivery-address"
//               />
//               <div className="d-flex w-100">
//                 <label
//                   htmlFor="address-2"
//                   className="form-check-label text-dark-emphasis me-3"
//                 >
//                   1901 Thornridge Cir. Shiloh, Hawaii, 81063
//                 </label>
//                 <button
//                   type="button"
//                   className="btn-close fs-sm ms-auto"
//                   data-bs-toggle="tooltip"
//                   data-bs-custom-class="tooltip-sm"
//                   data-bs-title="Remove"
//                   aria-label="Remove"
//                 />
//               </div>
//             </div>
//             <div className="form-check border-bottom py-4 m-0">
//               <input
//                 type="radio"
//                 className="form-check-input"
//                 id="address-3"
//                 name="delivery-address"
//               />
//               <div className="d-flex w-100">
//                 <label
//                   htmlFor="address-3"
//                   className="form-check-label text-dark-emphasis me-3"
//                 >
//                   3517 W. Gray St. Utica, Pennsylvania, 57867
//                 </label>
//                 <button
//                   type="button"
//                   className="btn-close fs-sm ms-auto"
//                   data-bs-toggle="tooltip"
//                   data-bs-custom-class="tooltip-sm"
//                   data-bs-title="Remove"
//                   aria-label="Remove"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* Add new address collapse */}
//         <div className="collapse delivery-address" id="deliveryAddressAdd">
//           <div className="nav mb-4">
//             <a
//               className="nav-link animate-underline p-0"
//               href=".delivery-address.html"
//               data-bs-toggle="collapse"
//               aria-expanded="true"
//               aria-controls="deliveryAddressOptions deliveryAddressAdd"
//             >
//               <i className="ci-chevron-left fs-lg ms-n1 me-1" />
//               <span className="animate-target">Back to my addresses</span>
//             </a>
//           </div>
//           <div className="d-flex align-items-center justify-content-between mb-3 mb-lg-4">
//             <h5 className="h6 mb-0 me-3">Add an address to start ordering</h5>
//             <a
//               className="btn btn-sm btn-outline-primary rounded-pill"
//               href="#!"
//             >
//               <i className="ci-map-pin fs-base ms-n1 me-1" />
//               Find on map
//             </a>
//           </div>
//           <div className="mb-3 mb-lg-4">
//             <label className="form-label">State *</label>
//             <select
//               className="form-select form-select-lg rounded-pill"
//               data-select='{
//           "classNames": {
//             "containerInner": ["form-select", "form-select-lg", "rounded-pill"]
//           }
//         }'
//               aria-label="Large pill select"
//             >
//               <option value="">Select state</option>
//               <option value="Arizona">Arizona</option>
//               <option value="California">California</option>
//               <option value="Montana">Montana</option>
//               <option value="Nevada">Nevada</option>
//               <option value="New Mexico">New Mexico</option>
//               <option value="Texas">Texas</option>
//             </select>
//           </div>
//           <div className="mb-3 mb-lg-4">
//             <label htmlFor="my-postcode" className="form-label">
//               Postcode *
//             </label>
//             <input
//               type="text"
//               className="form-control "
//               id="my-postcode"
//             />
//           </div>
//           <div className="mb-3 mb-lg-4">
//             <label className="form-label">City *</label>
//             <select
//               className="form-select form-select-lg rounded-pill"
//               data-select='{
//           "classNames": {
//             "containerInner": ["form-select", "form-select-lg", "rounded-pill"]
//           }
//         }'
//               aria-label="Large pill select"
//             >
//               <option value="">Select city</option>
//               <option value="Austin">Austin</option>
//               <option value="Helena">Helena</option>
//               <option value="Sacramento">Sacramento</option>
//               <option value="Santa Fe">Santa Fe</option>
//               <option value="Las Vegas">Las Vegas</option>
//               <option value="Phoenix">Phoenix</option>
//             </select>
//           </div>
//           <label htmlFor="my-address" className="form-label">
//             Street address *
//           </label>
//           <input
//             type="text"
//             className="form-control "
//             id="my-address"
//           />
//         </div>
//         {/* Add address collapse toggle */}
//         <div className="nav">
//           <a
//             className="nav-link hiding-collapse-toggle animate-underline collapsed px-0 mt-4"
//             href=".delivery-address.html"
//             data-bs-toggle="collapse"
//             aria-expanded="false"
//             aria-controls="deliveryAddressOptions deliveryAddressAdd"
//           >
//             <span className="animate-target">Add delivery address</span>
//             <i className="ci-plus fs-base ms-1" />
//           </a>
//         </div>
//       </div>
//       {/* Pickup tab */}
//       <div
//         className="tab-pane fade"
//         id="pickup-tab-pane"
//         role="tabpanel"
//         aria-labelledby="pickup-tab"
//       >
//         {/* Pickup store options collapse */}
//         <div className="collapse pickup-options show" id="pickupStoreOptions">
//           <div className="mt-n3">
//             <div className="form-check border-bottom py-4 m-0">
//               <input
//                 type="radio"
//                 className="form-check-input"
//                 id="store-1"
//                 name="pickup-store"
//                 defaultChecked=""
//               />
//               <div>
//                 <div className="d-flex w-100 pb-2 mb-1">
//                   <label
//                     htmlFor="store-1"
//                     className="form-check-label text-dark-emphasis fw-semibold me-3"
//                   >
//                     Sacramento Supercenter
//                   </label>
//                   <button
//                     type="button"
//                     className="btn-close fs-sm ms-auto"
//                     data-bs-toggle="tooltip"
//                     data-bs-custom-class="tooltip-sm"
//                     data-bs-title="Remove"
//                     aria-label="Remove"
//                   />
//                 </div>
//                 <div className="fs-xs mb-2">
//                   8270 Delta Shores Cir S, Sacramento, CA 95832
//                 </div>
//                 <div className="fs-xs">
//                   Open:{" "}
//                   <span className="text-dark-emphasis fw-medium">
//                     07:00 - 22:00
//                   </span>
//                 </div>
//               </div>
//             </div>
//             <div className="form-check border-bottom py-4 m-0">
//               <input
//                 type="radio"
//                 className="form-check-input"
//                 id="store-2"
//                 name="pickup-store"
//               />
//               <div>
//                 <div className="d-flex w-100 pb-2 mb-1">
//                   <label
//                     htmlFor="store-2"
//                     className="form-check-label text-dark-emphasis fw-semibold me-3"
//                   >
//                     West Sacramento Supercenter
//                   </label>
//                   <button
//                     type="button"
//                     className="btn-close fs-sm ms-auto"
//                     data-bs-toggle="tooltip"
//                     data-bs-custom-class="tooltip-sm"
//                     data-bs-title="Remove"
//                     aria-label="Remove"
//                   />
//                 </div>
//                 <div className="fs-xs mb-2">
//                   755 Riverpoint Ct, West Sacramento, CA 95605
//                 </div>
//                 <div className="fs-xs">
//                   Open:{" "}
//                   <span className="text-dark-emphasis fw-medium">
//                     07:00 - 21:00
//                   </span>
//                 </div>
//               </div>
//             </div>
//             <div className="form-check border-bottom py-4 m-0">
//               <input
//                 type="radio"
//                 className="form-check-input"
//                 id="store-3"
//                 name="pickup-store"
//               />
//               <div>
//                 <div className="d-flex w-100 pb-2 mb-1">
//                   <label
//                     htmlFor="store-3"
//                     className="form-check-label text-dark-emphasis fw-semibold me-3"
//                   >
//                     Rancho Cordova Supercenter
//                   </label>
//                   <button
//                     type="button"
//                     className="btn-close fs-sm ms-auto"
//                     data-bs-toggle="tooltip"
//                     data-bs-custom-class="tooltip-sm"
//                     data-bs-title="Remove"
//                     aria-label="Remove"
//                   />
//                 </div>
//                 <div className="fs-xs mb-2">
//                   10655 Folsom Blvd, Rancho Cordova, CA 95670
//                 </div>
//                 <div className="fs-xs">
//                   Open:{" "}
//                   <span className="text-dark-emphasis fw-medium">
//                     08:00 - 23:00
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* Add new pickup store collapse */}
//         <div className="collapse pickup-options" id="pickupStoreAdd">
//           <div className="nav mb-4">
//             <a
//               className="nav-link animate-underline p-0"
//               href=".pickup-options.html"
//               data-bs-toggle="collapse"
//               aria-expanded="true"
//               aria-controls="pickupStoreOptions pickupStoreAdd"
//             >
//               <i className="ci-chevron-left fs-lg ms-n1 me-1" />
//               <span className="animate-target">Back to my stores</span>
//             </a>
//           </div>
//           <div className="d-flex align-items-center justify-content-between mb-3 mb-lg-4">
//             <h5 className="h6 mb-0 me-3">Select a suitable store</h5>
//             <a
//               className="btn btn-sm btn-outline-primary rounded-pill"
//               href="#!"
//             >
//               <i className="ci-map-pin fs-base ms-n1 me-1" />
//               Find on map
//             </a>
//           </div>
//           <div className="mb-3 mb-lg-4">
//             <label className="form-label">State *</label>
//             <select
//               className="form-select form-select-lg rounded-pill"
//               data-select='{
//           "classNames": {
//             "containerInner": ["form-select", "form-select-lg", "rounded-pill"]
//           }
//         }'
//               aria-label="Large pill select"
//             >
//               <option value="">Select state</option>
//               <option value="Arizona">Arizona</option>
//               <option value="California" selected="">
//                 California
//               </option>
//               <option value="Montana">Montana</option>
//               <option value="Nevada">Nevada</option>
//               <option value="New Mexico">New Mexico</option>
//               <option value="Texas">Texas</option>
//             </select>
//           </div>
//           <div className="mb-4">
//             <label className="form-label">City *</label>
//             <select
//               className="form-select form-select-lg rounded-pill"
//               data-select='{
//           "classNames": {
//             "containerInner": ["form-select", "form-select-lg", "rounded-pill"]
//           }
//         }'
//               aria-label="Large pill select"
//             >
//               <option value="">Select city</option>
//               <option value="Austin">Austin</option>
//               <option value="Helena">Helena</option>
//               <option value="Sacramento" selected="">
//                 Sacramento
//               </option>
//               <option value="Santa Fe">Santa Fe</option>
//               <option value="Las Vegas">Las Vegas</option>
//               <option value="Phoenix">Phoenix</option>
//             </select>
//           </div>
//           <div className="fs-xs fw-medium text-uppercase text-body-secondary">
//             Found stores:
//           </div>
//           <div className="form-check border-bottom py-4 m-0">
//             <input
//               type="radio"
//               className="form-check-input"
//               id="store-4"
//               name="found-store"
//             />
//             <div>
//               <label
//                 htmlFor="store-4"
//                 className="form-check-label text-dark-emphasis fw-semibold pb-2 mb-1"
//               >
//                 Sacramento Supercenter
//               </label>
//               <div className="fs-xs mb-2">
//                 8270 Delta Shores Cir S, Sacramento, CA 95832
//               </div>
//               <div className="fs-xs">
//                 Open:{" "}
//                 <span className="text-dark-emphasis fw-medium">
//                   07:00 - 22:00
//                 </span>
//               </div>
//             </div>
//           </div>
//           <div className="form-check border-bottom py-4 m-0">
//             <input
//               type="radio"
//               className="form-check-input"
//               id="store-5"
//               name="found-store"
//             />
//             <div>
//               <label
//                 htmlFor="store-5"
//                 className="form-check-label text-dark-emphasis fw-semibold pb-2 mb-1"
//               >
//                 West Sacramento Supercenter
//               </label>
//               <div className="fs-xs mb-2">
//                 755 Riverpoint Ct, West Sacramento, CA 95605
//               </div>
//               <div className="fs-xs">
//                 Open:{" "}
//                 <span className="text-dark-emphasis fw-medium">
//                   07:00 - 21:00
//                 </span>
//               </div>
//             </div>
//           </div>
//           <div className="form-check border-bottom py-4 m-0">
//             <input
//               type="radio"
//               className="form-check-input"
//               id="store-6"
//               name="found-store"
//             />
//             <div>
//               <label
//                 htmlFor="store-6"
//                 className="form-check-label text-dark-emphasis fw-semibold pb-2 mb-1"
//               >
//                 Rancho Cordova Supercenter
//               </label>
//               <div className="fs-xs mb-2">
//                 10655 Folsom Blvd, Rancho Cordova, CA 95670
//               </div>
//               <div className="fs-xs">
//                 Open:{" "}
//                 <span className="text-dark-emphasis fw-medium">
//                   08:00 - 23:00
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* Add address collapse toggle */}
//         <div className="nav">
//           <a
//             className="nav-link hiding-collapse-toggle animate-underline collapsed px-0 mt-4"
//             href=".pickup-options.html"
//             data-bs-toggle="collapse"
//             aria-expanded="false"
//             aria-controls="pickupStoreOptions pickupStoreAdd"
//           >
//             <span className="animate-target">Add store address</span>
//             <i className="ci-plus fs-base ms-1" />
//           </a>
//         </div>
//       </div>
//     </div>
//     {/* Footer */}
//     <div className="offcanvas-header">
//       <button
//         type="button"
//         className="btn btn-lg btn-primary w-100 rounded-pill"
//       >
//         Confirm address
//       </button>
//     </div>
//   </div>
//     </>
//   )
// }

// export default DeliveryOptionsOffCanvas

// // V3

// // components/DeliveryOptionsOffCanvas.tsx
// // import { Address } from 'cluster';
// import React, { useState, useEffect } from 'react';
// // import { useUser } from '../../../context/UserContext';
// // import { AxiosAddressesService } from '../../../services/net/AxiosAddressesService';
// // import { AxiosService } from '../../../services/net/base/AxiosService';
// // import DeliveryDateOffCanvas from './DeliveryDateOffCanvas';
// import { AxiosAddressesService } from '@/services/net/AxiosAddressesService';
// import type { Address } from '@/services/addresses/AxiosAddressesService';
// import { AxiosService } from '@/services/net/base/AxiosService';
// import { DeliveryDateOffCanvas } from './DeliveryDateOffCanvas';
// // import { DeliveryDateOffCanvas, DeliveryDateOffCanvasProps } from './DeliveryDateOffCanvas';
// import { useUser } from '@/context/UserContext';

// interface State {
//   id: number;
//   name: string;
// }

// interface City {
//   id: number;
//   name: string;
// }

// const DeliveryOptionsOffCanvas: React.FC = () => {
//   // const { user } = useUser();
//   const { user, isLoading: userLoading } = useUser();
//   // const [addresses, setAddresses] = useState<Address[]>([]);

//   const [addresses, setAddresses] = useState<Address[]>([]);
//   const [selectedAddressId, setSelectedAddressId] = useState<number | null>(null);
//   const [selectedStoreId, setSelectedStoreId] = useState<number | null>(null);
//   const [deliveryView, setDeliveryView] = useState<'list' | 'add'>('list');
//   const [pickupView, setPickupView] = useState<'list' | 'add'>('list');
//   const [states, setStates] = useState<State[]>([]);
//   const [cities, setCities] = useState<City[]>([]);
//   const [formData, setFormData] = useState({
//     stateId: '',
//     postcode: '',
//     cityId: '',
//     streetAddress: ''
//   });
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   // Fetch user addresses
//   useEffect(() => {
//     const fetchAddresses = async () => {
//       try {
//         setLoading(true);
//         const response = await AxiosAddressesService.fetchAll();
//         // console.log(`addresses response: ${response}`);
//         // alert(response)
//         setAddresses(response.data.addresses);
//         setSelectedAddressId(response.data.addresses[0]?.id || null);
//       } catch (err) {
//         setError('Failed to load addresses');
//       } finally {
//         setLoading(false);
//       }
//     };
    
//     // Only fetch if user is authenticated
//     if (!userLoading && user) {
//       fetchAddresses();
//     }
//   }, [user, userLoading]);

//   // console.log(addresses);
//   // Fetch states for address form
//   useEffect(() => {
//     const fetchStates = async () => {
//       try {
//         const response = await AxiosService.json.get('/states');
//         // alert(response);
//         console.log(`state response: ${response}`)
//         setStates(response.data.states);
//       } catch (err) {
//         console.error('State fetch error:', err);
//       }
//     };
    
//     fetchStates();
//   }, []);

//   // Fetch cities when state is selected
//   useEffect(() => {
//     if (formData.stateId) {
//       const fetchCities = async () => {
//         try {
//           const response = await AxiosService.json.get(`/cities/${formData.stateId}/states`);
//           setCities(response.data.data);
//         } catch (err) {
//           console.error('City fetch error:', err);
//         }
//       };
      
//       fetchCities();
//     }
//   }, [formData.stateId]);

//   const handleAddAddress = async () => {
//     try {
//       const newAddress = {
//         street_address: formData.streetAddress,
//         zip_code: formData.postcode,
//         city_id: parseInt(formData.cityId),
//         phone_number: user?.phone || '',
//         first_name: user?.name.split(' ')[0] || '',
//         last_name: user?.name.split(' ')[1] || '',
//       };
      
//       const response = await AxiosAddressesService.create(newAddress);
//       setAddresses([...addresses, response.data]);
//       setSelectedAddressId(response.data.id);
//       setDeliveryView('list');
//       setFormData({ stateId: '', postcode: '', cityId: '', streetAddress: '' });
//     } catch (err) {
//       setError('Failed to add address');
//       console.error('Address creation error:', err);
//     }
//   };

//   const handleRemoveAddress = async (id: number) => {
//     try {
//       await AxiosAddressesService.delete(id.toString());
//       const updatedAddresses = addresses.filter(addr => addr.id !== id);
//       setAddresses(updatedAddresses);
      
//       if (selectedAddressId === id) {
//         setSelectedAddressId(updatedAddresses[0]?.id || null);
//       }
//     } catch (err) {
//       setError('Failed to remove address');
//       console.error('Address deletion error:', err);
//     }
//   };

//   const handleConfirmAddress = () => {
//     // Logic to confirm address and open date/time selector
//     const offcanvas = document.getElementById('deliveryDateTime');
//     const bsOffcanvas = new window.bootstrap.Offcanvas(offcanvas!);
//     bsOffcanvas.show();
//   };

//   const formatAddress = (address: Address) => {
//     return `${address.street_address}, ${address.city.name}, ${address.zip_code}`;
//   };

//   // Sample store data (replace with actual API integration)
//   const stores = [
//     {
//       id: 1,
//       name: "Eastline Shopping Complex, Ajah",
//       address: "8270 Delta Shores Cir S, Sacramento, CA 95832",
//       hours: "07:00 - 22:00"
//     },
//     {
//       id: 2,
//       name: "Western Union London",
//       address: "755 Riverpoint Ct, West Sacramento, CA 95605",
//       hours: "07:00 - 21:00"
//     },
//     {
//       id: 3,
//       name: "Army Junction, Calabar, CRS",
//       address: "10655 Folsom Blvd, Rancho Cordova, CA 95670",
//       hours: "08:00 - 23:00"
//     }
//   ];

//   const handleDateSelect: DeliveryDateOffCanvasProps['onSelect'] = (date, timeSlot) => {
//     console.log(`Selected delivery: ${date} at ${timeSlot}`);
//     // Close both offcanvases
//     document.querySelectorAll('.offcanvas').forEach(el => {
//       const offcanvas = window.bootstrap.Offcanvas.getInstance(el);
//       offcanvas?.hide();
//     });
//   };

//   return (
//     <>
//       <div
//         className="offcanvas offcanvas-end pb-sm-2 px-sm-2"
//         id="deliveryOptions"
//         tabIndex={-1}
//         aria-labelledby="deliveryOptionsLabel"
//         style={{ width: 500 }}
//       >
//         {/* Header with nav tabs */}
//         <div className="offcanvas-header flex-column align-items-start py-3 pt-lg-4">
//           <div className="d-flex align-items-center justify-content-between w-100 pb-xl-1 mb-4">
//             <h4 className="offcanvas-title" id="deliveryOptionsLabel">
//               Delivery options
//             </h4>
//             <button
//               type="button"
//               className="btn-close"
//               data-bs-dismiss="offcanvas"
//               aria-label="Close"
//             />
//           </div>
//           <ul className="nav nav-pills nav-justified w-100" role="tablist">
//             <li className="nav-item" role="presentation">
//               <button
//                 type="button"
//                 className="nav-link active"
//                 id="delivery-tab"
//                 data-bs-toggle="tab"
//                 data-bs-target="#delivery-tab-pane"
//                 role="tab"
//                 aria-controls="delivery-tab-pane"
//                 aria-selected="true"
//               >
//                 <i className="ci-shopping-bag fs-base ms-n1 me-2" />
//                 Delivery
//               </button>
//             </li>
//             <li className="nav-item" role="presentation">
//               <button
//                 type="button"
//                 className="nav-link"
//                 id="pickup-tab"
//                 data-bs-toggle="tab"
//                 data-bs-target="#pickup-tab-pane"
//                 role="tab"
//                 aria-controls="pickup-tab-pane"
//                 aria-selected="false"
//               >
//                 <i className="ci-box fs-base ms-n1 me-2" />
//                 Pickup
//               </button>
//             </li>
//           </ul>
//         </div>
        
//         <div className="offcanvas-body tab-content py-2 py-sm-3">
//           {/* Delivery tab */}
//           <div
//             className="tab-pane fade show active"
//             id="delivery-tab-pane"
//             role="tabpanel"
//             aria-labelledby="delivery-tab"
//           >
//             {loading ? (
//               <div className="text-center py-4">
//                 <div className="spinner-border text-primary" role="status">
//                   <span className="visually-hidden">Loading...</span>
//                 </div>
//               </div>
//             ) : error ? (
//               <div className="alert alert-danger">{error}</div>
//             ) : deliveryView === 'list' ? (
//               <>
//                 <div className="collapse delivery-address show" id="deliveryAddressOptions">
//                   <div className="mt-n3">
//                     {addresses.map((address, index) => (
//                       <div key={address.id} className="form-check border-bottom py-4 m-0">
//                         <input
//                           type="radio"
//                           className="form-check-input"
//                           id={`address-${address.id}`}
//                           name="delivery-address"
//                           checked={selectedAddressId === address.id}
//                           onChange={() => setSelectedAddressId(address.id)}
//                         />
//                         <div className="d-flex w-100">
//                           <label
//                             htmlFor={`address-${address.id}`}
//                             className="form-check-label text-dark-emphasis me-3"
//                           >
//                             {formatAddress(address)}
//                           </label>
//                           <button
//                             type="button"
//                             className="btn-close fs-sm ms-auto"
//                             data-bs-toggle="tooltip"
//                             data-bs-custom-class="tooltip-sm"
//                             data-bs-title="Remove"
//                             aria-label="Remove"
//                             onClick={() => handleRemoveAddress(address.id)}
//                           />
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//                 <div className="nav">
//                   <button
//                     className="nav-link animate-underline px-0 mt-4 border-0 bg-transparent"
//                     onClick={() => setDeliveryView('add')}
//                   >
//                     <span className="animate-target">Add delivery address</span>
//                     <i className="ci-plus fs-base ms-1" />
//                   </button>
//                 </div>
//               </>
//             ) : (
//               <div className="collapse delivery-address show" id="deliveryAddressAdd">
//                 <div className="nav mb-4">
//                   <button
//                     className="nav-link animate-underline p-0 border-0 bg-transparent"
//                     onClick={() => setDeliveryView('list')}
//                   >
//                     <i className="ci-chevron-left fs-lg ms-n1 me-1" />
//                     <span className="animate-target">Back to my addresses</span>
//                   </button>
//                 </div>
//                 <div className="d-flex align-items-center justify-content-between mb-3 mb-lg-4">
//                   <h5 className="h6 mb-0 me-3">Add an address to start ordering</h5>
//                   <button
//                     className="btn btn-sm btn-outline-primary rounded-pill"
//                   >
//                     <i className="ci-map-pin fs-base ms-n1 me-1" />
//                     Find on map
//                   </button>
//                 </div>
//                 <div className="mb-3 mb-lg-4">
//                   <label className="form-label">State *</label>
//                   <select
//                     className="form-select form-select-lg rounded-pill"
//                     value={formData.stateId}
//                     onChange={(e) => setFormData({...formData, stateId: e.target.value})}
//                   >
//                     <option value="">Select state</option>
//                     {states.map(state => (
//                       <option key={state.id} value={state.id}>{state.name}</option>
//                     ))}
//                   </select>
//                 </div>
//                 <div className="mb-3 mb-lg-4">
//                   <label htmlFor="my-postcode" className="form-label">
//                     Postcode *
//                   </label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="my-postcode"
//                     value={formData.postcode}
//                     onChange={(e) => setFormData({...formData, postcode: e.target.value})}
//                   />
//                 </div>
//                 <div className="mb-3 mb-lg-4">
//                   <label className="form-label">City *</label>
//                   <select
//                     className="form-select form-select-lg rounded-pill"
//                     value={formData.cityId}
//                     onChange={(e) => setFormData({...formData, cityId: e.target.value})}
//                     disabled={!formData.stateId}
//                   >
//                     <option value="">Select city</option>
//                     {cities.map(city => (
//                       <option key={city.id} value={city.id}>{city.name}</option>
//                     ))}
//                   </select>
//                 </div>
//                 <label htmlFor="my-address" className="form-label">
//                   Street address *
//                 </label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="my-address"
//                   value={formData.streetAddress}
//                   onChange={(e) => setFormData({...formData, streetAddress: e.target.value})}
//                 />
//               </div>
//             )}
//           </div>
          
//           {/* Pickup tab */}
//           <div
//             className="tab-pane fade"
//             id="pickup-tab-pane"
//             role="tabpanel"
//             aria-labelledby="pickup-tab"
//           >
//             {pickupView === 'list' ? (
//               <>
//                 <div className="collapse pickup-options show" id="pickupStoreOptions">
//                   <div className="mt-n3">
//                     {stores.map(store => (
//                       <div key={store.id} className="form-check border-bottom py-4 m-0">
//                         <input
//                           type="radio"
//                           className="form-check-input"
//                           id={`store-${store.id}`}
//                           name="pickup-store"
//                           checked={selectedStoreId === store.id}
//                           onChange={() => setSelectedStoreId(store.id)}
//                         />
//                         <div>
//                           <div className="d-flex w-100 pb-2 mb-1">
//                             <label
//                               htmlFor={`store-${store.id}`}
//                               className="form-check-label text-dark-emphasis fw-semibold me-3"
//                             >
//                               {store.name}
//                             </label>
//                           </div>
//                           <div className="fs-xs mb-2">
//                             {store.address}
//                           </div>
//                           <div className="fs-xs">
//                             Open:{" "}
//                             <span className="text-dark-emphasis fw-medium">
//                               {store.hours}
//                             </span>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//                 <div className="nav">
//                   <button
//                     className="nav-link animate-underline px-0 mt-4 border-0 bg-transparent"
//                     onClick={() => setPickupView('add')}
//                   >
//                     <span className="animate-target">Add store address</span>
//                     <i className="ci-plus fs-base ms-1" />
//                   </button>
//                 </div>
//               </>
//             ) : (
//               <div className="collapse pickup-options show" id="pickupStoreAdd">
//                 <div className="nav mb-4">
//                   <button
//                     className="nav-link animate-underline p-0 border-0 bg-transparent"
//                     onClick={() => setPickupView('list')}
//                   >
//                     <i className="ci-chevron-left fs-lg ms-n1 me-1" />
//                     <span className="animate-target">Back to my stores</span>
//                   </button>
//                 </div>
//                 <div className="d-flex align-items-center justify-content-between mb-3 mb-lg-4">
//                   <h5 className="h6 mb-0 me-3">Select a suitable store</h5>
//                   <button
//                     className="btn btn-sm btn-outline-primary rounded-pill"
//                   >
//                     <i className="ci-map-pin fs-base ms-n1 me-1" />
//                     Find on map
//                   </button>
//                 </div>
//                 <div className="mb-3 mb-lg-4">
//                   <label className="form-label">State *</label>
//                   <select
//                     className="form-select form-select-lg rounded-pill"
//                   >
//                     <option value="">Select state</option>
//                     <option value="California" selected>California</option>
//                   </select>
//                 </div>
//                 <div className="mb-4">
//                   <label className="form-label">City *</label>
//                   <select
//                     className="form-select form-select-lg rounded-pill"
//                   >
//                     <option value="">Select city</option>
//                     <option value="Sacramento" selected>Sacramento</option>
//                   </select>
//                 </div>
//                 <div className="fs-xs fw-medium text-uppercase text-body-secondary">
//                   Found stores:
//                 </div>
//                 {stores.map(store => (
//                   <div key={store.id} className="form-check border-bottom py-4 m-0">
//                     <input
//                       type="radio"
//                       className="form-check-input"
//                       id={`store-${store.id}-add`}
//                       name="found-store"
//                     />
//                     <div>
//                       <label
//                         htmlFor={`store-${store.id}-add`}
//                         className="form-check-label text-dark-emphasis fw-semibold pb-2 mb-1"
//                       >
//                         {store.name}
//                       </label>
//                       <div className="fs-xs mb-2">
//                         {store.address}
//                       </div>
//                       <div className="fs-xs">
//                         Open:{" "}
//                         <span className="text-dark-emphasis fw-medium">
//                           {store.hours}
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>
        
//         {/* Footer */}
//         <div className="offcanvas-header">
//           <button
//             type="button"
//             className="btn btn-lg btn-primary w-100 rounded-pill"
//             onClick={handleConfirmAddress}
//             disabled={deliveryView === 'add' && 
//               (!formData.stateId || !formData.postcode || !formData.cityId || !formData.streetAddress)}
//           >
//             {deliveryView === 'add' ? 'Add address' : 'Confirm address'}
//           </button>
//         </div>
//       </div>
      
//       <DeliveryDateOffCanvas onSelect={handleDateSelect} />
//     </>
//   );
// };

// export default DeliveryOptionsOffCanvas;

// 


// V4

// import { Address } from 'cluster';
// import React, { useState, useEffect } from 'react';
// import { AxiosAddressesService } from '../../../services/net/AxiosAddressesService';
// import { AxiosService } from '../../../services/net/base/AxiosService';
// import DeliveryDateOffCanvas from './DeliveryDateOffCanvas';

// interface State {
//   id: number;
//   name: string;
// }

// interface City {
//   id: number;
//   name: string;
// }

// interface UserInfo {
//   id: number;
//   name: string;
//   phone?: string;
// }

// interface DeliveryOptionsOffCanvasProps {
//   user: UserInfo;
// }

// const DeliveryOptionsOffCanvas: React.FC<DeliveryOptionsOffCanvasProps> = ({ user }) => {
//   const [addresses, setAddresses] = useState<Address[]>([]);
//   const [selectedAddressId, setSelectedAddressId] = useState<number | null>(null);
//   const [selectedStoreId, setSelectedStoreId] = useState<number | null>(null);
//   const [deliveryView, setDeliveryView] = useState<'list' | 'add'>('list');
//   const [pickupView, setPickupView] = useState<'list' | 'add'>('list');
//   const [states, setStates] = useState<State[]>([]);
//   const [cities, setCities] = useState<City[]>([]);
//   const [formData, setFormData] = useState({
//     stateId: '',
//     postcode: '',
//     cityId: '',
//     streetAddress: ''
//   });
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   // Fetch user addresses
//   useEffect(() => {
//     const fetchAddresses = async () => {
//       try {
//         setLoading(true);
//         const response = await AxiosAddressesService.fetchAll();
//         setAddresses(response.data.addresses);
//         setSelectedAddressId(response.data.addresses[0]?.id || null);
//       } catch (err) {
//         setError('Failed to load addresses');
//         console.error('Address fetch error:', err);
//       } finally {
//         setLoading(false);
//       }
//     };
    
//     fetchAddresses();
//   }, [user]);

//   // Fetch states for address form
//   useEffect(() => {
//     const fetchStates = async () => {
//       try {
//         const response = await AxiosService.json.get('/states');
//         setStates(response.data.states);
//       } catch (err) {
//         console.error('State fetch error:', err);
//       }
//     };
    
//     fetchStates();
//   }, []);

//   // Fetch cities when state is selected
//   useEffect(() => {
//     if (formData.stateId) {
//       const fetchCities = async () => {
//         try {
//           const response = await AxiosService.json.get(`/cities/${formData.stateId}/states`);
//           setCities(response.data.cities);
//         } catch (err) {
//           console.error('City fetch error:', err);
//         }
//       };
      
//       fetchCities();
//     }
//   }, [formData.stateId]);

//   const handleAddAddress = async () => {
//     try {
//       const newAddress = {
//         street_address: formData.streetAddress,
//         zip_code: formData.postcode,
//         city_id: parseInt(formData.cityId),
//         phone_number: user.phone || '',
//         first_name: user.name.split(' ')[0] || '',
//         last_name: user.name.split(' ')[1] || '',
//       };
      
//       const response = await AxiosAddressesService.create(newAddress);
//       setAddresses([...addresses, response.data]);
//       setSelectedAddressId(response.data.id);
//       setDeliveryView('list');
//       setFormData({ stateId: '', postcode: '', cityId: '', streetAddress: '' });
//     } catch (err) {
//       setError('Failed to add address');
//       console.error('Address creation error:', err);
//     }
//   };

//   const handleRemoveAddress = async (id: number) => {
//     try {
//       await AxiosAddressesService.delete(id.toString());
//       const updatedAddresses = addresses.filter(addr => addr.id !== id);
//       setAddresses(updatedAddresses);
      
//       if (selectedAddressId === id) {
//         setSelectedAddressId(updatedAddresses[0]?.id || null);
//       }
//     } catch (err) {
//       setError('Failed to remove address');
//       console.error('Address deletion error:', err);
//     }

//   };

//   const handleConfirmAddress = () => {
//     // Logic to confirm address and open date/time selector
//     const offcanvas = document.getElementById('deliveryDateTime');
//     const bsOffcanvas = new window.bootstrap.Offcanvas(offcanvas!);
//     bsOffcanvas.show();

//   };

//   const formatAddress = (address: Address) => {
//     return `${address.street_address}, ${address.city.name}, ${address.zip_code}`;
//   };

//   // Sample store data (replace with actual API integration)
//   const stores = [
//     {
//       id: 1,
//       name: "Lekki free trade zone",
//       address: "8270 Delta Shores Cir S, Sacramento, CA 95832",
//       hours: "07:00 - 22:00"
//     },
//     {
//       id: 2,
//       name: "West Sacramento Supercenter",
//       address: "755 Riverpoint Ct, West Sacramento, CA 95605",
//       hours: "07:00 - 21:00"
//     },
//     {
//       id: 3,
//       name: "Rancho Cordova Supercenter",
//       address: "10655 Folsom Blvd, Rancho Cordova, CA 95670",
//       hours: "08:00 - 23:00"
//     }
//   ];

//   const handleDateSelect: DeliveryDateOffCanvasProps['onSelect'] = (date, timeSlot) => {
//     console.log(`Selected delivery: ${date} at ${timeSlot}`);
//     // Close both offcanvases
//     document.querySelectorAll('.offcanvas').forEach(el => {
//       const offcanvas = window.bootstrap.Offcanvas.getInstance(el);
//       offcanvas?.hide();
//     });
//   };

//   return (
//     <>
//       <div
//         className="offcanvas offcanvas-end pb-sm-2 px-sm-2"
//         id="deliveryOptions"
//         tabIndex={-1}
//         aria-labelledby="deliveryOptionsLabel"
//         style={{ width: 500 }}
//       >
//         {/* Header with nav tabs */}
//         <div className="offcanvas-header flex-column align-items-start py-3 pt-lg-4">
//           <div className="d-flex align-items-center justify-content-between w-100 pb-xl-1 mb-4">
//             <h4 className="offcanvas-title" id="deliveryOptionsLabel">
//               Delivery options
//             </h4>
//             <button
//               type="button"
//               className="btn-close"
//               data-bs-dismiss="offcanvas"
//               aria-label="Close"
//             />
//           </div>
//           <ul className="nav nav-pills nav-justified w-100" role="tablist">
//             <li className="nav-item" role="presentation">
//               <button
//                 type="button"
//                 className="nav-link active"
//                 id="delivery-tab"
//                 data-bs-toggle="tab"
//                 data-bs-target="#delivery-tab-pane"
//                 role="tab"
//                 aria-controls="delivery-tab-pane"
//                 aria-selected="true"
//               >
//                 <i className="ci-shopping-bag fs-base ms-n1 me-2" />
//                 Delivery
//               </button>
//             </li>
//             <li className="nav-item" role="presentation">
//               <button
//                 type="button"
//                 className="nav-link"
//                 id="pickup-tab"
//                 data-bs-toggle="tab"
//                 data-bs-target="#pickup-tab-pane"
//                 role="tab"
//                 aria-controls="pickup-tab-pane"
//                 aria-selected="false"
//               >
//                 <i className="ci-box fs-base ms-n1 me-2" />
//                 Pickup
//               </button>
//             </li>
//           </ul>
//         </div>
        
//         <div className="offcanvas-body tab-content py-2 py-sm-3">
//           {/* Delivery tab */}
//           <div
//             className="tab-pane fade show active"
//             id="delivery-tab-pane"
//             role="tabpanel"
//             aria-labelledby="delivery-tab"
//           >
//             {loading ? (
//               <div className="text-center py-4">
//                 <div className="spinner-border text-primary" role="status">
//                   <span className="visually-hidden">Loading...</span>
//                 </div>
//               </div>
//             ) : error ? (
//               <div className="alert alert-danger">{error}</div>
//             ) : deliveryView === 'list' ? (
//               <>
//                 <div className="collapse delivery-address show" id="deliveryAddressOptions">
//                   <div className="mt-n3">
//                     {addresses.map((address) => (
//                       <div key={address.id} className="form-check border-bottom py-4 m-0">
//                         <input
//                           type="radio"
//                           className="form-check-input"
//                           id={`address-${address.id}`}
//                           name="delivery-address"
//                           checked={selectedAddressId === address.id}
//                           onChange={() => setSelectedAddressId(address.id)}
//                         />
//                         <div className="d-flex w-100">
//                           <label
//                             htmlFor={`address-${address.id}`}
//                             className="form-check-label text-dark-emphasis me-3"
//                           >
//                             {formatAddress(address)}
//                           </label>
//                           <button
//                             type="button"
//                             className="btn-close fs-sm ms-auto"
//                             data-bs-toggle="tooltip"
//                             data-bs-custom-class="tooltip-sm"
//                             data-bs-title="Remove"
//                             aria-label="Remove"
//                             onClick={() => handleRemoveAddress(address.id)}
//                           />
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//                 <div className="nav">
//                   <button
//                     className="nav-link animate-underline px-0 mt-4 border-0 bg-transparent"
//                     onClick={() => setDeliveryView('add')}
//                   >
//                     <span className="animate-target">Add delivery address</span>
//                     <i className="ci-plus fs-base ms-1" />
//                   </button>
//                 </div>
//               </>
//             ) : (
//               <div className="collapse delivery-address show" id="deliveryAddressAdd">
//                 <div className="nav mb-4">
//                   <button
//                     className="nav-link animate-underline p-0 border-0 bg-transparent"
//                     onClick={() => setDeliveryView('list')}
//                   >
//                     <i className="ci-chevron-left fs-lg ms-n1 me-1" />
//                     <span className="animate-target">Back to my addresses</span>
//                   </button>
//                 </div>
//                 <div className="d-flex align-items-center justify-content-between mb-3 mb-lg-4">
//                   <h5 className="h6 mb-0 me-3">Add an address to start ordering</h5>
//                   <button
//                     className="btn btn-sm btn-outline-primary rounded-pill"
//                   >
//                     <i className="ci-map-pin fs-base ms-n1 me-1" />
//                     Find on map
//                   </button>
//                 </div>
//                 <div className="mb-3 mb-lg-4">
//                   <label className="form-label">State *</label>
//                   <select
//                     className="form-select form-select-lg rounded-pill"
//                     value={formData.stateId}
//                     onChange={(e) => setFormData({...formData, stateId: e.target.value})}
//                   >
//                     <option value="">Select state</option>
//                     {states.map(state => (
//                       <option key={state.id} value={state.id}>{state.name}</option>
//                     ))}
//                   </select>
//                 </div>
//                 <div className="mb-3 mb-lg-4">
//                   <label htmlFor="my-postcode" className="form-label">
//                     Postcode *
//                   </label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="my-postcode"
//                     value={formData.postcode}
//                     onChange={(e) => setFormData({...formData, postcode: e.target.value})}
//                   />
//                 </div>
//                 <div className="mb-3 mb-lg-4">
//                   <label className="form-label">City *</label>
//                   <select
//                     className="form-select form-select-lg rounded-pill"
//                     value={formData.cityId}
//                     onChange={(e) => setFormData({...formData, cityId: e.target.value})}
//                     disabled={!formData.stateId}
//                   >
//                     <option value="">Select city</option>
//                     {cities.map(city => (
//                       <option key={city.id} value={city.id}>{city.name}</option>
//                     ))}
//                   </select>
//                 </div>
//                 <label htmlFor="my-address" className="form-label">
//                   Street address *
//                 </label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="my-address"
//                   value={formData.streetAddress}
//                   onChange={(e) => setFormData({...formData, streetAddress: e.target.value})}
//                 />
//               </div>
//             )}
//           </div>
          
//           {/* Pickup tab */}
//           <div
//             className="tab-pane fade"
//             id="pickup-tab-pane"
//             role="tabpanel"
//             aria-labelledby="pickup-tab"
//           >
//             {pickupView === 'list' ? (
//               <>
//                 <div className="collapse pickup-options show" id="pickupStoreOptions">
//                   <div className="mt-n3">
//                     {stores.map(store => (
//                       <div key={store.id} className="form-check border-bottom py-4 m-0">
//                         <input
//                           type="radio"
//                           className="form-check-input"
//                           id={`store-${store.id}`}
//                           name="pickup-store"
//                           checked={selectedStoreId === store.id}
//                           onChange={() => setSelectedStoreId(store.id)}
//                         />
//                         <div>
//                           <div className="d-flex w-100 pb-2 mb-1">
//                             <label
//                               htmlFor={`store-${store.id}`}
//                               className="form-check-label text-dark-emphasis fw-semibold me-3"
//                             >
//                               {store.name}
//                             </label>
//                           </div>
//                           <div className="fs-xs mb-2">
//                             {store.address}
//                           </div>
//                           <div className="fs-xs">
//                             Open:{" "}
//                             <span className="text-dark-emphasis fw-medium">
//                               {store.hours}
//                             </span>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//                 <div className="nav">
//                   <button
//                     className="nav-link animate-underline px-0 mt-4 border-0 bg-transparent"
//                     onClick={() => setPickupView('add')}
//                   >
//                     <span className="animate-target">Add store address</span>
//                     <i className="ci-plus fs-base ms-1" />
//                   </button>
//                 </div>
//               </>
//             ) : (
//               <div className="collapse pickup-options show" id="pickupStoreAdd">
//                 <div className="nav mb-4">
//                   <button
//                     className="nav-link animate-underline p-0 border-0 bg-transparent"
//                     onClick={() => setPickupView('list')}
//                   >
//                     <i className="ci-chevron-left fs-lg ms-n1 me-1" />
//                     <span className="animate-target">Back to my stores</span>
//                   </button>
//                 </div>
//                 <div className="d-flex align-items-center justify-content-between mb-3 mb-lg-4">
//                   <h5 className="h6 mb-0 me-3">Select a suitable store</h5>
//                   <button
//                     className="btn btn-sm btn-outline-primary rounded-pill"
//                   >
//                     <i className="ci-map-pin fs-base ms-n1 me-1" />
//                     Find on map
//                   </button>
//                 </div>
//                 <div className="mb-3 mb-lg-4">
//                   <label className="form-label">State *</label>
//                   <select
//                     className="form-select form-select-lg rounded-pill"
//                   >
//                     <option value="">Select state</option>
//                     <option value="California" selected>California</option>
//                   </select>
//                 </div>
//                 <div className="mb-4">
//                   <label className="form-label">City *</label>
//                   <select
//                     className="form-select form-select-lg rounded-pill"
//                   >
//                     <option value="">Select city</option>
//                     <option value="Sacramento" selected>Sacramento</option>
//                   </select>
//                 </div>
//                 <div className="fs-xs fw-medium text-uppercase text-body-secondary">
//                   Found stores:
//                 </div>
//                 {stores.map(store => (
//                   <div key={store.id} className="form-check border-bottom py-4 m-0">
//                     <input
//                       type="radio"
//                       className="form-check-input"
//                       id={`store-${store.id}-add`}
//                       name="found-store"
//                     />
//                     <div>
//                       <label
//                         htmlFor={`store-${store.id}-add`}
//                         className="form-check-label text-dark-emphasis fw-semibold pb-2 mb-1"
//                       >
//                         {store.name}
//                       </label>
//                       <div className="fs-xs mb-2">
//                         {store.address}
//                       </div>
//                       <div className="fs-xs">
//                         Open:{" "}
//                         <span className="text-dark-emphasis fw-medium">
//                           {store.hours}
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>
        
//         {/* Footer */}
//         <div className="offcanvas-header">
//           <button
//             type="button"
//             className="btn btn-lg btn-primary w-100 rounded-pill"
//             onClick={deliveryView === 'add' ? handleAddAddress : handleConfirmAddress}
//             disabled={deliveryView === 'add' && 
//               (!formData.stateId || !formData.postcode || !formData.cityId || !formData.streetAddress)}
//           >
//             {deliveryView === 'add' ? 'Add address' : 'Confirm address'}
//           </button>
//         </div>
//       </div>
      
//       <DeliveryDateOffCanvas onSelect={handleDateSelect} />
//     </>
//   );
// };

// export default DeliveryOptionsOffCanvas;


// V4.1

// // DeliveryOptionsOffCanvas.tsx
// import React, { useState, useEffect, useCallback } from 'react';
// import { AxiosAddressesService } from '@/services/net/AxiosAddressesService';
// import { AxiosService } from '@/services/net/base/AxiosService';
// import DeliveryDateOffCanvas from './DeliveryDateOffCanvas';
// import { NotificationService } from '@/services/local/NotificationService';
// import { useUser } from '@/context/UserContext';
// import LoadingSpinner from '@/components/shared/LoadingSpinner';

// interface State {
//   id: number;
//   name: string;
// }

// interface City {
//   id: number;
//   name: string;
// }

// interface Store {
//   id: number;
//   name: string;
//   address: string;
//   hours: string;
// }

// const DeliveryOptionsOffCanvas = () => {
//   const { user } = useUser();
//   const [addresses, setAddresses] = useState<any[]>([]);
//   const [selectedAddressId, setSelectedAddressId] = useState<number | null>(null);
//   const [selectedStoreId, setSelectedStoreId] = useState<number | null>(null);
//   const [deliveryView, setDeliveryView] = useState<'list' | 'add'>('list');
//   const [pickupView, setPickupView] = useState<'list' | 'add'>('list');
//   const [states, setStates] = useState<State[]>([]);
//   const [cities, setCities] = useState<City[]>([]);
//   const [formData, setFormData] = useState({
//     stateId: '',
//     postcode: '',
//     cityId: '',
//     streetAddress: ''
//   });
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [savingAddress, setSavingAddress] = useState(false);
//   const [deletingAddress, setDeletingAddress] = useState<number | null>(null);
//   const [stores, setStores] = useState<Store[]>([]);
//   const [storeLoading, setStoreLoading] = useState(true);

//   // Fetch user addresses
//   const fetchAddresses = useCallback(async () => {
//     try {
//       setLoading(true);
//       const response = await AxiosAddressesService.fetchAll({
//         include_city: true,
//         include_state: true
//       });
//       setAddresses(response.data.addresses || []);
      
//       // Set the first active address as selected
//       const activeAddress = response.data.addresses.find((addr: any) => addr.is_active);
//       setSelectedAddressId(activeAddress?.id || null);
//     } catch (err: any) {
//       const message = err.response?.data?.message || 'Failed to load addresses';
//       setError(message);
//       NotificationService.showDialog(message, 'danger');
//     } finally {
//       setLoading(false);
//     }
//   }, []);

//   useEffect(() => {
//     // if (user?.id) fetchAddresses();
//      fetchAddresses();
//   }, [user, fetchAddresses]);

//   // Fetch stores
//   const fetchStores = useCallback(async () => {
//     try {
//       setStoreLoading(true);
//       // Replace with actual API call to fetch stores
//       const response = await AxiosService.json.get('/stores');
//       setStores(response.data.stores || []);
//       setSelectedStoreId(response.data.stores[0]?.id || null);
//     } catch (err: any) {
//       console.error('Store fetch error:', err);
//       NotificationService.showDialog('Failed to load stores', 'danger');
//     } finally {
//       setStoreLoading(false);
//     }
//   }, []);

//   useEffect(() => {
//     fetchStores();
//   }, [fetchStores]);

//   // Fetch states for address form
//   const fetchStates = useCallback(async () => {
//     try {
//       const response = await AxiosService.json.get('/states?page_size=100');
//       setStates(response.data.states || []);
//     } catch (err: any) {
//       console.error('State fetch error:', err);
//       NotificationService.showDialog('Failed to load states', 'danger');
//     }
//   }, []);

//   useEffect(() => {
//     fetchStates();
//   }, [fetchStates]);

//   // Fetch cities when state is selected
//   const fetchCities = useCallback(async (stateId: string) => {
//     if (!stateId) return;
    
//     try {
//       const response = await AxiosService.json.get(`/cities/${stateId}/states`);
//       setCities(response.data.cities || []);
//     } catch (err: any) {
//       console.error('City fetch error:', err);
//       NotificationService.showDialog('Failed to load cities', 'danger');
//     }
//   }, []);

//   useEffect(() => {
//     if (formData.stateId) {
//       fetchCities(formData.stateId);
//     }
//   }, [formData.stateId, fetchCities]);

//   const handleAddAddress = async () => {
//     try {
//       setSavingAddress(true);
      
//       // Safely handle user name
//       const userName = user?.name || "";
//       const nameParts = userName.split(' ');
//       const firstName = nameParts[0] || '';
//       const lastName = nameParts.slice(1).join(' ') || '';

//       const newAddress = {
//         street_address: formData.streetAddress,
//         zip_code: formData.postcode,
//         city_id: parseInt(formData.cityId),
//         phone_number: user?.phone || '',
//         first_name: firstName,
//         last_name: lastName,
//         is_primary: addresses.length === 0 // Set as primary if first address
//       };
      
//       const response = await AxiosAddressesService.create(newAddress);
//       setAddresses([...addresses, response.data]);
//       setSelectedAddressId(response.data.id);
//       setDeliveryView('list');
//       setFormData({ stateId: '', postcode: '', cityId: '', streetAddress: '' });
      
//       NotificationService.showDialog('Address added successfully', 'success');
//     } catch (err: any) {
//       const message = err.response?.data?.message || 'Failed to add address';
//       setError(message);
//       NotificationService.showDialog(message, 'danger');
//     } finally {
//       setSavingAddress(false);
//     }
//   };

//   const handleRemoveAddress = async (id: number) => {
//     if (!window.confirm('Are you sure you want to remove this address?')) return;
    
//     try {
//       setDeletingAddress(id);
//       await AxiosAddressesService.delete(id.toString());
      
//       const updatedAddresses = addresses.filter((addr: any) => addr.id !== id);
//       setAddresses(updatedAddresses);
      
//       if (selectedAddressId === id) {
//         setSelectedAddressId(updatedAddresses[0]?.id || null);
//       }
      
//       NotificationService.showDialog('Address removed successfully', 'success');
//     } catch (err: any) {
//       const message = err.response?.data?.message || 'Failed to remove address';
//       setError(message);
//       NotificationService.showDialog(message, 'danger');
//     } finally {
//       setDeletingAddress(null);
//     }
//   };

//   const handleConfirmAddress = () => {
//     // Close current offcanvas
//     const deliveryOptionsCanvas = document.getElementById('deliveryOptions');
//     const bsOffcanvas = window.bootstrap.Offcanvas.getInstance(deliveryOptionsCanvas!);
//     bsOffcanvas?.hide();
    
//     // Open date/time selector
//     const dateTimeCanvas = document.getElementById('deliveryDateTime');
//     const dateTimeOffcanvas = new window.bootstrap.Offcanvas(dateTimeCanvas!);
//     dateTimeOffcanvas.show();
//   };

//   const formatAddress = (address: any) => {
//     return `${address.street_address}, ${address.city?.name}, ${address.zip_code}`;
//   };

//   const handleDateSelect = (date: string, timeSlot: string) => {
//     console.log(`Selected delivery: ${date} at ${timeSlot}`);
//     // Close both offcanvases
//     document.querySelectorAll('.offcanvas').forEach(el => {
//       const offcanvas = window.bootstrap.Offcanvas.getInstance(el);
//       offcanvas?.hide();
//     });
//   };

//   const renderAddressList = () => (
//     <>
//       <div className="collapse delivery-address show" id="deliveryAddressOptions">
//         <div className="mt-n3">
//           {addresses.map((address: any) => (
//             <div key={address.id} className="form-check border-bottom py-4 m-0">
//               <input
//                 type="radio"
//                 className="form-check-input"
//                 id={`address-${address.id}`}
//                 name="delivery-address"
//                 checked={selectedAddressId === address.id}
//                 onChange={() => setSelectedAddressId(address.id)}
//                 disabled={deletingAddress === address.id}
//               />
//               <div className="d-flex w-100">
//                 <label
//                   htmlFor={`address-${address.id}`}
//                   className="form-check-label text-dark-emphasis me-3"
//                 >
//                   {formatAddress(address)}
//                 </label>
//                 <button
//                   type="button"
//                   className="btn-close fs-sm ms-auto"
//                   data-bs-toggle="tooltip"
//                   data-bs-custom-class="tooltip-sm"
//                   data-bs-title="Remove"
//                   aria-label="Remove"
//                   onClick={() => handleRemoveAddress(address.id)}
//                   disabled={deletingAddress === address.id}
//                 >
//                   {deletingAddress === address.id && (
//                     <span className="spinner-border spinner-border-sm" role="status" />
//                   )}
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="nav">
//         <button
//           className="nav-link animate-underline px-0 mt-4 border-0 bg-transparent"
//           onClick={() => setDeliveryView('add')}
//         >
//           <span className="animate-target">Add delivery address</span>
//           <i className="ci-plus fs-base ms-1" />
//         </button>
//       </div>
//     </>
//   );

//   const renderAddressForm = () => (
//     <div className="collapse delivery-address show" id="deliveryAddressAdd">
//       <div className="nav mb-4">
//         <button
//           className="nav-link animate-underline p-0 border-0 bg-transparent"
//           onClick={() => setDeliveryView('list')}
//         >
//           <i className="ci-chevron-left fs-lg ms-n1 me-1" />
//           <span className="animate-target">Back to my addresses</span>
//         </button>
//       </div>
//       <div className="d-flex align-items-center justify-content-between mb-3 mb-lg-4">
//         <h5 className="h6 mb-0 me-3">Add an address to start ordering</h5>
//         <button className="btn btn-sm btn-outline-primary rounded-pill">
//           <i className="ci-map-pin fs-base ms-n1 me-1" />
//           Find on map
//         </button>
//       </div>
//       <div className="mb-3 mb-lg-4">
//         <label className="form-label">State *</label>
//         <select
//           className="form-select form-select-lg rounded-pill"
//           value={formData.stateId}
//           onChange={(e) => setFormData({...formData, stateId: e.target.value})}
//           disabled={savingAddress}
//         >
//           <option value="">Select state</option>
//           {states.map(state => (
//             <option key={state.id} value={state.id}>{state.name}</option>
//           ))}
//         </select>
//       </div>
//       <div className="mb-3 mb-lg-4">
//         <label htmlFor="my-postcode" className="form-label">
//           Postcode *
//         </label>
//         <input
//           type="text"
//           className="form-control"
//           id="my-postcode"
//           value={formData.postcode}
//           onChange={(e) => setFormData({...formData, postcode: e.target.value})}
//           disabled={savingAddress}
//         />
//       </div>
//       <div className="mb-3 mb-lg-4">
//         <label className="form-label">City *</label>
//         <select
//           className="form-select form-select-lg rounded-pill"
//           value={formData.cityId}
//           onChange={(e) => setFormData({...formData, cityId: e.target.value})}
//           disabled={!formData.stateId || savingAddress}
//         >
//           <option value="">Select city</option>
//           {cities.map(city => (
//             <option key={city.id} value={city.id}>{city.name}</option>
//           ))}
//         </select>
//       </div>
//       <label htmlFor="my-address" className="form-label">
//         Street address *
//       </label>
//       <input
//         type="text"
//         className="form-control"
//         id="my-address"
//         value={formData.streetAddress}
//         onChange={(e) => setFormData({...formData, streetAddress: e.target.value})}
//         disabled={savingAddress}
//       />
//     </div>
//   );

//   const renderStoreList = () => (
//     <>
//       <div className="collapse pickup-options show" id="pickupStoreOptions">
//         <div className="mt-n3">
//           {stores.map(store => (
//             <div key={store.id} className="form-check border-bottom py-4 m-0">
//               <input
//                 type="radio"
//                 className="form-check-input"
//                 id={`store-${store.id}`}
//                 name="pickup-store"
//                 checked={selectedStoreId === store.id}
//                 onChange={() => setSelectedStoreId(store.id)}
//               />
//               <div>
//                 <div className="d-flex w-100 pb-2 mb-1">
//                   <label
//                     htmlFor={`store-${store.id}`}
//                     className="form-check-label text-dark-emphasis fw-semibold me-3"
//                   >
//                     {store.name}
//                   </label>
//                 </div>
//                 <div className="fs-xs mb-2">
//                   {store.address}
//                 </div>
//                 <div className="fs-xs">
//                   Open:{" "}
//                   <span className="text-dark-emphasis fw-medium">
//                     {store.hours}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="nav">
//         <button
//           className="nav-link animate-underline px-0 mt-4 border-0 bg-transparent"
//           onClick={() => setPickupView('add')}
//         >
//           <span className="animate-target">Add store address</span>
//           <i className="ci-plus fs-base ms-1" />
//         </button>
//       </div>
//     </>
//   );

//   const renderStoreForm = () => (
//     <div className="collapse pickup-options show" id="pickupStoreAdd">
//       <div className="nav mb-4">
//         <button
//           className="nav-link animate-underline p-0 border-0 bg-transparent"
//           onClick={() => setPickupView('list')}
//         >
//           <i className="ci-chevron-left fs-lg ms-n1 me-1" />
//           <span className="animate-target">Back to my stores</span>
//         </button>
//       </div>
//       <div className="d-flex align-items-center justify-content-between mb-3 mb-lg-4">
//         <h5 className="h6 mb-0 me-3">Select a suitable store</h5>
//         <button className="btn btn-sm btn-outline-primary rounded-pill">
//           <i className="ci-map-pin fs-base ms-n1 me-1" />
//           Find on map
//         </button>
//       </div>
//       <div className="mb-3 mb-lg-4">
//         <label className="form-label">State *</label>
//         <select className="form-select form-select-lg rounded-pill">
//           <option value="">Select state</option>
//           <option value="California">California</option>
//         </select>
//       </div>
//       <div className="mb-4">
//         <label className="form-label">City *</label>
//         <select className="form-select form-select-lg rounded-pill">
//           <option value="">Select city</option>
//           <option value="Sacramento">Sacramento</option>
//         </select>
//       </div>
//       <div className="fs-xs fw-medium text-uppercase text-body-secondary">
//         Found stores:
//       </div>
//       {stores.map(store => (
//         <div key={store.id} className="form-check border-bottom py-4 m-0">
//           <input
//             type="radio"
//             className="form-check-input"
//             id={`store-${store.id}-add`}
//             name="found-store"
//             checked={selectedStoreId === store.id}
//             onChange={() => setSelectedStoreId(store.id)}
//           />
//           <div>
//             <label
//               htmlFor={`store-${store.id}-add`}
//               className="form-check-label text-dark-emphasis fw-semibold pb-2 mb-1"
//             >
//               {store.name}
//             </label>
//             <div className="fs-xs mb-2">
//               {store.address}
//             </div>
//             <div className="fs-xs">
//               Open:{" "}
//               <span className="text-dark-emphasis fw-medium">
//                 {store.hours}
//               </span>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );

//   return (
//     <>
//       <div
//         className="offcanvas offcanvas-end pb-sm-2 px-sm-2"
//         id="deliveryOptions"
//         tabIndex={-1}
//         aria-labelledby="deliveryOptionsLabel"
//         style={{ width: 500 }}
//       >
//         {/* Header with nav tabs */}
//         <div className="offcanvas-header flex-column align-items-start py-3 pt-lg-4">
//           <div className="d-flex align-items-center justify-content-between w-100 pb-xl-1 mb-4">
//             <h4 className="offcanvas-title" id="deliveryOptionsLabel">
//               Delivery options
//             </h4>
//             <button
//               type="button"
//               className="btn-close"
//               data-bs-dismiss="offcanvas"
//               aria-label="Close"
//             />
//           </div>
//           <ul className="nav nav-pills nav-justified w-100" role="tablist">
//             <li className="nav-item" role="presentation">
//               <button
//                 type="button"
//                 className="nav-link active"
//                 id="delivery-tab"
//                 data-bs-toggle="tab"
//                 data-bs-target="#delivery-tab-pane"
//                 role="tab"
//                 aria-controls="delivery-tab-pane"
//                 aria-selected="true"
//               >
//                 <i className="ci-shopping-bag fs-base ms-n1 me-2" />
//                 Delivery
//               </button>
//             </li>
//             <li className="nav-item" role="presentation">
//               <button
//                 type="button"
//                 className="nav-link"
//                 id="pickup-tab"
//                 data-bs-toggle="tab"
//                 data-bs-target="#pickup-tab-pane"
//                 role="tab"
//                 aria-controls="pickup-tab-pane"
//                 aria-selected="false"
//               >
//                 <i className="ci-box fs-base ms-n1 me-2" />
//                 Pickup
//               </button>
//             </li>
//           </ul>
//         </div>
        
//         <div className="offcanvas-body tab-content py-2 py-sm-3">
//           {/* Delivery tab */}
//           <div
//             className="tab-pane fade show active"
//             id="delivery-tab-pane"
//             role="tabpanel"
//             aria-labelledby="delivery-tab"
//           >
//             {loading ? (
//               <div className="text-center py-4">
//                 <LoadingSpinner size='sm' />
//                 <p className="mt-2">Loading addresses...</p>
//               </div>
//             ) : error ? (
//               <div className="alert alert-danger">{error}</div>
//             ) : deliveryView === 'list' ? (
//               renderAddressList()
//             ) : (
//               renderAddressForm()
//             )}
//           </div>
          
//           {/* Pickup tab */}
//           <div
//             className="tab-pane fade"
//             id="pickup-tab-pane"
//             role="tabpanel"
//             aria-labelledby="pickup-tab"
//           >
//             {storeLoading ? (
//               <div className="text-center py-4">
//                 <LoadingSpinner size='sm' />
//                 <p className="mt-2">Loading stores...</p>
//               </div>
//             ) : pickupView === 'list' ? (
//               renderStoreList()
//             ) : (
//               renderStoreForm()
//             )}
//           </div>
//         </div>
        
//         {/* Footer */}
//         <div className="offcanvas-header">
//           <button
//             type="button"
//             className="btn btn-lg btn-primary w-100 rounded-pill d-flex justify-content-center align-items-center"
//             onClick={deliveryView === 'add' ? handleAddAddress : handleConfirmAddress}
//             disabled={
//               (deliveryView === 'add' && 
//                 (!formData.stateId || !formData.postcode || !formData.cityId || !formData.streetAddress)) ||
//               savingAddress
//             }
//           >
//             {savingAddress ? (
//               <>
//                 <span className="spinner-border spinner-border-sm me-2" role="status"></span>
//                 Adding...
//               </>
//             ) : deliveryView === 'add' ? (
//               'Add address'
//             ) : (
//               'Confirm address'
//             )}
//           </button>
//         </div>
//       </div>
      
//       <DeliveryDateOffCanvas onSelect={handleDateSelect} />
//     </>
//   );
// };

// export default DeliveryOptionsOffCanvas;


// v4.2

// import React, { useState, useEffect, useCallback } from 'react';
// import { AxiosAddressesService } from '@/services/net/AxiosAddressesService';
// import { AxiosService } from '@/services/net/base/AxiosService';
// import DeliveryDateOffCanvas from './DeliveryDateOffCanvas';
// import { NotificationService } from '@/services/local/NotificationService';
// import { useUser } from '@/context/UserContext';
// import LoadingSpinner from '@/components/shared/LoadingSpinner';
// import AddressForm from './AddressForm';
// import { useDelivery } from '@/context/DeliveryContext';

// // State interface
// interface State {
//   id: number;
//   name: string;
//   country_id: number;
// }

// // City interface
// interface City {
//   id: number;
//   name: string;
//   state_id: number;
// }

// // Store interface
// interface Store {
//   id: number;
//   name: string;
//   address: Address,
//   // address: {
//   //   street_address: string;
//   //   city: {
//   //     id: number;
//   //     name: string;
//   //     state?: {
//   //       id: number;
//   //       name: string;
//   //       country?: {
//   //         id: number;
//   //         name: string;
//   //       };
//   //     };
//   //   };
//   //   zip_code: string;
//   //   phone_number?: string;
//   // };
//   hours: string;
// }

// // Address interface
// interface Address {
//   id: number;
//   street_address: string;
//   city: {
//     id: number;
//     name: string;
//     state?: {
//       id: number;
//       name: string;
//       country?: {
//         id: number;
//         name: string;
//       };
//     };
//   };
//   zip_code: string;
//   phone_number: string;
//   is_primary: boolean;
// }

// const DeliveryOptionsOffCanvas = ({ onOptionSelect }: { onOptionSelect: (details: any) => void }) => {
  
//   const { user } = useUser();
//   const { deliveryDetails } = useDelivery();  
//   const [addresses, setAddresses] = useState<Address[]>([]);
//   const [selectedAddressId, setSelectedAddressId] = useState<number | null>(null);
//   const [selectedStoreId, setSelectedStoreId] = useState<number | null>(null);
//   const [deliveryView, setDeliveryView] = useState<'list' | 'add'>('list');
//   const [states, setStates] = useState<State[]>([]);
//   const [cities, setCities] = useState<City[]>([]);
//   const [countries, setCountries] = useState<{id: string; name: string}[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [savingAddress, setSavingAddress] = useState(false);
//   const [deletingAddress, setDeletingAddress] = useState<number | null>(null);
//   const [stores, setStores] = useState<Store[]>([]);
//   const [storeLoading, setStoreLoading] = useState(true);

//   // Fetch user addresses
//   // const fetchAddresses = useCallback(async () => {
//   //   try {
//   //     setLoading(true);
//   //     const response = await AxiosAddressesService.fetchAll({
//   //       include_city: true,
//   //       include_state: true,
//   //       include_country: true
//   //     });
//   //     setAddresses(response.data.addresses || []);
      
//   //     // Set primary address as default
//   //     const primaryAddress = response.data.addresses.find((addr: any) => addr.is_primary);
//   //     setSelectedAddressId(primaryAddress?.id || response.data.addresses[0]?.id || null);
//   //   } catch (err: any) {
//   //     const message = err.response?.data?.message || 'Failed to load addresses';
//   //     setError(message);
//   //     NotificationService.showDialog(message, 'danger');
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // }, []);

//     // Filter addresses into user and store addresses
//   const userAddresses = addresses.filter(addr => !addr.is_store);
//   const storeAddresses = addresses.filter(addr => addr.is_store);

//   // Fetch user addresses and store addresses together
//   const fetchAddresses = useCallback(async () => {
//     try {
//       setLoading(true);
//       const response = await AxiosAddressesService.fetchAll({
//         include_city: true,
//         include_state: true,
//         include_country: true,
//         include_stores:true
//       });
//       setAddresses(response.data.addresses || []);
      
//       // Set primary address as default
//       const primaryAddress = response.data.addresses.find(
//         (addr: any) => addr.is_primary && !addr.is_store
//       );
//       setSelectedAddressId(primaryAddress?.id || response.data.addresses[0]?.id || null);
//     } catch (err: any) {
//       // ... error handling
//     } finally {
//       setLoading(false);
//     }
//   }, []);


//   useEffect(() => {
//     fetchAddresses();
//   }, [user, fetchAddresses]);

//   // Fetch stores
//   // const fetchStores = useCallback(async () => {
//   //   try {
//   //     setStoreLoading(true);
//   //     const response = await AxiosService.json.get('/stores');
//   //     setStores(response.data.stores || []);
//   //     setSelectedStoreId(response.data.stores[0]?.id || null);
//   //   } catch (err: any) {
//   //     console.error('Store fetch error:', err);
//   //     NotificationService.showDialog('Failed to load stores', 'danger');
//   //   } finally {
//   //     setStoreLoading(false);
//   //   }
//   // }, []);

//   // useEffect(() => {
//   //   fetchStores();
//   // }, [fetchAddresses, fetchStores]);

//   // Fetch countries
//   const fetchCountries = useCallback(async () => {
//     try {
//       const response = await AxiosService.json.get('/countries');
//       setCountries(response.data.countries || []);
//     } catch (err: any) {
//       console.error('Country fetch error:', err);
//       NotificationService.showDialog('Failed to load countries', 'danger');
//     }
//   }, []);

//   useEffect(() => {
//     fetchCountries();
//   }, [fetchCountries]);

//   // Handle adding a new address
//   const handleAddAddress = async (addressData: any) => {
//     try {
//       setSavingAddress(true);
      
//       const newAddress = {
//         ...addressData,
//         is_primary: addresses.length === 0
//       };
      
//       const response = await AxiosAddressesService.create(newAddress);
//       const updatedAddresses = [...addresses, response.data];
//       setAddresses(updatedAddresses);
//       setSelectedAddressId(response.data.id);
//       setDeliveryView('list');
      
//       NotificationService.showDialog('Address added successfully', 'success');
//     } catch (err: any) {
//       const message = err.response?.data?.message || 'Failed to add address';
//       setError(message);
//       NotificationService.showDialog(message, 'danger');
//     } finally {
//       setSavingAddress(false);
//     }
//   };

//   // Handle removing an address
//   const handleRemoveAddress = async (id: number) => {
//     if (!window.confirm('Are you sure you want to remove this address?')) return;
    
//     try {
//       setDeletingAddress(id);
//       await AxiosAddressesService.delete(id.toString());
      
//       const updatedAddresses = addresses.filter(addr => addr.id !== id);
//       setAddresses(updatedAddresses);
      
//       if (selectedAddressId === id) {
//         setSelectedAddressId(updatedAddresses[0]?.id || null);
//       }
      
//       NotificationService.showDialog('Address removed successfully', 'success');
//     } catch (err: any) {
//       const message = err.response?.data?.message || 'Failed to remove address';
//       setError(message);
//       NotificationService.showDialog(message, 'danger');
//     } finally {
//       setDeletingAddress(null);
//     }
//   };

//   // Handle confirming address selection
//   const handleConfirmAddress = () => {
//     const deliveryOptionsCanvas = document.getElementById('deliveryOptions');
//     const bsOffcanvas = window.bootstrap.Offcanvas.getInstance(deliveryOptionsCanvas!);
//     bsOffcanvas?.hide();
    
//     const address = addresses.find(addr => addr.id === selectedAddressId);
//     if (address) {
//       onOptionSelect({
//         address,
//         option: 'delivery'
//       });
//     }
//   };

//   // Handle confirming store selection
//   // const handleConfirmStore = () => {
//   //   const deliveryOptionsCanvas = document.getElementById('deliveryOptions');
//   //   const bsOffcanvas = window.bootstrap.Offcanvas.getInstance(deliveryOptionsCanvas!);
//   //   bsOffcanvas?.hide();
    
//   //   const store = stores.find(store => store.id === selectedStoreId);
//   //   if (store) {
//   //     onOptionSelect({
//   //       address: store,
//   //       option: 'pickup'
//   //     });
//   //   }
//   // };

//   // Handle confirming store selection
// // const handleConfirmStore = () => {
// //   const deliveryOptionsCanvas = document.getElementById('deliveryOptions');
// //   const bsOffcanvas = window.bootstrap.Offcanvas.getInstance(deliveryOptionsCanvas!);
// //   bsOffcanvas?.hide();
  
// //   const store = stores.find(store => store.id === selectedStoreId);
// //   if (store) {
// //     onOptionSelect({
// //       address: store.address,  // Pass the store's ADDRESS, not the store itself
// //       store: store,            // Pass store separately if needed
// //       option: 'pickup'
// //     });
// //   }
// // };

// // Handle confirming store selection
// const handleConfirmStore = () => {
//   const deliveryOptionsCanvas = document.getElementById('deliveryOptions');
//   const bsOffcanvas = window.bootstrap.Offcanvas.getInstance(deliveryOptionsCanvas!);
//   bsOffcanvas?.hide();
  
//   const store = stores.find(store => store.id === selectedStoreId);
//   if (store) {
//     // Ensure we pass the FULL store object including its address
    
//     onOptionSelect({
//       address: store.address,  // Store's address object
//       store: {                 // Full store object
//         id: store.id,
//         name: store.name,
//         phone: store.phone,
//         address: store.address  // Include address in store object
//       },
//       option: 'pickup'
//     });
//   }
// };

//   // Format address for display
//   const formatAddress = (address: Address) => {
//     return `${address.street_address}, ${address.city.name}, ${address.zip_code}`;
//   };

//   // Format store address for display
//   const formatStoreAddress = (store: Store) => { 
//     return `${store.address.street_address}, ${store.address.city.name}, ${store.address.zip_code}`;
//   };

//   // Render address list
//   // const renderAddressList = () => (
//   //   <>
//   //     <div className="collapse delivery-address show" id="deliveryAddressOptions">
//   //       <div className="mt-n3">
//   //         {addresses.map((address) => (
//   //           <div key={address.id} className="form-check border-bottom py-4 m-0">
//   //             <input
//   //               type="radio"
//   //               className="form-check-input"
//   //               id={`address-${address.id}`}
//   //               name="delivery-address"
//   //               checked={selectedAddressId === address.id}
//   //               onChange={() => setSelectedAddressId(address.id)}
//   //               disabled={deletingAddress === address.id}
//   //             />
//   //             <div className="d-flex w-100">
//   //               <label
//   //                 htmlFor={`address-${address.id}`}
//   //                 className="form-check-label text-dark-emphasis me-3"
//   //               >
//   //                 {formatAddress(address)}
//   //                 {address.phone_number && <div className="text-muted">Phone: {address.phone_number}</div>}
//   //               </label>
//   //               <button
//   //                 type="button"
//   //                 className="btn-close fs-sm ms-auto"
//   //                 aria-label="Remove"
//   //                 onClick={() => handleRemoveAddress(address.id)}
//   //                 disabled={deletingAddress === address.id}
//   //               >
//   //                 {deletingAddress === address.id && (
//   //                   <span className="spinner-border spinner-border-sm" role="status" />
//   //                 )}
//   //               </button>
//   //             </div>
//   //           </div>
//   //         ))}
//   //       </div>
//   //     </div>
//   //     <div className="nav">
//   //       <button
//   //         className="nav-link animate-underline px-0 mt-4 border-0 bg-transparent"
//   //         onClick={() => setDeliveryView('add')}
//   //       >
//   //         <span className="animate-target">Add delivery address</span>
//   //         <i className="ci-plus fs-base ms-1" />
//   //       </button>
//   //     </div>
//   //   </>
//   // );
//     const renderAddressList = () => (
//     <>
//       <div className="collapse delivery-address show" id="deliveryAddressOptions">
//         <div className="mt-n3">
//           {userAddresses.map((address) => (
//             <div key={address.id} className="form-check border-bottom py-4 m-0">
//               <input
//                 type="radio"
//                 className="form-check-input"
//                 id={`address-${address.id}`}
//                 name="delivery-address"
//                 checked={selectedAddressId === address.id}
//                 onChange={() => setSelectedAddressId(address.id)}
//                 disabled={deletingAddress === address.id}
//               />
//               <div className="d-flex w-100">
//                 <label
//                   htmlFor={`address-${address.id}`}
//                   className="form-check-label text-dark-emphasis me-3"
//                 >
//                   <div className="d-flex align-items-center">
//                     <span>{address.street_address}, {address.city.name}, {address.zip_code}</span>
//                     {address.is_primary && (
//                       <span className="badge bg-primary ms-2">Primary</span>
//                     )}
//                   </div>
//                   {address.phone_number && (
//                     <div className="text-muted">Phone: {address.phone_number}</div>
//                   )}
//                 </label>
//                 {/* ... delete button */}
//                 <button
//                   type="button"
//                   className="btn-close fs-sm ms-auto"
//                   aria-label="Remove"
//                   onClick={() => handleRemoveAddress(address.id)}
//                   disabled={deletingAddress === address.id}
//                 >
//                   {deletingAddress === address.id && (
//                     <span className="spinner-border spinner-border-sm" role="status" />
//                   )}
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       {/* ... add address button */}
//       <div className="nav">
//         <button
//           className="nav-link animate-underline px-0 mt-4 border-0 bg-transparent"
//           onClick={() => setDeliveryView('add')}
//         >
//           <span className="animate-target">Add delivery address</span>
//           <i className="ci-plus fs-base ms-1" />
//         </button>
//       </div>
//     </>
//   );

//   // Render address form
//   const renderAddressForm = () => (
//     <AddressForm 
//       type="delivery" 
//       onSave={handleAddAddress}
//       onCancel={() => setDeliveryView('list')}
//       countries={countries}
//       states={states}
//       cities={cities}
//       user={user}
//     />
//   );

//   // Render store list
//   // const renderStoreList = () => (
//   //   <>
//   //     <div className="collapse pickup-options show" id="pickupStoreOptions">
//   //       <div className="mt-n3">
//   //         {stores.map((store, index) => (
//   //           <div key={`${store.id}-${index}`} className="form-check border-bottom py-4 m-0">
//   //             <input
//   //               type="radio"
//   //               className="form-check-input"
//   //               id={`store-${store.id}`}
//   //               name="pickup-store"
//   //               checked={selectedStoreId === store.id}
//   //               onChange={() => setSelectedStoreId(store.id)}
//   //             />
//   //             <div>
//   //               <div className="d-flex w-100 pb-2 mb-1">
//   //                 <label
//   //                   htmlFor={`store-${store.id}`}
//   //                   className="form-check-label text-dark-emphasis fw-semibold me-3"
//   //                 >
//   //                   {store.name}
//   //                 </label>
//   //               </div>
//   //               <div className="fs-xs mb-2">
//   //                 {formatStoreAddress(store)}
//   //               </div>
//   //               {store.address.phone_number && (
//   //                 <div className="fs-xs mb-2">Phone: {store.address.phone_number}</div>
//   //               )}
//   //               <div className="fs-xs">
//   //                 Open:{" "}
//   //                 <span className="text-dark-emphasis fw-medium">
//   //                   {store.hours}
//   //                 </span>
//   //               </div>
//   //             </div>
//   //           </div>
//   //         ))}
//   //       </div>
//   //     </div>
//   //   </>
//   // );
//   // 
//   const renderStoreList = () => (
//     <>
//       <div className="collapse pickup-options show" id="pickupStoreOptions">
//         <div className="mt-n3">
//           {storeAddresses.map((address) => (
//             <div key={address.id} className="form-check border-bottom py-4 m-0">
//               <input
//                 type="radio"
//                 className="form-check-input"
//                 id={`store-${address.id}`}
//                 name="pickup-store"
//                 checked={selectedStoreId === address.id}
//                 onChange={() => setSelectedStoreId(address.id)}
//               />
//               <div>
//                 <div className="d-flex w-100 pb-2 mb-1">
//                   <label
//                     htmlFor={`store-${address.id}`}
//                     className="form-check-label text-dark-emphasis fw-semibold me-3"
//                   >
//                     {address.stores?.name || 'Store'}
//                   </label>
//                 </div>
//                 <div className="fs-xs mb-2">
//                   {address.street_address}, {address.city.name}, {address.zip_code}
//                 </div>
//                 {address.stores?.phone && (
//                   <div className="fs-xs mb-2">Phone: {address.stores.phone}</div>
//                 )}
//                 <div className="fs-xs">
//                   Open:{" "}
//                   <span className="text-dark-emphasis fw-medium">
//                     {address.stores?.hours || 'Mon-Sat 9am-6pm'}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );

//   return (
//     <>
//       <div
//         className="offcanvas offcanvas-end pb-sm-2 px-sm-2"
//         id="deliveryOptions"
//         tabIndex={-1}
//         aria-labelledby="deliveryOptionsLabel"
//         style={{ width: 500 }}
//       >
//         <div className="offcanvas-header flex-column align-items-start py-3 pt-lg-4">
//           <div className="d-flex align-items-center justify-content-between w-100 pb-xl-1 mb-4">
//             <h4 className="offcanvas-title" id="deliveryOptionsLabel">
//               Delivery Options
//             </h4>
//             <button
//               type="button"
//               className="btn-close"
//               data-bs-dismiss="offcanvas"
//               aria-label="Close"
//             />
//           </div>
//           <ul className="nav nav-pills nav-justified w-100" role="tablist">
//             <li className="nav-item" role="presentation">
//               <button
//                 type="button"
//                 className={`nav-link ${deliveryDetails.option === 'delivery' ? 'active' : ''}`}
//                 id="delivery-tab"
//                 data-bs-toggle="tab"
//                 data-bs-target="#delivery-tab-pane"
//                 role="tab"
//                 aria-controls="delivery-tab-pane"
//                 aria-selected={deliveryDetails.option === 'delivery'}
//               >
//                 <i className="ci-shopping-bag fs-base ms-n1 me-2" />
//                 Delivery
//               </button>
//             </li>
//             <li className="nav-item" role="presentation">
//               <button
//                 type="button"
//                 className={`nav-link ${deliveryDetails.option === 'pickup' ? 'active' : ''}`}
//                 id="pickup-tab"
//                 data-bs-toggle="tab"
//                 data-bs-target="#pickup-tab-pane"
//                 role="tab"
//                 aria-controls="pickup-tab-pane"
//                 aria-selected={deliveryDetails.option === 'pickup'}
//               >
//                 <i className="ci-box fs-base ms-n1 me-2" />
//                 Pickup
//               </button>
//             </li>
//           </ul>
//         </div>
        
//         <div className="offcanvas-body tab-content py-2 py-sm-3">
//           <div
//             className={`tab-pane fade ${deliveryDetails.option === 'delivery' ? 'show active' : ''}`}
//             id="delivery-tab-pane"
//             role="tabpanel"
//             aria-labelledby="delivery-tab"
//           >
//             {loading ? (
//               <div className="text-center py-4">
//                 <LoadingSpinner size='sm' />
//                 <p className="mt-2">Loading addresses...</p>
//               </div>
//             ) : error ? (
//               <div className="alert alert-danger">{error}</div>
//             ) : deliveryView === 'list' ? (
//               renderAddressList()
//             ) : (
//               renderAddressForm()
//             )}
//           </div>
          
//           <div
//             className={`tab-pane fade ${deliveryDetails.option === 'pickup' ? 'show active' : ''}`}
//             id="pickup-tab-pane"
//             role="tabpanel"
//             aria-labelledby="pickup-tab"
//           >
//             {storeLoading ? (
//               <div className="text-center py-4">
//                 <LoadingSpinner size='sm' />
//                 <p className="mt-2">Loading stores...</p>
//               </div>
//             ) : (
//               renderStoreList()
//             )}
//           </div>
//         </div>
        
//         <div className="offcanvas-header">
//           <button
//             type="button"
//             className="btn btn-lg btn-primary w-100 rounded-pill"
//             onClick={deliveryDetails.option === 'delivery' ? handleConfirmAddress : handleConfirmStore}
//             disabled={
//               (deliveryDetails.option === 'delivery' && !selectedAddressId) || 
//               (deliveryDetails.option === 'pickup' && !selectedStoreId)
//             }
//           >
//             Confirm Selection
//           </button>
//         </div>
//       </div>
      
//       {/* <DeliveryDateOffCanvas onSelect={handleScheduleSelect} /> */}
      
//     </>
//   );
// };

// export default DeliveryOptionsOffCanvas;

// // v4.3
// import React, { useState, useEffect, useCallback } from 'react';
// import { AxiosAddressesService } from '@/services/net/AxiosAddressesService';
// import { AxiosService } from '@/services/net/base/AxiosService';
// import DeliveryDateOffCanvas from './DeliveryDateOffCanvas';
// import { NotificationService } from '@/services/local/NotificationService';
// import { useUser } from '@/context/UserContext';
// import LoadingSpinner from '@/components/shared/LoadingSpinner';
// import AddressForm from './AddressForm';
// import { useDelivery } from '@/context/DeliveryContext';

// // State interface
// interface State {
//   id: number;
//   name: string;
//   country_id: number;
// }

// // City interface
// interface City {
//   id: number;
//   name: string;
//   state_id: number;
// }

// // Store interface
// interface Store {
//   id: number;
//   name: string;
//   phone: string;
//   hours: string;
//   address_id: number;
// }

// // Address interface
// interface Address {
//   id: number;
//   street_address: string;
//   city: {
//     id: number;
//     name: string;
//     state?: {
//       id: number;
//       name: string;
//       country?: {
//         id: number;
//         name: string;
//         code: string;
//       };
//     };
//   };
//   zip_code: string;
//   phone_number: string;
//   is_primary: boolean;
//   is_store: boolean; // Added to identify store addresses
//   stores?: Store;    // Added to store linked store data
// }

// const DeliveryOptionsOffCanvas = ({ onOptionSelect }: { onOptionSelect: (details: any) => void }) => {
  
//   const { user } = useUser();
//   const { deliveryDetails } = useDelivery();  
//   const [addresses, setAddresses] = useState<Address[]>([]);
//   const [selectedAddressId, setSelectedAddressId] = useState<number | null>(null);
//   const [selectedStoreId, setSelectedStoreId] = useState<number | null>(null);
//   const [deliveryView, setDeliveryView] = useState<'list' | 'add'>('list');
//   const [states, setStates] = useState<State[]>([]);
//   const [cities, setCities] = useState<City[]>([]);
//   const [countries, setCountries] = useState<{id: string; name: string}[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [savingAddress, setSavingAddress] = useState(false);
//   const [deletingAddress, setDeletingAddress] = useState<number | null>(null);
//   const [storeLoading, setStoreLoading] = useState(true);

//   // Filter addresses into user and store addresses
//   const userAddresses = addresses.filter(addr => !addr.is_store);
//   const storeAddresses = addresses.filter(addr => addr.is_store);

//   // Fetch user addresses and store addresses together
//   const fetchAddresses = useCallback(async () => {
//     try {
//       setLoading(true);
//       setStoreLoading(true);
      
//       const response = await AxiosAddressesService.fetchAll({
//         include_city: true,
//         include_state: true,
//         include_country: true,
//         include_store: true  // Ensure stores are included
//       });
      
//       setAddresses(response.data.addresses || []);
      
//       // Set primary user address as default delivery
//       const primaryAddress = response.data.addresses.find(
//         (addr: Address) => addr.is_primary && !addr.is_store
//       );
//       setSelectedAddressId(primaryAddress?.id || null);
      
//       // Set first store as default pickup
//       const firstStoreAddress = response.data.addresses.find(
//         (addr: Address) => addr.is_store
//       );
//       setSelectedStoreId(firstStoreAddress?.id || null);
      
//     } catch (err: any) {
//       const message = err.response?.data?.message || 'Failed to load addresses';
//       setError(message);
//       NotificationService.showDialog(message, 'danger');
//     } finally {
//       setLoading(false);
//       setStoreLoading(false);
//     }
//   }, []);

//   useEffect(() => {
//     fetchAddresses();
//   }, [user, fetchAddresses]);

//   // Fetch countries
//   const fetchCountries = useCallback(async () => {
//     try {
//       const response = await AxiosService.json.get('/countries');
//       setCountries(response.data.countries || []);
//     } catch (err: any) {
//       console.error('Country fetch error:', err);
//       NotificationService.showDialog('Failed to load countries', 'danger');
//     }
//   }, []);

//   useEffect(() => {
//     fetchCountries();
//   }, [fetchCountries]);

//   // Handle adding a new address
//   const handleAddAddress = async (addressData: any) => {
//     try {
//       setSavingAddress(true);
      
//       const newAddress = {
//         ...addressData,
//         is_primary: userAddresses.length === 0,
//         is_store: false  // Explicitly mark as user address
//       };
      
//       const response = await AxiosAddressesService.create(newAddress);
//       const updatedAddresses = [...addresses, response.data];
//       setAddresses(updatedAddresses);
//       setSelectedAddressId(response.data.id);
//       setDeliveryView('list');
      
//       NotificationService.showDialog('Address added successfully', 'success');
//     } catch (err: any) {
//       const message = err.response?.data?.error || 'Failed to add address';
//       setError(message);
//       NotificationService.showDialog(message, 'danger');
//     } finally {
//       setSavingAddress(false);
//     }
//   };

//   // Handle removing an address
//   const handleRemoveAddress = async (id: number) => {
//     if (!window.confirm('Are you sure you want to remove this address?')) return;
    
//     try {
//       setDeletingAddress(id);
//       await AxiosAddressesService.delete(id.toString());
      
//       const updatedAddresses = addresses.filter(addr => addr.id !== id);
//       setAddresses(updatedAddresses);
      
//       if (selectedAddressId === id) {
//         setSelectedAddressId(updatedAddresses[0]?.id || null);
//       }
      
//       NotificationService.showDialog('Address removed successfully', 'success');
//     } catch (err: any) {
//       const message = err.response?.data?.message || 'Failed to remove address';
//       setError(message);
//       NotificationService.showDialog(message, 'danger');
//     } finally {
//       setDeletingAddress(null);
//     }
//   };

//   // Handle confirming address selection for DELIVERY
//   const handleConfirmDelivery = () => {
//     const deliveryOptionsCanvas = document.getElementById('deliveryOptions');
//     const bsOffcanvas = window.bootstrap.Offcanvas.getInstance(deliveryOptionsCanvas!);
//     bsOffcanvas?.hide();
    
//     const address = userAddresses.find(addr => addr.id === selectedAddressId);
//     if (address) {
//       onOptionSelect({
//         address,
//         option: 'delivery',
//         type: 'user'
//       });
//     }
//   };

//   // Handle confirming store selection for PICKUP
//   const handleConfirmPickup = () => {
//     const deliveryOptionsCanvas = document.getElementById('deliveryOptions');
//     const bsOffcanvas = window.bootstrap.Offcanvas.getInstance(deliveryOptionsCanvas!);
//     bsOffcanvas?.hide();
    
//     const storeAddress = storeAddresses.find(addr => addr.id === selectedStoreId);
//     if (storeAddress && storeAddress.stores) {
//       onOptionSelect({
//         address: storeAddress,
//         store: storeAddress.stores,
//         option: 'pickup',
//         type: 'store'
//       });
//     }
//   };

//   // Format address for display
//   const formatAddress = (address: Address) => {
//     return `${address.street_address}, ${address.city.name}, ${address.zip_code}`;
//   };

//   // Render user address list for DELIVERY
//   const renderAddressList = () => (
//     <>
//       <div className="collapse delivery-address show" id="deliveryAddressOptions">
//         <div className="mt-n3">
//           {userAddresses.map((address) => (
//             <div key={address.id} className="form-check border-bottom py-4 m-0">
//               <input
//                 type="radio"
//                 className="form-check-input"
//                 id={`address-${address.id}`}
//                 name="delivery-address"
//                 checked={selectedAddressId === address.id}
//                 onChange={() => setSelectedAddressId(address.id)}
//                 disabled={deletingAddress === address.id}
//               />
//               <div className="d-flex w-100">
//                 <label
//                   htmlFor={`address-${address.id}`}
//                   className="form-check-label text-dark-emphasis me-3"
//                 >
//                   <div className="d-flex align-items-center">
//                     <span>{formatAddress(address)}</span>
//                     {address.is_primary && (
//                       <span className="badge bg-primary ms-2">Primary</span>
//                     )}
//                   </div>
//                   {address.phone_number && (
//                     <div className="text-muted">Phone: {address.phone_number}</div>
//                   )}
//                 </label>
//                 <button
//                   type="button"
//                   className="btn-close fs-sm ms-auto"
//                   aria-label="Remove"
//                   onClick={() => handleRemoveAddress(address.id)}
//                   disabled={deletingAddress === address.id}
//                 >
//                   {deletingAddress === address.id && (
//                     <span className="spinner-border spinner-border-sm" role="status" />
//                   )}
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="nav">
//         <button
//           className="nav-link animate-underline px-0 mt-4 border-0 bg-transparent"
//           onClick={() => setDeliveryView('add')}
//         >
//           <span className="animate-target">Add delivery address</span>
//           <i className="ci-plus fs-base ms-1" />
//         </button>
//       </div>
//     </>
//   );

//   // Render address form
//   const renderAddressForm = () => (
//     <AddressForm 
//       type="delivery" 
//       onSave={handleAddAddress}
//       onCancel={() => setDeliveryView('list')}
//       countries={countries}
//       states={states}
//       cities={cities}
//       user={user}
//     />
//   );

//   // Render store list for PICKUP
//   const renderStoreList = () => (
//     <>
//       <div className="collapse pickup-options show" id="pickupStoreOptions">
//         <div className="mt-n3">
//           {storeAddresses.map((address) => (
//             <div key={address.id} className="form-check border-bottom py-4 m-0">
//               <input
//                 type="radio"
//                 className="form-check-input"
//                 id={`store-${address.id}`}
//                 name="pickup-store"
//                 checked={selectedStoreId === address.id}
//                 onChange={() => setSelectedStoreId(address.id)}
//               />
//               <div>
//                 <div className="d-flex w-100 pb-2 mb-1">
//                   <label
//                     htmlFor={`store-${address.id}`}
//                     className="form-check-label text-dark-emphasis fw-semibold me-3"
//                   >
//                     {address.stores?.name || 'Store Location'}
//                   </label>
//                 </div>
//                 <div className="fs-xs mb-2">
//                   {formatAddress(address)}
//                 </div>
//                 {address.phone_number && (
//                   <div className="fs-xs mb-2">Phone: {address.phone_number}</div>
//                 )}
//                 {address.stores?.hours && (
//                   <div className="fs-xs">
//                     Hours:{" "}
//                     <span className="text-dark-emphasis fw-medium">
//                       {address.stores.hours}
//                     </span>
//                   </div>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );

//   return (
//     <>
//       <div
//         className="offcanvas offcanvas-end pb-sm-2 px-sm-2"
//         id="deliveryOptions"
//         tabIndex={-1}
//         aria-labelledby="deliveryOptionsLabel"
//         style={{ width: 500 }}
//       >
//         <div className="offcanvas-header flex-column align-items-start py-3 pt-lg-4">
//           <div className="d-flex align-items-center justify-content-between w-100 pb-xl-1 mb-4">
//             <h4 className="offcanvas-title" id="deliveryOptionsLabel">
//               Delivery Options
//             </h4>
//             <button
//               type="button"
//               className="btn-close"
//               data-bs-dismiss="offcanvas"
//               aria-label="Close"
//             />
//           </div>
//           <ul className="nav nav-pills nav-justified w-100" role="tablist">
//             <li className="nav-item" role="presentation">
//               <button
//                 type="button"
//                 className={`nav-link ${deliveryDetails.option === 'delivery' ? 'active' : ''}`}
//                 id="delivery-tab"
//                 data-bs-toggle="tab"
//                 data-bs-target="#delivery-tab-pane"
//                 role="tab"
//                 aria-controls="delivery-tab-pane"
//                 aria-selected={deliveryDetails.option === 'delivery'}
//               >
//                 <i className="ci-shopping-bag fs-base ms-n1 me-2" />
//                 Delivery
//               </button>
//             </li>
//             <li className="nav-item" role="presentation">
//               <button
//                 type="button"
//                 className={`nav-link ${deliveryDetails.option === 'pickup' ? 'active' : ''}`}
//                 id="pickup-tab"
//                 data-bs-toggle="tab"
//                 data-bs-target="#pickup-tab-pane"
//                 role="tab"
//                 aria-controls="pickup-tab-pane"
//                 aria-selected={deliveryDetails.option === 'pickup'}
//               >
//                 <i className="ci-box fs-base ms-n1 me-2" />
//                 Pickup
//               </button>
//             </li>
//           </ul>
//         </div>
        
//         <div className="offcanvas-body tab-content py-2 py-sm-3">
//           <div
//             className={`tab-pane fade ${deliveryDetails.option === 'delivery' ? 'show active' : ''}`}
//             id="delivery-tab-pane"
//             role="tabpanel"
//             aria-labelledby="delivery-tab"
//           >
//             {loading ? (
//               <div className="text-center py-4">
//                 <LoadingSpinner size='sm' />
//                 <p className="mt-2">Loading addresses...</p>
//               </div>
//             ) : error ? (
//               <div className="alert alert-danger">{error}</div>
//             ) : deliveryView === 'list' ? (
//               renderAddressList()
//             ) : (
//               renderAddressForm()
//             )}
//           </div>
          
//           <div
//             className={`tab-pane fade ${deliveryDetails.option === 'pickup' ? 'show active' : ''}`}
//             id="pickup-tab-pane"
//             role="tabpanel"
//             aria-labelledby="pickup-tab"
//           >
//             {storeLoading ? (
//               <div className="text-center py-4">
//                 <LoadingSpinner size='sm' />
//                 <p className="mt-2">Loading store locations...</p>
//               </div>
//             ) : storeAddresses.length === 0 ? (
//               <div className="alert alert-info">
//                 No pickup locations available
//               </div>
//             ) : (
//               renderStoreList()
//             )}
//           </div>
//         </div>
        
//         <div className="offcanvas-header">
//           <button
//             type="button"
//             className="btn btn-lg btn-primary w-100 rounded-pill"
//             onClick={deliveryDetails.option === 'delivery' ? handleConfirmDelivery : handleConfirmPickup}
//             disabled={
//               (deliveryDetails.option === 'delivery' && !selectedAddressId) || 
//               (deliveryDetails.option === 'pickup' && !selectedStoreId)
//             }
//           >
//             {deliveryDetails.option === 'delivery' 
//               ? 'Confirm Delivery Address' 
//               : 'Confirm Pickup Location'}
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default DeliveryOptionsOffCanvas;

// v4

// DeliveryOptionsOffCanvas - Enhanced with proper initialization and state management
import React, { useState, useEffect, useCallback } from 'react';
import { AxiosAddressesService } from '@/services/net/AxiosAddressesService';
import { AxiosService } from '@/services/net/base/AxiosService';
import { NotificationService } from '@/services/local/NotificationService';
import { useUser } from '@/context/UserContext';
import LoadingSpinner from '@/components/shared/LoadingSpinner';
import AddressForm from './AddressForm';

// Interfaces
interface State {
  id: number;
  name: string;
  country_id: number;
}

interface City {
  id: number;
  name: string;
  state_id: number;
}

interface Store {
  id: number;
  name: string;
  phone: string;
  hours: string;
  address_id: number;
}

interface Address {
  id: number;
  street_address: string;
  city: {
    id: number;
    name: string;
    state?: {
      id: number;
      name: string;
      country?: {
        id: number;
        name: string;
        code: string;
      };
    };
  };
  zip_code: string;
  phone_number: string;
  is_primary: boolean;
  is_store: boolean;
  stores?: Store;
}

interface DeliveryOptionsProps {
  onOptionSelect: (details: {
    address: Address;
    store?: Store;
    option: 'delivery' | 'pickup';
    type: 'user' | 'store';
  }) => void;
  currentOption: 'delivery' | 'pickup';
  selectedAddress?: Address | null;
  selectedStore?: Store | null;
}

const DeliveryOptionsOffCanvas: React.FC<DeliveryOptionsProps> = ({
  onOptionSelect,
  currentOption,
  selectedAddress,
  selectedStore
}) => {
  const { user } = useUser();
  
  // State management
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [selectedAddressId, setSelectedAddressId] = useState<number | null>(null);
  const [selectedStoreId, setSelectedStoreId] = useState<number | null>(null);
  const [activeOption, setActiveOption] = useState<'delivery' | 'pickup'>(currentOption);
  const [deliveryView, setDeliveryView] = useState<'list' | 'add'>('list');
  const [states, setStates] = useState<State[]>([]);
  const [cities, setCities] = useState<City[]>([]);
  const [countries, setCountries] = useState<{id: string; name: string}[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [savingAddress, setSavingAddress] = useState(false);
  const [deletingAddress, setDeletingAddress] = useState<number | null>(null);

  // Filter addresses
  const userAddresses = addresses.filter(addr => !addr.is_store);
  const storeAddresses = addresses.filter(addr => addr.is_store);

  // Initialize component state from props
  useEffect(() => {
    setActiveOption(currentOption);
    
    // Set selected IDs based on passed props
    if (selectedAddress) {
      if (selectedAddress.is_store) {
        setSelectedStoreId(selectedAddress.id);
      } else {
        setSelectedAddressId(selectedAddress.id);
      }
    }
  }, [currentOption, selectedAddress, selectedStore]);

  // Fetch addresses and stores
  const fetchAddresses = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await AxiosAddressesService.fetchAll({
        include_city: true,
        include_state: true,
        include_country: true,
        include_store: true
      });
      
      const fetchedAddresses = response.data.addresses || [];
      setAddresses(fetchedAddresses);
      
      // Initialize selections if not already set from props
      if (!selectedAddress) {
        // Set primary user address for delivery
        const primaryAddress = fetchedAddresses.find(
          (addr: Address) => addr.is_primary && !addr.is_store
        );
        const firstUserAddress = fetchedAddresses.find((addr: Address) => !addr.is_store);
        setSelectedAddressId(primaryAddress?.id || firstUserAddress?.id || null);
        
        // Set first store for pickup
        const firstStoreAddress = fetchedAddresses.find((addr: Address) => addr.is_store);
        setSelectedStoreId(firstStoreAddress?.id || null);
        
        // Auto-select initial option if addresses/stores are available
        if (currentOption === 'delivery' && (primaryAddress || firstUserAddress)) {
          // Initial delivery selection will be handled by the parent component
        } else if (currentOption === 'pickup' && firstStoreAddress) {
          // Initial pickup selection will be handled by the parent component
        }
      }
      
    } catch (err: any) {
      const message = err.response?.data?.error || 'Failed to load addresses';
      setError(message);
      console.error('Address fetch error:', err);
    } finally {
      setLoading(false);
    }
  }, [selectedAddress, currentOption]);

  // Fetch countries
  const fetchCountries = useCallback(async () => {
    try {
      const response = await AxiosService.json.get('/countries');
      setCountries(response.data.countries || []);
    } catch (err: any) {
      console.error('Country fetch error:', err);
    }
  }, []);

  useEffect(() => {
    fetchAddresses();
    fetchCountries();
  }, [fetchAddresses, fetchCountries]);

  // Handle tab change (delivery/pickup option change)
  const handleTabChange = (option: 'delivery' | 'pickup') => {
    setActiveOption(option);
    setDeliveryView('list'); // Reset to list view when switching tabs
  };

  // Handle adding a new address
  const handleAddAddress = async (addressData: any) => {
    try {
      setSavingAddress(true);
      
      const newAddress = {
        ...addressData,
        is_primary: userAddresses.length === 0,
        is_store: false
      };
      
      const response = await AxiosAddressesService.create(newAddress);
      const createdAddress = response.data;
      
      setAddresses(prev => [...prev, createdAddress]);
      setSelectedAddressId(createdAddress.id);
      setDeliveryView('list');
      
      NotificationService.showDialog('Address added successfully', 'success');
    } catch (err: any) {
      const message = err.response?.data?.error || 'Failed to add address';
      setError(message);
      NotificationService.showDialog(message, 'danger');
    } finally {
      setSavingAddress(false);
    }
  };

  // Handle removing an address
  const handleRemoveAddress = async (id: number) => {
    if (!window.confirm('Are you sure you want to remove this address?')) return;
    
    try {
      setDeletingAddress(id);
      await AxiosAddressesService.delete(id.toString());
      
      const updatedAddresses = addresses.filter(addr => addr.id !== id);
      setAddresses(updatedAddresses);
      
      // Update selection if deleted address was selected
      if (selectedAddressId === id) {
        const nextAddress = updatedAddresses.find(addr => !addr.is_store);
        setSelectedAddressId(nextAddress?.id || null);
      }
      
      NotificationService.showDialog('Address removed successfully', 'success');
    } catch (err: any) {
      const message = err.response?.data?.message || 'Failed to remove address';
      NotificationService.showDialog(message, 'danger');
    } finally {
      setDeletingAddress(null);
    }
  };

  // Handle confirming selection
  const handleConfirmSelection = () => {
    try {
      // Close the offcanvas
      const deliveryOptionsCanvas = document.getElementById('deliveryOptions');
      const bsOffcanvas = deliveryOptionsCanvas ? 
        (window as any).bootstrap?.Offcanvas?.getInstance(deliveryOptionsCanvas) : null;
      
      if (activeOption === 'delivery') {
        const address = userAddresses.find(addr => addr.id === selectedAddressId);
        if (!address) {
          NotificationService.showDialog('Please select a delivery address', 'warning');
          return;
        }
        
        onOptionSelect({
          address,
          option: 'delivery',
          type: 'user'
        });
      } else {
        const storeAddress = storeAddresses.find(addr => addr.id === selectedStoreId);
        if (!storeAddress || !storeAddress.stores) {
          NotificationService.showDialog('Please select a pickup location', 'warning');
          return;
        }
        
        onOptionSelect({
          address: storeAddress,
          store: storeAddress.stores,
          option: 'pickup',
          type: 'store'
        });
      }
      
      // Close offcanvas after successful selection
      bsOffcanvas?.hide();
      
    } catch (error) {
      console.error('Error confirming selection:', error);
      NotificationService.showDialog('Failed to confirm selection', 'danger');
    }
  };

  // Format address for display
  const formatAddress = (address: Address): string => {
    const parts = [
      address.street_address,
      address.city.name,
      address.zip_code
    ].filter(Boolean);
    
    return parts.join(', ');
  };

  // Check if confirm button should be enabled
  const canConfirm = (): boolean => {
    if (activeOption === 'delivery') {
      return selectedAddressId !== null && userAddresses.length > 0;
    } else {
      return selectedStoreId !== null && storeAddresses.length > 0;
    }
  };

  // Get button text
  const getButtonText = (): string => {
    if (savingAddress) return 'Saving...';
    
    if (activeOption === 'delivery') {
      return selectedAddressId ? 'Confirm Delivery Address' : 'Select Delivery Address';
    } else {
      return selectedStoreId ? 'Confirm Pickup Location' : 'Select Pickup Location';
    }
  };

  // Render user address list
  const renderAddressList = () => (
    <>
      <div className="collapse delivery-address show" id="deliveryAddressOptions">
        <div className="mt-n3">
          {userAddresses.length === 0 ? (
            <div className="text-center py-4">
              <p className="text-muted">No delivery addresses found</p>
              <button
                className="btn btn-outline-primary"
                onClick={() => setDeliveryView('add')}
              >
                Add your first address
              </button>
            </div>
          ) : (
            userAddresses.map((address) => (
              <div key={address.id} className="form-check border-bottom py-4 m-0">
                <input
                  type="radio"
                  className="form-check-input"
                  id={`address-${address.id}`}
                  name="delivery-address"
                  checked={selectedAddressId === address.id}
                  onChange={() => setSelectedAddressId(address.id)}
                  disabled={deletingAddress === address.id}
                />
                <div className="d-flex w-100">
                  <label
                    htmlFor={`address-${address.id}`}
                    className="form-check-label text-dark-emphasis me-3 flex-grow-1"
                  >
                    <div className="d-flex align-items-center">
                      <span>{formatAddress(address)}</span>
                      {address.is_primary && (
                        <span className="badge rounded bg-primary ms-2">Primary</span>
                      )}
                    </div>
                    {address.phone_number && (
                      <div className="text-muted small">Phone: {address.phone_number}</div>
                    )}
                  </label>
                  <button
                    type="button"
                    className="btn btn-smx ms-auto"
                    onClick={() => handleRemoveAddress(address.id)}
                    disabled={deletingAddress === address.id}
                    title="Remove address"
                  >
                    {deletingAddress === address.id ? (
                      <span className="spinner-border sm spinner-border-sm" role="status" />
                    ) : (
                      // <i className="ci-times fs-sm" />
                      <i className="ci-delete text-danger"></i>
                    )}
                  </button>

                </div>
              </div>
            ))
          )}
        </div>
      </div>
      
      {userAddresses.length > 0 && (
        <div className="nav mt-4">
          <button
            type="button"
            className="nav-link animate-underline px-0 border-0 bg-transparent text-primary"
            onClick={() => setDeliveryView('add')}
          >
            <span className="animate-target">Add new delivery address</span>
            <i className="ci-plus fs-base ms-1" />
          </button>
        </div>
      )}
    </>
  );

  // Render address form
  const renderAddressForm = () => (
    <AddressForm 
      type="delivery" 
      onSave={handleAddAddress}
      onCancel={() => setDeliveryView('list')}
      countries={countries}
      states={states}
      cities={cities}
      user={user}
      isLoading={savingAddress}
    />
  );

  // Render store list
  const renderStoreList = () => (
    <div className="collapse pickup-options show" id="pickupStoreOptions">
      <div className="mt-n3">
        {storeAddresses.length === 0 ? (
          <div className="text-center py-4">
            {/* <i className="ci-store-front text-muted mb-3" /> */}
            <i className="ci-shopping-cart text-muted mb-3"></i>
            <p className="text-muted">No pickup locations available at the moment</p>
            <small className="text-muted">Please check back later or contact support</small>
          </div>
        ) : (
          storeAddresses.map((address) => (
            <div key={address.id} className="form-check border-bottom py-4 m-0">
              <input
                type="radio"
                className="form-check-input"
                id={`store-${address.id}`}
                name="pickup-store"
                checked={selectedStoreId === address.id}
                onChange={() => setSelectedStoreId(address.id)}
              />
              <div className="flex-grow-1">
                <label
                  htmlFor={`store-${address.id}`}
                  className="form-check-label d-block cursor-pointer"
                >
                  <div className="d-flex align-items-start">
                    <div className="flex-grow-1">
                      <div className="fw-semibold mb-1">
                        {address.stores?.name || 'Store Location'}
                      </div>
                      <div className="fs-sm text-muted mb-2">
                        <i className="ci-map-pin me-1" />
                        {formatAddress(address)}
                      </div>
                      {address.stores?.phone && (
                        <div className="fs-sm text-muted mb-2">
                          <i className="ci-phone me-1" />
                          {address.stores.phone}
                        </div>
                      )}
                      {address.stores?.hours && (
                        <div className="fs-sm text-muted">
                          <i className="ci-clock me-1" />
                          Hours: <span className="text-dark-emphasis fw-medium">
                            {address.stores.hours}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </label>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );

  return (
    <div
      className="offcanvas offcanvas-end pb-sm-2 px-sm-2"
      id="deliveryOptions"
      tabIndex={-1}
      aria-labelledby="deliveryOptionsLabel"
      style={{ width: '500px', maxWidth: '90vw' }}
    >
      {/* Header */}
      <div className="offcanvas-header flex-column align-items-start py-3 pt-lg-4">
        <div className="d-flex align-items-center justify-content-between w-100 pb-xl-1 mb-4">
          <h4 className="offcanvas-title" id="deliveryOptionsLabel">
            Delivery Options
          </h4>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
        
        {/* Tab Navigation */}
        <ul className="nav nav-pills nav-justified w-100" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              type="button"
              className={`nav-link ${activeOption === 'delivery' ? 'active' : ''}`}
              id="delivery-tab"
              data-bs-toggle="tab"
              data-bs-target="#delivery-tab-pane"
              role="tab"
              aria-controls="delivery-tab-pane"
              aria-selected={activeOption === 'delivery'}
              onClick={() => handleTabChange('delivery')}
            >
              <i className="ci-shopping-bag fs-base ms-n1 me-2" />
              Delivery
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              type="button"
              className={`nav-link ${activeOption === 'pickup' ? 'active' : ''}`}
              id="pickup-tab"
              data-bs-toggle="tab"
              data-bs-target="#pickup-tab-pane"
              role="tab"
              aria-controls="pickup-tab-pane"
              aria-selected={activeOption === 'pickup'}
              onClick={() => handleTabChange('pickup')}
            >
              <i className="ci-box fs-base ms-n1 me-2" />
              Pickup
            </button>
          </li>
        </ul>
      </div>
      
      {/* Body */}
      <div className="offcanvas-body tab-content py-2 py-sm-3">
        {/* Delivery Tab */}
        <div className={`tab-pane fade ${activeOption === 'delivery' ? 'show active' : ''}`}
          id="delivery-tab-pane"
          role="tabpanel"
          aria-labelledby="delivery-tab"
        >
          {loading ? (
            <div className="text-center py-5">
              <LoadingSpinner size='sm' />
              <p className="mt-3 text-muted">Loading delivery addresses...</p>
            </div>
          ) : error ? (
            <div className="alert alert-danger" role="alert">
              <i className="ci-x-circle me-2" />
              {error}
              <button 
                className="btn btn-sm btn-outline-danger ms-2"
                onClick={fetchAddresses}
              >
                Retry
              </button>
            </div>
          ) : deliveryView === 'list' ? (
            renderAddressList()
          ) : (
            renderAddressForm()
          )}
        </div>
        
        {/* Pickup Tab */}
        <div
          className={`tab-pane fade ${activeOption === 'pickup' ? 'show active' : ''}`}
          id="pickup-tab-pane"
          role="tabpanel"
          aria-labelledby="pickup-tab"
        >
          {loading ? (
            <div className="text-center py-5">
              <LoadingSpinner size='sm' />
              <p className="mt-3 text-muted">Loading pickup locations...</p>
            </div>
          ) : (
            renderStoreList()
          )}
        </div>
      </div>
      
      {/* Footer */}
      <div className="offcanvas-footer border-top p-4">
        {deliveryView === 'add' ? (
          <div className="d-flex gap-2">
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={() => setDeliveryView('list')}
              disabled={savingAddress}
            >
              Cancel
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                // This will be handled by the AddressForm component
              }}
              disabled={savingAddress}
            >
              {savingAddress ? 'Saving...' : 'Save Address'}
            </button>
          </div>
        ) : (
          <button
            type="button"
            className="btn btn-primary w-100 rounded-pill"
            onClick={handleConfirmSelection}
            disabled={!canConfirm() || loading}
          >
            {loading ? (
              <>
                <LoadingSpinner size='sm' />
                Loading...
              </>
            ) : (  
              <>
                <i className={`ci-${activeOption === 'delivery' ? 'check' : 'box'} me-2`} />
                {getButtonText()}
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default DeliveryOptionsOffCanvas;