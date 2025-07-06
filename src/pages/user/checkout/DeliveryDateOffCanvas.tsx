// import React from 'react'

// const DeliveryDateOffCanvas = () => {
//   return (
//     <div
//     className="offcanvas offcanvas-end pb-sm-2 px-sm-2"
//     id="deliveryDateTime"
//     tabIndex={-1}
//     aria-labelledby="deliveryDateTimeLabel"
//     style={{ width: 500 }}
//   >
//     {/* Header with nav tabs */}
//     <div className="offcanvas-header py-3 pt-lg-4">
//       <h4 className="offcanvas-title" id="deliveryDateTimeLabel">
//         Schedule date and time
//       </h4>
//       <button
//         type="button"
//         className="btn-close"
//         data-bs-dismiss="offcanvas"
//         aria-label="Close"
//       />
//     </div>
//     {/* Body */}
//     <div className="offcanvas-body py-3">
//       {/* Day */}
//       <div className="d-flex justify-content-between gap-3 overflow-auto pb-3">
//         <div className="text-center">
//           <div className="fs-sm pb-1 mb-2">Mon</div>
//           <input type="radio" className="btn-check" name="day" id="mon" />
//           <label
//             className="btn btn-icon btn-lg btn-outline-secondary fs-sm rounded-circle"
//             htmlFor="mon"
//           >
//             24
//           </label>
//         </div>
//         <div className="text-center">
//           <div className="fs-sm pb-1 mb-2">Tue</div>
//           <input type="radio" className="btn-check" name="day" id="tue" />
//           <label
//             className="btn btn-icon btn-lg btn-outline-secondary fs-sm rounded-circle"
//             htmlFor="tue"
//           >
//             25
//           </label>
//         </div>
//         <div className="text-center">
//           <div className="fs-sm pb-1 mb-2">Wed</div>
//           <input
//             type="radio"
//             className="btn-check"
//             name="day"
//             id="wed"
//             defaultChecked=""
//           />
//           <label
//             className="btn btn-icon btn-lg btn-outline-secondary fs-sm rounded-circle"
//             htmlFor="wed"
//           >
//             26
//           </label>
//         </div>
//         <div className="text-center">
//           <div className="fs-sm pb-1 mb-2">Thu</div>
//           <input type="radio" className="btn-check" name="day" id="thu" />
//           <label
//             className="btn btn-icon btn-lg btn-outline-secondary fs-sm rounded-circle"
//             htmlFor="thu"
//           >
//             27
//           </label>
//         </div>
//         <div className="text-center">
//           <div className="fs-sm pb-1 mb-2">Fri</div>
//           <input type="radio" className="btn-check" name="day" id="fri" />
//           <label
//             className="btn btn-icon btn-lg btn-outline-secondary fs-sm rounded-circle"
//             htmlFor="fri"
//           >
//             28
//           </label>
//         </div>
//         <div className="text-center">
//           <div className="fs-sm pb-1 mb-2">Sat</div>
//           <input type="radio" className="btn-check" name="day" id="sat" />
//           <label
//             className="btn btn-icon btn-lg btn-outline-secondary fs-sm rounded-circle"
//             htmlFor="sat"
//           >
//             29
//           </label>
//         </div>
//         <div className="text-center">
//           <div className="fs-sm pb-1 mb-2">Sun</div>
//           <input type="radio" className="btn-check" name="day" id="sun" />
//           <label
//             className="btn btn-icon btn-lg btn-outline-secondary fs-sm rounded-circle"
//             htmlFor="sun"
//           >
//             30
//           </label>
//         </div>
//       </div>
//       {/* Time */}
//       <div className="form-check border-bottom py-4 m-0">
//         <input
//           type="radio"
//           className="form-check-input"
//           id="delivery-time-1"
//           name="delivery-time"
//         />
//         <div className="d-flex w-100">
//           <label
//             htmlFor="delivery-time-1"
//             className="form-check-label text-dark-emphasis fw-semibold me-3"
//           >
//             08:00 - 10:00
//           </label>
//           <span className="fs-sm ms-auto">Free</span>
//         </div>
//       </div>
//       <div className="form-check border-bottom py-4 m-0">
//         <input
//           type="radio"
//           className="form-check-input"
//           id="delivery-time-2"
//           name="delivery-time"
//           defaultChecked=""
//         />
//         <div className="d-flex w-100">
//           <label
//             htmlFor="delivery-time-2"
//             className="form-check-label text-dark-emphasis fw-semibold me-3"
//           >
//             10:00 - 12:00
//           </label>
//           <span className="fs-sm ms-auto">Free</span>
//         </div>
//       </div>
//       <div className="form-check border-bottom py-4 m-0">
//         <input
//           type="radio"
//           className="form-check-input"
//           id="delivery-time-3"
//           name="delivery-time"
//         />
//         <div className="d-flex w-100">
//           <label
//             htmlFor="delivery-time-3"
//             className="form-check-label text-dark-emphasis fw-semibold me-3"
//           >
//             12:00 - 14:00
//           </label>
//           <span className="fs-sm ms-auto">Free</span>
//         </div>
//       </div>
//       <div className="form-check border-bottom py-4 m-0">
//         <input
//           type="radio"
//           className="form-check-input"
//           id="delivery-time-4"
//           name="delivery-time"
//         />
//         <div className="d-flex w-100">
//           <label
//             htmlFor="delivery-time-4"
//             className="form-check-label text-dark-emphasis fw-semibold me-3"
//           >
//             14:00 - 16:00
//           </label>
//           <span className="fs-sm ms-auto">Free</span>
//         </div>
//       </div>
//       <div className="form-check border-bottom py-4 m-0">
//         <input
//           type="radio"
//           className="form-check-input"
//           id="delivery-time-5"
//           name="delivery-time"
//         />
//         <div className="d-flex w-100">
//           <label
//             htmlFor="delivery-time-5"
//             className="form-check-label text-dark-emphasis fw-semibold me-3"
//           >
//             16:00 - 18:00
//           </label>
//           <span className="fs-sm ms-auto">Free</span>
//         </div>
//       </div>
//       <div className="form-check border-bottom py-4 m-0">
//         <input
//           type="radio"
//           className="form-check-input"
//           id="delivery-time-6"
//           name="delivery-time"
//         />
//         <div className="d-flex w-100">
//           <label
//             htmlFor="delivery-time-6"
//             className="form-check-label text-dark-emphasis fw-semibold me-3"
//           >
//             18:00 - 20:00
//           </label>
//           <span className="fs-sm ms-auto">Free</span>
//         </div>
//       </div>
//       <div className="form-check border-bottom py-4 m-0">
//         <input
//           type="radio"
//           className="form-check-input"
//           id="delivery-time-7"
//           name="delivery-time"
//         />
//         <div className="d-flex w-100">
//           <label
//             htmlFor="delivery-time-7"
//             className="form-check-label text-dark-emphasis fw-semibold me-3"
//           >
//             20:00 - 22:00
//           </label>
//           <span className="fs-sm ms-auto">Free</span>
//         </div>
//       </div>
//     </div>
//     {/* Footer */}
//     <div className="offcanvas-header">
//       <button
//         type="button"
//         className="btn btn-lg btn-primary w-100 rounded-pill"
//       >
//         Confirm date and time
//       </button>
//     </div>
//   </div>
//   )
// }

