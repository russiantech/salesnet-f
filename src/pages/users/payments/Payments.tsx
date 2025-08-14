// import AddPaymentModal from './AddPaymentModal'
// import Aside from '../shared/Aside'
// // import Navigation from '../../../components/shared/Navigation'

// const Payments = () => {
//   return (
//     <>

//       <div>
//         {/* Add payment method modal */}
//         <AddPaymentModal />

//         {/* <Navigation /> */}
        
//         {/* Page content */}
//         <main className="content-wrapper">
//           <div className="container py-5 mt-n2 mt-sm-0">
//             <div className="row pt-md-2 pt-lg-3 pb-sm-2 pb-md-3 pb-lg-4 pb-xl-5">
              
//               {/* Sidebar navigation that turns into offcanvas on screens < 992px wide (lg breakpoint) */}
//               <Aside />

//               {/* Payment methods content */}
//               <div className="col-lg-9">
//                 <div className="ps-lg-3 ps-xl-0">
//                   {/* Page title */}
//                   <h1 className="h2 pb-2 pb-md-3">Payment methods</h1>
//                   {/* Payment methods (Grid) */}
//                   <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 g-md-4 g-lg-3 g-xl-4">
//                     <div className="col">
//                       <div className="card h-100">
//                         <div className="card-body pb-3">
//                           <div className="d-flex align-items-start justify-content-between mb-4">
//                             <img src="/assets/img/payment-methods/mastercard.svg" className="m-n3" width={100} alt="Mastercard" />
//                             <span className="badge text-bg-info rounded-pill">Primary</span>
//                           </div>
//                           <div className="h6 mb-1">**** **** **** 8341</div>
//                           <div className="text-danger fs-xs">Expired 05/24</div>
//                         </div>
//                         <div className="card-footer d-flex gap-3 bg-transparent border-0 pt-0 pb-4">
//                           <button type="button" className="btn btn-sm btn-outline-secondary rounded-pill">Edit</button>
//                           <button type="button" className="btn btn-sm btn-outline-secondary rounded-pill">Remove</button>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="col">
//                       <div className="card h-100">
//                         <div className="card-body pb-3">
//                           <div className="d-flex align-items-start justify-content-between mb-4">
//                              <img src="/assets/img/payment-methods/visa-light-mode.svg" className="d-none-dark m-n3" width={100} alt="Visa" />
//                              <img src="/assets/img/payment-methods/visa-dark-mode.svg" className="d-none d-block-dark m-n3" width={100} alt="Visa" />
//                             <div className="nav animate-underline">
//                               <a className="nav-link animate-target fs-xs p-0" href="#!">Set as primary</a>
//                             </div>
//                           </div>
//                           <div className="h6 mb-1">**** **** **** 1276</div>
//                           <div className="text-body fs-xs">Expiration 01/27</div>
//                         </div>
//                         <div className="card-footer d-flex gap-3 bg-transparent border-0 pt-0 pb-4">
//                           <button type="button" className="btn btn-sm btn-outline-secondary rounded-pill">Edit</button>
//                           <button type="button" className="btn btn-sm btn-outline-secondary rounded-pill">Remove</button>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="col">
//                       <div className="card border-0 h-100">
//                         <span className="position-absolute top-0 start-0 w-100 h-100 border border-dashed border-secondary border-opacity-25 rounded d-none-dark" />
//                         <span className="position-absolute top-0 start-0 w-100 h-100 border border-dashed border-light border-opacity-25 rounded d-none d-block-dark" />
//                         <div className="card-body position-relative z-2 nav align-items-center justify-content-center py-5">
//                           <a className="nav-link animate-underline stretched-link min-w-0 fs-base px-0" href="#addPaymentModal" data-bs-toggle="modal">
//                             <i className="ci-plus fs-lg ms-n2 me-2" />
//                             <span className="animate-target text-truncate">Add payment method</span>
//                           </a>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </main>

//       </div>


//     </>
//   )
// }

// export default Payments

// // v2
// // src/pages/user/Payments.tsx
// import React, { useState, useEffect } from 'react';
// // import AddPaymentModal from '../../components/user/payments/AddPaymentModal';
// // import Aside from '../../components/shared/Aside';
// import axios from 'axios';
// import { useAuth } from '../../../context/AuthContext';
// import { NotificationService } from '../../../services/local/NotificationService';
// import Aside from '../shared/Aside';
// import AddPaymentModal from './AddPaymentModal';
// // import { useAuth } from '../../context/AuthContext';

// type PaymentMethod = {
//   id: string;
//   type: 'card' | 'paypal';
//   details: {
//     last4?: string;
//     brand?: string;
//     name?: string;
//     exp_month?: string;
//     exp_year?: string;
//     email?: string;
//   };
//   is_primary: boolean;
//   created_at: string;
// };

// const Payments = () => {
//   const { user } = useAuth();
//   const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [isSettingPrimary, setIsSettingPrimary] = useState<string | null>(null);
//   const [isDeleting, setIsDeleting] = useState<string | null>(null);

//   useEffect(() => {
//     fetchPaymentMethods();
//   }, []);

//   const fetchPaymentMethods = async () => {
//     try {
//       setIsLoading(true);
//       const response = await axios.get(`/api/payment-methods?userId=${user?.id}`);
//       setPaymentMethods(response.data);
//     } catch (error) {
//       console.error('Failed to fetch payment methods:', error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleAddPayment = (newMethod: PaymentMethod) => {
//     setPaymentMethods(prev => [...prev, newMethod]);
//   };

//   const handleSetPrimary = async (methodId: string) => {
//     try {
//       setIsSettingPrimary(methodId);
//       await axios.patch(`/api/payment-methods/${methodId}/primary`, { userId: user?.id });
      
//       setPaymentMethods(prev => prev.map(method => ({
//         ...method,
//         is_primary: method.id === methodId
//       })));
      
//       NotificationService.showDialog('Primary payment method updated!');
//     } catch (error) {
//       console.error('Failed to set primary method:', error);
//       NotificationService.showDialog('Failed to update primary method', 'error');
//     } finally {
//       setIsSettingPrimary(null);
//     }
//   };

//   const handleDelete = async (methodId: string) => {
//     if (!window.confirm('Are you sure you want to delete this payment method?')) return;
    
//     try {
//       setIsDeleting(methodId);
//       await axios.delete(`/api/payment-methods/${methodId}?userId=${user?.id}`);
      
//       setPaymentMethods(prev => prev.filter(method => method.id !== methodId));
//       NotificationService.showDialog('Payment method deleted!');
//     } catch (error) {
//       console.error('Failed to delete payment method:', error);
//       NotificationService.showDialog('Failed to delete payment method', 'error');
//     } finally {
//       setIsDeleting(null);
//     }
//   };

//   const formatCardNumber = (last4: string) => `**** **** **** ${last4}`;
//   const formatExpiration = (month: string, year: string) => `${month}/${year.slice(-2)}`;
//   const getCardIcon = (brand: string) => {
//     const icons: Record<string, string> = {
//       visa: '/assets/img/payment-methods/visa.svg',
//       mastercard: '/assets/img/payment-methods/mastercard.svg',
//       amex: '/assets/img/payment-methods/amex.svg',
//       discover: '/assets/img/payment-methods/discover.svg'
//     };
//     return icons[brand.toLowerCase()] || '/assets/img/payment-methods/credit-card.svg';
//   };

//   return (
//     <>
//       <AddPaymentModal onAddPayment={handleAddPayment} userId={user?.id} />

//       <div>
//         <main className="content-wrapper">
//           <div className="container py-5 mt-n2 mt-sm-0">
//             <div className="row pt-md-2 pt-lg-3 pb-sm-2 pb-md-3 pb-lg-4 pb-xl-5">
//               <Aside />
              
//               <div className="col-lg-9">
//                 <div className="ps-lg-3 ps-xl-0">
//                   <h1 className="h2 pb-2 pb-md-3">Payment methods</h1>
                  
//                   {isLoading ? (
//                     <div className="text-center py-5">
//                       <div className="spinner-border text-primary" role="status">
//                         <span className="visually-hidden">Loading...</span>
//                       </div>
//                     </div>
//                   ) : (
//                     <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 g-md-4 g-lg-3 g-xl-4">
//                       {paymentMethods.map(method => (
//                         <div className="col" key={method.id}>
//                           <div className="card h-100">
//                             <div className="card-body pb-3">
//                               <div className="d-flex align-items-start justify-content-between mb-4">
//                                 {method.type === 'card' ? (
//                                   <img 
//                                     src={getCardIcon(method.details.brand || '')} 
//                                     className="m-n3" 
//                                     width={100} 
//                                     alt={method.details.brand} 
//                                   />
//                                 ) : (
//                                   <img 
//                                     src="/assets/img/payment-methods/paypal-icon.svg" 
//                                     className="m-n3" 
//                                     width={100} 
//                                     alt="PayPal" 
//                                   />
//                                 )}
                                
//                                 {method.is_primary && (
//                                   <span className="badge text-bg-info rounded-pill">Primary</span>
//                                 )}
//                               </div>
                              
//                               <div className="h6 mb-1">
//                                 {method.type === 'card' 
//                                   ? formatCardNumber(method.details.last4 || '') 
//                                   : method.details.email}
//                               </div>
                              
//                               {method.type === 'card' && (
//                                 <div className={`fs-xs ${method.is_expired ? 'text-danger' : 'text-body'}`}>
//                                   Expires {formatExpiration(
//                                     method.details.exp_month || '', 
//                                     method.details.exp_year || ''
//                                   )}
//                                 </div>
//                               )}
//                             </div>
                            
//                             <div className="card-footer d-flex gap-3 bg-transparent border-0 pt-0 pb-4">
//                               {!method.is_primary && (
//                                 <button 
//                                   type="button" 
//                                   className="btn btn-sm btn-outline-secondary rounded-pill"
//                                   onClick={() => handleSetPrimary(method.id)}
//                                   disabled={isSettingPrimary === method.id}
//                                 >
//                                   {isSettingPrimary === method.id ? (
//                                     <span className="spinner-border spinner-border-sm me-1" />
//                                   ) : 'Set Primary'}
//                                 </button>
//                               )}
                              
//                               <button 
//                                 type="button" 
//                                 className="btn btn-sm btn-outline-danger rounded-pill"
//                                 onClick={() => handleDelete(method.id)}
//                                 disabled={isDeleting === method.id}
//                               >
//                                 {isDeleting === method.id ? (
//                                   <span className="spinner-border spinner-border-sm me-1" />
//                                 ) : 'Remove'}
//                               </button>
//                             </div>
//                           </div>
//                         </div>
//                       ))}
                      
//                       <div className="col">
//                         <div className="card border-0 h-100">
//                           <span className="position-absolute top-0 start-0 w-100 h-100 border border-dashed border-secondary border-opacity-25 rounded d-none-dark" />
//                           <span className="position-absolute top-0 start-0 w-100 h-100 border border-dashed border-light border-opacity-25 rounded d-none d-block-dark" />
//                           <div className="card-body position-relative z-2 nav align-items-center justify-content-center py-5">
//                             <a 
//                               className="nav-link animate-underline stretched-link min-w-0 fs-base px-0" 
//                               href="#addPaymentModal" 
//                               data-bs-toggle="modal"
//                             >
//                               <i className="ci-plus fs-lg ms-n2 me-2" />
//                               <span className="animate-target text-truncate">Add payment method</span>
//                             </a>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </main>
//       </div>
//     </>
//   );
// };

// export default Payments;

// v3 - implimented with backend

// // src/pages/user/Payments.tsx
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useAuth } from '../../../context/AuthContext';
// import { NotificationService } from '../../../services/local/NotificationService';
// import Aside from '../shared/Aside';
// import AddPaymentModal from './AddPaymentModal';

// type PaymentMethod = {
//   id: string;
//   type: 'card' | 'paypal';
//   details: {
//     last4?: string;
//     brand?: string;
//     name?: string;
//     exp_month?: string;
//     exp_year?: string;
//     email?: string;
//   };
//   is_primary: boolean;
//   created_at: string;
// };

// const Payments = () => {
//   const { user } = useAuth();
//   const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [isSettingPrimary, setIsSettingPrimary] = useState<string | null>(null);
//   const [isDeleting, setIsDeleting] = useState<string | null>(null);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     fetchPaymentMethods();
//   }, []);

//   const fetchPaymentMethods = async () => {
//     try {
//       setIsLoading(true);
//       setError(null);
//       const response = await axios.get(`/api/payment-methods`, {
//         params: { user_id: user?.id },
//         headers: { 'Content-Type': 'application/json' }
//       });
      
//       // Ensure response is an array
//       if (Array.isArray(response.data)) {
//         setPaymentMethods(response.data);
//       } else if (response.data && Array.isArray(response.data.payment_methods)) {
//         setPaymentMethods(response.data.payment_methods);
//       } else {
//         throw new Error('Invalid response format from server');
//       }
//     } catch (err: any) {
//       console.error('Failed to fetch payment methods:', err);
//       setError(err.response?.data?.message || 'Failed to load payment methods');
//       NotificationService.showDialog('Failed to load payment methods', 'error');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleAddPayment = (newMethod: PaymentMethod) => {
//     setPaymentMethods(prev => [...prev, newMethod]);
//   };

