// import React from 'react';

const Promote = ({ onChange }) => {
  return (
    <section className="position-relative bg-body rounded p-4 mt-4">
      <h2 className="h4 mb-3 text-center">Promote Your Listing</h2>

        <div className="row g-4 pt-5 pb-3">
          {/* Plan */}
          <div className="col-12 col-md-4">
            <div className="card h-100 bg-body-tertiary border-0 rounded-5 p-3">
              <div className="card-body p-2 p-xl-3">
                <button type="button" className="btn btn-dark position-relative rounded-pill mb-3 mb-xl-4">
                  <i className="ci-zap fs-lg fw-bold"></i> Easy Start
                </button>
                <div className="d-flex align-items-center pb-1 pb-xl-0 mb-2 mb-xl-3">
                  <div className="h1 mb-0">$3.9</div>
                  <div className="fs-sm ms-2">/ month</div>
                </div>
                <p className="fs-sm mb-xl-4">Ideal if you're testing the waters and want to start with basic exposure.</p>
                <button type="button" className="btn btn-lg btn-outline-info w-100">Select Easy Start</button>
                <ul className="list-unstyled gap-md-3 fs-sm text-dark-emphasis pt-4 mt-lg-1 mt-xl-2 mb-0">
                  <li className="d-flex">
                    <i className="ci-check fs-base text-body-secondary me-2" style={{ marginTop: '3px' }} />
                    7-Day Run for your ad active for one week
                  </li>
                  <li className="d-flex">
                    <i className="fi-check fs-base text-body-secondary me-2" style={{ marginTop: '3px' }} />
                    Keep your ad live and active for one week
                  </li>
                  <li className="d-flex">
                    <i className="fi-check fs-base text-body-secondary me-2" style={{ marginTop: '3px' }} />
                    Track views and basic engagement metrics
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Featured plan */}
          <div className="col-12 col-md-4">
            <div className="position-relative h-100">
              <div className="card position-relative h-100 z-2 bg-body-tertiary border-0 rounded-5 p-3">
                <div className="card-body p-2 p-xl-3">
                  <button type="button" className="btn text-info bg-info-subtle position-relative rounded-pill mb-3 mb-xl-4">
                    <i className="ci-cloud-lightning"></i> Fast Sale
                    <span className="badge d-flex text-bg-info position-absolute top-0 start-100 translate-middle rounded-pill">Recommended</span>
                  </button>
                  <div className="d-flex align-items-center pb-1 pb-xl-0 mb-2 mb-xl-3">
                    <div className="h1 mb-0">$6.9</div>
                    <div className="fs-sm ms-2">/ month</div>
                  </div>
                  <p className="fs-sm mb-xl-4">Perfect for serious sellers who want more exposure and detailed insights.</p>
                  <button type="button" className="btn btn-lg btn-info w-100">Select Fast Sale</button>
                  <div className="h6 fs-sm pt-4 mt-lg-1 mt-xl-2">Includes everything in Easy Start +</div>
                  <ul className="list-unstyled gap-md-3 fs-sm text-dark-emphasis mb-0">
                    <li className="d-flex">
                      <i className="fi-check fs-base text-body-secondary me-2" style={{ marginTop: '3px' }} />
                      14-Day Run for your ad active for two weeks
                    </li>
                    <li className="d-flex">
                      <i className="fi-check fs-base text-body-secondary me-2" style={{ marginTop: '3px' }} />
                      Detailed user engagement analytics
                    </li>
                    <li className="d-flex">
                      <i className="fi-check fs-base text-body-secondary me-2" style={{ marginTop: '3px' }} />
                      Dedicated assistance from our support team
                    </li>
                  </ul>
                </div>
              </div>
              <div className="position-absolute top-0 start-0 w-100 z-1 fs-sm fw-semibold text-white text-center" style={{ marginTop: '-27px' }}>Recommended</div>
              <div className="position-absolute top-0 start-0 bg-info rounded-5 ms-n1" style={{ width: 'calc(100% + 8px)', height: 'calc(100% + 36px)', marginTop: '-32px' }} />
            </div>
          </div>

          {/* Plan */}
          <div className="col-12 col-md-4">
            <div className="position-relative">
              <div className="card position-relative h-100 z-1 bg-body-tertiary border-0 rounded-5 p-3">
                <div className="card-body p-2 p-xl-3">
                  <button className="badge d-inline-flex align-items-center text-info bg-info-subtle fw-semibold text-decoration-none py-2 px-3 mb-2 rounded-pill mb-3 mb-xl-4">
                    <i className="ci-rocket fs-lg ms-1"></i> Turbo Boost
                  </button>
                  <div className="d-flex align-items-center pb-1 pb-xl-0 mb-2 mb-xl-3">
                    <div className="h1 mb-0">$7.90</div>
                    <div className="fs-sm ms-2">/ month</div>
                  </div>
                  <p className="fs-sm mb-xl-4">Best for ambitious sellers who want maximum exposure and advanced insights.</p>
                  <button type="button" className="btn btn-lg btn-outline-info w-100">Select Turbo Boost</button>
                  <div className="h6 fs-sm pt-4 mt-lg-1 mt-xl-2">Includes everything in Fast Sale +</div>
                  <ul className="list-unstyled gap-md-3 fs-sm text-dark-emphasis mb-0">
                    <li className="d-flex">
                      <i className="fi-check fs-base text-body-secondary me-2" style={{ marginTop: '3px' }} />
                      28-Day Run for your ad active for three weeks
                    </li>
                    <li className="d-flex">
                      <i className="fi-check fs-base text-body-secondary me-2" style={{ marginTop: '3px' }} />
                      Advanced comprehensive data analysis
                    </li>
                    <li className="d-flex">
                      <i className="fi-check fs-base text-body-secondary me-2" style={{ marginTop: '3px' }} />
                      Personalized assistance from our manager
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

    </section>
  );
}