// export default DeliveryDateOffCanvas

// 
// import React from 'react'

// const DeliveryDateOffCanvas = () => {
//   return (
//     <div
//       className="offcanvas offcanvas-end pb-sm-2 px-sm-2"
//       id="deliveryDateTime"
//       tabIndex={-1}
//       aria-labelledby="deliveryDateTimeLabel"
//       style={{ width: 500 }}
//     >
//       {/* Header with nav tabs */}
//       <div className="offcanvas-header py-3 pt-lg-4">
//         <h4 className="offcanvas-title" id="deliveryDateTimeLabel">
//           Schedule date and time
//         </h4>
//         <button
//           type="button"
//           className="btn-close"
//           data-bs-dismiss="offcanvas"
//           aria-label="Close"
//         />
//       </div>
//       {/* Body */}
//       <div className="offcanvas-body py-3">
//         {/* Day */}
//         <div className="d-flex justify-content-between gap-3 overflow-auto pb-3">
//           <div className="text-center">
//             <div className="fs-sm pb-1 mb-2">Mon</div>
//             <input type="radio" className="btn-check" name="day" id="mon" />
//             <label
//               className="btn btn-icon btn-lg btn-outline-secondary fs-sm rounded-circle"
//               htmlFor="mon"
//             >
//               24
//             </label>
//           </div>
//           <div className="text-center">
//             <div className="fs-sm pb-1 mb-2">Tue</div>
//             <input type="radio" className="btn-check" name="day" id="tue" />
//             <label
//               className="btn btn-icon btn-lg btn-outline-secondary fs-sm rounded-circle"
//               htmlFor="tue"
//             >
//               25
//             </label>
//           </div>
//           <div className="text-center">
//             <div className="fs-sm pb-1 mb-2">Wed</div>
//             <input
//               type="radio"
//               className="btn-check"
//               name="day"
//               id="wed"
//               defaultChecked={true}
//             />
//             <label
//               className="btn btn-icon btn-lg btn-outline-secondary fs-sm rounded-circle"
//               htmlFor="wed"
//             >
//               26
//             </label>
//           </div>
//           <div className="text-center">
//             <div className="fs-sm pb-1 mb-2">Thu</div>
//             <input type="radio" className="btn-check" name="day" id="thu" />
//             <label
//               className="btn btn-icon btn-lg btn-outline-secondary fs-sm rounded-circle"
//               htmlFor="thu"
//             >
//               27
//             </label>
//           </div>
//           <div className="text-center">
//             <div className="fs-sm pb-1 mb-2">Fri</div>
//             <input type="radio" className="btn-check" name="day" id="fri" />
//             <label
//               className="btn btn-icon btn-lg btn-outline-secondary fs-sm rounded-circle"
//               htmlFor="fri"
//             >
//               28
//             </label>
//           </div>
//           <div className="text-center">
//             <div className="fs-sm pb-1 mb-2">Sat</div>
//             <input type="radio" className="btn-check" name="day" id="sat" />
//             <label
//               className="btn btn-icon btn-lg btn-outline-secondary fs-sm rounded-circle"
//               htmlFor="sat"
//             >
//               29
//             </label>
//           </div>
//           <div className="text-center">
//             <div className="fs-sm pb-1 mb-2">Sun</div>
//             <input type="radio" className="btn-check" name="day" id="sun" />
//             <label
//               className="btn btn-icon btn-lg btn-outline-secondary fs-sm rounded-circle"
//               htmlFor="sun"
//             >
//               30
//             </label>
//           </div>
//         </div>
//         {/* Time */}
//         <div className="form-check border-bottom py-4 m-0">
//           <input
//             type="radio"
//             className="form-check-input"
//             id="delivery-time-1"
//             name="delivery-time"
//           />
//           <div className="d-flex w-100">
//             <label
//               htmlFor="delivery-time-1"
//               className="form-check-label text-dark-emphasis fw-semibold me-3"
//             >
//               08:00 - 10:00
//             </label>
//             <span className="fs-sm ms-auto">Free</span>
//           </div>
//         </div>
//         <div className="form-check border-bottom py-4 m-0">
//           <input
//             type="radio"
//             className="form-check-input"
//             id="delivery-time-2"
//             name="delivery-time"
//             defaultChecked={true}
//           />
//           <div className="d-flex w-100">
//             <label
//               htmlFor="delivery-time-2"
//               className="form-check-label text-dark-emphasis fw-semibold me-3"
//             >
//               10:00 - 12:00
//             </label>
//             <span className="fs-sm ms-auto">Free</span>
//           </div>
//         </div>
//         <div className="form-check border-bottom py-4 m-0">
//           <input
//             type="radio"
//             className="form-check-input"
//             id="delivery-time-3"
//             name="delivery-time"
//           />
//           <div className="d-flex w-100">
//             <label
//               htmlFor="delivery-time-3"
//               className="form-check-label text-dark-emphasis fw-semibold me-3"
//             >
//               12:00 - 14:00
//             </label>
//             <span className="fs-sm ms-auto">Free</span>
//           </div>
//         </div>
//         <div className="form-check border-bottom py-4 m-0">
//           <input
//             type="radio"
//             className="form-check-input"
//             id="delivery-time-4"
//             name="delivery-time"
//           />
//           <div className="d-flex w-100">
//             <label
//               htmlFor="delivery-time-4"
//               className="form-check-label text-dark-emphasis fw-semibold me-3"
//             >
//               14:00 - 16:00
//             </label>
//             <span className="fs-sm ms-auto">Free</span>
//           </div>
//         </div>
//         <div className="form-check border-bottom py-4 m-0">
//           <input
//             type="radio"
//             className="form-check-input"
//             id="delivery-time-5"
//             name="delivery-time"
//           />
//           <div className="d-flex w-100">
//             <label
//               htmlFor="delivery-time-5"
//               className="form-check-label text-dark-emphasis fw-semibold me-3"
//             >
//               16:00 - 18:00
//             </label>
//             <span className="fs-sm ms-auto">Free</span>
//           </div>
//         </div>
//         <div className="form-check border-bottom py-4 m-0">
//           <input
//             type="radio"
//             className="form-check-input"
//             id="delivery-time-6"
//             name="delivery-time"
//           />
//           <div className="d-flex w-100">
//             <label
//               htmlFor="delivery-time-6"
//               className="form-check-label text-dark-emphasis fw-semibold me-3"
//             >
//               18:00 - 20:00
//             </label>
//             <span className="fs-sm ms-auto">Free</span>
//           </div>
//         </div>
//         <div className="form-check border-bottom py-4 m-0">
//           <input
//             type="radio"
//             className="form-check-input"
//             id="delivery-time-7"
//             name="delivery-time"
//           />
//           <div className="d-flex w-100">
//             <label
//               htmlFor="delivery-time-7"
//               className="form-check-label text-dark-emphasis fw-semibold me-3"
//             >
//               20:00 - 22:00
//             </label>
//             <span className="fs-sm ms-auto">Free</span>
//           </div>
//         </div>
//       </div>
//       {/* Footer */}
//       <div className="offcanvas-header">
//         <button
//           type="button"
//           className="btn btn-lg btn-primary w-100 rounded-pill"
//         >
//           Confirm date and time
//         </button>
//       </div>
//     </div>
//   )
// }

