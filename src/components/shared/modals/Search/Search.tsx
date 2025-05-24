import { useState, useEffect, useRef, useCallback } from 'react';
import { useDebounce } from 'use-debounce';
import { useNavigate } from 'react-router-dom';
import { SearchAxiosService } from '../../../../services/net/SearchAxiosService';
// import { SearchAxiosService } from '../services/SearchAxiosService';
import LoadingSpinner from '../../LoadingSpinner'

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedTerm] = useDebounce(searchTerm, 300);
  const [suggestions, setSuggestions] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  // Fetch autocomplete suggestions
  useEffect(() => {
    if (debouncedTerm.length > 1) {
      setIsLoading(true);
      SearchAxiosService.getSuggestions(debouncedTerm)
        .then(response => {
          setSuggestions(response.data || []);
          setError(null);
        })
        .catch(err => {
          setError('Failed to load suggestions');
          console.error('Autocomplete error:', err);
        })
        .finally(() => setIsLoading(false));
    } else {
      setSuggestions([]);
    }
  }, [debouncedTerm]);

  // Handle search submission
  const handleSearch = useCallback(async (term: string, preventNavigation = false) => {
    if (!term.trim()) return;
    
    setIsLoading(true);
    setHasSearched(true);
    setError(null);
    
    try {
      const response = await SearchAxiosService.searchProducts({
        q: term,
        page_size: 12
      });
      
      setSearchResults(response.data.products || []);
      
      if (!preventNavigation) {
        navigate(`/search?q=${encodeURIComponent(term)}`);
      }
      
      // Log the search query for analytics
      SearchAxiosService.logSearchQuery(term, 'products');
    } catch (err) {
      setError('Failed to perform search');
      console.error('Search error:', err);
    } finally {
      setIsLoading(false);
    }
  }, [navigate]);

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSearch(searchTerm);
    searchInputRef.current?.blur();
  };

  // Handle suggestion click
  const handleSuggestionClick = (suggestion: any) => {
    setSearchTerm(suggestion.name);
    handleSearch(suggestion.name);
  };

  // Clear search state
  const clearSearch = () => {
    setSearchTerm('');
    setSuggestions([]);
    setSearchResults([]);
    setHasSearched(false);
    setError(null);
  };

  // return (
  //   <div className="offcanvas offcanvas-top" id="searchBox" data-bs-backdrop="static" tabIndex={-1}>
  //     <div className="offcanvas-header border-bottom p-0 py-lg-1">
  //       <form className="container d-flex align-items-center" onSubmit={handleSubmit}>
  //         <div className="position-relative w-100">
  //           <input
  //             ref={searchInputRef}
  //             type="search"
  //             className="form-control form-control-lg fs-lg border-0 rounded-0 py-3 ps-0"
  //             placeholder="Search for products..."
  //             value={searchTerm}
  //             onChange={(e) => setSearchTerm(e.target.value)}
  //             autoComplete="off"
  //             aria-label="Search products"
  //           />
            
  //           {/* Loading indicator */}
  //           {isLoading && (
  //             <div className="position-absolute top-50 end-0 translate-middle-y pe-3">
  //               <div className="spinner-border spinner-border-sm text-primary" role="status">
  //                 <span className="visually-hidden">Loading...</span>
  //               </div>
  //             </div>
  //           )}
  //         </div>
          
  //         <button 
  //           type="reset" 
  //           className="btn-close fs-lg ms-2" 
  //           data-bs-dismiss="offcanvas" 
  //           aria-label="Close"
  //           onClick={clearSearch}
  //         />
  //       </form>
  //     </div>
      
  //     <div className="offcanvas-body px-0">
  //       {/* Error message */}
  //       {error && (
  //         <div className="container alert alert-danger mb-3">
  //           {error}
  //         </div>
  //       )}
        
  //       {/* Suggestions dropdown */}
  //       {suggestions.length > 0 && !hasSearched && (
  //         <div className="container">
  //           <div className="dropdown-menu d-block position-static border-0 shadow-sm rounded-0 rounded-bottom-3">
  //             {suggestions.map((item: any) => (
  //               <button
  //                 key={item.id}
  //                 className="dropdown-item d-flex align-items-center gap-3 py-2"
  //                 onClick={() => handleSuggestionClick(item)}
  //               >
  //                 {item.image && (
  //                   <img 
  //                     src={item.image} 
  //                     alt="" 
  //                     width="40" 
  //                     height="40" 
  //                     className="rounded-1"
  //                     loading="lazy"
  //                   />
  //                 )}
  //                 <div>
  //                   <div className="fw-medium">{item.name}</div>
  //                   <div className="text-primary">${item.price}</div>
  //                 </div>
  //               </button>
  //             ))}
  //           </div>
  //         </div>
  //       )}
        
  //       {/* Search results */}
  //       {hasSearched ? (
  //         isLoading ? (
  //           <div className="container text-center py-5">
  //             <div className="spinner-border text-primary" role="status">
  //               <span className="visually-hidden">Loading...</span>
  //             </div>
  //             <p className="mt-2">Searching products...</p>
  //           </div>
  //         ) : searchResults.length > 0 ? (
  
  //           // <div className="container" style={{ maxHeight: '800px', overflowY: 'auto' }}>
  //           //     <SearchResults results={searchResults} />
  //               <div className="container" style={{ maxHeight: '800px', overflowY: 'auto', width: '100%' }}>
  //               <SearchResults results={searchResults} />
  //           </div>

  //           // </div>
        
  //         ) : (
  //           <div className="container text-center py-5">
  //             <h6>No products found</h6>
  //             <p className="text-muted">Try different search terms</p>
  //           </div>
  //         )
  //       ) : (
  //         <div className="container">
  //           <h6 className="mb-2">Your search results will appear here</h6>
  //           <p className="fs-sm mb-0">Start typing in the search field above to see instant search results.</p>
  //         </div>
  //       )}
  //     </div>
  //   </div>
  // );
  const style = {
    off_canvas: {
      overflow: 'hidden !important', // Use quotes for string values
      // maxHeight: '70vh', // Use quotes for string values
    },
  };
  
  return (
    <div className="offcanvas offcanvas-top" id="searchBox" data-bs-backdrop="static" tabIndex={-1}>
        <div className="offcanvas-header border-bottom p-0 py-lg-1">
            <form className="container d-flex align-items-center" onSubmit={handleSubmit}>
                <div className="position-relative w-100">
                    <input
                        ref={searchInputRef}
                        type="search"
                        className="form-control form-control-lg fs-lg border-0 rounded-0 py-3 ps-0"
                        placeholder="Search for products..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        autoComplete="off"
                        aria-label="Search products"
                    />
                    {/* Loading indicator */}
                    {isLoading && (
                        <div className="position-absolute top-50 end-0 translate-middle-y pe-3">
                            <LoadingSpinner size='sm' />
                        </div>
                    )}
                </div>
                <button 
                    type="reset" 
                    className="btn-close fs-lg ms-2" 
                    data-bs-dismiss="offcanvas" 
                    aria-label="Close"
                    onClick={clearSearch}
                />
            </form>
        </div>
        
        <div className="offcanvas-body px-0" style={style.off_canvas}>
            {/* Error message */}
            {error && (
                <div className="container alert alert-danger mb-3">
                    {error}
                </div>
            )}
            
            {/* Suggestions dropdown */}
            {suggestions.length > 0 && !hasSearched && (
                <div className="container">
                    <div className="dropdown-menu d-block position-static border-0 shadow-sm rounded-0 rounded-bottom-3">
                        {suggestions.map((item: any) => (
                            <button
                                key={item.id}
                                className="dropdown-item d-flex align-items-center gap-3 py-2"
                                onClick={() => handleSuggestionClick(item)}
                            >
                                {item.image && (
                                    <img 
                                        src={item.image} 
                                        alt="" 
                                        width="40" 
                                        height="40" 
                                        className="rounded-1"
                                        loading="lazy"
                                    />
                                )}
                                <div>
                                    <div className="fw-medium">{item.name}</div>
                                    <div className="text-primary">${item.price}</div>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            )}
            
            {/* Search results */}
            {hasSearched ? (
                isLoading ? (
                    <div className="container text-center py-5">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <p className="mt-2">Searching products...</p>
                    </div>
                ) : searchResults.length > 0 ? (
                    <div className="container">
                        <SearchResults results={searchResults} />
                    </div>
                ) : (
                    <div className="container text-center py-5">
                        <h6>No products found</h6>
                        <p className="text-muted">Try different search terms</p>
                    </div>
                )
            ) : (
                <div className="container">
                    <h6 className="mb-2">Your search results will appear here</h6>
                    <p className="fs-sm mb-0">Start typing in the search field above to see instant search results.</p>
                </div>
            )}
        </div>
    </div>
);

};

interface SearchResultItem {
  id: string;
  slug: string;
  name: string;
  primary_image?: string;
  average_rating?: number;
  review_count?: number;
  price: number;
  original_price?: number;
}

interface SearchResultsProps {
  results: SearchResultItem[];
}


const calculateRatingFromComments = (comments) => {
    if (!comments || comments.length === 0) return 0;
    const total = comments.reduce((sum, c) => sum + (c.rating || 0), 0);
    return total / comments.length;
  };
  
// export const SearchResults = ({ results }: SearchResultsProps) => {
//     return (
//       <section className="container">
//         <div className="row">
//           {results.map((product) => {
//             // Safely convert price to number and format
//             const price = typeof product.price === 'string' 
//               ? parseFloat(product.price) 
//               : product.price;
//             const formattedPrice = isNaN(price) ? '0.00' : price.toFixed(2);
            
//             // Calculate rating stars from comment

//             const commentsRating = calculateRatingFromComments(product.comments);
//             const rawRating = Number(product.average_rating) || commentsRating || 0;
//             const rating = rawRating
//             // const rating = Math.min(Math.max(Number(product.average_rating) || 0, 5));
//             const fullStars = Math.floor(rating);
//             const hasHalfStar = rating % 1 >= 0.5;
//             const emptyStars = Math.max(0, 5 - fullStars - (hasHalfStar ? 1 : 0));
  
//             return (
//               <div key={product.id} className="col-sm-6 col-lg-4 d-flex flex-column gap-3 pt-4 py-lg-4">
//                 <div className="position-relative animate-underline d-flex align-items-center ps-xl-3">
//                   {/* Product Image */}
//                   <div className="ratio ratio-1x1 flex-shrink-0" style={{width: '110px'}}>
//                     <img className='rounded'
//                       src={product.image_urls?.[0] || '/assets/img/placeholder.png'} 
//                       width={110}
//                       alt={product.name}
//                     />
//                   </div>
                  
//                   {/* Product Details */}
//                   <div className="w-100 min-w-0 ps-2 ps-sm-3">
//                     {/* Rating */}
//                     <div className="d-flex align-items-center gap-2 mb-2">
//                       <div className="d-flex gap-1 fs-xs">
//                         {Array.from({ length: fullStars }).map((_, i) => (
//                           <i key={`full-${i}`} className="ci-star-filled text-warning" />
//                         ))}
//                         {hasHalfStar && (
//                           <i key="half" className="ci-star-half text-warning" />
//                         )}
//                         {Array.from({ length: emptyStars }).map((_, i) => (
//                           <i key={`empty-${i}`} className="ci-star text-body-tertiary opacity-75" />
//                         ))}
//                       </div>
//                       <span className="text-body-tertiary fs-xs">
//                         {product.comments_count || product.review_count || 0}
//                       </span>
//                     </div>
                    
//                     {/* Product Name */}
//                     <h4 className="mb-2">
//                       <a 
//                         className="stretched-link d-block fs-sm fw-medium text-truncate" 
//                         href={`/products/${product.slug}`}
//                       >
//                         <span className="animate-target">{product.name}</span>
//                       </a>
//                     </h4>
                    
//                     {/* Price */}
//                     <div className="h5 mb-0">${formattedPrice}</div>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </section>
//     );
//   };

// SearchResults.tsx

interface Product {
    id: number;
    name: string;
    price: number | string;
    slug: string;
    image_urls?: string[];
    average_rating?: number;
    review_count?: number;
    comments_count?: number;
  }
  
  interface SearchResultsProps {
    results: Product[];
  }
  
  // export const SearchResults2 = ({ results }: SearchResultsProps) => {
  //   // console.log('Rendering results:', results); // Debug log
    
  //   return (
  //     <div className="row">
  //       {results.map((product) => {
  //         // Convert price to number if it's a string
  //         const price = typeof product.price === 'string' 
  //           ? parseFloat(product.price) 
  //           : product.price;
  //         const formattedPrice = isNaN(price) ? '0.00' : price.toFixed(2);
  
  //         // Calculate rating display
  //         const rating = Math.min(Math.max(Number(product.average_rating) || 0, 0), 5);
  //         const fullStars = Math.floor(rating);
  //         const hasHalfStar = rating % 1 >= 0.5;
  //         const emptyStars = Math.max(0, 5 - fullStars - (hasHalfStar ? 1 : 0));
  
  //         return (
  //           <div key={product.id} className="col-sm-6 col-lg-4 d-flex flex-column gap-3 pt-4 py-lg-4">
  //             <div className="position-relative animate-underline d-flex align-items-center ps-xl-3">
  //               {/* Product Image */}
  //               <div className="ratio ratio-1x1 flex-shrink-0" style={{width: '110px'}}>
  //                 <img 
  //                   className="rounded"
  //                   src={product.image_urls?.[0] || '/assets/img/placeholder.png'} 
  //                   width={110}
  //                   alt={product.name}
  //                   onError={(e) => {
  //                     (e.target as HTMLImageElement).src = '/assets/img/placeholder.png';
  //                   }}
  //                 />
  //               </div>
                
  //               {/* Product Details */}
  //               <div className="w-100 min-w-0 ps-2 ps-sm-3">
  //                 {/* Rating */}
  //                 <div className="d-flex align-items-center gap-2 mb-2">
  //                   <div className="d-flex gap-1 fs-xs">
  //                     {Array.from({ length: fullStars }).map((_, i) => (
  //                       <i key={`full-${i}`} className="ci-star-filled text-warning" />
  //                     ))} 
  //                     {hasHalfStar && (
  //                       <i key="half" className="ci-star-half text-warning" />
  //                     )}
  //                     {Array.from({ length: emptyStars }).map((_, i) => (
  //                       <i key={`empty-${i}`} className="ci-star text-body-tertiary opacity-75" />
  //                     ))}
  //                   </div>
  //                   <span className="text-body-tertiary fs-xs">
  //                     {product.review_count || product.comments_count || 0}
  //                   </span>
  //                 </div>
                  
  //                 {/* Product Name */}
  //                 <h4 className="mb-2">
  //                   <a 
  //                     className="stretched-link d-block fs-sm fw-medium text-truncate" 
  //                     href={`/products/${product.slug}`}
  //                   >
  //                     <span className="animate-target">{product.name}</span>
  //                   </a>
  //                 </h4>
                  
  //                 {/* Price */}
  //                 <div className="h5 mb-0">${formattedPrice}</div>
  //               </div>
  //             </div>
  //           </div>
  //         );
  //       })}
  //     </div>
  //   );
  // };

  export const SearchResults2 = ({ results }: SearchResultsProps) => {
    return (
        <div className="row">
            {results.map((product) => {
                // Convert price to number if it's a string
                const price = typeof product.price === 'string' 
                    ? parseFloat(product.price) 
                    : product.price;
                const formattedPrice = isNaN(price) ? '0.00' : price.toFixed(2);

                // Calculate rating display
                const rating = Math.min(Math.max(Number(product.average_rating) || 0, 0), 5);
                const fullStars = Math.floor(rating);
                const hasHalfStar = rating % 1 >= 0.5;
                const emptyStars = Math.max(0, 5 - fullStars - (hasHalfStar ? 1 : 0));

                return (
                    <div key={product.id} className="col-sm-6 col-lg-4 d-flex flex-column gap-3 pt-4 py-lg-4">
                        
                        <div className="position-relative animate-underline d-flex align-items-center ps-xl-3">
                            {/* Product Image */}
                            <div className="ratio ratio-1x1 flex-shrink-0" style={{ width: '110px' }}>
                                <img 
                                    className="rounded"
                                    src={product.image_urls?.[0] || '/assets/img/placeholder.png'} 
                                    width={110}
                                    alt={product.name}
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = '/assets/img/placeholder.png';
                                    }}
                                />
                            </div>
                            
                            {/* Product Details */}
                            <div className="w-100 min-w-0 ps-2 ps-sm-3">
                                {/* Rating */}
                                <div className="d-flex align-items-center gap-2 mb-2">
                                    <div className="d-flex gap-1 fs-xs">
                                        {Array.from({ length: fullStars }).map((_, i) => (
                                            <i key={`full-${i}`} className="ci-star-filled text-warning" />
                                        ))} 
                                        {hasHalfStar && (
                                            <i key="half" className="ci-star-half text-warning" />
                                        )}
                                        {Array.from({ length: emptyStars }).map((_, i) => (
                                            <i key={`empty-${i}`} className="ci-star text-body-tertiary opacity-75" />
                                        ))}
                                    </div>
                                    <span className="text-body-tertiary fs-xs">
                                        {product.review_count || product.comments_count || 0}
                                    </span>
                                </div>
                                
                                {/* Product Name */}
                                <h4 className="mb-2">
                                    <a 
                                        className="stretched-link d-block fs-sm fw-medium text-truncate" 
                                        href={`/products/${product.slug}`}
                                    >
                                        <span className="animate-target">{product.name}</span>
                                    </a>
                                </h4>
                                
                                {/* Price */}
                                <div className="h5 mb-0">${formattedPrice}</div>
                            </div>
                        </div>

                    </div>
                );
            })}
        </div>
    );
};