export default Promote;

// import React, { useEffect } from 'react';
// import { useBootstrapPopovers } from '../../../../hooks/useBootstrapPopovers';
// import { useMemo } from 'react';
// // import { Tooltip } from 'bootstrap';

// interface SubscriptionPlan {
//   id: string;
//   name: string;
//   price: string;
//   duration: string;
//   badge?: string;
//   badgeColor?: string;
//   icon: string;
//   features: {
//     text: string;
//     tooltip?: string;
//   }[];
// }

// // export const SubscriptionPlans = () => {
//   // Initialize tooltips
//   // useEffect(() => {
//   //   const tooltipTriggerList = [].slice.call(
//   //     document.querySelectorAll('[data-bs-toggle="tooltip"]')
//   //   );
//   //   tooltipTriggerList.map((triggerEl) => {
//   //     return new Tooltip(triggerEl);
//   //   });
//   // }, []);

//  const SubscriptionPlans = () => {
//   const plans: SubscriptionPlan[] = useMemo(() => [
//     {
//       id: "easy-start",
//       name: "Easy Start",
//       price: "₦3,000",
//       duration: "7 days",
//       icon: "ci-zap",
//       badge: "Popular",
//       badgeColor: "info",
//       features: [
//         { 
//           text: "7-Day Ad Visibility", 
//           tooltip: "Your ad will be prominently displayed for a full week" 
//         },
//         { 
//           text: "Basic Engagement Metrics", 
//           tooltip: "Track views, clicks, and basic interaction data" 
//         },
//         { 
//           text: "Standard Placement", 
//           tooltip: "Appears in category listings and search results" 
//         }
//       ]
//     },
//     {
//       id: "fast-sale",
//       name: "Fast Sale",
//       price: "₦6,500",
//       duration: "14 days",
//       icon: "ci-cloud-lightning",
//       badge: "Recommended",
//       badgeColor: "warning",
//       features: [
//         { 
//           text: "14-Day Priority Visibility", 
//           tooltip: "Extended visibility with priority placement in listings" 
//         },
//         { 
//           text: "Enhanced Analytics Dashboard", 
//           tooltip: "Detailed insights into viewer demographics and behavior" 
//         },
//         { 
//           text: "Email Notification Alerts", 
//           tooltip: "Get notified when users show interest in your listing" 
//         },
//         { 
//           text: "Dedicated Support", 
//           tooltip: "Priority access to our customer support team" 
//         }
//       ]
//     },
//     {
//       id: "turbo-boost",
//       name: "Turbo Boost",
//       price: "₦12,000",
//       duration: "30 days",
//       icon: "ci-rocket",
//       badge: "Premium",
//       badgeColor: "danger",
//       features: [
//         { 
//           text: "30-Day Premium Placement", 
//           tooltip: "Top positioning in search results and category pages" 
//         },
//         { 
//           text: "Advanced Performance Analytics", 
//           tooltip: "In-depth reports with conversion tracking and ROI metrics" 
//         },
//         { 
//           text: "Social Media Cross-Promotion", 
//           tooltip: "Featured in our social media channels and newsletters" 
//         },
//         { 
//           text: "Personal Account Manager", 
//           tooltip: "Dedicated expert to optimize your listing performance" 
//         },
//         { 
//           text: "Urgent Sale Badge", 
//           tooltip: "Special badge to highlight your listing as a hot deal" 
//         }
//       ]
//     }
//   ], []);

