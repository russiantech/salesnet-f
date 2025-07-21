// import React from 'react'
// import { NavLink } from 'react-router-dom'

// const AsideOrderSummary = () => {
//     {/* Order summary (sticky sidebar) */ }
//     return (

//         <aside className="col-lg-4 offset-xl-1 mb-4" style={{ marginTop: "-115px" }}>
//             <div className="position-sticky top-0" style={{ paddingTop: 115 }}>
//                 <div className="d-flex align-items-center justify-content-between border-bottom pb-4 mb-4">
//                     <h2 className="h5 mb-0 me-3">Order summary</h2>
//                     <div className="nav animate-scale">
//                         <NavLink className="badge text-bg-info rounded-pill animate-target" to="/users/basket"> Edit </NavLink>
//                     </div>
//                 </div>
//                 <ul className="list-unstyled fs-sm gap-3 mb-0">
//                     <li className="d-flex justify-content-between">
//                         Subtotal (8 items):
//                         <span className="text-dark-emphasis fw-medium">$71.70</span>
//                     </li>
//                     <li className="d-flex justify-content-between">
//                         Saving:
//                         <span className="text-danger fw-medium">-$2.79</span>
//                     </li>
//                     <li className="d-flex justify-content-between">
//                         Delivery:
//                         <span className="text-dark-emphasis fw-medium">Free</span>
//                     </li>
//                 </ul>
//                 <div className="border-top pt-4 mt-4">
//                     <div className="d-flex justify-content-between mb-4">
//                         <span className="fs-sm">Estimated total:</span>
//                         <span className="h5 mb-0">$68.91</span>
//                     </div>
//                     <div
//                         className="alert d-flex alert-warning fs-sm rounded-4 mb-4"
//                         role="alert"
//                     >
//                         <i className="ci-info fs-lg pe-1 mt-1 me-2" />
//                         <div>
//                             There is a weighted product in the cart. The actual amount may
//                             differ from the indicated amount.
//                         </div>
//                     </div>
//                     <div className="mb-4">
//                         <label htmlFor="order-note" className="form-label">
//                             Order note
//                         </label>
//                         <textarea
//                             className="form-control rounded-5"
//                             id="order-note"
//                             rows={3}
//                             defaultValue={""}
//                         />
//                     </div>
//                     <div className="form-check mb-4">
//                         <input type="checkbox" className="form-check-input" id="age" />
//                         <label htmlFor="age" className="form-check-label">
//                             The order has products with age restrictions. I confirm that
//                             <span className="fw-semibold">
//                                 I am at least 18 years old.
//                             </span>
//                         </label>
//                     </div>
//                     <a
//                         className="btn btn-lg btn-primary w-100 rounded-pill"
//                         href="checkout-v2-thankyou.html"
//                     >
//                         Confirm the order
//                         <i className="ci-chevron-right fs-lg ms-1 me-n1" />
//                     </a>
//                 </div>
//             </div>
//         </aside>

//     )
// }

// export default AsideOrderSummary

// 
// import React from 'react';
// import { NavLink } from 'react-router-dom';

// interface AsideOrderSummaryProps {
//   subtotal?: number;
//   discount?: number;
//   itemCount?: number;
//   onConfirmOrder?: () => void;
//   isLoading?: boolean;
// }

// const AsideOrderSummary: React.FC<AsideOrderSummaryProps> = ({
//   subtotal = 71.70,
//   discount = 2.79,
//   itemCount = 8,
//   onConfirmOrder,
//   isLoading = false
// }) => {
//   const total = subtotal - discount;
  