//   const handleSetPrimary = async (methodId: string) => {
//     try {
//       setIsSettingPrimary(methodId);
//       await axios.patch(`/api/payment-methods/${methodId}/primary`, 
//         { user_id: user?.id },
//         { headers: { 'Content-Type': 'application/json' } }
//       );
      
//       setPaymentMethods(prev => prev.map(method => ({
//         ...method,
//         is_primary: method.id === methodId
//       })));
      
//       NotificationService.showDialog('Primary payment method updated!');
//     } catch (err: any) {
//       console.error('Failed to set primary method:', err);
//       NotificationService.showDialog(
//         err.response?.data?.message || 'Failed to update primary method', 
//         'error'
//       );
//     } finally {
//       setIsSettingPrimary(null);
//     }
//   };

//   const handleDelete = async (methodId: string) => {
//     if (!window.confirm('Are you sure you want to delete this payment method?')) return;
    
//     try {
//       setIsDeleting(methodId);
//       await axios.delete(`/api/payment-methods/${methodId}`, {
//         params: { user_id: user?.id },
//         headers: { 'Content-Type': 'application/json' }
//       });
      
//       setPaymentMethods(prev => prev.filter(method => method.id !== methodId));
//       NotificationService.showDialog('Payment method deleted!');
//     } catch (err: any) {
//       console.error('Failed to delete payment method:', err);
//       NotificationService.showDialog(
//         err.response?.data?.message || 'Failed to delete payment method', 
//         'error'
//       );
//     } finally {
//       setIsDeleting(null);
//     }
//   };

//   const formatCardNumber = (last4: string) => last4 ? `**** **** **** ${last4}` : 'New card';
//   const formatExpiration = (month: string, year: string) => 
//     month && year ? `${month.padStart(2, '0')}/${year.slice(-2)}` : 'N/A';
  
//   const getCardIcon = (brand: string) => {
//     const icons: Record<string, string> = {
//       visa: '/assets/img/payment-methods/visa.svg',
//       mastercard: '/assets/img/payment-methods/mastercard.svg',
//       amex: '/assets/img/payment-methods/amex.svg',
//       discover: '/assets/img/payment-methods/discover.svg',
//       paypal: '/assets/img/payment-methods/paypal-icon.svg'
//     };
//     return icons[brand.toLowerCase()] || '/assets/img/payment-methods/credit-card.svg';
//   };

//   return (
//     <>
//       <AddPaymentModal onAddPayment={handleAddPayment} userId={user?.id} />

//       <div>
//         <main className="content-wrapper">
//           <div className="container py-5 mt-n2 mt-sm-0">
//             <div className="row pt-md-2 pt-lg-3 pb-sm-2 pb-md-3 pb-lg-4 pb-xl-5">
//               <Aside />
              
//               <div className="col-lg-9">
//                 <div className="ps-lg-3 ps-xl-0">
//                   <h1 className="h2 pb-2 pb-md-3">Payment methods</h1>
                  
//                   {error ? (
//                     <div className="alert alert-danger">
//                       {error} <button className="btn btn-sm btn-outline-secondary ms-2" onClick={fetchPaymentMethods}>Retry</button>
//                     </div>
//                   ) : isLoading ? (
//                     <div className="text-center py-5">
//                       <div className="spinner-border text-primary" role="status">
//                         <span className="visually-hidden">Loading...</span>
//                       </div>
//                       <p className="mt-2">Loading payment methods...</p>
//                     </div>
//                   ) : paymentMethods.length === 0 ? (
//                     <div className="text-center py-5">
//                       <div className="fs-1 text-muted">
//                         <i className="ci-credit-card" />
//                       </div>
//                       <h3>No payment methods</h3>
//                       <p className="text-muted mb-4">
//                         You haven't added any payment methods yet
//                       </p>
//                       <a 
//                         href="#addPaymentModal" 
//                         className="btn btn-primary"
//                         data-bs-toggle="modal"
//                       >
//                         <i className="ci-plus me-2" />
//                         Add Payment Method
//                       </a>
//                     </div>
//                   ) : (
//                     <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 g-md-4 g-lg-3 g-xl-4">
//                       {paymentMethods.map(method => (
//                         <div className="col" key={method.id}>
//                           <div className="card h-100">
//                             <div className="card-body pb-3">
//                               <div className="d-flex align-items-start justify-content-between mb-4">
//                                 <img 
//                                   src={getCardIcon(method.type === 'card' ? method.details.brand || 'card' : 'paypal')} 
//                                   className="m-n3" 
//                                   width={100} 
//                                   alt={method.type} 
//                                 />
                                
//                                 {method.is_primary && (
//                                   <span className="badge text-bg-info rounded-pill">Primary</span>
//                                 )}
//                               </div>
                              
//                               <div className="h6 mb-1">
//                                 {method.type === 'card' 
//                                   ? formatCardNumber(method.details.last4 || '') 
//                                   : method.details.email || 'PayPal account'}
//                               </div>
                              
//                               {method.type === 'card' && (
//                                 <div className="text-body fs-xs">
//                                   Expires {formatExpiration(
//                                     method.details.exp_month || '', 
//                                     method.details.exp_year || ''
//                                   )}
//                                 </div>
//                               )}
//                             </div>
                            
//                             <div className="card-footer d-flex gap-3 bg-transparent border-0 pt-0 pb-4">
//                               {!method.is_primary && (
//                                 <button 
//                                   type="button" 
//                                   className="btn btn-sm btn-outline-secondary rounded-pill"
//                                   onClick={() => handleSetPrimary(method.id)}
//                                   disabled={isSettingPrimary === method.id}
//                                 >
//                                   {isSettingPrimary === method.id ? (
//                                     <span className="spinner-border spinner-border-sm me-1" />
//                                   ) : 'Set Primary'}
//                                 </button>
//                               )}
                              
//                               <button 
//                                 type="button" 
//                                 className="btn btn-sm btn-outline-danger rounded-pill"
//                                 onClick={() => handleDelete(method.id)}
//                                 disabled={isDeleting === method.id}
//                               >
//                                 {isDeleting === method.id ? (
//                                   <span className="spinner-border spinner-border-sm me-1" />
//                                 ) : 'Remove'}
//                               </button>
//                             </div>
//                           </div>
//                         </div>
//                       ))}
                      
