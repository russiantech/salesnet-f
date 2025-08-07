// import React from 'react'

// const AddPaymentModal = () => {
//     return (
//         <div className="modal fade" id="addPaymentModal" data-bs-backdrop="static" tabIndex={-1} aria-labelledby="addPaymentModalLabel" aria-hidden="true" style={{ display: 'none' }}>
//             <div className="modal-dialog modal-dialog-centered">
//                 <div className="modal-content">
//                     <div className="modal-header">
//                         <h5 className="modal-title" id="addPaymentModalLabel">Add new payment method</h5>
//                         <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
//                     </div>
//                     <div className="modal-body">
//                         {/* Nav tabs */}
//                         <ul className="nav nav-tabs mb-3" role="tablist">
//                             <li className="nav-item" role="presentation">
//                                 <button type="button" className="nav-link active" id="card-tab" data-bs-toggle="tab" data-bs-target="#card-tab-pane" role="tab" aria-controls="card-tab-pane" aria-selected="true">
//                                     <i className="ci-credit-card fs-base opacity-75 ms-n2 me-2" />
//                                     Card
//                                 </button>
//                             </li>
//                             <li className="nav-item" role="presentation">
//                                 <button type="button" className="nav-link" id="paypal-tab" data-bs-toggle="tab" data-bs-target="#paypal-tab-pane" role="tab" aria-controls="paypal-tab-pane" aria-selected="false" tabIndex={-1}>
//                                      <img src="/assets/img/payment-methods/paypal-icon.svg" className="me-2" width={14} alt="PayPal" />
//                                     PayPal
//                                 </button>
//                             </li>
//                         </ul>
//                         <div className="tab-content">
//                             {/* Card tab */}
//                             <div className="tab-pane fade active show" id="card-tab-pane" role="tabpanel" aria-labelledby="card-tab">
//                                 <form className="needs-validation" noValidate>
//                                     <div className="mb-3">
//                                         <label htmlFor="card-number" className="form-label">Card number</label>
//                                         <div className="position-relative" data-input-format="{&quot;creditCard&quot;: true}">
//                                             <input type="text" className="form-control form-icon-end" id="card-number" style={{ backgroundImage: 'none' }} placeholder="XXXX XXXX XXXX XXXX" required />
//                                             <span className="position-absolute d-flex top-50 end-0 translate-middle-y fs-5 text-body-tertiary me-3" data-card-icon><svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor"><path d="M21 3H3C1.3 3 0 4.3 0 6v12c0 1.7 1.3 3 3 3h18c1.7 0 3-1.3 3-3V6c0-1.7-1.3-3-3-3zm1.2 15c0 .7-.6 1.2-1.2 1.2H3c-.7 0-1.2-.6-1.2-1.2V6c0-.7.6-1.2 1.2-1.2h18c.7 0 1.2.6 1.2 1.2v12z" /><path d="M7 16.1H4c-.5 0-.9.4-.9.9s.4.9.9.9h3c.5 0 .9-.4.9-.9s-.4-.9-.9-.9zm13-9H4c-.5 0-.9.4-.9.9s.4.9.9.9h16c.5 0 .9-.4.9-.9s-.4-.9-.9-.9z" /></svg></span>
//                                         </div>
//                                     </div>
//                                     <div className="mb-3">
//                                         <label htmlFor="card-name" className="form-label">Name on card</label>
//                                         <input type="text" className="form-control" id="card-name" placeholder="Full name" required />
//                                     </div>
//                                     <div className="row mb-4">
//                                         <div className="col-7">
//                                             <label htmlFor="card-expiration" className="form-label">Expiration date</label>
//                                             <input type="text" className="form-control" id="card-expiration" data-input-format="{&quot;date&quot;: true, &quot;datePattern&quot;: [&quot;m&quot;, &quot;y&quot;]}" placeholder="MM/YY" required />
//                                         </div>
//                                         <div className="col-5">
//                                             <label htmlFor="card-cvc" className="form-label">CVC</label>
//                                             <input type="text" className="form-control" id="card-cvc" data-input-format="{&quot;numericOnly&quot;: true, &quot;blocks&quot;: [3]}" placeholder="XXX" required />
//                                         </div>
//                                     </div>
//                                     <div className="d-flex gap-3">
//                                         <button type="reset" className="btn btn-secondary w-100" data-bs-dismiss="modal" data-bs-target="#addPaymentModal">Cancel</button>
//                                         <button type="submit" className="btn btn-primary w-100">Add card</button>
//                                     </div>
//                                 </form>
//                             </div>
//                             {/* PayPal tab */}
//                             <div className="tab-pane fade" id="paypal-tab-pane" role="tabpanel" aria-labelledby="paypal-tab">
//                                 <form className="needs-validation" noValidate>
//                                     <div className="mb-4">
//                                         <label htmlFor="paypal-email" className="form-label">Email associated with PayPal</label>
//                                         <input type="email" className="form-control" id="paypal-email" placeholder="Email address" required />
//                                         <div className="invalid-feedback">Please provide a valid email address!</div>
//                                     </div>
//                                     <div className="d-flex gap-3">
//                                         <button type="reset" className="btn btn-secondary w-100" data-bs-dismiss="modal" data-bs-target="#addPaymentModal">Cancel</button>
//                                         <button type="submit" className="btn btn-primary w-100">Continue</button>
//                                     </div>
//                                 </form>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default AddPaymentModal