// export default DeliveryDateOffCanvas

// v3
// import React from 'react';
// import { useState } from 'react';

// interface DeliveryDateOffCanvasProps {
//   onSelect: (date: string, timeSlot: string) => void;
// }

// const DeliveryDateOffCanvas: React.FC<DeliveryDateOffCanvasProps> = ({ onSelect }) => {
//   const days = [
//     { id: 'mon', day: 'Mon', date: '24' },
//     { id: 'tue', day: 'Tue', date: '25' },
//     { id: 'wed', day: 'Wed', date: '26' },
//     { id: 'thu', day: 'Thu', date: '27' },
//     { id: 'fri', day: 'Fri', date: '28' },
//     { id: 'sat', day: 'Sat', date: '29' },
//     { id: 'sun', day: 'Sun', date: '30' },
//   ];

//   const timeSlots = [
//     '08:00 - 10:00',
//     '10:00 - 12:00',
//     '12:00 - 14:00',
//     '14:00 - 16:00',
//     '16:00 - 18:00',
//     '18:00 - 20:00',
//     '20:00 - 22:00'
//   ];

//   const [selectedDay, setSelectedDay] = useState('wed');
//   const [selectedTime, setSelectedTime] = useState('10:00 - 12:00');

//   const handleDaySelect = (dayId: string) => {
//     setSelectedDay(dayId);
//     onSelect(dayId, selectedTime);
//   };

