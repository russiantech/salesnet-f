// import Navigation from "../../../components/shared/Navigation"
// import Aside from "../shared/Aside"

// const Products = () => {
//   return (
//     <>
//     {/* <Navigation /> */}
//       {/* Page content */}
//       <main className="content-wrapper">
//         <div className="container pt-4 pt-lg-5 pb-5">
//           <div className="row pt-sm-2 pt-md-3 pt-lg-0 pb-2 pb-sm-3 pb-md-4 pb-lg-5">
//             {/* Sidebar navigation that turns into offcanvas on screens < 992px wide (lg breakpoint) */}
             
//             <Aside />

//             {/* Sales content */}
//             <div className="col-lg-9 pt-2 pt-xl-3">
//               <div data-filter-list="{&quot;searchClass&quot;: &quot;product-search&quot;, &quot;listClass&quot;: &quot;product-list&quot;, &quot;sortClass&quot;: &quot;product-sort&quot;, &quot;valueNames&quot;: [&quot;product&quot;, &quot;status&quot;, &quot;sales&quot;, &quot;earnings&quot;]}">
//                 {/* Header */}
//                 <div className="d-sm-flex align-items-center justify-content-between gap-3 pb-2 pb-sm-3 mb-md-2">
//                   <h1 className="h2 text-nowrap mb-sm-0">Products (4)</h1>
//                   <div className="position-relative w-100" style={{maxWidth: '300px'}}>
//                     <i className="ci-search position-absolute top-50 start-0 translate-middle-y ms-3" />
//                     <input type="search" className="product-search form-control form-icon-start rounded-pill" placeholder="Search" />
//                   </div>
//                 </div>

//                 {/* Sales list (table) */}
//                 <table className="table align-middle fs-sm mb-0">
//                   <thead>
//                     <tr>
//                       <th className="ps-0" scope="col">
//                         <span className="fw-normal text-body">Product</span>
//                       </th>
//                       <th className="d-none d-md-table-cell" scope="col">
//                         <span className="fw-normal text-body">Status</span>
//                       </th>
//                       <th className="text-end d-none d-md-table-cell" scope="col">
//                         <button type="button" className="btn fw-normal text-body product-sort p-0 me-n2" data-sort="sales">Sales</button>
//                       </th>
//                       <th className="text-end d-none d-sm-table-cell" scope="col">
//                         <button type="button" className="btn fw-normal text-body product-sort p-0 me-n2" data-sort="earnings">Earnings</button>
//                       </th>
//                       <th className="text-end ps-0 ps-sm-3 pe-0" scope="col">
//                         <span className="fw-normal text-body">Action</span>
//                       </th>
//                     </tr>
//                   </thead>
//                   <tbody className="product-list">
//                     {/* Item */}
//                     <tr>
//                       <td className="py-3 ps-0">
//                         <div className="d-flex align-items-start align-items-md-center hover-effect-scale position-relative py-1">
//                           <div className="ratio bg-body-secondary rounded overflow-hidden flex-shrink-sm-0" style={{"--cz-aspect-ratio": 'calc(110 / 142 * 100%)', maxWidth: '142px'}}>
//                             <img src="/assets/img/account/products/03.jpg" className="hover-effect-target" alt="Image" />
//                           </div>
//                           <div className="ps-2 ps-sm-3 ms-1">
//                             <span className="badge fs-xs text-success bg-success-subtle rounded-pill d-md-none mb-1">Active</span>
//                             <h6 className="product mb-2">
//                               <a className="fs-sm fw-medium hover-effect-underline stretched-link" href="/products/slug">iPhone 15 pro mockups</a>
//                             </h6>
//                             <div className="d-flex flex-md-column align-items-center align-items-md-start gap-2">
//                               <div className="h6 mb-0 me-1 me-md-0">$19</div>
//                               <div className="d-flex gap-2">
//                                 <div className="d-flex align-items-center fs-xs text-body-emphasis bg-body-tertiary rounded-pill px-2 py-1">
//                                   <i className="ci-eye text-body-secondary me-1" />
//                                   13
//                                 </div>
//                                 <div className="d-flex align-items-center fs-xs text-body-emphasis bg-body-tertiary rounded-pill px-2 py-1">
//                                   <i className="ci-heart text-body-secondary me-1" />
//                                   13
//                                 </div>
//                                 <div className="d-flex align-items-center fs-xs text-body-emphasis bg-body-tertiary rounded-pill px-2 py-1">
//                                   <i className="ci-message-circle text-body-secondary me-1" />
//                                   4
//                                 </div>
//                                 <div className="d-flex align-items-center fs-xs text-body-emphasis bg-body-tertiary rounded-pill px-2 py-1">
//                                   <i className="ci-phone text-body-secondary me-1" />
//                                   4
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="fs-xs text-nowrap d-md-none mt-2 mb-1"><span className="text-body-secondary">Sales:</span> 47</div>
//                             <div className="fs-xs text-nowrap d-sm-none"><span className="text-body-secondary">Earnings:</span> $669.75</div>
//                           </div>
//                         </div>
//                       </td>
//                       <td className="d-none d-md-table-cell py-3">
//                         <span className="status badge fs-xs text-success bg-success-subtle rounded-pill">Active</span>
//                       </td>
//                       <td className="sales d-none d-md-table-cell text-end py-3">47</td>
//                       <td className="text-end d-none d-sm-table-cell py-3">$669.75<span className="earnings visually-hidden">66975</span></td>
//                       <td className="text-end py-3 ps-0 ps-sm-3 pe-0">
//                         <div className="dropdown">
//                           <button type="button" className="btn btn-icon btn-ghost btn-sm btn-secondary rounded-circle" data-bs-toggle="dropdown" aria-expanded="false" aria-label="Settings">
//                             <i className="ci-more-vertical fs-base" />
//                           </button>
//                           <ul className="dropdown-menu dropdown-menu-end">
//                             <li>
//                               <a className="dropdown-item" href="#!">
//                                 <i className="ci-edit opacity-75 me-2" />
//                                 Edit
//                               </a>
//                             </li>
//                             <li>
//                               <a className="dropdown-item" href="#!">
//                                 <i className="ci-zap fs-base opacity-75 me-2" />
//                                 Promote
//                               </a>
//                             </li>
//                             <li>
//                               <a className="dropdown-item" href="#!">
//                                 <i className="ci-archive opacity-75 me-2" />
//                                 Move to archive
//                               </a>
//                             </li>
//                             <li>
//                               <a className="dropdown-item text-danger" href="#!">
//                                 <i className="ci-trash opacity-75 me-2" />
//                                 Delete
//                               </a>
//                             </li>
//                           </ul>
//                         </div>
//                       </td>
//                     </tr>
//                     {/* Item */}
//                     <tr>
//                       <td className="py-3 ps-0">
//                         <div className="d-flex align-items-start align-items-md-center hover-effect-scale position-relative py-1">
//                           <div className="ratio bg-body-secondary rounded overflow-hidden flex-shrink-sm-0" style={{"--cz-aspect-ratio": 'calc(110 / 142 * 100%)', maxWidth: '142px'}}>
//                             <img src="/assets/img/account/products/04.jpg" className="hover-effect-target" alt="Image" />
//                           </div>
//                           <div className="ps-2 ps-sm-3 ms-1">
//                             <span className="badge fs-xs text-success bg-success-subtle rounded-pill d-md-none mb-1">Active</span>
//                             <h6 className="product mb-2">
//                               <a className="fs-sm fw-medium hover-effect-underline stretched-link" href="/products/slug">3D box mockup bold rebrand</a>
//                             </h6>
//                             <div className="d-flex flex-md-column align-items-center align-items-md-start gap-2">
//                               <div className="h6 mb-0 me-1 me-md-0">$16</div>
//                               <div className="d-flex gap-2">
//                                 <div className="d-flex align-items-center fs-xs text-body-emphasis bg-body-tertiary rounded-pill px-2 py-1">
//                                   <i className="ci-heart text-body-secondary me-1" />
//                                   25
//                                 </div>
//                                 <div className="d-flex align-items-center fs-xs text-body-emphasis bg-body-tertiary rounded-pill px-2 py-1">
//                                   <i className="ci-message-circle text-body-secondary me-1" />
//                                   2
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="fs-xs text-nowrap d-md-none mt-2 mb-1"><span className="text-body-secondary">Sales:</span> 56</div>
//                             <div className="fs-xs text-nowrap d-sm-none"><span className="text-body-secondary">Earnings:</span> $672.00</div>
//                           </div>
//                         </div>
//                       </td>
//                       <td className="d-none d-md-table-cell py-3">
//                         <span className="status badge fs-xs text-success bg-success-subtle rounded-pill">Active</span>
//                       </td>
//                       <td className="sales d-none d-md-table-cell text-end py-3">56</td>
//                       <td className="text-end d-none d-sm-table-cell py-3">$672.00<span className="earnings visually-hidden">67200</span></td>
//                       <td className="text-end py-3 ps-0 ps-sm-3 pe-0">
//                         <div className="dropdown">
//                           <button type="button" className="btn btn-icon btn-ghost btn-sm btn-secondary rounded-circle" data-bs-toggle="dropdown" aria-expanded="false" aria-label="Settings">
//                             <i className="ci-more-vertical fs-base" />
//                           </button>
//                           <ul className="dropdown-menu dropdown-menu-end">
//                             <li>
//                               <a className="dropdown-item" href="#!">
//                                 <i className="ci-edit opacity-75 me-2" />
//                                 Edit
//                               </a>
//                             </li>
//                             <li>
//                               <a className="dropdown-item" href="#!">
//                                 <i className="ci-zap fs-base opacity-75 me-2" />
//                                 Promote
//                               </a>
//                             </li>
//                             <li>
//                               <a className="dropdown-item" href="#!">
//                                 <i className="ci-archive opacity-75 me-2" />
//                                 Move to archive
//                               </a>
//                             </li>
//                             <li>
//                               <a className="dropdown-item text-danger" href="#!">
//                                 <i className="ci-trash opacity-75 me-2" />
//                                 Delete
//                               </a>
//                             </li>
//                           </ul>
//                         </div>
//                       </td>
//                     </tr>
//                     {/* Item */}
//                     <tr>
//                       <td className="py-3 ps-0">
//                         <div className="d-flex align-items-start align-items-md-center hover-effect-scale position-relative py-1">
//                           <div className="ratio bg-body-secondary rounded overflow-hidden flex-shrink-sm-0" style={{"--cz-aspect-ratio": 'calc(110 / 142 * 100%)', maxWidth: '142px'}}>
//                             <img src="/assets/img/account/products/05.jpg" className="hover-effect-target" alt="Image" />
//                           </div>
//                           <div className="ps-2 ps-sm-3 ms-1">
//                             <span className="badge fs-xs text-success bg-success-subtle rounded-pill d-md-none mb-1">Active</span>
//                             <h6 className="product mb-2">
//                               <a className="fs-sm fw-medium hover-effect-underline stretched-link" href="/products/slug">Smartphone mockups for UI designs</a>
//                             </h6>
//                             <div className="d-flex flex-md-column align-items-center align-items-md-start gap-2">
//                               <div className="h6 mb-0 me-1 me-md-0">$18</div>
//                               <div className="d-flex gap-2">
//                                 <div className="d-flex align-items-center fs-xs text-body-emphasis bg-body-tertiary rounded-pill px-2 py-1">
//                                   <i className="ci-heart text-body-secondary me-1" />
//                                   36
//                                 </div>
//                                 <div className="d-flex align-items-center fs-xs text-body-emphasis bg-body-tertiary rounded-pill px-2 py-1">
//                                   <i className="ci-message-circle text-body-secondary me-1" />
//                                   8
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="fs-xs text-nowrap d-md-none mt-2 mb-1"><span className="text-body-secondary">Sales:</span> 152</div>
//                             <div className="fs-xs text-nowrap d-sm-none"><span className="text-body-secondary">Earnings:</span> $2,052.00</div>
//                           </div>
//                         </div>
//                       </td>
//                       <td className="d-none d-md-table-cell py-3">
//                         <span className="status badge fs-xs text-success bg-success-subtle rounded-pill">Active</span>
//                       </td>
//                       <td className="sales d-none d-md-table-cell text-end py-3">152</td>
//                       <td className="text-end d-none d-sm-table-cell py-3">$2,052.00<span className="earnings visually-hidden">205200</span></td>
//                       <td className="text-end py-3 ps-0 ps-sm-3 pe-0">
//                         <div className="dropdown">
//                           <button type="button" className="btn btn-icon btn-ghost btn-sm btn-secondary rounded-circle" data-bs-toggle="dropdown" aria-expanded="false" aria-label="Settings">
//                             <i className="ci-more-vertical fs-base" />
//                           </button>
//                           <ul className="dropdown-menu dropdown-menu-end">
//                             <li>
//                               <a className="dropdown-item" href="#!">
//                                 <i className="ci-edit opacity-75 me-2" />
//                                 Edit
//                               </a>
//                             </li>
//                             <li>
//                               <a className="dropdown-item" href="#!">
//                                 <i className="ci-zap fs-base opacity-75 me-2" />
//                                 Promote
//                               </a>
//                             </li>
//                             <li>
//                               <a className="dropdown-item" href="#!">
//                                 <i className="ci-archive opacity-75 me-2" />
//                                 Move to archive
//                               </a>
//                             </li>
//                             <li>
//                               <a className="dropdown-item text-danger" href="#!">
//                                 <i className="ci-trash opacity-75 me-2" />
//                                 Delete
//                               </a>
//                             </li>
//                           </ul>
//                         </div>
//                       </td>
//                     </tr>
//                     {/* Item */}
//                     <tr>
//                       <td className="py-3 ps-0">
//                         <div className="d-flex align-items-start align-items-md-center hover-effect-scale position-relative py-1">
//                           <div className="ratio bg-body-secondary rounded overflow-hidden flex-shrink-sm-0" style={{"--cz-aspect-ratio": 'calc(110 / 142 * 100%)', maxWidth: '142px'}}>
//                             <img src="/assets/img/account/products/07.jpg" className="hover-effect-target" alt="Image" />
//                           </div>
//                           <div className="ps-2 ps-sm-3 ms-1">
//                             <span className="badge fs-xs text-warning bg-warning-subtle rounded-pill d-md-none mb-1">Archived</span>
//                             <h6 className="product mb-2">
//                               <a className="fs-sm fw-medium hover-effect-underline stretched-link" href="/products/slug">Multi device mockup PSD</a>
//                             </h6>
//                             <div className="d-flex flex-md-column align-items-center align-items-md-start gap-2">
//                               <div className="h6 mb-0 me-1 me-md-0">$27</div>
//                               <div className="d-flex gap-2">
//                                 <div className="d-flex align-items-center fs-xs text-body-emphasis bg-body-tertiary rounded-pill px-2 py-1">
//                                   <i className="ci-heart text-body-secondary me-1" />
//                                   9
//                                 </div>
//                                 <div className="d-flex align-items-center fs-xs text-body-emphasis bg-body-tertiary rounded-pill px-2 py-1">
//                                   <i className="ci-message-circle text-body-secondary me-1" />
//                                   12
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="fs-xs text-nowrap d-md-none mt-2 mb-1"><span className="text-body-secondary">Sales:</span> 43</div>
//                             <div className="fs-xs text-nowrap d-sm-none"><span className="text-body-secondary">Earnings:</span> $870.75</div>
//                           </div>
//                         </div>
//                       </td>
//                       <td className="d-none d-md-table-cell py-3">
//                         <span className="status badge fs-xs text-warning bg-warning-subtle rounded-pill">Archived</span>
//                       </td>
//                       <td className="sales d-none d-md-table-cell text-end py-3">43</td>
//                       <td className="text-end d-none d-sm-table-cell py-3">$870.75<span className="earnings visually-hidden">87075</span></td>
//                       <td className="text-end py-3 ps-0 ps-sm-3 pe-0">
//                         <div className="dropdown">
//                           <button type="button" className="btn btn-icon btn-ghost btn-sm btn-secondary rounded-circle" data-bs-toggle="dropdown" aria-expanded="false" aria-label="Settings">
//                             <i className="ci-more-vertical fs-base" />
//                           </button>
//                           <ul className="dropdown-menu dropdown-menu-end">
//                             <li>
//                               <a className="dropdown-item" href="#!">
//                                 <i className="ci-edit opacity-75 me-2" />
//                                 Edit
//                               </a>
//                             </li>
//                             <li>
//                               <a className="dropdown-item" href="#!">
//                                 <i className="ci-zap fs-base opacity-75 me-2" />
//                                 Promote
//                               </a>
//                             </li>
//                             <li>
//                               <a className="dropdown-item" href="#!">
//                                 <i className="ci-archive opacity-75 me-2" />
//                                 Move to archive
//                               </a>
//                             </li>
//                             <li>
//                               <a className="dropdown-item text-danger" href="#!">
//                                 <i className="ci-trash opacity-75 me-2" />
//                                 Delete
//                               </a>
//                             </li>
//                           </ul>
//                         </div>
//                       </td>
//                     </tr>
//                   </tbody>
//                 </table>

