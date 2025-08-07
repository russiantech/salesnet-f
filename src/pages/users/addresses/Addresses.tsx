// import React from 'react'
// import NewAddess from './NewAddess'
// import Aside from '../shared/Aside'
// import { Link } from 'react-router-dom'
// // import Navigation from '../../../components/shared/Navigation'

// const Addresses = () => {
//   return (
//     <>
//       <div>
//           {/* Add new address modal */}
//           <NewAddess />

//             {/* <Navigation /> */}
            
//           {/* Page content */}
//           <main className="content-wrapper">
//             <div className="container py-5 mt-n2 mt-sm-0">
//               <div className="row pt-md-2 pt-lg-3 pb-sm-2 pb-md-3 pb-lg-4 pb-xl-5">
                
//                 {/* Sidebar navigation that turns into offcanvas on screens < 992px wide (lg breakpoint) */}
//                 <Aside />

//                 {/* Addresses content */}
//                 <div className="col-lg-9">
//                   <div className="ps-lg-3 ps-xl-0">
//                     {/* Page title */}
//                     <h1 className="h2 mb-1 mb-sm-2">Addresses</h1>
//                     {/* Primary shipping address */}
//                     <div className="border-bottom py-4">
//                       <div className="nav flex-nowrap align-items-center justify-content-between pb-1 mb-3">
//                         <div className="d-flex align-items-center gap-3 me-4">
//                           <h2 className="h6 mb-0">Shipping address</h2>
//                           <span className="badge text-bg-info rounded-pill">Primary</span>
//                         </div>
//                         <a className="nav-link hiding-collapse-toggle text-decoration-underline p-0 collapsed" href="#primaryAddressEdit" data-bs-toggle="collapse" aria-expanded="false" aria-controls="primaryAddressPreview primaryAddressEdit">Edit</a>
//                       </div>
//                       <div className="collapse primary-address show" id="primaryAddressPreview">
//                         <ul className="list-unstyled fs-sm m-0">
//                           <li>New York 11741, USA</li>
//                           <li>396 Lillian Bolavandy, Holbrook</li>
//                         </ul>
//                       </div>
//                       <div className="collapse primary-address" id="primaryAddressEdit">
//                         <form className="row g-3 g-sm-4 needs-validation" noValidate>
//                           <div className="col-sm-6">
//                             <div className="position-relative">
//                               <label className="form-label">Country</label>
//                               <select className="form-select" data-select="{&quot;searchEnabled&quot;: true}" aria-label="Select country" required>
//                                 <option value>Select country...</option>
//                                 <optgroup label="Africa">
//                                   <option value="Nigeria">Nigeria</option>
//                                   <option value="South Africa">South Africa</option>
//                                   <option value="Kenya">Kenya</option>
//                                   <option value="Egypt">Egypt</option>
//                                   <option value="Ethiopia">Ethiopia</option>
//                                 </optgroup>
//                                 <optgroup label="Asia">
//                                   <option value="China">China</option>
//                                   <option value="India">India</option>
//                                   <option value="Japan">Japan</option>
//                                   <option value="South Korea">South Korea</option>
//                                   <option value="Saudi Arabia">Saudi Arabia</option>
//                                 </optgroup>
//                                 <optgroup label="Europe">
//                                   <option value="Germany">Germany</option>
//                                   <option value="France">France</option>
//                                   <option value="United Kingdom">United Kingdom</option>
//                                   <option value="Italy">Italy</option>
//                                   <option value="Spain">Spain</option>
//                                 </optgroup>
//                                 <optgroup label="North America">
//                                   <option value="United States" selected>United States</option>
//                                   <option value="Canada">Canada</option>
//                                   <option value="Mexico">Mexico</option>
//                                   <option value="Jamaica">Jamaica</option>
//                                   <option value="Costa Rica">Costa Rica</option>
//                                 </optgroup>
//                                 <optgroup label="South America">
//                                   <option value="Brazil">Brazil</option>
//                                   <option value="Argentina">Argentina</option>
//                                   <option value="Colombia">Colombia</option>
//                                   <option value="Chile">Chile</option>
//                                   <option value="Peru">Peru</option>
//                                 </optgroup>
//                                 <optgroup label="Oceania">
//                                   <option value="Australia">Australia</option>
//                                   <option value="New Zealand">New Zealand</option>
//                                   <option value="Papua New Guinea">Papua New Guinea</option>
//                                   <option value="Fiji">Fiji</option>
//                                   <option value="Solomon Islands">Solomon Islands</option>
//                                 </optgroup>
//                               </select>
//                               <div className="invalid-feedback">Please select your country!</div>
//                             </div>
//                           </div>
//                           <div className="col-sm-6">
//                             <div className="position-relative">
//                               <label className="form-label">City</label>
//                               <select className="form-select" data-select="{&quot;searchEnabled&quot;: true}" aria-label="Select city" required>
//                                 <option value>Select city...</option>
//                                 <option value="Austin">Austin</option>
//                                 <option value="Charlotte">Charlotte</option>
//                                 <option value="Chicago">Chicago</option>
//                                 <option value="Columbus">Columbus</option>
//                                 <option value="Dallas">Dallas</option>
//                                 <option value="Houston">Houston</option>
//                                 <option value="Jacksonville">Jacksonville</option>
//                                 <option value="Los Angeles">Los Angeles</option>
//                                 <option value="New York" selected>New York</option>
//                                 <option value="Orlando">Orlando</option>
//                                 <option value="Philadelphia">Philadelphia</option>
//                                 <option value="Phoenix">Phoenix</option>
//                                 <option value="San Antonio">San Antonio</option>
//                                 <option value="San Diego">San Diego</option>
//                                 <option value="San Jose">San Jose</option>
//                               </select>
//                               <div className="invalid-feedback">Please select your city!</div>
//                             </div>
//                           </div>
//                           <div className="col-sm-4">
//                             <div className="position-relative">
//                               <label htmlFor="psa-zip" className="form-label">ZIP code</label>
//                               <input type="text" className="form-control" id="psa-zip" defaultValue={11741} required />
//                               <div className="invalid-feedback">Please enter your ZIP code!</div>
//                             </div>
//                           </div>
//                           <div className="col-sm-8">
//                             <div className="position-relative">
//                               <label htmlFor="psa-address" className="form-label">Address</label>
//                               <input type="text" className="form-control" id="psa-address" defaultValue="396 Lillian Bolavandy, Holbrook" required />
//                               <div className="invalid-feedback">Please enter your address!</div>
//                             </div>
//                           </div>
//                           <div className="col-12">
//                             <div className="form-check mb-0">
//                               <input type="checkbox" className="form-check-input" id="set-primary-1" defaultChecked />
//                               <label htmlFor="set-primary-1" className="form-check-label">Set as primary address</label>
//                             </div>
//                           </div>
//                           <div className="col-12">
//                             <div className="d-flex gap-3 pt-2 pt-sm-0">
//                               <button type="submit" className="btn btn-primary">Save changes</button>
//                               <button type="button" className="btn btn-secondary" data-bs-toggle="collapse" data-bs-target=".primary-address" aria-expanded="true" aria-controls="primaryAddressPreview primaryAddressEdit">Close</button>
//                             </div>
//                           </div>
//                         </form>
//                       </div>
//                     </div>
//                     {/* Alternative shipping address */}
//                     <div className="border-bottom py-4">
//                       <div className="nav flex-nowrap align-items-center justify-content-between pb-1 mb-3">
//                         <div className="d-flex align-items-center gap-3 me-4">
//                           <h2 className="h6 mb-0">Alternative shipping address</h2>
//                         </div>
//                         <a className="nav-link hiding-collapse-toggle text-decoration-underline p-0 collapsed" href="#alternativeAddressEdit" data-bs-toggle="collapse" aria-expanded="false" aria-controls="alternativeAddressPreview alternativeAddressEdit">Edit</a>
//                       </div>

//                       <div className="collapse alternative-address show" id="alternativeAddressPreview">
//                         <ul className="list-unstyled fs-sm m-0">
//                           <li>Florida 32806, USA</li>
//                           <li>514 S. Magnolia St., Orlando</li>
//                         </ul>
//                       </div>

//                       <div className="collapse alternative-address" id="alternativeAddressEdit">
//                         <form className="row g-3 g-sm-4 needs-validation" noValidate>
//                           <div className="col-sm-6">
//                             <div className="position-relative">
//                               <label className="form-label">Country</label>
//                               <select className="form-select" data-select="{&quot;searchEnabled&quot;: true}" aria-label="Select country" required>
//                                 <option value>Select country...</option>
//                                 <optgroup label="Africa">
//                                   <option value="Nigeria">Nigeria</option>
//                                   <option value="South Africa">South Africa</option>
//                                   <option value="Kenya">Kenya</option>
//                                   <option value="Egypt">Egypt</option>
//                                   <option value="Ethiopia">Ethiopia</option>
//                                 </optgroup>
//                                 <optgroup label="Asia">
//                                   <option value="China">China</option>
//                                   <option value="India">India</option>
//                                   <option value="Japan">Japan</option>
//                                   <option value="South Korea">South Korea</option>
//                                   <option value="Saudi Arabia">Saudi Arabia</option>
//                                 </optgroup>
//                                 <optgroup label="Europe">
//                                   <option value="Germany">Germany</option>
//                                   <option value="France">France</option>
//                                   <option value="United Kingdom">United Kingdom</option>
//                                   <option value="Italy">Italy</option>
//                                   <option value="Spain">Spain</option>
//                                 </optgroup>
//                                 <optgroup label="North America">
//                                   <option value="United States" selected>United States</option>
//                                   <option value="Canada">Canada</option>
//                                   <option value="Mexico">Mexico</option>
//                                   <option value="Jamaica">Jamaica</option>
//                                   <option value="Costa Rica">Costa Rica</option>
//                                 </optgroup>
//                                 <optgroup label="South America">
//                                   <option value="Brazil">Brazil</option>
//                                   <option value="Argentina">Argentina</option>
//                                   <option value="Colombia">Colombia</option>
//                                   <option value="Chile">Chile</option>
//                                   <option value="Peru">Peru</option>
//                                 </optgroup>
//                                 <optgroup label="Oceania">
//                                   <option value="Australia">Australia</option>
//                                   <option value="New Zealand">New Zealand</option>
//                                   <option value="Papua New Guinea">Papua New Guinea</option>
//                                   <option value="Fiji">Fiji</option>
//                                   <option value="Solomon Islands">Solomon Islands</option>
//                                 </optgroup>
//                               </select>
//                               <div className="invalid-feedback">Please select your country!</div>
//                             </div>
//                           </div>
//                           <div className="col-sm-6">
//                             <div className="position-relative">
//                               <label className="form-label">City</label>
//                               <select className="form-select" data-select="{&quot;searchEnabled&quot;: true}" aria-label="Select city" required>
//                                 <option value>Select city...</option>
//                                 <option value="Austin">Austin</option>
//                                 <option value="Charlotte">Charlotte</option>
//                                 <option value="Chicago">Chicago</option>
//                                 <option value="Columbus">Columbus</option>
//                                 <option value="Dallas">Dallas</option>
//                                 <option value="Houston">Houston</option>
//                                 <option value="Jacksonville">Jacksonville</option>
//                                 <option value="Los Angeles">Los Angeles</option>
//                                 <option value="New York">New York</option>
//                                 <option value="Orlando" selected>Orlando</option>
//                                 <option value="Philadelphia">Philadelphia</option>
//                                 <option value="Phoenix">Phoenix</option>
//                                 <option value="San Antonio">San Antonio</option>
//                                 <option value="San Diego">San Diego</option>
//                                 <option value="San Jose">San Jose</option>
//                               </select>
//                               <div className="invalid-feedback">Please select your city!</div>
//                             </div>
//                           </div>
//                           <div className="col-sm-4">
//                             <div className="position-relative">
//                               <label htmlFor="asa-zip" className="form-label">ZIP code</label>
//                               <input type="text" className="form-control" id="asa-zip" defaultValue={32806} required />
//                               <div className="invalid-feedback">Please enter your ZIP code!</div>
//                             </div>
//                           </div>
//                           <div className="col-sm-8">
//                             <div className="position-relative">
//                               <label htmlFor="asa-address" className="form-label">Address</label>
//                               <input type="text" className="form-control" id="asa-address" defaultValue="514 S. Magnolia St." required />
//                               <div className="invalid-feedback">Please enter your address!</div>
//                             </div>
//                           </div>
//                           <div className="col-12">
//                             <div className="form-check mb-0">
//                               <input type="checkbox" className="form-check-input" id="set-primary-2" />
//                               <label htmlFor="set-primary-2" className="form-check-label">Set as primary address</label>
//                             </div>
//                           </div>
//                           <div className="col-12">
//                             <div className="d-flex gap-3 pt-2 pt-sm-0">
//                               <button type="submit" className="btn btn-primary">Save changes</button>
//                               <button type="button" className="btn btn-secondary" data-bs-toggle="collapse" data-bs-target=".alternative-address" aria-expanded="true" aria-controls="alternativeAddressPreview alternativeAddressEdit">Close</button>
//                             </div>
//                           </div>
//                         </form>
//                       </div>
//                     </div>
//                     {/* Add address button */}
//                     <div className="nav pt-4">
//                       <Link className="nav-link animate-underline fs-base px-0" to="#newAddressModal" data-bs-toggle="modal">
//                         <i className="ci-plus fs-lg ms-n1 me-2" />
//                         <span className="animate-target">Add address</span>
//                       </Link>
//                     </div>
//                   </div>
//                 </div>

//               </div>
//             </div>
//           </main>
//         </div>
//     </>
//   )
// }

// export default Addresses

// 

// V2

// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import Aside from '../shared/Aside';
// import { AxiosAddressesService } from '@/services/net/AxiosAddressesService';
// import { AxiosService } from '@/services/net/base/AxiosService';
// import { useUser } from '@/context/UserContext';
// import { Address } from '@/services/net/AxiosAddressesService';

// interface Country {
//   id: number;
//   name: string;
// }

// interface State {
//   id: number;
//   name: string;
// }

// interface City {
//   id: number;
//   name: string;
//   state: State;
// }

// const Addresses = () => {
//   const { user } = useUser();
//   const [addresses, setAddresses] = useState<Address[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [editingAddressId, setEditingAddressId] = useState<number | null>(null);
//   const [isAddingNew, setIsAddingNew] = useState(false);
//   const [countries, setCountries] = useState<Country[]>([]);
//   const [states, setStates] = useState<State[]>([]);
//   const [cities, setCities] = useState<City[]>([]);


//   // console.log( countries, states, cities);

//   // Form states
//   const [formData, setFormData] = useState({
//     countryId: '',
//     stateId: '',
//     cityId: '',
//     zipCode: '',
//     streetAddress: '',
//     isPrimary: false
//   });

//   // Fetch addresses
//   useEffect(() => {
//     const fetchAddresses = async () => {
//       try {
//         setLoading(true);
//         // const response = await AxiosAddressesService.fetchAll();
//         const response = await AxiosAddressesService.fetchAll({
//           include_city: true,
//           include_state: true,
//           include_country: true,
//           include_user: true
//         });

//         // console.log(JSON.stringify(response)); 
//         setAddresses(response.data.addresses);

//       } catch (err) {
//         setError('Failed to load addresses');
//         console.error('Address fetch error:', err);

//       } finally {
//         setLoading(false);
//       }
//     };

//     if (user?.id) {
//       fetchAddresses();
//     }
//     fetchAddresses();
//   }, [user]);

//   // Fetch countries
//   useEffect(() => {
//     const fetchCountries = async () => {
//       try {
//         const response = await AxiosService.json.get('/countries');
//         setCountries(response.data.countries);
//       } catch (err) {
//         console.error('Country fetch error:', err);
//       }
//     };
    
//     fetchCountries();
//   }, []);

//   // Fetch states when country is selected
//   useEffect(() => {
//     if (formData.countryId) {
//       const fetchStates = async () => {
//         try {
//           const response = await AxiosService.json.get(`/states/${formData.countryId}/countries`);
//           setStates(response.data.states);
//         } catch (err) {
//           console.error('State fetch error:', err);
//         }
//       };
      
//       fetchStates();
//     }
//   }, [formData.countryId]);

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

//   const handleEditClick = (address: Address) => {
//     setEditingAddressId(address.id);
//     setFormData({
//       countryId: address.city.state.country.id.toString(),
//       stateId: address.city.state.id.toString(),
//       cityId: address.city.id.toString(),
//       zipCode: address.zip_code,
//       streetAddress: address.street_address,
//       isPrimary: address.is_primary
//     });
//   };

//   const handleCancelEdit = () => {
//     setEditingAddressId(null);
//     setIsAddingNew(false);
//     resetForm();
//   };

//   const resetForm = () => {
//     setFormData({
//       countryId: '',
//       stateId: '',
//       cityId: '',
//       zipCode: '',
//       streetAddress: '',
//       isPrimary: false
//     });
//   };

//   const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     const { name, value, type } = e.target;
//     const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : false;
    
//     setFormData(prev => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value
//     }));
//   };

//   const handleSubmit = async (e: React.FormEvent, addressId?: number) => {
//     e.preventDefault();
    
//     try {
//       const addressData = {
//         street_address: formData.streetAddress,
//         zip_code: formData.zipCode,
//         city_id: parseInt(formData.cityId),
//         is_primary: formData.isPrimary,
//         first_name: user?.name.split(' ')[0] || '',
//         last_name: user?.name.split(' ').slice(1).join(' ') || '',
//         phone_number: user?.phone || ''
//       };

//       if (addressId) {
//         // Update existing address
//         await AxiosAddressesService.update(addressId.toString(), addressData);
//       } else {
//         // Create new address
//         await AxiosAddressesService.create(addressData);
//       }

//       // Refresh addresses
//       const response = await AxiosAddressesService.fetchAll();
//       setAddresses(response.data.addresses);
//       handleCancelEdit();
//     } catch (err) {
//       setError('Failed to save address');
//       console.error('Address save error:', err);
//     }
//   };

//   const handleDelete = async (addressId: number) => {
//     if (window.confirm('Are you sure you want to delete this address?')) {
//       try {
//         await AxiosAddressesService.delete(addressId.toString());
//         const updatedAddresses = addresses.filter(addr => addr.id !== addressId);
//         setAddresses(updatedAddresses);
//       } catch (err) {
//         setError('Failed to delete address');
//         console.error('Address delete error:', err);
//       }
//     }
//   };

//   const handleSetPrimary = async (addressId: number) => {
//     try {
//       // Update all addresses to set is_primary to false
//       await Promise.all(addresses.map(async address => {
//         if (address.id !== addressId && address.is_primary) {
//           await AxiosAddressesService.update(address.id.toString(), { 
//             ...address, 
//             is_primary: false 
//           });
//         }
//       }));

//       // Set the selected address as primary
//       const address = addresses.find(a => a.id === addressId);
//       if (address) {
//         await AxiosAddressesService.update(addressId.toString(), { 
//           ...address, 
//           is_primary: true 
//         });
//       }

//       // Refresh addresses
//       const response = await AxiosAddressesService.fetchAll();
//       setAddresses(response.data.addresses);
//     } catch (err) {
//       setError('Failed to set primary address');
//       console.error('Set primary error:', err);
//     }
//   };

//   const formatAddress = (address: Address) => {
//     return `${address.street_address}, ${address.city.name}, ${address.zip_code}`;
//   };

//   return (
//     <div>
//       <main className="content-wrapper">
//         <div className="container py-5 mt-n2 mt-sm-0">
//           <div className="row pt-md-2 pt-lg-3 pb-sm-2 pb-md-3 pb-lg-4 pb-xl-5">
            
//             <Aside />
            
//             <div className="col-lg-9">
//               <div className="ps-lg-3 ps-xl-0">
//                 <h1 className="h2 mb-1 mb-sm-2">Addresses</h1>
                
//                 {error && (
//                   <div className="alert alert-danger alert-dismissible fade show" role="alert">
//                     {error}
//                     <button type="button" className="btn-close" onClick={() => setError(null)}></button>
//                   </div>
//                 )}
                