//   const handleTimeSelect = (time: string) => {
//     setSelectedTime(time);
//     onSelect(selectedDay, time);
//   };

//   const handleConfirm = () => {
//     onSelect(selectedDay, selectedTime);
//     // Close the offcanvas
//     const offcanvas = document.getElementById('deliveryDateTime');
//     const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvas);
//     bsOffcanvas?.hide();
//   };

//   return (
//     <div
//       className="offcanvas offcanvas-end pb-sm-2 px-sm-2"
//       id="deliveryDateTime"
//       tabIndex={-1}
//       aria-labelledby="deliveryDateTimeLabel"
//       style={{ width: 500 }}
//     >
//       <div className="offcanvas-header py-3 pt-lg-4">
//         <h4 className="offcanvas-title" id="deliveryDateTimeLabel">
//           Schedule date and time
//         </h4>
//         <button
//           type="button"
//           className="btn-close"
//           data-bs-dismiss="offcanvas"
//           aria-label="Close"
//         />
//       </div>
//       <div className="offcanvas-body py-3">
//         <div className="d-flex justify-content-between gap-3 overflow-auto pb-3">
//           {days.map(({ id, day, date }) => (
//             <div className="text-center" key={id}>
//               <div className="fs-sm pb-1 mb-2">{day}</div>
//               <input 
//                 type="radio" 
//                 className="btn-check" 
//                 name="day" 
//                 id={id}
//                 checked={selectedDay === id}
//                 onChange={() => handleDaySelect(id)}
//               />
//               <label
//                 className={`btn btn-icon btn-lg fs-sm rounded-circle ${
//                   selectedDay === id ? 'btn-primary' : 'btn-outline-secondary'
//                 }`}
//                 htmlFor={id}
//               >
//                 {date}
//               </label>
//             </div>
//           ))}
//         </div>
//         {timeSlots.map((time) => (
//           <div className="form-check border-bottom py-4 m-0" key={time}>
//             <input
//               type="radio"
//               className="form-check-input"
//               id={`delivery-time-${time}`}
//               name="delivery-time"
//               checked={selectedTime === time}
//               onChange={() => handleTimeSelect(time)}
//             />
//             <div className="d-flex w-100">
//               <label
//                 htmlFor={`delivery-time-${time}`}
//                 className="form-check-label text-dark-emphasis fw-semibold me-3"
//               >
//                 {time}
//               </label>
//               <span className="fs-sm ms-auto">Free</span>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="offcanvas-header">
//         <button
//           type="button"
//           className="btn btn-lg btn-primary w-100 rounded-pill"
//           onClick={handleConfirm}
//         >
//           Confirm date and time
//         </button>
//       </div>
//     </div>
//   );
// };