//   // Prepare popover data for the hook
//   const popoverData = useMemo(() => 
//     plans.map(plan => ({
//       selector: `#features-popover-${plan.id}`,
//       content: plan.features.map(f => f.text).join('<br>'),
//       customClass: "popover-sm"
//     }))
//   , [plans]);

//   // Initialize popovers
//   useBootstrapPopovers(popoverData);

//   return (
//     <>

//     <div className="row g-4 pt-2">
//       {plans.map((plan) => (
        
//        <div className="col">
//         <div className="card h-100">
//           <div className="card-body pb-3">
//             <div className="d-flex align-items-start justify-content-between mb-4">
//               {/* <img 
//                 src="/assets/img/payment-methods/mastercard.svg" 
//                 className="m-n3 d-none1" 
//                 width={100} 
//                 alt="Mastercard" 
//               /> */}

//               <div className={`bg-${plan.badgeColor?.replace('bg-', '')}-subtle rounded-pill badge`}>
//                   <i className={`${plan.icon} fs-5 text-${plan.badgeColor?.replace('bg-', '')}`}></i>
//                 </div>

//               <span className={`bg-${plan.badgeColor?.replace('bg-', '')}-subtle text-bg-subtle rounded-pill cursor-pointer`}>

//                 {/* <i className={`ci-info text-${plan.badgeColor?.replace('bg-', '')}`}></i> */}

//                 <i className="ci-info fs-base text-warning position-absolute end-4x translate-middle-y" 
//                                 data-bs-toggle="popover" data-bs-trigger="hover" data-bs-custom-class="popover-sm" 
//                                 data-bs-content= {plan.features.map((feature, idx) => (
//                   <li key={idx} className="d-flex mb-2">
//                     <i className="ci-check text-success me-2 mt-1"></i>
//                     <div className="d-flex align-items-center">
//                       <span>{feature.text}</span>
//                       {feature.tooltip && (
//                         {feature.tooltip}
//                       )}
//                     </div>
//                   </li>
//                 ))} />
//                                 {/* data-bs-content="For same day delivery within same city, kindly place your order before 11.AM." /> */}
//                                 {/* data-bs-content="For same day delivery within same city, kindly place your order before 11.AM." /> */}
                                
//                 </span>
//             </div>
//             <div className="h6 mb-1">{plan.name}</div>
//             <div className="text-success fs-xs fw-bold">{plan.price} </div>
//           </div>
//           <div className="card-footer d-flex gap-3 bg-transparent border-0 pt-0 pb-4">
//             <button 
//               type="button" 
//               className="btn btn-sm btn-outline-secondary rounded-pill" >
//               {plan.duration}
//             </button>
//             <button type="button" 
//               className="btn btn-sm btn-outline-secondary rounded-pill"
              
//             >
//               Grab it
//             </button>
//           </div>
//         </div>
//       </div>


//       ))}
//     </div>

//     <div className="row g-4 pt-2">
//       {plans.map((plan) => (
//         <div className="col-md-4" key={plan.id}>
//           <div className={`card h-100 border-0 shadow-sm overflow-hidden ${
//             plan.badge === "Recommended" ? "border border-2 border-warning" : ""
//           }`}>
//             {/* Recommended badge */}
//             {plan.badge && (
//               <div className={`position-absolute top-0 end-0 ${plan.badgeColor} text-white px-3 py-2 rounded-bl`}>
//                 {plan.badge}
//               </div>
//             )}
            
