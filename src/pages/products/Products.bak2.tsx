import { useEffect, useState, useCallback } from 'react';
import ProductSummary from "./ProductSummary";
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
            const res = await ProductAxiosService.fetchPage({ page, page_size: 5 }); 
            console.log('API Response:', res); // Log the response
            setProducts(prevProducts => [...prevProducts, ...res.data.products]);
            setPageMeta(res.data.page_meta);
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
                            <div className="d-flex flex-column flex-md-row align-items-md-center gap-3 gap-md-4">
                                <div className="nav align-items-center gap-2 fs-sm">
                                    <a className="nav-link text-body gap-1 p-0" href="shop-catalog-marketplace.html">
                                        <div className="flex-shrink-0 border rounded-circle" style={{ width: "32px" }}>
                                            <div className="ratio ratio-1x1 rounded-circle overflow-hidden">
                                                <img alt="Avatar" src="/assets/img/us/logos/favicon.svg" />
                                            </div>
                                        </div>
                                        Salesnet
                                    </a>
                                    <div className="text-body-secondary">in</div>
                                    <a className="nav-link text-body p-0" href="shop-catalog-marketplace.html">
                                        development
                                    </a>
                                </div>
                                <div className="d-flex justify-content-between flex-grow-1 gap-4">
                                    <span className="badge rounded-pill text-info bg-info-subtle d-inline-flex align-items-center fs-sm">
                                        65 sales
                                    </span>
                                    <div className="d-flex gap-2">
                                        <button className="btn btn-sm btn-info rounded-pill animate-pulse text-info bg-info-subtle" type="button">
                                            <i className="ci-shopping-cart animate-target fs-sm ms-n1 me-1" />
                                            Basket
                                        </button>
                                        <button className="btn btn-sm btn-secondary rounded-pill animate-pulse" type="button">
                                            <i className="ci-heart animate-target fs-sm ms-n1 me-1" />
                                            12
                                        </button>
                                        <a className="btn btn-sm btn-secondary rounded-pill animate-scale" href="#comments">
                                            <i className="ci-message-circle animate-target fs-sm ms-n1 me-1" />
                                            3
                                        </a>
                                        <div className="dropdown">
                                            <button aria-expanded="false" aria-label="Share" className="btn btn-icon btn-sm btn-secondary animate-scale rounded-circle" data-bs-toggle="dropdown" type="button">
                                                <i className="ci-share-2 animate-target fs-sm" />
                                            </button>
                                            <ul className="dropdown-menu dropdown-menu-end" style={{ "--cz-dropdown-min-width": "8.5rem" }}>
                                                <li>
                                                    <a className="dropdown-item" href="#!">
                                                        <i className="ci-facebook fs-base me-2" />
                                                        Facebook
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="#!">
                                                        <i className="ci-instagram fs-base me-2" />
                                                        Instagram
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="#">
                                                        <i className="ci-linkedin fs-base me-2" />
                                                        LinkedIn
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row g-4 pt-4">
                        <div className="d-flex align-items-start justify-content-between border-bottom pb-3 pb-md-4">
                            <div className="d-flex align-items-center">
                                <h2 className="h3 pe-3 me-3 mb-0">African Ankaras</h2>
                                <div className="d-flex align-items-center" data-countdown-date="demoDate">
                                    <Link to="/categories/slug" className="product-card-button btn btn-icon btn-dark animate-slide-end ms-2 border-2">
                                        <i className="ci-arrow-up-right fs-base animate-target" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                        {/* <div className="row g-4 pt-2"> */}
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
                         {/* Loading Wave Placeholders */}
    {loading && (
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
    )}
                        </div>

                       
                </section>
            </main>
        </>
    );
};

export default Products;