// export default DeliveryDateOffCanvas;

// 

// v4

// import React from 'react';
// import { useState } from 'react';

// interface DeliveryDateOffCanvasProps {
//   onSelect: (date: string, timeSlot: string) => void;
// }

// const DeliveryDateOffCanvas: React.FC<DeliveryDateOffCanvasProps> = ({ onSelect }) => {
//   const days = [
//     { id: 'mon', day: 'Mon', date: '24' },
//     { id: 'tue', day: 'Tue', date: '25' },
//     { id: 'wed', day: 'Wed', date: '26' },
//     { id: 'thu', day: 'Thu', date: '27' },
//     { id: 'fri', day: 'Fri', date: '28' },
//     { id: 'sat', day: 'Sat', date: '29' },
//     { id: 'sun', day: 'Sun', date: '30' },
//   ];

//   const timeSlots = [
//     '08:00 - 10:00',
//     '10:00 - 12:00',
//     '12:00 - 14:00',
//     '14:00 - 16:00',
//     '16:00 - 18:00',
//     '18:00 - 20:00',
//     '20:00 - 22:00'
//   ];

//   const [selectedDay, setSelectedDay] = useState('wed');
//   const [selectedTime, setSelectedTime] = useState('10:00 - 12:00');

//   const handleDaySelect = (dayId: string) => {
//     setSelectedDay(dayId);
//     onSelect(dayId, selectedTime);
//   };