// 
// // src/components/user/payments/AddPaymentModal.tsx
// import React, { useState } from 'react';
// // import { useForm } from 'react-hook-form';
// import axios from 'axios';
// import { NotificationService } from '../../../services/local/NotificationService';

// type FormData = {
//   cardNumber: string;
//   cardName: string;
//   cardExpiration: string;
//   cardCvc: string;
//   paypalEmail: string;
// };

// type PaymentMethodType = 'card' | 'paypal';

// const AddPaymentModal = ({ onAddPayment, userId }) => {
//   const [activeTab, setActiveTab] = useState<PaymentMethodType>('card');
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

//   const handleTabChange = (tab: PaymentMethodType) => {
//     setActiveTab(tab);
//     reset();
//   };

//   const onSubmit = async (data: FormData) => {
//     setIsSubmitting(true);
//     try {
//       const paymentData = activeTab === 'card' ? {
//         type: 'card',
//         details: {
//           last4: data.cardNumber.slice(-4),
//           brand: 'Visa', // Would be determined from card number
//           name: data.cardName,
//           exp_month: data.cardExpiration.split('/')[0],
//           exp_year: data.cardExpiration.split('/')[1],
//         }
//       } : {
//         type: 'paypal',
//         details: {
//           email: data.paypalEmail
//         }
//       };

//       // Call backend API
//       const response = await axios.post('/api/payment-methods', {
//         ...paymentData,
//         userId
//       });

//       onAddPayment(response.data);
//       NotificationService.showDialog('Payment method added successfully!');
      
//       // Close modal
//       document.getElementById('addPaymentModal')?.classList.remove('show');
//       document.body.classList.remove('modal-open');
//       const modalBackdrop = document.querySelector('.modal-backdrop');
//       if (modalBackdrop) modalBackdrop.remove();
//     } catch (error) {
//       console.error('Error adding payment method:', error);
//       NotificationService.showDialog('Failed to add payment method. Please try again.', 'error');
//     } finally {
//       setIsSubmitting(false);
//       reset();
//     }
//   };

//   return (
//     <div className="modal fade" id="addPaymentModal" data-bs-backdrop="static" tabIndex={-1} aria-labelledby="addPaymentModalLabel" aria-hidden="true">
//       <div className="modal-dialog modal-dialog-centered">
//         <div className="modal-content">
//           <div className="modal-header">
//             <h5 className="modal-title" id="addPaymentModalLabel">Add new payment method</h5>
//             <button 
//               type="button" 
//               className="btn-close" 
//               data-bs-dismiss="modal" 
//               aria-label="Close"
//               disabled={isSubmitting}
//             />
//           </div>
//           <div className="modal-body">
//             {/* Nav tabs */}
//             <ul className="nav nav-tabs mb-3" role="tablist">
//               <li className="nav-item" role="presentation">
//                 <button
//                   type="button"
//                   className={`nav-link ${activeTab === 'card' ? 'active' : ''}`}
//                   onClick={() => handleTabChange('card')}
//                 >
//                   <i className="ci-credit-card fs-base opacity-75 ms-n2 me-2" />
//                   Card
//                 </button>
//               </li>
//               <li className="nav-item" role="presentation">
//                 <button
//                   type="button"
//                   className={`nav-link ${activeTab === 'paypal' ? 'active' : ''}`}
//                   onClick={() => handleTabChange('paypal')}
//                 >
//                   <img src="/assets/img/payment-methods/paypal-icon.svg" className="me-2" width={14} alt="PayPal" />
//                   PayPal
//                 </button>
//               </li>
//             </ul>
            
