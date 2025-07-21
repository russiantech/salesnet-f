// CheckoutSuccess.tsx
// import React, { useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { NotificationService } from '../../../services/local/NotificationService';
// // import { NotificationService } from '../../services/local/NotificationService';

// const CheckoutSuccess = () => {
//   const { state } = useLocation();
//   const navigate = useNavigate();
  
//   // Handle missing state
//   useEffect(() => {
//     if (!state?.order) {
//       NotificationService.showDialog('Invalid order details', 'error');
//       navigate('/');
//     }
//   }, [state, navigate]);

//   if (!state?.order) return null;

//   const { order, paymentData, message } = state;
//   const isPaid = order.paymentStatus === 'completed';
//   const isPending = order.paymentStatus === 'pending';

//   return (
//     <div className="container py-5">
//       <div className="card shadow">
//         <div className="card-body text-center p-5">
//           <div className="bg-success bg-opacity-10 rounded-circle d-inline-flex p-4 mb-4">
//             <i className="ci-check text-success display-4"></i>
//           </div>
          
//           <h1 className="h2 mb-4">
//             {isPaid ? 'Payment Successful!' : 'Order Received'}
//           </h1>
          
//           {message ? (
//             <p className="lead mb-4">{message}</p>
//           ) : (
//             <p className="lead mb-4">
//               Thank you for your order! {isPending && 'Your payment will be completed on delivery.'}
//             </p>
//           )}
          
//           <div className="border rounded-3 p-4 mb-4">
//             <h2 className="h5 mb-4">Order Details</h2>
//             <div className="d-flex justify-content-between mb-2">
//               <span>Tracking Number:</span>
//               <strong>#{order.tracking_number}</strong>
//             </div>
//             <div className="d-flex justify-content-between mb-2">
//               <span>Order Number:</span>
//               <strong>#{order.id}</strong>
//             </div>
//             <div className="d-flex justify-content-between mb-2">
//               <span>Payment Reference:</span>
//               <strong>{order.payment_reference}</strong>
//             </div>
//             <div className="d-flex justify-content-between mb-2">
//               <span>Total Amount:</span>
//               <strong>${order.total_amount.toFixed(2)}</strong>
//             </div>
//             <div className="d-flex justify-content-between">
//               <span>Status:</span>
//               <strong className={isPaid ? 'text-success' : 'text-warning'}>
//                 {isPaid ? 'Paid' : 'Pending Payment'}
//               </strong>
//             </div>
//           </div>

//           {paymentData?.gateway_reference && (
//             <div className="alert alert-info mb-4">
//               <strong>Transaction ID:</strong> {paymentData.gateway_reference}
//             </div>
//           )}

//           <div className="d-flex justify-content-center gap-3">
//             <button 
//               className="btn btn-primary"
//               onClick={() => navigate('/users/orders')}
//             >
//               View Orders
//             </button>
//             <button 
//               className="btn btn-outline-secondary"
//               onClick={() => navigate('/products')}
//             >
//               Continue Shopping
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CheckoutSuccess;

// 

// CheckoutSuccess.tsx
import React, { useEffect, useState } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { NotificationService } from '../../../services/local/NotificationService';
import { AxiosService } from '../../../services/net/base/AxiosService';
import { formatCurrency } from '../../../utils/currencyUtils';
import ProductSummary from '../../products/ProductSummary';
import LoadingSpinner from '../../../components/shared/LoadingSpinner';

interface OrderItem {
  name: string;
  price: number;
  quantity: number;
  image_url: string;
}

interface OrderData {
  id: number;
  tracking_number: string;
  status: string;
  total_amount: number;
  currency: string;
  delivery_option: string;
  delivery_details: {
    address: string;
    time: string;
  };
  created_at: string;
  items: OrderItem[];
}

interface PaymentData {
  id: number;
  reference: string;
  status: string;
  amount: number;
  currency: string;
  method: string;
  gateway_data: any;
}

interface SuccessPageData {
  order: OrderData;
  payment: PaymentData;
  recommended_products: any[];
}

const CheckoutSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [data, setData] = useState<SuccessPageData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Extract order ID from state or URL
  const getOrderId = () => {
    // First try to get from navigation state
    if (location.state?.order?.id) {
      return location.state.order.id;
    }
    
    // Then try URL parameter
    const orderId = new URLSearchParams(location.search).get('order_id');
    return orderId ? parseInt(orderId, 10) : null;
  };

  useEffect(() => {
    if (data?.order) {
      window.gtag?.('event', 'purchase', {
        transaction_id: data.order.id,
        value: data.order.total_amount,
        currency: data.order.currency || 'USD',
        items: data.order.items?.map(item => ({
          name: item.name,
          price: item.price,
          quantity: item.quantity,
        })) || []
      });
    }
  }, [data]);

  useEffect(() => {
    const fetchOrderDetails = async (orderId: number) => {
      try {
        const response = await AxiosService.json.get(`/orders/${orderId}/success-data`);
        setData(response.data);
      } catch (err: any) {
        setError(err.message || 'Failed to load order details');
        NotificationService.showDialog('Failed to load order details', 'error');
        navigate('/');
      } finally {
        setLoading(false);
      }
    };

    const orderId = getOrderId();
    if (!orderId) {
      setError('Order information not available');
      NotificationService.showDialog('Invalid order details', 'error');
      navigate('/');
      return;
    }

    // Always fetch fresh data from API
    fetchOrderDetails(orderId);
  }, [location, navigate]);

if (loading) {
    return (
      <div className="container py-5 text-center">
        <LoadingSpinner size='sm' className='success' />
        <p className="mt-3">Loading your order details...</p>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="container py-5">
        <div className="alert alert-danger text-center">
          <h3 className="h5">Order Details Unavailable</h3>
          <p className="mb-0">{error || 'Order data not found'}</p>
          <Link to="/users/orders" className="btn btn-primary mt-3">
            View Your Orders
          </Link>
        </div>
      </div>
    );
  }


  const { order, payment, recommended_products } = data;

  return (
    <main className="content-wrapper">
      <div className="row row-cols-1 row-cols-lg-2 g-0 mx-auto" style={{maxWidth: '1920px'}}>
        {/* Thank you content column */}
        <div className="col d-flex flex-column justify-content-center py-5 px-xl-4 px-xxl-5">
          <div className="w-100 pt-sm-2 pt-md-3 pt-lg-4 pb-lg-4 pb-xl-5 px-3 px-sm-4 pe-lg-0 ps-lg-5 mx-auto ms-lg-auto me-lg-4" style={{maxWidth: '740px'}}>
            <div className="d-flex align-items-sm-center border-bottom pb-4 pb-md-5">
              <div className="d-flex align-items-center justify-content-center bg-success text-white rounded-circle flex-shrink-0" style={{width: '3rem', height: '3rem', marginTop: '-.125rem'}}>
                <i className="ci-check fs-4" />
              </div>
              <div className="w-100 ps-3">
                <div className="fs-sm mb-1">Order #{order.tracking_number}</div>
                <div className="d-sm-flex align-items-center">
                  <h1 className="h4 mb-0 me-3">Thank you for your order!</h1>
                  <div className="nav mt-2 mt-sm-0 ms-auto">
                    <Link to={`/users/orders`} className="nav-link p-1 rounded-pill bg-warning cursor-pointer text-white">
                      Track order
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="d-flex flex-column gap-4 pt-3 pb-5 mt-3">
              {/* <div>
                <h3 className="h6 mb-2">Delivery</h3>
                <p className="fs-sm mb-0">
                  {order.delivery_details.address}
                </p>
                <div className="mt-1">
                  <span className="badge bg-warning rounded-pill">
                    {order.delivery_option === 'pickup' ? 'Pickup' : 'Home Delivery'}
                  </span>
                </div>
              </div> */}
              <div>
                <h3 className="h6 mb-2">Delivery</h3>
                <p className="fs-sm mb-0">
                  {data?.order.delivery_details?.address || 'Address not specified'}
                </p>
                <div className="mt-1">
                  <span className="badge bg-warning rounded-pill">
                    {data?.order.delivery_option === 'pickup' 
                      ? 'Pickup' 
                      : 'Home Delivery'}
                  </span>
                </div>
              </div>
              
               <div>
                <h3 className="h6 mb-2">Time</h3>
                <p className="fs-sm mb-0">
                  {data?.order.delivery_details?.time || 'Time not specified'}
                </p>
              </div>
              <div>
                <h3 className="h6 mb-2">Payment</h3>
                <p className="fs-sm mb-0">
                  {payment.method}: {payment.status}
                </p>
                <p className="fs-sm mb-0">
                 Reference:
                 <span className="fs-sm p-1 rounded-pill bg-success text-white">
                  {payment.reference}
                  </span>
                </p>
              </div>
              
              <div>
                {/* <h3 className="h6 mb-2">Order Summary</h3> */}
                <div className="border rounded p-3">
                  <div>
  <h3 className="h6 mb-3">Order Summary</h3>
  <div className="table-responsive">
    <table className="table table-bordered">
      <thead>
        <tr>
          <th scope="col" className="text-center">#</th>
          <th scope="col">Product</th>
          <th scope="col" className="text-center">Qty</th>
          <th scope="col" className="text-end">Price</th>
          <th scope="col" className="text-end">Total</th>
        </tr>
      </thead>
      <tbody>
        {order.items.map((item, index) => (
          <tr key={index}>
            <th scope="row" className="text-center">{index + 1}</th>
            <td>
              <div className="d-flex align-items-center">
                {item.image_url && (
                  <img 
                    src={item.image_url} 
                    alt={item.name} 
                    className="me-2 rounded" 
                    style={{ width: '50px', height: '50px', objectFit: 'cover' }} 
                  />
                )}
                <span>{item.name}</span>
              </div>
            </td>
            <td className="text-center">{item.quantity}</td>
            <td className="text-end">{formatCurrency(item.price, order.currency)}</td>
            <td className="text-end fw-medium">
              {formatCurrency(item.price * item.quantity, order.currency)}
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan={4} className="text-end fw-bold">Subtotal:</td>
          <td className="text-end">
            {formatCurrency(
              order.items.reduce((sum, item) => sum + (item.price * item.quantity), 0), 
              order.currency
            )}
          </td>
        </tr>
        <tr>
          <td colSpan={4} className="text-end fw-bold">Shipping:</td>
          <td className="text-end">
            {order.delivery_option === 'pickup' 
              ? 'Free' 
              : formatCurrency(0, order.currency) /* Adjust if you have shipping costs */}
          </td>
        </tr>
        <tr>
          <td colSpan={4} className="text-end fw-bold">Total:</td>
          <td className="text-end fw-bold fs-5">
            {formatCurrency(order.total_amount, order.currency)}
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
</div>
                </div>
              </div>
            </div>
            
            <div className="bg-success bg-opacity-10 rounded px-4 py-4">
              <div className="py-3">
                <h2 className="h4 text-center pb-2 mb-1">🎉 Congratulations! 10% off your next purchase!</h2>
                <p className="fs-sm text-center mb-4">
                  Use coupon at checkout for your next order
                </p>
                <div className="d-flex gap-2 mx-auto" style={{maxWidth: '500px'}}>
                  <input 
                    type="text" 
                    className="form-control border-success border-opacity-25 w-100" 
                    id="couponCode" 
                    defaultValue="WELCOMEBACK10" 
                    readOnly 
                  />
                  <button 
                    type="button" 
                    className="btn btn-dark"
                    onClick={() => {
                      navigator.clipboard.writeText('WELCOMEBACK10');
                      NotificationService.showDialog('Coupon copied to clipboard!');
                    }}
                  >
                    Copy coupon
                  </button>
                </div>
              </div>
            </div>
            
            <p className="fs-sm pt-4 pt-md-5 mt-2 mt-sm-3 mt-md-0 mb-0">
              Need help? <Link to="/contact" className="fw-medium">Contact us</Link>
            </p>
          </div>
        </div>
        
        {/* Recommended products */}
        <div className="col pt-sm-3 p-md-5 ps-lg-5 py-lg-4 pe-lg-4 p-xxl-5">
          <div className="position-relative d-flex align-items-center h-100 py-5 px-3 px-sm-4 px-xl-5">
            <span className="position-absolute top-0 start-0 w-100 h-100 bg-body-tertiary rounded-5 d-none d-md-block" />
            <span className="position-absolute top-0 start-0 w-100 h-100 bg-body-tertiary d-md-none" />
            
            <div className="position-relative w-100 z-2 mx-auto pb-2 pb-sm-3 pb-md-0" style={{maxWidth: '636px'}}>
              <h2 className="h4 text-center pb-3">You may also like</h2>
              
              <div className="row row-cols-2 g-3 g-sm-4 mb-4">
                {recommended_products.map((product, index) => (
                  <div className="col" key={index}>
                    {/* <ProductCard product={product} /> */}
                     <ProductSummary product={product} />
                  </div>
                ))}
              </div>
              
              <Link to="/products" className="btn btn-lg btn-primary w-100">
                Continue shopping
                <i className="ci-chevron-right fs-lg ms-1 me-n1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CheckoutSuccess;