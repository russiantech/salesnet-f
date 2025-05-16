import { useEffect, useState, useRef } from 'react';
import ProductSummary from "./ProductSummary_0";
import { ProductAxiosService } from '../../services/net/ProductAxiosService';
import { NotificationService } from "../../services/local/NotificationService";
import { Link } from 'react-router-dom';
import './Products.css';

const ProductsByCategory = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loadingMore, setLoadingMore] = useState(false);
    const observerRef = useRef(null);

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        setLoading(true);
        try {
            const res = await ProductAxiosService.fetchProductsByCategories();
            const categoriesWithProducts = res.data.categories
                .filter(category => category.products.products.length > 0)
                .map(category => ({
                    name: category.name,
                    slug: category.slug,
                    products: category.products.products.slice(0, 4),
                    hasMore: category.products.page_meta.has_next_page
                }));
            setCategories(categoriesWithProducts);
        } catch (err) {
            console.error('Failed to fetch categories:', err);
            NotificationService.showDialogError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const fetchMoreProducts = async (categorySlug, page) => {
        try {
            const res = await ProductAxiosService.fetchProductsByCategory(categorySlug, { page, page_size: 4 });
            return res.data.products;
        } catch (err) {
            console.error('Failed to fetch more products:', err);
            NotificationService.showDialogError(err.message);
            return [];
        }
    };

    const handleLoadMore = async (categorySlug, index) => {
        if (loadingMore) return;
        setLoadingMore(true);
        const nextPage = Math.ceil(categories[index].products.length / 4) + 1;
        const newProducts = await fetchMoreProducts(categorySlug, nextPage);
        setCategories(prevCategories => {
            const updatedCategories = [...prevCategories];
            updatedCategories[index].products = [...updatedCategories[index].products, ...newProducts];
            updatedCategories[index].hasMore = newProducts.length > 0;
            return updatedCategories;
        });
        setLoadingMore(false);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    categories.forEach((category, index) => {
                        if (category.hasMore) {
                            handleLoadMore(category.slug, index);
                        }
                    });
                }
            },
            { threshold: 1.0 }
        );

        if (observerRef.current) {
            observer.observe(observerRef.current);
        }

        return () => {
            if (observerRef.current) {
                observer.unobserve(observerRef.current);
            }
        };
    }, [categories]);

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

                    {loading ? (
                        <div className="text-center">
                            <div className="spinner-border text-primary" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    ) : (
                        categories.map((category, index) => (
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
                                </div>

                                {category.hasMore && (
                                    <div ref={observerRef} className="text-center mt-4">
                                        <div className="spinner-border text-primary" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))
                    )}
                </section>
            </main>
        </>
    );
};

export default ProductsByCategory;
