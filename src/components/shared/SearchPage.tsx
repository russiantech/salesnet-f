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


import { useEffect, useState, useCallback } from 'react';
import { useSearchParams, useNavigate, Link } from 'react-router-dom';
import { SearchAxiosService } from '../../services/net/SearchAxiosService';
import LoadingSpinner from './LoadingSpinner';
import ProductSummary from '../../pages/products/ProductSummary_0';
import LoadingCard from './LoadingCard';

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  // Get initial search term from URL
  useEffect(() => {
    const query = searchParams.get('q') || '';
    setSearchTerm(query);
    setSearchResults([]);
    setPage(1);
    setHasMore(true);
    if (query) {
      performSearch(query, 1, true);
    }
  }, [searchParams]);

  const performSearch = async (query: string, pageNum: number, reset: boolean = false) => {
    if (isLoading) return;
    
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await SearchAxiosService.searchProducts({
        q: query,
        page: pageNum,
        page_size: 12
      });
      
      if (response?.data?.items) {
        if (reset) {
          setSearchResults(response.data.items);
        } else {
          setSearchResults(prev => [...prev, ...response.data.items]);
        }
        setHasMore(response.data.items.length >= 12);
      } else {
        setHasMore(false);
        if (reset) setSearchResults([]);
      }
    } catch (err) {
      setError('Failed to fetch search results');
      console.error('Search error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleCloseSearch = () => {
    navigate(-1);
  };

  const loadMore = useCallback(() => {
    if (!isLoading && hasMore) {
      const nextPage = page + 1;
      setPage(nextPage);
      performSearch(searchTerm, nextPage);
    }
  }, [isLoading, hasMore, page, searchTerm]);

  // Infinite scroll handler with debounce
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const handleScroll = () => {
      // Clear any pending execution
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      
      // Debounce the scroll handler
      timeoutId = setTimeout(() => {
        const scrollThreshold = 200; // pixels from bottom
        const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
        
        // Check if we're near the bottom (within threshold)
        if (scrollHeight - (scrollTop + clientHeight) < scrollThreshold) {
          loadMore();
        }
      }, 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [loadMore]);

  return (
    <div className="modal fade show" id="SearchPage" tabIndex={-1} role="dialog" 
         style={{ display: "block" }} aria-modal="true">
      <div className="modal-dialog modal-fullscreen" role="document">
        <div className="modal-content">
          {/* ... [keep your existing header code exactly as is] ... */}
          <div className="modal-header flex-wrap">
  {/* Brand Logo and Navigation */}
  <ul className="nav nav-pills flex-nowrap gap-2 text-nowrap card-header modal-title" role="tablist">
    <li className="nav-item" role="presentation">
      <Link className="navbar-brand pt-0" to="/" data-discover="true">
        <span className="d-flex flex-shrink-0 text-primary rtl-flip me-2">
          <div className="flex-shrink-0 border rounded-circle" style={{width: '40px'}}>
            <div className="ratio ratio-1x1 rounded-circle overflow-hidden">
              <img alt="Avatar" src="/assets/img/us/logos/favicon.svg" />
            </div>
          </div>
        </span>
      </Link>
    </li>
    <li className="nav-item" role="presentation">
      <button type="button" className="nav-link" onClick={() => navigate(-1)}>
        <i className="fi-list me-2 ms-n1" />Salesnet
      </button>
    </li>
  </ul>

  {/* Search Form */}
      <form className="container d-flex align-items-center" onSubmit={handleSearchSubmit}>
        <div className="position-relative w-100">
          <input
                  className="form-control form-control-lg fs-lg border-0 rounded-0 py-3 ps-0"
                  placeholder="Search for products..."
                  autoComplete="off"
                  aria-label="Search products"
                  type="search"
                  value={searchTerm}
                  onChange={handleInputChange}
                />
                {isLoading && (
                  <div className="position-absolute top-50 end-0 translate-middle-y pe-3">
                    <LoadingSpinner size="sm" />
                  </div>
                )}
              </div>
              <button
                type="button"
                className="btn-close fs-lg ms-2"
                onClick={handleCloseSearch}
                aria-label="Close"
              ></button>
            </form>
          </div>

          {/* Search Results Area */}
          <div className="modal-body p-3">
            {error ? (
              <div className="alert alert-danger">{error}</div>
            ) : isLoading && searchResults.length === 0 ? (
              <div className="text-center py-5">
                <LoadingSpinner />
                <p className="mt-3">Searching for products...</p>
              </div>
            ) : searchResults.length > 0 ? (
              <>
                <div className="mb-3">
                  <h5>Found {searchResults.length} results for "{searchTerm}"</h5>
                </div>
                <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4 pt-4">
                  {searchResults.map((product) => (
                    <ProductSummary
                      key={`${product.id}-${product.slug}`} // More unique key
                      image={product.image_urls?.[0] || ''}
                      name={product.name}
                      slug={product.slug}
                      price={product.price}
                      id={product.id}
                      url={`/products/${product.slug}`}
                    />
                  ))}
                  
                  {/* Loading indicators */}
                  {isLoading && (
                    Array.from({ length: 4 }).map((_, index) => (
                      <LoadingCard key={`loading-${index}-${Date.now()}`} />
                    ))
                  )}
                </div>
                
                {/* Load more button as fallback */}
                {hasMore && (
                  <div className="text-center mt-4">
                    <button 
                      onClick={loadMore} 
                      disabled={isLoading}
                      className="btn btn-outline-dark"
                    >
                      {isLoading ? 'Loading...' : 'Load More'}
                    </button>
                  </div>
                )}
                
                {!hasMore && searchResults.length > 0 && (
                  <div className="text-center py-4">
                    <p className="text-muted">No more products to load</p>
                  </div>
                )}
              </>
            ) : searchTerm ? (
              <div className="text-center py-5">
                <h4>No results found for "{searchTerm}"</h4>
                <p className="text-muted">Try different search terms</p>
              </div>
            ) : (
              <div className="text-center py-5">
                <h4>Search for products</h4>
                <p className="text-muted">Enter keywords in the search box above</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;