//               </div>
//             </div>

//           </div>
//         </div>
//       </main>

//     </>
//   )
// }

// export default Products

// // v2
// import { useState, useEffect, useMemo } from 'react';
// import { useNavigate } from 'react-router-dom';
// import LoadingSpinner from '../../../components/shared/LoadingSpinner';
// // import { NotificationService } from '../../../services/local/NotificationService';
// // import { ProductAxiosService } from '../../../services/net/ProductAxiosService';
// import Aside from '../shared/Aside';
// import SubscriptionPlans from '../../../components/shared/modals/publish/Promote';
// import { NotificationService } from '../../../services/local/NotificationService';
// import { ProductAxiosService } from '../../../services/net/ProductAxiosService';
// import { useCallback } from 'react';
// // import SubscriptionPlans from '../shared/SubscriptionPlans';
// // import PublishModal from './PublishModal';

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
//         per_page: 10
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
//     }, [filters, pagination.current_page]);

//     // const fetchProducts = async () => {
//     //     try {
//     //         setLoading(prev => ({ ...prev, products: true }));
            
//     //         const params = {
//     //             page: pagination.current_page,
//     //             per_page: pagination.per_page,
//     //             status: filters.status !== 'all' ? filters.status : undefined,
//     //             search: filters.search || undefined,
//     //             sort_by: filters.sortBy,
//     //             sort_order: filters.sortOrder
//     //         };

//     //         // const response = await ProductAxiosService.getProducts(params);
//     //         // const response = await ProductAxiosService.fetchPage(params);
//     //         const response = await ProductAxiosService.getByOwner(query={}, username='')
//     //         console.log(`response for CRUD ${JSON.stringify(response)}`)
//     //         if (response.data.success) {
//     //             setProducts(response.data.products);
//     //             setPagination({
//     //                 current_page: response.data.page_meta.current_page,
//     //                 last_page: response.data.last_page,
//     //                 total: response.data.total,
//     //                 per_page: response.data.per_page
//     //             });
//     //         } else {
//     //             NotificationService.showDialog(response.data.error || 'Failed to load products', 'error');
//     //             setProducts([]);
//     //         }
//     //     } catch (err: any) {
//     //         const errorMessage = err.response?.data?.error || err.message || 'Failed to load products';
//     //         NotificationService.showDialog(errorMessage, 'error');
//     //         setProducts([]);
//     //     } finally {
//     //         setLoading((prev: any) => ({ ...prev, products: false }));
//     //     }
//     // };

//       // Fetch products with pagination
//       const fetchProducts = useCallback(async (identifier: string, page: number = 1) => {
//         try {
//           const isInitialLoad = page === 1;
//           if (isInitialLoad) setLoading(true);
//           // else setLoadingMore(true);
    
//           const productsResponse = await ProductAxiosService.getByOwner(
//             { page, page_size: 12 },
//             identifier
//           );
    
//           setProducts((prev: any) => 
//             isInitialLoad 
//               ? productsResponse.data.products 
//               : [...prev, ...productsResponse.data.products]
//           );
    
//           setPagination({
//             current_page: productsResponse.data.page_meta.current_page_number,
//             last_page: productsResponse.data.page_meta.last_page_number,
//             total: productsResponse.data.page_meta.total_pages_count,
//             per_page: productsResponse.data.page_meta.page_size
//           });
//         } catch (err) {
//           console.error("Products error:", err);
//           // setError("Failed to load products");
//         } finally {
//           setLoading(false);
//           // setLoadingMore(false);
//         }
//       }, []);

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
            
//             await ProductAxiosService.updateProduct(productId, 'archived');
            
//             setProducts((prev: any[]) => 
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
        
//         // Update the product's promotion status
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
//         fetchProducts(); // Refresh the list
//     };

//     const handlePublishSuccess = () => {
//         setModalState(prev => ({
//             ...prev,
//             publish: { show: false, productId: '' }
//         }));
        
//         NotificationService.showDialog("Product published successfully!", "success");
//         fetchProducts(); // Refresh the list
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
//                 <PublishModal
//                     productId={modalState.publish.productId}
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
//                                         Products ({pagination.total})
//                                         {loading.products && (
//                                             <span className="spinner-border spinner-border-sm ms-2" role="status"></span>
//                                         )}
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
//                                             onClick={() => navigate('/account/products/create')}
//                                         >
//                                             <i className="ci-plus me-1"></i>
//                                             Add Product
//                                         </button>
//                                     </div>
//                                 </div>

//                                 {/* Filters and Controls */}
//                                 <div className="row align-items-center mb-4">
//                                     <div className="col-md-6">
//                                         <div className="d-flex gap-2 flex-wrap">
//                                             <div className="dropdown">
//                                                 <button 
//                                                     className="btn btn-outline-secondary dropdown-toggle" 
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
//                                                     className="btn btn-outline-secondary dropdown-toggle" 
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
//                                             <div className="d-flex justify-content-md-end gap-2">
//                                                 <span className="badge bg-info rounded-pill px-3 py-2">
//                                                     {selectedProducts.length} selected
//                                                 </span>
//                                                 <button
//                                                     className="btn btn-outline-warning btn-sm"
//                                                     onClick={handleBulkArchive}
//                                                     disabled={loading.action}
//                                                 >
//                                                     <i className="ci-archive me-1"></i>
//                                                     Archive
//                                                 </button>
//                                                 <button
//                                                     className="btn btn-outline-danger btn-sm"
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
//                                                                     <img 
//                                                                         src={product.image_url || '/assets/img/placeholder.jpg'} 
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
//                                                                                 <i className="ci-eye text-body-secondary me-1" />
//                                                                                 {formatNumber(product.views_count)}
//                                                                             </div>
//                                                                             <div className="d-flex align-items-center fs-xs text-body-emphasis bg-body-tertiary rounded-pill px-2 py-1">
//                                                                                 <i className="ci-heart text-body-secondary me-1" />
//                                                                                 {formatNumber(product.favorites_count)}
//                                                                             </div>
//                                                                             <div className="d-flex align-items-center fs-xs text-body-emphasis bg-body-tertiary rounded-pill px-2 py-1">
//                                                                                 <i className="ci-message-circle text-body-secondary me-1" />
//                                                                                 {formatNumber(product.comments_count)}
//                                                                             </div>
//                                                                             <div className="d-flex align-items-center fs-xs text-body-emphasis bg-body-tertiary rounded-pill px-2 py-1">
//                                                                                 <i className="ci-phone text-body-secondary me-1" />
//                                                                                 {formatNumber(product.calls_count)}
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
//                                                 <option value={10}>10 per page</option>
//                                                 <option value={25}>25 per page</option>
//                                                 <option value={50}>50 per page</option>
//                                                 <option value={100}>100 per page</option>
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