//                       <div className="col">
//                         <div className="card border-0 h-100">
//                           <span className="position-absolute top-0 start-0 w-100 h-100 border border-dashed border-secondary border-opacity-25 rounded d-none-dark" />
//                           <span className="position-absolute top-0 start-0 w-100 h-100 border border-dashed border-light border-opacity-25 rounded d-none d-block-dark" />
//                           <div className="card-body position-relative z-2 nav align-items-center justify-content-center py-5">
//                             <a 
//                               className="nav-link animate-underline stretched-link min-w-0 fs-base px-0" 
//                               href="#addPaymentModal" 
//                               data-bs-toggle="modal"
//                             >
//                               <i className="ci-plus fs-lg ms-n2 me-2" />
//                               <span className="animate-target text-truncate">Add payment method</span>
//                             </a>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </main>
//       </div>
//     </>
//   );
// };

// export default Payments;

// v5 - have defaults for sample UI
// Updated Payments.tsx with static UI for no payment methods
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useAuth } from '../../../context/AuthContext';
// import { NotificationService } from '../../../services/local/NotificationService';
// import Aside from '../shared/Aside';
// import AddPaymentModal from './AddPaymentModal';

// type PaymentMethod = {
//   id: string;
//   type: 'card' | 'paypal';
//   details: {
//     last4?: string;
//     brand?: string;
//     name?: string;
//     exp_month?: string;
//     exp_year?: string;
//     email?: string;
//   };
//   is_primary: boolean;
//   created_at: string;
// };

// const Payments = () => {
//   const { user } = useAuth();
//   const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [isSettingPrimary, setIsSettingPrimary] = useState<string | null>(null);
//   const [isDeleting, setIsDeleting] = useState<string | null>(null);
//   const [error, setError] = useState<string | null>(null);

//   // Function to render static sample cards
//   const renderSampleCards = () => (
//     <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 g-md-4 g-lg-3 g-xl-4">
//       {/* Sample Primary Card */}
//       <div className="col">
//         <div className="card h-100">
//           <div className="card-body pb-3">
//             <div className="d-flex align-items-start justify-content-between mb-4">
//               <img 
//                 src="/assets/img/payment-methods/mastercard.svg" 
//                 className="m-n3" 
//                 width={100} 
//                 alt="Mastercard" 
//               />
//               <span className="badge text-bg-info rounded-pill">Primary</span>
//             </div>
//             <div className="h6 mb-1">**** **** **** 8341</div>
//             <div className="text-danger fs-xs">Expired 05/24</div>
//           </div>
//           <div className="card-footer d-flex gap-3 bg-transparent border-0 pt-0 pb-4">
//             <button 
//               type="button" 
//               className="btn btn-sm btn-outline-secondary rounded-pill"
//               disabled
//             >
//               Edit
//             </button>
//             <button 
//               type="button" 
//               className="btn btn-sm btn-outline-secondary rounded-pill"
//               disabled
//             >
//               Remove
//             </button>
//           </div>
//         </div>
//       </div>
      
//       {/* Sample Non-Primary Card */}
//       <div className="col">
//         <div className="card h-100">
//           <div className="card-body pb-3">
//             <div className="d-flex align-items-start justify-content-between mb-4">
//               <img 
//                 src="/assets/img/payment-methods/visa.svg" 
//                 className="m-n3" 
//                 width={100} 
//                 alt="Visa" 
//               />
//               <span className="nav animate-underline">
//                 <a className="nav-link animate-target fs-xs p-0" href="#">
//                   Set as primary
//                 </a>
//               </span>
//             </div>
//             <div className="h6 mb-1">**** **** **** 1276</div>
//             <div className="text-body fs-xs">Expiration 01/27</div>
//           </div>
//           <div className="card-footer d-flex gap-3 bg-transparent border-0 pt-0 pb-4">
//             <button 
//               type="button" 
//               className="btn btn-sm btn-outline-secondary rounded-pill"
//               disabled
//             >
//               Edit
//             </button>
//             <button 
//               type="button" 
//               className="btn btn-sm btn-outline-secondary rounded-pill"
//               disabled
//             >
//               Remove
//             </button>
//           </div>
//         </div>
//       </div>
      
//       {/* Add Payment Card */}
//       <div className="col">
//         <div className="card border-0 h-100">
//           <span className="position-absolute top-0 start-0 w-100 h-100 border border-dashed border-secondary border-opacity-25 rounded d-none-dark" />
//           <span className="position-absolute top-0 start-0 w-100 h-100 border border-dashed border-light border-opacity-25 rounded d-none d-block-dark" />
//           <div className="card-body position-relative z-2 nav align-items-center justify-content-center py-5">
//             <a 
//               className="nav-link animate-underline stretched-link min-w-0 fs-base px-0" 
//               href="#addPaymentModal" 
//               data-bs-toggle="modal"
//             >
//               <i className="ci-plus fs-lg ms-n2 me-2" />
//               <span className="animate-target text-truncate">Add payment method</span>
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   // ... rest of your existing code ...

//   return (
//     <>
//       <AddPaymentModal onAddPayment={handleAddPayment} userId={user?.id} />

//       <div>
//         <main className="content-wrapper">
//           <div className="container py-5 mt-n2 mt-sm-0">
//             <div className="row pt-md-2 pt-lg-3 pb-sm-2 pb-md-3 pb-lg-4 pb-xl-5">
//               <Aside />
              
//               <div className="col-lg-9">
//                 <div className="ps-lg-3 ps-xl-0">
//                   <h1 className="h2 pb-2 pb-md-3">Payment methods</h1>
                  
//                   {error ? (
//                     <div className="alert alert-danger">
//                       {error} <button className="btn btn-sm btn-outline-secondary ms-2" onClick={fetchPaymentMethods}>Retry</button>
//                     </div>
//                   ) : isLoading ? (
//                     <div className="text-center py-5">
//                       <div className="spinner-border text-primary" role="status">
//                         <span className="visually-hidden">Loading...</span>
//                       </div>
//                       <p className="mt-2">Loading payment methods...</p>
//                     </div>
//                   ) : paymentMethods.length === 0 ? (
//                     <>
//                       <div className="d-none d-md-block">
//                         {renderSampleCards()}
//                         <div className="alert alert-info mt-4">
//                           <i className="ci-info me-2"></i>
//                           The payment methods shown above are sample data. Add your own payment method to get started.
//                         </div>
//                       </div>
//                       <div className="d-block d-md-none text-center py-5">
//                         <div className="fs-1 text-muted">
//                           <i className="ci-credit-card" />
//                         </div>
//                         <h3>No payment methods</h3>
//                         <p className="text-muted mb-4">
//                           You haven't added any payment methods yet
//                         </p>
//                         <a 
//                           href="#addPaymentModal" 
//                           className="btn btn-primary"
//                           data-bs-toggle="modal"
//                         >
//                           <i className="ci-plus me-2" />
//                           Add Payment Method
//                         </a>
//                       </div>
//                     </>
//                   ) : (
//                     <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 g-md-4 g-lg-3 g-xl-4">
//                       {/* ... existing payment methods rendering ... */}
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </main>
//       </div>
//     </>
//   );
// };