// 
// import { ProductSummary } from './ProductSummary';
import type { Product } from '../../types';
import ProductSummary from '../../../../pages/products/ProductSummary';

interface SearchResultsProps {
  results: Product[];
}

export const SearchResults = ({ results }: SearchResultsProps) => {
  return (
    <div className="row">
      {results.map((product) => (
        <div 
          key={product.id} 
          className="col-sm-6 col-lg-4 d-flex flex-column gap-3 pt-4 py-lg-4"
        >
          {/* <ProductSummary
            product={{
              ...product,
              // Ensure numeric price and proper formatting
              price: typeof product.price === 'string' 
                ? parseFloat(product.price) 
                : product.price,
              // Normalize rating data
              average_rating: Math.min(
                Math.max(Number(product.average_rating) || 0, 0), 
                5
              ),
              reviews_count: product.review_count || product.comments_count || 0,
              // Ensure image array exists
              image_urls: product.image_urls?.length 
                ? product.image_urls 
                : ['/assets/img/placeholder.png']
            }}
            showDetails={false}
            showBadge={false}
            className="animate-underline bg-body rounded-3 p-2 p-sm-3"
          /> */}

          <ProductSummary
            key={product.id}
            product={product}
            showDetails={true}
        />

        </div>
      ))}
    </div>
  );
};

export default Search;