//   const handleTimeSelect = (time: string) => {
//     setSelectedTime(time);
//     onSelect(selectedDay, time);
//   };

//   const handleConfirm = () => {
//     onSelect(selectedDay, selectedTime);
//     // Close the offcanvas
//     const offcanvas = document.getElementById('deliveryDateTime');
//     const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvas);
//     bsOffcanvas?.hide();
//   };

//   return (
//     <div
//       className="offcanvas offcanvas-end pb-sm-2 px-sm-2"
//       id="deliveryDateTime"
//       tabIndex={-1}
//       aria-labelledby="deliveryDateTimeLabel"
//       style={{ width: 500 }}
//     >
//       <div className="offcanvas-header py-3 pt-lg-4">
//         <h4 className="offcanvas-title" id="deliveryDateTimeLabel">
//           Schedule date and time
//         </h4>
//         <button
//           type="button"
//           className="btn-close"
//           data-bs-dismiss="offcanvas"
//           aria-label="Close"
//         />
//       </div>
//       <div className="offcanvas-body py-3">
//         <div className="d-flex justify-content-between gap-3 overflow-auto pb-3">
//           {days.map(({ id, day, date }) => (
//             <div className="text-center" key={id}>
//               <div className="fs-sm pb-1 mb-2">{day}</div>
//               <input 
//                 type="radio" 
//                 className="btn-check" 
//                 name="day" 
//                 id={id}
//                 checked={selectedDay === id}
//                 onChange={() => handleDaySelect(id)}
//               />
//               <label
//                 className={`btn btn-icon btn-lg fs-sm rounded-circle ${
//                   selectedDay === id ? 'btn-primary' : 'btn-outline-secondary'
//                 }`}
//                 htmlFor={id}
//               >
//                 {date}
//               </label>
//             </div>
//           ))}
//         </div>
//         {timeSlots.map((time) => (
//           <div className="form-check border-bottom py-4 m-0" key={time}>
//             <input
//               type="radio"
//               className="form-check-input"
//               id={`delivery-time-${time}`}
//               name="delivery-time"
//               checked={selectedTime === time}
//               onChange={() => handleTimeSelect(time)}
//             />
//             <div className="d-flex w-100">
//               <label
//                 htmlFor={`delivery-time-${time}`}
//                 className="form-check-label text-dark-emphasis fw-semibold me-3"
//               >
//                 {time}
//               </label>
//               <span className="fs-sm ms-auto">Free</span>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="offcanvas-header">
//         <button
//           type="button"
//           className="btn btn-lg btn-primary w-100 rounded-pill"
//           onClick={handleConfirm}
//         >
//           Confirm date and time
//         </button>
//       </div>
//     </div>
//   );
// };

// // export { DeliveryDateOffCanvas, DeliveryDateOffCanvasProps};
// export default DeliveryDateOffCanvas;
// export type { DeliveryDateOffCanvasProps };
// export { DeliveryDateOffCanvas };


// v5

// import React, { useState } from 'react';

// interface DeliveryDateOffCanvasProps {
//   onSelect: (date: string, timeSlot: string) => void;
// }

// const DeliveryDateOffCanvas: React.FC<DeliveryDateOffCanvasProps> = ({ onSelect }) => {
//   const getDays = () => {
//     const days = [];
//     const today = new Date();
    
//     for (let i = 0; i < 7; i++) {
//       const date = new Date();
//       date.setDate(today.getDate() + i);
      
