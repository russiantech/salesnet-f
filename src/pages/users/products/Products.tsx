
// v4
// import { useState, useEffect, useMemo } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import LoadingSpinner, { LoadingZoom } from '../../../components/shared/LoadingSpinner';
// import SubscriptionPlans from '../../../components/shared/modals/publish/Promote';
// import PublishPage from '../../../components/shared/modals/publish/PublishPage';
// import { NotificationService } from '../../../services/local/NotificationService';
// import { ProductAxiosService } from '../../../services/net/ProductAxiosService';
// import Aside from '../shared/Aside';
// import { UsersService } from '../../../services/local/UsersService';

// interface Product {
//     id: string;
//     name: string;
//     slug: string;
//     price: number;
//     original_price?: number;
//     discount?: number;
//     image_url: string;
//     status: 'active' | 'inactive' | 'archived' | 'draft';
//     sales_count: number;
//     earnings: number;
//     views_count: number;
//     favorites_count: number;
//     comments_count: number;
//     calls_count: number;
//     created_at: string;
//     updated_at: string;
//     is_promoted: boolean;
//     promotion_expires_at?: string;
// }

// interface ProductsResponse {
//     success: boolean;
//     products: Product[];
//     total: number;
//     current_page: number;
//     last_page: number;
//     per_page: number;
// }

// interface SortOption {
//     value: string;
//     label: string;
// }

// interface FilterOptions {
//     status: string;
//     search: string;
//     sortBy: string;
//     sortOrder: 'asc' | 'desc';
// }

// const Products = () => {
//     const navigate = useNavigate();
//     const [products, setProducts] = useState<Product[]>([]);
//     const [loading, setLoading] = useState({
//         products: true,
//         action: false
//     });
//     const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
//     const [filters, setFilters] = useState<FilterOptions>({
//         status: 'all',
//         search: '',
//         sortBy: 'created_at',
//         sortOrder: 'desc'
//     });
//     const [pagination, setPagination] = useState({
//         current_page: 1,
//         last_page: 1,
//         total: 0,
//         per_page: 5
//     });
//     const [modalState, setModalState] = useState({
//         subscription: { show: false, productId: '' },
//         publish: { show: false, productId: '' },
//         delete: { show: false, productId: '' }
//     });

//     const sortOptions: SortOption[] = [
//         { value: 'created_at', label: 'Date Created' },
//         { value: 'name', label: 'Product Name' },
//         { value: 'sales_count', label: 'Sales Count' },
//         { value: 'earnings', label: 'Earnings' },
//         { value: 'views_count', label: 'Views' },
//         { value: 'price', label: 'Price' }
//     ];

//     useEffect(() => {
//         const observer = (data: any) => {
//             // Handle notification updates if needed
//         };

//         NotificationService.subscribe(observer);
//         return () => {
//             NotificationService.unsubscribe(observer);
//         };
//     }, []);

//     useEffect(() => {
//         fetchProducts();
//     }, [filters, pagination.current_page, pagination.per_page]);

//     // Get current user
//     const currentUser = UsersService.getCurrentUser();

//     const fetchProducts = async () => {
//         try {
//             setLoading(prev => ({ ...prev, products: true }));
            
//             const params = {
//                 page: pagination.current_page,
//                 per_page: pagination.per_page,
//                 status: filters.status !== 'all' ? filters.status : undefined,
//                 search: filters.search || undefined,
//                 sort_by: filters.sortBy,
//                 sort_order: filters.sortOrder
//             };

//             // const response = await ProductAxiosService.getByOwner(params);
            
//             // Use username or email as identifier
//             const username = currentUser.username || currentUser.email;
//             const response = await ProductAxiosService.getByOwner(params, username);
            
//             if (response.data.success) {
//                 setProducts(response.data.products);
//                 setPagination({
//                     current_page: response.data.page_meta.current_page_number,
//                     last_page: response.data.page_meta.total_pages_count,
//                     total: response.data.page_meta.total_items_count,
//                     per_page: response.data.page_meta.requested_page_size
//                 });
//             } else {
//                 NotificationService.showDialog(response.data.error || 'Failed to load products', 'error');
//                 setProducts([]);
//             }
//         } catch (err: any) {
//             const errorMessage = err.response?.data?.error || err.message || 'Failed to load products';
//             NotificationService.showDialog(errorMessage, 'error');
//             setProducts([]);
//         } finally {
//             setLoading(prev => ({ ...prev, products: false }));
//         }
//     };

//     const handleSearch = (searchTerm: string) => {
//         setFilters(prev => ({ ...prev, search: searchTerm }));
//         setPagination(prev => ({ ...prev, current_page: 1 }));
//     };

//     const handleSort = (sortBy: string) => {
//         setFilters(prev => ({
//             ...prev,
//             sortBy,
//             sortOrder: prev.sortBy === sortBy && prev.sortOrder === 'asc' ? 'desc' : 'asc'
//         }));
//     };

//     const handleStatusFilter = (status: string) => {
//         setFilters(prev => ({ ...prev, status }));
//         setPagination(prev => ({ ...prev, current_page: 1 }));
//     };

//     const handleProductSelect = (productId: string, isSelected: boolean) => {
//         setSelectedProducts(prev =>
//             isSelected
//                 ? [...prev, productId]
//                 : prev.filter(id => id !== productId)
//         );
//     };

//     const handleSelectAll = (isSelected: boolean) => {
//         setSelectedProducts(isSelected ? products.map(product => product.id) : []);
//     };

//     const handleEditProduct = (productId: string) => {
//         navigate(`/users/products/${productId}/edit`);
//     };

//     const handlePromoteProduct = (productId: string) => {
//         setModalState(prev => ({
//             ...prev,
//             subscription: { show: true, productId }
//         }));
//     };

//     const handlePublishProduct = (productId: string) => {
//         setModalState(prev => ({
//             ...prev,
//             publish: { show: true, productId }
//         }));
//     };

//     const handleArchiveProduct = async (productId: string) => {
//         try {
//             setLoading(prev => ({ ...prev, action: true }));
//             NotificationService.showDialog("Archiving product...", "primary");
            
//             await ProductAxiosService.updateProductStatus(productId, 'archived');
            
//             setProducts(prev => 
//                 prev.map(product =>   
//                     product.id === productId 
//                         ? { ...product, status: 'archived' as const }
//                         : product
//                 )
//             );
            
//             NotificationService.showDialog("Product archived successfully", "success");
//         } catch (err: any) {
//             const errorMessage = err.response?.data?.error || err.message || 'Failed to archive product';
//             NotificationService.showDialog(errorMessage, 'error');
//         } finally {
//             setLoading(prev => ({ ...prev, action: false }));
//         }
//     };

//     const handleDeleteProduct = async (productId: string) => {
//         try {
//             setLoading(prev => ({ ...prev, action: true }));
//             NotificationService.showDialog("Deleting product...", "primary");
            
//             await ProductAxiosService.deleteProduct(productId);
            
//             setProducts(prev => prev.filter(product => product.id !== productId));
//             setSelectedProducts(prev => prev.filter(id => id !== productId));
            
//             NotificationService.showDialog("Product deleted successfully", "success");
//         } catch (err: any) {
//             const errorMessage = err.response?.data?.error || err.message || 'Failed to delete product';
//             NotificationService.showDialog(errorMessage, 'error');
//         } finally {
//             setLoading(prev => ({ ...prev, action: false }));
//         }
//     };

//     const handleBulkDelete = async () => {
//         if (selectedProducts.length === 0) return;
        
//         try {
//             setLoading(prev => ({ ...prev, action: true }));
//             NotificationService.showDialog("Deleting selected products...", "primary");
            
//             await Promise.all(
//                 selectedProducts.map(productId => 
//                     ProductAxiosService.deleteProduct(productId)
//                 )
//             );
            
//             setProducts(prev => 
//                 prev.filter(product => !selectedProducts.includes(product.id))
//             );
//             setSelectedProducts([]);
            
//             NotificationService.showDialog("Selected products deleted successfully", "success");
//         } catch (err: any) {
//             const errorMessage = err.response?.data?.error || err.message || 'Failed to delete products';
//             NotificationService.showDialog(errorMessage, 'error');
//         } finally {
//             setLoading(prev => ({ ...prev, action: false }));
//         }
//     };

//     const handleBulkArchive = async () => {
//         if (selectedProducts.length === 0) return;
        
//         try {
//             setLoading(prev => ({ ...prev, action: true }));
//             NotificationService.showDialog("Archiving selected products...", "primary");
            
//             await Promise.all(
//                 selectedProducts.map(productId => 
//                     ProductAxiosService.updateProductStatus(productId, 'archived')
//                 )
//             );
            
//             setProducts(prev => 
//                 prev.map(product => 
//                     selectedProducts.includes(product.id)
//                         ? { ...product, status: 'archived' as const }
//                         : product
//                 )
//             );
//             setSelectedProducts([]);
            
//             NotificationService.showDialog("Selected products archived successfully", "success");
//         } catch (err: any) {
//             const errorMessage = err.response?.data?.error || err.message || 'Failed to archive products';
//             NotificationService.showDialog(errorMessage, 'error');
//         } finally {
//             setLoading(prev => ({ ...prev, action: false }));
//         }
//     };

//     const getStatusBadgeClass = (status: string) => {
//         switch (status) {
//             case 'active':
//                 return 'text-success bg-success-subtle';
//             case 'inactive':
//                 return 'text-secondary bg-secondary-subtle';
//             case 'archived':
//                 return 'text-warning bg-warning-subtle';
//             case 'draft':
//                 return 'text-info bg-info-subtle';
//             default:
//                 return 'text-muted bg-body-secondary';
//         }
//     };

//     const formatCurrency = (amount: number) => {
//         return new Intl.NumberFormat('en-NG', {
//             style: 'currency',
//             currency: 'NGN'
//         }).format(amount);
//     };

//     const formatNumber = (num: number) => {
//         return new Intl.NumberFormat().format(num);
//     };

//     const filteredProducts = useMemo(() => {
//         return products.filter(product => {
//             if (filters.status !== 'all' && product.status !== filters.status) {
//                 return false;
//             }
//             if (filters.search) {
//                 return product.name.toLowerCase().includes(filters.search.toLowerCase());
//             }
//             return true;
//         });
//     }, [products, filters]);

//     const handleSubscriptionSuccess = (subscription: any) => {
//         setModalState(prev => ({
//             ...prev,
//             subscription: { show: false, productId: '' }
//         }));
        
//         setProducts(prev => 
//             prev.map(product => 
//                 product.id === modalState.subscription.productId
//                     ? { 
//                         ...product, 
//                         is_promoted: true,
//                         promotion_expires_at: subscription.expires_at 
//                     }
//                     : product
//             )
//         );
        
//         NotificationService.showDialog("Product promotion activated successfully!", "success");
//         fetchProducts();
//     };

//     const handlePublishSuccess = () => {
//         setModalState(prev => ({
//             ...prev,
//             publish: { show: false, productId: '' }
//         }));
        
//         NotificationService.showDialog("Product published successfully!", "success");
//         fetchProducts();
//     };

//     if (loading.products && products.length === 0) {
//         return (
//             <main className="content-wrapper">
//                 <div className="container pt-4 pt-lg-5 pb-5">
//                     <div className="text-center py-5">
//                         <LoadingSpinner />
//                         <p className="mt-3">Loading your products...</p>
//                     </div>
//                 </div>
//             </main>
//         );
//     }

//     return (
//         <>
//             {/* Subscription Modal */}
//             <div 
//                 className={`modal fade ${modalState.subscription.show ? 'show' : ''}`} 
//                 style={{ display: modalState.subscription.show ? 'block' : 'none' }}
//                 tabIndex={-1}
//             >
//                 <div className="modal-dialog modal-lg modal-dialog-scrollable">
//                     <div className="modal-content">
//                         <div className="modal-header">
//                             <h5 className="modal-title">
//                                 <i className="ci-zap me-2"></i>
//                                 Promote Your Product
//                             </h5>
//                             <button 
//                                 type="button" 
//                                 className="btn-close" 
//                                 onClick={() => setModalState(prev => ({
//                                     ...prev,
//                                     subscription: { show: false, productId: '' }
//                                 }))}
//                             ></button>
//                         </div>
//                         <div className="modal-body">
//                             <div className="mb-4">
//                                 <h6 className="text-muted">Choose a promotion plan to boost your product visibility</h6>
//                             </div>
//                             <SubscriptionPlans
//                                 entityType="product"
//                                 entityId={modalState.subscription.productId}
//                                 onSubscriptionSuccess={handleSubscriptionSuccess}
//                             />
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Publish Modal */}
//             {modalState.publish.show && (
//                 <PublishPage
//                     productSlug=''
//                     editProductData={''}
//                     onSuccess={handlePublishSuccess}
//                     onClose={() => setModalState(prev => ({
//                         ...prev,
//                         publish: { show: false, productId: '' }
//                     }))}
//                 />
//             )}

//             {/* Main Content */}
//             <main className="content-wrapper">
//                 <div className="container pt-4 pt-lg-5 pb-5">
//                     <div className="row pt-sm-2 pt-md-3 pt-lg-0 pb-2 pb-sm-3 pb-md-4 pb-lg-5">
//                         <Aside />

//                         <div className="col-lg-9 pt-2 pt-xl-3">
//                             <div data-filter-list='{"searchClass": "product-search", "listClass": "product-list", "sortClass": "product-sort", "valueNames": ["product", "status", "sales", "earnings"]}'>
                                
//                                 {/* Header */}
//                                 <div className="d-sm-flex align-items-center justify-content-between gap-3 pb-2 pb-sm-3 mb-md-2">
//                                     <h1 className="h2 text-nowrap mb-sm-0">
//                                         Products     
//                                     </h1>
                                    
//                                     <div className="d-flex gap-2 align-items-center">
//                                         <div className="position-relative" style={{maxWidth: '300px'}}>
//                                             <i className="ci-search position-absolute top-50 start-0 translate-middle-y ms-3" />
//                                             <input 
//                                                 type="search" 
//                                                 className="product-search form-control form-icon-start rounded-pill" 
//                                                 placeholder="Search products..."
//                                                 value={filters.search}
//                                                 onChange={(e) => handleSearch(e.target.value)}
//                                                 disabled={loading.products}
//                                             />
//                                         </div>
//                                         <button
//                                             className="btn btn-primary rounded-pill"
//                                             onClick={() => navigate(`/users/${username}`)}
//                                         >
//                                             <i className="ci-meh me-1"></i>
//                                             My Sales-page
//                                         </button>
//                                     </div>
//                                 </div>

//                                 {/* Filters and Controls */}
//                                 <div className="row align-items-center mb-4">
//                                     <div className="col-md-6">
//                                         <div className="d-flex gap-2 mb-2 flex-wrap">
//                                             <div className="dropdown">
//                                                 <button 
//                                                     className="btn btn-outline-secondary dropdown-toggle rounded-pill" 
//                                                     type="button" 
//                                                     data-bs-toggle="dropdown"
//                                                     disabled={loading.products}
//                                                 >
//                                                     Status: {filters.status === 'all' ? 'All' : filters.status}
//                                                 </button>
//                                                 <ul className="dropdown-menu">
//                                                     <li><button className="dropdown-item" onClick={() => handleStatusFilter('all')}>All</button></li>
//                                                     <li><button className="dropdown-item" onClick={() => handleStatusFilter('active')}>Active</button></li>
//                                                     <li><button className="dropdown-item" onClick={() => handleStatusFilter('inactive')}>Inactive</button></li>
//                                                     <li><button className="dropdown-item" onClick={() => handleStatusFilter('archived')}>Archived</button></li>
//                                                     <li><button className="dropdown-item" onClick={() => handleStatusFilter('draft')}>Draft</button></li>
//                                                 </ul>
//                                             </div>
                                            
//                                             <div className="dropdown">
//                                                 <button 
//                                                     className="btn btn-outline-secondary dropdown-toggle rounded-pill" 
//                                                     type="button" 
//                                                     data-bs-toggle="dropdown"
//                                                     disabled={loading.products}
//                                                 >
//                                                     Sort by: {sortOptions.find(opt => opt.value === filters.sortBy)?.label}
//                                                     {filters.sortOrder === 'desc' ? ' ↓' : ' ↑'}
//                                                 </button>
//                                                 <ul className="dropdown-menu">
//                                                     {sortOptions.map(option => (
//                                                         <li key={option.value}>
//                                                             <button 
//                                                                 className="dropdown-item" 
//                                                                 onClick={() => handleSort(option.value)}
//                                                             >
//                                                                 {option.label}
//                                                             </button>
//                                                         </li>
//                                                     ))}
//                                                 </ul>
//                                             </div>
//                                         </div>
//                                     </div>
                                    
