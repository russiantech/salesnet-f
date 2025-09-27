import { useEffect, useState, useCallback, useRef } from 'react';
import { useSearchParams, useNavigate, Link } from 'react-router-dom';
import { useDebounce } from 'use-debounce';
import { SearchAxiosService } from '../../services/net/SearchAxiosService';
import LoadingSpinner from './LoadingSpinner';
import ProductSummary from '../../pages/products/ProductSummary';
import LoadingCard from './LoadingCard';

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
  has_discount?: boolean;
};

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm] = useDebounce(searchTerm, 300);
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [totalResults, setTotalResults] = useState(0);
  
  const inputRef = useRef<HTMLInputElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadingTriggerRef = useRef<HTMLDivElement>(null);
  const abortControllerRef = useRef<AbortController>();

  // Initialize from URL params
  useEffect(() => {
    const query = searchParams.get('q') || '';
    setSearchTerm(query);
    inputRef.current?.focus();
  }, [searchParams]);

  // Perform search when debounced term changes
  useEffect(() => {
    if (debouncedSearchTerm.trim()) {
      performSearch(debouncedSearchTerm, 1, true);
    } else {
      // Clear results when search term is empty
      setSearchResults([]);
      setHasMore(false);
      setTotalResults(0);
      setPage(1);
    }
  }, [debouncedSearchTerm]);

  // Search execution with abort controller
  const performSearch = useCallback(async (
    query: string, 
    pageNum: number, 
    reset: boolean = false
  ) => {
    if (!query.trim()) return;

    // Cancel previous request
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    abortControllerRef.current = new AbortController();

    const loadingState = reset ? setIsLoading : setIsLoadingMore;
    loadingState(true);
    setError(null);

    try {
      const response = await SearchAxiosService.searchProducts({
        q: query,
        page: pageNum,
        page_size: 12
      });

      if (response?.data?.products) {
        const newResults = response.data.products;
        
        setSearchResults(prev => reset ? newResults : [...prev, ...newResults]);
        setHasMore(newResults.length >= 12);
        setTotalResults(response.data.total || (reset ? newResults.length : prev => prev + newResults.length));
        
        if (!reset) {
          setPage(pageNum);
        }
      } else {
        setHasMore(false);
        if (reset) {
          setSearchResults([]);
          setTotalResults(0);
        }
      }
    } catch (err: any) {
      if (err.name !== 'AbortError') {
        setError('Failed to fetch search results. Please try again.');
        console.error('Search error:', err);
      }
    } finally {
      loadingState(false);
    }
  }, []);

  // Handle search form submission
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedTerm = searchTerm.trim();
    if (trimmedTerm) {
      navigate(`/search?q=${encodeURIComponent(trimmedTerm)}`);
    }
  };

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    
    // Update URL without triggering a full navigation
    const newUrl = value.trim() 
      ? `/search?q=${encodeURIComponent(value)}`
      : '/search';
    window.history.replaceState(null, '', newUrl);
  };

  // Clear search
  const clearSearch = () => {
    setSearchTerm('');
    setSearchResults([]);
    setHasMore(false);
    setTotalResults(0);
    setPage(1);
    navigate('/search', { replace: true });
    inputRef.current?.focus();
  };

  // Load more function
  const loadMore = useCallback(() => {
    if (!isLoadingMore && !isLoading && hasMore && debouncedSearchTerm.trim()) {
      const nextPage = page + 1;
      performSearch(debouncedSearchTerm, nextPage, false);
    }
  }, [isLoadingMore, isLoading, hasMore, page, debouncedSearchTerm, performSearch]);

  // Intersection Observer for infinite scroll
  useEffect(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        if (first.isIntersecting) {
          loadMore();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '100px'
      }
    );

    if (loadingTriggerRef.current && hasMore && !isLoading && !isLoadingMore) {
      observerRef.current.observe(loadingTriggerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [loadMore, hasMore, isLoading, isLoadingMore]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div className="modal fade show" style={{ display: 'block' }}>
      <div className="modal-dialog modal-fullscreen">
        <div className="modal-content">
          
          {/* Header */}
          <div className="modal-header border-0 py-3">
            <div className="container d-flex align-items-center gap-3">
              
              {/* Logo/Brand */}
              <Link to="/" className="navbar-brand me-2">
                <div className="border rounded-circle" style={{ width: '40px' }}>
                  <div className="ratio ratio-1x1 rounded-circle overflow-hidden">
                    <img src="/assets/img/us/logos/favicon.svg" alt="Logo" />
                  </div>
                </div>
              </Link>

              {/* Search Form */}
              <form className="flex-grow-1" onSubmit={handleSearchSubmit}>
                <div className="input-group input-group-lg">
                  <span className="input-group-text border-0 bg-transparent">
                    <i className="ci-search fs-lg text-muted" />
                  </span>
                  <input
                    ref={inputRef}
                    type="search"
                    className="form-control border-0 shadow-none"
                    placeholder="Search for products..."
                    value={searchTerm}
                    onChange={handleInputChange}
                    autoComplete="off"
                  />
                  {searchTerm && (
                    <button
                      type="button"
                      className="btn text-muted"
                      onClick={clearSearch}
                      aria-label="Clear search"
                    >
                      <i className="ci-close fs-lg" />
                    </button>
                  )}
                </div>
              </form>

              {/* Close Button */}
              <button
                className="btn text-muted"
                onClick={() => navigate(-1)}
                aria-label="Close search"
              >
                <i className="ci-close fs-xl" />
              </button>
            </div>
          </div>

          {/* Body */}
          <div className="modal-body p-0">
            <div className="container py-4">
              
              {/* Error State */}
              {error && (
                <div className="alert alert-danger mb-4">
                  <i className="ci-info-circle me-2"></i>
                  {error}
                </div>
              )}

              {/* Loading State (Initial) */}
              {isLoading && searchResults.length === 0 ? (
                <div className="text-center py-5">
                  <LoadingSpinner size="lg" />
                  <p className="mt-3 text-muted">Searching products...</p>
                </div>
              
              /* Results State */
              ) : searchResults.length > 0 ? (
                <>
                  {/* Results Header */}
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <h5 className="mb-0">
                      {totalResults > 0 ? `${totalResults} results` : `${searchResults.length} results`} for "{debouncedSearchTerm}"
                    </h5>
                    {isLoading && (
                      <div className="d-flex align-items-center text-muted">
                        <LoadingSpinner size="sm" />
                        <span className="ms-2 small">Updating...</span>
                      </div>
                    )}
                  </div>

                  {/* Products Grid */}
                  <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4">
                    {searchResults.map((product, index) => (
                      <div key={`${product.id}-${index}`} className="col">
                        <ProductSummary
                          product={product}
                          showDetails={true}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Loading More State */}
                  {isLoadingMore && (
                    <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4 mt-2">
                      {Array.from({ length: 4 }).map((_, index) => (
                        <div key={`loading-${index}`} className="col">
                          <LoadingCard />
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Infinite Scroll Trigger */}
                  {hasMore && !isLoadingMore && (
                    <div 
                      ref={loadingTriggerRef}
                      className="text-center py-4"
                      style={{ minHeight: '100px' }}
                    >
                      <button
                        onClick={loadMore}
                        className="btn btn-outline-primary"
                        disabled={isLoadingMore}
                      >
                        Load More Products
                      </button>
                    </div>
                  )}

                  {/* End of Results */}
                  {!hasMore && searchResults.length > 0 && (
                    <div className="text-center py-4">
                      <p className="text-muted mb-0">
                        <i className="ci-check-circle me-1"></i>
                        You've seen all results
                      </p>
                    </div>
                  )}
                </>
              
              /* No Results State */
              ) : debouncedSearchTerm.trim() ? (
                <div className="text-center py-5">
                  <div className="text-muted mb-3">
                    <i className="ci-search fs-1"></i>
                  </div>
                  <h4 className="mb-3">No results found</h4>
                  <p className="text-muted mb-4">
                    No products found for "<strong>{debouncedSearchTerm}</strong>"
                  </p>
                  <div className="d-flex flex-column align-items-center gap-2">
                    <p className="small text-muted mb-0">Try:</p>
                    <ul className="list-unstyled small text-muted text-center">
                      <li>• Different keywords</li>
                      <li>• More general terms</li>
                      <li>• Checking your spelling</li>
                    </ul>
                  </div>
                </div>
              
              /* Welcome State */
              ) : (
                <div className="text-center py-5">
                  <div className="text-muted mb-3">
                    <i className="ci-search fs-1"></i>
                  </div>
                  <h4 className="mb-3">Search our products</h4>
                  <p className="text-muted">
                    Enter keywords to find products you're looking for
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;