//       days.push({
//         id: date.toISOString().split('T')[0],
//         day: date.toLocaleDateString('en-US', { weekday: 'short' }),
//         date: date.getDate().toString(),
//         fullDate: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
//       });
//     }
    
//     return days;
//   };

//   const days = getDays();
//   const timeSlots = [
//     '08:00 - 10:00',
//     '10:00 - 12:00',
//     '12:00 - 14:00',
//     '14:00 - 16:00',
//     '16:00 - 18:00',
//     '18:00 - 20:00',
//     '20:00 - 22:00'
//   ];

//   const [selectedDay, setSelectedDay] = useState(days[0].id);
//   const [selectedTime, setSelectedTime] = useState(timeSlots[0]);

//   const handleDaySelect = (dayId: string) => {
//     setSelectedDay(dayId);
//   };

//   const handleTimeSelect = (time: string) => {
//     setSelectedTime(time);
//   };

//   const handleConfirm = () => {
//     onSelect(selectedDay, selectedTime);
//     const offcanvas = document.getElementById('deliveryDateTime');
//     const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvas);
//     bsOffcanvas?.hide();
//   };

//   return (
//     <div
//       className="offcanvas offcanvas-end pb-sm-2 px-sm-2"
//       id="deliveryDateTime"
//       tabIndex={-1}
//       aria-labelledby="deliveryDateTimeLabel"
//       style={{ width: 500 }}
//     >
//       <div className="offcanvas-header py-3 pt-lg-4">
//         <h4 className="offcanvas-title" id="deliveryDateTimeLabel">
//           Schedule date and time
//         </h4>
//         <button
//           type="button"
//           className="btn-close"
//           data-bs-dismiss="offcanvas"
//           aria-label="Close"
//         />
//       </div>
//       <div className="offcanvas-body py-3">
//         <h5 className="mb-3">Select Delivery Date</h5>
//         <div className="d-flex justify-content-between gap-3 overflow-auto pb-3">
//           {days.map(({ id, day, date, fullDate }) => (
//             <div className="text-center" key={id}>
//               <div className="fs-sm pb-1 mb-2">{day}</div>
//               <input 
//                 type="radio" 
//                 className="btn-check" 
//                 name="day" 
//                 id={id}
//                 checked={selectedDay === id}
//                 onChange={() => handleDaySelect(id)}
//               />
//               <label
//                 className={`btn btn-icon btn-lg fs-sm rounded-circle ${
//                   selectedDay === id ? 'btn-primary' : 'btn-outline-secondary'
//                 }`}
//                 htmlFor={id}
//               >
//                 {date}
//                 <div className="fs-xs mt-1">{fullDate.split(' ')[0]}</div>
//               </label>
//             </div>
//           ))}
//         </div>

//         <h5 className="mt-4 mb-3">Select Time Slot</h5>
//         {timeSlots.map((time) => (
//           <div className="form-check border-bottom py-4 m-0" key={time}>
//             <input
//               type="radio"
//               className="form-check-input"
//               id={`delivery-time-${time}`}
//               name="delivery-time"
//               checked={selectedTime === time}
//               onChange={() => handleTimeSelect(time)}
//             />
//             <div className="d-flex w-100">
//               <label
//                 htmlFor={`delivery-time-${time}`}
//                 className="form-check-label text-dark-emphasis fw-semibold me-3"
//               >
//                 {time}
//               </label>
//               <span className="fs-sm ms-auto">Free</span>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="offcanvas-header">
//         <button
//           type="button"
//           className="btn btn-lg btn-primary w-100 rounded-pill"
//           onClick={handleConfirm}
//         >
//           Confirm date and time
//         </button>
//       </div>
//     </div>
//   );
// };

// export default DeliveryDateOffCanvas;

// v6
import React, { useState } from 'react';

interface DeliveryDateOffCanvasProps {
  onSelect: (date: string, timeSlot: string) => void;
}