//                                     {selectedProducts.length > 0 && (
//                                         <div className="col-md-6">
//                                             <div className="d-flex justify-content-md-end gap-1">

//                                                  <span className="badge animate-target d-inline-flex text-decoration-none align-items-center text-info bg-info-subtle fw-semibold rounded-pill">
//                                                       {selectedProducts.length} selected
//                                                 </span>

//                                                 <button
//                                                     className="btn btn-outline-warning btn-sm rounded-pill"
//                                                     onClick={handleBulkArchive}
//                                                     disabled={loading.action}
//                                                 >
//                                                     <i className="ci-archive me-1"></i>
//                                                     Archive
//                                                 </button>
//                                                 <button
//                                                     className="btn btn-outline-danger btn-sm rounded-pill"
//                                                     onClick={handleBulkDelete}
//                                                     disabled={loading.action}
//                                                 >
//                                                     <i className="ci-trash me-1"></i>
//                                                     Delete
//                                                 </button>
//                                             </div>
//                                         </div>
//                                     )}
//                                 </div>

//                                 {/* Products Table */}
//                                 <div className="table-responsive">
//                                     <table className="table align-middle fs-sm mb-0">
//                                         <thead>
//                                             <tr>
//                                                 <th className="ps-0" scope="col" style={{width: '40px'}}>
//                                                     <div className="form-check">
//                                                         <input
//                                                             type="checkbox"
//                                                             className="form-check-input"
//                                                             checked={selectedProducts.length === filteredProducts.length && filteredProducts.length > 0}
//                                                             onChange={(e) => handleSelectAll(e.target.checked)}
//                                                             disabled={loading.products || filteredProducts.length === 0}
//                                                         />
//                                                     </div>
//                                                 </th>
//                                                 <th className="ps-0" scope="col">
//                                                     <button 
//                                                         type="button" 
//                                                         className="btn fw-normal text-body product-sort p-0" 
//                                                         onClick={() => handleSort('name')}
//                                                     >
//                                                         Product
//                                                         {filters.sortBy === 'name' && (
//                                                             <i className={`ci-chevron-${filters.sortOrder === 'asc' ? 'up' : 'down'} ms-1`}></i>
//                                                         )}
//                                                     </button>
//                                                     <span className='animate-pulse'> 
//                                                       <i className="ci-bullet"></i> 
//                                                       <Link to={`/users/${username}`} className="badge animate-target d-inline-flex text-decoration-none align-items-center text-info bg-info-subtle fw-semibold rounded-pill">
//                                                       {pagination.total}
//                                                       <i className="ci-arrow-up-right fs-sm ms-1"></i>
//                                                       {loading.products && (<LoadingZoom size='sm' />)}
//                                                     </Link>
//                                                   </span>
//                                                 </th>
//                                                 <th className="d-none d-md-table-cell" scope="col">
//                                                     <span className="fw-normal text-body">Status</span>
//                                                 </th>
//                                                 <th className="text-end d-none d-md-table-cell" scope="col">
//                                                     <button 
//                                                         type="button" 
//                                                         className="btn fw-normal text-body product-sort p-0 me-n2" 
//                                                         onClick={() => handleSort('sales_count')}
//                                                     >
//                                                         Sales
//                                                         {filters.sortBy === 'sales_count' && (
//                                                             <i className={`ci-chevron-${filters.sortOrder === 'asc' ? 'up' : 'down'} ms-1`}></i>
//                                                         )}
//                                                     </button>
//                                                 </th>
//                                                 <th className="text-end d-none d-sm-table-cell" scope="col">
//                                                     <button 
//                                                         type="button" 
//                                                         className="btn fw-normal text-body product-sort p-0 me-n2" 
//                                                         onClick={() => handleSort('earnings')}
//                                                     >
//                                                         Earnings
//                                                         {filters.sortBy === 'earnings' && (
//                                                             <i className={`ci-chevron-${filters.sortOrder === 'asc' ? 'up' : 'down'} ms-1`}></i>
//                                                         )}
//                                                     </button>
//                                                 </th>
//                                                 <th className="text-end ps-0 ps-sm-3 pe-0" scope="col">
//                                                     <span className="fw-normal text-body">Action</span>
//                                                 </th>
//                                             </tr>
//                                         </thead>
//                                         <tbody className="product-list">
//                                             {loading.products ? (
//                                                 <tr>
//                                                     <td colSpan={6} className="text-center py-5">
//                                                         <LoadingSpinner size="sm" />
//                                                         <span className="ms-2">Loading products...</span>
//                                                     </td>
//                                                 </tr>
//                                             ) : filteredProducts.length === 0 ? (
//                                                 <tr>
//                                                     <td colSpan={6} className="text-center py-5">
//                                                         <i className="ci-package display-4 text-muted mb-3"></i>
//                                                         <h5 className="text-muted">No products found</h5>
//                                                         <p className="text-muted">
//                                                             {filters.search || filters.status !== 'all' 
//                                                                 ? 'Try adjusting your filters or search terms.'
//                                                                 : 'Start by creating your first product.'
//                                                             }
//                                                         </p>
//                                                         {!filters.search && filters.status === 'all' && (
//                                                             <button
//                                                                 className="btn btn-primary"
//                                                                 onClick={() => navigate('/account/products/create')}
//                                                             >
//                                                                 <i className="ci-plus me-1"></i>
//                                                                 Create Product
//                                                             </button>
//                                                         )}
//                                                     </td>
//                                                 </tr>
//                                             ) : (
//                                                 filteredProducts.map((product) => (
//                                                     <tr key={product.id}>
//                                                         <td className="py-3 ps-0">
//                                                             <div className="form-check">
//                                                                 <input
//                                                                     type="checkbox"
//                                                                     className="form-check-input"
//                                                                     checked={selectedProducts.includes(product.id)}
//                                                                     onChange={(e) => handleProductSelect(product.id, e.target.checked)}
//                                                                 />
//                                                             </div>
//                                                         </td>
//                                                         <td className="py-3 ps-0">
//                                                             <div className="d-flex align-items-start align-items-md-center hover-effect-scale position-relative py-1">
//                                                                 <div className="ratio bg-body-secondary rounded overflow-hidden flex-shrink-sm-0" style={{"--cz-aspect-ratio": 'calc(110 / 142 * 100%)', maxWidth: '142px'}}>
//                                                                     <img  src={product.image_urls?.[0] || '/assets/img/placeholder.jpg'} 
//                                                                         className="hover-effect-target" 
//                                                                         alt={product.name}
//                                                                         onError={(e) => {
//                                                                             e.currentTarget.src = '/assets/img/placeholder.jpg';
//                                                                         }}
//                                                                     />
//                                                                     {product.is_promoted && (
//                                                                         <div className="position-absolute top-0 start-0 m-2">
//                                                                             <span className="badge bg-warning text-dark">
//                                                                                 <i className="ci-zap me-1"></i>
//                                                                                 Promoted
//                                                                             </span>
//                                                                         </div>
//                                                                     )}
//                                                                 </div>
//                                                                 <div className="ps-2 ps-sm-3 ms-1">
//                                                                     <span className={`badge fs-xs ${getStatusBadgeClass(product.status)} rounded-pill d-md-none mb-1`}>
//                                                                         {product.status}
//                                                                     </span>
//                                                                     <h6 className="product mb-2">
//                                                                         <a 
//                                                                             className="fs-sm fw-medium hover-effect-underline stretched-link" 
//                                                                             href={`/products/${product.slug}`}
//                                                                             target="_blank"
//                                                                             rel="noopener noreferrer"
//                                                                         >
//                                                                             {product.name}
//                                                                         </a>
//                                                                     </h6>
//                                                                     <div className="d-flex flex-md-column align-items-center align-items-md-start gap-2">
//                                                                         <div className="h6 mb-0 me-1 me-md-0">
//                                                                             {formatCurrency(product.price)}
//                                                                             {product.original_price && (
//                                                                                 <del className="text-muted fs-sm ms-1">
//                                                                                     {formatCurrency(product.original_price)}
//                                                                                 </del>
//                                                                             )}
//                                                                         </div>
//                                                                         <div className="d-flex gap-2">
//                                                                             {/* <div className="d-flex align-items-center fs-xs text-body-emphasis bg-body-tertiary rounded-pill px-2 py-1">
//                                                                                 <i className="ci-eye text-body-secondary me-1" />
//                                                                                 {formatNumber(product.views_count)}
//                                                                             </div> */}
//                                                                             <div className="d-flex align-items-center fs-xs text-body-emphasis bg-body-tertiary rounded-pill px-2 py-1">
//                                                                                 <i className="ci-heart text-body-secondary me-1" />
//                                                                                 {formatNumber(product.favorites_count)}
//                                                                             </div>
//                                                                             <div className="d-flex align-items-center fs-xs text-body-emphasis bg-body-tertiary rounded-pill px-2 py-1">
//                                                                                 <i className="ci-message-circle text-body-secondary me-1" />
//                                                                                 {formatNumber(product.reviews_count)}
//                                                                             </div>
//                                                                             {/* <div className="d-flex align-items-center fs-xs text-body-emphasis bg-body-tertiary rounded-pill px-2 py-1">
//                                                                                 <i className="ci-phone text-body-secondary me-1" />
//                                                                                 {formatNumber(product.calls_count)}
//                                                                             </div> */}
//                                                                         </div> 
//                                                                     </div>
//                                                                     <div className="fs-xs text-nowrap d-md-none mt-2 mb-1">
//                                                                         <span className="text-body-secondary">Sales:</span> {formatNumber(product.sales_count)}
//                                                                     </div>
//                                                                     <div className="fs-xs text-nowrap d-sm-none">
//                                                                         <span className="text-body-secondary">Earnings:</span> {formatCurrency(product.earnings)}
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                         </td>
//                                                         <td className="d-none d-md-table-cell py-3">
//                                                             <span className={`status badge fs-xs ${getStatusBadgeClass(product.status)} rounded-pill`}>
//                                                                 {product.status}
//                                                             </span>
//                                                         </td>
//                                                         <td className="sales d-none d-md-table-cell text-end py-3">
//                                                             {formatNumber(product.sales_count)}
//                                                         </td>
//                                                         <td className="text-end d-none d-sm-table-cell py-3">
//                                                             {formatCurrency(product.earnings)}
//                                                             <span className="earnings visually-hidden">{product.earnings}</span>
//                                                         </td>
//                                                         <td className="text-end py-3 ps-0 ps-sm-3 pe-0">
//                                                             <div className="dropdown">
//                                                                 <button 
//                                                                     type="button" 
//                                                                     className="btn btn-icon btn-ghost btn-sm btn-secondary rounded-circle" 
//                                                                     data-bs-toggle="dropdown" 
//                                                                     aria-expanded="false" 
//                                                                     aria-label="Settings"
//                                                                     disabled={loading.action}
//                                                                 >
//                                                                     {loading.action ? (
//                                                                         <span className="spinner-border spinner-border-sm" role="status"></span>
//                                                                     ) : (
//                                                                         <i className="ci-more-vertical fs-base" />
//                                                                     )}
//                                                                 </button>
//                                                                 <ul className="dropdown-menu dropdown-menu-end">
//                                                                     <li>
//                                                                         <button 
//                                                                             className="dropdown-item"
//                                                                             onClick={() => handleEditProduct(product.id)}
//                                                                         >
//                                                                             <i className="ci-edit opacity-75 me-2" />
//                                                                             Edit
//                                                                         </button>
//                                                                     </li>
//                                                                     <li>
//                                                                         <button 
//                                                                             className="dropdown-item"
//                                                                             onClick={() => handlePromoteProduct(product.id)}
//                                                                         >
//                                                                             <i className="ci-zap fs-base opacity-75 me-2" />
//                                                                             Promote
//                                                                         </button>
//                                                                     </li>
//                                                                     <li>
//                                                                         <button 
//                                                                             className="dropdown-item"
//                                                                             onClick={() => handlePublishProduct(product.id)}
//                                                                         >
//                                                                             <i className="ci-share opacity-75 me-2" />
//                                                                             Publish
//                                                                         </button>
//                                                                     </li>
//                                                                     <li><hr className="dropdown-divider" /></li>
//                                                                     <li>
//                                                                         <button 
//                                                                             className="dropdown-item"
//                                                                             onClick={() => handleArchiveProduct(product.id)}
//                                                                         >
//                                                                             <i className="ci-archive opacity-75 me-2" />
//                                                                             Move to archive
//                                                                         </button>
//                                                                     </li>
//                                                                     <li>
//                                                                         <button 
//                                                                             className="dropdown-item text-danger"
//                                                                             onClick={() => handleDeleteProduct(product.id)}
//                                                                         >
//                                                                             <i className="ci-trash opacity-75 me-2" />
//                                                                             Delete
//                                                                         </button>
//                                                                     </li>
//                                                                 </ul>
//                                                             </div>
//                                                         </td>
//                                                     </tr>
//                                                 ))
//                                             )}
//                                         </tbody>
//                                     </table>
//                                 </div>

//                                 {/* Pagination */}
//                                 {pagination.last_page > 1 && (
//                                     <nav className="d-flex justify-content-center pt-4" aria-label="Products pagination">
//                                         <ul className="pagination">
//                                             <li className={`page-item ${pagination.current_page === 1 ? 'disabled' : ''}`}>
//                                                 <button 
//                                                     className="page-link"
//                                                     onClick={() => setPagination(prev => ({ ...prev, current_page: prev.current_page - 1 }))}
//                                                     disabled={pagination.current_page === 1 || loading.products}
//                                                 >
//                                                     <i className="ci-chevron-left"></i>
//                                                 </button>
//                                             </li>
                                            
//                                             {Array.from({ length: Math.min(5, pagination.last_page) }, (_, i) => {
//                                                 let pageNum;
//                                                 if (pagination.last_page <= 5) {
//                                                     pageNum = i + 1;
//                                                 } else if (pagination.current_page <= 3) {
//                                                     pageNum = i + 1;
//                                                 } else if (pagination.current_page >= pagination.last_page - 2) {
//                                                     pageNum = pagination.last_page - 4 + i;
//                                                 } else {
//                                                     pageNum = pagination.current_page - 2 + i;
//                                                 }
                                                
//                                                 return (
//                                                     <li key={pageNum} className={`page-item ${pagination.current_page === pageNum ? 'active' : ''}`}>
//                                                         <button 
//                                                             className="page-link"
//                                                             onClick={() => setPagination(prev => ({ ...prev, current_page: pageNum }))}
//                                                             disabled={loading.products}
//                                                         >
//                                                             {pageNum}
//                                                         </button>
//                                                     </li>
//                                                 );
//                                             })}
                                            
//                                             <li className={`page-item ${pagination.current_page === pagination.last_page ? 'disabled' : ''}`}>
//                                                 <button 
//                                                     className="page-link"
//                                                     onClick={() => setPagination(prev => ({ ...prev, current_page: prev.current_page + 1 }))}
//                                                     disabled={pagination.current_page === pagination.last_page || loading.products}
//                                                 >
//                                                     <i className="ci-chevron-right"></i>
//                                                 </button>
//                                             </li>
//                                         </ul>
//                                     </nav>
//                                 )}

//                                 {/* Results Info */}
//                                 {filteredProducts.length > 0 && (
//                                     <div className="d-flex justify-content-between align-items-center pt-3 border-top">
//                                         <small className="text-muted">
//                                             Showing {((pagination.current_page - 1) * pagination.per_page) + 1} to {Math.min(pagination.current_page * pagination.per_page, pagination.total)} of {pagination.total} products
//                                         </small>
//                                         <div className="d-flex gap-2">
//                                             <select 
//                                                 className="form-select form-select-sm"
//                                                 value={pagination.per_page}
//                                                 onChange={(e) => setPagination(prev => ({ 
//                                                     ...prev, 
//                                                     per_page: parseInt(e.target.value),
//                                                     current_page: 1 
//                                                 }))}
//                                                 disabled={loading.products}
//                                                 style={{width: 'auto'}}
//                                             >
//                                                 <option value={5}>5 per page</option>
//                                                 <option value={10}>10 per page</option>
//                                                 <option value={25}>25 per page</option>
//                                                 <option value={50}>50 per page</option>
//                                             </select>
//                                         </div>
//                                     </div>
//                                 )}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </main>

//             {/* Bootstrap Modal Backdrop */}
//             {modalState.subscription.show && (
//                 <div className="modal-backdrop fade show"></div>
//             )}
//         </>
//     );
// };

// export default Products;

// v5 - still resetting to page 1
// import { useState, useEffect, useMemo } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import LoadingSpinner, { LoadingZoom } from '../../../components/shared/LoadingSpinner';
// import SubscriptionPlans from '../../../components/shared/modals/publish/Promote';
// import PublishPage from '../../../components/shared/modals/publish/PublishPage';
// import { NotificationService } from '../../../services/local/NotificationService';
// import { ProductAxiosService } from '../../../services/net/ProductAxiosService';
// import Aside from '../shared/Aside';
// import { UsersService } from '../../../services/local/UsersService';

