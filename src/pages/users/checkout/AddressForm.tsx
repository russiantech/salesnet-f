// import { useState, useEffect } from 'react';
// import { Address } from '../../types';

// interface AddressFormProps {
//   address?: Address | null;
//   type: 'delivery' | 'pickup';
//   onSave: (address: Address) => void;
//   onCancel: () => void;
// }

// const AddressForm: React.FC<AddressFormProps> = ({ address, type, onSave, onCancel }) => {
//   const [formData, setFormData] = useState<Address>({
//     type,
//     house: '',
//     floor: '',
//     street: '',
//     city: '',
//     state: '',
//     postcode: '',
//     country: '',
//     phoneNumber: '',
//     isDefault: false,
//     ...address
//   });

//   const [errors, setErrors] = useState<Record<string, string>>({});

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     const { name, value, type } = e.target;
//     const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    
//     setFormData(prev => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value
//     }));
//   };

//   const validate = () => {
//     const newErrors: Record<string, string> = {};
    
//     if (!formData.house) newErrors.house = 'House number is required';
//     if (!formData.street) newErrors.street = 'Street is required';
//     if (!formData.city) newErrors.city = 'City is required';
//     if (!formData.state) newErrors.state = 'State is required';
//     if (!formData.postcode) newErrors.postcode = 'Postcode is required';
//     if (!formData.country) newErrors.country = 'Country is required';
//     if (!formData.phoneNumber) newErrors.phoneNumber = 'Phone number is required';
    
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (validate()) {
//       onSave(formData);
//     }
//   };

//   return (
//     <div className="address-form-modal">
//       <div className="modal-content">
//         <h3>
//           {address?.id 
//             ? `Edit ${type === 'delivery' ? 'Delivery Address' : 'Pickup Location'}`
//             : `Add New ${type === 'delivery' ? 'Delivery Address' : 'Pickup Location'}`}
//         </h3>
        
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label>House/Flat Number*</label>
//             <input
//               type="text"
//               name="house"
//               value={formData.house}
//               onChange={handleChange}
//               className={errors.house ? 'is-invalid' : ''}
//             />
//             {errors.house && <div className="invalid-feedback">{errors.house}</div>}
//           </div>

//           <div className="form-group">
//             <label>Floor (optional)</label>
//             <input
//               type="text"
//               name="floor"
//               value={formData.floor || ''}
//               onChange={handleChange}
//             />
//           </div>

//           <div className="form-group">
//             <label>Street*</label>
//             <input
//               type="text"
//               name="street"
//               value={formData.street}
//               onChange={handleChange}
//               className={errors.street ? 'is-invalid' : ''}
//             />
//             {errors.street && <div className="invalid-feedback">{errors.street}</div>}
//           </div>

//           <div className="form-row">
//             <div className="form-group col-md-6">
//               <label>City*</label>
//               <input
//                 type="text"
//                 name="city"
//                 value={formData.city}
//                 onChange={handleChange}
//                 className={errors.city ? 'is-invalid' : ''}
//               />
//               {errors.city && <div className="invalid-feedback">{errors.city}</div>}
//             </div>

//             <div className="form-group col-md-6">
//               <label>State/Province*</label>
//               <input
//                 type="text"
//                 name="state"
//                 value={formData.state}
//                 onChange={handleChange}
//                 className={errors.state ? 'is-invalid' : ''}
//               />
//               {errors.state && <div className="invalid-feedback">{errors.state}</div>}
//             </div>
//           </div>

//           <div className="form-row">
//             <div className="form-group col-md-6">
//               <label>Postcode*</label>
//               <input
//                 type="text"
//                 name="postcode"
//                 value={formData.postcode}
//                 onChange={handleChange}
//                 className={errors.postcode ? 'is-invalid' : ''}
//               />
//               {errors.postcode && <div className="invalid-feedback">{errors.postcode}</div>}
//             </div>

//             <div className="form-group col-md-6">
//               <label>Country*</label>
//               <select
//                 name="country"
//                 value={formData.country}
//                 onChange={handleChange}
//                 className={errors.country ? 'is-invalid' : ''}
//               >
//                 <option value="">Select Country</option>
//                 <option value="US">United States</option>
//                 <option value="NG">Nigeria</option>
//                 <option value="UK">United Kingdom</option>
//                 {/* Add more countries as needed */}
//               </select>
//               {errors.country && <div className="invalid-feedback">{errors.country}</div>}
//             </div>
//           </div>

//           <div className="form-group">
//             <label>Phone Number*</label>
//             <input
//               type="tel"
//               name="phoneNumber"
//               value={formData.phoneNumber}
//               onChange={handleChange}
//               className={errors.phoneNumber ? 'is-invalid' : ''}
//             />
//             {errors.phoneNumber && <div className="invalid-feedback">{errors.phoneNumber}</div>}
//           </div>

//           {!address?.isDefault && (
//             <div className="form-group form-check">
//               <input
//                 type="checkbox"
//                 name="isDefault"
//                 checked={formData.isDefault || false}
//                 onChange={handleChange}
//                 id="defaultAddress"
//               />
//               <label htmlFor="defaultAddress">Set as default address</label>
//             </div>
//           )}

//           <div className="form-actions">
//             <button type="button" className="btn btn-secondary" onClick={onCancel}>
//               Cancel
//             </button>
//             <button type="submit" className="btn btn-primary">
//               Save Address
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddressForm;

// 
// // V2
// import React, { useState, useEffect } from 'react';
// import { AxiosService } from '@/services/net/base/AxiosService';

// interface AddressFormProps {
//   type: 'delivery' | 'pickup';
//   onSave: (address: any) => void;
//   onCancel: () => void;
//   countries: {id: string; name: string}[];
//   states: {id: number; name: string}[];
//   cities: {id: number; name: string}[];
//   user?: any;
// }

// const AddressForm: React.FC<AddressFormProps> = ({ 
//   type, 
//   onSave, 
//   onCancel,
//   countries,
//   states,
//   cities,
//   user
// }) => {
//   const [formData, setFormData] = useState({
//     street_address: '',
//     house: '',
//     floor: '',
//     city_id: '',
//     state_id: '',
//     country_id: '',
//     zip_code: '',
//     phone_number: user?.phone || '',
//     first_name: user?.first_name || '',
//     last_name: user?.last_name || '',
//     is_primary: false
//   });

//   const [errors, setErrors] = useState<Record<string, string>>({});
//   const [filteredStates, setFilteredStates] = useState<{id: number; name: string}[]>([]);
//   const [filteredCities, setFilteredCities] = useState<{id: number; name: string}[]>([]);

//   useEffect(() => {
//     setFilteredStates(states);
//   }, [states]);

//   useEffect(() => {
//     if (formData.country_id) {
//       setFormData(prev => ({...prev, state_id: '', city_id: ''}));
//       const countryStates = states.filter(s => s.country_id === parseInt(formData.country_id));
//       setFilteredStates(countryStates);
//     }
//   }, [formData.country_id, states]);

//   useEffect(() => {
//     if (formData.state_id) {
//       setFormData(prev => ({...prev, city_id: ''}));
//       const stateCities = cities.filter(c => c.state_id === parseInt(formData.state_id));
//       setFilteredCities(stateCities);
//     }
//   }, [formData.state_id, cities]);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     const { name, value, type } = e.target;
//     const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    
//     setFormData(prev => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value
//     }));
//   };

//   const validate = () => {
//     const newErrors: Record<string, string> = {};
    
//     if (!formData.street_address) newErrors.street_address = 'Street address is required';
//     if (!formData.house) newErrors.house = 'House number is required';
//     if (!formData.city_id) newErrors.city_id = 'City is required';
//     if (!formData.state_id) newErrors.state_id = 'State is required';
//     if (!formData.country_id) newErrors.country_id = 'Country is required';
//     if (!formData.zip_code) newErrors.zip_code = 'Postcode is required';
//     if (!formData.phone_number) newErrors.phone_number = 'Phone number is required';
//     if (!formData.first_name) newErrors.first_name = 'First name is required';
//     if (!formData.last_name) newErrors.last_name = 'Last name is required';
    
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (validate()) {
//       const addressData = {
//         ...formData,
//         street_address: `${formData.house}${formData.floor ? `, Floor ${formData.floor}` : ''}, ${formData.street_address}`,
//         city: filteredCities.find(c => c.id === parseInt(formData.city_id))?.name || '',
//         state: filteredStates.find(s => s.id === parseInt(formData.state_id))?.name || '',
//         country: countries.find(c => c.id === formData.country_id)?.name || ''
//       };
//       onSave(addressData);
//     }
//   };

//   return (
//     <div className="address-form">
//       <div className="nav mb-4">
//         <button
//           className="nav-link animate-underline p-0 border-0 bg-transparent"
//           onClick={onCancel}
//         >
//           <i className="ci-chevron-left fs-lg ms-n1 me-1" />
//           <span className="animate-target">Back to addresses</span>
//         </button>
//       </div>
      
//       <form onSubmit={handleSubmit}>
//         <div className="row mb-3">
//           <div className="col-md-6 mb-3">
//             <label className="form-label">First Name *</label>
//             <input
//               type="text"
//               name="first_name"
//               value={formData.first_name}
//               onChange={handleChange}
//               className={`form-control ${errors.first_name ? 'is-invalid' : ''}`}
//             />
//             {errors.first_name && <div className="invalid-feedback">{errors.first_name}</div>}
//           </div>
//           <div className="col-md-6 mb-3">
//             <label className="form-label">Last Name *</label>
//             <input
//               type="text"
//               name="last_name"
//               value={formData.last_name}
//               onChange={handleChange}
//               className={`form-control ${errors.last_name ? 'is-invalid' : ''}`}
//             />
//             {errors.last_name && <div className="invalid-feedback">{errors.last_name}</div>}
//           </div>
//         </div>

//         <div className="mb-3">
//           <label className="form-label">Country *</label>
//           <select
//             name="country_id"
//             value={formData.country_id}
//             onChange={handleChange}
//             className={`form-select form-select-lg rounded-pill ${errors.country_id ? 'is-invalid' : ''}`}
//           >
//             <option value="">Select country</option>
//             {countries.map(country => (
//               <option key={country.id} value={country.id}>{country.name}</option>
//             ))}
//           </select>
//           {errors.country_id && <div className="invalid-feedback">{errors.country_id}</div>}
//         </div>

//         <div className="mb-3">
//           <label className="form-label">State *</label>
//           <select
//             name="state_id"
//             value={formData.state_id}
//             onChange={handleChange}
//             disabled={!formData.country_id}
//             className={`form-select form-select-lg rounded-pill ${errors.state_id ? 'is-invalid' : ''}`}
//           >
//             <option value="">Select state</option>
//             {filteredStates.map(state => (
//               <option key={state.id} value={state.id}>{state.name}</option>
//             ))}
//           </select>
//           {errors.state_id && <div className="invalid-feedback">{errors.state_id}</div>}
//         </div>

//         <div className="mb-3">
//           <label className="form-label">City *</label>
//           <select
//             name="city_id"
//             value={formData.city_id}
//             onChange={handleChange}
//             disabled={!formData.state_id}
//             className={`form-select form-select-lg rounded-pill ${errors.city_id ? 'is-invalid' : ''}`}
//           >
//             <option value="">Select city</option>
//             {filteredCities.map(city => (
//               <option key={city.id} value={city.id}>{city.name}</option>
//             ))}
//           </select>
//           {errors.city_id && <div className="invalid-feedback">{errors.city_id}</div>}
//         </div>

//         <div className="row mb-3">
//           <div className="col-md-4 mb-3">
//             <label className="form-label">House Number *</label>
//             <input
//               type="text"
//               name="house"
//               value={formData.house}
//               onChange={handleChange}
//               className={`form-control ${errors.house ? 'is-invalid' : ''}`}
//             />
//             {errors.house && <div className="invalid-feedback">{errors.house}</div>}
//           </div>
//           <div className="col-md-4 mb-3">
//             <label className="form-label">Floor (Optional)</label>
//             <input
//               type="text"
//               name="floor"
//               value={formData.floor}
//               onChange={handleChange}
//               className="form-control"
//             />
//           </div>
//           <div className="col-md-4 mb-3">
//             <label className="form-label">Postcode *</label>
//             <input
//               type="text"
//               name="zip_code"
//               value={formData.zip_code}
//               onChange={handleChange}
//               className={`form-control ${errors.zip_code ? 'is-invalid' : ''}`}
//             />
//             {errors.zip_code && <div className="invalid-feedback">{errors.zip_code}</div>}
//           </div>
//         </div>

//         <div className="mb-3">
//           <label className="form-label">Street Address *</label>
//           <input
//             type="text"
//             name="street_address"
//             value={formData.street_address}
//             onChange={handleChange}
//             className={`form-control ${errors.street_address ? 'is-invalid' : ''}`}
//           />
//           {errors.street_address && <div className="invalid-feedback">{errors.street_address}</div>}
//         </div>

//         <div className="mb-4">
//           <label className="form-label">Phone Number *</label>
//           <input
//             type="tel"
//             name="phone_number"
//             value={formData.phone_number}
//             onChange={handleChange}
//             className={`form-control ${errors.phone_number ? 'is-invalid' : ''}`}
//           />
//           {errors.phone_number && <div className="invalid-feedback">{errors.phone_number}</div>}
//         </div>

//         <div className="form-check mb-4">
//           <input
//             type="checkbox"
//             name="is_primary"
//             checked={formData.is_primary}
//             onChange={handleChange}
//             className="form-check-input"
//             id="primaryAddress"
//           />
//           <label className="form-check-label" htmlFor="primaryAddress">
//             Set as primary address
//           </label>
//         </div>

//         <div className="d-grid gap-2">
//           <button type="submit" className="btn btn-primary btn-lg">
//             Save Address
//           </button>
//           <button type="button" className="btn btn-outline-secondary btn-lg" onClick={onCancel}>
//             Cancel
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AddressForm;

// v3
import React, { useState, useEffect, useCallback } from 'react';
import { AxiosService } from '@/services/net/base/AxiosService';

interface AddressFormProps {
  type: 'delivery' | 'pickup';
  onSave: (address: any) => void;
  onCancel: () => void;
  countries: {id: string; name: string}[];
  user?: any;
  initialAddress?: any; // For editing existing addresses
}

const AddressForm: React.FC<AddressFormProps> = ({ 
  type, 
  onSave, 
  onCancel,
  countries,
  user,
  initialAddress
}) => {
  const [formData, setFormData] = useState({
    street_address: initialAddress?.street_address || '',
    house: initialAddress?.house || '',
    floor: initialAddress?.floor || '',
    city_id: initialAddress?.city_id?.toString() || '',
    state_id: initialAddress?.state_id?.toString() || '',
    country_id: initialAddress?.country_id?.toString() || '',
    zip_code: initialAddress?.zip_code || '',
    phone_number: initialAddress?.phone_number || user?.phone || '',
    first_name: initialAddress?.first_name || user?.first_name || '',
    last_name: initialAddress?.last_name || user?.last_name || '',
    is_primary: initialAddress?.is_primary || false
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [filteredStates, setFilteredStates] = useState<{id: number; name: string; country_id: number}[]>([]);
  const [filteredCities, setFilteredCities] = useState<{id: number; name: string; state_id: number}[]>([]);
  const [loadingStates, setLoadingStates] = useState(false);
  const [loadingCities, setLoadingCities] = useState(false);

  // Fetch states when country changes
  const fetchStates = useCallback(async (countryId: string) => {
    if (!countryId) {
      setFilteredStates([]);
      return;
    }

    setLoadingStates(true);
    try {
      const response = await AxiosService.json.get(`/states/${countryId}/countries?page_size=100`);
      setFilteredStates(response.data?.states || []);
    } catch (error) {
      console.error('Failed to fetch states:', error);
      setFilteredStates([]);
    } finally {
      setLoadingStates(false);
    }
  }, []);

  // Fetch cities when state changes
  const fetchCities = useCallback(async (stateId: string) => {
    if (!stateId) {
      setFilteredCities([]);
      return;
    }

    setLoadingCities(true);
    try {
      const response = await AxiosService.json.get(`/cities/${stateId}/states?page_size=100`);
      setFilteredCities(response.data?.cities || []);
    } catch (error) {
      console.error('Failed to fetch cities:', error);
      setFilteredCities([]);
    } finally {
      setLoadingCities(false);
    }
  }, []);

  // Handle country change - reset state and city
  useEffect(() => {
    if (formData.country_id) {
      // Reset dependent fields
      setFormData(prev => ({
        ...prev,
        state_id: '',
        city_id: ''
      }));
      
      // Clear cities since state is being reset
      setFilteredCities([]);
      
      // Fetch states for the new country
      fetchStates(formData.country_id);
    } else {
      // No country selected, clear everything
      setFilteredStates([]);
      setFilteredCities([]);
    }
  }, [formData.country_id, fetchStates]);

  // Handle state change - reset city
  useEffect(() => {
    if (formData.state_id) {
      // Reset city when state changes
      setFormData(prev => ({
        ...prev,
        city_id: ''
      }));
      
      // Fetch cities for the new state
      fetchCities(formData.state_id);
    } else {
      // No state selected, clear cities
      setFilteredCities([]);
    }
  }, [formData.state_id, fetchCities]);

  // Initialize form with existing address data
  useEffect(() => {
    if (initialAddress) {
      // If we have an initial address, fetch the dependent data
      if (initialAddress.country_id) {
        fetchStates(initialAddress.country_id.toString());
      }
      if (initialAddress.state_id) {
        fetchCities(initialAddress.state_id.toString());
      }
    }
  }, [initialAddress, fetchStates, fetchCities]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Clear any existing error for this field
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.street_address.trim()) newErrors.street_address = 'Street address is required';
    if (!formData.house.trim()) newErrors.house = 'House number is required';
    if (!formData.city_id) newErrors.city_id = 'City is required';
    if (!formData.state_id) newErrors.state_id = 'State is required';
    if (!formData.country_id) newErrors.country_id = 'Country is required';
    if (!formData.zip_code.trim()) newErrors.zip_code = 'Postcode is required';
    if (!formData.phone_number.trim()) newErrors.phone_number = 'Phone number is required';
    if (!formData.first_name.trim()) newErrors.first_name = 'First name is required';
    if (!formData.last_name.trim()) newErrors.last_name = 'Last name is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      const selectedCity = filteredCities.find(c => c.id === parseInt(formData.city_id));
      const selectedState = filteredStates.find(s => s.id === parseInt(formData.state_id));
      const selectedCountry = countries.find(c => c.id === formData.country_id);

      const addressData = {
        ...formData,
        street_address: `${formData.house}${formData.floor ? `, Floor ${formData.floor}` : ''}, ${formData.street_address}`,
        city: selectedCity?.name || '',
        state: selectedState?.name || '',
        country: selectedCountry?.name || '',
        city_id: parseInt(formData.city_id),
        state_id: parseInt(formData.state_id)
      };
      onSave(addressData);
    }
  };

  return (
    <div className="address-form">
      <div className="nav mb-4">
        <button
          className="nav-link animate-underline p-0 border-0 bg-transparent"
          onClick={onCancel}
          type="button"
        >
          <i className="ci-chevron-left fs-lg ms-n1 me-1" />
          <span className="animate-target">Back to addresses</span>
        </button>
      </div>
      
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <div className="col-md-6 mb-3">
            <label className="form-label">First Name *</label>
            <input
              type="text"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              className={`form-control ${errors.first_name ? 'is-invalid' : ''}`}
            />
            {errors.first_name && <div className="invalid-feedback">{errors.first_name}</div>}
          </div>
          <div className="col-md-6 mb-3">
            <label className="form-label">Last Name *</label>
            <input
              type="text"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              className={`form-control ${errors.last_name ? 'is-invalid' : ''}`}
            />
            {errors.last_name && <div className="invalid-feedback">{errors.last_name}</div>}
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Country *</label>
          <select
            name="country_id"
            value={formData.country_id}
            onChange={handleChange}
            className={`form-select form-select-lg rounded-pill ${errors.country_id ? 'is-invalid' : ''}`}
          >
            <option value="">Select country</option>
            {countries.map(country => (
              <option key={country.id} value={country.id}>{country.name}</option>
            ))}
          </select>
          {errors.country_id && <div className="invalid-feedback">{errors.country_id}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">State *</label>
          <select
            name="state_id"
            value={formData.state_id}
            onChange={handleChange}
            disabled={!formData.country_id || loadingStates}
            className={`form-select form-select-lg rounded-pill ${errors.state_id ? 'is-invalid' : ''}`}
          >
            <option value="">
              {loadingStates ? 'Loading states...' : 'Select state'}
            </option>
            {filteredStates.map(state => (
              <option key={state.id} value={state.id}>{state.name}</option>
            ))}
          </select>
          {errors.state_id && <div className="invalid-feedback">{errors.state_id}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">City *</label>
          <select
            name="city_id"
            value={formData.city_id}
            onChange={handleChange}
            disabled={!formData.state_id || loadingCities}
            className={`form-select form-select-lg rounded-pill ${errors.city_id ? 'is-invalid' : ''}`}
          >
            <option value="">
              {loadingCities ? 'Loading cities...' : 'Select city'}
            </option>
            {filteredCities.map(city => (
              <option key={city.id} value={city.id}>{city.name}</option>
            ))}
          </select>
          {errors.city_id && <div className="invalid-feedback">{errors.city_id}</div>}
        </div>

        <div className="row mb-3">
          <div className="col-md-4 mb-3">
            <label className="form-label">House Number *</label>
            <input
              type="text"
              name="house"
              value={formData.house}
              onChange={handleChange}
              className={`form-control ${errors.house ? 'is-invalid' : ''}`}
            />
            {errors.house && <div className="invalid-feedback">{errors.house}</div>}
          </div>
          <div className="col-md-4 mb-3">
            <label className="form-label">Floor (Optional)</label>
            <input
              type="text"
              name="floor"
              value={formData.floor}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="col-md-4 mb-3">
            <label className="form-label">Postcode *</label>
            <input
              type="text"
              name="zip_code"
              value={formData.zip_code}
              onChange={handleChange}
              className={`form-control ${errors.zip_code ? 'is-invalid' : ''}`}
            />
            {errors.zip_code && <div className="invalid-feedback">{errors.zip_code}</div>}
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Street Address *</label>
          <input
            type="text"
            name="street_address"
            value={formData.street_address}
            onChange={handleChange}
            className={`form-control ${errors.street_address ? 'is-invalid' : ''}`}
          />
          {errors.street_address && <div className="invalid-feedback">{errors.street_address}</div>}
        </div>

        <div className="mb-4">
          <label className="form-label">Phone Number *</label>
          <input
            type="tel"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleChange}
            className={`form-control ${errors.phone_number ? 'is-invalid' : ''}`}
          />
          {errors.phone_number && <div className="invalid-feedback">{errors.phone_number}</div>}
        </div>

        <div className="form-check mb-4">
          <input
            type="checkbox"
            name="is_primary"
            checked={formData.is_primary}
            onChange={handleChange}
            className="form-check-input"
            id="primaryAddress"
          />
          <label className="form-check-label" htmlFor="primaryAddress">
            Set as primary address
          </label>
        </div>

        <div className="d-grid gap-2">
          <button 
            type="submit" 
            className="btn btn-primary btn-lg"
            disabled={loadingStates || loadingCities}
          >
            {loadingStates || loadingCities ? 'Loading...' : 'Save Address'}
          </button>
          <button 
            type="button" 
            className="btn btn-outline-secondary btn-lg" 
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddressForm;