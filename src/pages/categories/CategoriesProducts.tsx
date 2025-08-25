import { useEffect, useState, useCallback } from 'react';
import { ProductAxiosService } from '../../services/net/ProductAxiosService';
import { Link } from 'react-router-dom';
import LoadingCard from '../../components/shared/LoadingCard';
import { NotificationService } from '../../services/local/NotificationService';
import ProductSummary from '../products/ProductSummary_0';

const CategoriesProducts = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loadingMore, setLoadingMore] = useState(false);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [error, setError] = useState(null);

    const fetchCategories = useCallback(async () => {
        if (!hasMore) return;

        try {
            page === 1 ? setLoading(true) : setLoadingMore(true);
            
            const res = await ProductAxiosService.fetchProductsByCategories(page, 12); // Using 12 items per page
            const data = res.data;
            console.log(data);
            
            setCategories(prev => {
                const existingIds = new Set(prev.map(cat => cat.id));
                const filteredCategories = data.categories.filter(cat => !existingIds.has(cat.id));
                return [...prev, ...filteredCategories.map(category => ({
                    id: category.id,
                    name: category.name,
                    slug: category.slug,
                    products: category.products || [],
                    subcategories: category.subcategories || []
                }))];
            });

            setHasMore(data.page_meta?.has_next_page || false);
            setError(null);
        } catch (err) {
            console.error('Failed to fetch categories:', err);
            setError(err.message);
            NotificationService.showDialog(err.message || 'Failed to load categories');
        } finally {
            page === 1 ? setLoading(false) : setLoadingMore(false);
        }
    }, [page, hasMore]);

    useEffect(() => {
        fetchCategories();
    }, [fetchCategories]);

    const handleScroll = useCallback(() => {
        if (loading || loadingMore || !hasMore) return;

        const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
        const threshold = 200; // Load more when 200px from bottom

        if (scrollTop + clientHeight >= scrollHeight - threshold) {
            setPage(prev => prev + 1);
        }
    }, [loading, loadingMore, hasMore]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    if (loading && page === 1 && categories.length === 0) {
        return (
            <main className="content-wrapper">
                <section className="container pb-5">
                    <div className="row">
                        {Array.from({ length: 4 }).map((_, i) => (
                            <div key={`loading-${i}`} className="col-12 mb-5">
                                <div className="d-flex align-items-start justify-content-between border-bottom pb-3">
                                    <div className="placeholder-glow">
                                        <h2 className="h3 placeholder pe-3 me-3 mb-0" style={{ width: '200px' }}></h2>
                                    </div>
                                </div>
                                <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4 pt-4">
                                    {Array.from({ length: 4 }).map((_, j) => (
                                        <div key={`product-loading-${j}`} className="col">
                                            <LoadingCard />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        );
    }

    if (error && categories.length === 0) {
        return (
            <main className="content-wrapper">
                <section className="container py-5 text-center">
                    <h2>Failed to load categories</h2>
                    <p className="text-muted mb-4">{error}</p>
                    <button onClick={() => {
                            setError(null);
                            fetchCategories();
                        }} 
                        className="btn btn-primary"
                    >
                        Retry
                    </button>
                </section>
            </main>
        );
    } 

    
    return (
        <>
            <main className="content-wrapper">
                <section className="container pb-2 pb-sm-3 pb-md-4 pb-lg-5 mb-xxl-3">

                    {categories.map((category, index) => (
                        <div key={category.slug} className="mb-5">
                            <div className="d-flex align-items-start justify-content-between border-bottom pb-3 pb-md-4">
                                <div className="d-flex align-items-center">
                                    <h2 className="h3 pe-3 me-3 mb-0">{category.name}</h2>
                                    <Link to={`/categories/${category.slug}`} className="product-card-button btn btn-icon btn-dark animate-slide-end ms-2 border-2">
                                        <i className="ci-arrow-up-right fs-base animate-target" />
                                    </Link>
                                </div>
                            </div>

                            <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4 pt-4">
                                {category.products.map((product) => (
                                    // <ProductSummary
                                    //     key={product.id}
                                    //     image={product.image_urls.length > 0 ? product.image_urls[0] : ''}
                                    //     name={product.name}
                                    //     slug={product.slug}
                                    //     price={product.price}
                                    //     id={product.id}
                                    //     url={`/products/${product.slug}`}
                                    // />
                                    <ProductSummary
                                    key={product.id}
                                    product={product}
                                    showDetails={true}
                                />
                                
                                ))}

                                {/* Loading State - only shown when loading */}
                                {loading && hasMore && (
                                    Array.from({ length: 4 }).map((_, index) => (
                                    <div key={`loading-${index}`} className="col">
                                        <LoadingCard />
                                    </div>
                                    ))
                                )}
                                
                            </div>
                        </div>
                    ))}

                </section>
            </main>
        </>
    );
};

export default CategoriesProducts;