//             <div className="tab-content">
//               {/* Card tab */}
//               <div className={`tab-pane fade ${activeTab === 'card' ? 'show active' : ''}`} id="card-tab-pane" role="tabpanel">
//                 <form onSubmit={handleSubmit(onSubmit)}>
//                   <div className="mb-3">
//                     <label htmlFor="card-number" className="form-label">Card number</label>
//                     <input
//                       type="text"
//                       className={`form-control ${errors.cardNumber ? 'is-invalid' : ''}`}
//                       id="card-number"
//                       placeholder="XXXX XXXX XXXX XXXX"
//                       {...register('cardNumber', { 
//                         required: 'Card number is required',
//                         pattern: {
//                           value: /^\d{16}$/,
//                           message: 'Please enter a valid 16-digit card number'
//                         }
//                       })}
//                     />
//                     {errors.cardNumber && (
//                       <div className="invalid-feedback">{errors.cardNumber.message}</div>
//                     )}
//                   </div>
                  
//                   <div className="mb-3">
//                     <label htmlFor="card-name" className="form-label">Name on card</label>
//                     <input
//                       type="text"
//                       className={`form-control ${errors.cardName ? 'is-invalid' : ''}`}
//                       id="card-name"
//                       placeholder="Full name"
//                       {...register('cardName', { 
//                         required: 'Name on card is required' 
//                       })}
//                     />
//                     {errors.cardName && (
//                       <div className="invalid-feedback">{errors.cardName.message}</div>
//                     )}
//                   </div>
                  
//                   <div className="row mb-4">
//                     <div className="col-7">
//                       <label htmlFor="card-expiration" className="form-label">Expiration date</label>
//                       <input
//                         type="text"
//                         className={`form-control ${errors.cardExpiration ? 'is-invalid' : ''}`}
//                         id="card-expiration"
//                         placeholder="MM/YY"
//                         {...register('cardExpiration', { 
//                           required: 'Expiration date is required',
//                           pattern: {
//                             value: /^(0[1-9]|1[0-2])\/?([0-9]{2})$/,
//                             message: 'Please use MM/YY format'
//                           }
//                         })}
//                       />
//                       {errors.cardExpiration && (
//                         <div className="invalid-feedback">{errors.cardExpiration.message}</div>
//                       )}
//                     </div>
                    
//                     <div className="col-5">
//                       <label htmlFor="card-cvc" className="form-label">CVC</label>
//                       <input
//                         type="text"
//                         className={`form-control ${errors.cardCvc ? 'is-invalid' : ''}`}
//                         id="card-cvc"
//                         placeholder="XXX"
//                         {...register('cardCvc', { 
//                           required: 'CVC is required',
//                           pattern: {
//                             value: /^[0-9]{3,4}$/,
//                             message: 'Please enter a valid CVC'
//                           }
//                         })}
//                       />
//                       {errors.cardCvc && (
//                         <div className="invalid-feedback">{errors.cardCvc.message}</div>
//                       )}
//                     </div>
//                   </div>
                  
//                   <div className="d-flex gap-3">
//                     <button 
//                       type="button" 
//                       className="btn btn-secondary w-100" 
//                       data-bs-dismiss="modal"
//                       disabled={isSubmitting}
//                     >
//                       Cancel
//                     </button>
//                     <button 
//                       type="submit" 
//                       className="btn btn-primary w-100"
//                       disabled={isSubmitting}
//                     >
//                       {isSubmitting ? (
//                         <>
//                           <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
//                           Adding...
//                         </>
//                       ) : 'Add card'}
//                     </button>
//                   </div>
//                 </form>
//               </div>
              
//               {/* PayPal tab */}
//               <div className={`tab-pane fade ${activeTab === 'paypal' ? 'show active' : ''}`} id="paypal-tab-pane" role="tabpanel">
//                 <form onSubmit={handleSubmit(onSubmit)}>
//                   <div className="mb-4">
//                     <label htmlFor="paypal-email" className="form-label">Email associated with PayPal</label>
//                     <input
//                       type="email"
//                       className={`form-control ${errors.paypalEmail ? 'is-invalid' : ''}`}
//                       id="paypal-email"
//                       placeholder="Email address"
//                       {...register('paypalEmail', { 
//                         required: 'PayPal email is required',
//                         pattern: {
//                           value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
//                           message: 'Please enter a valid email address'
//                         }
//                       })}
//                     />
//                     {errors.paypalEmail && (
//                       <div className="invalid-feedback">{errors.paypalEmail.message}</div>
//                     )}
//                   </div>
                  