// interface Product {
//     id: string;
//     name: string;
//     slug: string;
//     price: number;
//     original_price?: number;
//     discount?: number;
//     image_url: string;
//     status: 'active' | 'inactive' | 'archived' | 'draft';
//     sales_count: number;
//     earnings: number;
//     views_count: number;
//     favorites_count: number;
//     comments_count: number;
//     calls_count: number;
//     created_at: string;
//     updated_at: string;
//     is_promoted: boolean;
//     promotion_expires_at?: string;
//     image_urls?: string[];
//     reviews_count?: number;
// }

// interface ProductsResponse {
//     success: boolean;
//     products: Product[];
//     total: number;
//     current_page: number;
//     last_page: number;
//     per_page: number;
// }

// interface SortOption {
//     value: string;
//     label: string;
// }

// interface FilterOptions {
//     status: string;
//     search: string;
//     sortBy: string;
//     sortOrder: 'asc' | 'desc';
// }

// const Products = () => {
//     const navigate = useNavigate();
//     const [products, setProducts] = useState<Product[]>([]);
//     const [loading, setLoading] = useState({
//         products: true,
//         action: false
//     });
//     const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
//     const [filters, setFilters] = useState<FilterOptions>({
//         status: 'all',
//         search: '',
//         sortBy: 'created_at',
//         sortOrder: 'desc'
//     });
//     const [pagination, setPagination] = useState({
//         current_page: 1,
//         last_page: 1,
//         total: 0,
//         per_page: 5
//     });
//     const [modalState, setModalState] = useState({
//         subscription: { show: false, productId: '' },
//         publish: { show: false, productId: '' },
//         delete: { show: false, productId: '' }
//     });

//     const sortOptions: SortOption[] = [
//         { value: 'created_at', label: 'Date Created' },
//         { value: 'name', label: 'Product Name' },
//         { value: 'sales_count', label: 'Sales Count' },
//         { value: 'earnings', label: 'Earnings' },
//         { value: 'views_count', label: 'Views' },
//         { value: 'price', label: 'Price' }
//     ];

//     // Get current user
//     const currentUser = UsersService.getCurrentUser();
//     const username = currentUser?.username || currentUser?.email;

//     useEffect(() => {
//         const observer = (data: any) => {
//             // Handle notification updates if needed
//         };

//         NotificationService.subscribe(observer);
//         return () => {
//             NotificationService.unsubscribe(observer);
//         };
//     }, []);

//     // Fixed: This useEffect will trigger fetchProducts when any relevant state changes
//     useEffect(() => {
//         fetchProducts();
//     }, [filters, pagination.current_page, pagination.per_page]);

//     const fetchProducts = async () => {
//         try {
//             setLoading(prev => ({ ...prev, products: true }));
            
//             const params = {
//                 page: pagination.current_page,
//                 per_page: pagination.per_page,
//                 status: filters.status !== 'all' ? filters.status : undefined,
//                 search: filters.search || undefined,
//                 sort_by: filters.sortBy,
//                 sort_order: filters.sortOrder
//             };

//             const response = await ProductAxiosService.getByOwner(params, username);
            
//             if (response.data.success) {
//                 setProducts(response.data.products);
//                 // Fixed: Update pagination with correct field mapping
//                 setPagination(prev => ({
//                     ...prev,
//                     current_page: response.data.page_meta.current_page_number,
//                     last_page: response.data.page_meta.total_pages_count,
//                     total: response.data.page_meta.total_items_count,
//                     per_page: response.data.page_meta.requested_page_size
//                 }));
//             } else {
//                 NotificationService.showDialog(response.data.error || 'Failed to load products', 'error');
//                 setProducts([]);
//             }
//         } catch (err: any) {
//             const errorMessage = err.response?.data?.error || err.message || 'Failed to load products';
//             NotificationService.showDialog(errorMessage, 'error');
//             setProducts([]);
//         } finally {
//             setLoading(prev => ({ ...prev, products: false }));
//         }
//     };

//     const handleSearch = (searchTerm: string) => {
//         setFilters(prev => ({ ...prev, search: searchTerm }));
//         setPagination(prev => ({ ...prev, current_page: 1 }));
//     };

//     const handleSort = (sortBy: string) => {
//         setFilters(prev => ({
//             ...prev,
//             sortBy,
//             sortOrder: prev.sortBy === sortBy && prev.sortOrder === 'asc' ? 'desc' : 'asc'
//         }));
//     };

//     const handleStatusFilter = (status: string) => {
//         setFilters(prev => ({ ...prev, status }));
//         setPagination(prev => ({ ...prev, current_page: 1 }));
//     };

//     // Fixed: Pagination handlers that properly trigger re-fetch
//     const handlePageChange = (newPage: number) => {
//         if (newPage >= 1 && newPage <= pagination.last_page) {
//             setPagination(prev => ({ ...prev, current_page: newPage }));
//         }
//     };

//     const handlePerPageChange = (newPerPage: number) => {
//         setPagination(prev => ({ 
//             ...prev, 
//             per_page: newPerPage,
//             current_page: 1 
//         }));
//     };

//     const handleProductSelect = (productId: string, isSelected: boolean) => {
//         setSelectedProducts(prev =>
//             isSelected
//                 ? [...prev, productId]
//                 : prev.filter(id => id !== productId)
//         );
//     };

//     const handleSelectAll = (isSelected: boolean) => {
//         setSelectedProducts(isSelected ? products.map(product => product.id) : []);
//     };

//     const handleEditProduct = (productId: string) => {
//         navigate(`/users/products/${productId}/edit`);
//     };

//     const handlePromoteProduct = (productId: string) => {
//         setModalState(prev => ({
//             ...prev,
//             subscription: { show: true, productId }
//         }));
//     };

//     const handlePublishProduct = (productId: string) => {
//         setModalState(prev => ({
//             ...prev,
//             publish: { show: true, productId }
//         }));
//     };

//     const handleArchiveProduct = async (productId: string) => {
//         try {
//             setLoading(prev => ({ ...prev, action: true }));
//             NotificationService.showDialog("Archiving product...", "primary");
            
//             await ProductAxiosService.updateProductStatus(productId, 'archived');
            
//             setProducts(prev => 
//                 prev.map(product =>   
//                     product.id === productId 
//                         ? { ...product, status: 'archived' as const }
//                         : product
//                 )
//             );
            
//             NotificationService.showDialog("Product archived successfully", "success");
//         } catch (err: any) {
//             const errorMessage = err.response?.data?.error || err.message || 'Failed to archive product';
//             NotificationService.showDialog(errorMessage, 'error');
//         } finally {
//             setLoading(prev => ({ ...prev, action: false }));
//         }
//     };

//     const handleDeleteProduct = async (productId: string) => {
//         try {
//             setLoading(prev => ({ ...prev, action: true }));
//             NotificationService.showDialog("Deleting product...", "primary");
            
//             await ProductAxiosService.deleteProduct(productId);
            
//             setProducts(prev => prev.filter(product => product.id !== productId));
//             setSelectedProducts(prev => prev.filter(id => id !== productId));
            
//             NotificationService.showDialog("Product deleted successfully", "success");
//         } catch (err: any) {
//             const errorMessage = err.response?.data?.error || err.message || 'Failed to delete product';
//             NotificationService.showDialog(errorMessage, 'error');
//         } finally {
//             setLoading(prev => ({ ...prev, action: false }));
//         }
//     };

//     const handleBulkDelete = async () => {
//         if (selectedProducts.length === 0) return;
        
//         try {
//             setLoading(prev => ({ ...prev, action: true }));
//             NotificationService.showDialog("Deleting selected products...", "primary");
            
//             await Promise.all(
//                 selectedProducts.map(productId => 
//                     ProductAxiosService.deleteProduct(productId)
//                 )
//             );
            
//             setProducts(prev => 
//                 prev.filter(product => !selectedProducts.includes(product.id))
//             );
//             setSelectedProducts([]);
            
//             NotificationService.showDialog("Selected products deleted successfully", "success");
//         } catch (err: any) {
//             const errorMessage = err.response?.data?.error || err.message || 'Failed to delete products';
//             NotificationService.showDialog(errorMessage, 'error');
//         } finally {
//             setLoading(prev => ({ ...prev, action: false }));
//         }
//     };

//     const handleBulkArchive = async () => {
//         if (selectedProducts.length === 0) return;
        
//         try {
//             setLoading(prev => ({ ...prev, action: true }));
//             NotificationService.showDialog("Archiving selected products...", "primary");
            
//             await Promise.all(
//                 selectedProducts.map(productId => 
//                     ProductAxiosService.updateProductStatus(productId, 'archived')
//                 )
//             );
            
//             setProducts(prev => 
//                 prev.map(product => 
//                     selectedProducts.includes(product.id)
//                         ? { ...product, status: 'archived' as const }
//                         : product
//                 )
//             );
//             setSelectedProducts([]);
            
//             NotificationService.showDialog("Selected products archived successfully", "success");
//         } catch (err: any) {
//             const errorMessage = err.response?.data?.error || err.message || 'Failed to archive products';
//             NotificationService.showDialog(errorMessage, 'error');
//         } finally {
//             setLoading(prev => ({ ...prev, action: false }));
//         }
//     };

//     const getStatusBadgeClass = (status: string) => {
//         switch (status) {
//             case 'active':
//                 return 'text-success bg-success-subtle';
//             case 'inactive':
//                 return 'text-secondary bg-secondary-subtle';
//             case 'archived':
//                 return 'text-warning bg-warning-subtle';
//             case 'draft':
//                 return 'text-info bg-info-subtle';
//             default:
//                 return 'text-muted bg-body-secondary';
//         }
//     };

//     const formatCurrency = (amount: number) => {
//         return new Intl.NumberFormat('en-NG', {
//             style: 'currency',
//             currency: 'NGN'
//         }).format(amount);
//     };

//     const formatNumber = (num: number) => {
//         return new Intl.NumberFormat().format(num);
//     };

//     // Fixed: Remove client-side filtering since backend handles it
//     const filteredProducts = products;

//     const handleSubscriptionSuccess = (subscription: any) => {
//         setModalState(prev => ({
//             ...prev,
//             subscription: { show: false, productId: '' }
//         }));
        
//         setProducts(prev => 
//             prev.map(product => 
//                 product.id === modalState.subscription.productId
//                     ? { 
//                         ...product, 
//                         is_promoted: true,
//                         promotion_expires_at: subscription.expires_at 
//                     }
//                     : product
//             )
//         );
        
//         NotificationService.showDialog("Product promotion activated successfully!", "success");
//         fetchProducts();
//     };

//     const handlePublishSuccess = () => {
//         setModalState(prev => ({
//             ...prev,
//             publish: { show: false, productId: '' }
//         }));
        
//         NotificationService.showDialog("Product published successfully!", "success");
//         fetchProducts();
//     };

//     if (loading.products && products.length === 0) {
//         return (
//             <main className="content-wrapper">
//                 <div className="container pt-4 pt-lg-5 pb-5">
//                     <div className="text-center py-5">
//                         <LoadingSpinner />
//                         <p className="mt-3">Loading your products...</p>
//                     </div>
//                 </div>
//             </main>
//         );
//     }

//     return (
//         <>
//             {/* Subscription Modal */}
//             <div 
//                 className={`modal fade ${modalState.subscription.show ? 'show' : ''}`} 
//                 style={{ display: modalState.subscription.show ? 'block' : 'none' }}
//                 tabIndex={-1}
//             >
//                 <div className="modal-dialog modal-lg modal-dialog-scrollable">
//                     <div className="modal-content">
//                         <div className="modal-header">
//                             <h5 className="modal-title">
//                                 <i className="ci-zap me-2"></i>
//                                 Promote Your Product
//                             </h5>
//                             <button 
//                                 type="button" 
//                                 className="btn-close" 
//                                 onClick={() => setModalState(prev => ({
//                                     ...prev,
//                                     subscription: { show: false, productId: '' }
//                                 }))}
//                             ></button>
//                         </div>
//                         <div className="modal-body">
//                             <div className="mb-4">
//                                 <h6 className="text-muted">Choose a promotion plan to boost your product visibility</h6>
//                             </div>
//                             <SubscriptionPlans
//                                 entityType="product"
//                                 entityId={modalState.subscription.productId}
//                                 onSubscriptionSuccess={handleSubscriptionSuccess}
//                             />
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Publish Modal */}
//             {modalState.publish.show && (
//                 <PublishPage
//                     productSlug=''
//                     editProductData={''}
//                     onSuccess={handlePublishSuccess}
//                     onClose={() => setModalState(prev => ({
//                         ...prev,
//                         publish: { show: false, productId: '' }
//                     }))}
//                 />
//             )}

//             {/* Main Content */}
//             <main className="content-wrapper">
//                 <div className="container pt-4 pt-lg-5 pb-5">
//                     <div className="row pt-sm-2 pt-md-3 pt-lg-0 pb-2 pb-sm-3 pb-md-4 pb-lg-5">
//                         <Aside />

//                         <div className="col-lg-9 pt-2 pt-xl-3">
//                             <div data-filter-list='{"searchClass": "product-search", "listClass": "product-list", "sortClass": "product-sort", "valueNames": ["product", "status", "sales", "earnings"]}'>
                                
//                                 {/* Header */}
//                                 <div className="d-sm-flex align-items-center justify-content-between gap-3 pb-2 pb-sm-3 mb-md-2">
//                                     <h1 className="h2 text-nowrap mb-sm-0">
//                                         Products     
//                                     </h1>
                                    
//                                     <div className="d-flex gap-2 align-items-center">
//                                         <div className="position-relative" style={{maxWidth: '300px'}}>
//                                             <i className="ci-search position-absolute top-50 start-0 translate-middle-y ms-3" />
//                                             <input 
//                                                 type="search" 
//                                                 className="product-search form-control form-icon-start rounded-pill" 
//                                                 placeholder="Search products..."
//                                                 value={filters.search}
//                                                 onChange={(e) => handleSearch(e.target.value)}
//                                                 disabled={loading.products}
//                                             />
//                                         </div>
//                                         <button
//                                             className="btn btn-primary rounded-pill"
//                                             onClick={() => navigate(`/users/${username}`)}
//                                         >
//                                             <i className="ci-meh me-1"></i>
//                                             My Sales-page
//                                         </button>
//                                     </div>
//                                 </div>

//                                 {/* Filters and Controls */}
//                                 <div className="row align-items-center mb-4">
//                                     <div className="col-md-6">
//                                         <div className="d-flex gap-2 mb-2 flex-wrap">
//                                             <div className="dropdown">
//                                                 <button 
//                                                     className="btn btn-outline-secondary dropdown-toggle rounded-pill" 
//                                                     type="button" 
//                                                     data-bs-toggle="dropdown"
//                                                     disabled={loading.products}
//                                                 >
//                                                     Status: {filters.status === 'all' ? 'All' : filters.status}
//                                                 </button>
//                                                 <ul className="dropdown-menu">
//                                                     <li><button className="dropdown-item" onClick={() => handleStatusFilter('all')}>All</button></li>
//                                                     <li><button className="dropdown-item" onClick={() => handleStatusFilter('active')}>Active</button></li>
//                                                     <li><button className="dropdown-item" onClick={() => handleStatusFilter('inactive')}>Inactive</button></li>
//                                                     <li><button className="dropdown-item" onClick={() => handleStatusFilter('archived')}>Archived</button></li>
//                                                     <li><button className="dropdown-item" onClick={() => handleStatusFilter('draft')}>Draft</button></li>
//                                                 </ul>
//                                             </div>
                                            
//                                             <div className="dropdown">
//                                                 <button 
//                                                     className="btn btn-outline-secondary dropdown-toggle rounded-pill" 
//                                                     type="button" 
//                                                     data-bs-toggle="dropdown"
//                                                     disabled={loading.products}
//                                                 >
//                                                     Sort by: {sortOptions.find(opt => opt.value === filters.sortBy)?.label}
//                                                     {filters.sortOrder === 'desc' ? ' ↓' : ' ↑'}
//                                                 </button>
//                                                 <ul className="dropdown-menu">
//                                                     {sortOptions.map(option => (
//                                                         <li key={option.value}>
//                                                             <button 
//                                                                 className="dropdown-item" 
//                                                                 onClick={() => handleSort(option.value)}
//                                                             >
//                                                                 {option.label}
//                                                             </button>
//                                                         </li>
//                                                     ))}
//                                                 </ul>
//                                             </div>
//                                         </div>
//                                     </div>
                                    
