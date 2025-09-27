import { useState, useEffect, useRef, useCallback } from 'react';
import { useDebounce } from 'use-debounce';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { SearchAxiosService } from '../../../../services/net/SearchAxiosService';
import LoadingSpinner from '../../LoadingSpinner';
import ProductSummary from '../../../../pages/products/ProductSummary';
import { formatCurrency } from '../../../../utils/currencyUtils';

// Product type definition
type Product = {
  id: number;
  name: string;
  price: number | string;
  slug: string;
  image_urls?: string[];
  average_rating?: number;
  review_count?: number;
  comments_count?: number;
};

interface SearchResultsProps {
  results: Product[];
}

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedTerm] = useDebounce(searchTerm, 300);
  const [suggestions, setSuggestions] = useState([]);
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [isLoadingSuggestions, setIsLoadingSuggestions] = useState(false);
  const [isLoadingResults, setIsLoadingResults] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Initialize search term from URL on component mount
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const queryFromUrl = urlParams.get('q');
    if (queryFromUrl && queryFromUrl !== searchTerm) {
      setSearchTerm(queryFromUrl);
      setHasSearched(true);
    }
  }, [location.search]);

  // Fetch autocomplete suggestions
  useEffect(() => {
    if (debouncedTerm.length > 1 && !hasSearched) {
      setIsLoadingSuggestions(true);
      setShowSuggestions(true);
      
      SearchAxiosService.getSuggestions(debouncedTerm)
        .then(response => {
          setSuggestions(response.data || []);
          setError(null);
        })
        .catch(err => {
          setError('Failed to load suggestions');
          console.error('Autocomplete error:', err);
          setSuggestions([]);
        })
        .finally(() => setIsLoadingSuggestions(false));
    } else if (debouncedTerm.length <= 1) {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [debouncedTerm, hasSearched]);

  // Perform search when debounced term changes (for real-time results)
  useEffect(() => {
    if (debouncedTerm.length > 2) {
      performSearch(debouncedTerm, true); // preventNavigation = true for real-time
    } else if (debouncedTerm.length === 0) {
      // Clear results when search is empty
      setSearchResults([]);
      setHasSearched(false);
      setShowSuggestions(false);
    }
  }, [debouncedTerm]);

  // Perform search function
  const performSearch = useCallback(async (term: string, preventNavigation = false) => {
    if (!term.trim()) return;
    
    setIsLoadingResults(true);
    setHasSearched(true);
    setShowSuggestions(false);
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
      setSearchResults([]);
    } finally {
      setIsLoadingResults(false);
    }
  }, [navigate]);

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      performSearch(searchTerm, false); // Navigate to search page
      searchInputRef.current?.blur();
    }
  };

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    
    // Reset hasSearched when user starts typing again
    if (hasSearched && value !== searchTerm) {
      setHasSearched(false);
    }
  };

  // Handle suggestion click
  const handleSuggestionClick = (suggestion: any) => {
    setSearchTerm(suggestion.name);
    setShowSuggestions(false);
    performSearch(suggestion.name, false); // Navigate to search page
  };

  // Handle input focus
  const handleInputFocus = () => {
    if (suggestions.length > 0 && !hasSearched) {
      setShowSuggestions(true);
    }
  };

  // Handle input blur (with delay to allow suggestion clicks)
  const handleInputBlur = () => {
    setTimeout(() => {
      setShowSuggestions(false);
    }, 200);
  };

  // Clear search state
  const clearSearch = () => {
    setSearchTerm('');
    setSuggestions([]);
    setSearchResults([]);
    setHasSearched(false);
    setShowSuggestions(false);
    setError(null);
  };

  const style = {
    off_canvas: {
      overflow: 'hidden !important',
      maxHeight: '100vh',
      height: '100vh',
    },
  };
  
  return (
    <div className="offcanvas offcanvas-top" id="searchBox" data-bs-backdrop="static" tabIndex={-1} style={style.off_canvas} aria-labelledby="searchBoxLabel">
      <div className="offcanvas-header border-bottom p-0 py-lg-1">
        <form className="container d-flex align-items-center" onSubmit={handleSubmit}>
          <div className="position-relative w-100">
            <input
              ref={searchInputRef}
              type="search"
              className="form-control form-control-lg fs-lg border-0 rounded-0 py-3 ps-0"
              placeholder="Search for products..."
              value={searchTerm}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              autoComplete="off"
              aria-label="Search products"
            />
            {/* Loading indicator for suggestions */}
            {(isLoadingSuggestions || isLoadingResults) && (
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
        {showSuggestions && suggestions.length > 0 && !hasSearched && (
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
                    {item.price && (
                      <div className="text-primary">
                        {formatCurrency(item.price, 'NGN', { short: true })}
                      </div>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
        
        {/* Search results or loading state */}
        {searchTerm.length > 2 ? (
          isLoadingResults ? (
            <div className="container text-center py-5">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <p className="mt-2">Searching products...</p>
            </div>
          ) : hasSearched && searchResults.length > 0 ? (
            <div className="container">
              <SearchResults results={searchResults} />
            </div>
          ) : hasSearched && searchResults.length === 0 ? (
            <div className="container text-center py-5">
              <div className="text-muted mb-3">
                <i className="ci-search fs-1"></i>
              </div>
              <h6>No products found for "{searchTerm}"</h6>
              <p className="text-muted">Try different search terms or check your spelling</p>
            </div>
          ) : null
        ) : (
          <div className="container text-center py-5">
            <div className="text-muted mb-3">
              <i className="ci-search fs-1"></i>
            </div>
            <h6 className="mb-2">Start your search</h6>
            <p className="text-muted mb-0">
              Type at least 3 characters to see instant search results and suggestions.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

// Updated SearchResults component using ProductSummary
export const SearchResults = ({ results }: SearchResultsProps) => {
  if (results.length === 0) return null;

  return (
    <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4">
      {results.map((product) => (
        <div key={product.id} className="col">
          <ProductSummary product={product} showDetails={true} />
        </div>
      ))}
    </div>
  );
};

export default Search;
