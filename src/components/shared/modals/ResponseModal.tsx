// // import React from 'react';

// // const ResponseModal = ({ show, onClose, message, type }) => {
// //     const alertClass = type === 'success' ? 'alert alert-success' :
// //                        type === 'error' ? 'alert alert-danger' :
// //                        type === 'info' ? 'alert alert-info' :
// //                        type === 'warning' ? 'alert alert-warning' : '';

// //     return (
// //         <div className={`modal fade ${show ? 'show' : ''}`} style={{ display: show ? 'block' : 'none' }} tabIndex={-1} role="dialog">
// //             <div className="modal-dialog modal-sm" role="document">
// //                 <div className="modal-content">
// //                     <div className={alertClass} role="alert">
// //                         {message}
// //                         <button type="button" className="btn-close" onClick={onClose} aria-label="Close"></button>
// //                     </div>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };

// // export default ResponseModal;

// // 
// import React from 'react'

// const ResponseModal = () => {
//   return (
//     <>
//     {/* Primary toast */}
//     <div className="toast border-primary w-100 mb-4 fade show"
//       role="alert"
//       aria-live="assertive"
//       aria-atomic="true"
//     >
//       <div className="toast-header">
//         <i className="ci-bell text-primary fs-base me-2" />
//         <span className="fw-semibold">Response:</span>
//         <button
//           type="button"
//           className="btn-close ms-auto"
//           data-bs-dismiss="toast"
//           aria-label="Close"
//         />
//       </div>
//       <div className="toast-body me-2 text-danger">
//         Salesnet is secured by Russian Hackers.
//       </div>
//     </div>
//   </>
  

//   )
// }

// export default ResponseModal

const ResponseModal = ({ show, message, type }) => {
    const getClassNames = () => {
        switch (type) {
            case 'success':
                return 'toast border-success text-success ';
            case 'error':
                return 'text-danger toast border-danger text-danger';
            case 'info':
                return 'toast border-info text-info';
            case 'warning':
                return 'toast border-warning text-warning';
            case 'primary':
            default:
                return 'toast border-primary text-primary';
        }
    };

    return (
        <>
            {show && (
                <div className={`${getClassNames()} mb-2 w-100 fade show`} role="alert" aria-live="assertive" aria-atomic="true">
                    <div className="toast-header">
                        <i className={`ci-bell text-${type} fs-base me-2`} />
                        <span className={`fw-semibold text-${type}`}>Response:</span>
                        {/* <button type="button" className="btn-close ms-auto" aria-label="Close" /> */}
                        <button type="button" className="btn-close ms-auto" data-bs-dismiss="toast" aria-label="Close"/>
                    </div>
                    <div className={`toast-body me-2 text-${type}`}>
                        {message}
                    </div>
                </div>
            )}
        </>
    );
};

export default ResponseModal;