// export default Payments;


// // v4 - implimented with backend with defaults
// // src/pages/user/Payments.tsx
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useAuth } from '../../../context/AuthContext';
// import { NotificationService } from '../../../services/local/NotificationService';
// import Aside from '../shared/Aside';
// import AddPaymentModal from './AddPaymentModal';

// // Default payment method details
// const DEFAULT_PAYMENT_METHOD: PaymentMethod = {
//   id: 'default',
//   type: 'card',
//   is_primary: false,
//   created_at: new Date().toISOString(),
//   details: {
//     last4: '0000',
//     brand: 'Unknown',
//     name: 'Unknown Card',
//     exp_month: '01',
//     exp_year: '2030'
//   }
// };

// type PaymentMethod = {
//   id: string;
//   type: 'card' | 'paypal';
//   details: {
//     last4?: string;
//     brand?: string;
//     name?: string;
//     exp_month?: string;
//     exp_year?: string;
//     email?: string;
//   };
//   is_primary: boolean;
//   created_at: string;
// };

// const Payments = () => {
//   const { user } = useAuth();
//   const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [isSettingPrimary, setIsSettingPrimary] = useState<string | null>(null);
//   const [isDeleting, setIsDeleting] = useState<string | null>(null);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     fetchPaymentMethods();
//   }, []);

//   const fetchPaymentMethods = async () => {
//     try {
//       setIsLoading(true);
//       setError(null);
//       const response = await axios.get(`/api/payment-methods`, {
//         params: { user_id: user?.id },
//         headers: { 'Content-Type': 'application/json' }
//       });
      
//       // Ensure response is an array and has safe defaults
//       let methods: PaymentMethod[] = [];
      
//       if (Array.isArray(response.data)) {
//         methods = response.data;
//       } else if (response.data && Array.isArray(response.data.payment_methods)) {
//         methods = response.data.payment_methods;
//       } else {
//         throw new Error('Invalid response format from server');
//       }
      
//       // Apply safe defaults to each payment method
//       const safeMethods = methods.map(method => ({
//         ...DEFAULT_PAYMENT_METHOD,
//         ...method,
//         details: {
//           ...DEFAULT_PAYMENT_METHOD.details,
//           ...method.details
//         }
//       }));
      
//       setPaymentMethods(safeMethods);
//     } catch (err: any) {
//       console.error('Failed to fetch payment methods:', err);
//       setError(err.response?.data?.message || 'Failed to load payment methods');
//       NotificationService.showDialog('Failed to load payment methods', 'error');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Apply defaults when adding a new payment method
//   const handleAddPayment = (newMethod: PaymentMethod) => {
//     const safeMethod = {
//       ...DEFAULT_PAYMENT_METHOD,
//       ...newMethod,
//       details: {
//         ...DEFAULT_PAYMENT_METHOD.details,
//         ...newMethod.details
//       }
//     };
//     setPaymentMethods(prev => [...prev, safeMethod]);
//   };

//   const handleSetPrimary = async (methodId: string) => {
//     try {
//       setIsSettingPrimary(methodId);
//       await axios.patch(`/api/payment-methods/${methodId}/primary`, 
//         { user_id: user?.id },
//         { headers: { 'Content-Type': 'application/json' } }
//       );
      
//       setPaymentMethods(prev => prev.map(method => ({
//         ...method,
//         is_primary: method.id === methodId
//       })));
      
//       NotificationService.showDialog('Primary payment method updated!');
//     } catch (err: any) {
//       console.error('Failed to set primary method:', err);
//       NotificationService.showDialog(
//         err.response?.data?.message || 'Failed to update primary method', 
//         'error'
//       );
//     } finally {
//       setIsSettingPrimary(null);
//     }
//   };

//   const handleDelete = async (methodId: string) => {
//     if (!window.confirm('Are you sure you want to delete this payment method?')) return;
    
//     try {
//       setIsDeleting(methodId);
//       await axios.delete(`/api/payment-methods/${methodId}`, {
//         params: { user_id: user?.id },
//         headers: { 'Content-Type': 'application/json' }
//       });
      
//       setPaymentMethods(prev => prev.filter(method => method.id !== methodId));
//       NotificationService.showDialog('Payment method deleted!');
//     } catch (err: any) {
//       console.error('Failed to delete payment method:', err);
//       NotificationService.showDialog(
//         err.response?.data?.message || 'Failed to delete payment method', 
//         'error'
//       );
//     } finally {
//       setIsDeleting(null);
//     }
//   };

//   // Safe formatting functions with defaults
//   const formatCardNumber = (last4: string = '0000') => last4 ? `**** **** **** ${last4}` : '**** **** **** ****';
//   const formatExpiration = (month: string = '01', year: string = '30') => 
//     `${month.padStart(2, '0')}/${year.slice(-2)}`;
  
//   const getCardIcon = (brand: string = 'Unknown') => {
//     const icons: Record<string, string> = {
//       visa: '/assets/img/payment-methods/visa.svg',
//       mastercard: '/assets/img/payment-methods/mastercard.svg',
//       amex: '/assets/img/payment-methods/amex.svg',
//       discover: '/assets/img/payment-methods/discover.svg',
//       paypal: '/assets/img/payment-methods/paypal-icon.svg',
//       unknown: '/assets/img/payment-methods/credit-card.svg'
//     };
    
//     const normalizedBrand = brand.toLowerCase();
//     return icons[normalizedBrand] || icons.unknown;
//   };

//   return (
//     <>
//       <AddPaymentModal onAddPayment={handleAddPayment} userId={user?.id} />

//       <div>
//         <main className="content-wrapper">
//           <div className="container py-5 mt-n2 mt-sm-0">
//             <div className="row pt-md-2 pt-lg-3 pb-sm-2 pb-md-3 pb-lg-4 pb-xl-5">
//               <Aside />
              
//               <div className="col-lg-9">
//                 <div className="ps-lg-3 ps-xl-0">
//                   <h1 className="h2 pb-2 pb-md-3">Payment methods</h1>
                  