//                 {loading ? (
//                   <div className="text-center py-5">
//                     <div className="spinner-border text-primary" role="status">
//                       <span className="visually-hidden">Loading...</span>
//                     </div>
//                     <p className="mt-2">Loading addresses...</p>
//                   </div>
//                 ) : (
//                   <>
//                     {addresses.map((address) => (
//                       <div key={address.id} className="border-bottom py-4">
//                         <div className="nav flex-nowrap align-items-center justify-content-between pb-1 mb-3">
//                           <div className="d-flex align-items-center gap-3 me-4">
//                             <h2 className="h6 mb-0">
//                               {address.is_primary ? 'Primary Shipping Address' : 'Shipping Address'}
//                             </h2>
//                             {address.is_primary && (
//                               <span className="badge text-bg-info rounded-pill">Primary</span>
//                             )}
//                           </div>
//                           <div>
//                             {!address.is_primary && (
//                               <button 
//                                 className="btn btn-sm btn-outline-primary me-2"
//                                 onClick={() => handleSetPrimary(address.id)}
//                               >
//                                 Set as Primary
//                               </button>
//                             )}
//                             <button
//                               className="btn btn-sm btn-outline-secondary"
//                               onClick={() => handleEditClick(address)}
//                             >
//                             <i className="ci-edit-2 me-1"></i> edit
//                             </button>
//                           </div>
//                         </div>
                        
//                         <div className="fs-sm">
//                           <ul className="list-unstyled m-0">
//                             <li>{formatAddress(address)}</li>
//                             <li>{address?.state?.name}, {address?.country?.name}</li>
//                           </ul>
                          
//                           {editingAddressId === address.id && (
//                             <div className="mt-4">
//                               <form 
//                                 className="row g-3 g-sm-4" 
//                                 onSubmit={(e) => handleSubmit(e, address.id)}
//                               >
//                                 <div className="col-sm-6">
//                                   <label className="form-label">Country</label>
//                                   <select
//                                     className="form-select"
//                                     name="countryId"
//                                     value={formData.countryId}
//                                     onChange={handleFormChange}
//                                     required
//                                   >
//                                     <option value="">Select country...</option>
//                                     {countries.map(country => (
//                                       <option key={country.id} value={country.id}>
//                                         {country.name}
//                                       </option>
//                                     ))}
//                                   </select>
//                                 </div>
                                
//                                 <div className="col-sm-6">
//                                   <label className="form-label">State</label>
//                                   <select
//                                     className="form-select"
//                                     name="stateId"
//                                     value={formData.stateId}
//                                     onChange={handleFormChange}
//                                     disabled={!formData.countryId}
//                                     required
//                                   >
//                                     <option value="">Select state...</option>
//                                     {states.map(state => (
//                                       <option key={state.id} value={state.id}>
//                                         {state.name}
//                                       </option>
//                                     ))}
//                                   </select>
//                                 </div>
                                
//                                 <div className="col-sm-6">
//                                   <label className="form-label">City</label>
//                                   <select
//                                     className="form-select"
//                                     name="cityId"
//                                     value={formData.cityId}
//                                     onChange={handleFormChange}
//                                     disabled={!formData.stateId}
//                                     required
//                                   >
//                                     <option value="">Select city...</option>
//                                     {cities.map(city => (
//                                       <option key={city.id} value={city.id}>
//                                         {city.name}
//                                       </option>
//                                     ))}
//                                   </select>
//                                 </div>
                                
//                                 <div className="col-sm-6">
//                                   <label className="form-label">ZIP code</label>
//                                   <input
//                                     type="text"
//                                     className="form-control"
//                                     name="zipCode"
//                                     value={formData.zipCode}
//                                     onChange={handleFormChange}
//                                     required
//                                   />
//                                 </div>
                                
//                                 <div className="col-12">
//                                   <label className="form-label">Address</label>
//                                   <input
//                                     type="text"
//                                     className="form-control"
//                                     name="streetAddress"
//                                     value={formData.streetAddress}
//                                     onChange={handleFormChange}
//                                     required
//                                   />
//                                 </div>
                                
//                                 <div className="col-12">
//                                   <div className="form-check mb-0">
//                                     <input
//                                       type="checkbox"
//                                       className="form-check-input"
//                                       name="isPrimary"
//                                       checked={formData.isPrimary}
//                                       onChange={handleFormChange}
//                                       id={`set-primary-${address.id}`}
//                                     />
//                                     <label 
//                                       className="form-check-label" 
//                                       htmlFor={`set-primary-${address.id}`}
//                                     >
//                                       Set as primary address
//                                     </label>
//                                   </div>
//                                 </div>
                                
//                                 <div className="col-12">
//                                   <div className="d-flex gap-3 pt-2 pt-sm-0">
//                                     <button type="submit" className="btn btn-primary">
//                                       Save changes
//                                     </button>
//                                     <button 
//                                       type="button" 
//                                       className="btn btn-danger"
//                                       onClick={() => handleDelete(address.id)}
//                                     >
//                                       Delete
//                                     </button>
//                                     <button 
//                                       type="button" 
//                                       className="btn btn-secondary"
//                                       onClick={handleCancelEdit}
//                                     >
//                                       Cancel
//                                     </button>
//                                   </div>
//                                 </div>
//                               </form>
//                             </div>
//                           )}
//                         </div>
//                       </div>
//                     ))}
                    
//                     {addresses.length === 0 && !isAddingNew && (
//                       <div className="alert alert-info text-center py-4">
//                         <h3 className="h5">No addresses found</h3>
//                         <p className="mb-0">You haven't added any shipping addresses yet</p>
//                         <button 
//                           className="btn btn-primary mt-3"
//                           onClick={() => setIsAddingNew(true)}
//                         >
//                           Add Your First Address
//                         </button>
//                       </div>
//                     )}
                    
//                     {(isAddingNew || (addresses.length === 0 && isAddingNew)) && (
//                       <div className="border-top pt-4 mt-4">
//                         <h2 className="h5 mb-4">Add New Address</h2>
//                         <form 
//                           className="row g-3 g-sm-4" 
//                           onSubmit={(e) => handleSubmit(e)}
//                         >
//                           <div className="col-sm-6">
//                             <label className="form-label">Country</label>
//                             <select
//                               className="form-select"
//                               name="countryId"
//                               value={formData.countryId}
//                               onChange={handleFormChange}
//                               required
//                             >
//                               <option value="">Select country...</option>
//                               {countries.map(country => (
//                                 <option key={country.id} value={country.id}>
//                                   {country.name}
//                                 </option>
//                               ))}
//                             </select>
//                           </div>
                          
//                           <div className="col-sm-6">
//                             <label className="form-label">State</label>
//                             <select
//                               className="form-select"
//                               name="stateId"
//                               value={formData.stateId}
//                               onChange={handleFormChange}
//                               disabled={!formData.countryId}
//                               required
//                             >
//                               <option value="">Select state...</option>
//                               {states.map(state => (
//                                 <option key={state.id} value={state.id}>
//                                   {state.name}
//                                 </option>
//                               ))}
//                             </select>
//                           </div>
                          
//                           <div className="col-sm-6">
//                             <label className="form-label">City</label>
//                             <select
//                               className="form-select"
//                               name="cityId"
//                               value={formData.cityId}
//                               onChange={handleFormChange}
//                               disabled={!formData.stateId}
//                               required
//                             >
//                               <option value="">Select city...</option>
//                               {cities.map(city => (
//                                 <option key={city.id} value={city.id}>
//                                   {city.name}
//                                 </option>
//                               ))}
//                             </select>
//                           </div>
                          
//                           <div className="col-sm-6">
//                             <label className="form-label">ZIP code</label>
//                             <input
//                               type="text"
//                               className="form-control"
//                               name="zipCode"
//                               value={formData.zipCode}
//                               onChange={handleFormChange}
//                               required
//                             />
//                           </div>
                          
//                           <div className="col-12">
//                             <label className="form-label">Address</label>
//                             <input
//                               type="text"
//                               className="form-control"
//                               name="streetAddress"
//                               value={formData.streetAddress}
//                               onChange={handleFormChange}
//                               required
//                             />
//                           </div>
                          
//                           <div className="col-12">
//                             <div className="form-check mb-0">
//                               <input
//                                 type="checkbox"
//                                 className="form-check-input"
//                                 name="isPrimary"
//                                 checked={formData.isPrimary}
//                                 onChange={handleFormChange}
//                                 id="set-primary-new"
//                               />
//                               <label 
//                                 className="form-check-label" 
//                                 htmlFor="set-primary-new"
//                               >
//                                 Set as primary address
//                               </label>
//                             </div>
//                           </div>
                          
//                           <div className="col-12">
//                             <div className="d-flex gap-3 pt-2 pt-sm-0">
//                               <button type="submit" className="btn btn-primary">
//                                 Save Address
//                               </button>
//                               <button 
//                                 type="button" 
//                                 className="btn btn-secondary"
//                                 onClick={handleCancelEdit}
//                               >
//                                 Cancel
//                               </button>
//                             </div>
//                           </div>
//                         </form>
//                       </div>
//                     )}
                    
//                     {!isAddingNew && addresses.length > 0 && (
//                       <div className="nav pt-4">
//                         <button
//                           className="nav-link animate-underline fs-base px-0"
//                           onClick={() => setIsAddingNew(true)}
//                         >
//                           <i className="ci-plus fs-lg ms-n1 me-2" />
//                           <span className="animate-target">Add address</span>
//                         </button>
//                       </div>
//                     )}
//                   </>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Addresses;

// v3
// import React, { useState, useEffect, useCallback } from 'react';
// import { Link } from 'react-router-dom';
// import Aside from '../shared/Aside';
// import { AxiosAddressesService } from '@/services/net/AxiosAddressesService';
// import { AxiosService } from '@/services/net/base/AxiosService';
// import { useUser } from '@/context/UserContext';
// import { Address } from '@/services/net/AxiosAddressesService';
// // import NotificationService from '@/services/local/NotificationService';
// import Select from 'react-select';
// import LoadingSpinner from '@/components/shared/LoadingSpinner';
// import debounce from 'lodash/debounce';
// import { NotificationService } from '@/services/local/NotificationService';

// interface Country {
//   id: number;
//   name: string;
// }

// interface State {
//   id: number;
//   name: string;
// }

// interface City {
//   id: number;
//   name: string;
// }

// const Addresses = () => {
//   const { user } = useUser();
//   const [addresses, setAddresses] = useState<Address[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [editingAddressId, setEditingAddressId] = useState<number | null>(null);
//   const [isAddingNew, setIsAddingNew] = useState(false);
//   const [countries, setCountries] = useState<Country[]>([]);
//   const [states, setStates] = useState<State[]>([]);
//   const [cities, setCities] = useState<City[]>([]);

//   // Form states
//   const [formData, setFormData] = useState({
//     countryId: '',
//     stateId: '',
//     cityId: '',
//     zipCode: '',
//     streetAddress: '',
//     isPrimary: false
//   });

//   // Fetch addresses
//   const fetchAddresses = useCallback(async () => {
//     try {
//       setLoading(true);
//       const response = await AxiosAddressesService.fetchAll({
//         include_city: true,
//         include_state: true,
//         include_country: true,
//         include_user: true
//       });
//       setAddresses(response.data.addresses);
//     } catch (err: any) {
//       const message = err.response?.data?.message || 'Failed to load addresses';
//       NotificationService.showDialog(message, 'danger');
//     } finally {
//       setLoading(false);
//     }
//   }, []);

   
//   // Fetch countries with debounced search
//   const fetchCountries = useCallback(debounce(async (search = '') => {
//     try {
//       const response = await AxiosService.json.get(`/countries?search=${search}&page_size=100`
//       );
//       setCountries(response.data.countries || []);
//     } catch (err: any) {
//       const message = err.response?.data?.message || 'Failed to load countries';
//       NotificationService.showDialog(message, 'danger');
//     }
//   }, 300), []);

//   useEffect(() => {
//     fetchCountries();
//     return () => fetchCountries.cancel();
//   }, [fetchCountries]);

//   // Fetch states with debounced search
//   const fetchStates = useCallback(debounce(async (countryId: string, search = '') => {
//     if (!countryId) return;
//     try {
//       const response = await AxiosService.json.get(
//         `/states/${countryId}/countries?search=${search}&page_size=100`
//       );
//       setStates(response.data.states || []);
//     } catch (err: any) {
//       const message = err.response?.data?.message || 'Failed to load states';
//       NotificationService.showDialog(message, 'danger');
//     }
//   }, 300), []);

//   useEffect(() => {
//     if (formData.countryId) {
//       fetchStates(formData.countryId);
//     }
//     return () => fetchStates.cancel();
//   }, [formData.countryId, fetchStates]);

//   // Fetch cities with debounced search
//   const fetchCities = useCallback(debounce(async (stateId: string, search = '') => {
//     if (!stateId) return;
//     try {
//       const response = await AxiosService.json.get(
//         `/cities/${stateId}/states?search=${search}&page_size=100`
//       );
//       setCities(response.data.cities || []);
//     } catch (err: any) {
//       const message = err.response?.data?.message || 'Failed to load cities';
//       NotificationService.showDialog(message, 'danger');
//     }
//   }, 300), []);

//   useEffect(() => {
//     if (formData.stateId) {
//       fetchCities(formData.stateId);
//     }
//     return () => fetchCities.cancel();
//   }, [formData.stateId, fetchCities]);

//   const handleEditClick = (address: Address) => {
//     setEditingAddressId(address.id);
//     setFormData({
//       countryId: address.city?.state?.country?.id?.toString() || '',
//       stateId: address.city?.state?.id?.toString() || '',
//       cityId: address.city?.id?.toString() || '',
//       zipCode: address.zip_code,
//       streetAddress: address.street_address,
//       isPrimary: address.is_primary
//     });
//   };

//   const handleCancelEdit = () => {
//     setEditingAddressId(null);
//     setIsAddingNew(false);
//     resetForm();
//   };

//   const resetForm = () => {
//     setFormData({
//       countryId: '',
//       stateId: '',
//       cityId: '',
//       zipCode: '',
//       streetAddress: '',
//       isPrimary: false
//     });
//   };

//   const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value, type } = e.target;
//     const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : false;
    
//     setFormData(prev => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value
//     }));
//   };

//   const handleSelectChange = (name: string, value: any) => {
//     setFormData(prev => ({
//       ...prev,
//       [name]: value?.value || ''
//     }));
//   };

//   const handleSubmit = async (e: React.FormEvent, addressId?: number) => {
//     e.preventDefault();
    
//     try {
//       // Construct address data matching backend schema
//       const addressData = {
//         street_address: formData.streetAddress,
//         zip_code: formData.zipCode,
//         city_id: parseInt(formData.cityId),
//         is_primary: formData.isPrimary,
//         first_name: user?.name.split(' ')[0] || '',
//         last_name: user?.name.split(' ').slice(1).join(' ') || '',
//         phone_number: user?.phone || ''
//       };

//       let message = '';
//       if (addressId) {
//         // Update existing address
//         await AxiosAddressesService.update(addressId.toString(), addressData);
//         message = 'Address updated successfully';
//       } else {
//         // Create new address
//         await AxiosAddressesService.create(addressData);
//         message = 'Address created successfully';
//       }

//       // Refresh addresses
//       await fetchAddresses();
      
//       // Handle primary address logic
//       if (formData.isPrimary) {
//         await handleSetPrimary(addressId || addresses[addresses.length - 1]?.id);
//       }

//       handleCancelEdit();
//       NotificationService.showDialog(message, 'success');
//     } catch (err: any) {
//       const message = err.response?.data?.message || 'Failed to save address';
//       NotificationService.showDialog(message, 'danger');
//     }
//   };

//   const handleDelete = async (addressId: number) => {
//     if (window.confirm('Are you sure you want to delete this address?')) {
//       try {
//         await AxiosAddressesService.delete(addressId.toString());
//         const updatedAddresses = addresses.filter(addr => addr.id !== addressId);
//         setAddresses(updatedAddresses);
//         NotificationService.showDialog('Address deleted successfully', 'success');
//       } catch (err: any) {
//         const message = err.response?.data?.message || 'Failed to delete address';
//         NotificationService.showDialog(message, 'danger');
//       }
//     }
//   };

//   const handleSetPrimary = async (addressId: number) => {
//     try {
//       // Update all addresses to set is_primary to false
//       await Promise.all(addresses.map(async address => {
//         if (address.id !== addressId && address.is_primary) {
//           await AxiosAddressesService.update(address.id.toString(), { 
//             ...address, 
//             is_primary: false 
//           });
//         }
//       }));

//       // Set the selected address as primary
//       const address = addresses.find(a => a.id === addressId);
//       if (address) {
//         await AxiosAddressesService.update(addressId.toString(), { 
//           ...address, 
//           is_primary: true 
//         });
        
//         // Refresh addresses
//         await fetchAddresses();
//         NotificationService.showDialog('Primary address updated successfully', 'success');
//       }
//     } catch (err: any) {
//       const message = err.response?.data?.message || 'Failed to set primary address';
//       NotificationService.showDialog(message, 'danger');
//     }
//   };

//   const formatAddress = (address: Address) => {
//     return `${address.street_address}, ${address.city?.name || ''}, ${address.zip_code}`;
//   };

//   // Prepare options for react-select
//   const countryOptions = countries.map(c => ({ 
//     value: c.id.toString(), 
//     label: c.name 
//   }));

//   const stateOptions = states.map(s => ({ 
//     value: s.id.toString(), 
//     label: s.name 
//   }));

//   const cityOptions = cities.map(c => ({ 
//     value: c.id.toString(), 
//     label: c.name 
//   }));

//   // Find current selections for react-select
//   const selectedCountry = countryOptions.find(o => o.value === formData.countryId);
//   const selectedState = stateOptions.find(o => o.value === formData.stateId);
//   const selectedCity = cityOptions.find(o => o.value === formData.cityId);

//   return (
//     <div>
//       <main className="content-wrapper">
//         <div className="container py-5 mt-n2 mt-sm-0">
//           <div className="row pt-md-2 pt-lg-3 pb-sm-2 pb-md-3 pb-lg-4 pb-xl-5">
            
//             <Aside />
            
//             <div className="col-lg-9">
//               <div className="ps-lg-3 ps-xl-0">
//                 <h1 className="h2 mb-1 mb-sm-2">Addresses</h1>
                
//                 {loading ? (
//                   <div className="text-center py-5">
//                     <LoadingSpinner />
//                     <p className="mt-2">Loading addresses...</p>
//                   </div>
//                 ) : (
//                   <>
//                     {addresses.map((address) => (
//                       <div key={address.id} className="border-bottom py-4">
//                         <div className="nav flex-nowrap align-items-center justify-content-between pb-1 mb-3">
//                           <div className="d-flex align-items-center gap-3 me-4">
//                             <h2 className="h6 mb-0">
//                               {address.is_primary ? 'Primary Shipping Address' : 'Shipping Address'}
//                             </h2>
//                             {address.is_primary && (
//                               <span className="badge text-bg-info rounded-pill">Primary</span>
//                             )}
//                           </div>
//                           <div>
//                             {!address.is_primary && (
//                               <button 
//                                 className="btn btn-sm btn-outline-primary me-2"
//                                 onClick={() => handleSetPrimary(address.id)}
//                               >
//                                 Set as Primary
//                               </button>
//                             )}
//                             <button
//                               className="btn btn-sm btn-outline-secondary"
//                               onClick={() => handleEditClick(address)}
//                             >
//                               <i className="ci-edit-2 me-1"></i> Edit
//                             </button>
//                           </div>
//                         </div>
                        
//                         <div className="fs-sm">
//                           <ul className="list-unstyled m-0">
//                             <li>{formatAddress(address)}</li>
//                             {address.city?.state?.name && address.city?.state?.country?.name && (
//                               <li>{address.city.state.name}, {address.city.state.country.name}</li>
//                             )}
//                           </ul>
                          
//                           {editingAddressId === address.id && (
//                             <div className="mt-4">
//                               <form 
//                                 className="row g-3 g-sm-4" 
//                                 onSubmit={(e) => handleSubmit(e, address.id)}
//                               >
//                                 <div className="col-sm-6">
//                                   <label className="form-label">Country</label>
//                                   <Select
//                                     className="basic-single"
//                                     classNamePrefix="select"
//                                     name="countryId"
//                                     value={selectedCountry}
//                                     onChange={(option) => handleSelectChange('countryId', option)}
//                                     options={countryOptions}
//                                     placeholder="Select country..."
//                                     isSearchable
//                                     onInputChange={(value) => fetchCountries(value)}
//                                     required
//                                   />
//                                 </div>
                                
//                                 <div className="col-sm-6">
//                                   <label className="form-label">State</label>
//                                   <Select
//                                     className="basic-single"
//                                     classNamePrefix="select"
//                                     name="stateId"
//                                     value={selectedState}
//                                     onChange={(option) => handleSelectChange('stateId', option)}
//                                     options={stateOptions}
//                                     placeholder="Select state..."
//                                     isDisabled={!formData.countryId}
//                                     isSearchable
//                                     onInputChange={(value) => fetchStates(formData.countryId, value)}
//                                     required
//                                   />
//                                 </div>
                                
//                                 <div className="col-sm-6">
//                                   <label className="form-label">City</label>
//                                   <Select
//                                     className="basic-single"
//                                     classNamePrefix="select"
//                                     name="cityId"
//                                     value={selectedCity}
//                                     onChange={(option) => handleSelectChange('cityId', option)}
//                                     options={cityOptions}
//                                     placeholder="Select city..."
//                                     isDisabled={!formData.stateId}
//                                     isSearchable
//                                     onInputChange={(value) => fetchCities(formData.stateId, value)}
//                                     required
//                                   />
//                                 </div>
                                
//                                 <div className="col-sm-6">
//                                   <label className="form-label">ZIP code</label>
//                                   <input
//                                     type="text"
//                                     className="form-control"
//                                     name="zipCode"
//                                     value={formData.zipCode}
//                                     onChange={handleFormChange}
//                                     required
//                                   />
//                                 </div>
                                
//                                 <div className="col-12">
//                                   <label className="form-label">Address</label>
//                                   <input
//                                     type="text"
//                                     className="form-control"
//                                     name="streetAddress"
//                                     value={formData.streetAddress}
//                                     onChange={handleFormChange}
//                                     required
//                                   />
//                                 </div>
                                
//                                 <div className="col-12">
//                                   <div className="form-check mb-0">
//                                     <input
//                                       type="checkbox"
//                                       className="form-check-input"
//                                       name="isPrimary"
//                                       checked={formData.isPrimary}
//                                       onChange={handleFormChange}
//                                       id={`set-primary-${address.id}`}
//                                     />
//                                     <label 
//                                       className="form-check-label" 
//                                       htmlFor={`set-primary-${address.id}`}
//                                     >
//                                       Set as primary address
//                                     </label>
//                                   </div>
//                                 </div>
                                
//                                 <div className="col-12">
//                                   <div className="d-flex gap-3 pt-2 pt-sm-0">
//                                     <button type="submit" className="btn btn-primary">
//                                       Save changes
//                                     </button>
//                                     <button 
//                                       type="button" 
//                                       className="btn btn-danger"
//                                       onClick={() => handleDelete(address.id)}
//                                     >
//                                       Delete
//                                     </button>
//                                     <button 
//                                       type="button" 
//                                       className="btn btn-secondary"
//                                       onClick={handleCancelEdit}
//                                     >
//                                       Cancel
//                                     </button>
//                                   </div>
//                                 </div>
//                               </form>
//                             </div>
//                           )}
//                         </div>
//                       </div>
//                     ))}
                    
//                     {addresses.length === 0 && !isAddingNew && (
//                       <div className="alert alert-info text-center py-4">
//                         <h3 className="h5">No addresses found</h3>
//                         <p className="mb-0">You haven't added any shipping addresses yet</p>
//                         <button 
//                           className="btn btn-primary mt-3"
//                           onClick={() => setIsAddingNew(true)}
//                         >
//                           Add Your First Address
//                         </button>
//                       </div>
//                     )}
                    
//                     {(isAddingNew || (addresses.length === 0 && isAddingNew)) && (
//                       <div className="border-top pt-4 mt-4">
//                         <h2 className="h5 mb-4">Add New Address</h2>
//                         <form 
//                           className="row g-3 g-sm-4" 
//                           onSubmit={(e) => handleSubmit(e)}
//                         >
//                           <div className="col-sm-6">
//                             <label className="form-label">Country</label>
//                             <Select
//                               className="basic-single"
//                               classNamePrefix="select"
//                               name="countryId"
//                               value={selectedCountry}
//                               onChange={(option) => handleSelectChange('countryId', option)}
//                               options={countryOptions}
//                               placeholder="Select country..."
//                               isSearchable
//                               onInputChange={(value) => fetchCountries(value)}
//                               required
//                             />
//                           </div>
                          
//                           <div className="col-sm-6">
//                             <label className="form-label">State</label>
//                             <Select
//                               className="basic-single"
//                               classNamePrefix="select"
//                               name="stateId"
//                               value={selectedState}
//                               onChange={(option) => handleSelectChange('stateId', option)}
//                               options={stateOptions}
//                               placeholder="Select state..."
//                               isDisabled={!formData.countryId}
//                               isSearchable
//                               onInputChange={(value) => fetchStates(formData.countryId, value)}
//                               required
//                             />
//                           </div>
                          
//                           <div className="col-sm-6">
//                             <label className="form-label">City</label>
//                             <Select
//                               className="basic-single"
//                               classNamePrefix="select"
//                               name="cityId"
//                               value={selectedCity}
//                               onChange={(option) => handleSelectChange('cityId', option)}
//                               options={cityOptions}
//                               placeholder="Select city..."
//                               isDisabled={!formData.stateId}
//                               isSearchable
//                               onInputChange={(value) => fetchCities(formData.stateId, value)}
//                               required
//                             />
//                           </div>
                          
//                           <div className="col-sm-6">
//                             <label className="form-label">ZIP code</label>
//                             <input
//                               type="text"
//                               className="form-control"
//                               name="zipCode"
//                               value={formData.zipCode}
//                               onChange={handleFormChange}
//                               required
//                             />
//                           </div>
                          
//                           <div className="col-12">
//                             <label className="form-label">Address</label>
//                             <input
//                               type="text"
//                               className="form-control"
//                               name="streetAddress"
//                               value={formData.streetAddress}
//                               onChange={handleFormChange}
//                               required
//                             />
//                           </div>
                          
//                           <div className="col-12">
//                             <div className="form-check mb-0">
//                               <input
//                                 type="checkbox"
//                                 className="form-check-input"
//                                 name="isPrimary"
//                                 checked={formData.isPrimary}
//                                 onChange={handleFormChange}
//                                 id="set-primary-new"
//                               />
//                               <label 
//                                 className="form-check-label" 
//                                 htmlFor="set-primary-new"
//                               >
//                                 Set as primary address
//                               </label>
//                             </div>
//                           </div>
                          
//                           <div className="col-12">
//                             <div className="d-flex gap-3 pt-2 pt-sm-0">
//                               <button type="submit" className="btn btn-primary">
//                                 Save Address
//                               </button>
//                               <button 
//                                 type="button" 
//                                 className="btn btn-secondary"
//                                 onClick={handleCancelEdit}
//                               >
//                                 Cancel
//                               </button>
//                             </div>
//                           </div>
//                         </form>
//                       </div>
//                     )}
                    
//                     {!isAddingNew && addresses.length > 0 && (
//                       <div className="nav pt-4">
//                         <button
//                           className="nav-link animate-underline fs-base px-0"
//                           onClick={() => setIsAddingNew(true)}
//                         >
//                           <i className="ci-plus fs-lg ms-n1 me-2" />
//                           <span className="animate-target">Add address</span>
//                         </button>
//                       </div>
//                     )}
//                   </>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Addresses;

// 
// V4
// import React, { useState, useEffect, useCallback } from 'react';
// import { Link } from 'react-router-dom';
// import Aside from '../shared/Aside';
// import { AxiosAddressesService } from '@/services/net/AxiosAddressesService';
// import { AxiosService } from '@/services/net/base/AxiosService';
// import { useUser } from '@/context/UserContext';
// import { Address } from '@/services/net/AxiosAddressesService';
// import Select from 'react-select';
// import LoadingSpinner from '@/components/shared/LoadingSpinner';
// import debounce from 'lodash/debounce';
// import { NotificationService } from '@/services/local/NotificationService';

// interface Country {
//   id: number;
//   name: string;
// }

// interface State {
//   id: number;
//   name: string;
// }

// interface City {
//   id: number;
//   name: string;
// }

// const Addresses = () => {
//   const { user } = useUser();
//   const [addresses, setAddresses] = useState<Address[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [editingAddressId, setEditingAddressId] = useState<number | null>(null);
//   const [isAddingNew, setIsAddingNew] = useState(false);
//   const [countries, setCountries] = useState<Country[]>([]);
//   const [states, setStates] = useState<State[]>([]);
//   const [cities, setCities] = useState<City[]>([]);

//   // Form states
//   const [formData, setFormData] = useState({
//     countryId: '',
//     stateId: '',
//     cityId: '',
//     zipCode: '',
//     streetAddress: '',
//     isPrimary: false
//   });

//   // Properly memoized fetchAddresses
//   const fetchAddresses = useCallback(async () => {
//     try {
//       setLoading(true);
//       const response = await AxiosAddressesService.fetchAll({
//         include_city: true,
//         include_state: true,
//         include_country: true,
//         include_user: true
//       });
//       setAddresses(response.data.addresses || []);
//     } catch (err: any) {
//       const message = err.response?.data?.message || 'Failed to load addresses';
//       NotificationService.showDialog(message, 'danger');
//     } finally {
//       setLoading(false);
//     }
//   }, []); // No dependencies since it doesn't use any external variables

//   useEffect(() => {
//     if (user?.id) {
//       fetchAddresses();
//     }
//     fetchAddresses();
//   }, [user, fetchAddresses]); // Now safe because fetchAddresses is memoized

//   // Fetch countries with debounced search
//   const fetchCountries = useCallback(debounce(async (search = '') => {
//     try {
//       const response = await AxiosService.json.get(
//         `/countries?search=${search}&page_size=100`
//       );
//       setCountries(response.data?.countries || []);
//     } catch (err: any) {
//       const message = err.response?.data?.message || 'Failed to load countries';
//       NotificationService.showDialog(message, 'danger');
//     }
//   }, 300), []);

//   useEffect(() => {
//     fetchCountries();
//     return () => fetchCountries.cancel();
//   }, [fetchCountries]);

//   // Fetch states with debounced search
//   const fetchStates = useCallback(debounce(async (countryId: string, search = '') => {
//     if (!countryId) return;
//     try {
//       const response = await AxiosService.json.get(
//         `/states/${countryId}/countries?search=${search}&page_size=100`
//       );
//       setStates(response.data?.states || []);
//     } catch (err: any) {
//       const message = err.response?.data?.message || 'Failed to load states';
//       NotificationService.showDialog(message, 'danger');
//     }
//   }, 300), []);

//   useEffect(() => {
//     if (formData.countryId) {
//       fetchStates(formData.countryId);
//     }
//     return () => fetchStates.cancel();
//   }, [formData.countryId, fetchStates]);

//   // Fetch cities with debounced search
//   const fetchCities = useCallback(debounce(async (stateId: string, search = '') => {
//     if (!stateId) return;
//     try {
//       const response = await AxiosService.json.get(
//         `/cities/${stateId}/states?search=${search}&page_size=100`
//       );
//       setCities(response.data?.cities || []);
//     } catch (err: any) {
//       const message = err.response?.data?.message || 'Failed to load cities';
//       NotificationService.showDialog(message, 'danger');
//     }
//   }, 300), []);

//   useEffect(() => {
//     if (formData.stateId) {
//       fetchCities(formData.stateId);
//     }
//     return () => fetchCities.cancel();
//   }, [formData.stateId, fetchCities]);

//   const handleEditClick = (address: Address) => {
//     setEditingAddressId(address.id);
//     setFormData({
//       countryId: address.city?.state?.country?.id?.toString() || '',
//       stateId: address.city?.state?.id?.toString() || '',
//       cityId: address.city?.id?.toString() || '',
//       zipCode: address.zip_code || '',
//       streetAddress: address.street_address || '',
//       isPrimary: address.is_primary || false
//     });
//   };

//   const handleCancelEdit = () => {
//     setEditingAddressId(null);
//     setIsAddingNew(false);
//     resetForm();
//   };

//   const resetForm = () => {
//     setFormData({
//       countryId: '',
//       stateId: '',
//       cityId: '',
//       zipCode: '',
//       streetAddress: '',
//       isPrimary: false
//     });
//   };

//   const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value, type } = e.target;
//     const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : false;
    
//     setFormData(prev => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value
//     }));
//   };

//   // FIXED: Properly handle select change
//   const handleSelectChange = (name: string, selectedOption: any) => {
//     setFormData(prev => ({
//       ...prev,
//       [name]: selectedOption ? selectedOption.value : ''
//     }));
//   };

//   const handleSubmit = async (e: React.FormEvent, addressId?: number) => {
//     e.preventDefault();
    
//     try {
//       // Construct address data matching backend schema
//       const addressData = {
//         street_address: formData.streetAddress,
//         zip_code: formData.zipCode,
//         city_id: parseInt(formData.cityId),
//         is_primary: formData.isPrimary,
//         first_name: user?.name.split(' ')[0] || '',
//         last_name: user?.name.split(' ').slice(1).join(' ') || '',
//         phone_number: user?.phone || ''
//       };

//       if (addressId) {
//         // Update existing address
//         await AxiosAddressesService.update(addressId.toString(), addressData);
//         NotificationService.showDialog('Address updated successfully', 'success');
//       } else {
//         // Create new address
//         await AxiosAddressesService.create(addressData);
//         NotificationService.showDialog('Address created successfully', 'success');
//       }

//       // Refresh addresses
//       await fetchAddresses();
      
//       // Handle primary address logic
//       if (formData.isPrimary) {
//         // Find the latest address if new, or use existing ID
//         const targetAddressId = addressId || 
//           addresses.reduce((maxId, address) => Math.max(maxId, address.id), 0);
//         await handleSetPrimary(targetAddressId);
//       }

//       handleCancelEdit();
//     } catch (err: any) {
//       const message = err.response?.data?.message || 'Failed to save address';
//       NotificationService.showDialog(message, 'danger');
//     }
//   };

//   const handleDelete = async (addressId: number) => {
//     if (window.confirm('Are you sure you want to delete this address?')) {
//       try {
//         await AxiosAddressesService.delete(addressId.toString());
//         const updatedAddresses = addresses.filter(addr => addr.id !== addressId);
//         setAddresses(updatedAddresses);
//         NotificationService.showDialog('Address deleted successfully', 'success');
//       } catch (err: any) {
//         const message = err.response?.data?.message || 'Failed to delete address';
//         NotificationService.showDialog(message, 'danger');
//       }
//     }
//   };

//   const handleSetPrimary = async (addressId: number) => {
//     try {
//       // Update all addresses to set is_primary to false
//       await Promise.all(addresses.map(async address => {
//         if (address.id !== addressId && address.is_primary) {
//           await AxiosAddressesService.update(address.id.toString(), { 
//             ...address, 
//             is_primary: false 
//           });
//         }
//       }));

//       // Set the selected address as primary
//       const address = addresses.find(a => a.id === addressId);
//       if (address) {
//         await AxiosAddressesService.update(addressId.toString(), { 
//           ...address, 
//           is_primary: true 
//         });
        
//         // Refresh addresses
//         await fetchAddresses();
//         NotificationService.showDialog('Primary address updated successfully', 'success');
//       }
//     } catch (err: any) {
//       const message = err.response?.data?.message || 'Failed to set primary address';
//       NotificationService.showDialog(message, 'danger');
//     }
//   };

//   const formatAddress = (address: Address) => {
//     return `${address.street_address || ''}, ${address.city?.name || ''}, ${address.zip_code || ''}`;
//   };

//   // Prepare options for react-select
//   const countryOptions = countries.map(c => ({ 
//     value: c.id.toString(), 
//     label: c.name || '' 
//   }));

//   const stateOptions = states.map(s => ({ 
//     value: s.id.toString(), 
//     label: s.name || '' 
//   }));

//   const cityOptions = cities.map(c => ({ 
//     value: c.id.toString(), 
//     label: c.name || '' 
//   }));

//   // Find current selections for react-select
//   const selectedCountry = countryOptions.find(o => o.value === formData.countryId);
//   const selectedState = stateOptions.find(o => o.value === formData.stateId);
//   const selectedCity = cityOptions.find(o => o.value === formData.cityId);

//   return (
//     <div>
//       <main className="content-wrapper">
//         <div className="container py-5 mt-n2 mt-sm-0">
//           <div className="row pt-md-2 pt-lg-3 pb-sm-2 pb-md-3 pb-lg-4 pb-xl-5">
            
//             <Aside />
            
//             <div className="col-lg-9">
//               <div className="ps-lg-3 ps-xl-0">
//                 <h1 className="h2 mb-1 mb-sm-2">Addresses</h1>
                
//                 {loading ? (
//                   <div className="text-center py-5">
//                     <LoadingSpinner />
//                     <p className="mt-2">Loading addresses...</p>
//                   </div>
//                 ) : (
//                   <>
//                     {addresses.map((address) => (
//                       <div key={address.id} className="border-bottom py-4">
//                         <div className="nav flex-nowrap align-items-center justify-content-between pb-1 mb-3">
//                           <div className="d-flex align-items-center gap-3 me-4">
//                             <h2 className="h6 mb-0">
//                               {address.is_primary ? 'Primary Shipping Address' : 'Shipping Address'}
//                             </h2>
//                             {address.is_primary && (
//                               <span className="badge text-bg-info rounded-pill">Primary</span>
//                             )}
//                           </div>
//                           <div>
//                             {!address.is_primary && (
//                               <button 
//                                 className="btn btn-sm btn-outline-primary me-2"
//                                 onClick={() => handleSetPrimary(address.id)}
//                               >
//                                 Set as Primary
//                               </button>
//                             )}
//                             <button
//                               className="btn btn-sm btn-outline-secondary"
//                               onClick={() => handleEditClick(address)}
//                             >
//                               <i className="ci-edit-2 me-1"></i> Edit
//                             </button>
//                           </div>
//                         </div>
                        
//                         <div className="fs-sm">
//                           <ul className="list-unstyled m-0">
//                             <li>{formatAddress(address)}</li>
//                             {address.city?.state?.name && address.city?.state?.country?.name && (
//                               <li>{address.city.state.name}, {address.city.state.country.name}</li>
//                             )}
//                           </ul>
                          
//                           {editingAddressId === address.id && (
//                             <div className="mt-4">
//                               <form 
//                                 className="row g-3 g-sm-4" 
//                                 onSubmit={(e) => handleSubmit(e, address.id)}
//                               >
//                                 <div className="col-sm-6">
//                                   <label className="form-label">Country</label>
//                                   <Select
//                                     className="basic-single"
//                                     classNamePrefix="select"
//                                     name="countryId"
//                                     value={selectedCountry}
//                                     onChange={(option) => handleSelectChange('countryId', option)}
//                                     options={countryOptions}
//                                     placeholder="Select country..."
//                                     isSearchable
//                                     onInputChange={(value) => fetchCountries(value)}
//                                     required
//                                     filterOption={null} // Disable internal filtering
//                                   />
//                                 </div>
                                
//                                 <div className="col-sm-6">
//                                   <label className="form-label">State</label>
//                                   <Select
//                                     className="basic-single"
//                                     classNamePrefix="select"
//                                     name="stateId"
//                                     value={selectedState}
//                                     onChange={(option) => handleSelectChange('stateId', option)}
//                                     options={stateOptions}
//                                     placeholder="Select state..."
//                                     isDisabled={!formData.countryId}
//                                     isSearchable
//                                     onInputChange={(value) => fetchStates(formData.countryId, value)}
//                                     required
//                                     filterOption={null} // Disable internal filtering
//                                   />
//                                 </div>
                                
//                                 <div className="col-sm-6">
//                                   <label className="form-label">City</label>
//                                   <Select
//                                     className="basic-single"
//                                     classNamePrefix="select"
//                                     name="cityId"
//                                     value={selectedCity}
//                                     onChange={(option) => handleSelectChange('cityId', option)}
//                                     options={cityOptions}
//                                     placeholder="Select city..."
//                                     isDisabled={!formData.stateId}
//                                     isSearchable
//                                     onInputChange={(value) => fetchCities(formData.stateId, value)}
//                                     required
//                                     filterOption={null} // Disable internal filtering
//                                   />
//                                 </div>
                                