//                                     {selectedProducts.length > 0 && (
//                                         <div className="col-md-6">
//                                             <div className="d-flex justify-content-md-end gap-1">
//                                                 <span className="badge animate-target d-inline-flex text-decoration-none align-items-center text-info bg-info-subtle fw-semibold rounded-pill">
//                                                     {selectedProducts.length} selected
//                                                 </span>
//                                                 <button
//                                                     className="btn btn-outline-warning btn-sm rounded-pill"
//                                                     onClick={handleBulkArchive}
//                                                     disabled={loading.action}
//                                                 >
//                                                     <i className="ci-archive me-1"></i>
//                                                     Archive
//                                                 </button>
//                                                 <button
//                                                     className="btn btn-outline-danger btn-sm rounded-pill"
//                                                     onClick={handleBulkDelete}
//                                                     disabled={loading.action}
//                                                 >
//                                                     <i className="ci-trash me-1"></i>
//                                                     Delete
//                                                 </button>
//                                             </div>
//                                         </div>
//                                     )}
//                                 </div>

//                                 {/* Products Table */}
//                                 <div className="table-responsive">
//                                     <table className="table align-middle fs-sm mb-0">
//                                         <thead>
//                                             <tr>
//                                                 <th className="ps-0" scope="col" style={{width: '40px'}}>
//                                                     <div className="form-check">
//                                                         <input
//                                                             type="checkbox"
//                                                             className="form-check-input"
//                                                             checked={selectedProducts.length === filteredProducts.length && filteredProducts.length > 0}
//                                                             onChange={(e) => handleSelectAll(e.target.checked)}
//                                                             disabled={loading.products || filteredProducts.length === 0}
//                                                         />
//                                                     </div>
//                                                 </th>
//                                                 <th className="ps-0" scope="col">
//                                                     <button 
//                                                         type="button" 
//                                                         className="btn fw-normal text-body product-sort p-0" 
//                                                         onClick={() => handleSort('name')}
//                                                     >
//                                                         Product
//                                                         {filters.sortBy === 'name' && (
//                                                             <i className={`ci-chevron-${filters.sortOrder === 'asc' ? 'up' : 'down'} ms-1`}></i>
//                                                         )}
//                                                     </button>
//                                                     <span className='animate-pulse'> 
//                                                         <i className="ci-bullet"></i> 
//                                                         <Link to={`/users/${username}`} className="badge animate-target d-inline-flex text-decoration-none align-items-center text-info bg-info-subtle fw-semibold rounded-pill">
//                                                             {pagination.total}
//                                                             <i className="ci-arrow-up-right fs-sm ms-1"></i>
//                                                             {loading.products && (<LoadingZoom size='sm' />)}
//                                                         </Link>
//                                                     </span>
//                                                 </th>
//                                                 <th className="d-none d-md-table-cell" scope="col">
//                                                     <span className="fw-normal text-body">Status</span>
//                                                 </th>
//                                                 <th className="text-end d-none d-md-table-cell" scope="col">
//                                                     <button 
//                                                         type="button" 
//                                                         className="btn fw-normal text-body product-sort p-0 me-n2" 
//                                                         onClick={() => handleSort('sales_count')}
//                                                     >
//                                                         Sales
//                                                         {filters.sortBy === 'sales_count' && (
//                                                             <i className={`ci-chevron-${filters.sortOrder === 'asc' ? 'up' : 'down'} ms-1`}></i>
//                                                         )}
//                                                     </button>
//                                                 </th>
//                                                 <th className="text-end d-none d-sm-table-cell" scope="col">
//                                                     <button 
//                                                         type="button" 
//                                                         className="btn fw-normal text-body product-sort p-0 me-n2" 
//                                                         onClick={() => handleSort('earnings')}
//                                                     >
//                                                         Earnings
//                                                         {filters.sortBy === 'earnings' && (
//                                                             <i className={`ci-chevron-${filters.sortOrder === 'asc' ? 'up' : 'down'} ms-1`}></i>
//                                                         )}
//                                                     </button>
//                                                 </th>
//                                                 <th className="text-end ps-0 ps-sm-3 pe-0" scope="col">
//                                                     <span className="fw-normal text-body">Action</span>
//                                                 </th>
//                                             </tr>
//                                         </thead>
//                                         <tbody className="product-list">
//                                             {loading.products ? (
//                                                 <tr>
//                                                     <td colSpan={6} className="text-center py-5">
//                                                         <LoadingSpinner size="sm" />
//                                                         <span className="ms-2">Loading products...</span>
//                                                     </td>
//                                                 </tr>
//                                             ) : filteredProducts.length === 0 ? (
//                                                 <tr>
//                                                     <td colSpan={6} className="text-center py-5">
//                                                         <i className="ci-package display-4 text-muted mb-3"></i>
//                                                         <h5 className="text-muted">No products found</h5>
//                                                         <p className="text-muted">
//                                                             {filters.search || filters.status !== 'all' 
//                                                                 ? 'Try adjusting your filters or search terms.'
//                                                                 : 'Start by creating your first product.'
//                                                             }
//                                                         </p>
//                                                         {!filters.search && filters.status === 'all' && (
//                                                             <button
//                                                                 className="btn btn-primary"
//                                                                 onClick={() => navigate('/account/products/create')}
//                                                             >
//                                                                 <i className="ci-plus me-1"></i>
//                                                                 Create Product
//                                                             </button>
//                                                         )}
//                                                     </td>
//                                                 </tr>
//                                             ) : (
//                                                 filteredProducts.map((product) => (
//                                                     <tr key={product.id}>
//                                                         <td className="py-3 ps-0">
//                                                             <div className="form-check">
//                                                                 <input
//                                                                     type="checkbox"
//                                                                     className="form-check-input"
//                                                                     checked={selectedProducts.includes(product.id)}
//                                                                     onChange={(e) => handleProductSelect(product.id, e.target.checked)}
//                                                                 />
//                                                             </div>
//                                                         </td>
//                                                         <td className="py-3 ps-0">
//                                                             <div className="d-flex align-items-start align-items-md-center hover-effect-scale position-relative py-1">
//                                                                 <div className="ratio bg-body-secondary rounded overflow-hidden flex-shrink-sm-0" style={{"--cz-aspect-ratio": 'calc(110 / 142 * 100%)', maxWidth: '142px'}}>
//                                                                     <img src={product.image_urls?.[0] || product.image_url || '/assets/img/placeholder.jpg'} 
//                                                                         className="hover-effect-target" 
//                                                                         alt={product.name}
//                                                                         onError={(e) => {
//                                                                             e.currentTarget.src = '/assets/img/placeholder.jpg';
//                                                                         }}
//                                                                     />
//                                                                     {product.is_promoted && (
//                                                                         <div className="position-absolute top-0 start-0 m-2">
//                                                                             <span className="badge bg-warning text-dark">
//                                                                                 <i className="ci-zap me-1"></i>
//                                                                                 Promoted
//                                                                             </span>
//                                                                         </div>
//                                                                     )}
//                                                                 </div>
//                                                                 <div className="ps-2 ps-sm-3 ms-1">
//                                                                     <span className={`badge fs-xs ${getStatusBadgeClass(product.status)} rounded-pill d-md-none mb-1`}>
//                                                                         {product.status}
//                                                                     </span>
//                                                                     <h6 className="product mb-2">
//                                                                         <a 
//                                                                             className="fs-sm fw-medium hover-effect-underline stretched-link" 
//                                                                             href={`/products/${product.slug}`}
//                                                                             target="_blank"
//                                                                             rel="noopener noreferrer"
//                                                                         >
//                                                                             {product.name}
//                                                                         </a>
//                                                                     </h6>
//                                                                     <div className="d-flex flex-md-column align-items-center align-items-md-start gap-2">
//                                                                         <div className="h6 mb-0 me-1 me-md-0">
//                                                                             {formatCurrency(product.price)}
//                                                                             {product.original_price && (
//                                                                                 <del className="text-muted fs-sm ms-1">
//                                                                                     {formatCurrency(product.original_price)}
//                                                                                 </del>
//                                                                             )}
//                                                                         </div>
//                                                                         <div className="d-flex gap-2">
//                                                                             <div className="d-flex align-items-center fs-xs text-body-emphasis bg-body-tertiary rounded-pill px-2 py-1">
//                                                                                 <i className="ci-heart text-body-secondary me-1" />
//                                                                                 {formatNumber(product.favorites_count)}
//                                                                             </div>
//                                                                             <div className="d-flex align-items-center fs-xs text-body-emphasis bg-body-tertiary rounded-pill px-2 py-1">
//                                                                                 <i className="ci-message-circle text-body-secondary me-1" />
//                                                                                 {formatNumber(product.reviews_count || product.comments_count)}
//                                                                             </div>
//                                                                         </div> 
//                                                                     </div>
//                                                                     <div className="fs-xs text-nowrap d-md-none mt-2 mb-1">
//                                                                         <span className="text-body-secondary">Sales:</span> {formatNumber(product.sales_count)}
//                                                                     </div>
//                                                                     <div className="fs-xs text-nowrap d-sm-none">
//                                                                         <span className="text-body-secondary">Earnings:</span> {formatCurrency(product.earnings)}
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                         </td>
//                                                         <td className="d-none d-md-table-cell py-3">
//                                                             <span className={`status badge fs-xs ${getStatusBadgeClass(product.status)} rounded-pill`}>
//                                                                 {product.status}
//                                                             </span>
//                                                         </td>
//                                                         <td className="sales d-none d-md-table-cell text-end py-3">
//                                                             {formatNumber(product.sales_count)}
//                                                         </td>
//                                                         <td className="text-end d-none d-sm-table-cell py-3">
//                                                             {formatCurrency(product.earnings)}
//                                                             <span className="earnings visually-hidden">{product.earnings}</span>
//                                                         </td>
//                                                         <td className="text-end py-3 ps-0 ps-sm-3 pe-0">
//                                                             <div className="dropdown">
//                                                                 <button 
//                                                                     type="button" 
//                                                                     className="btn btn-icon btn-ghost btn-sm btn-secondary rounded-circle" 
//                                                                     data-bs-toggle="dropdown" 
//                                                                     aria-expanded="false" 
//                                                                     aria-label="Settings"
//                                                                     disabled={loading.action}
//                                                                 >
//                                                                     {loading.action ? (
//                                                                         <span className="spinner-border spinner-border-sm" role="status"></span>
//                                                                     ) : (
//                                                                         <i className="ci-more-vertical fs-base" />
//                                                                     )}
//                                                                 </button>
//                                                                 <ul className="dropdown-menu dropdown-menu-end">
//                                                                     <li>
//                                                                         <button 
//                                                                             className="dropdown-item"
//                                                                             onClick={() => handleEditProduct(product.id)}
//                                                                         >
//                                                                             <i className="ci-edit opacity-75 me-2" />
//                                                                             Edit
//                                                                         </button>
//                                                                     </li>
//                                                                     <li>
//                                                                         <button 
//                                                                             className="dropdown-item"
//                                                                             onClick={() => handlePromoteProduct(product.id)}
//                                                                         >
//                                                                             <i className="ci-zap fs-base opacity-75 me-2" />
//                                                                             Promote
//                                                                         </button>
//                                                                     </li>
//                                                                     <li>
//                                                                         <button 
//                                                                             className="dropdown-item"
//                                                                             onClick={() => handlePublishProduct(product.id)}
//                                                                         >
//                                                                             <i className="ci-share opacity-75 me-2" />
//                                                                             Publish
//                                                                         </button>
//                                                                     </li>
//                                                                     <li><hr className="dropdown-divider" /></li>
//                                                                     <li>
//                                                                         <button 
//                                                                             className="dropdown-item"
//                                                                             onClick={() => handleArchiveProduct(product.id)}
//                                                                         >
//                                                                             <i className="ci-archive opacity-75 me-2" />
//                                                                             Move to archive
//                                                                         </button>
//                                                                     </li>
//                                                                     <li>
//                                                                         <button 
//                                                                             className="dropdown-item text-danger"
//                                                                             onClick={() => handleDeleteProduct(product.id)}
//                                                                         >
//                                                                             <i className="ci-trash opacity-75 me-2" />
//                                                                             Delete
//                                                                         </button>
//                                                                     </li>
//                                                                 </ul>
//                                                             </div>
//                                                         </td>
//                                                     </tr>
//                                                 ))
//                                             )}
//                                         </tbody>
//                                     </table>
//                                 </div>

//                                 {/* Fixed Pagination */}
//                                 {pagination.last_page > 1 && (
//                                     <nav className="d-flex justify-content-center pt-4" aria-label="Products pagination">
//                                         <ul className="pagination">
//                                             <li className={`page-item ${pagination.current_page === 1 ? 'disabled' : ''}`}>
//                                                 <button 
//                                                     className="page-link"
//                                                     onClick={() => handlePageChange(pagination.current_page - 1)}
//                                                     disabled={pagination.current_page === 1 || loading.products}
//                                                 >
//                                                     <i className="ci-chevron-left"></i>
//                                                 </button>
//                                             </li>
                                            
//                                             {Array.from({ length: Math.min(5, pagination.last_page) }, (_, i) => {
//                                                 let pageNum;
//                                                 if (pagination.last_page <= 5) {
//                                                     pageNum = i + 1;
//                                                 } else if (pagination.current_page <= 3) {
//                                                     pageNum = i + 1;
//                                                 } else if (pagination.current_page >= pagination.last_page - 2) {
//                                                     pageNum = pagination.last_page - 4 + i;
//                                                 } else {
//                                                     pageNum = pagination.current_page - 2 + i;
//                                                 }
                                                
//                                                 return (
//                                                     <li key={pageNum} className={`page-item ${pagination.current_page === pageNum ? 'active' : ''}`}>
//                                                         <button 
//                                                             className="page-link"
//                                                             onClick={() => handlePageChange(pageNum)}
//                                                             disabled={loading.products}
//                                                         >
//                                                             {pageNum}
//                                                         </button>
//                                                     </li>
//                                                 );
//                                             })}
                                            
//                                             <li className={`page-item ${pagination.current_page === pagination.last_page ? 'disabled' : ''}`}>
//                                                 <button 
//                                                     className="page-link"
//                                                     onClick={() => handlePageChange(pagination.current_page + 1)}
//                                                     disabled={pagination.current_page === pagination.last_page || loading.products}
//                                                 >
//                                                     <i className="ci-chevron-right"></i>
//                                                 </button>
//                                             </li>
//                                         </ul>
//                                     </nav>
//                                 )}

//                                 {/* Results Info */}
//                                 {filteredProducts.length > 0 && (
//                                     <div className="d-flex justify-content-between align-items-center pt-3 border-top">
//                                         <small className="text-muted">
//                                             Showing {((pagination.current_page - 1) * pagination.per_page) + 1} to {Math.min(pagination.current_page * pagination.per_page, pagination.total)} of {pagination.total} products
//                                         </small>
//                                         <div className="d-flex gap-2">
//                                             <select 
//                                                 className="form-select form-select-sm"
//                                                 value={pagination.per_page}
//                                                 onChange={(e) => handlePerPageChange(parseInt(e.target.value))}
//                                                 disabled={loading.products}
//                                                 style={{width: 'auto'}}
//                                             >
//                                                 <option value={5}>5 per page</option>
//                                                 <option value={10}>10 per page</option>
//                                                 <option value={25}>25 per page</option>
//                                                 <option value={50}>50 per page</option>
//                                             </select>
//                                         </div>
//                                     </div>
//                                 )}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </main>

//             {/* Bootstrap Modal Backdrop */}
//             {modalState.subscription.show && (
//                 <div className="modal-backdrop fade show"></div>
//             )}
//         </>
//     );
// };

// export default Products;

// 
// v5 - FULLY Fixed Pagination - No More Resets
// import { useState, useEffect, useMemo } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import LoadingSpinner, { LoadingZoom } from '../../../components/shared/LoadingSpinner';
// import SubscriptionPlans from '../../../components/shared/modals/publish/Promote';
// import PublishPage from '../../../components/shared/modals/publish/PublishPage';
// import { NotificationService } from '../../../services/local/NotificationService';
// import { ProductAxiosService } from '../../../services/net/ProductAxiosService';
// import Aside from '../shared/Aside';
// import { UsersService } from '../../../services/local/UsersService';

// interface Product {
//     id: string;
//     name: string;
//     slug: string;
//     price: number;
//     original_price?: number;
//     discount?: number;
//     image_url: string;
//     status: 'active' | 'inactive' | 'archived' | 'draft';
//     sales_count: number;
//     earnings: number;
//     views_count: number;
//     favorites_count: number;
//     comments_count: number;
//     calls_count: number;
//     created_at: string;
//     updated_at: string;
//     is_promoted: boolean;
//     promotion_expires_at?: string;
//     image_urls?: string[];
//     reviews_count?: number;
// }

// interface ProductsResponse {
//     success: boolean;
//     products: Product[];
//     total: number;
//     current_page: number;
//     last_page: number;
//     per_page: number;
// }

