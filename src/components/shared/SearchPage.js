import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
// import ProductRecommendations from '../../pages/products/ProductRecommendations';
// import { SearchResults } from './modals/Search/Search';
// const SearchPage = () => {
//     return (
//         <>
//             {/* Full screen modal */}
//             <div
//                 className="modal fade show"
//                 id="SearchPage"
//                 tabIndex={-1}
//                 role="dialog"
//                 style={{ display: "block" }}
//                 aria-modal="true"
//             >
//                 <div className="modal-dialog modal-fullscreen" role="document">
//                     <div className="modal-content">
//                         <div className="modal-header flex-wrap">
//                             {/* Nav pills */}
//                             <ul className="nav nav-pills flex-nowrap gap-2 text-nowrap card-header modal-title" role="tablist">
//                                 <li className="nav-item" role="presentation">
//                                 <a className="navbar-brand pt-0 " href="/" data-discover="true"><span className="d-flex flex-shrink-0 text-primary rtl-flip me-2">
//                                     <div className="flex-shrink-0 border rounded-circle" style={{width: '40px'}}><div className="ratio ratio-1x1 rounded-circle overflow-hidden">
//                                         <img alt="Avatar" src="/assets/img/us/logos/favicon.svg" /></div></div></span>
//                                         </a>
//                                 </li>
//                                 <li className="nav-item" role="presentation">
//                                     <a type="button" className="nav-link">
//                                         <i className="fi-list me-2 ms-n1" />Salesnet
//                                     </a>
//                                 </li>
//                             </ul>
//                             {/* Search form */}
//                             <form className="container d-flex align-items-center">
//                                 <div className="position-relative w-100">
//                                     <input
//                                         className="form-control form-control-lg fs-lg border-0 rounded-0 py-3 ps-0"
//                                         placeholder="Search for products..."
//                                         autoComplete="off"
//                                         aria-label="Search products"
//                                         type="search"
//                                         defaultValue="" // Or use state if needed
//                                     />
//                                 </div>
//                                 <button
//                                     type="reset"
//                                     className="btn-close fs-lg ms-2"
//                                     data-bs-dismiss="offcanvas"
//                                     aria-label="Close"
//                                 ></button>
//                             </form>
//                             {/* Modal close button */}
//                             {/* <button
//                                 className="btn-close fs-4"
//                                 type="button"
//                                 data-bs-dismiss="modal"
//                                 aria-label="Close"
//                             ></button> */}
//                         </div>
//                         {/* Modal body content */}
//                         <div className="modal-body p-3">
//                             <SearchResults results={[]} />
//                             {/* <h1>Hello World</h1> */}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };
// // export default SearchPage;
// import { useEffect, useState } from 'react';
// import { useSearchParams, useNavigate } from 'react-router-dom';
// // import { SearchAxiosService } from '../../services/SearchAxiosService';
// import SearchResults from './modals/Search/Search';
// import { SearchAxiosService } from '../../services/net/SearchAxiosService';
// import LoadingSpinner from './LoadingSpinner';
// // import LoadingSpinner from '../common/LoadingSpinner';
// const SearchPage = () => {
//   const [searchParams] = useSearchParams();
//   const navigate = useNavigate();
//   const [searchTerm, setSearchTerm] = useState('');
//   const [searchResults, setSearchResults] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);
//   // Get initial search term from URL
//   useEffect(() => {
//     const query = searchParams.get('q') || '';
//     setSearchTerm(query);
//     if (query) {
//       performSearch(query);
//     }
//   }, [searchParams]);
//   const performSearch = async (query: string) => {
//     setIsLoading(true);
//     setError(null);
//     try {
//       const response = await SearchAxiosService.searchProducts({
//         q: query,
//         page_size: 12
//       });
//       setSearchResults(response.data.items || []);
//     } catch (err) {
//       setError('Failed to fetch search results');
//       console.error('Search error:', err);
//     } finally {
//       setIsLoading(false);
//     }
//   };
//   const handleSearchSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (searchTerm.trim()) {
//       navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
//     }
//   };
//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchTerm(e.target.value);
//   };
//   const handleCloseSearch = () => {
//     navigate(-1); // Go back to previous page
//   };
//   return (
//     <div className="modal fade show" id="SearchPage" tabIndex={-1} role="dialog" 
//          style={{ display: "block" }} aria-modal="true">
//       <div className="modal-dialog modal-fullscreen" role="document">
//         <div className="modal-content">
//           <div className="modal-header flex-wrap">
//             {/* Brand Logo */}
//             <ul className="nav nav-pills flex-nowrap gap-2 text-nowrap card-header modal-title" role="tablist">
//               <li className="nav-item" role="presentation">
//                 <a className="navbar-brand pt-0" href="/" data-discover="true">
//                   <span className="d-flex flex-shrink-0 text-primary rtl-flip me-2">
//                     <div className="flex-shrink-0 border rounded-circle" style={{width: '40px'}}>
//                       <div className="ratio ratio-1x1 rounded-circle overflow-hidden">
//                         <img alt="Avatar" src="/assets/img/us/logos/favicon.svg" />
//                       </div>
//                     </div>
//                   </span>
//                 </a>
//               </li>
//               <li className="nav-item" role="presentation">
//                 <a type="button" className="nav-link">
//                   <i className="fi-list me-2 ms-n1" />Salesnet
//                 </a>
//               </li>
//             </ul>
//             {/* Search Form */}
//             <form className="container d-flex align-items-center" onSubmit={handleSearchSubmit}>
//               <div className="position-relative w-100">
//                 <input
//                   className="form-control form-control-lg fs-lg border-0 rounded-0 py-3 ps-0"
//                   placeholder="Search for products..."
//                   autoComplete="off"
//                   aria-label="Search products"
//                   type="search"
//                   value={searchTerm}
//                   onChange={handleInputChange}
//                 />
//                 {isLoading && (
//                   <div className="position-absolute top-50 end-0 translate-middle-y pe-3">
//                     <LoadingSpinner size="sm" />
//                   </div>
//                 )}
//               </div>
//               <button
//                 type="button"
//                 className="btn-close fs-lg ms-2"
//                 onClick={handleCloseSearch}
//                 aria-label="Close"
//               ></button>
//             </form>
//           </div>
//           {/* Search Results */}
//           <div className="modal-body p-3">
//             {error ? (
//               <div className="alert alert-danger">{error}</div>
//             ) : isLoading ? (
//               <div className="text-center py-5">
//                 <LoadingSpinner />
//                 <p className="mt-3">Searching for products...</p>
//               </div>
//             ) : searchResults.length > 0 ? (
//               <SearchResults results={searchResults} />
//             ) : searchTerm ? (
//               <div className="text-center py-5">
//                 <h4>No results found for "{searchTerm}"</h4>
//                 <p className="text-muted">Try different search terms</p>
//               </div>
//             ) : (
//               <div className="text-center py-5">
//                 <h4>Search for products</h4>
//                 <p className="text-muted">Enter keywords in the search box above</p>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default SearchPage;
// 
// import { useEffect, useState } from 'react';
// import { useSearchParams, useNavigate, Link } from 'react-router-dom';
// import { SearchAxiosService } from '../../services/net/SearchAxiosService';
// import LoadingSpinner from './LoadingSpinner';
// const SearchPage = () => {
//   const [searchParams] = useSearchParams();
//   const navigate = useNavigate();
//   const [searchTerm, setSearchTerm] = useState('');
//   const [searchResults, setSearchResults] = useState<any[]>([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   // Get initial search term from URL
//   useEffect(() => {
//     const query = searchParams.get('q') || '';
//     setSearchTerm(query);
//     if (query) {
//       performSearch(query);
//     }
//   }, [searchParams]);
//   const performSearch = async (query: string) => {
//     setIsLoading(true);
//     setError(null);
//     try {
//       const response = await SearchAxiosService.searchProducts({
//         q: query,
//         page_size: 12
//       });
//       console.log('API Response:', response); // Debug log
//       if (response?.data?.items) {
//         setSearchResults(response.data.items);
//       } else {
//         setSearchResults([]);
//         console.warn('Unexpected API response format:', response);
//       }
//     } catch (err) {
//       setError('Failed to fetch search results');
//       console.error('Search error:', err);
//       setSearchResults([]);
//     } finally {
//       setIsLoading(false);
//     }
//   };
//   const handleSearchSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (searchTerm.trim()) {
//       navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
//     }
//   };
//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchTerm(e.target.value);
//   };
//   const handleCloseSearch = () => {
//     navigate(-1);
//   };
//   // Simplified SearchResults component embedded here
//   const SearchResults = ({ results }: { results: any[] }) => {
//     if (!results || results.length === 0) return null;
//     return (
//       <div className="row">
//         {results.map((product) => {
//           // Safely handle price (could be string or number)
//           const price = typeof product.price === 'string' 
//             ? parseFloat(product.price) 
//             : product.price;
//           const formattedPrice = isNaN(price) ? '0.00' : price.toFixed(2);
//           // Safely handle rating
//           const rating = Math.min(Math.max(Number(product.average_rating) || 0, 0), 5);
//           const fullStars = Math.floor(rating);
//           const hasHalfStar = rating % 1 >= 0.5;
//           const emptyStars = Math.max(0, 5 - fullStars - (hasHalfStar ? 1 : 0));
//           return (
//             <div key={product.id} className="col-sm-6 col-lg-4 d-flex flex-column gap-3 pt-4 py-lg-4">
//               <div className="position-relative animate-underline d-flex align-items-center ps-xl-3">
//                 {/* Product Image */}
//                 <div className="ratio ratio-1x1 flex-shrink-0" style={{width: '110px'}}>
//                   <img 
//                     className="rounded"
//                     src={product.image_urls?.[0] || '/assets/img/placeholder.png'} 
//                     width={110}
//                     alt={product.name}
//                     loading="lazy"
//                   />
//                 </div>
//                 {/* Product Details */}
//                 <div className="w-100 min-w-0 ps-2 ps-sm-3">
//                   {/* Rating */}
//                   <div className="d-flex align-items-center gap-2 mb-2">
//                     <div className="d-flex gap-1 fs-xs">
//                       {Array.from({ length: fullStars }).map((_, i) => (
//                         <i key={`full-${i}`} className="ci-star-filled text-warning" />
//                       ))}
//                       {hasHalfStar && (
//                         <i key="half" className="ci-star-half text-warning" />
//                       )}
//                       {Array.from({ length: emptyStars }).map((_, i) => (
//                         <i key={`empty-${i}`} className="ci-star text-body-tertiary opacity-75" />
//                       ))}
//                     </div>
//                     <span className="text-body-tertiary fs-xs">
//                       {product.review_count || product.comments_count || 0}
//                     </span>
//                   </div>
//                   {/* Product Name */}
//                   <h4 className="mb-2">
//                     <Link 
//                       className="stretched-link d-block fs-sm fw-medium text-truncate" 
//                       to={`/products/${product.slug}`}
//                     >
//                       <span className="animate-target">{product.name}</span>
//                     </Link>
//                   </h4>
//                   {/* Price */}
//                   <div className="h5 mb-0">${formattedPrice}</div>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     );
//   };
//   return (
//     <div className="modal fade show" id="SearchPage" tabIndex={-1} role="dialog" 
//          style={{ display: "block" }} aria-modal="true">
//       <div className="modal-dialog modal-fullscreen" role="document">
//         <div className="modal-content">
//           <div className="modal-header flex-wrap">
//             {/* Brand Logo and Navigation */}
//             <ul className="nav nav-pills flex-nowrap gap-2 text-nowrap card-header modal-title" role="tablist">
//               <li className="nav-item" role="presentation">
//                 <Link className="navbar-brand pt-0" to="/" data-discover="true">
//                   <span className="d-flex flex-shrink-0 text-primary rtl-flip me-2">
//                     <div className="flex-shrink-0 border rounded-circle" style={{width: '40px'}}>
//                       <div className="ratio ratio-1x1 rounded-circle overflow-hidden">
//                         <img alt="Avatar" src="/assets/img/us/logos/favicon.svg" />
//                       </div>
//                     </div>
//                   </span>
//                 </Link>
//               </li>
//               <li className="nav-item" role="presentation">
//                 <button type="button" className="nav-link" onClick={() => navigate(-1)}>
//                   <i className="fi-list me-2 ms-n1" />Salesnet
//                 </button>
//               </li>
//             </ul>
//             {/* Search Form */}
//             <form className="container d-flex align-items-center" onSubmit={handleSearchSubmit}>
//               <div className="position-relative w-100">
//                 <input
//                   className="form-control form-control-lg fs-lg border-0 rounded-0 py-3 ps-0"
//                   placeholder="Search for products..."
//                   autoComplete="off"
//                   aria-label="Search products"
//                   type="search"
//                   value={searchTerm}
//                   onChange={handleInputChange}
//                 />
//                 {isLoading && (
//                   <div className="position-absolute top-50 end-0 translate-middle-y pe-3">
//                     <LoadingSpinner size="sm" />
//                   </div>
//                 )}
//               </div>
//               <button
//                 type="button"
//                 className="btn-close fs-lg ms-2"
//                 onClick={handleCloseSearch}
//                 aria-label="Close"
//               ></button>
//             </form>
//           </div>
//           {/* Search Results Area */}
//           <div className="modal-body p-3">
//             {error ? (
//               <div className="alert alert-danger">{error}</div>
//             ) : isLoading ? (
//               <div className="text-center py-5">
//                 <LoadingSpinner />
//                 <p className="mt-3">Searching for products...</p>
//               </div>
//             ) : searchResults.length > 0 ? (
//               <>
//                 <div className="mb-3">
//                   <h5>Found {searchResults.length} results for "{searchTerm}"</h5>
//                 </div>
//                 <SearchResults results={searchResults} />
//               </>
//             ) : searchTerm ? (
//               <div className="text-center py-5">
//                 <h4>No results found for "{searchTerm}"</h4>
//                 <p className="text-muted">Try different search terms</p>
//               </div>
//             ) : (
//               <div className="text-center py-5">
//                 <h4>Search for products</h4>
//                 <p className="text-muted">Enter keywords in the search box above</p>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default SearchPage;
// 
// import { useEffect, useState } from 'react';
// import { useSearchParams, useNavigate, Link } from 'react-router-dom';
// import { SearchAxiosService } from '../../services/net/SearchAxiosService';
// import LoadingSpinner from './LoadingSpinner';
// import ProductSummary from '../../pages/products/ProductSummary';
// import LoadingCard from './LoadingCard';
// const SearchPage = () => {
//   const [searchParams] = useSearchParams();
//   const navigate = useNavigate();
//   const [searchTerm, setSearchTerm] = useState('');
//   const [searchResults, setSearchResults] = useState<any[]>([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const [page, setPage] = useState(1);
//   const [hasMore, setHasMore] = useState(true);
//   // Get initial search term from URL
//   useEffect(() => {
//     const query = searchParams.get('q') || '';
//     setSearchTerm(query);
//     setSearchResults([]);
//     setPage(1);
//     setHasMore(true);
//     if (query) {
//       performSearch(query, 1, true);
//     }
//   }, [searchParams]);
//   const performSearch = async (query: string, pageNum: number, reset: boolean = false) => {
//     if (isLoading) return;
//     setIsLoading(true);
//     setError(null);
//     try {
//       const response = await SearchAxiosService.searchProducts({
//         q: query,
//         page: pageNum,
//         page_size: 12
//       });
//       if (response?.data?.items) {
//         if (reset) {
//           setSearchResults(response.data.items);
//         } else {
//           setSearchResults(prev => [...prev, ...response.data.items]);
//         }
//         setHasMore(response.data.items.length >= 12);
//       } else {
//         setHasMore(false);
//         if (reset) setSearchResults([]);
//       }
//     } catch (err) {
//       setError('Failed to fetch search results');
//       console.error('Search error:', err);
//     } finally {
//       setIsLoading(false);
//     }
//   };
//   const handleSearchSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (searchTerm.trim()) {
//       navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
//     }
//   };
//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchTerm(e.target.value);
//   };
//   const handleCloseSearch = () => {
//     navigate(-1);
//   };
//   const loadMore = () => {
//     if (!isLoading && hasMore) {
//       const nextPage = page + 1;
//       setPage(nextPage);
//       performSearch(searchTerm, nextPage);
//     }
//   };
//   // Infinite scroll handler
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isLoading || !hasMore) {
//         return;
//       }
//       loadMore();
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [isLoading, hasMore]);
// //   
// useEffect(() => {
//     const handleScroll = () => {
//       const nearBottom = window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 100;
//       if (nearBottom && !isLoading && hasMore) {
//         const nextPage = page + 1;
//         setPage(nextPage);
//         performSearch(searchTerm, nextPage);
//       }
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [page, isLoading, hasMore, searchTerm]);
//   return (
//     <div className="modal fade show" id="SearchPage" tabIndex={-1} role="dialog" 
//          style={{ display: "block" }} aria-modal="true">
//       <div className="modal-dialog modal-fullscreen" role="document">
//         <div className="modal-content">
//           <div className="modal-header flex-wrap">
//             {/* Brand Logo and Navigation */}
//             <ul className="nav nav-pills flex-nowrap gap-2 text-nowrap card-header modal-title" role="tablist">
//               <li className="nav-item" role="presentation">
//                 <Link className="navbar-brand pt-0" to="/" data-discover="true">
//                   <span className="d-flex flex-shrink-0 text-primary rtl-flip me-2">
//                     <div className="flex-shrink-0 border rounded-circle" style={{width: '40px'}}>
//                       <div className="ratio ratio-1x1 rounded-circle overflow-hidden">
//                         <img alt="Avatar" src="/assets/img/us/logos/favicon.svg" />
//                       </div>
//                     </div>
//                   </span>
//                 </Link>
//               </li>
//               <li className="nav-item" role="presentation">
//                 <button type="button" className="nav-link" onClick={() => navigate(-1)}>
//                   <i className="fi-list me-2 ms-n1" />Salesnet
//                 </button>
//               </li>
//             </ul>
//             {/* Search Form */}
//             <form className="container d-flex align-items-center" onSubmit={handleSearchSubmit}>
//               <div className="position-relative w-100">
//                 <input
//                   className="form-control form-control-lg fs-lg border-0 rounded-0 py-3 ps-0"
//                   placeholder="Search for products..."
//                   autoComplete="off"
//                   aria-label="Search products"
//                   type="search"
//                   value={searchTerm}
//                   onChange={handleInputChange}
//                 />
//                 {isLoading && (
//                   <div className="position-absolute top-50 end-0 translate-middle-y pe-3">
//                     <LoadingSpinner size="sm" />
//                   </div>
//                 )}
//               </div>
//               <button
//                 type="button"
//                 className="btn-close fs-lg ms-2"
//                 onClick={handleCloseSearch}
//                 aria-label="Close"
//               ></button>
//             </form>
//           </div>
//           {/* Search Results Area */}
//           <div className="modal-body p-3">
//             {error ? (
//               <div className="alert alert-danger">{error}</div>
//             ) : isLoading && searchResults.length === 0 ? (
//               <div className="text-center py-5">
//                 <LoadingSpinner />
//                 <p className="mt-3">Searching for products...</p>
//               </div>
//             ) : searchResults.length > 0 ? (
//               <>
//                 <div className="mb-3">
//                   <h5>Found {searchResults.length} results for "{searchTerm}"</h5>
//                 </div>
//                 <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4 pt-4">
//                   {searchResults.map((product) => (
//                     <ProductSummary
//                       key={product.id}
//                       image={product.image_urls?.[0] || ''}
//                       name={product.name}
//                       slug={product.slug}
//                       price={product.price}
//                       id={product.id}
//                       url={`/products/${product.slug}`}
//                     />
//                   ))}
//                   {/* Loading Wave Placeholders */}
//                   {isLoading && (
//                     Array.from({ length: 4 }).map((_, index) => (
//                       <LoadingCard key={`loading-${index}`} />
//                     ))
//                   )}
//                 </div>
//                 {!hasMore && searchResults.length > 0 && (
//                   <div className="text-center py-4">
//                     <p className="text-muted">No more products to load</p>
//                   </div>
//                 )}
//               </>
//             ) : searchTerm ? (
//               <div className="text-center py-5">
//                 <h4>No results found for "{searchTerm}"</h4>
//                 <p className="text-muted">Try different search terms</p>
//               </div>
//             ) : (
//               <div className="text-center py-5">
//                 <h4>Search for products</h4>
//                 <p className="text-muted">Enter keywords in the search box above</p>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default SearchPage;
// 
// It's not acutally loading more dynamically as I scroll....
// import { useEffect, useState } from 'react';
// import { useSearchParams, useNavigate, Link } from 'react-router-dom';
// import { SearchAxiosService } from '../../services/net/SearchAxiosService';
// import LoadingSpinner from './LoadingSpinner';
// import ProductSummary from '../../pages/products/ProductSummary';
// import LoadingCard from './LoadingCard';
// const SearchPage = () => {
//   const [searchParams] = useSearchParams();
//   const navigate = useNavigate();
//   const [searchTerm, setSearchTerm] = useState('');
//   const [searchResults, setSearchResults] = useState<any[]>([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const [page, setPage] = useState(1);
//   const [hasMore, setHasMore] = useState(true);
//   // Get initial search term from URL
//   useEffect(() => {
//     const query = searchParams.get('q') || '';
//     setSearchTerm(query);
//     setSearchResults([]);
//     setPage(1);
//     setHasMore(true);
//     if (query) {
//       performSearch(query, 1, true);
//     }
//   }, [searchParams]);
//   const performSearch = async (query: string, pageNum: number, reset: boolean = false) => {
//     if (isLoading) return;
//     setIsLoading(true);
//     setError(null);
//     try {
//       const response = await SearchAxiosService.searchProducts({
//         q: query,
//         page: pageNum,
//         page_size: 12
//       });
//       if (response?.data?.items) {
//         if (reset) {
//           setSearchResults(response.data.items);
//         } else {
//           setSearchResults(prev => [...prev, ...response.data.items]);
//         }
//         setHasMore(response.data.items.length >= 12);
//       } else {
//         setHasMore(false);
//         if (reset) setSearchResults([]);
//       }
//     } catch (err) {
//       setError('Failed to fetch search results');
//       console.error('Search error:', err);
//     } finally {
//       setIsLoading(false);
//     }
//   };
//   const handleSearchSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (searchTerm.trim()) {
//       navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
//     }
//   };
//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchTerm(e.target.value);
//   };
//   const handleCloseSearch = () => {
//     navigate(-1);
//   };
//   const loadMore = () => {
//     if (!isLoading && hasMore) {
//       const nextPage = page + 1;
//       setPage(nextPage);
//       performSearch(searchTerm, nextPage);
//     }
//   };
//   // Infinite scroll handler
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isLoading || !hasMore) {
//         return;
//       }
//       loadMore();
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [isLoading, hasMore]);
//   return (
//     <div className="modal fade show" id="SearchPage" tabIndex={-1} role="dialog" 
//          style={{ display: "block" }} aria-modal="true">
//       <div className="modal-dialog modal-fullscreen" role="document">
//         <div className="modal-content">
//           <div className="modal-header flex-wrap">
//             {/* Brand Logo and Navigation */}
//             <ul className="nav nav-pills flex-nowrap gap-2 text-nowrap card-header modal-title" role="tablist">
//               <li className="nav-item" role="presentation">
//                 <Link className="navbar-brand pt-0" to="/" data-discover="true">
//                   <span className="d-flex flex-shrink-0 text-primary rtl-flip me-2">
//                     <div className="flex-shrink-0 border rounded-circle" style={{width: '40px'}}>
//                       <div className="ratio ratio-1x1 rounded-circle overflow-hidden">
//                         <img alt="Avatar" src="/assets/img/us/logos/favicon.svg" />
//                       </div>
//                     </div>
//                   </span>
//                 </Link>
//               </li>
//               <li className="nav-item" role="presentation">
//                 <button type="button" className="nav-link" onClick={() => navigate(-1)}>
//                   <i className="fi-list me-2 ms-n1" />Salesnet
//                 </button>
//               </li>
//             </ul>
//             {/* Search Form */}
//             <form className="container d-flex align-items-center" onSubmit={handleSearchSubmit}>
//               <div className="position-relative w-100">
//                 <input
//                   className="form-control form-control-lg fs-lg border-0 rounded-0 py-3 ps-0"
//                   placeholder="Search for products..."
//                   autoComplete="off"
//                   aria-label="Search products"
//                   type="search"
//                   value={searchTerm}
//                   onChange={handleInputChange}
//                 />
//                 {isLoading && (
//                   <div className="position-absolute top-50 end-0 translate-middle-y pe-3">
//                     <LoadingSpinner size="sm" />
//                   </div>
//                 )}
//               </div>
//               <button
//                 type="button"
//                 className="btn-close fs-lg ms-2"
//                 onClick={handleCloseSearch}
//                 aria-label="Close"
//               ></button>
//             </form>
//           </div>
//           {/* Search Results Area */}
//           <div className="modal-body p-3">
//             {error ? (
//               <div className="alert alert-danger">{error}</div>
//             ) : isLoading && searchResults.length === 0 ? (
//               <div className="text-center py-5">
//                 <LoadingSpinner />
//                 <p className="mt-3">Searching for products...</p>
//               </div>
//             ) : searchResults.length > 0 ? (
//               <>
//                 <div className="mb-3">
//                   <h5>Found {searchResults.length} results for "{searchTerm}"</h5>
//                 </div>
//                 <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4 pt-4">
//                   {searchResults.map((product) => (
//                     <ProductSummary
//                       key={product.id}
//                       image={product.image_urls?.[0] || ''}
//                       name={product.name}
//                       slug={product.slug}
//                       price={product.price}
//                       id={product.id}
//                       url={`/products/${product.slug}`}
//                     />
//                   ))}
//                   {/* Loading Wave Placeholders */}
//                   {isLoading && (
//                     Array.from({ length: 4 }).map((_, index) => (
//                       <LoadingCard key={`loading-${index}`} />
//                     ))
//                   )}
//                 </div>
//                 {!hasMore && searchResults.length > 0 && (
//                   <div className="text-center py-4">
//                     <p className="text-muted">No more products to load</p>
//                   </div>
//                 )}
//               </>
//             ) : searchTerm ? (
//               <div className="text-center py-5">
//                 <h4>No results found for "{searchTerm}"</h4>
//                 <p className="text-muted">Try different search terms</p>
//               </div>
//             ) : (
//               <div className="text-center py-5">
//                 <h4>Search for products</h4>
//                 <p className="text-muted">Enter keywords in the search box above</p>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default SearchPage;
// 
// This works quite okay but it's not just loading products dynamically as you scroll:
// import { useEffect, useState } from 'react';
// import { useSearchParams, useNavigate, Link } from 'react-router-dom';
// import { SearchAxiosService } from '../../services/net/SearchAxiosService';
// import LoadingSpinner from './LoadingSpinner';
// import ProductSummary from '../../pages/products/ProductSummary';
// import LoadingCard from './LoadingCard';
// const SearchPage = () => {
//   const [searchParams] = useSearchParams();
//   const navigate = useNavigate();
//   const [searchTerm, setSearchTerm] = useState('');
//   const [searchResults, setSearchResults] = useState<any[]>([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const [page, setPage] = useState(1);
//   const [hasMore, setHasMore] = useState(true);
//   // Get initial search term from URL
//   useEffect(() => {
//     const query = searchParams.get('q') || '';
//     setSearchTerm(query);
//     setSearchResults([]);
//     setPage(1);
//     setHasMore(true);
//     if (query) {
//       performSearch(query, 1, true);
//     }
//   }, [searchParams]);
//   const performSearch = async (query: string, pageNum: number, reset: boolean = false) => {
//     if (isLoading) return;
//     setIsLoading(true);
//     setError(null);
//     try {
//       const response = await SearchAxiosService.searchProducts({
//         q: query,
//         page: pageNum,
//         page_size: 12
//       });
//       if (response?.data?.items) {
//         if (reset) {
//           setSearchResults(response.data.items);
//         } else {
//           setSearchResults(prev => [...prev, ...response.data.items]);
//         }
//         setHasMore(response.data.items.length >= 12);
//       } else {
//         setHasMore(false);
//         if (reset) setSearchResults([]);
//       }
//     } catch (err) {
//       setError('Failed to fetch search results');
//       console.error('Search error:', err);
//     } finally {
//       setIsLoading(false);
//     }
//   };
//   const handleSearchSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (searchTerm.trim()) {
//       navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
//     }
//   };
//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchTerm(e.target.value);
//   };
//   const handleCloseSearch = () => {
//     navigate(-1);
//   };
//   const loadMore = () => {
//     if (!isLoading && hasMore) {
//       const nextPage = page + 1;
//       setPage(nextPage);
//       performSearch(searchTerm, nextPage);
//     }
//   };
//   // Infinite scroll handler
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isLoading || !hasMore) {
//         return;
//       }
//       loadMore();
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [isLoading, hasMore]);
//   return (
//     <div className="modal fade show" id="SearchPage" tabIndex={-1} role="dialog" 
//          style={{ display: "block" }} aria-modal="true">
//       <div className="modal-dialog modal-fullscreen" role="document">
//         <div className="modal-content">
//           <div className="modal-header flex-wrap">
//             {/* Brand Logo and Navigation */}
//             <ul className="nav nav-pills flex-nowrap gap-2 text-nowrap card-header modal-title" role="tablist">
//               <li className="nav-item" role="presentation">
//                 <Link className="navbar-brand pt-0" to="/" data-discover="true">
//                   <span className="d-flex flex-shrink-0 text-primary rtl-flip me-2">
//                     <div className="flex-shrink-0 border rounded-circle" style={{width: '40px'}}>
//                       <div className="ratio ratio-1x1 rounded-circle overflow-hidden">
//                         <img alt="Avatar" src="/assets/img/us/logos/favicon.svg" />
//                       </div>
//                     </div>
//                   </span>
//                 </Link>
//               </li>
//               <li className="nav-item" role="presentation">
//                 <button type="button" className="nav-link" onClick={() => navigate(-1)}>
//                   <i className="fi-list me-2 ms-n1" />Salesnet
//                 </button>
//               </li>
//             </ul>
//             {/* Search Form */}
//             <form className="container d-flex align-items-center" onSubmit={handleSearchSubmit}>
//               <div className="position-relative w-100">
//                 <input
//                   className="form-control form-control-lg fs-lg border-0 rounded-0 py-3 ps-0"
//                   placeholder="Search for products..."
//                   autoComplete="off"
//                   aria-label="Search products"
//                   type="search"
//                   value={searchTerm}
//                   onChange={handleInputChange}
//                 />
//                 {isLoading && (
//                   <div className="position-absolute top-50 end-0 translate-middle-y pe-3">
//                     <LoadingSpinner size="sm" />
//                   </div>
//                 )}
//               </div>
//               <button
//                 type="button"
//                 className="btn-close fs-lg ms-2"
//                 onClick={handleCloseSearch}
//                 aria-label="Close"
//               ></button>
//             </form>
//           </div>
//           {/* Search Results Area */}
//           <div className="modal-body p-3">
//             {error ? (
//               <div className="alert alert-danger">{error}</div>
//             ) : isLoading && searchResults.length === 0 ? (
//               <div className="text-center py-5">
//                 <LoadingSpinner />
//                 <p className="mt-3">Searching for products...</p>
//               </div>
//             ) : searchResults.length > 0 ? (
//               <>
//                 <div className="mb-3">
//                   <h5>Found {searchResults.length} results for "{searchTerm}"</h5>
//                 </div>
//                 <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4 pt-4">
//                   {searchResults.map((product) => (
//                     <ProductSummary
//                       key={product.id}
//                       image={product.image_urls?.[0] || ''}
//                       name={product.name}
//                       slug={product.slug}
//                       price={product.price}
//                       id={product.id}
//                       url={`/products/${product.slug}`}
//                     />
//                   ))}
//                   {/* Loading Wave Placeholders */}
//                   {isLoading && (
//                     Array.from({ length: 4 }).map((_, index) => (
//                       <LoadingCard key={`loading-${index}`} />
//                     ))
//                   )}
//                 </div>
//                 {!hasMore && searchResults.length > 0 && (
//                   <div className="text-center py-4">
//                     <p className="text-muted">No more products to load</p>
//                   </div>
//                 )}
//               </>
//             ) : searchTerm ? (
//               <div className="text-center py-5">
//                 <h4>No results found for "{searchTerm}"</h4>
//                 <p className="text-muted">Try different search terms</p>
//               </div>
//             ) : (
//               <div className="text-center py-5">
//                 <h4>Search for products</h4>
//                 <p className="text-muted">Enter keywords in the search box above</p>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default SearchPage;
// VERSION 02
// import { useEffect, useState, useCallback } from 'react';
// import { useSearchParams, useNavigate, Link } from 'react-router-dom';
// import { SearchAxiosService } from '../../services/net/SearchAxiosService';
// import LoadingSpinner from './LoadingSpinner';
// import ProductSummary from '../../pages/products/ProductSummary_0';
// import LoadingCard from './LoadingCard';
// const SearchPage_FORMER = () => {
//   const [searchParams] = useSearchParams();
//   const navigate = useNavigate();
//   const [searchTerm, setSearchTerm] = useState('');
//   const [searchResults, setSearchResults] = useState<any[]>([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const [page, setPage] = useState(1);
//   const [hasMore, setHasMore] = useState(true);
//   // Get initial search term from URL
//   useEffect(() => {
//     const query = searchParams.get('q') || '';
//     setSearchTerm(query);
//     setSearchResults([]);
//     setPage(1);
//     setHasMore(true);
//     if (query) {
//       performSearch(query, 1, true);
//     }
//   }, [searchParams]);
//   const performSearch = async (query: string, pageNum: number, reset: boolean = false) => {
//     if (isLoading) return;
//     setIsLoading(true);
//     setError(null);
//     try {
//       const response = await SearchAxiosService.searchProducts({
//         q: query,
//         page: pageNum,
//         page_size: 12
//       });
//       if (response?.data?.items) {
//         if (reset) {
//           setSearchResults(response.data.items);
//         } else {
//           setSearchResults(prev => [...prev, ...response.data.items]);
//         }
//         setHasMore(response.data.items.length >= 12);
//       } else {
//         setHasMore(false);
//         if (reset) setSearchResults([]);
//       }
//     } catch (err) {
//       setError('Failed to fetch search results');
//       console.error('Search error:', err);
//     } finally {
//       setIsLoading(false);
//     }
//   };
//   const handleSearchSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (searchTerm.trim()) {
//       navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
//     }
//   };
//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchTerm(e.target.value);
//   };
//   const handleCloseSearch = () => {
//     navigate(-1);
//   };
//   const loadMore = useCallback(() => {
//     if (!isLoading && hasMore) {
//       const nextPage = page + 1;
//       setPage(nextPage);
//       performSearch(searchTerm, nextPage);
//     }
//   }, [isLoading, hasMore, page, searchTerm]);
//   // Infinite scroll handler with debounce
//   useEffect(() => {
//     let timeoutId: NodeJS.Timeout;
//     const handleScroll = () => {
//       // Clear any pending execution
//       if (timeoutId) {
//         clearTimeout(timeoutId);
//       }
//       // Debounce the scroll handler
//       timeoutId = setTimeout(() => {
//         const scrollThreshold = 200; // pixels from bottom
//         const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
//         // Check if we're near the bottom (within threshold)
//         if (scrollHeight - (scrollTop + clientHeight) < scrollThreshold) {
//           loadMore();
//         }
//       }, 100);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//       if (timeoutId) clearTimeout(timeoutId);
//     };
//   }, [loadMore]);
//   return (
//     <div className="modal fade show" id="SearchPage" tabIndex={-1} role="dialog" 
//          style={{ display: "block" }} aria-modal="true">
//       <div className="modal-dialog modal-fullscreen" role="document">
//         <div className="modal-content">
//           {/* ... [keep your existing header code exactly as is] ... */}
//           <div className="modal-header flex-wrap">
//   {/* Brand Logo and Navigation */}
//   <ul className="nav nav-pills flex-nowrap gap-2 text-nowrap card-header modal-title" role="tablist">
//     <li className="nav-item" role="presentation">
//       <Link className="navbar-brand pt-0" to="/" data-discover="true">
//         <span className="d-flex flex-shrink-0 text-primary rtl-flip me-2">
//           <div className="flex-shrink-0 border rounded-circle" style={{width: '40px'}}>
//             <div className="ratio ratio-1x1 rounded-circle overflow-hidden">
//               <img alt="Avatar" src="/assets/img/us/logos/favicon.svg" />
//             </div>
//           </div>
//         </span>
//       </Link>
//     </li>
//     <li className="nav-item" role="presentation">
//       <button type="button" className="nav-link" onClick={() => navigate(-1)}>
//         <i className="fi-list me-2 ms-n1" />Salesnet
//       </button>
//     </li>
//   </ul>
//   {/* Search Form */}
//       <form className="container d-flex align-items-center" onSubmit={handleSearchSubmit}>
//         <div className="position-relative w-100">
//           <input
//                   className="form-control form-control-lg fs-lg border-0 rounded-0 py-3 ps-0"
//                   placeholder="Search for products..."
//                   autoComplete="off"
//                   aria-label="Search products"
//                   type="search"
//                   value={searchTerm}
//                   onChange={handleInputChange}
//                 />
//                 {isLoading && (
//                   <div className="position-absolute top-50 end-0 translate-middle-y pe-3">
//                     <LoadingSpinner size="sm" />
//                   </div>
//                 )}
//               </div>
//               <button
//                 type="button"
//                 className="btn-close fs-lg ms-2"
//                 onClick={handleCloseSearch}
//                 aria-label="Close"
//               ></button>
//             </form>
//           </div>
//           {/* Search Results Area */}
//           <div className="modal-body p-3">
//             {error ? (
//               <div className="alert alert-danger">{error}</div>
//             ) : isLoading && searchResults.length === 0 ? (
//               <div className="text-center py-5">
//                 <LoadingSpinner />
//                 <p className="mt-3">Searching for products...</p>
//               </div>
//             ) : searchResults.length > 0 ? (
//               <>
//                 <div className="mb-3">
//                   <h5>Found {searchResults.length} results for "{searchTerm}"</h5>
//                 </div>
//                 <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4 pt-4">
//                   {searchResults.map((product) => (
//                     <ProductSummary
//                       key={`${product.id}-${product.slug}`} // More unique key
//                       image={product.image_urls?.[0] || ''}
//                       name={product.name}
//                       slug={product.slug}
//                       price={product.price}
//                       id={product.id}
//                       url={`/products/${product.slug}`}
//                     />
//                   ))}
//                   {/* Loading indicators */}
//                   {isLoading && (
//                     Array.from({ length: 4 }).map((_, index) => (
//                       <LoadingCard key={`loading-${index}-${Date.now()}`} />
//                     ))
//                   )}
//                 </div>
//                 {/* Load more button as fallback */}
//                 {hasMore && (
//                   <div className="text-center mt-4">
//                     <button 
//                       onClick={loadMore} 
//                       disabled={isLoading}
//                       className="btn btn-outline-dark"
//                     >
//                       {isLoading ? 'Loading...' : 'Load More'}
//                     </button>
//                   </div>
//                 )}
//                 {!hasMore && searchResults.length > 0 && (
//                   <div className="text-center py-4">
//                     <p className="text-muted">No more products to load</p>
//                   </div>
//                 )}
//               </>
//             ) : searchTerm ? (
//               <div className="text-center py-5">
//                 <h4>No results found for "{searchTerm}"</h4>
//                 <p className="text-muted">Try different search terms</p>
//               </div>
//             ) : (
//               <div className="text-center py-5">
//                 <h4>Search for products</h4>
//                 <p className="text-muted">Enter keywords in the search box above</p>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default SearchPage;
// VERSION 03
// import { useEffect, useState, useCallback, useRef } from 'react';
// import { useSearchParams, useNavigate, Link } from 'react-router-dom';
// import { SearchAxiosService } from '../../services/net/SearchAxiosService';
// import LoadingSpinner from './LoadingSpinner';
// // import ProductSummary from '../products/ProductSummary';
// import LoadingCard from './LoadingCard';
// import ProductSummary from '../../pages/products/ProductSummary';
// import { Product } from '../../types/Offers';
// import SeoManager from '../../utils/SeoManager';
// // import SeoManager from '../seo/SeoManager';
// // import { Product } from '../../types'; // Assume proper type definition
// const SearchPage = () => {
//   const [searchParams] = useSearchParams();
//   const navigate = useNavigate();
//   const [searchTerm, setSearchTerm] = useState('');
//   const [searchResults, setSearchResults] = useState<Product[]>([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState<{ message: string; code?: number } | null>(null);
//   const [page, setPage] = useState(1);
//   const [hasMore, setHasMore] = useState(true);
//   const abortControllerRef = useRef<AbortController>();
//   // SEO configuration
//   const seoConfig = {
//     title: `Search: ${searchTerm || 'Products'} | Your Store Name`,
//     description: searchTerm 
//       ? `Search results for "${searchTerm}" - Find the best products`
//       : 'Search our product catalog',
//     keywords: `${searchTerm}, search, products`,
//   };
//   // Search execution with abort controller
//   const performSearch = useCallback(async (query: string, pageNum: number, reset: boolean = false) => {
//     if (isLoading) return;
//     abortControllerRef.current?.abort();
//     abortControllerRef.current = new AbortController();
//     setIsLoading(true);
//     setError(null);
//     try {
//       const response = await SearchAxiosService.searchProducts({
//         q: query,
//         page: pageNum,
//         page_size: 12
//       }, { signal: abortControllerRef.current.signal });
//       if (response?.data?.items) {
//         setSearchResults(prev => reset ? response.data.items : [...prev, ...response.data.items]);
//         setHasMore(response.data.items.length >= 12);
//       } else {
//         setHasMore(false);
//         if (reset) setSearchResults([]);
//       }
//     } catch (err: any) {
//       if (err.name !== 'AbortError') {
//         setError({ 
//           message: 'Failed to fetch search results', 
//           code: err.response?.status 
//         });
//       }
//     } finally {
//       setIsLoading(false);
//     }
//   }, [isLoading]);
//   // Initial search and cleanup
//   useEffect(() => {
//     const query = searchParams.get('q') || '';
//     setSearchTerm(query);
//     setPage(1);
//     performSearch(query, 1, true);
//     return () => abortControllerRef.current?.abort();
//   }, [searchParams, performSearch]);
//   // Search form handling
//   const handleSearchSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const trimmedTerm = searchTerm.trim();
//     if (trimmedTerm) {
//       navigate(`/search?q=${encodeURIComponent(trimmedTerm)}`);
//     }
//   };
//   // Infinite scroll with intersection observer
//   const loadMore = useCallback(() => {
//     if (!isLoading && hasMore) {
//       setPage(prev => prev + 1);
//       performSearch(searchTerm, page + 1);
//     }
//   }, [isLoading, hasMore, page, searchTerm, performSearch]);
//   const observer = useRef<IntersectionObserver>();
//   const lastItemRef = useCallback((node: HTMLDivElement) => {
//     if (isLoading) return;
//     if (observer.current) observer.current.disconnect();
//     observer.current = new IntersectionObserver(entries => {
//       if (entries[0].isIntersecting && hasMore) {
//         loadMore();
//       }
//     });
//     if (node) observer.current.observe(node);
//   }, [isLoading, hasMore, loadMore]);
//   // Render helpers
//   const renderResults = () => (
//     <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4 pt-4">
//       {searchResults.map((product, index) => (
//         <div 
//           key={`${product.id}-${index}`}
//           ref={index === searchResults.length - 1 ? lastItemRef : null}
//         >
//           <ProductSummary
//             product={product}
//             showDetails={true}
//             discountBadge={product.has_discount}
//           />
//         </div>
//       ))}
//     </div>
//   );
//   const renderEmptyState = () => (
//     <div className="text-center py-5">
//       <h4>{searchTerm ? `No results for "${searchTerm}"` : 'Start Searching'}</h4>
//       <p className="text-muted">
//         {searchTerm ? 'Try different keywords' : 'Enter keywords above to find products'}
//       </p>
//     </div>
//   );
//   return (
//     <div 
//       className="modal fade show" 
//       id="searchModal" 
//       role="dialog" 
//       style={{ display: 'block' }}
//       aria-labelledby="searchModalLabel"
//     >
//       <SeoManager {...seoConfig} />
//       <div className="modal-dialog modal-fullscreen" role="document">
//         <div className="modal-content">
//           <div className="modal-header flex-wrap gap-3">
//             <nav aria-label="Breadcrumb" className="flex-shrink-0">
//               <ol className="breadcrumb">
//                 <li className="breadcrumb-item">
//                   <Link to="/" aria-label="Home">
//                     <img 
//                       src="/assets/img/us/logos/favicon.svg" 
//                       alt="Logo" 
//                       width="40" 
//                       height="40"
//                     />
//                   </Link>
//                 </li>
//                 <li className="breadcrumb-item active" aria-current="page">
//                   Search
//                 </li>
//               </ol>
//             </nav>
//             <form 
//               className="flex-grow-1" 
//               onSubmit={handleSearchSubmit}
//               role="search"
//             >
//               <div className="input-group">
//                 <input
//                   type="search"
//                   className="form-control form-control-lg"
//                   placeholder="Search products..."
//                   aria-label="Search products"
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   autoFocus
//                 />
//                 <button 
//                   type="button" 
//                   className="btn btn-lg btn-outline-secondary" 
//                   onClick={() => navigate(-1)}
//                   aria-label="Close search"
//                 >
//                   <i className="ci-close" />
//                 </button>
//               </div>
//             </form>
//           </div>
//           <div className="modal-body p-3">
//             {error && (
//               <div className="alert alert-danger" role="alert">
//                 {error.message} {error.code && `(Code: ${error.code})`}
//               </div>
//             )}
//             {isLoading && searchResults.length === 0 ? (
//               <div className="text-center py-5">
//                 <LoadingSpinner />
//                 <p className="mt-3">Searching our catalog...</p>
//               </div>
//             ) : searchResults.length > 0 ? (
//               <>
//                 <div className="mb-4">
//                   <h2 className="h5">
//                     Showing {searchResults.length} results for "{searchTerm}"
//                   </h2>
//                 </div>
//                 {renderResults()}
//                 {isLoading && <LoadingCard count={4} />}
//                 {!hasMore && (
//                   <p className="text-center text-muted mt-4">
//                     End of results
//                   </p>
//                 )}
//               </>
//             ) : (
//               renderEmptyState()
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default SearchPage;
// VERSION 04
// import { useEffect, useState, useCallback, useRef } from 'react';
// import { useSearchParams, useNavigate, Link } from 'react-router-dom';
// import { SearchAxiosService } from '../../services/net/SearchAxiosService';
// import LoadingSpinner from './LoadingSpinner';
// import ProductSummary from '../../pages/products/ProductSummary';
// import LoadingCard from './LoadingCard';
// const SearchPage = () => {
//   const [searchParams] = useSearchParams();
//   const navigate = useNavigate();
//   const [searchTerm, setSearchTerm] = useState('');
//   const [searchResults, setSearchResults] = useState<any[]>([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const [page, setPage] = useState(1);
//   const [hasMore, setHasMore] = useState(true);
//   const searchInputRef = useRef<HTMLInputElement>(null);
//   const scrollTimeoutRef = useRef<NodeJS.Timeout>();
//   // Get initial search term from URL
//   useEffect(() => {
//     const query = searchParams.get('q') || '';
//     setSearchTerm(query);
//     setSearchResults([]);
//     setPage(1);
//     setHasMore(true);
//     if (query) {
//       performSearch(query, 1, true);
//     }
//   }, [searchParams]);
//   const performSearch = useCallback(async (query: string, pageNum: number, reset: boolean = false) => {
//     if (isLoading) return;
//     setIsLoading(true);
//     setError(null);
//     try {
//       const response = await SearchAxiosService.searchProducts({
//         q: query,
//         page: pageNum,
//         page_size: 12
//       });
//       if (response?.data?.items) {
//         setSearchResults(prev => reset ? response.data.items : [...prev, ...response.data.items]);
//         setHasMore(response.data.items.length >= 12);
//       } else {
//         setHasMore(false);
//         if (reset) setSearchResults([]);
//       }
//     } catch (err) {
//       setError('Failed to fetch search results');
//       console.error('Search error:', err);
//     } finally {
//       setIsLoading(false);
//       searchInputRef.current?.focus();
//     }
//   }, [isLoading]);
//   const handleSearchSubmit = useCallback((e: React.FormEvent) => {
//     e.preventDefault();
//     if (searchTerm.trim()) {
//       navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
//     }
//   }, [searchTerm, navigate]);
//   const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchTerm(e.target.value);
//   }, []);
//   const handleCloseSearch = useCallback(() => {
//     navigate(-1);
//   }, [navigate]);
//   const loadMore = useCallback(() => {
//     if (!isLoading && hasMore && searchTerm) {
//       const nextPage = page + 1;
//       setPage(nextPage);
//       performSearch(searchTerm, nextPage);
//     }
//   }, [isLoading, hasMore, page, searchTerm, performSearch]);
//   // Improved infinite scroll handler with proper cleanup
//   useEffect(() => {
//     const handleScroll = () => {
//       if (scrollTimeoutRef.current) {
//         clearTimeout(scrollTimeoutRef.current);
//       }
//       scrollTimeoutRef.current = setTimeout(() => {
//         const scrollThreshold = 200;
//         const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
//         if (scrollHeight - (scrollTop + clientHeight) < scrollThreshold) {
//           loadMore();
//         }
//       }, 100);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//       if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
//     };
//   }, [loadMore]);
//   return (
//     <div className="modal fade show" id="SearchPage" tabIndex={-1} role="dialog" 
//          style={{ display: "block" }} aria-modal="true">
//       <div className="modal-dialog modal-fullscreen" role="document">
//         <div className="modal-content">
//           <div className="modal-header flex-wrap">
//             <ul className="nav nav-pills flex-nowrap gap-2 text-nowrap card-header modal-title" role="tablist">
//               <li className="nav-item" role="presentation">
//                 <Link className="navbar-brand pt-0" to="/" data-discover="true">
//                   <span className="d-flex flex-shrink-0 text-primary rtl-flip me-2">
//                     <div className="flex-shrink-0 border rounded-circle" style={{ width: '40px' }}>
//                       <div className="ratio ratio-1x1 rounded-circle overflow-hidden">
//                         <img alt="Avatar" src="/assets/img/us/logos/favicon.svg" />
//                       </div>
//                     </div>
//                   </span>
//                 </Link>
//               </li>
//               <li className="nav-item" role="presentation">
//                 <button type="button" className="nav-link" onClick={() => navigate(-1)}>
//                   <i className="fi-list me-2 ms-n1" />Salesnet
//                 </button>
//               </li>
//             </ul>
//             <form className="container d-flex align-items-center" onSubmit={handleSearchSubmit}>
//               <div className="position-relative w-100">
//                 <input
//                   ref={searchInputRef}
//                   className="form-control form-control-lg fs-lg border-0 rounded-0 py-3 ps-0"
//                   placeholder="Search for products..."
//                   autoComplete="off1"
//                   aria-label="Search products"
//                   type="search"
//                   value={searchTerm}
//                   onChange={handleInputChange}
//                 />
//                 {isLoading && (
//                   <div className="position-absolute top-50 end-0 translate-middle-y pe-3">
//                     <LoadingSpinner size="sm" />
//                   </div>
//                 )}
//               </div>
//               <button
//                 type="button"
//                 className="btn-close fs-lg ms-2"
//                 onClick={handleCloseSearch}
//                 aria-label="Close"
//               ></button>
//             </form>
//           </div>
//           <div className="modal-body p-3">
//             {error ? (
//               <div className="alert alert-danger">{error}</div>
//             ) : isLoading && searchResults.length === 0 ? (
//               <div className="text-center py-5">
//                 <LoadingSpinner />
//                 <p className="mt-3">Searching for products...</p>
//               </div>
//             ) : searchResults.length > 0 ? (
//               <>
//                 <div className="mb-3">
//                   <h5>Found {searchResults.length} results for "{searchTerm}"</h5>
//                 </div>
//                 <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4 pt-4">
//                   {searchResults.map((product) => (
//                     <ProductSummary
//                       key={`${product.id}-${product.slug}`}
//                       product={product}
//                       showDetails={true}
//                       discountBadge={product.has_discount}
//                     />
//                   ))}
//                   {isLoading && Array.from({ length: 4 }).map((_, index) => (
//                     <LoadingCard key={`loading-${index}-${Date.now()}`} />
//                   ))}
//                 </div>
//                 {hasMore && (
//                   <div className="text-center mt-4">
//                     <button 
//                       onClick={loadMore} 
//                       disabled={isLoading}
//                       className="btn btn-outline-dark"
//                       aria-label="Load more results"
//                     >
//                       {isLoading ? 'Loading...' : 'Load More'}
//                     </button>
//                   </div>
//                 )}
//                 {!hasMore && searchResults.length > 0 && (
//                   <div className="text-center py-4">
//                     <p className="text-muted">End of results</p>
//                   </div>
//                 )}
//               </>
//             ) : searchTerm ? (
//               <div className="text-center py-5">
//                 <h4>No results found for "{searchTerm}"</h4>
//                 <p className="text-muted">Try different search terms</p>
//               </div>
//             ) : (
//               <div className="text-center py-5">
//                 <h4>Search for products</h4>
//                 <p className="text-muted">Enter keywords in the search box above</p>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default SearchPage;
// VERSION 05
import { useEffect, useState, useCallback, useRef } from 'react';
import { useSearchParams, useNavigate, Link } from 'react-router-dom';
import { SearchAxiosService } from '../../services/net/SearchAxiosService';
import { motion, AnimatePresence } from 'framer-motion';
import ProductSummary from '../../pages/products/ProductSummary';
// import { FiX, FiSearch } from 'react-icons/fi';
const SearchPage = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const inputRef = useRef(null);
    const searchTimeout = useRef(null);
    // Focus input on mount and preserve focus
    useEffect(() => {
        inputRef.current?.focus();
    }, []);
    // Debounced search handler
    const performSearch = useCallback(async (query, pageNum, reset = false) => {
        if (isLoading || !query.trim())
            return;
        setIsLoading(true);
        setError(null);
        try {
            const response = await SearchAxiosService.searchProducts({
                q: query,
                page: pageNum,
                page_size: 12
            });
            // console.log(`from search`, response.data.products);
            if (response?.data?.products) {
                setSearchResults(prev => reset ? response.data.products : [...prev, ...response.data.products]);
                setHasMore(response.data.products.length >= 12);
            }
            else {
                setHasMore(false);
                if (reset)
                    setSearchResults([]);
            }
        }
        catch (err) {
            setError('Failed to fetch search results. Please try again.');
        }
        finally {
            setIsLoading(false);
        }
    }, [isLoading]);
    // Handle URL parameter changes
    useEffect(() => {
        const query = searchParams.get('q') || '';
        setSearchTerm(query);
        if (query) {
            if (searchTimeout.current)
                clearTimeout(searchTimeout.current);
            searchTimeout.current = setTimeout(() => {
                setPage(1);
                performSearch(query, 1, true);
            }, 500);
        }
    }, [searchParams, performSearch]);
    // Input handlers
    const handleSearchSubmit = (e) => {
        e.preventDefault();
        navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
    };
    const handleInputChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        // Update URL without page reload
        if (value.trim()) {
            navigate(`/search?q=${encodeURIComponent(value)}`, { replace: true });
        }
    };
    const clearSearch = () => {
        setSearchTerm('');
        navigate('/search', { replace: true });
        inputRef.current?.focus();
    };
    // Infinite scroll handler
    const loadMore = useCallback(() => {
        if (!isLoading && hasMore) {
            setPage(prev => prev + 1);
            performSearch(searchTerm, page + 1);
        }
    }, [isLoading, hasMore, page, searchTerm, performSearch]);
    // Scroll listener with proper debouncing
    useEffect(() => {
        const handleScroll = () => {
            const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
            if (scrollHeight - (scrollTop + clientHeight) < 200 && !isLoading) {
                loadMore();
            }
        };
        const debouncedScroll = () => {
            if (searchTimeout.current)
                clearTimeout(searchTimeout.current);
            searchTimeout.current = setTimeout(handleScroll, 100);
        };
        window.addEventListener('scroll', debouncedScroll);
        return () => {
            window.removeEventListener('scroll', debouncedScroll);
            if (searchTimeout.current)
                clearTimeout(searchTimeout.current);
        };
    }, [loadMore, isLoading]);
    return (_jsx("div", { className: "modal fade show", style: { display: 'block', backdropFilter: 'blur(5px)' }, children: _jsx("div", { className: "modal-dialog modal-fullscreen", children: _jsxs("div", { className: "modal-content", children: [_jsx("div", { className: "modal-header border-0", children: _jsxs("div", { className: "d-flex w-100 align-items-center", children: [_jsx(Link, { to: "/", className: "navbar-brand me-3", children: _jsx("img", { src: "/assets/img/us/logos/favicon.svg", alt: "Logo", width: "40" }) }), _jsx("form", { className: "flex-grow-1", onSubmit: handleSearchSubmit, children: _jsxs("div", { className: "input-group input-group-lg", children: [_jsx("span", { className: "input-group-text border-0 bg-transparent pe-1", children: _jsx("i", { className: "ci-search fs-lg" }) }), _jsx("input", { ref: inputRef, type: "search", className: "form-control border-0 shadow-none", placeholder: "Search products...", value: searchTerm, onChange: handleInputChange })] }) }), _jsx("button", { className: "btn ms-3", onClick: () => navigate(-1), "aria-label": "Close", children: _jsx("i", { className: "ci-close fs-lg" }) })] }) }), _jsxs("div", { className: "modal-body p-4", children: [_jsx(AnimatePresence, { children: error && (_jsx(motion.div, { initial: { opacity: 0, y: -20 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0 }, className: "alert alert-danger", children: error })) }), isLoading && !searchResults.length ? (_jsxs("div", { className: "d-flex flex-column align-items-center justify-content-center py-5", children: [_jsxs("div", { className: "spinner-wave text-primary", children: [_jsx("div", { className: "wave" }), _jsx("div", { className: "wave" }), _jsx("div", { className: "wave" })] }), _jsx("p", { className: "mt-3 text-muted", children: "Searching products..." })] })) : searchResults.length > 0 ? (_jsxs(_Fragment, { children: [_jsxs("h5", { className: "mb-4", children: [searchResults.length, " results for \"", searchTerm, "\""] }), _jsx("div", { className: "row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4", children: searchResults.map((product, index) => (_jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: index * 0.05 }, children: _jsx(ProductSummary, { product: product, showDetails: true, discountBadge: product.has_discount }) }, product.id))) }), _jsxs("div", { className: "mt-4 text-center", children: [hasMore && (_jsx("button", { onClick: loadMore, disabled: isLoading, className: "btn btn-outline-dark px-5", children: isLoading ? (_jsx("span", { className: "spinner-grow spinner-grow-sm" })) : ('Load More') })), !hasMore && (_jsx("p", { className: "text-muted", children: "No more products to load" }))] })] })) : searchTerm ? (_jsxs("div", { className: "text-center py-5", children: [_jsx("h4", { className: "mb-3", children: "No results found" }), _jsx("p", { className: "text-muted", children: "Try different search terms" })] })) : (_jsxs("div", { className: "text-center py-5", children: [_jsx("h4", { className: "mb-3", children: "Start searching" }), _jsx("p", { className: "text-muted", children: "Enter product name or keywords" })] }))] })] }) }) }));
};
export default SearchPage;
// Add this CSS for the wave spinner
const waveSpinnerStyles = `
.spinner-wave {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 40px;
}

.spinner-wave .wave {
  position: absolute;
  width: 13px;
  height: 40px;
  background: currentColor;
  animation: wave 1.2s infinite ease-in-out;
}

.spinner-wave .wave:nth-child(2) {
  left: 20px;
  animation-delay: -1.1s;
}

.spinner-wave .wave:nth-child(3) {
  left: 40px;
  animation-delay: -1.0s;
}

@keyframes wave {
  0%, 40%, 100% { transform: scaleY(0.4) }  
  20% { transform: scaleY(1.0) }
}
`;
// Inject styles
const styleSheet = document.createElement('style');
styleSheet.innerText = waveSpinnerStyles;
document.head.appendChild(styleSheet);