//                                 <div className="col-sm-6">
//                                   <label className="form-label">ZIP code</label>
//                                   <input
//                                     type="text"
//                                     className="form-control"
//                                     name="zipCode"
//                                     value={formData.zipCode}
//                                     onChange={handleFormChange}
//                                     required
//                                   />
//                                 </div>
                                
//                                 <div className="col-12">
//                                   <label className="form-label">Address</label>
//                                   <input
//                                     type="text"
//                                     className="form-control"
//                                     name="streetAddress"
//                                     value={formData.streetAddress}
//                                     onChange={handleFormChange}
//                                     required
//                                   />
//                                 </div>
                                
//                                 <div className="col-12">
//                                   <div className="form-check mb-0">
//                                     <input
//                                       type="checkbox"
//                                       className="form-check-input"
//                                       name="isPrimary"
//                                       checked={formData.isPrimary}
//                                       onChange={handleFormChange}
//                                       id={`set-primary-${address.id}`}
//                                     />
//                                     <label 
//                                       className="form-check-label" 
//                                       htmlFor={`set-primary-${address.id}`}
//                                     >
//                                       Set as primary address
//                                     </label>
//                                   </div>
//                                 </div>
                                
//                                 <div className="col-12">
//                                   <div className="d-flex gap-3 pt-2 pt-sm-0">
//                                     <button type="submit" className="btn btn-primary">
//                                       Save changes
//                                     </button>
//                                     <button 
//                                       type="button" 
//                                       className="btn btn-danger"
//                                       onClick={() => handleDelete(address.id)}
//                                     >
//                                       Delete
//                                     </button>
//                                     <button 
//                                       type="button" 
//                                       className="btn btn-secondary"
//                                       onClick={handleCancelEdit}
//                                     >
//                                       Cancel
//                                     </button>
//                                   </div>
//                                 </div>
//                               </form>
//                             </div>
//                           )}
//                         </div>
//                       </div>
//                     ))}
                    
//                     {addresses.length === 0 && !isAddingNew && (
//                       <div className="alert alert-info text-center py-4">
//                         <h3 className="h5">No addresses found</h3>
//                         <p className="mb-0">You haven't added any shipping addresses yet</p>
//                         <button 
//                           className="btn btn-primary mt-3"
//                           onClick={() => setIsAddingNew(true)}
//                         >
//                           Add Your First Address
//                         </button>
//                       </div>
//                     )}
                    
//                     {(isAddingNew || (addresses.length === 0 && isAddingNew)) && (
//                       <div className="border-top pt-4 mt-4">
//                         <h2 className="h5 mb-4">Add New Address</h2>
//                         <form 
//                           className="row g-3 g-sm-4" 
//                           onSubmit={(e) => handleSubmit(e)}
//                         >
//                           <div className="col-sm-6">
//                             <label className="form-label">Country</label>
//                             <Select
//                               className="basic-single"
//                               classNamePrefix="select"
//                               name="countryId"
//                               value={selectedCountry}
//                               onChange={(option) => handleSelectChange('countryId', option)}
//                               options={countryOptions}
//                               placeholder="Select country..."
//                               isSearchable
//                               onInputChange={(value) => fetchCountries(value)}
//                               required
//                               filterOption={null} // Disable internal filtering
//                             />
//                           </div>
                          
//                           <div className="col-sm-6">
//                             <label className="form-label">State</label>
//                             <Select
//                               className="basic-single"
//                               classNamePrefix="select"
//                               name="stateId"
//                               value={selectedState}
//                               onChange={(option) => handleSelectChange('stateId', option)}
//                               options={stateOptions}
//                               placeholder="Select state..."
//                               isDisabled={!formData.countryId}
//                               isSearchable
//                               onInputChange={(value) => fetchStates(formData.countryId, value)}
//                               required
//                               filterOption={null} // Disable internal filtering
//                             />
//                           </div>
                          
//                           <div className="col-sm-6">
//                             <label className="form-label">City</label>
//                             <Select
//                               className="basic-single"
//                               classNamePrefix="select"
//                               name="cityId"
//                               value={selectedCity}
//                               onChange={(option) => handleSelectChange('cityId', option)}
//                               options={cityOptions}
//                               placeholder="Select city..."
//                               isDisabled={!formData.stateId}
//                               isSearchable
//                               onInputChange={(value) => fetchCities(formData.stateId, value)}
//                               required
//                               filterOption={null} // Disable internal filtering
//                             />
//                           </div>
                          
//                           <div className="col-sm-6">
//                             <label className="form-label">ZIP code</label>
//                             <input
//                               type="text"
//                               className="form-control"
//                               name="zipCode"
//                               value={formData.zipCode}
//                               onChange={handleFormChange}
//                               required
//                             />
//                           </div>
                          
//                           <div className="col-12">
//                             <label className="form-label">Address</label>
//                             <input
//                               type="text"
//                               className="form-control"
//                               name="streetAddress"
//                               value={formData.streetAddress}
//                               onChange={handleFormChange}
//                               required
//                             />
//                           </div>
                          
//                           <div className="col-12">
//                             <div className="form-check mb-0">
//                               <input
//                                 type="checkbox"
//                                 className="form-check-input"
//                                 name="isPrimary"
//                                 checked={formData.isPrimary}
//                                 onChange={handleFormChange}
//                                 id="set-primary-new"
//                               />
//                               <label 
//                                 className="form-check-label" 
//                                 htmlFor="set-primary-new"
//                               >
//                                 Set as primary address
//                               </label>
//                             </div>
//                           </div>
                          
//                           <div className="col-12">
//                             <div className="d-flex gap-3 pt-2 pt-sm-0">
//                               <button type="submit" className="btn btn-primary">
//                                 Save Address
//                               </button>
//                               <button 
//                                 type="button" 
//                                 className="btn btn-secondary"
//                                 onClick={handleCancelEdit}
//                               >
//                                 Cancel
//                               </button>
//                             </div>
//                           </div>
//                         </form>
//                       </div>
//                     )}
                    
//                     {!isAddingNew && addresses.length > 0 && (
//                       <div className="nav pt-4">
//                         <button
//                           className="nav-link animate-underline fs-base px-0"
//                           onClick={() => setIsAddingNew(true)}
//                         >
//                           <i className="ci-plus fs-lg ms-n1 me-2" />
//                           <span className="animate-target">Add address</span>
//                         </button>
//                       </div>
//                     )}
//                   </>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Addresses;


// // v5

// import React, { useState, useEffect, useCallback } from 'react';
// import { Link } from 'react-router-dom';
// import Aside from '../shared/Aside';
// import { AxiosAddressesService } from '@/services/net/AxiosAddressesService';
// import { AxiosService } from '@/services/net/base/AxiosService';
// import { useUser } from '@/context/UserContext';
// import { Address } from '@/services/net/AxiosAddressesService';
// import Select from 'react-select';
// import LoadingSpinner from '@/components/shared/LoadingSpinner';
// import debounce from 'lodash/debounce';
// import { NotificationService } from '@/services/local/NotificationService';

// interface Country {
//   id: number;
//   name: string;
// }

// interface State {
//   id: number;
//   name: string;
// }

// interface City {
//   id: number;
//   name: string;
// }

// const Addresses = () => {
//   const { user } = useUser();
//   const [addresses, setAddresses] = useState<Address[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [editingAddressId, setEditingAddressId] = useState<number | null>(null);
//   const [isAddingNew, setIsAddingNew] = useState(false);
//   const [countries, setCountries] = useState<Country[]>([]);
//   const [states, setStates] = useState<State[]>([]);
//   const [cities, setCities] = useState<City[]>([]);

//   // Form states
//   const [formData, setFormData] = useState({
//     countryId: '',
//     stateId: '',
//     cityId: '',
//     zipCode: '',
//     streetAddress: '',
//     isPrimary: false
//   });

//   // Fetch addresses
//   const fetchAddresses = useCallback(async () => {
//     try {
//       setLoading(true);
//       const response = await AxiosAddressesService.fetchAll({
//         include_city: true,
//         include_state: true,
//         include_country: true,
//         include_user: true
//       });
//       setAddresses(response.data.addresses || []);
//     } catch (err: any) {
//       const message = err.response?.data?.message || 'Failed to load addresses';
//       NotificationService.showDialog(message, 'danger');
//     } finally {
//       setLoading(false);
//     }
//   }, []);

//   useEffect(() => {
//     if (user?.id) {
//       fetchAddresses();
//     }
//     fetchAddresses();
//   }, [user, fetchAddresses]);

//   // Fetch countries with debounced search
//   const fetchCountries = useCallback(debounce(async (search = '') => {
//     try {
//       const response = await AxiosService.json.get(
//         `/countries?search=${search}&page_size=100`
//       );
//       setCountries(response.data?.countries || []);
//     } catch (err: any) {
//       const message = err.response?.data?.message || 'Failed to load countries';
//       NotificationService.showDialog(message, 'danger');
//     }
//   }, 300), []);

//   useEffect(() => {
//     fetchCountries();
//     return () => fetchCountries.cancel();
//   }, [fetchCountries]);

//   // Fetch states with debounced search
//   const fetchStates = useCallback(debounce(async (countryId: string, search = '') => {
//     if (!countryId) return;
//     try {
//       const response = await AxiosService.json.get(
//         `/states/${countryId}/countries?search=${search}&page_size=100`
//       );
//       setStates(response.data?.states || []);
//     } catch (err: any) {
//       const message = err.response?.data?.message || 'Failed to load states';
//       NotificationService.showDialog(message, 'danger');
//     }
//   }, 300), []);

//   useEffect(() => {
//     if (formData.countryId) {
//       fetchStates(formData.countryId);
//     }
//     return () => fetchStates.cancel();
//   }, [formData.countryId, fetchStates]);

//   // Fetch cities with debounced search
//   const fetchCities = useCallback(debounce(async (stateId: string, search = '') => {
//     if (!stateId) return;
//     try {
//       const response = await AxiosService.json.get(
//         `/cities/${stateId}/states?search=${search}&page_size=100`
//       );
//       setCities(response.data?.cities || []);
//     } catch (err: any) {
//       const message = err.response?.data?.message || 'Failed to load cities';
//       NotificationService.showDialog(message, 'danger');
//     }
//   }, 300), []);

//   useEffect(() => {
//     if (formData.stateId) {
//       fetchCities(formData.stateId);
//     }
//     return () => fetchCities.cancel();
//   }, [formData.stateId, fetchCities]);

//   const handleEditClick = (address: Address) => {
//     setEditingAddressId(address.id);
//     setFormData({
//       countryId: address.city?.state?.country?.id?.toString() || '',
//       stateId: address.city?.state?.id?.toString() || '',
//       cityId: address.city?.id?.toString() || '',
//       zipCode: address.zip_code || '',
//       streetAddress: address.street_address || '',
//       isPrimary: address.is_primary || false
//     });
//   };

//   const handleCancelEdit = () => {
//     setEditingAddressId(null);
//     setIsAddingNew(false);
//     resetForm();
//   };

//   const resetForm = () => {
//     setFormData({
//       countryId: '',
//       stateId: '',
//       cityId: '',
//       zipCode: '',
//       streetAddress: '',
//       isPrimary: false
//     });
//   };

//   const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value, type } = e.target;
//     const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : false;
    
//     setFormData(prev => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value
//     }));
//   };

//   // FIXED: Properly handle select change
//   const handleSelectChange = (name: string, selectedOption: any) => {
//     setFormData(prev => ({
//       ...prev,
//       [name]: selectedOption ? selectedOption.value : ''
//     }));
//   };

//   const handleSubmit = async (e: React.FormEvent, addressId?: number) => {
//     e.preventDefault();
    
//     try {
//       // Construct address data matching backend schema
//       const addressData = {
//         street_address: formData.streetAddress,
//         zip_code: formData.zipCode,
//         city_id: parseInt(formData.cityId),
//         is_primary: formData.isPrimary,
//         first_name: user?.name.split(' ')[0] || '',
//         last_name: user?.name.split(' ').slice(1).join(' ') || '',
//         phone_number: user?.phone || ''
//       };

//       if (addressId) {
//         // Update existing address
//         await AxiosAddressesService.update(addressId.toString(), addressData);
//         NotificationService.showDialog('Address updated successfully', 'success');
//       } else {
//         // Create new address
//         await AxiosAddressesService.create(addressData);
//         NotificationService.showDialog('Address created successfully', 'success');
//       }

//       // Refresh addresses
//       await fetchAddresses();
      
//       // Handle primary address logic
//       if (formData.isPrimary && addresses.length > 0) {
//         const targetAddressId = addressId || 
//           Math.max(...addresses.map(a => a.id), ...(addresses.length > 0 ? [addresses[addresses.length - 1].id] : []));
//         await handleSetPrimary(targetAddressId);
//       }

//       handleCancelEdit();
//     } catch (err: any) {
//       const message = err.response?.data?.message || 'Failed to save address';
//       NotificationService.showDialog(message, 'danger');
//     }
//   };

//   const handleDelete = async (addressId: number) => {
//     if (window.confirm('Are you sure you want to delete this address?')) {
//       try {
//         await AxiosAddressesService.delete(addressId.toString());
//         const updatedAddresses = addresses.filter(addr => addr.id !== addressId);
//         setAddresses(updatedAddresses);
//         NotificationService.showDialog('Address deleted successfully', 'success');
//       } catch (err: any) {
//         const message = err.response?.data?.message || 'Failed to delete address';
//         NotificationService.showDialog(message, 'danger');
//       }
//     }
//   };

//   const handleSetPrimary = async (addressId: number) => {
//     try {
//       // Update all addresses to set is_primary to false
//       await Promise.all(addresses.map(async address => {
//         if (address.id !== addressId && address.is_primary) {
//           await AxiosAddressesService.update(address.id.toString(), { 
//             ...address, 
//             is_primary: false 
//           });
//         }
//       }));

//       // Set the selected address as primary
//       const address = addresses.find(a => a.id === addressId);
//       if (address) {
//         await AxiosAddressesService.update(addressId.toString(), { 
//           ...address, 
//           is_primary: true 
//         });
        
//         // Refresh addresses
//         await fetchAddresses();
//         NotificationService.showDialog('Primary address updated successfully', 'success');
//       }
//     } catch (err: any) {
//       const message = err.response?.data?.message || 'Failed to set primary address';
//       NotificationService.showDialog(message, 'danger');
//     }
//   };

//   const formatAddress = (address: Address) => {
//     return `${address.street_address || ''}, ${address.city?.name || ''}, ${address.zip_code || ''}`;
//   };

//   // Prepare options for react-select
//   const countryOptions = countries.map(c => ({ 
//     value: c.id.toString(), 
//     label: c.name || '' 
//   }));

//   const stateOptions = states.map(s => ({ 
//     value: s.id.toString(), 
//     label: s.name || '' 
//   }));

//   const cityOptions = cities.map(c => ({ 
//     value: c.id.toString(), 
//     label: c.name || '' 
//   }));

//   // Find current selections for react-select
//   const selectedCountry = countryOptions.find(o => o.value === formData.countryId);
//   const selectedState = stateOptions.find(o => o.value === formData.stateId);
//   const selectedCity = cityOptions.find(o => o.value === formData.cityId);

//   return (
//     <div>
//       <main className="content-wrapper">
//         <div className="container py-5 mt-n2 mt-sm-0">
//           <div className="row pt-md-2 pt-lg-3 pb-sm-2 pb-md-3 pb-lg-4 pb-xl-5">
            
//             <Aside />
            
//             <div className="col-lg-9">
//               <div className="ps-lg-3 ps-xl-0">
//                 <h1 className="h2 mb-1 mb-sm-2">Addresses</h1>
                
//                 {loading ? (
//                   <div className="text-center py-5">
//                     <LoadingSpinner />
//                     <p className="mt-2">Loading addresses...</p>
//                   </div>
//                 ) : (
//                   <>
//                     {addresses.map((address) => (
//                       <div key={address.id} className="border-bottom py-4">
//                         <div className="nav flex-nowrap align-items-center justify-content-between pb-1 mb-3">
//                           <div className="d-flex align-items-center gap-3 me-4">
//                             <h2 className="h6 mb-0">
//                               {address.is_primary ? 'Primary Shipping Address' : 'Shipping Address'}
//                             </h2>
//                             {address.is_primary && (
//                               <span className="badge text-bg-info rounded-pill">Primary</span>
//                             )}
//                           </div>
//                           <div>
//                             {!address.is_primary && (
//                               <button 
//                                 className="btn btn-sm btn-outline-primary me-2"
//                                 onClick={() => handleSetPrimary(address.id)}
//                               >
//                                 Set as Primary
//                               </button>
//                             )}
//                             <button
//                               className="btn btn-sm btn-outline-secondary"
//                               onClick={() => handleEditClick(address)}
//                             >
//                               <i className="ci-edit-2 me-1"></i> Edit
//                             </button>
//                           </div>
//                         </div>
                        
//                         <div className="fs-sm">
//                           <ul className="list-unstyled m-0">
//                             <li>{formatAddress(address)}</li>
//                             {address.city?.state?.name && address.city?.state?.country?.name && (
//                               <li>{address.city.state.name}, {address.city.state.country.name}</li>
//                             )}
//                           </ul>
                          
//                           {editingAddressId === address.id && (
//                             <div className="mt-4">
//                               <form 
//                                 className="row g-3 g-sm-4" 
//                                 onSubmit={(e) => handleSubmit(e, address.id)}
//                               >
//                                 <div className="col-sm-6">
//                                   <label className="form-label">Country</label>
//                                   <Select
//                                     className="basic-single"
//                                     classNamePrefix="select"
//                                     name="countryId"
//                                     value={selectedCountry}
//                                     onChange={(option) => handleSelectChange('countryId', option)}
//                                     options={countryOptions}
//                                     placeholder="Select country..."
//                                     isSearchable
//                                     onInputChange={(value) => fetchCountries(value)}
//                                     required
//                                     filterOption={null} // Disable internal filtering
//                                   />
//                                 </div>
                                
//                                 <div className="col-sm-6">
//                                   <label className="form-label">State</label>
//                                   <Select
//                                     className="basic-single"
//                                     classNamePrefix="select"
//                                     name="stateId"
//                                     value={selectedState}
//                                     onChange={(option) => handleSelectChange('stateId', option)}
//                                     options={stateOptions}
//                                     placeholder="Select state..."
//                                     isDisabled={!formData.countryId}
//                                     isSearchable
//                                     onInputChange={(value) => fetchStates(formData.countryId, value)}
//                                     required
//                                     filterOption={null} // Disable internal filtering
//                                   />
//                                 </div>
                                
//                                 <div className="col-sm-6">
//                                   <label className="form-label">City</label>
//                                   <Select
//                                     className="basic-single"
//                                     classNamePrefix="select"
//                                     name="cityId"
//                                     value={selectedCity}
//                                     onChange={(option) => handleSelectChange('cityId', option)}
//                                     options={cityOptions}
//                                     placeholder="Select city..."
//                                     isDisabled={!formData.stateId}
//                                     isSearchable
//                                     onInputChange={(value) => fetchCities(formData.stateId, value)}
//                                     required
//                                     filterOption={null} // Disable internal filtering
//                                   />
//                                 </div>
                                
//                                 <div className="col-sm-6">
//                                   <label className="form-label">ZIP code</label>
//                                   <input
//                                     type="text"
//                                     className="form-control"
//                                     name="zipCode"
//                                     value={formData.zipCode}
//                                     onChange={handleFormChange}
//                                     required
//                                   />
//                                 </div>
                                
//                                 <div className="col-12">
//                                   <label className="form-label">Address</label>
//                                   <input
//                                     type="text"
//                                     className="form-control"
//                                     name="streetAddress"
//                                     value={formData.streetAddress}
//                                     onChange={handleFormChange}
//                                     required
//                                   />
//                                 </div>
                                
//                                 <div className="col-12">
//                                   <div className="form-check mb-0">
//                                     <input
//                                       type="checkbox"
//                                       className="form-check-input"
//                                       name="isPrimary"
//                                       checked={formData.isPrimary}
//                                       onChange={handleFormChange}
//                                       id={`set-primary-${address.id}`}
//                                     />
//                                     <label 
//                                       className="form-check-label" 
//                                       htmlFor={`set-primary-${address.id}`}
//                                     >
//                                       Set as primary address
//                                     </label>
//                                   </div>
//                                 </div>
                                