// // v3
// import { useState, useEffect, useMemo, useCallback } from 'react';
// import { useNavigate } from 'react-router-dom';
// import LoadingSpinner from '../../../components/shared/LoadingSpinner';
// import Aside from '../shared/Aside';
// import SubscriptionPlans from '../../../components/shared/modals/publish/Promote';
// // import PublishModal from './PublishModal';
// import { NotificationService } from '../../../services/local/NotificationService';
// import { ProductAxiosService } from '../../../services/net/ProductAxiosService';
// import { UsersService } from '../../../services/local/UsersService';
// // import { UsersService } from '../../../services/UsersService';

// interface Product {
//     id: number;
//     name: string;
//     slug: string;
//     price: number;
//     discounted_price: number;
//     discount_percentage: number;
//     has_discount: boolean;
//     image_urls: string[];
//     stock: number;
//     average_rating: number;
//     reviews_count: number;
//     categories: Array<{
//         id: number;
//         name: string;
//         slug: string;
//     }>;
//     attributes: Array<{
//         key: string;
//         value: string;
//     }>;
//     tags: string[];
//     type: string;
//     user_id: number;
//     page_id: number | null;
//     has_subscription: boolean;
//     subscription: any;
//     created_at: string;
//     updated_at?: string;
// }

// interface PageMeta {
//     current_page_number: number;
//     has_next_page: boolean;
//     has_prev_page: boolean;
//     next_page_url: string | null;
//     prev_page_url: string | null;
//     offset: number;
//     requested_page_size: number;
//     total_items_count: number;
//     total_pages_count: number;
// }

// interface ProductsResponse {
//     data: {
//         message: string;
//         page_meta: PageMeta;
//         products: Product[];
//         success: boolean;
//     };
//     status: number;
//     statusText: string;
// }

// interface SortOption {
//     value: string;
//     label: string;
// }

// interface FilterOptions {
//     category: string;
//     search: string;
//     sortBy: string;
//     sortOrder: 'asc' | 'desc';
//     type: string;
// }

// const Products = () => {
//     const navigate = useNavigate();
//     const [products, setProducts] = useState<Product[]>([]);
//     const [loading, setLoading] = useState({
//         products: true,
//         action: false,
//         loadingMore: false
//     });
//     const [selectedProducts, setSelectedProducts] = useState<number[]>([]);
//     const [filters, setFilters] = useState<FilterOptions>({
//         category: 'all',
//         search: '',
//         sortBy: 'created_at',
//         sortOrder: 'desc',
//         type: 'all'
//     });
//     const [pagination, setPagination] = useState<PageMeta>({
//         current_page_number: 1,
//         has_next_page: false,
//         has_prev_page: false,
//         next_page_url: null,
//         prev_page_url: null,
//         offset: 0,
//         requested_page_size: 10,
//         total_items_count: 0,
//         total_pages_count: 0
//     });
//     const [modalState, setModalState] = useState({
//         subscription: { show: false, productId: 0 },
//         publish: { show: false, productId: 0 },
//         delete: { show: false, productId: 0 }
//     });
//     const [error, setError] = useState<string | null>(null);

//     const sortOptions: SortOption[] = [
//         { value: 'created_at', label: 'Date Created' },
//         { value: 'name', label: 'Product Name' },
//         { value: 'price', label: 'Price' },
//         { value: 'average_rating', label: 'Rating' },
//         { value: 'reviews_count', label: 'Reviews' }
//     ];

//     // Get current user
//     const currentUser = UsersService.getCurrentUser();

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
//         if (currentUser) {
//             fetchProducts();
//         }
//     }, [filters, pagination.current_page_number, currentUser]);

//     // Fetch products with pagination
//     const fetchProducts = useCallback(async (page: number = 1, isLoadMore: boolean = false) => {
//         if (!currentUser) return;

//         try {
//             const isInitialLoad = page === 1 && !isLoadMore;
//             if (isInitialLoad) {
//                 setLoading(prev => ({ ...prev, products: true }));
//             } else if (isLoadMore) {
//                 setLoading(prev => ({ ...prev, loadingMore: true }));
//             }

//             setError(null);

//             const queryParams: Record<string, any> = {
//                 page,
//                 page_size: pagination.requested_page_size
//             };

//             // Add filters to query params
//             if (filters.search) {
//                 queryParams.search = filters.search;
//             }
//             if (filters.category !== 'all') {
//                 queryParams.category = filters.category;
//             }
//             if (filters.type !== 'all') {
//                 queryParams.type = filters.type;
//             }
//             if (filters.sortBy) {
//                 queryParams.sort_by = filters.sortBy;
//                 queryParams.sort_order = filters.sortOrder;
//             }

//             // Use username or email as identifier
//             const identifier = currentUser.username || currentUser.email;
            
//             const response: ProductsResponse = await ProductAxiosService.getByOwner(
//                 queryParams,
//                 identifier
//             );

//             console.log(`response for CRUD ${JSON.stringify(response)}`);

//             if (response.data.success) {
//                 setProducts(prevProducts => 
//                     isLoadMore 
//                         ? [...prevProducts, ...response.data.products]
//                         : response.data.products
//                 );

//                 setPagination(response.data.page_meta);
//             } else {
//                 throw new Error(response.data.message || 'Failed to load products');
//             }
//         } catch (err: any) {
//             console.error("Products fetch error:", err);
//             const errorMessage = err.response?.data?.message || err.message || 'Failed to load products';
//             setError(errorMessage);
//             NotificationService.showDialog(errorMessage, 'error');
            
//             if (!isLoadMore) {
//                 setProducts([]);
//             }
//         } finally {
//             setLoading(prev => ({
//                 ...prev,
//                 products: false,
//                 loadingMore: false
//             }));
//         }
//     }, [currentUser, filters, pagination.requested_page_size]);

//     const handleSearch = (searchTerm: string) => {
//         setFilters(prev => ({ ...prev, search: searchTerm }));
//         setPagination(prev => ({ ...prev, current_page_number: 1 }));
//     };

//     const handleSort = (sortBy: string) => {
//         setFilters(prev => ({
//             ...prev,
//             sortBy,
//             sortOrder: prev.sortBy === sortBy && prev.sortOrder === 'asc' ? 'desc' : 'asc'
//         }));
//         setPagination(prev => ({ ...prev, current_page_number: 1 }));
//     };

//     const handleCategoryFilter = (category: string) => {
//         setFilters(prev => ({ ...prev, category }));
//         setPagination(prev => ({ ...prev, current_page_number: 1 }));
//     };

//     const handleTypeFilter = (type: string) => {
//         setFilters(prev => ({ ...prev, type }));
//         setPagination(prev => ({ ...prev, current_page_number: 1 }));
//     };

//     const handleProductSelect = (productId: number, isSelected: boolean) => {
//         setSelectedProducts(prev =>
//             isSelected
//                 ? [...prev, productId]
//                 : prev.filter(id => id !== productId)
//         );
//     };

//     const handleSelectAll = (isSelected: boolean) => {
//         setSelectedProducts(isSelected ? products.map(product => product.id) : []);
//     };

//     const handleEditProduct = (productId: number) => {
//         navigate(`/users/products/${productId}/edit`);
//     };

//     const handlePromoteProduct = (productId: number) => {
//         setModalState(prev => ({
//             ...prev,
//             subscription: { show: true, productId }
//         }));
//     };

//     const handlePublishProduct = (productId: number) => {
//         setModalState(prev => ({
//             ...prev,
//             publish: { show: true, productId }
//         }));
//     };

//     const handleArchiveProduct = async (productId: number) => {
//         try {
//             setLoading(prev => ({ ...prev, action: true }));
//             NotificationService.showDialog("Archiving product...", "primary");
            
//             await ProductAxiosService.updateProduct(productId.toString(), 'archived');
            
//             // Remove from current list instead of updating status since we don't have status in the API response
//             setProducts(prev => prev.filter(product => product.id !== productId));
//             setSelectedProducts(prev => prev.filter(id => id !== productId));
            
//             NotificationService.showDialog("Product archived successfully", "success");
//         } catch (err: any) {
//             const errorMessage = err.response?.data?.message || err.message || 'Failed to archive product';
//             NotificationService.showDialog(errorMessage, 'error');
//         } finally {
//             setLoading(prev => ({ ...prev, action: false }));
//         }
//     };

//     const handleDeleteProduct = async (productId: number) => {
//         try {
//             setLoading(prev => ({ ...prev, action: true }));
//             NotificationService.showDialog("Deleting product...", "primary");
            
//             await ProductAxiosService.deleteProduct(productId.toString());
            
//             setProducts(prev => prev.filter(product => product.id !== productId));
//             setSelectedProducts(prev => prev.filter(id => id !== productId));
            
//             NotificationService.showDialog("Product deleted successfully", "success");
//         } catch (err: any) {
//             const errorMessage = err.response?.data?.message || err.message || 'Failed to delete product';
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
//                   ProductAxiosService.deleteProduct(productId.toString())
//                 )
//             );
            
//             setProducts(prev => 
//                 prev.filter(product => !selectedProducts.includes(product.id))
//             );

//             setSelectedProducts([]);
            
//             NotificationService.showDialog("Selected products deleted successfully", "success");
//         } catch (err: any) {
//             const errorMessage = err.response?.data?.message || err.message || 'Failed to delete products';
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
//                   ProductAxiosService.updateProduct(productId.toString(), 'archived')
//                 )
//             );
            
//             // Remove archived products from current list
//             setProducts(prev => 
//                 prev.filter(product => !selectedProducts.includes(product.id))
//             );

//             setSelectedProducts([]);
            
//             NotificationService.showDialog("Selected products archived successfully", "success");

//         } catch (err: any) {
//             const errorMessage = err.response?.data?.message || err.message || 'Failed to archive products';
//             NotificationService.showDialog(errorMessage, 'error');
//         } finally {
//             setLoading(prev => ({ ...prev, action: false }));
//         }

//     };

//     const handleLoadMore = () => {
//         if (pagination.has_next_page && !loading.loadingMore) {
//             fetchProducts(pagination.current_page_number + 1, true);
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

//     const formatDate = (dateString: string) => {
//         return new Date(dateString).toLocaleDateString('en-US', {
//             year: 'numeric',
//             month: 'short',
//             day: 'numeric'
//         });
//     };

//     const filteredProducts = useMemo(() => {
//         return products.filter(product => {
//             if (filters.search) {
//                 return product.name.toLowerCase().includes(filters.search.toLowerCase());
//             }
//             return true;
//         });
//     }, [products, filters.search]);

//     const handleSubscriptionSuccess = (subscription: any) => {
//         setModalState(prev => ({
//             ...prev,
//             subscription: { show: false, productId: 0 }
//         }));
        
//         NotificationService.showDialog("Product promotion activated successfully!", "success");
//         fetchProducts(); // Refresh the list
//     };

//     const handlePublishSuccess = () => {
//         setModalState(prev => ({
//             ...prev,
//             publish: { show: false, productId: 0 }
//         }));
        
//         NotificationService.showDialog("Product published successfully!", "success");
//         fetchProducts(); // Refresh the list
//     };