//                   {error ? (
//                     <div className="alert alert-danger">
//                       {error} <button className="btn btn-sm btn-outline-secondary ms-2" onClick={fetchPaymentMethods}>Retry</button>
//                     </div>
//                   ) : isLoading ? (
//                     <div className="text-center py-5">
//                       <div className="spinner-border text-primary" role="status">
//                         <span className="visually-hidden">Loading...</span>
//                       </div>
//                       <p className="mt-2">Loading payment methods...</p>
//                     </div>
//                   ) : paymentMethods.length === 0 ? (
//                     <div className="text-center py-5">
//                       <div className="fs-1 text-muted">
//                         <i className="ci-credit-card" />
//                       </div>
//                       <h3>No payment methods</h3>
//                       <p className="text-muted mb-4">
//                         You haven't added any payment methods yet
//                       </p>
//                       <a 
//                         href="#addPaymentModal" 
//                         className="btn btn-primary"
//                         data-bs-toggle="modal"
//                       >
//                         <i className="ci-plus me-2" />
//                         Add Payment Method
//                       </a>
//                     </div>
//                   ) : (
//                     <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 g-md-4 g-lg-3 g-xl-4">
//                       {paymentMethods.map(method => {
//                         // Apply per-method defaults as fallback
//                         const safeMethod = {
//                           ...DEFAULT_PAYMENT_METHOD,
//                           ...method,
//                           details: {
//                             ...DEFAULT_PAYMENT_METHOD.details,
//                             ...method.details
//                           }
//                         };
                        
//                         return (
//                           <div className="col" key={safeMethod.id}>
//                             <div className="card h-100">
//                               <div className="card-body pb-3">
//                                 <div className="d-flex align-items-start justify-content-between mb-4">
//                                   <img 
//                                     src={getCardIcon(safeMethod.type === 'card' 
//                                       ? safeMethod.details.brand 
//                                       : 'paypal')} 
//                                     className="m-n3" 
//                                     width={100} 
//                                     alt={safeMethod.type} 
//                                     onError={(e) => {
//                                       // Fallback if image fails to load
//                                       e.currentTarget.src = '/assets/img/payment-methods/credit-card.svg';
//                                       e.currentTarget.alt = 'Payment method';
//                                     }}
//                                   />
                                  
//                                   {safeMethod.is_primary && (
//                                     <span className="badge text-bg-info rounded-pill">Primary</span>
//                                   )}
//                                 </div>
                                
//                                 <div className="h6 mb-1">
//                                   {safeMethod.type === 'card' 
//                                     ? formatCardNumber(safeMethod.details.last4) 
//                                     : safeMethod.details.email || 'PayPal account'}
//                                 </div>
                                
//                                 {safeMethod.type === 'card' && (
//                                   <div className="text-body fs-xs">
//                                     Expires {formatExpiration(
//                                       safeMethod.details.exp_month, 
//                                       safeMethod.details.exp_year
//                                     )}
//                                   </div>
//                                 )}
//                               </div>
                              
//                               <div className="card-footer d-flex gap-3 bg-transparent border-0 pt-0 pb-4">
//                                 {!safeMethod.is_primary && (
//                                   <button 
//                                     type="button" 
//                                     className="btn btn-sm btn-outline-secondary rounded-pill"
//                                     onClick={() => handleSetPrimary(safeMethod.id)}
//                                     disabled={isSettingPrimary === safeMethod.id}
//                                   >
//                                     {isSettingPrimary === safeMethod.id ? (
//                                       <span className="spinner-border spinner-border-sm me-1" />
//                                     ) : 'Set Primary'}
//                                   </button>
//                                 )}
                                
//                                 <button 
//                                   type="button" 
//                                   className="btn btn-sm btn-outline-danger rounded-pill"
//                                   onClick={() => handleDelete(safeMethod.id)}
//                                   disabled={isDeleting === safeMethod.id}
//                                 >
//                                   {isDeleting === safeMethod.id ? (
//                                     <span className="spinner-border spinner-border-sm me-1" />
//                                   ) : 'Remove'}
//                                 </button>
//                               </div>
//                             </div>
//                           </div>
//                         );
//                       })}
                      
//                       <div className="col">
//                         <div className="card border-0 h-100">
//                           <span className="position-absolute top-0 start-0 w-100 h-100 border border-dashed border-secondary border-opacity-25 rounded d-none-dark" />
//                           <span className="position-absolute top-0 start-0 w-100 h-100 border border-dashed border-light border-opacity-25 rounded d-none d-block-dark" />
//                           <div className="card-body position-relative z-2 nav align-items-center justify-content-center py-5">
//                             <a 
//                               className="nav-link animate-underline stretched-link min-w-0 fs-base px-0" 
//                               href="#addPaymentModal" 
//                               data-bs-toggle="modal"
//                             >
//                               <i className="ci-plus fs-lg ms-n2 me-2" />
//                               <span className="animate-target text-truncate">Add payment method</span>
//                             </a>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </main>
//       </div>
//     </>
//   );
// };

// export default Payments;

// v6
// src/pages/user/Payments.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../../../context/AuthContext';
import { NotificationService } from '../../../services/local/NotificationService';
import Aside from '../shared/Aside';
import AddPaymentModal from './AddPaymentModal';
import LoadingSpinner, { LoadingZoom } from '../../../components/shared/LoadingSpinner';
import { Link } from 'react-router-dom';

type PaymentMethod = {
  id: string;
  type: 'card' | 'paypal';
  details: {
    last4?: string;
    brand?: string;
    name?: string;
    exp_month?: string;
    exp_year?: string;
    email?: string;
  };
  is_primary: boolean;
  created_at: string;
  is_expired?: boolean;
};

