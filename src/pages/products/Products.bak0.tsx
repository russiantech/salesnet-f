import { useEffect, useState, useCallback } from 'react';
import ProductSummary from "./ProductSummary_0";
import { ProductAxiosService } from '../../services/net/ProductAxiosService';
import { NotificationService } from "../../services/local/NotificationService";
import { Link } from 'react-router-dom';
import './Products.css'; // Import custom CSS for loading animation

const Products = () => {
    const [products, setProducts] = useState([]);
    const [pageMeta, setPageMeta] = useState({});
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
            const res = await ProductAxiosService.fetchPage({ page });
            console.log('API Response:', res);
            setProducts(prevProducts => [...prevProducts, ...res.data.products]);
            setPageMeta(res.data.page_meta);
            setHasMore(res.data.page_meta.has_next_page);
        } catch (err) {
            console.error('Failed to fetch products:', err);
            NotificationService.showDialogError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleScroll = useCallback(() => {
        if (loading || window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
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
                    <ol className="breadcrumb pt-3 mt-2 mt-md-3 mb-md-4">
                        <li className="breadcrumb-item">
                            <a href="/">Home</a>
                        </li>
                        <li className="breadcrumb-item">
                            <a href="/pages">Pages</a>
                        </li>
                        <li aria-current="page" className="breadcrumb-item active">
                            Products
                        </li>
                    </ol>
                    <div className="row">
                        <div className="col-lg-8 col-xl-9">
                            <h1 className="h3 mb-sm-4">
                                A stunning Techa pro mockups for products.
                            </h1>
                            {/* Additional content omitted for brevity */}
                        </div>
                    </div>

                    <div className="row g-4 pt-4">
                        <div className="d-flex align-items-start justify-content-between border-bottom pb-3 pb-md-4">
                            <div className="d-flex align-items-center">
                                <h2 className="h3 pe-3 me-3 mb-0">African Ankaras</h2>
                                <Link to="/categories/slug" className="product-card-button btn btn-icon btn-dark animate-slide-end ms-2 border-2">
                                    <i className="ci-arrow-up-right fs-base animate-target" />
                                </Link>
                            </div>
                        </div>

                        {/* Loading Placeholders */}
                        {loading ? (
                            Array.from({ length: 8 }).map((_, index) => (
                                <div className="col" key={index}>
                                    <div className="product-card placeholder-wave">
                                        <div className="position-relative">
                                            <div className="placeholder-img"></div>
                                        </div>
                                        <div className="w-100 min-w-0 px-1 pb-2 px-sm-3 pb-sm-3">
                                            <div className="placeholder-text"></div>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="placeholder-price"></div>
                                                <div className="placeholder-button"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            products.map((product) => (
                                <ProductSummary
                                    key={product.id}
                                    image={product.image_urls.length > 0 ? product.image_urls[0] : ''}
                                    name={product.name}
                                    slug={product.slug}
                                    price={product.price}
                                    id={product.id}
                                    url={`/products/${product.slug}`}
                                />
                            ))
                        )}

                        {loading && <h2>Loading more products...</h2>}
                    </div>
                </section>
            </main>
        </>
    );
};

export default Products;