//     if (!currentUser) {
//         return (
//             <main className="content-wrapper">
//                 <div className="container pt-4 pt-lg-5 pb-5">
//                     <div className="text-center py-5">
//                         <i className="ci-user display-4 text-muted mb-3"></i>
//                         <h5 className="text-muted">Authentication Required</h5>
//                         <p className="text-muted">Please log in to view your products.</p>
//                         <button
//                             className="btn btn-primary"
//                             onClick={() => navigate('/login')}
//                         >
//                             Log In
//                         </button>
//                     </div>
//                 </div>
//             </main>
//         );
//     }

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
//                                     subscription: { show: false, productId: 0 }
//                                 }))}
//                             ></button>
//                         </div>
//                         <div className="modal-body">
//                             <div className="mb-4">
//                                 <h6 className="text-muted">Choose a promotion plan to boost your product visibility</h6>
//                             </div>
//                             <SubscriptionPlans
//                                 entityType="product"
//                                 entityId={modalState.subscription.productId.toString()}
//                                 onSubscriptionSuccess={handleSubscriptionSuccess}
//                             />
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Publish Modal */}
//             {modalState.publish.show && (
//                 <PublishModal
//                     productId={modalState.publish.productId.toString()}
//                     onSuccess={handlePublishSuccess}
//                     onClose={() => setModalState(prev => ({
//                         ...prev,
//                         publish: { show: false, productId: 0 }
//                     }))}
//                 />
//             )}

//             {/* Main Content */}
//             <main className="content-wrapper">
//                 <div className="container pt-4 pt-lg-5 pb-5">
//                     <div className="row pt-sm-2 pt-md-3 pt-lg-0 pb-2 pb-sm-3 pb-md-4 pb-lg-5">
//                         <Aside />

//                         <div className="col-lg-9 pt-2 pt-xl-3">
//                             <div data-filter-list='{"searchClass": "product-search", "listClass": "product-list", "sortClass": "product-sort", "valueNames": ["product", "category", "price", "rating"]}'>
                                
//                                 {/* Header */}
//                                 <div className="d-sm-flex align-items-center justify-content-between gap-3 pb-2 pb-sm-3 mb-md-2">
//                                     <h1 className="h2 text-nowrap mb-sm-0">
//                                         Products ({pagination.total_items_count})
//                                         {loading.products && (
//                                             <span className="spinner-border spinner-border-sm ms-2" role="status"></span>
//                                         )}
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
//                                             onClick={() => navigate('/account/products/create')}
//                                         >
//                                             <i className="ci-plus me-1"></i>
//                                             Add Product
//                                         </button>
//                                     </div>
//                                 </div>

//                                 {/* Filters and Controls */}
//                                 <div className="row align-items-center mb-4">
//                                     <div className="col-md-6">
//                                         <div className="d-flex gap-2 flex-wrap">
//                                             <div className="dropdown">
//                                                 <button 
//                                                     className="btn btn-outline-secondary dropdown-toggle" 
//                                                     type="button" 
//                                                     data-bs-toggle="dropdown"
//                                                     disabled={loading.products}
//                                                 >
//                                                     Type: {filters.type === 'all' ? 'All' : filters.type}
//                                                 </button>
//                                                 <ul className="dropdown-menu">
//                                                     <li><button className="dropdown-item" onClick={() => handleTypeFilter('all')}>All Types</button></li>
//                                                     <li><button className="dropdown-item" onClick={() => handleTypeFilter('page')}>Page</button></li>
//                                                     <li><button className="dropdown-item" onClick={() => handleTypeFilter('product')}>Product</button></li>
//                                                 </ul>
//                                             </div>
                                            
//                                             <div className="dropdown">
//                                                 <button 
//                                                     className="btn btn-outline-secondary dropdown-toggle" 
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
//                                             <div className="d-flex justify-content-md-end gap-2">
//                                                 <span className="badge bg-info rounded-pill px-3 py-2">
//                                                     {selectedProducts.length} selected
//                                                 </span>
//                                                 <button
//                                                     className="btn btn-outline-warning btn-sm"
//                                                     onClick={handleBulkArchive}
//                                                     disabled={loading.action}
//                                                 >
//                                                     <i className="ci-archive me-1"></i>
//                                                     Archive
//                                                 </button>
//                                                 <button
//                                                     className="btn btn-outline-danger btn-sm"
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

//                                 {/* Error Display */}
//                                 {error && (
//                                     <div className="alert alert-danger" role="alert">
//                                         <i className="ci-info-circle me-2"></i>
//                                         {error}
//                                         <button 
//                                             type="button" 
//                                             className="btn-close" 
//                                             onClick={() => setError(null)}
//                                         ></button>
//                                     </div>
//                                 )}

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
//                                                 </th>
//                                                 <th className="d-none d-md-table-cell" scope="col">
//                                                     <span className="fw-normal text-body">Category</span>
//                                                 </th>
//                                                 <th className="text-end d-none d-md-table-cell" scope="col">
//                                                     <button 
//                                                         type="button" 
//                                                         className="btn fw-normal text-body product-sort p-0 me-n2" 
//                                                         onClick={() => handleSort('price')}
//                                                     >
//                                                         Price
//                                                         {filters.sortBy === 'price' && (
//                                                             <i className={`ci-chevron-${filters.sortOrder === 'asc' ? 'up' : 'down'} ms-1`}></i>
//                                                         )}
//                                                     </button>
//                                                 </th>
//                                                 <th className="text-end d-none d-sm-table-cell" scope="col">
//                                                     <button 
//                                                         type="button" 
//                                                         className="btn fw-normal text-body product-sort p-0 me-n2" 
//                                                         onClick={() => handleSort('average_rating')}
//                                                     >
//                                                         Rating
//                                                         {filters.sortBy === 'average_rating' && (
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
//                                                             {filters.search || filters.type !== 'all'
//                                                                 ? 'Try adjusting your filters or search terms.'
//                                                                 : 'Start by creating your first product.'
//                                                             }
//                                                         </p>
//                                                         {!filters.search && filters.type === 'all' && (
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
//                                                                     <img 
//                                                                         src={product.image_urls?.[0] || '/assets/img/placeholder.jpg'} 
//                                                                         className="hover-effect-target" 
//                                                                         alt={product.name}
//                                                                         onError={(e) => {
//                                                                             e.currentTarget.src = '/assets/img/placeholder.jpg';
//                                                                         }}
//                                                                     />
//                                                                     {product.has_subscription && (
//                                                                         <div className="position-absolute top-0 start-0 m-2">
//                                                                             <span className="badge bg-warning text-dark">
//                                                                                 <i className="ci-zap me-1"></i>
//                                                                                 Promoted
//                                                                             </span>
//                                                                         </div>
//                                                                     )}
//                                                                 </div>
//                                                                 <div className="ps-2 ps-sm-3 ms-1">
//                                                                     <div className="d-md-none mb-1">
//                                                                         <span className="badge bg-primary rounded-pill fs-xs me-1">
//                                                                             {product.type}
//                                                                         </span>
//                                                                         {product.categories.map(category => (
//                                                                             <span key={category.id} className="badge bg-secondary rounded-pill fs-xs me-1">
//                                                                                 {category.name}
//                                                                             </span>
//                                                                         ))}
//                                                                     </div>
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
//                                                                             {formatCurrency(product.has_discount ? product.discounted_price : product.price)}
//                                                                             {product.has_discount && (
//                                                                                 <del className="text-muted fs-sm ms-1">
//                                                                                     {formatCurrency(product.price)}
//                                                                                 </del>
//                                                                             )}
//                                                                         </div>
//                                                                         <div className="d-flex gap-2">
//                                                                             <div className="d-flex align-items-center fs-xs text-body-emphasis bg-body-tertiary rounded-pill px-2 py-1">
//                                                                                 <i className="ci-star text-body-secondary me-1" />
//                                                                                 {product.average_rating.toFixed(1)}
//                                                                             </div>
//                                                                             <div className="d-flex align-items-center fs-xs text-body-emphasis bg-body-tertiary rounded-pill px-2 py-1">
//                                                                                 <i className="ci-message-circle text-body-secondary me-1" />
//                                                                                 {formatNumber(product.reviews_count)}
//                                                                             </div>
//                                                                             <div className="d-flex align-items-center fs-xs text-body-emphasis bg-body-tertiary rounded-pill px-2 py-1">
//                                                                                 <i className="ci-package text-body-secondary me-1" />
//                                                                                 Stock: {product.stock}
//                                                                             </div>
//                                                                         </div>
//                                                                     </div>
//                                                                     <div className="fs-xs text-nowrap d-md-none mt-2 mb-1">
//                                                                         <span className="text-body-secondary">Price:</span> {formatCurrency(product.has_discount ? product.discounted_price : product.price)}
//                                                                     </div>
//                                                                     <div className="fs-xs text-nowrap d-sm-none">
//                                                                         <span className="text-body-secondary">Rating:</span> {product.average_rating.toFixed(1)}/5
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                         </td>
//                                                         <td className="d-none d-md-table-cell py-3">
//                                                             <div className="d-flex flex-wrap gap-1">
//                                                                 <span className="badge bg-primary rounded-pill fs-xs">
//                                                                     {product.type}
//                                                                 </span>
//                                                                 {product.categories.map(category => (
//                                                                     <span key={category.id} className="badge bg-secondary rounded-pill fs-xs">
//                                                                         {category.name}
//                                                                     </span>
//                                                                 ))}
//                                                             </div>
//                                                         </td>
//                                                         <td className="d-none d-md-table-cell text-end py-3">
//                                                             <div className="h6 mb-0">
//                                                                 {formatCurrency(product.has_discount ? product.discounted_price : product.price)}
//                                                                 {product.has_discount && (
//                                                                     <>
//                                                                         <br />
//                                                                         <del className="text-muted fs-sm">
//                                                                             {formatCurrency(product.price)}
//                                                                         </del>
//                                                                         <span className="badge bg-danger ms-1">
//                                                                             {product.discount_percentage}% OFF
//                                                                         </span>
//                                                                     </>
//                                                                 )}
//                                                             </div>
//                                                         </td>
//                                                         <td className="text-end d-none d-sm-table-cell py-3">
//                                                             <div className="d-flex align-items-center justify-content-end">
//                                                                 <div className="star-rating me-2">
//                                                                     {[...Array(5)].map((_, i) => (
//                                                                         <i 
//                                                                             key={i} 
//                                                                             className={`ci-star${i < Math.floor(product.average_rating) ? '-filled' : ''} text-warning`}
//                                                                         ></i>
//                                                                     ))}
//                                                                 </div>
//                                                                 <span className="fs-sm">
//                                                                     {product.average_rating.toFixed(1)} ({product.reviews_count})
//                                                                 </span>
//                                                             </div>
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

//                                 {/* Load More Button */}
//                                 {pagination.has_next_page && (
//                                     <div className="text-center pt-4">
//                                         <button
//                                             className="btn btn-outline-primary"
//                                             onClick={handleLoadMore}
//                                             disabled={loading.loadingMore}
//                                         >
//                                             {loading.loadingMore ? (
//                                                 <>
//                                                     <span className="spinner-border spinner-border-sm me-2" role="status"></span>
//                                                     Loading more...
//                                                 </>
//                                             ) : (
//                                                 <>
//                                                     <i className="ci-chevron-down me-1"></i>
//                                                     Load More Products
//                                                 </>
//                                             )}
//                                         </button>
//                                     </div>
//                                 )}

//                                 {/* Pagination */}
//                                 {pagination.total_pages_count > 1 && (
//                                     <nav className="d-flex justify-content-center pt-4" aria-label="Products pagination">
//                                         <ul className="pagination">
//                                             <li className={`page-item ${!pagination.has_prev_page ? 'disabled' : ''}`}>
//                                                 <button 
//                                                     className="page-link"
//                                                     onClick={() => setPagination(prev => ({ ...prev, current_page_number: prev.current_page_number - 1 }))}
//                                                     disabled={!pagination.has_prev_page || loading.products}
//                                                 >
//                                                     <i className="ci-chevron-left"></i>
//                                                 </button>
//                                             </li>
                                            