//                                 <div className="col-12">
//                                   <div className="d-flex gap-3 pt-2 pt-sm-0">
//                                     <button type="submit" className="btn btn-primary">
//                                       Save changes
//                                     </button>
//                                     <button 
//                                       type="button" 
//                                       className="btn btn-danger"
//                                       onClick={() => handleDelete(address.id)}
//                                     >
//                                       Delete
//                                     </button>
//                                     <button 
//                                       type="button" 
//                                       className="btn btn-secondary"
//                                       onClick={handleCancelEdit}
//                                     >
//                                       Cancel
//                                     </button>
//                                   </div>
//                                 </div>
//                               </form>
//                             </div>
//                           )}
//                         </div>
//                       </div>
//                     ))}
                    
//                     {addresses.length === 0 && !isAddingNew && (
//                       <div className="alert alert-info text-center py-4">
//                         <h3 className="h5">No addresses found</h3>
//                         <p className="mb-0">You haven't added any shipping addresses yet</p>
//                         <button 
//                           className="btn btn-primary mt-3"
//                           onClick={() => setIsAddingNew(true)}
//                         >
//                           Add Your First Address
//                         </button>
//                       </div>
//                     )}
                    
//                     {(isAddingNew || (addresses.length === 0 && isAddingNew)) && (
//                       <div className="border-top pt-4 mt-4">
//                         <h2 className="h5 mb-4">Add New Address</h2>
//                         <form 
//                           className="row g-3 g-sm-4" 
//                           onSubmit={(e) => handleSubmit(e)}
//                         >
//                           <div className="col-sm-6">
//                             <label className="form-label">Country</label>
//                             <Select
//                               className="basic-single"
//                               classNamePrefix="select"
//                               name="countryId"
//                               value={selectedCountry}
//                               onChange={(option) => handleSelectChange('countryId', option)}
//                               options={countryOptions}
//                               placeholder="Select country..."
//                               isSearchable
//                               onInputChange={(value) => fetchCountries(value)}
//                               required
//                               filterOption={null} // Disable internal filtering
//                             />
//                           </div>
                          
//                           <div className="col-sm-6">
//                             <label className="form-label">State</label>
//                             <Select
//                               className="basic-single"
//                               classNamePrefix="select"
//                               name="stateId"
//                               value={selectedState}
//                               onChange={(option) => handleSelectChange('stateId', option)}
//                               options={stateOptions}
//                               placeholder="Select state..."
//                               isDisabled={!formData.countryId}
//                               isSearchable
//                               onInputChange={(value) => fetchStates(formData.countryId, value)}
//                               required
//                               filterOption={null} // Disable internal filtering
//                             />
//                           </div>
                          
//                           <div className="col-sm-6">
//                             <label className="form-label">City</label>
//                             <Select
//                               className="basic-single"
//                               classNamePrefix="select"
//                               name="cityId"
//                               value={selectedCity}
//                               onChange={(option) => handleSelectChange('cityId', option)}
//                               options={cityOptions}
//                               placeholder="Select city..."
//                               isDisabled={!formData.stateId}
//                               isSearchable
//                               onInputChange={(value) => fetchCities(formData.stateId, value)}
//                               required
//                               filterOption={null} // Disable internal filtering
//                             />
//                           </div>
                          
//                           <div className="col-sm-6">
//                             <label className="form-label">ZIP code</label>
//                             <input
//                               type="text"
//                               className="form-control"
//                               name="zipCode"
//                               value={formData.zipCode}
//                               onChange={handleFormChange}
//                               required
//                             />
//                           </div>
                          
//                           <div className="col-12">
//                             <label className="form-label">Address</label>
//                             <input
//                               type="text"
//                               className="form-control"
//                               name="streetAddress"
//                               value={formData.streetAddress}
//                               onChange={handleFormChange}
//                               required
//                             />
//                           </div>
                          
//                           <div className="col-12">
//                             <div className="form-check mb-0">
//                               <input
//                                 type="checkbox"
//                                 className="form-check-input"
//                                 name="isPrimary"
//                                 checked={formData.isPrimary}
//                                 onChange={handleFormChange}
//                                 id="set-primary-new"
//                               />
//                               <label 
//                                 className="form-check-label" 
//                                 htmlFor="set-primary-new"
//                               >
//                                 Set as primary address
//                               </label>
//                             </div>
//                           </div>
                          
//                           <div className="col-12">
//                             <div className="d-flex gap-3 pt-2 pt-sm-0">
//                               <button type="submit" className="btn btn-primary">
//                                 Save Address
//                               </button>
//                               <button 
//                                 type="button" 
//                                 className="btn btn-secondary"
//                                 onClick={handleCancelEdit}
//                               >
//                                 Cancel
//                               </button>
//                             </div>
//                           </div>
//                         </form>
//                       </div>
//                     )}
                    
//                     {!isAddingNew && addresses.length > 0 && (
//                       <div className="nav pt-4">
//                         <button
//                           className="nav-link animate-underline fs-base px-0"
//                           onClick={() => setIsAddingNew(true)}
//                         >
//                           <i className="ci-plus fs-lg ms-n1 me-2" />
//                           <span className="animate-target">Add address</span>
//                         </button>
//                       </div>
//                     )}
//                   </>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Addresses;

// 

// V6

// // v6 - Updated with Bootstrap Select

// import React, { useState, useEffect, useCallback } from 'react';
// import { Link } from 'react-router-dom';
// import Aside from '../shared/Aside';
// import { AxiosAddressesService } from '@/services/net/AxiosAddressesService';
// import { AxiosService } from '@/services/net/base/AxiosService';
// import { useUser } from '@/context/UserContext';
// import { Address } from '@/services/net/AxiosAddressesService';
// import LoadingSpinner from '@/components/shared/LoadingSpinner';
// import debounce from 'lodash/debounce';
// import { NotificationService } from '@/services/local/NotificationService';

// interface Country {
//   id: number;
//   name: string;
// }

// interface State {
//   id: number;
//   name: string;
// }

// interface City {
//   id: number;
//   name: string;
// }

// const Addresses = () => {
//   const { user } = useUser();
//   const [addresses, setAddresses] = useState<Address[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [editingAddressId, setEditingAddressId] = useState<number | null>(null);
//   const [isAddingNew, setIsAddingNew] = useState(false);
//   const [countries, setCountries] = useState<Country[]>([]);
//   const [states, setStates] = useState<State[]>([]);
//   const [cities, setCities] = useState<City[]>([]);

//   // Form states
//   const [formData, setFormData] = useState({
//     countryId: '',
//     stateId: '',
//     cityId: '',
//     zipCode: '',
//     streetAddress: '',
//     isPrimary: false
//   });

//   // Fetch addresses
//   const fetchAddresses = useCallback(async () => {
//     try {
//       setLoading(true);
//       const response = await AxiosAddressesService.fetchAll({
//         include_city: true,
//         include_state: true,
//         include_country: true,
//         include_user: true
//       });
//       setAddresses(response.data.addresses || []);
//     } catch (err: any) {
//       const message = err.response?.data?.message || 'Failed to load addresses';
//       NotificationService.showDialog(message, 'danger');
//     } finally {
//       setLoading(false);
//     }
//   }, []);

//   useEffect(() => {
//     // if (user?.id) {
//     //   fetchAddresses();
//     // }
//     fetchAddresses();
//   }, [user, fetchAddresses]);

//   // Fetch countries with debounced search
//   const fetchCountries = useCallback(debounce(async (search = '') => {
//     try {
//       const response = await AxiosService.json.get(
//         `/countries?search=${search}&page_size=100`
//       );
//       setCountries(response.data?.countries || []);
//     } catch (err: any) {
//       const message = err.response?.data?.message || 'Failed to load countries';
//       NotificationService.showDialog(message, 'danger');
//     }
//   }, 300), []);

//   useEffect(() => {
//     fetchCountries();
//     return () => fetchCountries.cancel();
//   }, [fetchCountries]);

//   // Fetch states with debounced search
//   const fetchStates = useCallback(debounce(async (countryId: string, search = '') => {
//     if (!countryId) return;
//     try {
//       const response = await AxiosService.json.get(
//         `/states/${countryId}/countries?search=${search}&page_size=100`
//       );
//       setStates(response.data?.states || []);
//     } catch (err: any) {
//       const message = err.response?.data?.message || 'Failed to load states';
//       NotificationService.showDialog(message, 'danger');
//     }
//   }, 300), []);

//   useEffect(() => {
//     if (formData.countryId) {
//       fetchStates(formData.countryId);
//     }
//     return () => fetchStates.cancel();
//   }, [formData.countryId, fetchStates]);

//   // Fetch cities with debounced search
//   const fetchCities = useCallback(debounce(async (stateId: string, search = '') => {
//     if (!stateId) return;
//     try {
//       const response = await AxiosService.json.get(
//         `/cities/${stateId}/states?search=${search}&page_size=100`
//       );
//       setCities(response.data?.cities || []);
//     } catch (err: any) {
//       const message = err.response?.data?.message || 'Failed to load cities';
//       NotificationService.showDialog(message, 'danger');
//     }
//   }, 300), []);

//   useEffect(() => {
//     if (formData.stateId) {
//       fetchCities(formData.stateId);
//     }
//     return () => fetchCities.cancel();
//   }, [formData.stateId, fetchCities]);

//   const handleEditClick = (address: Address) => {
//     setEditingAddressId(address.id);
//     setFormData({
//       countryId: address.city?.state?.country?.id?.toString() || '',
//       stateId: address.city?.state?.id?.toString() || '',
//       cityId: address.city?.id?.toString() || '',
//       zipCode: address.zip_code || '',
//       streetAddress: address.street_address || '',
//       isPrimary: address.is_primary || false
//     });
//   };

//   const handleCancelEdit = () => {
//     setEditingAddressId(null);
//     setIsAddingNew(false);
//     resetForm();
//   };

//   const resetForm = () => {
//     setFormData({
//       countryId: '',
//       stateId: '',
//       cityId: '',
//       zipCode: '',
//       streetAddress: '',
//       isPrimary: false
//     });
//   };

//   const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     const { name, value, type } = e.target;
//     const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : false;
    
//     setFormData(prev => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value
//     }));
//   };

//   const handleSubmit = async (e: React.FormEvent, addressId?: number) => {
//     e.preventDefault();
    
//     try {
//       // Construct address data matching backend schema
//       const addressData = {
//         street_address: formData.streetAddress,
//         zip_code: formData.zipCode,
//         city_id: parseInt(formData.cityId),
//         is_primary: formData.isPrimary,
//         first_name: user?.name.split(' ')[0] || '',
//         last_name: user?.name.split(' ').slice(1).join(' ') || '',
//         phone_number: user?.phone || ''
//       };

//       // console.log(addressData);

//       if (addressId) {
//         // Update existing address
//         await AxiosAddressesService.update(addressId.toString(), addressData);
//         NotificationService.showDialog('Address updated successfully', 'success');
//       } else {
//         // Create new address
//         await AxiosAddressesService.create(addressData);
//         NotificationService.showDialog('Address created successfully', 'success');
//       }

//       // Refresh addresses
//       await fetchAddresses();
      
//       // Handle primary address logic
//       if (formData.isPrimary && addresses.length > 0) {
//         const targetAddressId = addressId || 
//           Math.max(...addresses.map(a => a.id), ...(addresses.length > 0 ? [addresses[addresses.length - 1].id] : []));
//         await handleSetPrimary(targetAddressId);
//       }

//       handleCancelEdit();
//     } catch (err: any) {
//       const message = err.response?.data?.message || 'Failed to save address';
//       console.error(JSON.stringify(err))
//       NotificationService.showDialog(message, 'danger');
//     }
//   };

//   const handleDelete = async (addressId: number) => {
//     if (window.confirm('Are you sure you want to delete this address?')) {
//       try {
//         await AxiosAddressesService.delete(addressId.toString());
//         const updatedAddresses = addresses.filter(addr => addr.id !== addressId);
//         setAddresses(updatedAddresses);
//         NotificationService.showDialog('Address deleted successfully', 'success');
//       } catch (err: any) {
//         const message = err.response?.data?.message || 'Failed to delete address';
//         NotificationService.showDialog(message, 'danger');
//       }
//     }
//   };

//   // const handleSetPrimary = async (addressId: number) => {
//   //   try {
//   //     // Update all addresses to set is_primary to false
//   //     await Promise.all(addresses.map(async address => {
//   //       if (address.id !== addressId && address.is_primary) {
//   //         await AxiosAddressesService.update(address.id.toString(), { 
//   //           ...address, 
//   //           is_primary: false 
//   //         });
//   //       }
//   //     }));

//   //     // Set the selected address as primary
//   //     const address = addresses.find(a => a.id === addressId);
//   //     if (address) {
//   //       await AxiosAddressesService.update(addressId.toString(), {
//   //         ...address, 
//   //         is_primary: true 
//   //       });
        
//   //       // Refresh addresses
//   //       await fetchAddresses();
//   //       NotificationService.showDialog('Primary address updated successfully', 'success');
//   //     }
//   //   } catch (err: any) {
//   //     console.error(err)
//   //     const message = err.response?.data?.message || 'Failed to set primary address';
//   //     NotificationService.showDialog(message, 'danger');
//   //   }
//   // };

//   const handleSetPrimary = async (addressId: number) => {
//   try {
//     const address = addresses.find(a => a.id === addressId);
//     if (!address) return;

//     // Create full payload with required fields
//     const payload = {
//       street_address: address.street_address,
//       zip_code: address.zip_code,
//       city_id: address.city.id,  // Use city ID from the address object
//       is_primary: true,
//       first_name: user?.name.split(' ')[0] || '',
//       last_name: user?.name.split(' ').slice(1).join(' ') || '',
//       phone_number: user?.phone || ''
//     };

//     // Update all addresses to set is_primary to false
//     await Promise.all(addresses.map(async addr => {
//       if (addr.id !== addressId && addr.is_primary) {
//         const addrPayload = {
//           street_address: addr.street_address,
//           zip_code: addr.zip_code,
//           city_id: addr.city.id,
//           is_primary: false,
//           first_name: user?.name.split(' ')[0] || '',
//           last_name: user?.name.split(' ').slice(1).join(' ') || '',
//           phone_number: user?.phone || ''
//         };
//         await AxiosAddressesService.update(addr.id.toString(), addrPayload);
//       }
//     }));

//     // Set the selected address as primary
//     const response = await AxiosAddressesService.update(addressId.toString(), payload);
//     const message = response.data?.message || 'Primary address updated successfully';
    
//     const updatedResponse = await AxiosAddressesService.fetchAll({
//       include_city: true,
//       include_state: true,
//       include_country: true
//     });
//     setAddresses(updatedResponse.data.addresses);
//     NotificationService.showDialog(message, 'success');
//   } catch (err: any) {
//     const message = err.response?.data?.message || 'Failed to set primary address';
//     NotificationService.showDialog(message, 'error');
//   }
// };


//   const formatAddress = (address: Address) => {
//     return `${address.street_address || ''}, ${address.city?.name || ''}, ${address.zip_code || ''}`;
//   };

//   const renderAddressForm = (addressId?: number) => {
//     return (
//       <form 
//         className="row g-3 g-sm-4" 
//         onSubmit={(e) => handleSubmit(e, addressId)}
//       >
//         <div className="col-sm-6">
//           <label className="form-label">Country</label>
//           <select 
//             className="form-select" 
//             data-select='{ "searchEnabled": true }'
//             name="countryId"
//             value={formData.countryId}
//             onChange={handleFormChange}
//             required
//           >
//             <option value="">Select country...</option>
//             {countries.map(country => (
//               <option key={country.id} value={country.id.toString()}>
//                 {country.name}
//               </option>
//             ))}
//           </select>
//         </div>
        
//         <div className="col-sm-6">
//           <label className="form-label">State</label>
//           <select 
//             className="form-select" 
//             data-select='{ "searchEnabled": true }'
//             name="stateId"
//             value={formData.stateId}
//             onChange={handleFormChange}
//             disabled={!formData.countryId}
//             required
//           >
//             <option value="">Select state...</option>
//             {states.map(state => (
//               <option key={state.id} value={state.id.toString()}>
//                 {state.name}
//               </option>
//             ))}
//           </select>
//         </div>
        
//         <div className="col-sm-6">
//           <label className="form-label">City</label>
//           <select 
//             className="form-select" 
//             data-select='{ "searchEnabled": true }'
//             name="cityId"
//             value={formData.cityId}
//             onChange={handleFormChange}
//             disabled={!formData.stateId}
//             required
//           >
//             <option value="">Select city...</option>
//             {cities.map(city => (
//               <option key={city.id} value={city.id.toString()}>
//                 {city.name}
//               </option>
//             ))}
//           </select>
//         </div>
        
//         <div className="col-sm-6">
//           <label className="form-label">ZIP code</label>
//           <input
//             type="text"
//             className="form-control"
//             name="zipCode"
//             value={formData.zipCode}
//             onChange={handleFormChange}
//             required
//           />
//         </div>
        
//         <div className="col-12">
//           <label className="form-label">Address</label>
//           <input
//             type="text"
//             className="form-control"
//             name="streetAddress"
//             value={formData.streetAddress}
//             onChange={handleFormChange}
//             required
//           />
//         </div>
        
//         <div className="col-12">
//           <div className="form-check mb-0">
//             <input
//               type="checkbox"
//               className="form-check-input"
//               name="isPrimary"
//               checked={formData.isPrimary}
//               onChange={handleFormChange}
//               id={addressId ? `set-primary-${addressId}` : "set-primary-new"}
//             />
//             <label 
//               className="form-check-label" 
//               htmlFor={addressId ? `set-primary-${addressId}` : "set-primary-new"}
//             >
//               Set as primary address
//             </label>
//           </div>
//         </div>
        
//         <div className="col-12">
//           <div className="d-flex gap-3 pt-2 pt-sm-0">
//             <button type="submit" className="btn btn-primary">
//               {addressId ? 'Save changes' : 'Save Address'}
//             </button>
//             {addressId && (
//               <button 
//                 type="button" 
//                 className="btn btn-danger"
//                 onClick={() => handleDelete(addressId)}
//               >
//                 Delete
//               </button>
//             )}
//             <button 
//               type="button" 
//               className="btn btn-secondary"
//               onClick={handleCancelEdit}
//             >
//               Cancel
//             </button>
//           </div>
//         </div>
//       </form>
//     );
//   };

//   return (
//     <div>
//       <main className="content-wrapper">
//         <div className="container py-5 mt-n2 mt-sm-0">
//           <div className="row pt-md-2 pt-lg-3 pb-sm-2 pb-md-3 pb-lg-4 pb-xl-5">
            
//             <Aside />
            
//             <div className="col-lg-9">
//               <div className="ps-lg-3 ps-xl-0">
//                 <h1 className="h2 mb-1 mb-sm-2">Addresses</h1>
                
//                 {loading ? (
//                   <div className="text-center py-5">
//                     <LoadingSpinner />
//                     <p className="mt-2">Loading addresses...</p>
//                   </div>
//                 ) : (
//                   <>
//                     {addresses.map((address) => (
//                       <div key={address.id} className="border-bottom py-4">
//                         <div className="nav flex-nowrap align-items-center justify-content-between pb-1 mb-3">
//                           <div className="d-flex align-items-center gap-3 me-4">
//                             <h2 className="h6 mb-0">
//                               {address.is_primary ? 'Primary Shipping Address' : 'Shipping Address'}
//                             </h2>
//                             {address.is_primary && (
//                               <span className="badge text-bg-info rounded-pill">Primary</span>
//                             )}
//                           </div>
//                           <div>
//                             {!address.is_primary && (
//                               <button 
//                                 className="btn btn-sm btn-outline-primary me-2"
//                                 onClick={() => handleSetPrimary(address.id)}
//                               >
//                                 Set as Primary
//                               </button>
//                             )}
//                             <button
//                               className="btn btn-sm btn-outline-secondary"
//                               onClick={() => handleEditClick(address)}
//                             >
//                               <i className="ci-edit-2 me-1"></i> Edit
//                             </button>
//                           </div>
//                         </div>
                        