const Payments = () => {
  const { user } = useAuth();
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSettingPrimary, setIsSettingPrimary] = useState<string | null>(null);
  const [isDeleting, setIsDeleting] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(null);

  useEffect(() => {
    if (user?.id) {
      fetchPaymentMethods();
    }
  }, [user]);

  const fetchPaymentMethods = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await axios.get(`/payment-methods`, {
        params: { user_id: user?.id },
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      
      // Process response and check for expired cards
      const methods = Array.isArray(response.data) 
        ? response.data 
        : response.data.payment_methods || [];
      
      const processedMethods = methods.map((method: PaymentMethod) => {
        if (method.type === 'card' && method.details.exp_month && method.details.exp_year) {
          const expMonth = parseInt(method.details.exp_month);
          const expYear = parseInt(method.details.exp_year);
          const currentYear = new Date().getFullYear();
          const currentMonth = new Date().getMonth() + 1;
          
          return {
            ...method,
            is_expired: expYear < currentYear || (expYear === currentYear && expMonth < currentMonth)
          };
        }
        return method;
      });
      
      setPaymentMethods(processedMethods);
    } catch (err: any) {
      console.error('Failed to fetch payment methods:', err);
      setError(err.response?.data?.message || 'Failed to load payment methods');
      NotificationService.showDialog(
        err.response?.data?.message || 'Failed to load payment methods', 
        'error'
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddPayment = (newMethod: PaymentMethod) => {
    setPaymentMethods(prev => [...prev, newMethod]);
    NotificationService.showDialog('Payment method added successfully!');
  };

  const handleSetPrimary = async (methodId: string) => {
    try {
      setIsSettingPrimary(methodId);
      await axios.patch(`/api/payment-methods/${methodId}/primary`, 
        { user_id: user?.id },
        { 
          headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          } 
        }
      );
      
      setPaymentMethods(prev => prev.map(method => ({
        ...method,
        is_primary: method.id === methodId
      })));
      
      NotificationService.showDialog('Primary payment method updated!');
    } catch (err: any) {
      console.error('Failed to set primary method:', err);
      NotificationService.showDialog(
        err.response?.data?.message || 'Failed to update primary method', 
        'error'
      );
    } finally {
      setIsSettingPrimary(null);
    }
  };

  const handleDelete = async (methodId: string) => {
    try {
      setIsDeleting(methodId);
      await axios.delete(`/api/payment-methods/${methodId}`, {
        params: { user_id: user?.id },
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      
      setPaymentMethods(prev => prev.filter(method => method.id !== methodId));
      setShowDeleteConfirm(null);
      NotificationService.showDialog('Payment method deleted!');
    } catch (err: any) {
      console.error('Failed to delete payment method:', err);
      NotificationService.showDialog(
        err.response?.data?.message || 'Failed to delete payment method', 
        'error'
      );
    } finally {
      setIsDeleting(null);
    }
  };

  // Helper functions
  const formatCardNumber = (last4: string) => last4 ? `**** **** **** ${last4}` : 'New card';
  
  const formatExpiration = (month: string, year: string) => 
    month && year ? `${month.padStart(2, '0')}/${year.slice(-2)}` : 'N/A';
  
  const getCardIcon = (brand: string = '') => {
    const icons: Record<string, string> = {
      visa: '/assets/img/payment-methods/visa-dark-mode.svg',
      mastercard: '/assets/img/payment-methods/mastercard.svg',
      amex: '/assets/img/payment-methods/amex.svg',
      discover: '/assets/img/payment-methods/discover.svg',
      paypal: '/assets/img/payment-methods/paypal-icon.svg'
    };
    return icons[brand.toLowerCase()] || '/assets/img/payment-methods/credit-card.svg';
  };


  // Render static sample cards for empty state
  const renderSampleCards = () => (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 g-md-4 g-lg-3 g-xl-4">
      
      {/*  */}
      {/* Sample Primary Card */}
      <div className="col">
        <div className="card h-100">
          <div className="card-body pb-3">
            <div className="d-flex align-items-start justify-content-between mb-4">
              <img 
                src="/assets/img/payment-methods/mastercard.svg" 
                className="m-n3 d-none1" 
                width={100} 
                alt="Mastercard" 
              />
              <span className="badge text-bg-info rounded-pill">.</span>
            </div>
            <div className="h6 mb-1">Easy Start</div>
            <div className="text-success fs-xs fw-bold">N3000</div>
          </div>
          <div className="card-footer d-flex gap-3 bg-transparent border-0 pt-0 pb-4">
            <button 
              type="button" 
              className="btn btn-sm btn-outline-secondary rounded-pill" >
              7 days
            </button>
            <button type="button" 
              className="btn btn-sm btn-outline-secondary rounded-pill"
              
            >
              Grab it
            </button>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100">
          <div className="card-body pb-3">
            <div className="d-flex align-items-start justify-content-between mb-4">
              <img 
                src="/assets/img/payment-methods/mastercard.svg" 
                className="m-n3 d-none" 
                width={100} 
                alt="Mastercard" 
              />
              <span className="badge text-bg-info rounded-pill">Recommended</span>
            </div>
            <div className="h6 mb-1">Fast Sales</div>
            <div className="text-success fs-xs fw-bold">N5000</div>
          </div>
          <div className="card-footer d-flex gap-3 bg-transparent border-0 pt-0 pb-4">
            <button 
              type="button" 
              className="btn btn-sm btn-outline-secondary rounded-pill" >
              14 days
            </button>
            <button type="button" 
              className="btn btn-sm btn-outline-secondary rounded-pill"
              
            >
              Grab it
            </button>
          </div>
        </div>
      </div>

      <div className="col">
        <div className="card h-100">
          <div className="card-body pb-3">
            <div className="d-flex align-items-start justify-content-between mb-4">
              <img 
                src="/assets/img/payment-methods/mastercard.svg" 
                className="m-n3 d-none" 
                width={100} 
                alt="Mastercard" 
              />
              <span className="badge text-bg-info rounded-pill">.</span>
            </div>
            <div className="h6 mb-1">Turbo Boost</div>
            <div className="text-success fs-xs fw-bold">N20000</div>
          </div>
          <div className="card-footer d-flex gap-3 bg-transparent border-0 pt-0 pb-4">
            <button 
              type="button" 
              className="btn btn-sm btn-outline-secondary rounded-pill" >
              30 days
            </button>
            <button type="button" 
              className="btn btn-sm btn-outline-secondary rounded-pill"
              
            >
              Grab it
            </button>
          </div>
        </div>
      </div>
      

      {/* Sample Primary Card */}
      <div className="col">
        <div className="card h-100">
          <div className="card-body pb-3">
            <div className="d-flex align-items-start justify-content-between mb-4">
              <img 
                src="/assets/img/payment-methods/mastercard.svg" 
                className="m-n3" 
                width={100} 
                alt="Mastercard" 
              />
              <span className="badge text-bg-info rounded-pill">Primary</span>
            </div>
            <div className="h6 mb-1">**** **** **** 8341</div>
            <div className="text-danger fs-xs">Expired 05/24</div>
          </div>
          <div className="card-footer d-flex gap-3 bg-transparent border-0 pt-0 pb-4">
            <button 
              type="button" 
              className="btn btn-sm btn-outline-secondary rounded-pill"
              disabled
            >
              Edit
            </button>
            <button 
              type="button" 
              className="btn btn-sm btn-outline-secondary rounded-pill"
              disabled
            >
              Remove
            </button>
          </div>
        </div>
      </div>
      
      {/* Sample Non-Primary Card */}
      <div className="col">
        <div className="card h-100">
          <div className="card-body pb-3">
            <div className="d-flex align-items-start justify-content-between mb-4">
              <img 
                src="/assets/img/payment-methods/visa-light-mode.svg" 
                className="m-n3" 
                width={100} 
                alt="Visa" 
              />
              <span className="nav animate-underline">
                <a className="nav-link animate-target fs-xs p-0" href="#">
                  Set as primary
                </a>
              </span>
            </div>
            <div className="h6 mb-1">**** **** **** 1276</div>
            <div className="text-body fs-xs">Expiration 01/27</div>
          </div>
          <div className="card-footer d-flex gap-3 bg-transparent border-0 pt-0 pb-4">
            <button 
              type="button" 
              className="btn btn-sm btn-outline-secondary rounded-pill"
              disabled
            >
              Edit
            </button>
            <button 
              type="button" 
              className="btn btn-sm btn-outline-secondary rounded-pill"
              disabled
            >
              Remove
            </button>
          </div>
        </div>
      </div>
      
      {/* Add Payment Card */}
      <div className="col">
        <div className="card border-0 h-100">
          <span className="position-absolute top-0 start-0 w-100 h-100 border border-dashed border-secondary border-opacity-25 rounded d-none-dark" />
          <span className="position-absolute top-0 start-0 w-100 h-100 border border-dashed border-light border-opacity-25 rounded d-none d-block-dark" />
          <div className="card-body position-relative z-2 nav align-items-center justify-content-center py-5">
            <a 
              className="nav-link animate-underline stretched-link min-w-0 fs-base px-0" 
              href="#addPaymentModal" 
              data-bs-toggle="modal"
            >
              <i className="ci-plus fs-lg ms-n2 me-2" />
              <span className="animate-target text-truncate">Add payment method</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <AddPaymentModal onAddPayment={handleAddPayment} userId={user?.id} />

      <div>
        <main className="content-wrapper">
          <div className="container py-5 mt-n2 mt-sm-0">
            <div className="row pt-md-2 pt-lg-3 pb-sm-2 pb-md-3 pb-lg-4 pb-xl-5">
              <Aside />
              
              <div className="col-lg-9">
                <div className="ps-lg-3 ps-xl-0">
                  <h1 className="h2 pb-2 pb-md-3">Payment methods</h1>
                  
                  {error ? (
                    <div className="alert alert-danger">
                      {error} <button className="btn btn-sm btn-outline-secondary ms-2" onClick={fetchPaymentMethods}>Retry</button>
                    </div>
                  ) : isLoading ? (
                    <LoadingSpinner />
                  ) : paymentMethods.length === 0 ? (
                    <>
                      <div className="d-none d-md-block">
                        {renderSampleCards()}
                        <div className="alert alert-info mt-4">
                          <i className="ci-info me-2"></i>
                          The payment methods shown above are sample data. 
                          You'll be able to add your own payment method later for a seamless payment just like those.
                        </div>
                      </div>
                      <div className="d-block d-md-none text-center py-5">
                        <div className="fs-1 text-muted">
                          <i className="ci-credit-card" />
                        </div>
                        <h3>No payment methods</h3>
                        <p className="text-muted mb-4">
                          You haven't added any payment methods yet
                        </p>
                        <a 
                          href="#addPaymentModal" 
                          className="btn btn-primary rounded-pill border"
                          data-bs-toggle="modal"
                        >
                          <i className="ci-plus me-2" />
                          Add Payment Method
                        </a>
                      </div>
                    </>
                  ) : (
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 g-md-4 g-lg-3 g-xl-4">
                      {paymentMethods.map(method => (
                        <div className="col" key={method.id}>
                          <div className="card h-100">
                            <div className="card-body pb-3">
                              <div className="d-flex align-items-start justify-content-between mb-4">
                                <img 
                                  src={method.type === 'paypal' 
                                    ? '/assets/img/payment-methods/paypal-icon.svg'
                                    : getCardIcon(method.details.brand)
                                  }
                                  className="m-n3" 
                                  width={100} 
                                  alt={method.type === 'paypal' ? 'PayPal' : method.details.brand} 
                                />
                                
                                {method.is_primary && (
                                  <span className="badge text-bg-info rounded-pill">Primary</span>
                                )}
                              </div>
                              
                              <div className="h6 mb-1">
                                {method.type === 'card' 
                                  ? formatCardNumber(method.details.last4 || '') 
                                  : method.details.email || 'PayPal account'}
                              </div>
                              
                              {method.type === 'card' && (
                                <div className={`fs-xs ${method.is_expired ? 'text-danger' : 'text-body'}`}>
                                  Expires {formatExpiration(
                                    method.details.exp_month || '', 
                                    method.details.exp_year || ''
                                  )}
                                  {method.is_expired && ' (Expired)'}
                                </div>
                              )}
                            </div>
                            
                            <div className="card-footer d-flex gap-3 bg-transparent border-0 pt-0 pb-4">
                              {!method.is_primary && (
                                <button 
                                  type="button" 
                                  className="btn btn-sm btn-outline-secondary rounded-pill"
                                  onClick={() => handleSetPrimary(method.id)}
                                  disabled={isSettingPrimary === method.id}
                                >
                                  {isSettingPrimary === method.id ? (
                                    <LoadingZoom size='sm' />
                                  ) : 'Set Primary'}
                                </button>
                              )}
                              
                              <button 
                                type="button" 
                                className="btn btn-sm btn-outline-danger rounded-pill"
                                onClick={() => setShowDeleteConfirm(method.id)}
                                disabled={isDeleting === method.id}
                              >
                                {isDeleting === method.id ? (
                                  <LoadingZoom size='sm' />
                                ) : 'Remove'}
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                      
                      <div className="col">
                        <div className="card border-0 h-100">
                          <span className="position-absolute top-0 start-0 w-100 h-100 border border-dashed border-secondary border-opacity-25 rounded d-none-dark" />
                          <span className="position-absolute top-0 start-0 w-100 h-100 border border-dashed border-light border-opacity-25 rounded d-none d-block-dark" />
                          <div className="card-body position-relative z-2 nav align-items-center justify-content-center py-5 animate-slide-end">
                            <Link className="nav-link animate-underline stretched-link min-w-0 fs-base pe-1 border rounded-pill px-0 animate-target" 
                              to="#addPaymentModal" 
                              data-bs-toggle="modal" >
                              <i className="ci-plus fs-lg ms-n2 me-1" />
                              <span className="animate-target text-truncate">Add payment method</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Confirm Delete</h5>
                <button 
                  type="button" 
                  className="btn-close" 
                  onClick={() => setShowDeleteConfirm(null)}
                  disabled={isDeleting !== null}
                ></button>
              </div>
              <div className="modal-body">
                <p>Are you sure you want to delete this payment method? This action cannot be undone.</p>
              </div>
              <div className="modal-footer">
                <button 
                  type="button" 
                  className="btn btn-secondary"
                  onClick={() => setShowDeleteConfirm(null)}
                  disabled={isDeleting !== null}
                >
                  Cancel
                </button>
                <button 
                  type="button" 
                  className="btn btn-danger"
                  onClick={() => handleDelete(showDeleteConfirm)}
                  disabled={isDeleting !== null}
                >
                  {isDeleting ? (
                    <>
                      <LoadingZoom size='sm' />
                      Deleting...
                    </>
                  ) : (
                    'Delete Payment Method'
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Payments;