//                   <div className="d-flex gap-3">
//                     <button 
//                       type="button" 
//                       className="btn btn-secondary w-100" 
//                       data-bs-dismiss="modal"
//                       disabled={isSubmitting}
//                     >
//                       Cancel
//                     </button>
//                     <button 
//                       type="submit" 
//                       className="btn btn-primary w-100"
//                       disabled={isSubmitting}
//                     >
//                       {isSubmitting ? (
//                         <>
//                           <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
//                           Adding...
//                         </>
//                       ) : 'Add PayPal'}
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddPaymentModal;

// v3
import React, { useState } from 'react';
import axios from 'axios';
import { NotificationService } from '../../../services/local/NotificationService';

type FormData = {
  cardNumber: string;
  cardName: string;
  cardExpiration: string;
  cardCvc: string;
  paypalEmail: string;
};

type PaymentMethodType = 'card' | 'paypal';

type FormErrors = {
  cardNumber?: string;
  cardName?: string;
  cardExpiration?: string;
  cardCvc?: string;
  paypalEmail?: string;
};

const AddPaymentModal = ({ onAddPayment, userId }: { onAddPayment: (data: any) => void, userId: string }) => {
  const [activeTab, setActiveTab] = useState<PaymentMethodType>('card');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    cardNumber: '',
    cardName: '',
    cardExpiration: '',
    cardCvc: '',
    paypalEmail: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const handleTabChange = (tab: PaymentMethodType) => {
    setActiveTab(tab);
    setFormData({
      cardNumber: '',
      cardName: '',
      cardExpiration: '',
      cardCvc: '',
      paypalEmail: ''
    });
    setErrors({});
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user types
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (activeTab === 'card') {
      if (!formData.cardNumber.trim()) {
        newErrors.cardNumber = 'Card number is required';
      } else if (!/^\d{16}$/.test(formData.cardNumber)) {
        newErrors.cardNumber = 'Please enter a valid 16-digit card number';
      }

      if (!formData.cardName.trim()) {
        newErrors.cardName = 'Name on card is required';
      }

      if (!formData.cardExpiration.trim()) {
        newErrors.cardExpiration = 'Expiration date is required';
      } else if (!/^(0[1-9]|1[0-2])\/?([0-9]{2})$/.test(formData.cardExpiration)) {
        newErrors.cardExpiration = 'Please use MM/YY format';
      }

      if (!formData.cardCvc.trim()) {
        newErrors.cardCvc = 'CVC is required';
      } else if (!/^[0-9]{3,4}$/.test(formData.cardCvc)) {
        newErrors.cardCvc = 'Please enter a valid CVC';
      }
    } else {
      if (!formData.paypalEmail.trim()) {
        newErrors.paypalEmail = 'PayPal email is required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.paypalEmail)) {
        newErrors.paypalEmail = 'Please enter a valid email address';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    try {
      const paymentData = activeTab === 'card' ? {
        type: 'card',
        details: {
          last4: formData.cardNumber.slice(-4),
          brand: 'Visa', // Would be determined from card number
          name: formData.cardName,
          exp_month: formData.cardExpiration.split('/')[0],
          exp_year: formData.cardExpiration.split('/')[1],
        }
      } : {
        type: 'paypal',
        details: {
          email: formData.paypalEmail
        }
      };

      // Call backend API
      const response = await axios.post('/api/payment-methods', {
        ...paymentData,
        userId
      });

      onAddPayment(response.data);
      NotificationService.showDialog('Payment method added successfully!');
      
      // Close modal
      const modal = document.getElementById('addPaymentModal');
      if (modal) {
        modal.classList.remove('show');
        document.body.classList.remove('modal-open');
        const modalBackdrop = document.querySelector('.modal-backdrop');
        if (modalBackdrop) modalBackdrop.remove();
      }
    } catch (error) {
      console.error('Error adding payment method:', error);
      NotificationService.showDialog('Failed to add payment method. Please try again.', 'error');
    } finally {
      setIsSubmitting(false);
      setFormData({
        cardNumber: '',
        cardName: '',
        cardExpiration: '',
        cardCvc: '',
        paypalEmail: ''
      });
    }
  };

  return (
    <div className="modal fade" id="addPaymentModal" data-bs-backdrop="static" tabIndex={-1} aria-labelledby="addPaymentModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="addPaymentModalLabel">Add new payment method</h5>
            <button 
              type="button" 
              className="btn-close" 
              data-bs-dismiss="modal" 
              aria-label="Close"
              disabled={isSubmitting}
            />
          </div>
          <div className="modal-body">
            {/* Nav tabs */}
            <ul className="nav nav-tabs mb-3" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  type="button"
                  className={`nav-link ${activeTab === 'card' ? 'active' : ''}`}
                  onClick={() => handleTabChange('card')}
                >
                  <i className="ci-credit-card fs-base opacity-75 ms-n2 me-2" />
                  Card
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  type="button"
                  className={`nav-link ${activeTab === 'paypal' ? 'active' : ''}`}
                  onClick={() => handleTabChange('paypal')}
                >
                  <img src="/assets/img/payment-methods/paypal-icon.svg" className="me-2" width={14} alt="PayPal" />
                  PayPal
                </button>
              </li>
            </ul>
            
            <div className="tab-content">
              {/* Card tab */}
              <div className={`tab-pane fade ${activeTab === 'card' ? 'show active' : ''}`} id="card-tab-pane" role="tabpanel">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="card-number" className="form-label">Card number</label>
                    <input
                      type="text"
                      className={`form-control ${errors.cardNumber ? 'is-invalid' : ''}`}
                      id="card-number"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      placeholder="XXXX XXXX XXXX XXXX"
                    />
                    {errors.cardNumber && (
                      <div className="invalid-feedback">{errors.cardNumber}</div>
                    )}
                  </div>
                  
                  <div className="mb-3">
                    <label htmlFor="card-name" className="form-label">Name on card</label>
                    <input
                      type="text"
                      className={`form-control ${errors.cardName ? 'is-invalid' : ''}`}
                      id="card-name"
                      name="cardName"
                      value={formData.cardName}
                      onChange={handleInputChange}
                      placeholder="Full name"
                    />
                    {errors.cardName && (
                      <div className="invalid-feedback">{errors.cardName}</div>
                    )}
                  </div>
                  
                  <div className="row mb-4">
                    <div className="col-7">
                      <label htmlFor="card-expiration" className="form-label">Expiration date</label>
                      <input
                        type="text"
                        className={`form-control ${errors.cardExpiration ? 'is-invalid' : ''}`}
                        id="card-expiration"
                        name="cardExpiration"
                        value={formData.cardExpiration}
                        onChange={handleInputChange}
                        placeholder="MM/YY"
                      />
                      {errors.cardExpiration && (
                        <div className="invalid-feedback">{errors.cardExpiration}</div>
                      )}
                    </div>
                    
                    <div className="col-5">
                      <label htmlFor="card-cvc" className="form-label">CVC</label>
                      <input
                        type="text"
                        className={`form-control ${errors.cardCvc ? 'is-invalid' : ''}`}
                        id="card-cvc"
                        name="cardCvc"
                        value={formData.cardCvc}
                        onChange={handleInputChange}
                        placeholder="XXX"
                      />
                      {errors.cardCvc && (
                        <div className="invalid-feedback">{errors.cardCvc}</div>
                      )}
                    </div>
                  </div>
                  
                  <div className="d-flex gap-3">
                    <button 
                      type="button" 
                      className="btn btn-secondary w-100" 
                      data-bs-dismiss="modal"
                      disabled={isSubmitting}
                    >
                      Cancel
                    </button>
                    <button 
                      type="submit" 
                      className="btn btn-primary w-100"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                          Adding...
                        </>
                      ) : 'Add card'}
                    </button>
                  </div>
                </form>
              </div>
              
              {/* PayPal tab */}
              <div className={`tab-pane fade ${activeTab === 'paypal' ? 'show active' : ''}`} id="paypal-tab-pane" role="tabpanel">
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="paypal-email" className="form-label">Email associated with PayPal</label>
                    <input
                      type="email"
                      className={`form-control ${errors.paypalEmail ? 'is-invalid' : ''}`}
                      id="paypal-email"
                      name="paypalEmail"
                      value={formData.paypalEmail}
                      onChange={handleInputChange}
                      placeholder="Email address"
                    />
                    {errors.paypalEmail && (
                      <div className="invalid-feedback">{errors.paypalEmail}</div>
                    )}
                  </div>
                  
                  <div className="d-flex gap-3">
                    <button 
                      type="button" 
                      className="btn btn-secondary w-100" 
                      data-bs-dismiss="modal"
                      disabled={isSubmitting}
                    >
                      Cancel
                    </button>
                    <button 
                      type="submit" 
                      className="btn btn-primary w-100"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                          Adding...
                        </>
                      ) : 'Add PayPal'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPaymentModal;