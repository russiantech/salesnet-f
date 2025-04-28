import { useEffect, useState, useCallback } from 'react';
import ProductSummary from "./ProductSummary";
import { ProductAxiosService } from '../../services/net/ProductAxiosService';
import { NotificationService } from "../../services/local/NotificationService";
import { Link } from 'react-router-dom';
import './Products.css'; // Import custom CSS for loading animation
import LoadingCard from '../../components/shared/LoadingCard';

const ProductRecommendations = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        fetchProducts();
    }, [page]);

    const fetchProducts = async () => {
        if (!hasMore) return;

        setLoading(true);
        try {
            const res = await ProductAxiosService.fetchPage({ page, page_size: 5 });
            console.log('API Response:', res); // Log the response
            setProducts(prevProducts => [...prevProducts, ...res.data.products]);
            setHasMore(res.data.page_meta.has_next_page);
        } catch (err) {
            console.error('Failed to fetch products:', err); // Log the error
            NotificationService.showDialogError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleScroll = useCallback(() => {
        const scrollPosition = window.innerHeight + document.documentElement.scrollTop;
        const threshold = document.documentElement.offsetHeight - 200; // Trigger before reaching the bottom
        if (loading || scrollPosition < threshold) return;
        setPage(prevPage => prevPage + 1);
    }, [loading]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    return (
        <>
            <main className="content-wrapper">
                <section className="container pb-2 pb-sm-3 pb-md-4 pb-lg-5 mb-xxl-3">

                    <div className="row g-4 pt-4">
                        <div className="d-flex align-items-start justify-content-between border-bottom pb-3 pb-md-4">
                            <div className="d-flex align-items-center">
                                <h2 className="h3 pe-3 me-3 mb-0">Recommended Products</h2>
                                <div className="d-flex align-items-center" data-countdown-date="demoDate">
                                    <Link to="/products" className="product-card-button btn btn-icon btn-dark animate-slide-end ms-2 border-2">
                                        <i className="ci-arrow-up-right fs-base animate-target" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4 pt-4">
                        {products.map((product) => (
                            <ProductSummary
                                key={product.id}
                                image={product.image_urls.length > 0 ? product.image_urls[0] : ''}
                                name={product.name}
                                slug={product.slug}
                                price={product.price}
                                id={product.id}
                                url={`/products/${product.slug}`}
                            />
                        ))}

                        {/* Loading Wave Placeholders */}
                        {loading && (
                            Array.from({ length: 8 }).map((_, index) => (
                                
                                <LoadingCard key={index} />

                            ))
                        )}
                    </div>
                </section>
            </main>
        </>
    );
};

export default ProductRecommendations;
