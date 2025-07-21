import { useEffect, useState, useCallback } from 'react';
import ProductSummary from "./ProductSummary";
import { ProductAxiosService } from '../../services/net/ProductAxiosService';
import { NotificationService } from "../../services/local/NotificationService";
import { Link } from 'react-router-dom';
import './Products.css'; // Import custom CSS for loading animation

const ProductsByCategory = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        setLoading(true);
        try {
            const res = await ProductAxiosService.fetchCategories();
            setCategories(res.data.categories);
            setHasMore(res.data.categories.length > 0);
        } catch (err) {
            console.error('Failed to fetch categories:', err);
            NotificationService.showDialogError(err.message);
        } finally {
            setLoading(false);
        }
    };

    // const fetchProductsForCategory = async (categoryId, page) => {
    //     try {
    //         const res = await ProductAxiosService.fetchProductsByCategory(categoryId, { page, page_size: 5 });
    //         return res.data.products;
    //     } catch (err) {
    //         console.error('Failed to fetch products for category:', err);
    //         NotificationService.showDialogError(err.message);
    //         return [];
    //     }
    // };

    const handleScroll = useCallback(() => {
        const scrollPosition = window.innerHeight + document.documentElement.scrollTop;
        const threshold = document.documentElement.offsetHeight - 200; // Trigger before reaching the bottom
        if (loading || scrollPosition < threshold) return;

        // Load more products for each category
        setCategories(prevCategories =>
            prevCategories.map(category => ({...category, page: category.page + 1,
            }))
        );
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
                            Products by Category
                        </li>
                    </ol>

                    {categories.map((category) => (
                        <div key={category.id} className="mb-5">
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
                                    Array.from({ length: 4 }).map((_, index) => (
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
                        </div>
                    ))}
                </section>
            </main>
        </>
    );
};

export default ProductsByCategory;