//                         <div className="fs-sm">
//                           <ul className="list-unstyled m-0">
//                             <li>{formatAddress(address)}</li>
//                             {address.city?.state?.name && address.city?.state?.country?.name && (
//                               <li>{address.city.state.name}, {address.city.state.country.name}</li>
//                             )}
//                           </ul>
                          
//                           {editingAddressId === address.id && (
//                             <div className="mt-4">
//                               {renderAddressForm(address.id)}
//                             </div>
//                           )}
//                         </div>
//                       </div>
//                     ))}
                    
//                     {addresses.length === 0 && !isAddingNew && (
//                       <div className="alert alert-info text-center py-4">
//                         <h3 className="h5">No addresses found</h3>
//                         <p className="mb-0">You haven't added any shipping addresses yet</p>
//                         <button 
//                           className="btn btn-primary mt-3"
//                           onClick={() => setIsAddingNew(true)}
//                         >
//                           Add Your First Address
//                         </button>
//                       </div>
//                     )}
                    
//                     {(isAddingNew || (addresses.length === 0 && isAddingNew)) && (
//                       <div className="border-top pt-4 mt-4">
//                         <h2 className="h5 mb-4">Add New Address</h2>
//                         {renderAddressForm()}
//                       </div>
//                     )}
                    
//                     {!isAddingNew && addresses.length > 0 && (
//                       <div className="nav pt-4">
//                         <button
//                           className="nav-link animate-underline fs-base px-0"
//                           onClick={() => setIsAddingNew(true)}
//                         >
//                           <i className="ci-plus fs-lg ms-n1 me-2" />
//                           <span className="animate-target">Add address</span>
//                         </button>
//                       </div>
//                     )}
//                   </>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Addresses;

// // v7
// import React, { useState, useEffect, useCallback } from 'react';
// import { Link } from 'react-router-dom';
// import Aside from '../shared/Aside';
// import { AxiosAddressesService } from '@/services/net/AxiosAddressesService';
// import { AxiosService } from '@/services/net/base/AxiosService';
// import { useUser } from '@/context/UserContext';
// import { Address } from '@/services/net/AxiosAddressesService';
// import LoadingSpinner, { LoadingZoom } from '@/components/shared/LoadingSpinner';
// import debounce from 'lodash/debounce';
// import { NotificationService } from '@/services/local/NotificationService';
// // import LoadingSpinner, { LoadingZoom } from '../../../components/shared/LoadingSpinner';

// interface Country {
//   id: number;
//   name: string;
// }

// interface State {
//   id: number;
//   name: string;
// }

// interface City {
//   id: number;
//   name: string;
// }

// const Addresses = () => {
//   const { user } = useUser();
//   const [addresses, setAddresses] = useState<Address[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [editingAddressId, setEditingAddressId] = useState<number | null>(null);
//   const [isAddingNew, setIsAddingNew] = useState(false);
//   const [countries, setCountries] = useState<Country[]>([]);
//   const [states, setStates] = useState<State[]>([]);
//   const [cities, setCities] = useState<City[]>([]);
  
//   // Loading states for operations
//   const [savingAddress, setSavingAddress] = useState<boolean>(false);
//   const [settingPrimary, setSettingPrimary] = useState<number | null>(null);
//   const [deletingAddress, setDeletingAddress] = useState<number | null>(null);

//   // Form states
//   const [formData, setFormData] = useState({
//     countryId: '',
//     stateId: '',
//     cityId: '',
//     zipCode: '',
//     streetAddress: '',
//     isPrimary: false
//   });

//   // Fetch addresses
//   const fetchAddresses = useCallback(async () => {
//     try {
//       setLoading(true);
//       const response = await AxiosAddressesService.fetchAll({
//         include_city: true,
//         include_state: true,
//         include_country: true,
//         include_user: true
//       });
//       setAddresses(response.data.addresses || []);
//     } catch (err: any) {
//       const message = err.response?.data?.message || 'Failed to load addresses';
//       NotificationService.showDialog(message, 'danger');
//     } finally {
//       setLoading(false);
//     }
//   }, []);

//   useEffect(() => {
//     fetchAddresses();
//   }, [fetchAddresses]);

//   // Fetch countries with debounced search
//   const fetchCountries = useCallback(debounce(async (search = '') => {
//     try {
//       const response = await AxiosService.json.get(
//         `/countries?search=${search}&page_size=700`
//       );
//       setCountries(response.data?.countries || []);
//     } catch (err: any) {
//       const message = err.response?.data?.message || 'Failed to load countries';
//       NotificationService.showDialog(message, 'danger');
//     }
//   }, 300), []);

//   useEffect(() => {
//     fetchCountries();
//     return () => fetchCountries.cancel();
//   }, [fetchCountries]);

//   // Fetch states with debounced search
//   const fetchStates = useCallback(debounce(async (countryId: string, search = '') => {
//     if (!countryId) return;
//     try {
//       const response = await AxiosService.json.get(
//         `/states/${countryId}/countries?search=${search}&page_size=100`
//       );
//       setStates(response.data?.states || []);
//     } catch (err: any) {
//       const message = err.response?.data?.message || 'Failed to load states';
//       NotificationService.showDialog(message, 'danger');
//     }
//   }, 300), []);

//   useEffect(() => {
//     if (formData.countryId) {
//       fetchStates(formData.countryId);
//     }
//     fetchStates(formData.countryId);
//     return () => fetchStates.cancel();
//   }, [formData.countryId, fetchStates]);

//   // Fetch cities with debounced search
//   const fetchCities = useCallback(debounce(async (stateId: string, search = '') => {
//     if (!stateId) return;
//     try {
//       const response = await AxiosService.json.get(
//         `/cities/${stateId}/states?search=${search}&page_size=100`
//       );
//       setCities(response.data?.cities || []);
//     } catch (err: any) {
//       const message = err.response?.data?.message || 'Failed to load cities';
//       NotificationService.showDialog(message, 'danger');
//     }
//   }, 300), []);

//   useEffect(() => {
//     if (formData.stateId) {
//       fetchCities(formData.stateId);
//     }
//     return () => fetchCities.cancel();
//   }, [formData.stateId, fetchCities]);

//   const handleEditClick = (address: Address) => {
//     setEditingAddressId(address.id);
//     setFormData({
//       countryId: address.city?.state?.country?.id?.toString() || '',
//       stateId: address.city?.state?.id?.toString() || '',
//       cityId: address.city?.id?.toString() || '',
//       zipCode: address.zip_code || '',
//       streetAddress: address.street_address || '',
//       isPrimary: address.is_primary || false
//     });
//   };

//   const handleCancelEdit = () => {
//     setEditingAddressId(null);
//     setIsAddingNew(false);
//     resetForm();
//   };

//   const resetForm = () => {
//     setFormData({
//       countryId: '',
//       stateId: '',
//       cityId: '',
//       zipCode: '',
//       streetAddress: '',
//       isPrimary: false
//     });
//   };

//   const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     const { name, value, type } = e.target;
//     const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : false;
    
//     setFormData(prev => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value
//     }));
//   };

//   const handleSubmit = async (e: React.FormEvent, addressId?: number) => {
//     e.preventDefault();
//     setSavingAddress(true);
    
//     try {
//       // Construct address data matching backend schema
//       const addressData = {
//         street_address: formData.streetAddress,
//         zip_code: formData.zipCode,
//         city_id: parseInt(formData.cityId),
//         is_primary: formData.isPrimary,
//         first_name: user?.name.split(' ')[0] || '',
//         last_name: user?.name.split(' ').slice(1).join(' ') || '',
//         phone_number: user?.phone || ''
//       };

//       if (addressId) {
//         // Update existing address
//         await AxiosAddressesService.update(addressId.toString(), addressData);
//         NotificationService.showDialog('Address updated successfully', 'success');
//       } else {
//         // Create new address
//         await AxiosAddressesService.create(addressData);
//         NotificationService.showDialog('Address created successfully', 'success');
//       }

//       // Refresh addresses
//       await fetchAddresses();
//       handleCancelEdit();
//     } catch (err: any) {
//       const message = err.response?.data?.message || 'Failed to save address';
//       NotificationService.showDialog(message, 'danger');
//     } finally {
//       setSavingAddress(false);
//     }
//   };

//   const handleDelete = async (addressId: number) => {
//     if (window.confirm('Are you sure you want to delete this address?')) {
//       setDeletingAddress(addressId);
//       try {
//         await AxiosAddressesService.delete(addressId.toString());
//         const updatedAddresses = addresses.filter(addr => addr.id !== addressId);
//         setAddresses(updatedAddresses);
//         NotificationService.showDialog('Address deleted successfully', 'success');
//       } catch (err: any) {
//         console.error(err);
//         const message = err.response?.data?.error || 'Failed to delete address';
//         NotificationService.showDialog(message, 'danger');
//       } finally {
//         setDeletingAddress(null);
//       }
//     }
//   };

//   const handleSetPrimary = async (addressId: number) => {
//     setSettingPrimary(addressId);
//     try {
//       const address = addresses.find(a => a.id === addressId);
//       if (!address) return;

//       // Create full payload with required fields
//       const payload = {
//         street_address: address.street_address,
//         zip_code: address.zip_code,
//         city_id: address.city.id,
//         is_primary: true,
//         first_name: user?.name.split(' ')[0] || '',
//         last_name: user?.name.split(' ').slice(1).join(' ') || '',
//         phone_number: user?.phone || ''
//       };

//       // Update all addresses to set is_primary to false
//       await Promise.all(addresses.map(async addr => {
//         if (addr.id !== addressId && addr.is_primary) {
//           const addrPayload = {
//             ...payload,
//             city_id: addr.city.id,
//             is_primary: false,
//             street_address: addr.street_address,
//             zip_code: addr.zip_code
//           };
//           await AxiosAddressesService.update(addr.id.toString(), addrPayload);
//         }
//       }));

//       // Set the selected address as primary
//       await AxiosAddressesService.update(addressId.toString(), payload);
      
//       // Refresh addresses
//       await fetchAddresses();
//       NotificationService.showDialog('Primary address updated successfully', 'success');
//     } catch (err: any) {
//       const message = err.response?.data?.message || 'Failed to set primary address';
//       NotificationService.showDialog(message, 'error');
//     } finally {
//       setSettingPrimary(null);
//     }
//   };

//   const formatAddress = (address: Address) => {
//     return `${address.street_address || ''}, ${address.city?.name || ''}, ${address.zip_code || ''}`;
//   };

//   const renderAddressForm = (addressId?: number) => {
//     return (
//       <form 
//         className="row g-3 g-sm-4" 
//         onSubmit={(e) => handleSubmit(e, addressId)}
//       >
//         <div className="col-sm-6">
//           <label className="form-label">Country</label>
//           <select 
//             className="form-select" 
//             data-select='{ "searchEnabled": true }'
//             name="countryId"
//             value={formData.countryId}
//             onChange={handleFormChange}
//             required
//           >
//             <option value="">Select country...</option>
//             {countries.map(country => (
//               <option key={country.id} value={country.id.toString()}>
//                 {country.name}
//               </option>
//             ))}
//           </select>
//         </div>
        
//         <div className="col-sm-6">
//           <label className="form-label">State</label>
//           <select 
//             className="form-select" 
//             data-select='{ "searchEnabled": true }'
//             name="stateId"
//             value={formData.stateId}
//             onChange={handleFormChange}
//             disabled={!formData.countryId}
//             required
//           >
//             <option value="">Select state...</option>
//             {states.map(state => (
//               <option key={state.id} value={state.id.toString()}>
//                 {state.name}
//               </option>
//             ))}
//           </select>
//         </div>
        
//         <div className="col-sm-6">
//           <label className="form-label">City</label>
//           <select 
//             className="form-select" 
//             data-select='{ "searchEnabled": true }'
//             name="cityId"
//             value={formData.cityId}
//             onChange={handleFormChange}
//             disabled={!formData.stateId}
//             required
//           >
//             <option value="">Select city...</option>
//             {cities.map(city => (
//               <option key={city.id} value={city.id.toString()}>
//                 {city.name}
//               </option>
//             ))}
//           </select>
//         </div>
        
//         <div className="col-sm-6">
//           <label className="form-label">ZIP code</label>
//           <input
//             type="text"
//             className="form-control"
//             name="zipCode"
//             value={formData.zipCode}
//             onChange={handleFormChange}
//             required
//           />
//         </div>
        
//         <div className="col-12">
//           <label className="form-label">Address</label>
//           <input
//             type="text"
//             className="form-control"
//             name="streetAddress"
//             value={formData.streetAddress}
//             onChange={handleFormChange}
//             required
//           />
//         </div>
        
//         <div className="col-12">
//           <div className="form-check mb-0">
//             <input
//               type="checkbox"
//               className="form-check-input"
//               name="isPrimary"
//               checked={formData.isPrimary}
//               onChange={handleFormChange}
//               id={addressId ? `set-primary-${addressId}` : "set-primary-new"}
//             />
//             <label 
//               className="form-check-label" 
//               htmlFor={addressId ? `set-primary-${addressId}` : "set-primary-new"}
//             >
//               Set as primary address
//             </label>
//           </div>
//         </div>
        
//         <div className="col-12">
//           <div className="d-flex gap-3 pt-2 pt-sm-0">
//             <button 
//               type="submit" 
//               className="btn btn-primary d-flex align-items-center"
//               disabled={savingAddress}
//             >
//               {savingAddress ? (
//                 <>
//                   <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
//                   Saving...
//                 </>
//               ) : addressId ? 'Save changes' : 'Save Address'}
//             </button>
            
//             {addressId && (
//               <button 
//                 type="button" 
//                 className="btn btn-danger d-flex align-items-center"
//                 onClick={() => handleDelete(addressId)}
//                 disabled={deletingAddress === addressId}
//               >
//                 {deletingAddress === addressId ? (
//                   <>
//                     <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
//                     Deleting...
//                   </>
//                 ) : 'Delete'}
//               </button>
//             )}
            
//             <button 
//               type="button" 
//               className="btn btn-secondary"
//               onClick={handleCancelEdit}
//               disabled={savingAddress}
//             >
//               Cancel
//             </button>
//           </div>
//         </div>
//       </form>
//     );
//   };

//   return (
//     <div>
//       <main className="content-wrapper">
//         <div className="container py-5 mt-n2 mt-sm-0">
//           <div className="row pt-md-2 pt-lg-3 pb-sm-2 pb-md-3 pb-lg-4 pb-xl-5">
            
//             <Aside />
            
//             <div className="col-lg-9">
//               <div className="ps-lg-3 ps-xl-0">
//                 <h1 className="h2 mb-1 mb-sm-2">Addresses</h1>
                
//                 {loading ? (
//                   <div className="text-center py-5">
//                     <LoadingSpinner />
//                     <p className="mt-2">Loading addresses...</p>
//                   </div>
//                 ) : (
//                   <>
//                     {addresses.map((address) => (
//                       <div key={address.id} className="border-bottom py-4">
                        
//                         <div className="nav flex-nowrap align-items-center justify-content-between pb-1 mb-3">
//                           <div className="d-flex align-items-center gap-3 me-4">
//                             <h2 className="h6 mb-0">
//                               {address.is_primary ? 'Primary Shipping Address' : 'Shipping Address'}
//                             </h2>
//                             {address.is_primary && (
//                               <span className="badge text-bg-info rounded-pill">Primary</span>
//                             )}
//                           </div>
//                           <div>
                            
//                             {!address.is_primary && (
//                               <button 
//                                 className="btn btn-sm btn-outline-primary me-2"
//                                 onClick={() => handleSetPrimary(address.id)}
//                                 disabled={settingPrimary === address.id}
//                               >
//                                 {settingPrimary === address.id ? (
//                                   <>
//                                     <LoadingZoom size='sm' />
//                                     Setting...
//                                   </>
//                                 ) : 'Set as Primary'}
//                               </button>
//                             )}
//                             <button
//                               className="btn btn-sm btn-outline-secondary"
//                               onClick={() => handleEditClick(address)}
//                               disabled={settingPrimary !== null || deletingAddress !== null}
//                             >
//                               <i className="ci-edit-2 me-1"></i> Edit
//                             </button>
//                           </div>
//                         </div>
                        
//                         {/*  */}
//                          {/* <div className="nav flex-nowrap align-items-center justify-content-between pb-1 mb-3">
//                           <div className="d-flex align-items-center gap-3 me-4">
//                             <h2 className="h6 mb-0">
//                               {address.is_primary ? 'Primary Shipping Address' : 'Shipping Address'}
//                             </h2>
//                             {address.is_primary && (
//                               <span className="badge text-bg-info rounded-pill">Primary</span>
//                             )}
//                           </div>
//                           <div>
//                             {!address.is_primary && (
//                               <button 
//                                 className="btn btn-sm btn-outline-primary me-2"
//                                 onClick={() => handleSetPrimary(address.id)}
//                               >
//                                 Set as Primary
//                               </button>
//                             )}
//                             <button
//                               className="btn btn-sm btn-outline-secondary"
//                               onClick={() => handleEditClick(address)}
//                             >
//                               <i className="ci-edit-2 me-1"></i> Edit
//                             </button>
//                           </div>
//                         </div> */}
//                         {/*  */}

//                         <div className="fs-sm">
//                           <ul className="list-unstyled m-0">
//                             <li>{formatAddress(address)}</li>
//                             {address.city?.state?.name && address.city?.state?.country?.name && (
//                               <li>{address.city.state.name}, {address.city.state.country.name}</li>
//                             )}
//                           </ul>
                          
//                           {editingAddressId === address.id && (
//                             <div className="mt-4">
//                               {renderAddressForm(address.id)}
//                             </div>
//                           )}
//                         </div>
//                       </div>
//                     ))}
                    
//                     {addresses.length === 0 && !isAddingNew && (
//                       <div className="alert alert-info text-center py-4">
//                         <h3 className="h5">No addresses found</h3>
//                         <p className="mb-0">You haven't added any shipping addresses yet</p>
//                         <button 
//                           className="btn btn-primary mt-3"
//                           onClick={() => setIsAddingNew(true)}
//                           disabled={settingPrimary !== null || deletingAddress !== null}
//                         >
//                           Add Your First Address
//                         </button>
//                       </div>
//                     )}
                    
//                     {(isAddingNew || (addresses.length === 0 && isAddingNew)) && (
//                       <div className="border-top pt-4 mt-4">
//                         <h2 className="h5 mb-4">Add New Address</h2>
//                         {renderAddressForm()}
//                       </div>
//                     )}
                    
//                     {!isAddingNew && addresses.length > 0 && (
//                       <div className="nav pt-4">
//                         <button
//                           className="nav-link animate-underline fs-base px-0"
//                           onClick={() => setIsAddingNew(true)}
//                           disabled={settingPrimary !== null || deletingAddress !== null}
//                         >
//                           <i className="ci-plus fs-lg ms-n1 me-2" />
//                           <span className="animate-target">Add address</span>
//                         </button>
//                       </div>
//                     )}
//                   </>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Addresses;



// // v8 - Paginated
// import React, { useState, useEffect, useCallback } from 'react';
// import { Link } from 'react-router-dom';
// import Aside from '../shared/Aside';
// import { AxiosAddressesService } from '@/services/net/AxiosAddressesService';
// import { AxiosService } from '@/services/net/base/AxiosService';
// import { useUser } from '@/context/UserContext';
// import { Address } from '@/services/net/AxiosAddressesService';
// import LoadingSpinner, { LoadingZoom } from '@/components/shared/LoadingSpinner';
// import debounce from 'lodash/debounce';
// import { NotificationService } from '@/services/local/NotificationService';

// interface Country {
//   id: number;
//   name: string;
// }

// interface State {
//   id: number;
//   name: string;
// }

// interface City {
//   id: number;
//   name: string;
// }

// interface PaginationMeta {
//   current_page_number: number;
//   has_next_page: boolean;
//   has_prev_page: boolean;
//   next_page_url: string | null;
//   offset: number;
//   prev_page_url: string | null;
//   requested_page_size: number;
//   total_items_count: number;
//   total_pages_count: number;
// }

// interface AddressesResponse {
//   addresses: Address[];
//   page_meta: PaginationMeta;
//   message: string;
//   success: boolean;
// }

// const Addresses = () => {
//   const { user } = useUser();
//   const [addresses, setAddresses] = useState<Address[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [editingAddressId, setEditingAddressId] = useState<number | null>(null);
//   const [isAddingNew, setIsAddingNew] = useState(false);
//   const [countries, setCountries] = useState<Country[]>([]);
//   const [states, setStates] = useState<State[]>([]);
//   const [cities, setCities] = useState<City[]>([]);
  