const DeliveryDateOffCanvas: React.FC<DeliveryDateOffCanvasProps> = ({ onSelect }) => {
  const getDays = () => {
    const days = [];
    const today = new Date();
    
    for (let i = 0; i < 7; i++) {
      const date = new Date();
      date.setDate(today.getDate() + i);
      
      days.push({
        id: date.toISOString().split('T')[0],
        day: date.toLocaleDateString('en-US', { weekday: 'short' }),
        date: date.getDate().toString(),
        fullDate: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
      });
    }
    // console.log(days);
    return days;
  };

  const days = getDays();
  const timeSlots = [
    '08:00 - 10:00',
    '10:00 - 12:00',
    '12:00 - 14:00',
    '14:00 - 16:00',
    '16:00 - 18:00',
    '18:00 - 20:00',
    '20:00 - 22:00'
  ];

  const [selectedDay, setSelectedDay] = useState(days[0].id);
  const [selectedTime, setSelectedTime] = useState(timeSlots[0]);

  const handleDaySelect = (dayId: string) => {
    setSelectedDay(dayId);
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  const handleConfirm = () => {
    // 
        const selectedDate = new Date();
    selectedDate.setDate(selectedDate.getDate() + days.findIndex(d => d.id === selectedDay));
    
    onSelect(selectedDate.toISOString().split('T')[0], selectedTime);
    
    // 
    // onSelect(selectedDay, selectedTime);
    const offcanvas = document.getElementById('deliveryDateTime');
    const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvas);
    bsOffcanvas?.hide();
  };

  return (
    <div
      className="offcanvas offcanvas-end pb-sm-2 px-sm-2"
      id="deliveryDateTime"
      tabIndex={-1}
      aria-labelledby="deliveryDateTimeLabel"
      style={{ width: 500 }}
    >
      <div className="offcanvas-header py-3 pt-lg-4">
        <h4 className="offcanvas-title" id="deliveryDateTimeLabel">
          Schedules
        </h4>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        />
      </div>
      <div className="offcanvas-body py-3">
        <h5 className="mb-3">Select Delivery Date</h5>
        <div className="d-flex justify-content-between gap-2 overflow-auto pb-3">
          {days.map(({ id, day, date, fullDate }) => (
            
            <div className="text-center" key={id}>
              <div className="fs-sm pb-1 mb-2">{day}</div>

              <input 
                type="radio" 
                className="btn-check" 
                name="day" 
                id={id}
                checked={selectedDay === id}
                onChange={() => handleDaySelect(id)}
              />

              {/* <div className="form-check form-switch">
                <input type="checkbox" className="form-check-input" role="switch" id="ex-switch-1"/>
                <label htmlFor="ex-switch-1" className="form-check-label">Default switch checkbox</label>
              </div> */}

              <label
                className={`btn btn-icon btn-lg fs-sm rounded-circle ${
                  selectedDay === id ? 'btn-primary' : 'btn-outline-secondary'
                }`}
                htmlFor={id}
              >
                {date}
                {/* <div className="fs-xs mt-1">{fullDate.split(' ')[0]}</div> */}
              </label>
            </div>
          ))}
        </div>

        <h5 className="mt-4 mb-3">Select Time Slot</h5>
        {timeSlots.map((time) => (
          <div className="form-check border-bottom py-4 m-0" key={time}>
            <input
              type="radio"
              className="form-check-input"
              id={`delivery-time-${time}`}
              name="delivery-time"
              checked={selectedTime === time}
              onChange={() => handleTimeSelect(time)}
            />
            <div className="d-flex w-100">
              <label
                htmlFor={`delivery-time-${time}`}
                className="form-check-label text-dark-emphasis fw-semibold me-3"
              >
                {time}
              </label>
              <span className="fs-sm ms-auto">Free</span>
            </div>
          </div>
        ))}
      </div>

      <div className="offcanvas-header">
        <button
          type="button"
          className="btn btn-lg btn-primary w-100 rounded-pill"
          onClick={handleConfirm}
        >
          Confirm date and time
        </button>
      </div>
    </div>
  );
};

export default DeliveryDateOffCanvas;