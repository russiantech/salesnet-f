
// // v2
// // src/pages/users/products/[slug]/EditProductPage.tsx
// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import LoadingSpinner from '../../../components/shared/LoadingSpinner';
// import ProductForm from '../../../components/shared/modals/publish/ProductForm';
// import { NotificationService } from '../../../services/local/NotificationService';
// import { ProductAxiosService } from '../../../services/net/ProductAxiosService';

// const EditProductPage = () => {
//   const { slug } = useParams<{ slug: string }>();
//   const navigate = useNavigate();
//   const [productData, setProductData] = useState<any>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         setLoading(true);
//         setError(null); // Reset error state
        
//         if (!slug) {
//           throw new Error('Product slug is missing');
//         }
        
//         const response = await ProductAxiosService.getBySlug(slug);
        
//         if (!response.data) {
//           throw new Error('Product not found');
//         }
        
//         setProductData(response.data);
//       } catch (error: any) {
//         console.error('Error loading product:', error);
        
//         // Better error handling for different types of errors
//         let errorMessage = 'Failed to load product data';
        
//         if (error.code === 'ERR_NETWORK') {
//           errorMessage = 'Network error: Unable to connect to server. Please check your connection and try again.';
//         } else if (error.response?.status === 404) {
//           errorMessage = 'Product not found';
//         } else if (error.response?.status === 429) {
//           errorMessage = 'Too many requests. Please wait a moment and try again.';
//         } else if (error.response?.data?.error) {
//           errorMessage = error.response.data.error;
//         }
        
//         setError(errorMessage);
//         NotificationService.showDialog(errorMessage, 'danger');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProduct();
//   }, [slug]);

//   const handleRetry = () => {
//     window.location.reload(); // Simple retry mechanism
//   };

//   const handleSuccess = (updatedProduct: any) => {
//     NotificationService.showDialog('Product updated successfully!', 'success');
//     navigate(`/products/${updatedProduct.slug || slug}`);
//   };

//   if (loading) {
//     return (
//       <div className="d-flex justify-content-center align-items-center vh-100">
//         <LoadingSpinner size='sm' />
//         <span className="ms-2">Loading product data...</span>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="container py-5 text-center">
//         <div className="alert alert-danger">
//           <i className="ci-close-circle me-2"></i>
//           {error}
//         </div>
//         <div className="mt-3">
//           <button 
//             className="btn btn-primary me-2 rounded-pill"
//             onClick={handleRetry}
//           >
//             <i className="ci-refresh me-2"></i>
//             Retry
//           </button>
//           <button className="btn btn-secondary rouded-pill"
//             onClick={() => navigate('/users/products')}
//           >
//             <i className="ci-arrow-left me-2"></i>
//             Back to Products
//           </button>
//         </div>
//       </div>
//     );
//   }

//   if (!productData) {
//     return (
//       <div className="container py-5 text-center">
//         <i className="ci-close-circle display-4 text-danger mb-3"></i>
//         <h3>Product Not Found</h3>
//         <p className="mb-4">The product you're trying to edit doesn't exist.</p>
//         <button 
//           className="btn btn-primary rounded-pill"
//           onClick={() => navigate('/users/products')}
//         >
//           <i className="ci-arrow-left me-2"></i>
//           Back to Products
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="container py-4 py-lg-5 mb-4">
//       <div className="d-flex justify-content-between align-items-center mt-4">
//         <h1 className="h2 mb-0 mt-2 text-truncate">
//           <i className="ci-edit-3 me-2"></i>
//           Editing {productData?.name}
//         </h1>

//               </div>
      
//       <div className="card border-0 shadow-sm">
//         <div className="card-body p-2">
          
//           <ProductForm 
//             productSlug={slug}
//             editProductData={productData}
//             mode="edit"
//             onSuccess={handleSuccess}
//             onClose={() => navigate(`/products/${slug}`)}
//           />
//         </div>

//       </div>
//     </div>
//   );
// };

// export default EditProductPage;

// v2
// src/pages/users/products/[slug]/EditProductPage.tsx
import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import LoadingSpinner from '../../../components/shared/LoadingSpinner';
import ProductForm from '../../../components/shared/modals/publish/ProductForm';
import { NotificationService } from '../../../services/local/NotificationService';
import { ProductAxiosService } from '../../../services/net/ProductAxiosService';

const EditProductPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [productData, setProductData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Reusable fetch function
  const fetchProduct = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      if (!slug) {
        throw new Error('Product slug is missing');
      }

      const response = await ProductAxiosService.getBySlug(slug);

      if (!response.data) {
        throw new Error('Product not found');
      }

      setProductData(response.data);
    } catch (error: any) {
      console.error('Error loading product:', error);

      let errorMessage = 'Failed to load product data';
      if (error.code === 'ERR_NETWORK') {
        errorMessage = 'Network error: Unable to connect to server. Please check your connection and try again.';
      } else if (error.response?.status === 404) {
        errorMessage = 'Product not found';
      } else if (error.response?.status === 429) {
        errorMessage = 'Too many requests. Please wait a moment and try again.';
      } else if (error.response?.data?.error) {
        errorMessage = error.response.data.error;
      }

      setError(errorMessage);
      NotificationService.showDialog(errorMessage, 'danger');
    } finally {
      setLoading(false);
    }
  }, [slug]);

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  const handleRetry = () => {
    fetchProduct(); // retry without reloading
  };

  const handleSuccess = (updatedProduct: any) => {
    NotificationService.showDialog('Product updated successfully!', 'success');
    navigate(`/products/${updatedProduct.slug || slug}`);
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <LoadingSpinner size='sm' />
        <span className="ms-2">Loading product data...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container py-5 text-center">
        <div className="alert alert-danger">
          <i className="ci-close-circle me-2"></i>
          {error}
        </div>
        <div className="mt-3">
          <button 
            className="btn btn-primary me-2 rounded-pill"
            onClick={handleRetry}
          >
            <i className="ci-refresh me-2"></i>
            Retry
          </button>
          <button className="btn btn-secondary rounded-pill"
            onClick={() => navigate('/users/products')}
          >
            <i className="ci-arrow-left me-2"></i>
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  if (!productData) {
    return (
      <div className="container py-5 text-center">
        <i className="ci-close-circle display-4 text-danger mb-3"></i>
        <h3>Product Not Found</h3>
        <p className="mb-4">The product you're trying to edit doesn't exist.</p>
        <button 
          className="btn btn-primary rounded-pill"
          onClick={() => navigate('/users/products')}
        >
          <i className="ci-arrow-left me-2"></i>
          Back to Products
        </button>
      </div>
    );
  }

  return (
    <div className="container py-4 py-lg-5 mb-4">
      <div className="d-flex justify-content-between align-items-center mt-4">
        <h3 className="h3 mb-0 mt-2 text-truncate">
          <i className="ci-edit-3 me-2"></i>
          Editing {productData?.name}
        </h3>
      </div>
      
      <div className="card border-0 shadow-sm">
        <div className="card-body p-2">
          <ProductForm 
            productSlug={slug}
            editProductData={productData}
            mode="edit"
            onSuccess={handleSuccess}
            onClose={() => navigate(`/products/${slug}`)}
          />
        </div>
      </div>
    </div>
  );
};

export default EditProductPage;