//                                             {Array.from({ length: Math.min(5, pagination.total_pages_count) }, (_, i) => {
//                                                 let pageNum;
//                                                 if (pagination.total_pages_count <= 5) {
//                                                     pageNum = i + 1;
//                                                 } else if (pagination.current_page_number <= 3) {
//                                                     pageNum = i + 1;
//                                                 } else if (pagination.current_page_number >= pagination.total_pages_count - 2) {
//                                                     pageNum = pagination.total_pages_count - 4 + i;
//                                                 } else {
//                                                     pageNum = pagination.current_page_number - 2 + i;
//                                                 }
                                                
//                                                 return (
//                                                     <li key={pageNum} className={`page-item ${pagination.current_page_number === pageNum ? 'active' : ''}`}>
//                                                         <button 
//                                                             className="page-link"
//                                                             onClick={() => setPagination(prev => ({ ...prev, current_page_number: pageNum }))}
//                                                             disabled={loading.products}
//                                                         >
//                                                             {pageNum}
//                                                         </button>
//                                                     </li>
//                                                 );
//                                             })}
                                            
//                                             <li className={`page-item ${!pagination.has_next_page ? 'disabled' : ''}`}>
//                                                 <button 
//                                                     className="page-link"
//                                                     onClick={() => setPagination(prev => ({ ...prev, current_page_number: prev.current_page_number + 1 }))}
//                                                     disabled={!pagination.has_next_page || loading.products}
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
//                                             Showing {pagination.offset + 1} to {Math.min(pagination.offset + pagination.requested_page_size, pagination.total_items_count)} of {pagination.total_items_count} products
//                                         </small>
//                                         <div className="d-flex gap-2">
//                                             <select 
//                                                 className="form-select form-select-sm"
//                                                 value={pagination.requested_page_size}
//                                                 onChange={(e) => {
//                                                     const newPageSize = parseInt(e.target.value);
//                                                     setPagination(prev => ({ 
//                                                         ...prev, 
//                                                         requested_page_size: newPageSize,
//                                                         current_page_number: 1 
//                                                     }));
//                                                 }}
//                                                 disabled={loading.products}
//                                                 style={{width: 'auto'}}
//                                             >
//                                                 <option value={5}>5 per page</option>
//                                                 <option value={10}>10 per page</option>
//                                                 <option value={25}>25 per page</option>
//                                                 <option value={50}>50 per page</option>
//                                                 <option value={100}>100 per page</option>
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
//             {(modalState.subscription.show || modalState.publish.show) && (
//                 <div className="modal-backdrop fade show"></div>
//             )}
//         </>
//     );
// };

// export default Products;


// // v4
// import { useState, useEffect, useMemo } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import LoadingSpinner, { LoadingZoom } from '../../../components/shared/LoadingSpinner';
// import SubscriptionPlans from '../../../components/shared/modals/publish/Promote';
// import PublishPage from '../../../components/shared/modals/publish/PublishPage';
// import { NotificationService } from '../../../services/local/NotificationService';
// import { ProductAxiosService } from '../../../services/net/ProductAxiosService';
// import Aside from '../shared/Aside';
// // import LoadingSpinner, { LoadingZoom } from '../../../components/shared/LoadingSpinner';
// // import { NotificationService } from '../../../services/local/NotificationService';
// // import { ProductAxiosService } from '../../../services/net/ProductAxiosService';
// // import Aside from '../shared/Aside';
// // import SubscriptionPlans from '../../../components/shared/modals/publish/Promote';
// // import PublishPage from '../../../components/shared/modals/publish/PublishPage';
// // import SubscriptionPlans from '../shared/SubscriptionPlans';
// // import PublishModal from './PublishModal';

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
//     }, [filters, pagination.current_page]);

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

//             const response = await ProductAxiosService.getByOwner(params, 'james');
            
//             if (response.data.success) {
//                 setProducts(response.data.products);


//             setPagination({
//                 current_page: response.data.page_meta.current_page_number,
//                 last_page: response.data.page_meta.total_pages_count,   // total pages in pagination
//                 total: response.data.page_meta.total_items_count,       // total items
//                 per_page: response.data.page_meta.requested_page_size
//             });

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
        
//         // Update the product's promotion status
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
//         fetchProducts(); // Refresh the list
//     };

//     const handlePublishSuccess = () => {
//         setModalState(prev => ({
//             ...prev,
//             publish: { show: false, productId: '' }
//         }));
        
//         NotificationService.showDialog("Product published successfully!", "success");
//         fetchProducts(); // Refresh the list
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
//                     // productId={modalState.publish.productId}
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
//                                         {/* Products ({pagination.total_items_count}) */}
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
//                                             onClick={() => navigate('/account/products/create')}
//                                         >
//                                             <i className="ci-plus me-1"></i>
//                                             Add Product
//                                         </button>
//                                     </div>
//                                 </div>

//                                 {/* Filters and Controls */}
//                                 <div className="row align-items-center mb-4">
//                                     <div className="col-md-6">
//                                         <div className="d-flex gap-2 flex-wrap">
//                                             <div className="dropdown">
//                                                 <button 
//                                                     className="btn btn-outline-secondary dropdown-toggle" 
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
//                                                     className="btn btn-outline-secondary dropdown-toggle" 
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
//                                             <div className="d-flex justify-content-md-end gap-2">
//                                                 <span className="badge bg-info rounded-pill px-3 py-2">
//                                                     {selectedProducts.length} selected
//                                                 </span>
//                                                 <button
//                                                     className="btn btn-outline-warning btn-sm"
//                                                     onClick={handleBulkArchive}
//                                                     disabled={loading.action}
//                                                 >
//                                                     <i className="ci-archive me-1"></i>
//                                                     Archive
//                                                 </button>
//                                                 <button
//                                                     className="btn btn-outline-danger btn-sm"
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
//                                                       <Link to={`/users/`} className="badge animate-target d-inline-flex text-decoration-none align-items-center text-info bg-info-subtle fw-semibold rounded-pill" 
//                                                           target="_blank" rel="noreferrer">
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
//                                                                     <img 
//                                                                         src={product.image_url || '/assets/img/placeholder.jpg'} 
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
//                                                                                 <i className="ci-eye text-body-secondary me-1" />
//                                                                                 {formatNumber(product.views_count)}
//                                                                             </div>
//                                                                             <div className="d-flex align-items-center fs-xs text-body-emphasis bg-body-tertiary rounded-pill px-2 py-1">
//                                                                                 <i className="ci-heart text-body-secondary me-1" />
//                                                                                 {formatNumber(product.favorites_count)}
//                                                                             </div>
//                                                                             <div className="d-flex align-items-center fs-xs text-body-emphasis bg-body-tertiary rounded-pill px-2 py-1">
//                                                                                 <i className="ci-message-circle text-body-secondary me-1" />
//                                                                                 {formatNumber(product.comments_count)}
//                                                                             </div>
//                                                                             <div className="d-flex align-items-center fs-xs text-body-emphasis bg-body-tertiary rounded-pill px-2 py-1">
//                                                                                 <i className="ci-phone text-body-secondary me-1" />
//                                                                                 {formatNumber(product.calls_count)}
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
//                                                 <option value={10}>10 per page</option>
//                                                 <option value={25}>25 per page</option>
//                                                 <option value={50}>50 per page</option>
//                                                 <option value={100}>100 per page</option>
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