// interface SortOption {
//     value: string;
//     label: string;
// }

// interface FilterOptions {
//     status: string;
//     search: string;
//     sortBy: string;
//     sortOrder: 'asc' | 'desc';
// }

// const Products = () => {
//     const navigate = useNavigate();
//     const [products, setProducts] = useState<Product[]>([]);
//     const [loading, setLoading] = useState({
//         products: true,
//         action: false
//     });
//     const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
//     const [filters, setFilters] = useState<FilterOptions>({
//         status: 'all',
//         search: '',
//         sortBy: 'created_at',
//         sortOrder: 'desc'
//     });
//     const [pagination, setPagination] = useState({
//         current_page: 1,
//         last_page: 1,
//         total: 0,
//         per_page: 5
//     });
//     const [modalState, setModalState] = useState({
//         subscription: { show: false, productId: '' },
//         publish: { show: false, productId: '' },
//         delete: { show: false, productId: '' }
//     });

//     const sortOptions: SortOption[] = [
//         { value: 'created_at', label: 'Date Created' },
//         { value: 'name', label: 'Product Name' },
//         { value: 'sales_count', label: 'Sales Count' },
//         { value: 'earnings', label: 'Earnings' },
//         { value: 'views_count', label: 'Views' },
//         { value: 'price', label: 'Price' }
//     ];

//     // Get current user
//     const currentUser = UsersService.getCurrentUser();
//     const username = currentUser?.username || currentUser?.email;

//     // Notification subscription
//     useEffect(() => {
//         const observer = (data: any) => {
//             // Handle notification updates if needed
//         };

//         NotificationService.subscribe(observer);
//         return () => {
//             NotificationService.unsubscribe(observer);
//         };
//     }, []);

//     // FIXED: Separate useEffect hooks to prevent pagination reset
//     // This one resets pagination when filters change
//     useEffect(() => {
//         setPagination(prev => ({ ...prev, current_page: 1 }));
//     }, [filters.status, filters.search, filters.sortBy, filters.sortOrder]);

//     // This one triggers data fetch when pagination changes
//     useEffect(() => {
//         fetchProducts();
//     }, [pagination.current_page, pagination.per_page]);

//     // Initial load
//     useEffect(() => {
//         fetchProducts();
//     }, []);

//     // FIXED: fetchProducts no longer overwrites current_page
//     const fetchProducts = async () => {
//         try {
//             setLoading(prev => ({ ...prev, products: true }));
            
//             const params = {
//                 page: pagination.current_page,
//                 per_page: pagination.per_page,
//                 status: filters.status !== 'all' ? filters.status : undefined,
//                 search: filters.search || undefined,
//                 sort_by: filters.sortBy,
//                 sort_order: filters.sortOrder
//             };

//             console.log('Fetching products for page:', params.page); // Debug log

//             const response = await ProductAxiosService.getByOwner(params, username);
            
//             if (response.data.success) {
//                 setProducts(response.data.products);
                
//                 // CRITICAL FIX: Don't overwrite current_page - only update metadata
//                 setPagination(prev => ({
//                     ...prev,
//                     // current_page: response.data.page_meta.current_page_number, ❌ REMOVED THIS LINE
//                     last_page: response.data.page_meta.total_pages_count,
//                     total: response.data.page_meta.total_items_count,
//                     per_page: response.data.page_meta.requested_page_size
//                 }));

//                 console.log('Successfully loaded page:', pagination.current_page); // Debug log
//             } else {
//                 NotificationService.showDialog(response.data.error || 'Failed to load products', 'error');
//                 setProducts([]);
//             }
//         } catch (err: any) {
//             const errorMessage = err.response?.data?.error || err.message || 'Failed to load products';
//             NotificationService.showDialog(errorMessage, 'error');
//             setProducts([]);
//         } finally {
//             setLoading(prev => ({ ...prev, products: false }));
//         }
//     };

//     // FIXED: Filter handlers no longer directly call fetchProducts
//     const handleSearch = (searchTerm: string) => {
//         setFilters(prev => ({ ...prev, search: searchTerm }));
//         // Page reset happens in useEffect above
//     };

//     const handleSort = (sortBy: string) => {
//         setFilters(prev => ({
//             ...prev,
//             sortBy,
//             sortOrder: prev.sortBy === sortBy && prev.sortOrder === 'asc' ? 'desc' : 'asc'
//         }));
//         // Page reset happens in useEffect above
//     };

//     const handleStatusFilter = (status: string) => {
//         setFilters(prev => ({ ...prev, status }));
//         // Page reset happens in useEffect above
//     };

//     // FIXED: Pagination handlers with debug logging
//     const handlePageChange = (newPage: number) => {
//         if (newPage >= 1 && newPage <= pagination.last_page && newPage !== pagination.current_page) {
//             console.log('Changing from page', pagination.current_page, 'to page', newPage); // Debug log
//             setPagination(prev => ({ ...prev, current_page: newPage }));
//         }
//     };

//     const handlePerPageChange = (newPerPage: number) => {
//         console.log('Changing per_page to:', newPerPage); // Debug log
//         setPagination(prev => ({ 
//             ...prev, 
//             per_page: newPerPage,
//             current_page: 1 
//         }));
//     };

//     const handleProductSelect = (productId: string, isSelected: boolean) => {
//         setSelectedProducts(prev =>
//             isSelected
//                 ? [...prev, productId]
//                 : prev.filter(id => id !== productId)
//         );
//     };

//     const handleSelectAll = (isSelected: boolean) => {
//         setSelectedProducts(isSelected ? products.map(product => product.id) : []);
//     };

//     const handleEditProduct = (productId: string) => {
//         navigate(`/users/products/${productId}/edit`);
//     };

//     const handlePromoteProduct = (productId: string) => {
//         setModalState(prev => ({
//             ...prev,
//             subscription: { show: true, productId }
//         }));
//     };

//     const handlePublishProduct = (productId: string) => {
//         setModalState(prev => ({
//             ...prev,
//             publish: { show: true, productId }
//         }));
//     };

//     const handleArchiveProduct = async (productId: string) => {
//         try {
//             setLoading(prev => ({ ...prev, action: true }));
//             NotificationService.showDialog("Archiving product...", "primary");
            
//             await ProductAxiosService.updateProductStatus(productId, 'archived');
            
//             setProducts(prev => 
//                 prev.map(product =>   
//                     product.id === productId 
//                         ? { ...product, status: 'archived' as const }
//                         : product
//                 )
//             );
            
//             NotificationService.showDialog("Product archived successfully", "success");
//         } catch (err: any) {
//             const errorMessage = err.response?.data?.error || err.message || 'Failed to archive product';
//             NotificationService.showDialog(errorMessage, 'error');
//         } finally {
//             setLoading(prev => ({ ...prev, action: false }));
//         }
//     };

//     const handleDeleteProduct = async (productId: string) => {
//         try {
//             setLoading(prev => ({ ...prev, action: true }));
//             NotificationService.showDialog("Deleting product...", "primary");
            
//             await ProductAxiosService.deleteProduct(productId);
            
//             setProducts(prev => prev.filter(product => product.id !== productId));
//             setSelectedProducts(prev => prev.filter(id => id !== productId));
            
//             NotificationService.showDialog("Product deleted successfully", "success");
            
//             // FIXED: Refresh data after deletion to update pagination if needed
//             setTimeout(() => fetchProducts(), 100);
//         } catch (err: any) {
//             const errorMessage = err.response?.data?.error || err.message || 'Failed to delete product';
//             NotificationService.showDialog(errorMessage, 'error');
//         } finally {
//             setLoading(prev => ({ ...prev, action: false }));
//         }
//     };

//     const handleBulkDelete = async () => {
//         if (selectedProducts.length === 0) return;
        
//         try {
//             setLoading(prev => ({ ...prev, action: true }));
//             NotificationService.showDialog("Deleting selected products...", "primary");
            
//             await Promise.all(
//                 selectedProducts.map(productId => 
//                     ProductAxiosService.deleteProduct(productId)
//                 )
//             );
            
//             setProducts(prev => 
//                 prev.filter(product => !selectedProducts.includes(product.id))
//             );
//             setSelectedProducts([]);
            
//             NotificationService.showDialog("Selected products deleted successfully", "success");
            
//             // FIXED: Refresh data after bulk deletion
//             setTimeout(() => fetchProducts(), 100);
//         } catch (err: any) {
//             const errorMessage = err.response?.data?.error || err.message || 'Failed to delete products';
//             NotificationService.showDialog(errorMessage, 'error');
//         } finally {
//             setLoading(prev => ({ ...prev, action: false }));
//         }
//     };

//     const handleBulkArchive = async () => {
//         if (selectedProducts.length === 0) return;
        
//         try {
//             setLoading(prev => ({ ...prev, action: true }));
//             NotificationService.showDialog("Archiving selected products...", "primary");
            
//             await Promise.all(
//                 selectedProducts.map(productId => 
//                     ProductAxiosService.updateProductStatus(productId, 'archived')
//                 )
//             );
            
//             setProducts(prev => 
//                 prev.map(product => 
//                     selectedProducts.includes(product.id)
//                         ? { ...product, status: 'archived' as const }
//                         : product
//                 )
//             );
//             setSelectedProducts([]);
            
//             NotificationService.showDialog("Selected products archived successfully", "success");
//         } catch (err: any) {
//             const errorMessage = err.response?.data?.error || err.message || 'Failed to archive products';
//             NotificationService.showDialog(errorMessage, 'error');
//         } finally {
//             setLoading(prev => ({ ...prev, action: false }));
//         }
//     };

//     const getStatusBadgeClass = (status: string) => {
//         switch (status) {
//             case 'active':
//                 return 'text-success bg-success-subtle';
//             case 'inactive':
//                 return 'text-secondary bg-secondary-subtle';
//             case 'archived':
//                 return 'text-warning bg-warning-subtle';
//             case 'draft':
//                 return 'text-info bg-info-subtle';
//             default:
//                 return 'text-muted bg-body-secondary';
//         }
//     };

//     const formatCurrency = (amount: number) => {
//         return new Intl.NumberFormat('en-NG', {
//             style: 'currency',
//             currency: 'NGN'
//         }).format(amount);
//     };

//     const formatNumber = (num: number) => {
//         return new Intl.NumberFormat().format(num);
//     };

//     const filteredProducts = products;

//     const handleSubscriptionSuccess = (subscription: any) => {
//         setModalState(prev => ({
//             ...prev,
//             subscription: { show: false, productId: '' }
//         }));
        
//         setProducts(prev => 
//             prev.map(product => 
//                 product.id === modalState.subscription.productId
//                     ? { 
//                         ...product, 
//                         is_promoted: true,
//                         promotion_expires_at: subscription.expires_at 
//                     }
//                     : product
//             )
//         );
        
//         NotificationService.showDialog("Product promotion activated successfully!", "success");
//         fetchProducts();
//     };

//     const handlePublishSuccess = () => {
//         setModalState(prev => ({
//             ...prev,
//             publish: { show: false, productId: '' }
//         }));
        
//         NotificationService.showDialog("Product published successfully!", "success");
//         fetchProducts();
//     };

//     // Debug logs
//     useEffect(() => {
//         console.log('Current pagination state:', pagination);
//     }, [pagination]);

//     useEffect(() => {
//         console.log('Current filters:', filters);
//     }, [filters]);

//     if (loading.products && products.length === 0) {
//         return (
//             <main className="content-wrapper">
//                 <div className="container pt-4 pt-lg-5 pb-5">
//                     <div className="text-center py-5">
//                         <LoadingSpinner />
//                         <p className="mt-3">Loading your products...</p>
//                     </div>
//                 </div>
//             </main>
//         );
//     }

//     return (
//         <>
//             {/* Subscription Modal */}
//             <div 
//                 className={`modal fade ${modalState.subscription.show ? 'show' : ''}`} 
//                 style={{ display: modalState.subscription.show ? 'block' : 'none' }}
//                 tabIndex={-1}
//             >
//                 <div className="modal-dialog modal-lg modal-dialog-scrollable">
//                     <div className="modal-content">
//                         <div className="modal-header">
//                             <h5 className="modal-title">
//                                 <i className="ci-zap me-2"></i>
//                                 Promote Your Product
//                             </h5>
//                             <button 
//                                 type="button" 
//                                 className="btn-close" 
//                                 onClick={() => setModalState(prev => ({
//                                     ...prev,
//                                     subscription: { show: false, productId: '' }
//                                 }))}
//                             ></button>
//                         </div>
//                         <div className="modal-body">
//                             <div className="mb-4">
//                                 <h6 className="text-muted">Choose a promotion plan to boost your product visibility</h6>
//                             </div>
//                             <SubscriptionPlans
//                                 entityType="product"
//                                 entityId={modalState.subscription.productId}
//                                 onSubscriptionSuccess={handleSubscriptionSuccess}
//                             />
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Publish Modal */}
//             {modalState.publish.show && (
//                 <PublishPage
//                     productSlug=''
//                     editProductData={''}
//                     onSuccess={handlePublishSuccess}
//                     onClose={() => setModalState(prev => ({
//                         ...prev,
//                         publish: { show: false, productId: '' }
//                     }))}
//                 />
//             )}

//             {/* Main Content */}
//             <main className="content-wrapper">
//                 <div className="container pt-4 pt-lg-5 pb-5">
//                     <div className="row pt-sm-2 pt-md-3 pt-lg-0 pb-2 pb-sm-3 pb-md-4 pb-lg-5">
//                         <Aside />

//                         <div className="col-lg-9 pt-2 pt-xl-3">
//                             <div data-filter-list='{"searchClass": "product-search", "listClass": "product-list", "sortClass": "product-sort", "valueNames": ["product", "status", "sales", "earnings"]}'>
                                
//                                 {/* Header */}
//                                 <div className="d-sm-flex align-items-center justify-content-between gap-3 pb-2 pb-sm-3 mb-md-2">
//                                     <h1 className="h2 text-nowrap mb-sm-0">
//                                         Products     
//                                     </h1>
                                    
//                                     <div className="d-flex gap-2 align-items-center">
//                                         <div className="position-relative" style={{maxWidth: '300px'}}>
//                                             <i className="ci-search position-absolute top-50 start-0 translate-middle-y ms-3" />
//                                             <input 
//                                                 type="search" 
//                                                 className="product-search form-control form-icon-start rounded-pill" 
//                                                 placeholder="Search products..."
//                                                 value={filters.search}
//                                                 onChange={(e) => handleSearch(e.target.value)}
//                                                 disabled={loading.products}
//                                             />
//                                         </div>
//                                         <button
//                                             className="btn btn-primary rounded-pill"
//                                             onClick={() => navigate(`/users/${username}`)}
//                                         >
//                                             <i className="ci-meh me-1"></i>
//                                             My Sales-page
//                                         </button>
//                                     </div>
//                                 </div>

//                                 {/* Filters and Controls */}
//                                 <div className="row align-items-center mb-4">
//                                     <div className="col-md-6">
//                                         <div className="d-flex gap-2 mb-2 flex-wrap">
//                                             <div className="dropdown">
//                                                 <button 
//                                                     className="btn btn-outline-secondary dropdown-toggle rounded-pill" 
//                                                     type="button" 
//                                                     data-bs-toggle="dropdown"
//                                                     disabled={loading.products}
//                                                 >
//                                                     Status: {filters.status === 'all' ? 'All' : filters.status}
//                                                 </button>
//                                                 <ul className="dropdown-menu">
//                                                     <li><button className="dropdown-item" onClick={() => handleStatusFilter('all')}>All</button></li>
//                                                     <li><button className="dropdown-item" onClick={() => handleStatusFilter('active')}>Active</button></li>
//                                                     <li><button className="dropdown-item" onClick={() => handleStatusFilter('inactive')}>Inactive</button></li>
//                                                     <li><button className="dropdown-item" onClick={() => handleStatusFilter('archived')}>Archived</button></li>
//                                                     <li><button className="dropdown-item" onClick={() => handleStatusFilter('draft')}>Draft</button></li>
//                                                 </ul>
//                                             </div>
                                            
//                                             <div className="dropdown">
//                                                 <button 
//                                                     className="btn btn-outline-secondary dropdown-toggle rounded-pill" 
//                                                     type="button" 
//                                                     data-bs-toggle="dropdown"
//                                                     disabled={loading.products}
//                                                 >
//                                                     Sort by: {sortOptions.find(opt => opt.value === filters.sortBy)?.label}
//                                                     {filters.sortOrder === 'desc' ? ' ↓' : ' ↑'}
//                                                 </button>
//                                                 <ul className="dropdown-menu">
//                                                     {sortOptions.map(option => (
//                                                         <li key={option.value}>
//                                                             <button 
//                                                                 className="dropdown-item" 
//                                                                 onClick={() => handleSort(option.value)}
//                                                             >
//                                                                 {option.label}
//                                                             </button>
//                                                         </li>
//                                                     ))}
//                                                 </ul>
//                                             </div>
//                                         </div>
//                                     </div>
                                    