//             <div className="card-body position-relative p-4">
//               {/* Plan header */}
//               <div className="d-flex align-items-center mb-4">
//                 <div className={`bg-${plan.badgeColor?.replace('bg-', '')}-subtle p-3 rounded-circle me-3`}>
//                   <i className={`${plan.icon} fs-2 text-${plan.badgeColor?.replace('bg-', '')}`}></i>
//                 </div>
//                 <div>
//                   <h3 className="h5 mb-0">{plan.name}</h3>
//                   <div className="d-flex align-items-baseline mt-1">
//                     <span className="h4 fw-bold text-primary">{plan.price}</span>
//                     <span className="text-muted ms-2">/ {plan.duration}</span>
//                   </div>
//                 </div>
//               </div>
              
//               {/* Feature list */}
//               <ul className="list-unstyled mb-4">
//                 {plan.features.map((feature, idx) => (
//                   <li key={idx} className="d-flex mb-2">
//                     <i className="ci-check text-success me-2 mt-1"></i>
//                     <div className="d-flex align-items-center">
//                       <span>{feature.text}</span>
//                       {feature.tooltip && (
//                         <span 
//                           className="ms-2 text-primary" 
//                           data-bs-toggle="tooltip" 
//                           title={feature.tooltip}
//                         >
//                           <i className="ci-help"></i>

//                           <i className="ci-info fs-base text-warning position-absolute top-50 end-0 translate-middle-y" 
//                                 data-bs-toggle="popover" data-bs-trigger="hover" data-bs-custom-class="popover-sm" 
//                                 data-bs-content="up to 15 days interval to return an item to salesnet." />
                                
//                         </span>
//                       )}
//                     </div>
//                   </li>
//                 ))}
//               </ul>
              
//               {/* Value proposition */}
//               <div className="bg-light rounded p-3 mb-4">
//                 <div className="d-flex justify-content-between small">
//                   <span>Daily Cost:</span>
//                   <span className="fw-bold">
//                     {plan.id === "easy-start" ? "₦429/day" : 
//                      plan.id === "fast-sale" ? "₦464/day" : "₦400/day"}
//                   </span>
//                 </div>
//                 <div className="d-flex justify-content-between small mt-1">
//                   <span>Estimated Views:</span>
//                   <span className="fw-bold">
//                     {plan.id === "easy-start" ? "500-800" : 
//                      plan.id === "fast-sale" ? "1,200-2,000" : "3,000-5,000"}
//                   </span>
//                 </div>
//               </div>
//             </div>
            
//             {/* Footer with CTA */}
//             <div className="card-footer bg-transparent border-0 pt-0 pb-4 px-4">
//               <button 
//                 className={`btn w-100 ${
//                   plan.badge === "Recommended" 
//                     ? "btn-warning" 
//                     : "btn-outline-primary"
//                 }`}
//               >
//                 {plan.badge === "Recommended" 
//                   ? "Get Premium Visibility" 
//                   : "Select Plan"}
//               </button>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//     </>
    
//   );
// };

// // export default SubscriptionPlans;

// // Promote component
// // import React from 'react';
// // import SubscriptionPlans from './SubscriptionPlans';

// export const PromotePage = () => {
//   return (
//     <section className="container py-5 my-2 my-md-4 my-lg-5">
//       <div className="text-center mb-5">
//         <h2 className="h1 mb-2">Boost Your Listing Visibility</h2>
//         <p className="text-muted fs-lg">
//           Premium placement options to get your listing noticed by more buyers
//         </p>
//       </div>
      
//       <SubscriptionPlans />
      
//       <div className="text-center mt-5 pt-3">
//         <p className="text-muted mb-2">
//           <i className="ci-security-check fs-lg text-success me-2"></i>
//           All plans include secure payment processing and 24/7 support
//         </p>
//         <p className="text-muted mb-0">
//           Need help choosing? <a href="#contact">Contact our sales team</a>
//         </p>
//       </div>
//     </section>
//   );
// };

// export default PromotePage;