// v4
import { useState, useEffect, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LoadingSpinner, { LoadingZoom } from '../../../components/shared/LoadingSpinner';
import SubscriptionPlans from '../../../components/shared/modals/publish/Promote';
import PublishPage from '../../../components/shared/modals/publish/PublishPage';
import { NotificationService } from '../../../services/local/NotificationService';
import { ProductAxiosService } from '../../../services/net/ProductAxiosService';
import Aside from '../shared/Aside';
import { UsersService } from '../../../services/local/UsersService';

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

    useEffect(() => {
        const observer = (data: any) => {
            // Handle notification updates if needed
        };

        NotificationService.subscribe(observer);
        return () => {
            NotificationService.unsubscribe(observer);
        };
    }, []);

    useEffect(() => {
        fetchProducts();
    }, [filters, pagination.current_page, pagination.per_page]);

    // Get current user
    const currentUser = UsersService.getCurrentUser();

    const fetchProducts = async () => {
        try {
            setLoading(prev => ({ ...prev, products: true }));
            
            const params = {
                page: pagination.current_page,
                per_page: pagination.per_page,
                status: filters.status !== 'all' ? filters.status : undefined,
                search: filters.search || undefined,
                sort_by: filters.sortBy,
                sort_order: filters.sortOrder
            };

            // const response = await ProductAxiosService.getByOwner(params);
            
            // Use username or email as identifier
            const username = currentUser.username || currentUser.email;
            const response = await ProductAxiosService.getByOwner(params, username);
            
            if (response.data.success) {
                setProducts(response.data.products);
                setPagination({
                    current_page: response.data.page_meta.current_page_number,
                    last_page: response.data.page_meta.total_pages_count,
                    total: response.data.page_meta.total_items_count,
                    per_page: response.data.page_meta.requested_page_size
                });
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

    const handleSearch = (searchTerm: string) => {
        setFilters(prev => ({ ...prev, search: searchTerm }));
        setPagination(prev => ({ ...prev, current_page: 1 }));
    };

    const handleSort = (sortBy: string) => {
        setFilters(prev => ({
            ...prev,
            sortBy,
            sortOrder: prev.sortBy === sortBy && prev.sortOrder === 'asc' ? 'desc' : 'asc'
        }));
    };

    const handleStatusFilter = (status: string) => {
        setFilters(prev => ({ ...prev, status }));
        setPagination(prev => ({ ...prev, current_page: 1 }));
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

    const handleEditProduct = (productId: string) => {
        navigate(`/users/products/${productId}/edit`);
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

    const filteredProducts = useMemo(() => {
        return products.filter(product => {
            if (filters.status !== 'all' && product.status !== filters.status) {
                return false;
            }
            if (filters.search) {
                return product.name.toLowerCase().includes(filters.search.toLowerCase());
            }
            return true;
        });
    }, [products, filters]);

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

    if (loading.products && products.length === 0) {
        return (
            <main className="content-wrapper">
                <div className="container pt-4 pt-lg-5 pb-5">
                    <div className="text-center py-5">
                        <LoadingSpinner />
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
                                        <div className="position-relative" style={{maxWidth: '300px'}}>
                                            <i className="ci-search position-absolute top-50 start-0 translate-middle-y ms-3" />
                                            <input 
                                                type="search" 
                                                className="product-search form-control form-icon-start rounded-pill" 
                                                placeholder="Search products..."
                                                value={filters.search}
                                                onChange={(e) => handleSearch(e.target.value)}
                                                disabled={loading.products}
                                            />
                                        </div>
                                        <button
                                            className="btn btn-primary rounded-pill"
                                            onClick={() => navigate('/account/products/create')}
                                        >
                                            <i className="ci-plus me-1"></i>
                                            Add Product
                                        </button>
                                    </div>
                                </div>

                                {/* Filters and Controls */}
                                <div className="row align-items-center mb-4">
                                    <div className="col-md-6">
                                        <div className="d-flex gap-2 flex-wrap">
                                            <div className="dropdown">
                                                <button 
                                                    className="btn btn-outline-secondary dropdown-toggle" 
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
                                                    className="btn btn-outline-secondary dropdown-toggle" 
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
                                            <div className="d-flex justify-content-md-end gap-2">
                                                <span className="badge bg-info rounded-pill px-3 py-2">
                                                    {selectedProducts.length} selected
                                                </span>
                                                <button
                                                    className="btn btn-outline-warning btn-sm"
                                                    onClick={handleBulkArchive}
                                                    disabled={loading.action}
                                                >
                                                    <i className="ci-archive me-1"></i>
                                                    Archive
                                                </button>
                                                <button
                                                    className="btn btn-outline-danger btn-sm"
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
                                                      <Link to={`/users/products`} className="badge animate-target d-inline-flex text-decoration-none align-items-center text-info bg-info-subtle fw-semibold rounded-pill">
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
                                                                    <img 
                                                                        src={product.image_url || '/assets/img/placeholder.jpg'} 
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
                                                                                <i className="ci-eye text-body-secondary me-1" />
                                                                                {formatNumber(product.views_count)}
                                                                            </div>
                                                                            <div className="d-flex align-items-center fs-xs text-body-emphasis bg-body-tertiary rounded-pill px-2 py-1">
                                                                                <i className="ci-heart text-body-secondary me-1" />
                                                                                {formatNumber(product.favorites_count)}
                                                                            </div>
                                                                            <div className="d-flex align-items-center fs-xs text-body-emphasis bg-body-tertiary rounded-pill px-2 py-1">
                                                                                <i className="ci-message-circle text-body-secondary me-1" />
                                                                                {formatNumber(product.comments_count)}
                                                                            </div>
                                                                            <div className="d-flex align-items-center fs-xs text-body-emphasis bg-body-tertiary rounded-pill px-2 py-1">
                                                                                <i className="ci-phone text-body-secondary me-1" />
                                                                                {formatNumber(product.calls_count)}
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
                                                                        <button 
                                                                            className="dropdown-item"
                                                                            onClick={() => handleEditProduct(product.id)}
                                                                        >
                                                                            <i className="ci-edit opacity-75 me-2" />
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

                                {/* Pagination */}
                                {pagination.last_page > 1 && (
                                    <nav className="d-flex justify-content-center pt-4" aria-label="Products pagination">
                                        <ul className="pagination">
                                            <li className={`page-item ${pagination.current_page === 1 ? 'disabled' : ''}`}>
                                                <button 
                                                    className="page-link"
                                                    onClick={() => setPagination(prev => ({ ...prev, current_page: prev.current_page - 1 }))}
                                                    disabled={pagination.current_page === 1 || loading.products}
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
                                                            onClick={() => setPagination(prev => ({ ...prev, current_page: pageNum }))}
                                                            disabled={loading.products}
                                                        >
                                                            {pageNum}
                                                        </button>
                                                    </li>
                                                );
                                            })}
                                            
                                            <li className={`page-item ${pagination.current_page === pagination.last_page ? 'disabled' : ''}`}>
                                                <button 
                                                    className="page-link"
                                                    onClick={() => setPagination(prev => ({ ...prev, current_page: prev.current_page + 1 }))}
                                                    disabled={pagination.current_page === pagination.last_page || loading.products}
                                                >
                                                    <i className="ci-chevron-right"></i>
                                                </button>
                                            </li>
                                        </ul>
                                    </nav>
                                )}

                                {/* Results Info */}
                                {filteredProducts.length > 0 && (
                                    <div className="d-flex justify-content-between align-items-center pt-3 border-top">
                                        <small className="text-muted">
                                            Showing {((pagination.current_page - 1) * pagination.per_page) + 1} to {Math.min(pagination.current_page * pagination.per_page, pagination.total)} of {pagination.total} products
                                        </small>
                                        <div className="d-flex gap-2">
                                            <select 
                                                className="form-select form-select-sm"
                                                value={pagination.per_page}
                                                onChange={(e) => setPagination(prev => ({ 
                                                    ...prev, 
                                                    per_page: parseInt(e.target.value),
                                                    current_page: 1 
                                                }))}
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

// v5
// import { useState, useEffect, useMemo } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import LoadingSpinner, { LoadingZoom } from '../../../components/shared/LoadingSpinner';
// import { NotificationService } from '../../../services/local/NotificationService';
// import { ProductAxiosService } from '../../../services/net/ProductAxiosService';
// import Aside from '../shared/Aside';
// import SubscriptionPlans from '../../../components/shared/modals/publish/Promote';
// import PublishPage from '../../../components/shared/modals/publish/PublishPage';
// // import SubscriptionPlans from '../shared/SubscriptionPlans';
// // import PublishModal from './PublishModal';

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
//         per_page: 5 // Changed from 5 to 5 as requested
//     });
//     const [modalState, setModalState] = useState({
//         subscription: { show: false, productId: '' },
//         publish: { show: false, productId: '' },
//         delete: { show: false, productId: '' }
//     });
//     const [currentUser, setCurrentUser] = useState('james'); // You should get this from auth context or props

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

//             // Fixed: Use currentUser instead of hardcoded 'james'
//             const response = await ProductAxiosService.getByOwner(params, currentUser);
            
//             if (response.data.success) {
//                 setProducts(response.data.products);

//                 // Fixed pagination mapping
//                 setPagination(prev => ({
//                     ...prev,
//                     current_page: response.data.page_meta.current_page_number,
//                     last_page: response.data.page_meta.total_pages_count,   // total pages in pagination
//                     total: response.data.page_meta.total_items_count,       // total items
//                     // Don't update per_page from response to maintain user selection
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
        
//         // Update the product's promotion status
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
//         fetchProducts(); // Refresh the list
//     };

//     const handlePublishSuccess = () => {
//         setModalState(prev => ({
//             ...prev,
//             publish: { show: false, productId: '' }
//         }));
        
//         NotificationService.showDialog("Product published successfully!", "success");
//         fetchProducts(); // Refresh the list
//     };

//     // Fixed: Handle per page change properly
//     const handlePerPageChange = (newPerPage: number) => {
//         setPagination(prev => ({ 
//             ...prev, 
//             per_page: newPerPage,
//             current_page: 1 // Reset to first page when changing per page
//         }));
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
//                     // productId={modalState.publish.productId}
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
//                                             onClick={() => navigate('/account/products/create')}
//                                         >
//                                             <i className="ci-plus me-1"></i>
//                                             Add Product
//                                         </button>
//                                     </div>
//                                 </div>

//                                 {/* Filters and Controls */}
//                                 <div className="row align-items-center mb-4">
//                                     <div className="col-md-6">
//                                         <div className="d-flex gap-2 flex-wrap">
//                                             <div className="dropdown">
//                                                 <button 
//                                                     className="btn btn-outline-secondary dropdown-toggle" 
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
//                                                     className="btn btn-outline-secondary dropdown-toggle" 
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
//                                             <div className="d-flex justify-content-md-end gap-2">
//                                                 <span className="badge bg-info rounded-pill px-3 py-2">
//                                                     {selectedProducts.length} selected
//                                                 </span>
//                                                 <button
//                                                     className="btn btn-outline-warning btn-sm"
//                                                     onClick={handleBulkArchive}
//                                                     disabled={loading.action}
//                                                 >
//                                                     <i className="ci-archive me-1"></i>
//                                                     Archive
//                                                 </button>
//                                                 <button
//                                                     className="btn btn-outline-danger btn-sm"
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
//                                                       {/* Fixed: Link to user's public product page */}
//                                                       <Link to={`/users/${currentUser}/products`} className="badge animate-target d-inline-flex text-decoration-none align-items-center text-info bg-info-subtle fw-semibold rounded-pill" 
//                                                           target="_blank" rel="noreferrer">
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
//                                                                     <img 
//                                                                         src={product.image_url || '/assets/img/placeholder.jpg'} 
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
//                                                                                 <i className="ci-phone text-body-secondary me-1" />
//                                                                                 {formatNumber(product.calls_count)}
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
//                                                 onChange={(e) => handlePerPageChange(parseInt(e.target.value))}
//                                                 disabled={loading.products}
//                                                 style={{width: 'auto'}}
//                                             >
//                                                 <option value={5}>5 per page</option>
//                                                 <option value={10}>10 per page</option>
//                                                 <option value={25}>25 per page</option>
//                                                 <option value={50}>50 per page</option>
//                                                 <option value={100}>100 per page</option>
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

// // 5
// import { useState, useEffect, useMemo, useCallback, useRef } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import LoadingSpinner from '../../../components/shared/LoadingSpinner';
// // import Aside from '../shared/Aside';
// // import SubscriptionPlans from '../../../components/shared/modals/publish/Promote';
// // // import PublishModal from './PublishModal';
// // import { NotificationService } from '../../../services/local/NotificationService';
// // import { ProductAxiosService } from '../../../services/net/ProductAxiosService';
// // import { UsersService } from '../../../services/local/UsersService';

// import { NotificationService } from '../../../services/local/NotificationService';
// import { ProductAxiosService } from '../../../services/net/ProductAxiosService';
// import Aside from '../shared/Aside';
// import SubscriptionPlans from '../../../components/shared/modals/publish/Promote';
// import PublishPage from '../../../components/shared/modals/publish/PublishPage';
// import { useNavigate } from 'react-router-dom';
// import LoadingSpinner from '../../../components/shared/LoadingSpinner';
// import { UsersService } from '../../../services/local/UsersService';

// interface Product {
//     id: number;
//     name: string;
//     slug: string;
//     price: number;
//     discounted_price: number;
//     discount_percentage: number;
//     has_discount: boolean;
//     image_urls: string[];
//     stock: number;
//     average_rating: number;
//     reviews_count: number;
//     categories: Array<{
//         id: number;
//         name: string;
//         slug: string;
//     }>;
//     attributes: Array<{
//         key: string;
//         value: string;
//     }>;
//     tags: string[];
//     type: string;
//     user_id: number;
//     page_id: number | null;
//     has_subscription: boolean;
//     subscription: any;
//     created_at: string;
//     updated_at?: string;
// }

// interface PageMeta {
//     current_page_number: number;
//     has_next_page: boolean;
//     has_prev_page: boolean;
//     next_page_url: string | null;
//     prev_page_url: string | null;
//     offset: number;
//     requested_page_size: number;
//     total_items_count: number;
//     total_pages_count: number;
// }

// interface ProductsResponse {
//     data: {
//         message: string;
//         page_meta: PageMeta;
//         products: Product[];
//         success: boolean;
//     };
//     status: number;
//     statusText: string;
// }

// interface SortOption {
//     value: string;
//     label: string;
// }

// interface FilterOptions {
//     category: string;
//     search: string;
//     sortBy: string;
//     sortOrder: 'asc' | 'desc';
//     type: string;
// }

// const Products = () => {
//     const navigate = useNavigate();
//     const [products, setProducts] = useState<Product[]>([]);
//     const [loading, setLoading] = useState({
//         products: true,
//         action: false
//     });
//     const [selectedProducts, setSelectedProducts] = useState<number[]>([]);
//     const [filters, setFilters] = useState<FilterOptions>({
//         category: 'all',
//         search: '',
//         sortBy: 'created_at',
//         sortOrder: 'desc',
//         type: 'all'
//     });

//     // const [pagination, setPagination] = useState<PageMeta>({
//     //     current_page_number: 1,
//     //     has_next_page: false,
//     //     has_prev_page: false,
//     //     next_page_url: null,
//     //     prev_page_url: null,
//     //     offset: 0,
//     //     requested_page_size: 5,
//     //     total_items_count: 0,
//     //     total_pages_count: 0
//     // });
//     const [pagination, setPagination] = useState({
//         current_page: 1,
//         last_page: 1,
//         total: 0,
//         per_page: 5
//     });

//     const [modalState, setModalState] = useState({
//         subscription: { show: false, productId: 0 },
//         publish: { show: false, productId: 0 },
//         delete: { show: false, productId: 0 }
//     });
//     const [error, setError] = useState<string | null>(null);
//     // const [currentUser, setCurrentUser] = useState('james');
//     // Refs to track current state without causing re-renders
//     const filtersRef = useRef(filters);
//     const paginationRef = useRef(pagination);
    
//     // Keep refs updated with latest state
//     useEffect(() => {
//         filtersRef.current = filters;
//         paginationRef.current = pagination;
//     });

//     const sortOptions: SortOption[] = [
//         { value: 'created_at', label: 'Date Created' },
//         { value: 'name', label: 'Product Name' },
//         { value: 'price', label: 'Price' },
//         { value: 'average_rating', label: 'Rating' },
//         { value: 'reviews_count', label: 'Reviews' }
//     ];

//     // Get current user
//     const currentUser = UsersService.getCurrentUser();

//     useEffect(() => {
//         const observer = (data: any) => {
//             // Handle notification updates if needed
//         };

//         NotificationService.subscribe(observer);
//         return () => {
//             NotificationService.unsubscribe(observer);
//         };
//     }, []);

//     // const fetchProducts = useCallback(async () => {
//     //     if (!currentUser) return;

//     //     try {
//     //         setLoading(prev => ({ ...prev, products: true }));
//     //         setError(null);

//     //         // Use ref values to get the latest state without dependencies
//     //         const currentFilters = filtersRef.current;
//     //         const currentPagination = paginationRef.current;

//     //         const queryParams: Record<string, any> = {
//     //             page: currentPagination.current_page_number,
//     //             page_size: currentPagination.requested_page_size
//     //         };

//     //         // Add filters to query params
//     //         if (currentFilters.search) {
//     //             queryParams.search = currentFilters.search;
//     //         }
//     //         if (currentFilters.category !== 'all') {
//     //             queryParams.category = currentFilters.category;
//     //         }
//     //         if (currentFilters.type !== 'all') {
//     //             queryParams.type = currentFilters.type;
//     //         }
//     //         if (currentFilters.sortBy) {
//     //             queryParams.sort_by = currentFilters.sortBy;
//     //             queryParams.sort_order = currentFilters.sortOrder;
//     //         }

//     //         // Use username or email as identifier
//     //         const identifier = currentUser.username || currentUser.email;
            
//     //         const response: ProductsResponse = await ProductAxiosService.getByOwner(
//     //             queryParams,
//     //             identifier
//     //         );

//     //         if (response.data.success) {
//     //             setProducts(response.data.products);
//     //             setPagination(prev => ({
//     //                 ...prev,
//     //                 ...response.data.page_meta
//     //             }));
//     //         } else {
//     //             throw new Error(response.data.message || 'Failed to load products');
//     //         }
//     //     } catch (err: any) {
//     //         console.error("Products fetch error:", err);
//     //         const errorMessage = err.response?.data?.message || err.message || 'Failed to load products';
//     //         setError(errorMessage);
//     //         NotificationService.showDialog(errorMessage, 'error');
//     //         setProducts([]);
//     //     } finally {
//     //         setLoading(prev => ({
//     //             ...prev,
//     //             products: false
//     //         }));
//     //     }
//     // }, [currentUser]); // Only currentUser as dependency

//     // 
    
//     // Wrap fetchProducts in useCallback with proper dependencies
//     const fetchProducts = useCallback(async () => {
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
//             const username = currentUser?.username || '';
//             const response = await ProductAxiosService.getByOwner(params, username);
            
//             if (response.data.success) {
//                 setProducts(response.data.products);
//                 setPagination(prev => ({
//                     ...prev,
//                     current_page: response.data.page_meta.current_page_number,
//                     last_page: response.data.page_meta.total_pages_count,
//                     total: response.data.page_meta.total_items_count
//                     // Don't update per_page from response to maintain user selection
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
//     }, [currentUser, filters, pagination.current_page, pagination.per_page]);

    
//     // Trigger fetch when filters or pagination changes
//     useEffect(() => {
//         if (currentUser) {
//             fetchProducts();
//         }
//     }, [
//         // currentUser,
//         filters.search,
//         filters.category,
//         filters.type,
//         filters.sortBy,
//         filters.sortOrder,
//         pagination.current_page_number,
//         pagination.requested_page_size
//     ]);

//     const handleSearch = (searchTerm: string) => {
//         setFilters(prev => ({ ...prev, search: searchTerm }));
//         setPagination(prev => ({ ...prev, current_page_number: 1 }));
//     };

//     const handleSort = (sortBy: string) => {
//         setFilters(prev => ({
//             ...prev,
//             sortBy,
//             sortOrder: prev.sortBy === sortBy && prev.sortOrder === 'asc' ? 'desc' : 'asc'
//         }));
//         setPagination(prev => ({ ...prev, current_page_number: 1 }));
//     };

//     const handleCategoryFilter = (category: string) => {
//         setFilters(prev => ({ ...prev, category }));
//         setPagination(prev => ({ ...prev, current_page_number: 1 }));
//     };

//     const handleTypeFilter = (type: string) => {
//         setFilters(prev => ({ ...prev, type }));
//         setPagination(prev => ({ ...prev, current_page_number: 1 }));
//     };

//     const handleProductSelect = (productId: number, isSelected: boolean) => {
//         setSelectedProducts(prev =>
//             isSelected
//                 ? [...prev, productId]
//                 : prev.filter(id => id !== productId)
//         );
//     };

//     const handleSelectAll = (isSelected: boolean) => {
//         setSelectedProducts(isSelected ? products.map(product => product.id) : []);
//     };

//     const handleEditProduct = (productId: number) => {
//         navigate(`/users/products/${productId}/edit`);
//     };

//     const handlePromoteProduct = (productId: number) => {
//         setModalState(prev => ({
//             ...prev,
//             subscription: { show: true, productId }
//         }));
//     };

//     const handlePublishProduct = (productId: number) => {
//         setModalState(prev => ({
//             ...prev,
//             publish: { show: true, productId }
//         }));
//     };

//     const handleArchiveProduct = async (productId: number) => {
//         try {
//             setLoading(prev => ({ ...prev, action: true }));
//             NotificationService.showDialog("Archiving product...", "primary");
            
//             await ProductAxiosService.updateProduct(productId.toString(), 'archived');
            
//             // Remove from current list
//             setProducts(prev => prev.filter(product => product.id !== productId));
//             setSelectedProducts(prev => prev.filter(id => id !== productId));
            
//             NotificationService.showDialog("Product archived successfully", "success");
//         } catch (err: any) {
//             const errorMessage = err.response?.data?.message || err.message || 'Failed to archive product';
//             NotificationService.showDialog(errorMessage, 'error');
//         } finally {
//             setLoading(prev => ({ ...prev, action: false }));
//         }
//     };

//     const handleDeleteProduct = async (productId: number) => {
//         try {
//             setLoading(prev => ({ ...prev, action: true }));
//             NotificationService.showDialog("Deleting product...", "primary");
            
//             await ProductAxiosService.deleteProduct(productId.toString());
            
//             setProducts(prev => prev.filter(product => product.id !== productId));
//             setSelectedProducts(prev => prev.filter(id => id !== productId));
            
//             NotificationService.showDialog("Product deleted successfully", "success");
//         } catch (err: any) {
//             const errorMessage = err.response?.data?.message || err.message || 'Failed to delete product';
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
//                   ProductAxiosService.deleteProduct(productId.toString())
//                 )
//             );
            
//             setProducts(prev => 
//                 prev.filter(product => !selectedProducts.includes(product.id))
//             );
//             setSelectedProducts([]);
            
//             NotificationService.showDialog("Selected products deleted successfully", "success");
//         } catch (err: any) {
//             const errorMessage = err.response?.data?.message || err.message || 'Failed to delete products';
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
//                   ProductAxiosService.updateProduct(productId.toString(), 'archived')
//                 )
//             );
            
//             // Remove archived products
//             setProducts(prev => 
//                 prev.filter(product => !selectedProducts.includes(product.id))
//             );
//             setSelectedProducts([]);
            
//             NotificationService.showDialog("Selected products archived successfully", "success");
//         } catch (err: any) {
//             const errorMessage = err.response?.data?.message || err.message || 'Failed to archive products';
//             NotificationService.showDialog(errorMessage, 'error');
//         } finally {
//             setLoading(prev => ({ ...prev, action: false }));
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

//     const handleSubscriptionSuccess = (subscription: any) => {
//         setModalState(prev => ({
//             ...prev,
//             subscription: { show: false, productId: 0 }
//         }));
//         NotificationService.showDialog("Product promotion activated successfully!", "success");
//         fetchProducts();
//     };

//     const handlePublishSuccess = () => {
//         setModalState(prev => ({
//             ...prev,
//             publish: { show: false, productId: 0 }
//         }));
//         NotificationService.showDialog("Product published successfully!", "success");
//         fetchProducts();
//     };

//     if (!currentUser) {
//         return (
//             <main className="content-wrapper">
//                 <div className="container pt-4 pt-lg-5 pb-5">
//                     <div className="text-center py-5">
//                         <i className="ci-user display-4 text-muted mb-3"></i>
//                         <h5 className="text-muted">Authentication Required</h5>
//                         <p className="text-muted">Please log in to view your products.</p>
//                         <button
//                             className="btn btn-primary"
//                             onClick={() => navigate('/login')}
//                         >
//                             Log In
//                         </button>
//                     </div>
//                 </div>
//             </main>
//         );
//     }

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
//                                     subscription: { show: false, productId: 0 }
//                                 }))}
//                             ></button>
//                         </div>
//                         <div className="modal-body">
//                             <div className="mb-4">
//                                 <h6 className="text-muted">Choose a promotion plan to boost your product visibility</h6>
//                             </div>
//                             <SubscriptionPlans
//                                 entityType="product"
//                                 entityId={modalState.subscription.productId.toString()}
//                                 onSubscriptionSuccess={handleSubscriptionSuccess}
//                             />
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Main Content */}
//             <main className="content-wrapper">
//                 <div className="container pt-4 pt-lg-5 pb-5">
//                     <div className="row pt-sm-2 pt-md-3 pt-lg-0 pb-2 pb-sm-3 pb-md-4 pb-lg-5">
//                         <Aside />

//                         <div className="col-lg-9 pt-2 pt-xl-3">
//                             <div data-filter-list='{"searchClass": "product-search", "listClass": "product-list", "sortClass": "product-sort", "valueNames": ["product", "category", "price", "rating"]}'>
                                
//                                 {/* Header */}
//                                 <div className="d-sm-flex align-items-center justify-content-between gap-3 pb-2 pb-sm-3 mb-md-2">
//                                     <h1 className="h2 text-nowrap mb-sm-0">
//                                         Products ({pagination.total_items_count})
//                                         {loading.products && (
//                                             <span className="spinner-border spinner-border-sm ms-2" role="status"></span>
//                                         )}
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
//                                             onClick={() => navigate('/account/products/create')}
//                                         >
//                                             <i className="ci-plus me-1"></i>
//                                             Add Product
//                                         </button>
//                                     </div>
//                                 </div>

//                                 {/* Filters and Controls */}
//                                 <div className="row align-items-center mb-4">
//                                     <div className="col-md-6">
//                                         <div className="d-flex gap-2 flex-wrap">
//                                             <div className="dropdown">
//                                                 <button 
//                                                     className="btn btn-outline-secondary dropdown-toggle" 
//                                                     type="button" 
//                                                     data-bs-toggle="dropdown"
//                                                     disabled={loading.products}
//                                                 >
//                                                     Type: {filters.type === 'all' ? 'All' : filters.type}
//                                                 </button>
//                                                 <ul className="dropdown-menu">
//                                                     <li><button className="dropdown-item" onClick={() => handleTypeFilter('all')}>All Types</button></li>
//                                                     <li><button className="dropdown-item" onClick={() => handleTypeFilter('page')}>Page</button></li>
//                                                     <li><button className="dropdown-item" onClick={() => handleTypeFilter('product')}>Product</button></li>
//                                                 </ul>
//                                             </div>
                                            
//                                             <div className="dropdown">
//                                                 <button 
//                                                     className="btn btn-outline-secondary dropdown-toggle" 
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
//                                             <div className="d-flex justify-content-md-end gap-2">
//                                                 <span className="badge bg-info rounded-pill px-3 py-2">
//                                                     {selectedProducts.length} selected
//                                                 </span>
//                                                 <button
//                                                     className="btn btn-outline-warning btn-sm"
//                                                     onClick={handleBulkArchive}
//                                                     disabled={loading.action}
//                                                 >
//                                                     <i className="ci-archive me-1"></i>
//                                                     Archive
//                                                 </button>
//                                                 <button
//                                                     className="btn btn-outline-danger btn-sm"
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

//                                 {/* Error Display */}
//                                 {error && (
//                                     <div className="alert alert-danger" role="alert">
//                                         <i className="ci-info-circle me-2"></i>
//                                         {error}
//                                         <button 
//                                             type="button" 
//                                             className="btn-close" 
//                                             onClick={() => setError(null)}
//                                         ></button>
//                                     </div>
//                                 )}

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
//                                                             checked={selectedProducts.length === products.length && products.length > 0}
//                                                             onChange={(e) => handleSelectAll(e.target.checked)}
//                                                             disabled={loading.products || products.length === 0}
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
//                                                 </th>
//                                                 <th className="d-none d-md-table-cell" scope="col">
//                                                     <span className="fw-normal text-body">Category</span>
//                                                 </th>
//                                                 <th className="text-end d-none d-md-table-cell" scope="col">
//                                                     <button 
//                                                         type="button" 
//                                                         className="btn fw-normal text-body product-sort p-0 me-n2" 
//                                                         onClick={() => handleSort('price')}
//                                                     >
//                                                         Price
//                                                         {filters.sortBy === 'price' && (
//                                                             <i className={`ci-chevron-${filters.sortOrder === 'asc' ? 'up' : 'down'} ms-1`}></i>
//                                                         )}
//                                                     </button>
//                                                 </th>
//                                                 <th className="text-end d-none d-sm-table-cell" scope="col">
//                                                     <button 
//                                                         type="button" 
//                                                         className="btn fw-normal text-body product-sort p-0 me-n2" 
//                                                         onClick={() => handleSort('average_rating')}
//                                                     >
//                                                         Rating
//                                                         {filters.sortBy === 'average_rating' && (
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
//                                             ) : products.length === 0 ? (
//                                                 <tr>
//                                                     <td colSpan={6} className="text-center py-5">
//                                                         <i className="ci-package display-4 text-muted mb-3"></i>
//                                                         <h5 className="text-muted">No products found</h5>
//                                                         <p className="text-muted">
//                                                             {filters.search || filters.type !== 'all'
//                                                                 ? 'Try adjusting your filters or search terms.'
//                                                                 : 'Start by creating your first product.'
//                                                             }
//                                                         </p>
//                                                         {!filters.search && filters.type === 'all' && (
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
//                                                 products.map((product) => (
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
//                                                                     <img 
//                                                                         src={product.image_urls?.[0] || '/assets/img/placeholder.jpg'} 
//                                                                         className="hover-effect-target" 
//                                                                         alt={product.name}
//                                                                         onError={(e) => {
//                                                                             e.currentTarget.src = '/assets/img/placeholder.jpg';
//                                                                         }}
//                                                                     />
//                                                                     {product.has_subscription && (
//                                                                         <div className="position-absolute top-0 start-0 m-2">
//                                                                             <span className="badge bg-warning text-dark">
//                                                                                 <i className="ci-zap me-1"></i>
//                                                                                 Promoted
//                                                                             </span>
//                                                                         </div>
//                                                                     )}
//                                                                 </div>
//                                                                 <div className="ps-2 ps-sm-3 ms-1">
//                                                                     <div className="d-md-none mb-1">
//                                                                         <span className="badge bg-primary rounded-pill fs-xs me-1">
//                                                                             {product.type}
//                                                                         </span>
//                                                                         {product.categories.map(category => (
//                                                                             <span key={category.id} className="badge bg-secondary rounded-pill fs-xs me-1">
//                                                                                 {category.name}
//                                                                             </span>
//                                                                         ))}
//                                                                     </div>
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
//                                                                             {formatCurrency(product.has_discount ? product.discounted_price : product.price)}
//                                                                             {product.has_discount && (
//                                                                                 <del className="text-muted fs-sm ms-1">
//                                                                                     {formatCurrency(product.price)}
//                                                                                 </del>
//                                                                             )}
//                                                                         </div>
//                                                                         <div className="d-flex gap-2">
//                                                                             <div className="d-flex align-items-center fs-xs text-body-emphasis bg-body-tertiary rounded-pill px-2 py-1">
//                                                                                 <i className="ci-star text-body-secondary me-1" />
//                                                                                 {product.average_rating.toFixed(1)}
//                                                                             </div>
//                                                                             <div className="d-flex align-items-center fs-xs text-body-emphasis bg-body-tertiary rounded-pill px-2 py-1">
//                                                                                 <i className="ci-message-circle text-body-secondary me-1" />
//                                                                                 {formatNumber(product.reviews_count)}
//                                                                             </div>
//                                                                             <div className="d-flex align-items-center fs-xs text-body-emphasis bg-body-tertiary rounded-pill px-2 py-1">
//                                                                                 <i className="ci-package text-body-secondary me-1" />
//                                                                                 Stock: {product.stock}
//                                                                             </div>
//                                                                         </div>
//                                                                     </div>
//                                                                     <div className="fs-xs text-nowrap d-md-none mt-2 mb-1">
//                                                                         <span className="text-body-secondary">Price:</span> {formatCurrency(product.has_discount ? product.discounted_price : product.price)}
//                                                                     </div>
//                                                                     <div className="fs-xs text-nowrap d-sm-none">
//                                                                         <span className="text-body-secondary">Rating:</span> {product.average_rating.toFixed(1)}/5
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                         </td>
//                                                         <td className="d-none d-md-table-cell py-3">
//                                                             <div className="d-flex flex-wrap gap-1">
//                                                                 <span className="badge bg-primary rounded-pill fs-xs">
//                                                                     {product.type}
//                                                                 </span>
//                                                                 {product.categories.map(category => (
//                                                                     <span key={category.id} className="badge bg-secondary rounded-pill fs-xs">
//                                                                         {category.name}
//                                                                     </span>
//                                                                 ))}
//                                                             </div>
//                                                         </td>
//                                                         <td className="d-none d-md-table-cell text-end py-3">
//                                                             <div className="h6 mb-0">
//                                                                 {formatCurrency(product.has_discount ? product.discounted_price : product.price)}
//                                                                 {product.has_discount && (
//                                                                     <>
//                                                                         <br />
//                                                                         <del className="text-muted fs-sm">
//                                                                             {formatCurrency(product.price)}
//                                                                         </del>
//                                                                         <span className="badge bg-danger ms-1">
//                                                                             {product.discount_percentage}% OFF
//                                                                         </span>
//                                                                     </>
//                                                                 )}
//                                                             </div>
//                                                         </td>
//                                                         <td className="text-end d-none d-sm-table-cell py-3">
//                                                             <div className="d-flex align-items-center justify-content-end">
//                                                                 <div className="star-rating me-2">
//                                                                     {[...Array(5)].map((_, i) => (
//                                                                         <i 
//                                                                             key={i} 
//                                                                             className={`ci-star${i < Math.floor(product.average_rating) ? '-filled' : ''} text-warning`}
//                                                                         ></i>
//                                                                     ))}
//                                                                 </div>
//                                                                 <span className="fs-sm">
//                                                                     {product.average_rating.toFixed(1)} ({product.reviews_count})
//                                                                 </span>
//                                                             </div>
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
//                                 {pagination.total_pages_count > 1 && (
//                                     <nav className="d-flex justify-content-center pt-4" aria-label="Products pagination">
//                                         <ul className="pagination">
//                                             <li className={`page-item ${!pagination.has_prev_page ? 'disabled' : ''}`}>
//                                                 <button 
//                                                     className="page-link"
//                                                     onClick={() => setPagination(prev => ({ ...prev, current_page_number: prev.current_page_number - 1 }))}
//                                                     disabled={!pagination.has_prev_page || loading.products}
//                                                 >
//                                                     <i className="ci-chevron-left"></i>
//                                                 </button>
//                                             </li>
                                            
//                                             {Array.from({ length: Math.min(5, pagination.total_pages_count) }, (_, i) => {
//                                                 let pageNum;
//                                                 if (pagination.total_pages_count <= 5) {
//                                                     pageNum = i + 1;
//                                                 } else if (pagination.current_page_number <= 3) {
//                                                     pageNum = i + 1;
//                                                 } else if (pagination.current_page_number >= pagination.total_pages_count - 2) {
//                                                     pageNum = pagination.total_pages_count - 4 + i;
//                                                 } else {
//                                                     pageNum = pagination.current_page_number - 2 + i;
//                                                 }
                                                
//                                                 return (
//                                                     <li key={pageNum} className={`page-item ${pagination.current_page_number === pageNum ? 'active' : ''}`}>
//                                                         <button 
//                                                             className="page-link"
//                                                             onClick={() => setPagination(prev => ({ ...prev, current_page_number: pageNum }))}
//                                                             disabled={loading.products}
//                                                         >
//                                                             {pageNum}
//                                                         </button>
//                                                     </li>
//                                                 );
//                                             })}
                                            
//                                             <li className={`page-item ${!pagination.has_next_page ? 'disabled' : ''}`}>
//                                                 <button 
//                                                     className="page-link"
//                                                     onClick={() => setPagination(prev => ({ ...prev, current_page_number: prev.current_page_number + 1 }))}
//                                                     disabled={!pagination.has_next_page || loading.products}
//                                                 >
//                                                     <i className="ci-chevron-right"></i>
//                                                 </button>
//                                             </li>
//                                         </ul>
//                                     </nav>
//                                 )}

//                                 {/* Results Info */}
//                                 {products.length > 0 && (
//                                     <div className="d-flex justify-content-between align-items-center pt-3 border-top">
//                                         <small className="text-muted">
//                                             {pagination.total_items_count === 0 ? (
//                                                 "No products to display"
//                                             ) : (
//                                                 `Showing ${pagination.offset + 1} to ${pagination.offset + products.length} of ${pagination.total_items_count} products`
//                                             )}
//                                         </small>
//                                         <div className="d-flex gap-2">
//                                             <select 
//                                                 className="form-select form-select-sm"
//                                                 value={pagination.requested_page_size}
//                                                 onChange={(e) => {
//                                                     const newPageSize = parseInt(e.target.value);
//                                                     setPagination(prev => ({ 
//                                                         ...prev, 
//                                                         requested_page_size: newPageSize,
//                                                         current_page_number: 1 
//                                                     }));
//                                                 }}
//                                                 disabled={loading.products}
//                                                 style={{width: 'auto'}}
//                                             >
//                                                 <option value={5}>5 per page</option>
//                                                 <option value={10}>10 per page</option>
//                                                 <option value={25}>25 per page</option>
//                                                 <option value={50}>50 per page</option>
//                                                 <option value={100}>100 per page</option>
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
//             {(modalState.subscription.show || modalState.publish.show) && (
//                 <div className="modal-backdrop fade show"></div>
//             )}
//         </>
//     );
// };

// export default Products;