//                                     {selectedProducts.length > 0 && (
//                                         <div className="col-md-6">
//                                             <div className="d-flex justify-content-md-end gap-1">
//                                                 <span className="badge animate-target d-inline-flex text-decoration-none align-items-center text-info bg-info-subtle fw-semibold rounded-pill">
//                                                     {selectedProducts.length} selected
//                                                 </span>
//                                                 <button
//                                                     className="btn btn-outline-warning btn-sm rounded-pill"
//                                                     onClick={handleBulkArchive}
//                                                     disabled={loading.action}
//                                                 >
//                                                     <i className="ci-archive me-1"></i>
//                                                     Archive
//                                                 </button>
//                                                 <button
//                                                     className="btn btn-outline-danger btn-sm rounded-pill"
//                                                     onClick={handleBulkDelete}
//                                                     disabled={loading.action}
//                                                 >
//                                                     <i className="ci-trash me-1"></i>
//                                                     Delete
//                                                 </button>
//                                             </div>
//                                         </div>
//                                     )}
//                                 </div>

//                                 {/* Products Table */}
//                                 <div className="table-responsive">
//                                     <table className="table align-middle fs-sm mb-0">
//                                         <thead>
//                                             <tr>
//                                                 <th className="ps-0" scope="col" style={{width: '40px'}}>
//                                                     <div className="form-check">
//                                                         <input
//                                                             type="checkbox"
//                                                             className="form-check-input"
//                                                             checked={selectedProducts.length === filteredProducts.length && filteredProducts.length > 0}
//                                                             onChange={(e) => handleSelectAll(e.target.checked)}
//                                                             disabled={loading.products || filteredProducts.length === 0}
//                                                         />
//                                                     </div>
//                                                 </th>
//                                                 <th className="ps-0" scope="col">
//                                                     <button 
//                                                         type="button" 
//                                                         className="btn fw-normal text-body product-sort p-0" 
//                                                         onClick={() => handleSort('name')}
//                                                     >
//                                                         Product
//                                                         {filters.sortBy === 'name' && (
//                                                             <i className={`ci-chevron-${filters.sortOrder === 'asc' ? 'up' : 'down'} ms-1`}></i>
//                                                         )}
//                                                     </button>
//                                                     <span className='animate-pulse'> 
//                                                         <i className="ci-bullet"></i> 
//                                                         <Link to={`/users/${username}`} className="badge animate-target d-inline-flex text-decoration-none align-items-center text-info bg-info-subtle fw-semibold rounded-pill">
//                                                             {pagination.total}
//                                                             <i className="ci-arrow-up-right fs-sm ms-1"></i>
//                                                             {loading.products && (<LoadingZoom size='sm' />)}
//                                                         </Link>
//                                                     </span>
//                                                 </th>
//                                                 <th className="d-none d-md-table-cell" scope="col">
//                                                     <span className="fw-normal text-body">Status</span>
//                                                 </th>
//                                                 <th className="text-end d-none d-md-table-cell" scope="col">
//                                                     <button 
//                                                         type="button" 
//                                                         className="btn fw-normal text-body product-sort p-0 me-n2" 
//                                                         onClick={() => handleSort('sales_count')}
//                                                     >
//                                                         Sales
//                                                         {filters.sortBy === 'sales_count' && (
//                                                             <i className={`ci-chevron-${filters.sortOrder === 'asc' ? 'up' : 'down'} ms-1`}></i>
//                                                         )}
//                                                     </button>
//                                                 </th>
//                                                 <th className="text-end d-none d-sm-table-cell" scope="col">
//                                                     <button 
//                                                         type="button" 
//                                                         className="btn fw-normal text-body product-sort p-0 me-n2" 
//                                                         onClick={() => handleSort('earnings')}
//                                                     >
//                                                         Earnings
//                                                         {filters.sortBy === 'earnings' && (
//                                                             <i className={`ci-chevron-${filters.sortOrder === 'asc' ? 'up' : 'down'} ms-1`}></i>
//                                                         )}
//                                                     </button>
//                                                 </th>
//                                                 <th className="text-end ps-0 ps-sm-3 pe-0" scope="col">
//                                                     <span className="fw-normal text-body">Action</span>
//                                                 </th>
//                                             </tr>
//                                         </thead>
//                                         <tbody className="product-list">
//                                             {loading.products ? (
//                                                 <tr>
//                                                     <td colSpan={6} className="text-center py-5">
//                                                         <LoadingSpinner size="sm" />
//                                                         <span className="ms-2">Loading products...</span>
//                                                     </td>
//                                                 </tr>
//                                             ) : filteredProducts.length === 0 ? (
//                                                 <tr>
//                                                     <td colSpan={6} className="text-center py-5">
//                                                         <i className="ci-package display-4 text-muted mb-3"></i>
//                                                         <h5 className="text-muted">No products found</h5>
//                                                         <p className="text-muted">
//                                                             {filters.search || filters.status !== 'all' 
//                                                                 ? 'Try adjusting your filters or search terms.'
//                                                                 : 'Start by creating your first product.'
//                                                             }
//                                                         </p>
//                                                         {!filters.search && filters.status === 'all' && (
//                                                             <button
//                                                                 className="btn btn-primary"
//                                                                 onClick={() => navigate('/account/products/create')}
//                                                             >
//                                                                 <i className="ci-plus me-1"></i>
//                                                                 Create Product
//                                                             </button>
//                                                         )}
//                                                     </td>
//                                                 </tr>
//                                             ) : (
//                                                 filteredProducts.map((product) => (
//                                                     <tr key={product.id}>
//                                                         <td className="py-3 ps-0">
//                                                             <div className="form-check">
//                                                                 <input
//                                                                     type="checkbox"
//                                                                     className="form-check-input"
//                                                                     checked={selectedProducts.includes(product.id)}
//                                                                     onChange={(e) => handleProductSelect(product.id, e.target.checked)}
//                                                                 />
//                                                             </div>
//                                                         </td>
//                                                         <td className="py-3 ps-0">
//                                                             <div className="d-flex align-items-start align-items-md-center hover-effect-scale position-relative py-1">
//                                                                 <div className="ratio bg-body-secondary rounded overflow-hidden flex-shrink-sm-0" style={{"--cz-aspect-ratio": 'calc(110 / 142 * 100%)', maxWidth: '142px'}}>
//                                                                     <img src={product.image_urls?.[0] || product.image_url || '/assets/img/placeholder.jpg'} 
//                                                                         className="hover-effect-target" 
//                                                                         alt={product.name}
//                                                                         onError={(e) => {
//                                                                             e.currentTarget.src = '/assets/img/placeholder.jpg';
//                                                                         }}
//                                                                     />
//                                                                     {product.is_promoted && (
//                                                                         <div className="position-absolute top-0 start-0 m-2">
//                                                                             <span className="badge bg-warning text-dark">
//                                                                                 <i className="ci-zap me-1"></i>
//                                                                                 Promoted
//                                                                             </span>
//                                                                         </div>
//                                                                     )}
//                                                                 </div>
//                                                                 <div className="ps-2 ps-sm-3 ms-1">
//                                                                     <span className={`badge fs-xs ${getStatusBadgeClass(product.status)} rounded-pill d-md-none mb-1`}>
//                                                                         {product.status}
//                                                                     </span>
//                                                                     <h6 className="product mb-2">
//                                                                         <a 
//                                                                             className="fs-sm fw-medium hover-effect-underline stretched-link" 
//                                                                             href={`/products/${product.slug}`}
//                                                                             target="_blank"
//                                                                             rel="noopener noreferrer"
//                                                                         >
//                                                                             {product.name}
//                                                                         </a>
//                                                                     </h6>
//                                                                     <div className="d-flex flex-md-column align-items-center align-items-md-start gap-2">
//                                                                         <div className="h6 mb-0 me-1 me-md-0">
//                                                                             {formatCurrency(product.price)}
//                                                                             {product.original_price && (
//                                                                                 <del className="text-muted fs-sm ms-1">
//                                                                                     {formatCurrency(product.original_price)}
//                                                                                 </del>
//                                                                             )}
//                                                                         </div>
//                                                                         <div className="d-flex gap-2">
//                                                                             <div className="d-flex align-items-center fs-xs text-body-emphasis bg-body-tertiary rounded-pill px-2 py-1">
//                                                                                 <i className="ci-heart text-body-secondary me-1" />
//                                                                                 {formatNumber(product.favorites_count)}
//                                                                             </div>
//                                                                             <div className="d-flex align-items-center fs-xs text-body-emphasis bg-body-tertiary rounded-pill px-2 py-1">
//                                                                                 <i className="ci-message-circle text-body-secondary me-1" />
//                                                                                 {formatNumber(product.reviews_count || product.comments_count)}
//                                                                             </div>
//                                                                         </div> 
//                                                                     </div>
//                                                                     <div className="fs-xs text-nowrap d-md-none mt-2 mb-1">
//                                                                         <span className="text-body-secondary">Sales:</span> {formatNumber(product.sales_count)}
//                                                                     </div>
//                                                                     <div className="fs-xs text-nowrap d-sm-none">
//                                                                         <span className="text-body-secondary">Earnings:</span> {formatCurrency(product.earnings)}
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                         </td>
//                                                         <td className="d-none d-md-table-cell py-3">
//                                                             <span className={`status badge fs-xs ${getStatusBadgeClass(product.status)} rounded-pill`}>
//                                                                 {product.status}
//                                                             </span>
//                                                         </td>
//                                                         <td className="sales d-none d-md-table-cell text-end py-3">
//                                                             {formatNumber(product.sales_count)}
//                                                         </td>
//                                                         <td className="text-end d-none d-sm-table-cell py-3">
//                                                             {formatCurrency(product.earnings)}
//                                                             <span className="earnings visually-hidden">{product.earnings}</span>
//                                                         </td>
//                                                         <td className="text-end py-3 ps-0 ps-sm-3 pe-0">
//                                                             <div className="dropdown">
//                                                                 <button 
//                                                                     type="button" 
//                                                                     className="btn btn-icon btn-ghost btn-sm btn-secondary rounded-circle" 
//                                                                     data-bs-toggle="dropdown" 
//                                                                     aria-expanded="false" 
//                                                                     aria-label="Settings"
//                                                                     disabled={loading.action}
//                                                                 >
//                                                                     {loading.action ? (
//                                                                         <span className="spinner-border spinner-border-sm" role="status"></span>
//                                                                     ) : (
//                                                                         <i className="ci-more-vertical fs-base" />
//                                                                     )}
//                                                                 </button>
//                                                                 <ul className="dropdown-menu dropdown-menu-end">
//                                                                     <li>
//                                                                         <button 
//                                                                             className="dropdown-item"
//                                                                             onClick={() => handleEditProduct(product.id)}
//                                                                         >
//                                                                             <i className="ci-edit opacity-75 me-2" />
//                                                                             Edit
//                                                                         </button>
//                                                                     </li>
//                                                                     <li>
//                                                                         <button 
//                                                                             className="dropdown-item"
//                                                                             onClick={() => handlePromoteProduct(product.id)}
//                                                                         >
//                                                                             <i className="ci-zap fs-base opacity-75 me-2" />
//                                                                             Promote
//                                                                         </button>
//                                                                     </li>
//                                                                     <li>
//                                                                         <button 
//                                                                             className="dropdown-item"
//                                                                             onClick={() => handlePublishProduct(product.id)}
//                                                                         >
//                                                                             <i className="ci-share opacity-75 me-2" />
//                                                                             Publish
//                                                                         </button>
//                                                                     </li>
//                                                                     <li><hr className="dropdown-divider" /></li>
//                                                                     <li>
//                                                                         <button 
//                                                                             className="dropdown-item"
//                                                                             onClick={() => handleArchiveProduct(product.id)}
//                                                                         >
//                                                                             <i className="ci-archive opacity-75 me-2" />
//                                                                             Move to archive
//                                                                         </button>
//                                                                     </li>
//                                                                     <li>
//                                                                         <button 
//                                                                             className="dropdown-item text-danger"
//                                                                             onClick={() => handleDeleteProduct(product.id)}
//                                                                         >
//                                                                             <i className="ci-trash opacity-75 me-2" />
//                                                                             Delete
//                                                                         </button>
//                                                                     </li>
//                                                                 </ul>
//                                                             </div>
//                                                         </td>
//                                                     </tr>
//                                                 ))
//                                             )}
//                                         </tbody>
//                                     </table>
//                                 </div>

//                                 {/* FIXED Pagination - Now properly maintains current page */}
//                                 {pagination.last_page > 1 && (
//                                     <nav className="d-flex justify-content-center pt-4" aria-label="Products pagination">
//                                         <ul className="pagination">
//                                             <li className={`page-item ${pagination.current_page === 1 ? 'disabled' : ''}`}>
//                                                 <button 
//                                                     className="page-link"
//                                                     onClick={() => handlePageChange(pagination.current_page - 1)}
//                                                     disabled={pagination.current_page === 1 || loading.products}
//                                                     title="Previous Page"
//                                                 >
//                                                     <i className="ci-chevron-left"></i>
//                                                 </button>
//                                             </li>
                                            
//                                             {Array.from({ length: Math.min(5, pagination.last_page) }, (_, i) => {
//                                                 let pageNum;
//                                                 if (pagination.last_page <= 5) {
//                                                     pageNum = i + 1;
//                                                 } else if (pagination.current_page <= 3) {
//                                                     pageNum = i + 1;
//                                                 } else if (pagination.current_page >= pagination.last_page - 2) {
//                                                     pageNum = pagination.last_page - 4 + i;
//                                                 } else {
//                                                     pageNum = pagination.current_page - 2 + i;
//                                                 }
                                                
//                                                 return (
//                                                     <li key={pageNum} className={`page-item ${pagination.current_page === pageNum ? 'active' : ''}`}>
//                                                         <button 
//                                                             className="page-link"
//                                                             onClick={() => handlePageChange(pageNum)}
//                                                             disabled={loading.products}
//                                                             title={`Page ${pageNum}`}
//                                                         >
//                                                             {pageNum}
//                                                         </button>
//                                                     </li>
//                                                 );
//                                             })}
                                            
//                                             <li className={`page-item ${pagination.current_page === pagination.last_page ? 'disabled' : ''}`}>
//                                                 <button 
//                                                     className="page-link"
//                                                     onClick={() => handlePageChange(pagination.current_page + 1)}
//                                                     disabled={pagination.current_page === pagination.last_page || loading.products}
//                                                     title="Next Page"
//                                                 >
//                                                     <i className="ci-chevron-right"></i>
//                                                 </button>
//                                             </li>
//                                         </ul>
//                                     </nav>
//                                 )}

//                                 {/* Results Info */}
//                                 {filteredProducts.length > 0 && (
//                                     <div className="d-flex justify-content-between align-items-center pt-3 border-top">
//                                         <small className="text-muted">
//                                             Showing {((pagination.current_page - 1) * pagination.per_page) + 1} to {Math.min(pagination.current_page * pagination.per_page, pagination.total)} of {pagination.total} products
//                                         </small>
//                                         <div className="d-flex gap-2">
//                                             <select 
//                                                 className="form-select form-select-sm"
//                                                 value={pagination.per_page}
//                                                 onChange={(e) => handlePerPageChange(parseInt(e.target.value))}
//                                                 disabled={loading.products}
//                                                 style={{width: 'auto'}}
//                                             >
//                                                 <option value={5}>5 per page</option>
//                                                 <option value={10}>10 per page</option>
//                                                 <option value={25}>25 per page</option>
//                                                 <option value={50}>50 per page</option>
//                                             </select>
//                                         </div>
//                                     </div>
//                                 )}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </main>

//             {/* Bootstrap Modal Backdrop */}
//             {modalState.subscription.show && (
//                 <div className="modal-backdrop fade show"></div>
//             )}
//         </>
//     );
// };

// export default Products;