//   return (
//     <aside className="col-lg-4 offset-xl-1 mb-4" style={{ marginTop: "-115px" }}>
//       <div className="position-sticky top-0" style={{ paddingTop: 115 }}>
//         <div className="d-flex align-items-center justify-content-between border-bottom pb-4 mb-4">
//           <h2 className="h5 mb-0 me-3">Order summary</h2>
//           <div className="nav animate-scale">
//             <NavLink className="badge text-bg-info rounded-pill animate-target" to="/users/basket">
//               Edit
//             </NavLink>
//           </div>
//         </div>
//         <ul className="list-unstyled fs-sm gap-3 mb-0">
//           <li className="d-flex justify-content-between">
//             Subtotal ({itemCount} items):
//             <span className="text-dark-emphasis fw-medium">${subtotal.toFixed(2)}</span>
//           </li>
//           <li className="d-flex justify-content-between">
//             Saving:
//             <span className="text-danger fw-medium">-${discount.toFixed(2)}</span>
//           </li>
//           <li className="d-flex justify-content-between">
//             Delivery:
//             <span className="text-dark-emphasis fw-medium">Free</span>
//           </li>
//         </ul>
//         <div className="border-top pt-4 mt-4">
//           <div className="d-flex justify-content-between mb-4">
//             <span className="fs-sm">Estimated total:</span>
//             <span className="h5 mb-0">${total.toFixed(2)}</span>
//           </div>
//           <div className="alert d-flex alert-warning fs-sm rounded-4 mb-4" role="alert">
//             <i className="ci-info fs-lg pe-1 mt-1 me-2" />
//             <div>
//               There is a weighted product in the cart. The actual amount may
//               differ from the indicated amount.
//             </div>
//           </div>
//           <div className="mb-4">
//             <label htmlFor="order-note" className="form-label">
//               Order note
//             </label>
//             <textarea
//               className="form-control rounded-5"
//               id="order-note"
//               rows={3}
//               defaultValue={""}
//             />
//           </div>
//           <div className="form-check mb-4">
//             <input type="checkbox" className="form-check-input" id="age" required />
//             <label htmlFor="age" className="form-check-label">
//               The order has products with age restrictions. I confirm that
//               <span className="fw-semibold"> I am at least 18 years old.</span>
//             </label>
//           </div>
//           <button
//             className="btn btn-lg btn-primary w-100 rounded-pill"
//             onClick={onConfirmOrder}
//             disabled={isLoading}
//           >
//             {isLoading ? (
//               <>
//                 <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true" />
//                 Processing...
//               </>
//             ) : (
//               <>
//                 Confirm the order
//                 <i className="ci-chevron-right fs-lg ms-1 me-n1" />
//               </>
//             )}
//           </button>
//         </div>
//       </div>
//     </aside>
//   );
// };

// export default AsideOrderSummary;


// v3


import React from 'react';
import { NavLink } from 'react-router-dom';

interface AsideOrderSummaryProps {
  subtotal?: number;
  discount?: number;
  itemCount?: number;
  onConfirmOrder?: () => void;
  isLoading?: boolean;
}

const AsideOrderSummary: React.FC<AsideOrderSummaryProps> = ({
  subtotal = 71.70,
  discount = 2.79,
  itemCount = 8,
  onConfirmOrder,
  isLoading = false
}) => {
  const total = subtotal - discount;
  
  return (
    <aside className="col-lg-4 offset-xl-1 mb-4" style={{ marginTop: "-115px" }}>
      <div className="position-sticky top-0" style={{ paddingTop: 115 }}>
        <div className="d-flex align-items-center justify-content-between border-bottom pb-4 mb-4">
          <h2 className="h5 mb-0 me-3">Order summary</h2>
          <div className="nav animate-scale">
            <NavLink className="badge text-bg-info rounded-pill animate-target" to="/users/basket">
              Edit
            </NavLink>
          </div>
        </div>
        <ul className="list-unstyled fs-sm gap-3 mb-0">
          <li className="d-flex justify-content-between">
            Subtotal ({itemCount} items):
            <span className="text-dark-emphasis fw-medium">${subtotal.toFixed(2)}</span>
          </li>
          <li className="d-flex justify-content-between">
            Saving:
            <span className="text-danger fw-medium">-${discount.toFixed(2)}</span>
          </li>
          <li className="d-flex justify-content-between">
            Delivery:
            <span className="text-dark-emphasis fw-medium">Free</span>
          </li>
        </ul>
        <div className="border-top pt-4 mt-4">
          <div className="d-flex justify-content-between mb-4">
            <span className="fs-sm">Estimated total:</span>
            <span className="h5 mb-0">${total.toFixed(2)}</span>
          </div>
          <div className="alert d-flex alert-warning fs-sm rounded-4 mb-4" role="alert">
            <i className="ci-info fs-lg pe-1 mt-1 me-2" />
            <div>
              There is a weighted product in the cart. The actual amount may
              differ from the indicated amount.
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="order-note" className="form-label">
              Order note
            </label>
            <textarea
              className="form-control rounded-5"
              id="order-note"
              rows={3}
              defaultValue={""}
            />
          </div>
          <div className="form-check mb-4">
            <input type="checkbox" className="form-check-input" id="age" required />
            <label htmlFor="age" className="form-check-label">
              The order has products with age restrictions. I confirm that
              <span className="fw-semibold"> I am at least 18 years old.</span>
            </label>
          </div>
          <button
            className="btn btn-lg btn-primary w-100 rounded-pill"
            onClick={onConfirmOrder}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true" />
                Processing...
              </>
            ) : (
              <>
                Confirm the order
                <i className="ci-chevron-right fs-lg ms-1 me-n1" />
              </>
            )}
          </button>
        </div>
      </div>
    </aside>
  );
};

export default AsideOrderSummary;