//   // Pagination states
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage] = useState(5);
//   const [pagination, setPagination] = useState<PaginationMeta>({
//     current_page_number: 1,
//     has_next_page: false,
//     has_prev_page: false,
//     next_page_url: null,
//     offset: 0,
//     prev_page_url: null,
//     requested_page_size: 10,
//     total_items_count: 0,
//     total_pages_count: 1
//   });
  
//   // Loading states for operations
//   const [savingAddress, setSavingAddress] = useState<boolean>(false);
//   const [settingPrimary, setSettingPrimary] = useState<number | null>(null);
//   const [deletingAddress, setDeletingAddress] = useState<number | null>(null);
//   const [pageLoading, setPageLoading] = useState(false);

//   // Form states
//   const [formData, setFormData] = useState({
//     countryId: '',
//     stateId: '',
//     cityId: '',
//     zipCode: '',
//     streetAddress: '',
//     isPrimary: false
//   });

//   // Fetch addresses with pagination
//   const fetchAddresses = useCallback(async (page = 1) => {
//     try {
//       if (page === 1) {
//         setLoading(true);
//       } else {
//         setPageLoading(true);
//       }
      
//       const response = await AxiosAddressesService.fetchAll({
//         include_city: true,
//         include_state: true,
//         include_country: true,
//         include_user: true,
//         page: page,
//         page_size: itemsPerPage
//       });
      
//       const data = response.data as AddressesResponse;
//       setAddresses(data.addresses || []);
//       setPagination(data.page_meta || {
//         current_page_number: page,
//         has_next_page: false,
//         has_prev_page: false,
//         next_page_url: null,
//         offset: (page - 1) * itemsPerPage,
//         prev_page_url: null,    
//         requested_page_size: itemsPerPage,
//         total_items_count: data.addresses?.length || 0,
//         total_pages_count: 1
//       });
//       setCurrentPage(page);
//     } catch (err: any) {
//       const message = err.response?.data?.message || 'Failed to load addresses';
//       NotificationService.showDialog(message, 'danger');
//     } finally {
//       setLoading(false);
//       setPageLoading(false);
//     }
//   }, [itemsPerPage]);

//   useEffect(() => {
//     fetchAddresses(1);
//   }, [fetchAddresses]);

//   // Fetch countries with debounced search
//   const fetchCountries = useCallback(debounce(async (search = '') => {
//     try {
//       const response = await AxiosService.json.get(
//         `/countries?search=${search}&page_size=700`
//       );
//       setCountries(response.data?.countries || []);
//     } catch (err: any) {
//       const message = err.response?.data?.message || 'Failed to load countries';
//       NotificationService.showDialog(message, 'danger');
//     }
//   }, 300), []);

//   useEffect(() => {
//     fetchCountries();
//     return () => fetchCountries.cancel();
//   }, [fetchCountries]);

//   // Fetch states with debounced search
//   const fetchStates = useCallback(debounce(async (countryId: string, search = '') => {
//     if (!countryId) return;
//     try {
//       const response = await AxiosService.json.get(
//         `/states/${countryId}/countries?search=${search}&page_size=100`
//       );
//       setStates(response.data?.states || []);
//     } catch (err: any) {
//       const message = err.response?.data?.message || 'Failed to load states';
//       NotificationService.showDialog(message, 'danger');
//     }
//   }, 300), []);

//   useEffect(() => {
//     if (formData.countryId) {
//       fetchStates(formData.countryId);
//     }
//     return () => fetchStates.cancel();
//   }, [formData.countryId, fetchStates]);

//   // Fetch cities with debounced search
//   const fetchCities = useCallback(debounce(async (stateId: string, search = '') => {
//     if (!stateId) return;
//     try {
//       const response = await AxiosService.json.get(
//         `/cities/${stateId}/states?search=${search}&page_size=100`
//       );
//       setCities(response.data?.cities || []);
//     } catch (err: any) {
//       const message = err.response?.data?.message || 'Failed to load cities';
//       NotificationService.showDialog(message, 'danger');
//     }
//   }, 300), []);

//   useEffect(() => {
//     if (formData.stateId) {
//       fetchCities(formData.stateId);
//     }
//     return () => fetchCities.cancel();
//   }, [formData.stateId, fetchCities]);

//   // Pagination handlers
//   const handlePageChange = (page: number) => {
//     if (page >= 1 && page <= pagination.total_pages_count && page !== currentPage) {
//       fetchAddresses(page);
//       // Scroll to top of addresses section
//       document.querySelector('.addresses-container')?.scrollIntoView({ 
//         behavior: 'smooth', 
//         block: 'start' 
//       });
//     }
//   };

//   const getVisiblePageNumbers = () => {
//     const totalPages = pagination.total_pages_count;
//     const current = pagination.current_page_number;
//     const delta = 2; // Number of pages to show on each side of current page
    
//     let start = Math.max(1, current - delta);
//     let end = Math.min(totalPages, current + delta);
    
//     // Adjust if we're near the beginning or end
//     if (current <= delta + 1) {
//       end = Math.min(totalPages, delta * 2 + 2);
//     }
//     if (current >= totalPages - delta) {
//       start = Math.max(1, totalPages - delta * 2 - 1);
//     }
    
//     const pages = [];
//     for (let i = start; i <= end; i++) {
//       pages.push(i);
//     }
    
//     return { pages, showStartEllipsis: start > 1, showEndEllipsis: end < totalPages };
//   };

//   const handleEditClick = (address: Address) => {
//     setEditingAddressId(address.id);
//     setFormData({
//       countryId: address.city?.state?.country?.id?.toString() || '',
//       stateId: address.city?.state?.id?.toString() || '',
//       cityId: address.city?.id?.toString() || '',
//       zipCode: address.zip_code || '',
//       streetAddress: address.street_address || '',
//       isPrimary: address.is_primary || false
//     });
//   };

//   const handleCancelEdit = () => {
//     setEditingAddressId(null);
//     setIsAddingNew(false);
//     resetForm();
//   };

//   const resetForm = () => {
//     setFormData({
//       countryId: '',
//       stateId: '',
//       cityId: '',
//       zipCode: '',
//       streetAddress: '',
//       isPrimary: false
//     });
//   };

//   const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     const { name, value, type } = e.target;
//     const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : false;
    
//     setFormData(prev => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value
//     }));
//   };

//   const handleSubmit = async (e: React.FormEvent, addressId?: number) => {
//     e.preventDefault();
//     setSavingAddress(true);
    
//     try {
//       // Construct address data matching backend schema
//       const addressData = {
//         street_address: formData.streetAddress,
//         zip_code: formData.zipCode,
//         city_id: parseInt(formData.cityId),
//         is_primary: formData.isPrimary,
//         first_name: user?.name.split(' ')[0] || '',
//         last_name: user?.name.split(' ').slice(1).join(' ') || '',
//         phone_number: user?.phone || ''
//       };

//       if (addressId) {
//         // Update existing address
//         await AxiosAddressesService.update(addressId.toString(), addressData);
//         NotificationService.showDialog('Address updated successfully', 'success');
//       } else {
//         // Create new address
//         await AxiosAddressesService.create(addressData);
//         NotificationService.showDialog('Address created successfully', 'success');
//       }

//       // Refresh current page
//       await fetchAddresses(currentPage);
//       handleCancelEdit();
//     } catch (err: any) {
//       const message = err.response?.data?.message || 'Failed to save address';
//       NotificationService.showDialog(message, 'danger');
//     } finally {
//       setSavingAddress(false);
//     }
//   };

//   const handleDelete = async (addressId: number) => {
//     if (window.confirm('Are you sure you want to delete this address?')) {
//       setDeletingAddress(addressId);
//       try {
//         await AxiosAddressesService.delete(addressId.toString());
//         NotificationService.showDialog('Address deleted successfully', 'success');
        
//         // If this was the last item on the current page and we're not on page 1, go to previous page
//         if (addresses.length === 1 && currentPage > 1) {
//           await fetchAddresses(currentPage - 1);
//         } else {
//           await fetchAddresses(currentPage);
//         }
//       } catch (err: any) {
//         console.error(err);
//         const message = err.response?.data?.error || 'Failed to delete address';
//         NotificationService.showDialog(message, 'danger');
//       } finally {
//         setDeletingAddress(null);
//       }
//     }
//   };

//   const handleSetPrimary = async (addressId: number) => {
//     setSettingPrimary(addressId);
//     try {
//       const address = addresses.find(a => a.id === addressId);
//       if (!address) return;

//       // Create full payload with required fields
//       const payload = {
//         street_address: address.street_address,
//         zip_code: address.zip_code,
//         city_id: address.city.id,
//         is_primary: true,
//         first_name: user?.name.split(' ')[0] || '',
//         last_name: user?.name.split(' ').slice(1).join(' ') || '',
//         phone_number: user?.phone || ''
//       };

//       // Set the selected address as primary
//       await AxiosAddressesService.update(addressId.toString(), payload);
      
//       // Refresh current page
//       await fetchAddresses(currentPage);
//       NotificationService.showDialog('Primary address updated successfully', 'success');
//     } catch (err: any) {
//       const message = err.response?.data?.message || 'Failed to set primary address';
//       NotificationService.showDialog(message, 'error');
//     } finally {
//       setSettingPrimary(null);
//     }
//   };

//   const formatAddress = (address: Address) => {
//     return `${address.street_address || ''}, ${address.city?.name || ''}, ${address.zip_code || ''}`;
//   };

//   const renderPagination = () => {
//     if (pagination.total_pages_count <= 1) return null;
    
//     const { pages, showStartEllipsis, showEndEllipsis } = getVisiblePageNumbers();
    
//     return (
//       <nav aria-label="Addresses pagination" className="mt-4">
//         <div className="d-flex justify-content-between align-items-center mb-3">
//           <div className="text-muted small">
//             Showing {pagination.offset + 1} to {Math.min(pagination.offset + pagination.requested_page_size, pagination.total_items_count)} of {pagination.total_items_count} addresses
//           </div>
//           <div className="text-muted small">
//             Page {currentPage} of {pagination.total_pages_count}
//           </div>
//         </div>
        
//         <ul className="pagination justify-content-center mb-0">
//           {/* Previous button */}
//           <li className={`page-item ${!pagination.has_prev_page ? 'disabled' : ''}`}>
//             <button 
//               className="page-link"
//               onClick={() => handlePageChange(currentPage - 1)}
//               disabled={!pagination.has_prev_page || pageLoading}
//               aria-label="Previous page"
//             >
//               <i className="ci-chevron-left"></i>
//             </button>
//           </li>
          
//           {/* First page */}
//           {showStartEllipsis && (
//             <>
//               <li className={`page-item ${currentPage === 1 ? 'active' : ''}`}>
//                 <button 
//                   className="page-link"
//                   onClick={() => handlePageChange(1)}
//                   disabled={pageLoading}
//                 >
//                   1
//                 </button>
//               </li>
//               <li className="page-item disabled">
//                 <span className="page-link">...</span>
//               </li>
//             </>
//           )}
          
//           {/* Page numbers */}
//           {pages.map(page => (
//             <li key={page} className={`page-item ${currentPage === page ? 'active' : ''}`}>
//               <button 
//                 className="page-link"
//                 onClick={() => handlePageChange(page)}
//                 disabled={pageLoading}
//                 aria-label={`Go to page ${page}`}
//                 aria-current={currentPage === page ? 'page' : undefined}
//               >
//                 {pageLoading && currentPage === page ? (
//                   <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
//                 ) : page}
//               </button>
//             </li>
//           ))}
          
//           {/* Last page */}
//           {showEndEllipsis && (
//             <>
//               <li className="page-item disabled">
//                 <span className="page-link">...</span>
//               </li>
//               <li className={`page-item ${currentPage === pagination.total_pages_count ? 'active' : ''}`}>
//                 <button 
//                   className="page-link"
//                   onClick={() => handlePageChange(pagination.total_pages_count)}
//                   disabled={pageLoading}
//                 >
//                   {pagination.total_pages_count}
//                 </button>
//               </li>
//             </>
//           )}
          
//           {/* Next button */}
//           <li className={`page-item ${!pagination.has_next_page ? 'disabled' : ''}`}>
//             <button 
//               className="page-link"
//               onClick={() => handlePageChange(currentPage + 1)}
//               disabled={!pagination.has_next_page || pageLoading}
//               aria-label="Next page"
//             >
//               <i className="ci-chevron-right"></i>
//             </button>
//           </li>
//         </ul>
//       </nav>
//     );
//   };

//   const renderAddressForm = (addressId?: number) => {
//     return (
//       <form 
//         className="row g-3 g-sm-4" 
//         onSubmit={(e) => handleSubmit(e, addressId)}
//       >
//         <div className="col-sm-6">
//           <label className="form-label">Country</label>
//           <select 
//             className="form-select" 
//             data-select='{ "searchEnabled": true }'
//             name="countryId"
//             value={formData.countryId}
//             onChange={handleFormChange}
//             required
//           >
//             <option value="">Select country...</option>
//             {countries.map(country => (
//               <option key={country.id} value={country.id.toString()}>
//                 {country.name}
//               </option>
//             ))}
//           </select>
//         </div>
        
//         <div className="col-sm-6">
//           <label className="form-label">State</label>
//           <select 
//             className="form-select" 
//             data-select='{ "searchEnabled": true }'
//             name="stateId"
//             value={formData.stateId}
//             onChange={handleFormChange}
//             disabled={!formData.countryId}
//             required
//           >
//             <option value="">Select state...</option>
//             {states.map(state => (
//               <option key={state.id} value={state.id.toString()}>
//                 {state.name}
//               </option>
//             ))}
//           </select>
//         </div>
        
//         <div className="col-sm-6">
//           <label className="form-label">City</label>
//           <select 
//             className="form-select" 
//             data-select='{ "searchEnabled": true }'
//             name="cityId"
//             value={formData.cityId}
//             onChange={handleFormChange}
//             disabled={!formData.stateId}
//             required
//           >
//             <option value="">Select city...</option>
//             {cities.map(city => (
//               <option key={city.id} value={city.id.toString()}>
//                 {city.name}
//               </option>
//             ))}
//           </select>
//         </div>
        
//         <div className="col-sm-6">
//           <label className="form-label">ZIP code</label>
//           <input
//             type="text"
//             className="form-control"
//             name="zipCode"
//             value={formData.zipCode}
//             onChange={handleFormChange}
//             required
//           />
//         </div>
        
//         <div className="col-12">
//           <label className="form-label">Address</label>
//           <input
//             type="text"
//             className="form-control"
//             name="streetAddress"
//             value={formData.streetAddress}
//             onChange={handleFormChange}
//             required
//           />
//         </div>
        
//         <div className="col-12">
//           <div className="form-check mb-0">
//             <input
//               type="checkbox"
//               className="form-check-input"
//               name="isPrimary"
//               checked={formData.isPrimary}
//               onChange={handleFormChange}
//               id={addressId ? `set-primary-${addressId}` : "set-primary-new"}
//             />
//             <label 
//               className="form-check-label rounded-pill" 
//               htmlFor={addressId ? `set-primary-${addressId}` : "set-primary-new"}
//             >
//               Set as primary address
//             </label>
//           </div>
//         </div>
        
//         <div className="col-12">
//           <div className="d-flex gap-3 pt-2 pt-sm-0">
//             <button 
//               type="submit" 
//               className="btn btn-primary d-flex align-items-center"
//               disabled={savingAddress}
//             >
//               {savingAddress ? (
//                 <>
//                   <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
//                   Saving...
//                 </>
//               ) : addressId ? 'Save changes' : 'Save Address'}
//             </button>
            
//             {addressId && (
//               <button 
//                 type="button" 
//                 className="btn btn-danger d-flex align-items-center"
//                 onClick={() => handleDelete(addressId)}
//                 disabled={deletingAddress === addressId}
//               >
//                 {deletingAddress === addressId ? (
//                   <>
//                     <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
//                     Deleting...
//                   </>
//                 ) : 'Delete'}
//               </button>
//             )}
            
//             <button 
//               type="button" 
//               className="btn btn-secondary"
//               onClick={handleCancelEdit}
//               disabled={savingAddress}
//             >
//               Cancel
//             </button>
//           </div>
//         </div>
//       </form>
//     );
//   };

//   return (
//     <div>
//       <main className="content-wrapper">
//         <div className="container py-5 mt-n2 mt-sm-0">
//           <div className="row pt-md-2 pt-lg-3 pb-sm-2 pb-md-3 pb-lg-4 pb-xl-5">
            
//             <Aside />
            
//             <div className="col-lg-9">
//               <div className="ps-lg-3 ps-xl-0">
//                 <div className="d-flex justify-content-between align-items-center mb-3">
//                   <h1 className="h2 mb-0">Addresses</h1>
//                   {pagination.total_items_count > 0 && (
//                     <span className="badge bg-secondary rounded-pill">
//                       {pagination.total_items_count} Total
//                     </span>
//                   )}
//                 </div>
                
//                 <div className="addresses-container">
//                   {loading ? (
//                     <div className="text-center py-5">
//                       <LoadingSpinner />
//                       <p className="mt-2">Loading addresses...</p>
//                     </div>
//                   ) : (
//                     <>
//                       {pageLoading && (
//                         <div className="position-relative">
//                           <div className="position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center bg-white bg-opacity-75" style={{ zIndex: 10 }}>
//                             <LoadingSpinner />
//                           </div>
//                         </div>
//                       )}
                      
//                       {addresses.map((address) => (
//                         <div key={address.id} className="border-bottom py-4">
                          
//                           <div className="nav flex-nowrap align-items-center justify-content-between pb-1 mb-3">
//                             <div className="d-flex align-items-center gap-3 me-4">
//                               <h2 className="h6 mb-0">
//                                 {address.is_primary ? 'Primary Shipping Address' : 'Shipping Address'}
//                               </h2>
//                               {address.is_primary && (
//                                 <span className="badge text-bg-info rounded-pill">Primary</span>
//                               )}
//                             </div>
//                             <div>
                              
//                               {!address.is_primary && (
//                                 <button 
//                                   className="btn btn-sm btn-outline-primary me-2 rounded-pill"
//                                   onClick={() => handleSetPrimary(address.id)}
//                                   disabled={settingPrimary === address.id || pageLoading}
//                                 >
//                                   {settingPrimary === address.id ? (
//                                     <>
//                                       <LoadingZoom size='sm' />
//                                       Setting...
//                                     </>
//                                   ) : 'Set as Primary'}
//                                 </button>
//                               )}
//                               <button
//                                 className="btn btn-sm btn-outline-secondary rounded-pill"
//                                 onClick={() => handleEditClick(address)}
//                                 disabled={settingPrimary !== null || deletingAddress !== null || pageLoading}
//                               >
//                                 <i className="ci-edit-2 me-1"></i> Edit
//                               </button>
//                             </div>
//                           </div>

//                           <div className="fs-sm">
//                             <ul className="list-unstyled m-0">
//                               <li>{formatAddress(address)}</li>
//                               {address.city?.state?.name && address.city?.state?.country?.name && (
//                                 <li>{address.city.state.name}, {address.city.state.country.name}</li>
//                               )}
//                             </ul>
                            
//                             {editingAddressId === address.id && (
//                               <div className="mt-4">
//                                 {renderAddressForm(address.id)}
//                               </div>
//                             )}
//                           </div>
//                         </div>
//                       ))}
                      
//                       {addresses.length === 0 && !isAddingNew && (
//                         <div className="alert alert-info text-center py-4">
//                           <h3 className="h5">No addresses found</h3>
//                           <p className="mb-0">You haven't added any shipping addresses yet</p>
//                           <button 
//                             className="btn btn-primary mt-3"
//                             onClick={() => setIsAddingNew(true)}
//                             disabled={settingPrimary !== null || deletingAddress !== null}
//                           >
//                             Add Your First Address
//                           </button>
//                         </div>
//                       )}
                      
//                       {(isAddingNew || (addresses.length === 0 && isAddingNew)) && (
//                         <div className="border-top pt-4 mt-4">
//                           <h2 className="h5 mb-4">Add New Address</h2>
//                           {renderAddressForm()}
//                         </div>
//                       )}
                      
//                       {!isAddingNew && addresses.length > 0 && (
//                         <div className="nav pt-4">
//                           <button
//                             className="nav-link animate-underline fs-base px-0"
//                             onClick={() => setIsAddingNew(true)}
//                             disabled={settingPrimary !== null || deletingAddress !== null || pageLoading}
//                           >
//                             <i className="ci-plus fs-lg ms-n1 me-2" />
//                             <span className="animate-target">Add address</span>
//                           </button>
//                         </div>
//                       )}
                      
//                       {/* Pagination Component */}
//                       {renderPagination()}
//                     </>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Addresses;

// v9
// v8 - Paginated (Fixed)
import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Aside from '../shared/Aside';
import { AxiosAddressesService } from '@/services/net/AxiosAddressesService';
import { AxiosService } from '@/services/net/base/AxiosService';
import { useUser } from '@/context/UserContext';
import { Address } from '@/services/net/AxiosAddressesService';
import LoadingSpinner, { LoadingZoom } from '@/components/shared/LoadingSpinner';
import debounce from 'lodash/debounce';
import { NotificationService } from '@/services/local/NotificationService';

interface Country {
  id: number;
  name: string;
}

interface State {
  id: number;
  name: string;
}

interface City {
  id: number;
  name: string;
}

interface PaginationMeta {
  current_page_number: number;
  has_next_page: boolean;
  has_prev_page: boolean;
  next_page_url: string | null;
  offset: number;
  prev_page_url: string | null;
  requested_page_size: number;
  total_items_count: number;
  total_pages_count: number;
}

interface AddressesResponse {
  addresses: Address[];
  page_meta: PaginationMeta;
  message: string;
  success: boolean;
}

const Addresses: React.FC = () => {
  const { user } = useUser();
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingAddressId, setEditingAddressId] = useState<number | null>(null);
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [countries, setCountries] = useState<Country[]>([]);
  const [states, setStates] = useState<State[]>([]);
  const [cities, setCities] = useState<City[]>([]);
  
  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [pagination, setPagination] = useState<PaginationMeta>({
    current_page_number: 1,
    has_next_page: false,
    has_prev_page: false,
    next_page_url: null,
    offset: 0,
    prev_page_url: null,
    requested_page_size: 10,
    total_items_count: 0,
    total_pages_count: 1
  });
  
  // Loading states for operations
  const [savingAddress, setSavingAddress] = useState<boolean>(false);
  const [settingPrimary, setSettingPrimary] = useState<number | null>(null);
  const [deletingAddress, setDeletingAddress] = useState<number | null>(null);
  const [pageLoading, setPageLoading] = useState(false);

  // Form states
  const [formData, setFormData] = useState({
    countryId: '',
    stateId: '',
    cityId: '',
    zipCode: '',
    streetAddress: '',
    isPrimary: false
  });

  // Fetch addresses with pagination
  const fetchAddresses = useCallback(async (page = 1) => {
    try {
      if (page === 1) {
        setLoading(true);
      } else {
        setPageLoading(true);
      }
      
      const response = await AxiosAddressesService.fetchAll({
        include_city: true,
        include_state: true,
        include_country: true,
        include_user: true,
        page: page,
        page_size: itemsPerPage
      });
      
      const data = response.data as AddressesResponse;
      setAddresses(data.addresses || []);
      setPagination(data.page_meta || {
        current_page_number: page,
        has_next_page: false,
        has_prev_page: false,
        next_page_url: null,
        offset: (page - 1) * itemsPerPage,
        prev_page_url: null,    
        requested_page_size: itemsPerPage,
        total_items_count: data.addresses?.length || 0,
        total_pages_count: 1
      });
      setCurrentPage(page);
    } catch (err: any) {
      const message = err.response?.data?.message || 'Failed to load addresses';
      NotificationService.showDialog(message, 'danger');
    } finally {
      setLoading(false);
      setPageLoading(false);
    }
  }, [itemsPerPage]);

  useEffect(() => {
    fetchAddresses(1);
  }, [fetchAddresses]);

  // Fetch countries with debounced search
  const fetchCountries = useCallback(debounce(async (search = '') => {
    try {
      const response = await AxiosService.json.get(
        `/countries?search=${search}&page_size=700`
      );
      setCountries(response.data?.countries || []);
    } catch (err: any) {
      const message = err.response?.data?.message || 'Failed to load countries';
      NotificationService.showDialog(message, 'danger');
    }
  }, 300), []);

  useEffect(() => {
    fetchCountries();
    return () => {
      // Check if cancel method exists before calling it
      if (fetchCountries.cancel) {
        fetchCountries.cancel();
      }
    };
  }, [fetchCountries]);

  // Fetch states with debounced search
  const fetchStates = useCallback(debounce(async (countryId: string, search = '') => {
    if (!countryId) return;
    try {
      const response = await AxiosService.json.get(
        `/states/${countryId}/countries?search=${search}&page_size=100`
      );
      setStates(response.data?.states || []);
    } catch (err: any) {
      const message = err.response?.data?.message || 'Failed to load states';
      NotificationService.showDialog(message, 'danger');
    }
  }, 300), []);

  useEffect(() => {
    if (formData.countryId) {
      fetchStates(formData.countryId);
    }
    return () => {
      // Check if cancel method exists before calling it
      if (fetchStates.cancel) {
        fetchStates.cancel();
      }
    };
  }, [formData.countryId, fetchStates]);

  // Fetch cities with debounced search
  const fetchCities = useCallback(debounce(async (stateId: string, search = '') => {
    if (!stateId) return;
    try {
      const response = await AxiosService.json.get(
        `/cities/${stateId}/states?search=${search}&page_size=100`
      );
      setCities(response.data?.cities || []);
    } catch (err: any) {
      const message = err.response?.data?.message || 'Failed to load cities';
      NotificationService.showDialog(message, 'danger');
    }
  }, 300), []);

  useEffect(() => {
    if (formData.stateId) {
      fetchCities(formData.stateId);
    }
    return () => {
      // Check if cancel method exists before calling it
      if (fetchCities.cancel) {
        fetchCities.cancel();
      }
    };
  }, [formData.stateId, fetchCities]);

  // Pagination handlers
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= pagination.total_pages_count && page !== currentPage) {
      fetchAddresses(page);
      // Scroll to top of addresses section
      const element = document.querySelector('.addresses-container');
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
      }
    }
  };

  const getVisiblePageNumbers = () => {
    const totalPages = pagination.total_pages_count;
    const current = pagination.current_page_number;
    const delta = 2; // Number of pages to show on each side of current page
    
    let start = Math.max(1, current - delta);
    let end = Math.min(totalPages, current + delta);
    
    // Adjust if we're near the beginning or end
    if (current <= delta + 1) {
      end = Math.min(totalPages, delta * 2 + 2);
    }
    if (current >= totalPages - delta) {
      start = Math.max(1, totalPages - delta * 2 - 1);
    }
    
    const pages = [];
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    
    return { pages, showStartEllipsis: start > 1, showEndEllipsis: end < totalPages };
  };

  const handleEditClick = (address: Address) => {
    setEditingAddressId(address.id);
    setFormData({
      countryId: address.city?.state?.country?.id?.toString() || '',
      stateId: address.city?.state?.id?.toString() || '',
      cityId: address.city?.id?.toString() || '',
      zipCode: address.zip_code || '',
      streetAddress: address.street_address || '',
      isPrimary: address.is_primary || false
    });
  };

  const handleCancelEdit = () => {
    setEditingAddressId(null);
    setIsAddingNew(false);
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      countryId: '',
      stateId: '',
      cityId: '',
      zipCode: '',
      streetAddress: '',
      isPrimary: false
    });
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : false;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent, addressId?: number) => {
    e.preventDefault();
    setSavingAddress(true);
    
    try {
      // Construct address data matching backend schema
      const addressData = {
        street_address: formData.streetAddress,
        zip_code: formData.zipCode,
        city_id: parseInt(formData.cityId),
        is_primary: formData.isPrimary,
        first_name: user?.name.split(' ')[0] || '',
        last_name: user?.name.split(' ').slice(1).join(' ') || '',
        phone_number: user?.phone || ''
      };

      if (addressId) {
        // Update existing address
        await AxiosAddressesService.update(addressId.toString(), addressData);
        NotificationService.showDialog('Address updated successfully', 'success');
      } else {
        // Create new address
        await AxiosAddressesService.create(addressData);
        NotificationService.showDialog('Address created successfully', 'success');
      }

      // Refresh current page
      await fetchAddresses(currentPage);
      handleCancelEdit();
    } catch (err: any) {
      const message = err.response?.data?.message || 'Failed to save address';
      NotificationService.showDialog(message, 'danger');
    } finally {
      setSavingAddress(false);
    }
  };

  const handleDelete = async (addressId: number) => {
    if (window.confirm('Are you sure you want to delete this address?')) {
      setDeletingAddress(addressId);
      try {
        await AxiosAddressesService.delete(addressId.toString());
        NotificationService.showDialog('Address deleted successfully', 'success');
        
        // If this was the last item on the current page and we're not on page 1, go to previous page
        if (addresses.length === 1 && currentPage > 1) {
          await fetchAddresses(currentPage - 1);
        } else {
          await fetchAddresses(currentPage);
        }
      } catch (err: any) {
        console.error(err);
        const message = err.response?.data?.error || 'Failed to delete address';
        NotificationService.showDialog(message, 'danger');
      } finally {
        setDeletingAddress(null);
      }
    }
  };

  const handleSetPrimary = async (addressId: number) => {
    setSettingPrimary(addressId);
    try {
      const address = addresses.find(a => a.id === addressId);
      if (!address) return;

      // Create full payload with required fields
      const payload = {
        street_address: address.street_address,
        zip_code: address.zip_code,
        city_id: address.city.id,
        is_primary: true,
        first_name: user?.name.split(' ')[0] || '',
        last_name: user?.name.split(' ').slice(1).join(' ') || '',
        phone_number: user?.phone || ''
      };

      // Set the selected address as primary
      await AxiosAddressesService.update(addressId.toString(), payload);
      
      // Refresh current page
      await fetchAddresses(currentPage);
      NotificationService.showDialog('Primary address updated successfully', 'success');
    } catch (err: any) {
      const message = err.response?.data?.message || 'Failed to set primary address';
      NotificationService.showDialog(message, 'error');
    } finally {
      setSettingPrimary(null);
    }
  };

  const formatAddress = (address: Address) => {
    return `${address.street_address || ''}, ${address.city?.name || ''}, ${address.zip_code || ''}`;
  };

  const renderPagination = () => {
    if (pagination.total_pages_count <= 1) return null;
    
    const { pages, showStartEllipsis, showEndEllipsis } = getVisiblePageNumbers();
    
    return (
      <nav aria-label="Addresses pagination" className="mt-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div className="text-muted small">
            Showing {pagination.offset + 1} to {Math.min(pagination.offset + pagination.requested_page_size, pagination.total_items_count)} of {pagination.total_items_count} addresses
          </div>
          <div className="text-muted small">
            Page {currentPage} of {pagination.total_pages_count}
          </div>
        </div>
        
        <ul className="pagination justify-content-center mb-0">
          {/* Previous button */}
          <li className={`page-item ${!pagination.has_prev_page ? 'disabled' : ''}`}>
            <button 
              className="page-link"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={!pagination.has_prev_page || pageLoading}
              aria-label="Previous page"
            >
              <i className="ci-chevron-left"></i>
            </button>
          </li>
          
          {/* First page */}
          {showStartEllipsis && (
            <>
              <li className={`page-item ${currentPage === 1 ? 'active' : ''}`}>
                <button 
                  className="page-link"
                  onClick={() => handlePageChange(1)}
                  disabled={pageLoading}
                >
                  1
                </button>
              </li>
              <li className="page-item disabled">
                <span className="page-link">...</span>
              </li>
            </>
          )}
          
          {/* Page numbers */}
          {pages.map(page => (
            <li key={page} className={`page-item ${currentPage === page ? 'active' : ''}`}>
              <button 
                className="page-link"
                onClick={() => handlePageChange(page)}
                disabled={pageLoading}
                aria-label={`Go to page ${page}`}
                aria-current={currentPage === page ? 'page' : undefined}
              >
                {pageLoading && currentPage === page ? (
                  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                ) : page}
              </button>
            </li>
          ))}
          
          {/* Last page */}
          {showEndEllipsis && (
            <>
              <li className="page-item disabled">
                <span className="page-link">...</span>
              </li>
              <li className={`page-item ${currentPage === pagination.total_pages_count ? 'active' : ''}`}>
                <button 
                  className="page-link"
                  onClick={() => handlePageChange(pagination.total_pages_count)}
                  disabled={pageLoading}
                >
                  {pagination.total_pages_count}
                </button>
              </li>
            </>
          )}
          
          {/* Next button */}
          <li className={`page-item ${!pagination.has_next_page ? 'disabled' : ''}`}>
            <button 
              className="page-link"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={!pagination.has_next_page || pageLoading}
              aria-label="Next page"
            >
              <i className="ci-chevron-right"></i>
            </button>
          </li>
        </ul>
      </nav>
    );
  };

  const renderAddressForm = (addressId?: number) => {
    return (
      <form 
        className="row g-3 g-sm-4" 
        onSubmit={(e) => handleSubmit(e, addressId)}
      >
        <div className="col-sm-6">
          <label className="form-label">Country</label>
          <select 
            className="form-select" 
            data-select='{ "searchEnabled": true }'
            name="countryId"
            value={formData.countryId}
            onChange={handleFormChange}
            required
          >
            <option value="">Select country...</option>
            {countries.map(country => (
              <option key={country.id} value={country.id.toString()}>
                {country.name}
              </option>
            ))}
          </select>
        </div>
        
        <div className="col-sm-6">
          <label className="form-label">State</label>
          <select 
            className="form-select" 
            data-select='{ "searchEnabled": true }'
            name="stateId"
            value={formData.stateId}
            onChange={handleFormChange}
            disabled={!formData.countryId}
            required
          >
            <option value="">Select state...</option>
            {states.map(state => (
              <option key={state.id} value={state.id.toString()}>
                {state.name}
              </option>
            ))}
          </select>
        </div>
        
        <div className="col-sm-6">
          <label className="form-label">City</label>
          <select 
            className="form-select" 
            data-select='{ "searchEnabled": true }'
            name="cityId"
            value={formData.cityId}
            onChange={handleFormChange}
            disabled={!formData.stateId}
            required
          >
            <option value="">Select city...</option>
            {cities.map(city => (
              <option key={city.id} value={city.id.toString()}>
                {city.name}
              </option>
            ))}
          </select>
        </div>
        
        <div className="col-sm-6">
          <label className="form-label">ZIP code</label>
          <input
            type="text"
            className="form-control"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleFormChange}
            required
          />
        </div>
        
        <div className="col-12">
          <label className="form-label">Address</label>
          <input
            type="text"
            className="form-control"
            name="streetAddress"
            value={formData.streetAddress}
            onChange={handleFormChange}
            required
          />
        </div>
        
        <div className="col-12">
          <div className="form-check mb-0">
            <input
              type="checkbox"
              className="form-check-input"
              name="isPrimary"
              checked={formData.isPrimary}
              onChange={handleFormChange}
              id={addressId ? `set-primary-${addressId}` : "set-primary-new"}
            />
            <label 
              className="form-check-label rounded-pill" 
              htmlFor={addressId ? `set-primary-${addressId}` : "set-primary-new"}
            >
              Set as primary address
            </label>
          </div>
        </div>
        
        <div className="col-12">
          <div className="d-flex gap-3 pt-2 pt-sm-0">
            <button 
              type="submit" 
              className="btn btn-primary d-flex align-items-center"
              disabled={savingAddress}
            >
              {savingAddress ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                  Saving...
                </>
              ) : addressId ? 'Save changes' : 'Save Address'}
            </button>
            
            {addressId && (
              <button 
                type="button" 
                className="btn btn-danger d-flex align-items-center"
                onClick={() => handleDelete(addressId)}
                disabled={deletingAddress === addressId}
              >
                {deletingAddress === addressId ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                    Deleting...
                  </>
                ) : 'Delete'}
              </button>
            )}
            
            <button 
              type="button" 
              className="btn btn-secondary"
              onClick={handleCancelEdit}
              disabled={savingAddress}
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    );
  };

  return (
    <div>
      <main className="content-wrapper">
        <div className="container py-5 mt-n2 mt-sm-0">
          <div className="row pt-md-2 pt-lg-3 pb-sm-2 pb-md-3 pb-lg-4 pb-xl-5">
            
            <Aside />
            
            <div className="col-lg-9">
              <div className="ps-lg-3 ps-xl-0">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h1 className="h2 mb-0">Addresses</h1>
                  {pagination.total_items_count > 0 && (
                    <span className="badge bg-secondary rounded-pill">
                      {pagination.total_items_count} Total
                    </span>
                  )}
                </div>
                
                <div className="addresses-container">
                  {loading ? (
                    <div className="text-center py-5">
                      <LoadingSpinner />
                      <p className="mt-2">Loading addresses...</p>
                    </div>
                  ) : (
                    <>
                      {pageLoading && (
                        <div className="position-relative">
                          <div className="position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center bg-white bg-opacity-75" style={{ zIndex: 10 }}>
                            <LoadingSpinner />
                          </div>
                        </div>
                      )}
                      
                      {addresses.map((address) => (
                        <div key={address.id} className="border-bottom py-4">
                          
                          <div className="nav flex-nowrap align-items-center justify-content-between pb-1 mb-3">
                            <div className="d-flex align-items-center gap-3 me-4">
                              <h2 className="h6 mb-0">
                                {address.is_primary ? 'Primary Shipping Address' : 'Shipping Address'}
                              </h2>
                              {address.is_primary && (
                                <span className="badge text-bg-info rounded-pill">Primary</span>
                              )}
                            </div>
                            <div>
                              
                              {!address.is_primary && (
                                <button 
                                  className="btn btn-sm btn-outline-primary me-2 rounded-pill"
                                  onClick={() => handleSetPrimary(address.id)}
                                  disabled={settingPrimary === address.id || pageLoading}
                                >
                                  {settingPrimary === address.id ? (
                                    <>
                                      <LoadingZoom size='sm' />
                                      Setting...
                                    </>
                                  ) : 'Set as Primary'}
                                </button>
                              )}
                              <button
                                className="btn btn-sm btn-outline-secondary rounded-pill"
                                onClick={() => handleEditClick(address)}
                                disabled={settingPrimary !== null || deletingAddress !== null || pageLoading}
                              >
                                <i className="ci-edit-2 me-1"></i> Edit
                              </button>
                            </div>
                          </div>

                          <div className="fs-sm">
                            <ul className="list-unstyled m-0">
                              <li>{formatAddress(address)}</li>
                              {address.city?.state?.name && address.city?.state?.country?.name && (
                                <li>{address.city.state.name}, {address.city.state.country.name}</li>
                              )}
                            </ul>
                            
                            {editingAddressId === address.id && (
                              <div className="mt-4">
                                {renderAddressForm(address.id)}
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                      
                      {addresses.length === 0 && !isAddingNew && (
                        <div className="alert alert-info text-center py-4">
                          <h3 className="h5">No addresses found</h3>
                          <p className="mb-0">You haven't added any shipping addresses yet</p>
                          <button 
                            className="btn btn-primary mt-3"
                            onClick={() => setIsAddingNew(true)}
                            disabled={settingPrimary !== null || deletingAddress !== null}
                          >
                            Add Your First Address
                          </button>
                        </div>
                      )}
                      
                      {(isAddingNew || (addresses.length === 0 && isAddingNew)) && (
                        <div className="border-top pt-4 mt-4">
                          <h2 className="h5 mb-4">Add New Address</h2>
                          {renderAddressForm()}
                        </div>
                      )}
                      
                      {!isAddingNew && addresses.length > 0 && (
                        <div className="nav pt-4">
                          <button
                            className="nav-link animate-underline fs-base px-0"
                            onClick={() => setIsAddingNew(true)}
                            disabled={settingPrimary !== null || deletingAddress !== null || pageLoading}
                          >
                            <i className="ci-plus fs-lg ms-n1 me-2" />
                            <span className="animate-target">Add address</span>
                          </button>
                        </div>
                      )}
                      
                      {/* Pagination Component */}
                      {renderPagination()}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Addresses;