// v6 - FINAL FIX: Solved React State Closure Issue
import { useState, useEffect, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LoadingSpinner, { LoadingZoom } from '../../../components/shared/LoadingSpinner';
import SubscriptionPlans from '../../../components/shared/modals/publish/Promote';
import PublishPage from '../../../components/shared/modals/publish/PublishPage';
import { NotificationService } from '../../../services/local/NotificationService';
import { ProductAxiosService } from '../../../services/net/ProductAxiosService';
import Aside from '../shared/Aside';
import { UsersService } from '../../../services/local/UsersService';
import { useRef } from 'react';

interface Product {
    id: string;
    name: string;
    slug: string;
    price: number;
    original_price?: number;
    discount?: number;
    image_url: string;
    status: 'active' | 'inactive' | 'archived' | 'draft';
    sales_count: number;
    earnings: number;
    views_count: number;
    favorites_count: number;
    comments_count: number;
    calls_count: number;
    created_at: string;
    updated_at: string;
    is_promoted: boolean;
    promotion_expires_at?: string;
    image_urls?: string[];
    reviews_count?: number;
}

interface ProductsResponse {
    success: boolean;
    products: Product[];
    total: number;
    current_page: number;
    last_page: number;
    per_page: number;
}

interface SortOption {
    value: string;
    label: string;
}

interface FilterOptions {
    status: string;
    search: string;
    sortBy: string;
    sortOrder: 'asc' | 'desc';
}

const Products = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState({
        products: true,
        action: false
    });
    const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
    const [filters, setFilters] = useState<FilterOptions>({
        status: 'all',
        search: '',
        sortBy: 'created_at',
        sortOrder: 'desc'
    });
    const [pagination, setPagination] = useState({
        current_page: 1,
        last_page: 1,
        total: 0,
        per_page: 5
    });
    const [modalState, setModalState] = useState({
        subscription: { show: false, productId: '' },
        publish: { show: false, productId: '' },
        delete: { show: false, productId: '' }
    });

    const sortOptions: SortOption[] = [
        { value: 'created_at', label: 'Date Created' },
        { value: 'name', label: 'Product Name' },
        { value: 'sales_count', label: 'Sales Count' },
        { value: 'earnings', label: 'Earnings' },
        { value: 'views_count', label: 'Views' },
        { value: 'price', label: 'Price' }
    ];

    // Get current user
    const currentUser = UsersService.getCurrentUser();
    const username = currentUser?.username || currentUser?.email;

    // Notification subscription
    useEffect(() => {
        const observer = (data: any) => {
            // Handle notification updates if needed
        };

        NotificationService.subscribe(observer);
        return () => {
            NotificationService.unsubscribe(observer);
        };
    }, []);

    // CRITICAL FIX: Modified fetchProducts to accept parameters directly
    // This prevents React state closure issues
    const fetchProducts = async (
        currentPage?: number, 
        perPage?: number, 
        currentFilters?: FilterOptions
    ) => {
        try {
            setLoading(prev => ({ ...prev, products: true }));
            
            // Use parameters if provided, otherwise use current state
            const pageToFetch = currentPage ?? pagination.current_page;
            const itemsPerPage = perPage ?? pagination.per_page;
            const filtersToUse = currentFilters ?? filters;
            
            // Build params object, only including supported parameters
            const params: any = {
                page: pageToFetch,
                page_size: itemsPerPage, // ✅ FIXED: Backend expects 'page_size', not 'per_page'
            };

            // Only add filtering params if your backend supports them
            if (filtersToUse.status !== 'all') {
                params.status = filtersToUse.status;
            }
            if (filtersToUse.search) {
                params.search = filtersToUse.search;
            }
            if (filtersToUse.sortBy) {
                params.sort_by = filtersToUse.sortBy;
            }
            if (filtersToUse.sortOrder) {
                params.sort_order = filtersToUse.sortOrder;
            }

            console.log('Fetching products for page:', params.page); // Debug log

            // const response = await ProductAxiosService.fetchPage(params, username);
            const response = await ProductAxiosService.getByOwner(params, username);
            
            if (response.data.success) {
                setProducts(response.data.products);
                
                // Update pagination metadata only
                setPagination(prev => ({
                    ...prev,
                    last_page: response.data.page_meta.total_pages_count,
                    total: response.data.page_meta.total_items_count,
                    per_page: response.data.page_meta.requested_page_size
                }));

                console.log('Successfully loaded page:', pageToFetch); // Debug log
            } else {
                NotificationService.showDialog(response.data.error || 'Failed to load products', 'error');
                setProducts([]);
            }
        } catch (err: any) {
            const errorMessage = err.response?.data?.error || err.message || 'Failed to load products';
            NotificationService.showDialog(errorMessage, 'error');
            setProducts([]);
        } finally {
            setLoading(prev => ({ ...prev, products: false }));
        }
    };

    // Track if we need to fetch data
    const [shouldFetch, setShouldFetch] = useState(true);

    // FIXED: Reset pagination when filters change and fetch immediately
    useEffect(() => {
        console.log('Filters changed, resetting to page 1');
        setPagination(prev => ({ ...prev, current_page: 1 }));
        // Fetch with page 1 and new filters immediately
        fetchProducts(1, pagination.per_page, filters);
        setShouldFetch(false); // Prevent double fetch
    }, [filters.status, filters.search, filters.sortBy, filters.sortOrder]);

    // FIXED: Only fetch when shouldFetch is true (prevents double calls)
    useEffect(() => {
        if (shouldFetch) {
            console.log('shouldFetch is true, fetching products');
            fetchProducts();
            setShouldFetch(false);
        }
    }, [shouldFetch]);

    // Initial load only
    useEffect(() => {
        console.log('Component mounted, initial fetch');
        fetchProducts();
    }, []);

    // Filter handlers - now pass new filters directly to fetchProducts
    /*
    const handleSearch = (searchTerm: string) => {
        const newFilters = { ...filters, search: searchTerm };
        setFilters(newFilters);
        console.log('🔍 Search changed to:', searchTerm);
        // Reset to page 1 and fetch immediately
        setPagination(prev => ({ ...prev, current_page: 1 }));
        fetchProducts(1, pagination.per_page, newFilters);
    };
*/
    const searchTimeout = useRef<NodeJS.Timeout | null>(null);

    const handleSearch = (searchTerm: string) => {
    // update state right away so UI reflects input
    const newFilters = { ...filters, search: searchTerm };
    setFilters(newFilters);
    console.log("🔍 Search changed to:", searchTerm);

    // reset page
    setPagination((prev) => ({ ...prev, current_page: 1 }));

    // debounce API call
    if (searchTimeout.current) {
        clearTimeout(searchTimeout.current);
    }

    searchTimeout.current = setTimeout(() => {
        fetchProducts(1, pagination.per_page, newFilters);
    }, 500); // wait 500ms after last keystroke
    };

    const handleSort = (sortBy: string) => {
        const newFilters = {
            ...filters,
            sortBy,
            sortOrder: (filters.sortBy === sortBy && filters.sortOrder === 'asc' ? 'desc' : 'asc') as 'asc' | 'desc'
        };
        setFilters(newFilters);
        console.log('🔄 Sort changed to:', sortBy, newFilters.sortOrder);
        // Reset to page 1 and fetch immediately
        setPagination(prev => ({ ...prev, current_page: 1 }));
        fetchProducts(1, pagination.per_page, newFilters);
    };

    const handleStatusFilter = (status: string) => {
        const newFilters = { ...filters, status };
        setFilters(newFilters);
        console.log('📂 Status filter changed to:', status);
        // Reset to page 1 and fetch immediately
        setPagination(prev => ({ ...prev, current_page: 1 }));
        fetchProducts(1, pagination.per_page, newFilters);
    };

    // FIXED: Pagination handlers with immediate fetch and proper state management
    const handlePageChange = (newPage: number) => {
        if (newPage >= 1 && newPage <= pagination.last_page && newPage !== pagination.current_page) {
            console.log('Changing from page', pagination.current_page, 'to page', newPage);
            setPagination(prev => ({ ...prev, current_page: newPage }));
            // Fetch immediately with the new page number
            fetchProducts(newPage, pagination.per_page, filters);
        }
    };

    const handlePerPageChange = (newPerPage: number) => {
        console.log('Changing per_page from', pagination.per_page, 'to:', newPerPage);
        setPagination(prev => ({ 
            ...prev, 
            per_page: newPerPage,
            current_page: 1 
        }));
        // Fetch immediately with page 1 and new per_page
        fetchProducts(1, newPerPage, filters);
    };

    const handleProductSelect = (productId: string, isSelected: boolean) => {
        setSelectedProducts(prev =>
            isSelected
                ? [...prev, productId]
                : prev.filter(id => id !== productId)
        );
    };

    const handleSelectAll = (isSelected: boolean) => {
        setSelectedProducts(isSelected ? products.map(product => product.id) : []);
    };

    // const handleEditProduct = (productId: string) => {
    //     // navigate(`/users/products/${productId}/edit`);
    //     navigate(`/users/products/edit/${productId}`);
    //     // navigate(`/prducts/edit/${productId}`);
    // };

    const handleEditProduct = (productSlug: string) => {
        navigate(`/users/products/${productSlug}/edit`);
    };

    const handlePromoteProduct = (productId: string) => {
        setModalState(prev => ({
            ...prev,
            subscription: { show: true, productId }
        }));
    };

    const handlePublishProduct = (productId: string) => {
        setModalState(prev => ({
            ...prev,
            publish: { show: true, productId }
        }));
    };

    const handleArchiveProduct = async (productId: string) => {
        try {
            setLoading(prev => ({ ...prev, action: true }));
            NotificationService.showDialog("Archiving product...", "primary");
            
            await ProductAxiosService.updateProductStatus(productId, 'archived');
            
            setProducts(prev => 
                prev.map(product =>   
                    product.id === productId 
                        ? { ...product, status: 'archived' as const }
                        : product
                )
            );
            
            NotificationService.showDialog("Product archived successfully", "success");
        } catch (err: any) {
            const errorMessage = err.response?.data?.error || err.message || 'Failed to archive product';
            NotificationService.showDialog(errorMessage, 'error');
        } finally {
            setLoading(prev => ({ ...prev, action: false }));
        }
    };

    const handleDeleteProduct = async (productId: string) => {
        try {
            setLoading(prev => ({ ...prev, action: true }));
            NotificationService.showDialog("Deleting product...", "primary");
            
            await ProductAxiosService.deleteProduct(productId);
            
            setProducts(prev => prev.filter(product => product.id !== productId));
            setSelectedProducts(prev => prev.filter(id => id !== productId));
            
            NotificationService.showDialog("Product deleted successfully", "success");
            
            // Refresh data after deletion
            setTimeout(() => fetchProducts(), 100);
        } catch (err: any) {
            const errorMessage = err.response?.data?.error || err.message || 'Failed to delete product';
            NotificationService.showDialog(errorMessage, 'error');
        } finally {
            setLoading(prev => ({ ...prev, action: false }));
        }
    };

    const handleBulkDelete = async () => {
        if (selectedProducts.length === 0) return;
        
        try {
            setLoading(prev => ({ ...prev, action: true }));
            NotificationService.showDialog("Deleting selected products...", "primary");
            
            await Promise.all(
                selectedProducts.map(productId => 
                    ProductAxiosService.deleteProduct(productId)
                )
            );
            
            setProducts(prev => 
                prev.filter(product => !selectedProducts.includes(product.id))
            );
            setSelectedProducts([]);
            
            NotificationService.showDialog("Selected products deleted successfully", "success");
            
            // Refresh data after bulk deletion
            setTimeout(() => fetchProducts(), 100);
        } catch (err: any) {
            const errorMessage = err.response?.data?.error || err.message || 'Failed to delete products';
            NotificationService.showDialog(errorMessage, 'error');
        } finally {
            setLoading(prev => ({ ...prev, action: false }));
        }
    };

    const handleBulkArchive = async () => {
        if (selectedProducts.length === 0) return;
        
        try {
            setLoading(prev => ({ ...prev, action: true }));
            NotificationService.showDialog("Archiving selected products...", "primary");
            
            await Promise.all(
                selectedProducts.map(productId => 
                    ProductAxiosService.updateProductStatus(productId, 'archived')
                )
            );
            
            setProducts(prev => 
                prev.map(product => 
                    selectedProducts.includes(product.id)
                        ? { ...product, status: 'archived' as const }
                        : product
                )
            );
            setSelectedProducts([]);
            
            NotificationService.showDialog("Selected products archived successfully", "success");
        } catch (err: any) {
            const errorMessage = err.response?.data?.error || err.message || 'Failed to archive products';
            NotificationService.showDialog(errorMessage, 'error');
        } finally {
            setLoading(prev => ({ ...prev, action: false }));
        }
    };

    const getStatusBadgeClass = (status: string) => {
        switch (status) {
            case 'active':
                return 'text-success bg-success-subtle';
            case 'inactive':
                return 'text-secondary bg-secondary-subtle';
            case 'archived':
                return 'text-warning bg-warning-subtle';
            case 'draft':
                return 'text-info bg-info-subtle';
            default:
                return 'text-muted bg-body-secondary';
        }
    };

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('en-NG', {
            style: 'currency',
            currency: 'NGN'
        }).format(amount);
    };

    const formatNumber = (num: number) => {
        return new Intl.NumberFormat().format(num);
    };

    const filteredProducts = products;

    const handleSubscriptionSuccess = (subscription: any) => {
        setModalState(prev => ({
            ...prev,
            subscription: { show: false, productId: '' }
        }));
        
        setProducts(prev => 
            prev.map(product => 
                product.id === modalState.subscription.productId
                    ? { 
                        ...product, 
                        is_promoted: true,
                        promotion_expires_at: subscription.expires_at 
                    }
                    : product
            )
        );
        
        NotificationService.showDialog("Product promotion activated successfully!", "success");
        fetchProducts();
    };

    const handlePublishSuccess = () => {
        setModalState(prev => ({
            ...prev,
            publish: { show: false, productId: '' }
        }));
        
        NotificationService.showDialog("Product published successfully!", "success");
        fetchProducts();
    };

    // Debug logs
    useEffect(() => {
        console.log('Current pagination state:', pagination);
    }, [pagination]);

    useEffect(() => {
        console.log('Current filters:', filters);
    }, [filters]);

    if (loading.products && products.length === 0) {
        return (
            <main className="content-wrapper">
                <div className="container pt-4 pt-lg-5 pb-5">
                    <div className="text-center py-5">
                        <LoadingSpinner size='sm' />
                        <p className="mt-3">Loading your products...</p>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <>
            {/* Subscription Modal */}
            <div 
                className={`modal fade ${modalState.subscription.show ? 'show' : ''}`} 
                style={{ display: modalState.subscription.show ? 'block' : 'none' }}
                tabIndex={-1}
            >
                <div className="modal-dialog modal-lg modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">
                                <i className="ci-zap me-2"></i>
                                Promote Your Product
                            </h5>
                            <button 
                                type="button" 
                                className="btn-close" 
                                onClick={() => setModalState(prev => ({
                                    ...prev,
                                    subscription: { show: false, productId: '' }
                                }))}
                            ></button>
                        </div>
                        <div className="modal-body">
                            <div className="mb-4">
                                <h6 className="text-muted">Choose a promotion plan to boost your product visibility</h6>
                            </div>
                            <SubscriptionPlans
                                entityType="product"
                                entityId={modalState.subscription.productId}
                                onSubscriptionSuccess={handleSubscriptionSuccess}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Publish Modal */}
            {modalState.publish.show && (
                <PublishPage
                    productSlug=''
                    editProductData={''}
                    onSuccess={handlePublishSuccess}
                    onClose={() => setModalState(prev => ({
                        ...prev,
                        publish: { show: false, productId: '' }
                    }))}
                />
            )}

            {/* Main Content */}
            <main className="content-wrapper">
                <div className="container pt-4 pt-lg-5 pb-5">
                    <div className="row pt-sm-2 pt-md-3 pt-lg-0 pb-2 pb-sm-3 pb-md-4 pb-lg-5">
                        <Aside />

                        <div className="col-lg-9 pt-2 pt-xl-3">
                            <div data-filter-list='{"searchClass": "product-search", "listClass": "product-list", "sortClass": "product-sort", "valueNames": ["product", "status", "sales", "earnings"]}'>
                                
                                {/* Header */}
                                <div className="d-sm-flex align-items-center justify-content-between gap-3 pb-2 pb-sm-3 mb-md-2">
                                    <h1 className="h2 text-nowrap mb-sm-0">
                                        Products     
                                    </h1>
                                    
                                    <div className="d-flex gap-2 align-items-center">
                                        <div className="position-relative d-flex" style={{maxWidth: '300px'}}>
                                            <i className="ci-search position-absolute top-50 start-0 translate-middle-y ms-3" />
                                            {/* <input 
                                                type="search" 
                                                className="product-search form-control form-icon-start rounded-pill" 
                                                placeholder="Search products..."
                                                value={filters.search}
                                                onChange={(e) => handleSearch(e.target.value)}
                                                // disabled={loading.products}
                                            /> */}
                                            {loading.products && <LoadingZoom size='sm' />}
                                            <input 
                                            type="search" 
                                            className="product-search form-control form-icon-start rounded-pill" 
                                            placeholder="Search products..."
                                            value={filters.search}
                                            onChange={(e) => handleSearch(e.target.value)}
                                            />

                                            

                                        </div>
                                        <button
                                            className="btn btn-primary rounded-pill"
                                            onClick={() => navigate(`/users/${username}`)}
                                        >
                                            <i className="ci-meh me-1"></i>
                                            My Sales-page
                                        </button>
                                    </div>
                                </div>

                                {/* Filters and Controls */}
                                <div className="row align-items-center mb-4">
                                    <div className="col-md-6">
                                        <div className="d-flex gap-2 mb-2 flex-wrap">
                                            <div className="dropdown">
                                                <button 
                                                    className="btn btn-outline-secondary dropdown-toggle rounded-pill" 
                                                    type="button" 
                                                    data-bs-toggle="dropdown"
                                                    disabled={loading.products}
                                                >
                                                    Status: {filters.status === 'all' ? 'All' : filters.status}
                                                </button>
                                                <ul className="dropdown-menu">
                                                    <li><button className="dropdown-item" onClick={() => handleStatusFilter('all')}>All</button></li>
                                                    <li><button className="dropdown-item" onClick={() => handleStatusFilter('active')}>Active</button></li>
                                                    <li><button className="dropdown-item" onClick={() => handleStatusFilter('inactive')}>Inactive</button></li>
                                                    <li><button className="dropdown-item" onClick={() => handleStatusFilter('archived')}>Archived</button></li>
                                                    <li><button className="dropdown-item" onClick={() => handleStatusFilter('draft')}>Draft</button></li>
                                                </ul>
                                            </div>
                                            
                                            <div className="dropdown">
                                                <button 
                                                    className="btn btn-outline-secondary dropdown-toggle rounded-pill" 
                                                    type="button" 
                                                    data-bs-toggle="dropdown"
                                                    disabled={loading.products}
                                                >
                                                    Sort by: {sortOptions.find(opt => opt.value === filters.sortBy)?.label}
                                                    {filters.sortOrder === 'desc' ? ' ↓' : ' ↑'}
                                                </button>
                                                <ul className="dropdown-menu">
                                                    {sortOptions.map(option => (
                                                        <li key={option.value}>
                                                            <button 
                                                                className="dropdown-item" 
                                                                onClick={() => handleSort(option.value)}
                                                            >
                                                                {option.label}
                                                            </button>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {selectedProducts.length > 0 && (
                                        <div className="col-md-6">
                                            <div className="d-flex justify-content-md-end gap-1">
                                                <span className="badge animate-target d-inline-flex text-decoration-none align-items-center text-info bg-info-subtle fw-semibold rounded-pill">
                                                    {selectedProducts.length} selected
                                                </span>
                                                <button
                                                    className="btn btn-outline-warning btn-sm rounded-pill"
                                                    onClick={handleBulkArchive}
                                                    disabled={loading.action}
                                                >
                                                    <i className="ci-archive me-1"></i>
                                                    Archive
                                                </button>
                                                <button
                                                    className="btn btn-outline-danger btn-sm rounded-pill"
                                                    onClick={handleBulkDelete}
                                                    disabled={loading.action}
                                                >
                                                    <i className="ci-trash me-1"></i>
                                                    Delete
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Products Table */}
                                <div className="table-responsive">
                                    <table className="table align-middle fs-sm mb-0">
                                        <thead>
                                            <tr>
                                                <th className="ps-0" scope="col" style={{width: '40px'}}>
                                                    <div className="form-check">
                                                        <input
                                                            type="checkbox"
                                                            className="form-check-input"
                                                            checked={selectedProducts.length === filteredProducts.length && filteredProducts.length > 0}
                                                            onChange={(e) => handleSelectAll(e.target.checked)}
                                                            disabled={loading.products || filteredProducts.length === 0}
                                                        />
                                                    </div>
                                                </th>
                                                <th className="ps-0" scope="col">
                                                    <button 
                                                        type="button" 
                                                        className="btn fw-normal text-body product-sort p-0" 
                                                        onClick={() => handleSort('name')}
                                                    >
                                                        Product
                                                        {filters.sortBy === 'name' && (
                                                            <i className={`ci-chevron-${filters.sortOrder === 'asc' ? 'up' : 'down'} ms-1`}></i>
                                                        )}
                                                    </button>
                                                    <span className='animate-pulse'> 
                                                        <i className="ci-bullet"></i> 
                                                        <Link to={`/users/${username}`} className="badge animate-target d-inline-flex text-decoration-none align-items-center text-info bg-info-subtle fw-semibold rounded-pill">
                                                            {pagination.total}
                                                            <i className="ci-arrow-up-right fs-sm ms-1"></i>
                                                            {loading.products && (<LoadingZoom size='sm' />)}
                                                        </Link>
                                                    </span>
                                                </th>
                                                <th className="d-none d-md-table-cell" scope="col">
                                                    <span className="fw-normal text-body">Status</span>
                                                </th>
                                                <th className="text-end d-none d-md-table-cell" scope="col">
                                                    <button 
                                                        type="button" 
                                                        className="btn fw-normal text-body product-sort p-0 me-n2" 
                                                        onClick={() => handleSort('sales_count')}
                                                    >
                                                        Sales
                                                        {filters.sortBy === 'sales_count' && (
                                                            <i className={`ci-chevron-${filters.sortOrder === 'asc' ? 'up' : 'down'} ms-1`}></i>
                                                        )}
                                                    </button>
                                                </th>
                                                <th className="text-end d-none d-sm-table-cell" scope="col">
                                                    <button 
                                                        type="button" 
                                                        className="btn fw-normal text-body product-sort p-0 me-n2" 
                                                        onClick={() => handleSort('earnings')}
                                                    >
                                                        Earnings
                                                        {filters.sortBy === 'earnings' && (
                                                            <i className={`ci-chevron-${filters.sortOrder === 'asc' ? 'up' : 'down'} ms-1`}></i>
                                                        )}
                                                    </button>
                                                </th>
                                                <th className="text-end ps-0 ps-sm-3 pe-0" scope="col">
                                                    <span className="fw-normal text-body">Action</span>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="product-list">
                                            {loading.products ? (
                                                <tr>
                                                    <td colSpan={6} className="text-center py-5">
                                                        <LoadingSpinner size="sm" />
                                                        <span className="ms-2">Loading products...</span>
                                                    </td>
                                                </tr>
                                            ) : filteredProducts.length === 0 ? (
                                                <tr>
                                                    <td colSpan={6} className="text-center py-5">
                                                        <i className="ci-package display-4 text-muted mb-3"></i>
                                                        <h5 className="text-muted">No products found</h5>
                                                        <p className="text-muted">
                                                            {filters.search || filters.status !== 'all' 
                                                                ? 'Try adjusting your filters or search terms.'
                                                                : 'Start by creating your first product.'
                                                            }
                                                        </p>
                                                        {!filters.search && filters.status === 'all' && (
                                                            <button
                                                                className="btn btn-primary"
                                                                onClick={() => navigate('/account/products/create')}
                                                            >
                                                                <i className="ci-plus me-1"></i>
                                                                Create Product
                                                            </button>
                                                        )}
                                                    </td>
                                                </tr>
                                            ) : (
                                                filteredProducts.map((product) => (
                                                    <tr key={product.id}>
                                                        <td className="py-3 ps-0">
                                                            <div className="form-check">
                                                                <input
                                                                    type="checkbox"
                                                                    className="form-check-input"
                                                                    checked={selectedProducts.includes(product.id)}
                                                                    onChange={(e) => handleProductSelect(product.id, e.target.checked)}
                                                                />
                                                            </div>
                                                        </td>
                                                        <td className="py-3 ps-0">
                                                            <div className="d-flex align-items-start align-items-md-center hover-effect-scale position-relative py-1">
                                                                <div className="ratio bg-body-secondary rounded overflow-hidden flex-shrink-sm-0" style={{"--cz-aspect-ratio": 'calc(110 / 142 * 100%)', maxWidth: '142px'}}>
                                                                    <img src={product.image_urls?.[0] || product.image_url || '/assets/img/placeholder.jpg'} 
                                                                        className="hover-effect-target" 
                                                                        alt={product.name}
                                                                        onError={(e) => {
                                                                            e.currentTarget.src = '/assets/img/placeholder.jpg';
                                                                        }}
                                                                    />
                                                                    {product.is_promoted && (
                                                                        <div className="position-absolute top-0 start-0 m-2">
                                                                            <span className="badge bg-warning text-dark">
                                                                                <i className="ci-zap me-1"></i>
                                                                                Promoted
                                                                            </span>
                                                                        </div>
                                                                    )}
                                                                </div>
                                                                <div className="ps-2 ps-sm-3 ms-1">
                                                                    <span className={`badge fs-xs ${getStatusBadgeClass(product.status)} rounded-pill d-md-none mb-1`}>
                                                                        {product.status}
                                                                    </span>
                                                                    <h6 className="product mb-2">
                                                                        <a 
                                                                            className="fs-sm fw-medium hover-effect-underline stretched-link" 
                                                                            href={`/products/${product.slug}`}
                                                                            target="_blank"
                                                                            rel="noopener noreferrer"
                                                                        >
                                                                            {product.name}
                                                                        </a>
                                                                    </h6>
                                                                    <div className="d-flex flex-md-column align-items-center align-items-md-start gap-2">
                                                                        <div className="h6 mb-0 me-1 me-md-0">
                                                                            {formatCurrency(product.price)}
                                                                            {product.original_price && (
                                                                                <del className="text-muted fs-sm ms-1">
                                                                                    {formatCurrency(product.original_price)}
                                                                                </del>
                                                                            )}
                                                                        </div>
                                                                        <div className="d-flex gap-2">
                                                                            <div className="d-flex align-items-center fs-xs text-body-emphasis bg-body-tertiary rounded-pill px-2 py-1">
                                                                                <i className="ci-heart text-body-secondary me-1" />
                                                                                {formatNumber(product.favorites_count)}
                                                                            </div>
                                                                            <div className="d-flex align-items-center fs-xs text-body-emphasis bg-body-tertiary rounded-pill px-2 py-1">
                                                                                <i className="ci-message-circle text-body-secondary me-1" />
                                                                                {formatNumber(product.reviews_count || product.comments_count)}
                                                                            </div>
                                                                        </div> 
                                                                    </div>
                                                                    <div className="fs-xs text-nowrap d-md-none mt-2 mb-1">
                                                                        <span className="text-body-secondary">Sales:</span> {formatNumber(product.sales_count)}
                                                                    </div>
                                                                    <div className="fs-xs text-nowrap d-sm-none">
                                                                        <span className="text-body-secondary">Earnings:</span> {formatCurrency(product.earnings)}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="d-none d-md-table-cell py-3">
                                                            <span className={`status badge fs-xs ${getStatusBadgeClass(product.status)} rounded-pill`}>
                                                                {product.status}
                                                            </span>
                                                        </td>
                                                        <td className="sales d-none d-md-table-cell text-end py-3">
                                                            {formatNumber(product.sales_count)}
                                                        </td>
                                                        <td className="text-end d-none d-sm-table-cell py-3">
                                                            {formatCurrency(product.earnings)}
                                                            <span className="earnings visually-hidden">{product.earnings}</span>
                                                        </td>
                                                        <td className="text-end py-3 ps-0 ps-sm-3 pe-0">
                                                            <div className="dropdown">
                                                                <button 
                                                                    type="button" 
                                                                    className="btn btn-icon btn-ghost btn-sm btn-secondary rounded-circle" 
                                                                    data-bs-toggle="dropdown" 
                                                                    aria-expanded="false" 
                                                                    aria-label="Settings"
                                                                    disabled={loading.action}
                                                                >
                                                                    {loading.action ? (
                                                                        <span className="spinner-border spinner-border-sm" role="status"></span>
                                                                    ) : (
                                                                        <i className="ci-more-vertical fs-base" />
                                                                    )}
                                                                </button>
                                                                <ul className="dropdown-menu dropdown-menu-end">
                                                                    <li>
                                                                        <button className="dropdown-item rounded-pill"
                                                                            onClick={() => handleEditProduct(product.slug)}
                                                                        >
                                                                            {/* <i className="ci-pencil opacity-75 me-2" /> */}
                                                                            <i className="ci-edit-3 opacity-75 me-2"></i>
                                                                            Edit
                                                                        </button>
                                                                    </li>
                                                                    <li>
                                                                        <button 
                                                                            className="dropdown-item"
                                                                            onClick={() => handlePromoteProduct(product.id)}
                                                                        >
                                                                            <i className="ci-zap fs-base opacity-75 me-2" />
                                                                            Promote
                                                                        </button>
                                                                    </li>
                                                                    <li>
                                                                        <button 
                                                                            className="dropdown-item"
                                                                            onClick={() => handlePublishProduct(product.id)}
                                                                        >
                                                                            <i className="ci-share opacity-75 me-2" />
                                                                            Publish
                                                                        </button>
                                                                    </li>
                                                                    <li><hr className="dropdown-divider" /></li>
                                                                    <li>
                                                                        <button 
                                                                            className="dropdown-item"
                                                                            onClick={() => handleArchiveProduct(product.id)}
                                                                        >
                                                                            <i className="ci-archive opacity-75 me-2" />
                                                                            Move to archive
                                                                        </button>
                                                                    </li>
                                                                    <li>
                                                                        <button 
                                                                            className="dropdown-item text-danger"
                                                                            onClick={() => handleDeleteProduct(product.id)}
                                                                        >
                                                                            <i className="ci-trash opacity-75 me-2" />
                                                                            Delete
                                                                        </button>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))
                                            )}
                                        </tbody>
                                    </table>
                                </div>

                                {/* FIXED Pagination - Now properly maintains current page */}
                                {pagination.last_page > 1 && (
                                    <nav className="d-flex justify-content-center pt-4" aria-label="Products pagination">
                                        <ul className="pagination">
                                            <li className={`page-item ${pagination.current_page === 1 ? 'disabled' : ''}`}>
                                                <button 
                                                    className="page-link"
                                                    onClick={() => handlePageChange(pagination.current_page - 1)}
                                                    disabled={pagination.current_page === 1 || loading.products}
                                                    title="Previous Page"
                                                >
                                                    <i className="ci-chevron-left"></i>
                                                </button>
                                            </li>
                                            
                                            {Array.from({ length: Math.min(5, pagination.last_page) }, (_, i) => {
                                                let pageNum;
                                                if (pagination.last_page <= 5) {
                                                    pageNum = i + 1;
                                                } else if (pagination.current_page <= 3) {
                                                    pageNum = i + 1;
                                                } else if (pagination.current_page >= pagination.last_page - 2) {
                                                    pageNum = pagination.last_page - 4 + i;
                                                } else {
                                                    pageNum = pagination.current_page - 2 + i;
                                                }
                                                
                                                return (
                                                    <li key={pageNum} className={`page-item ${pagination.current_page === pageNum ? 'active' : ''}`}>
                                                        <button 
                                                            className="page-link"
                                                            onClick={() => handlePageChange(pageNum)}
                                                            disabled={loading.products}
                                                            title={`Page ${pageNum}`}
                                                        >
                                                            {pageNum}
                                                        </button>
                                                    </li>
                                                );
                                            })}
                                            
                                            <li className={`page-item ${pagination.current_page === pagination.last_page ? 'disabled' : ''}`}>
                                                <button 
                                                    className="page-link"
                                                    onClick={() => handlePageChange(pagination.current_page + 1)}
                                                    disabled={pagination.current_page === pagination.last_page || loading.products}
                                                    title="Next Page"
                                                >
                                                    <i className="ci-chevron-right"></i>
                                                </button>
                                            </li>
                                        </ul>
                                    </nav>
                                )}

                                {/* Results Info with Debug Information */}
                                {filteredProducts.length > 0 && (
                                    <div className="d-flex justify-content-between align-items-center pt-3 border-top">
                                        <small className="text-muted">
                                            Showing {((pagination.current_page - 1) * pagination.per_page) + 1} to {Math.min(pagination.current_page * pagination.per_page, pagination.total)} of {pagination.total} products
                                            <br />
                                            <span className="badge rounded-pill bg-info-subtle text-info-emphasis mt-1">
                                                Page {pagination.current_page} of {pagination.last_page} | {pagination.per_page} per page
                                            </span>
                                        </small>
                                        <div className="d-flex gap-2 rounded-pill">
                                            <select 
                                                className="form-select form-select-sm rounded-pill"
                                                value={pagination.per_page}
                                                onChange={(e) => handlePerPageChange(parseInt(e.target.value))}
                                                disabled={loading.products}
                                                style={{width: 'auto'}}
                                            >
                                                <option value={5}>5 per page</option>
                                                <option value={10}>10 per page</option>
                                                <option value={25}>25 per page</option>
                                                <option value={50}>50 per page</option>
                                            </select>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Bootstrap Modal Backdrop */}
            {modalState.subscription.show && (
                <div className="modal-backdrop fade show"></div>
            )}
        </>
    );
};

export default Products;