// import { useEffect, useState, useCallback } from 'react';
// import ProductSummary from "./ProductSummary";
// import { ProductAxiosService } from '../../services/net/ProductAxiosService';
// import { NotificationService } from "../../services/local/NotificationService";
// import { Link } from 'react-router-dom';
// import './Products.css'; // Import custom CSS for loading animation
// import LoadingCard from '../../components/shared/LoadingCard';

// const ProductsInCategory = () => {
//     const [products, setProducts] = useState([]);
//     const [pageMeta, setPageMeta] = useState({});
//     const [loading, setLoading] = useState(true);
//     const [page, setPage] = useState(1);
//     const [hasMore, setHasMore] = useState(true);

//     useEffect(() => {
//         fetchProducts();
//     }, [page]);

//     const fetchProducts = async () => {
//         if (!hasMore) return;

//         setLoading(true);
//         try {
//             const res = await ProductAxiosService.fetchPage({ page, page_size: 5 });
//             console.log('API Response:', res); // Log the response
//             setProducts(prevProducts => [...prevProducts, ...res.data.products]);
//             setPageMeta(res.data.page_meta);
//             setHasMore(res.data.page_meta.has_next_page);
//         } catch (err) {
//             console.error('Failed to fetch products:', err); // Log the error
//             NotificationService.showDialog(err.message);
//         } finally {
//             setLoading(false);
//         }
//     };

//     const handleScroll = useCallback(() => {
//         const scrollPosition = window.innerHeight + document.documentElement.scrollTop;
//         const threshold = document.documentElement.offsetHeight - 200; // Trigger before reaching the bottom
//         if (loading || scrollPosition < threshold) return;
//         setPage(prevPage => prevPage + 1);
//     }, [loading]);

//     useEffect(() => {
//         window.addEventListener('scroll', handleScroll);
//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, [handleScroll]);

//     return (
//         <>
//             <main className="content-wrapper">
//                 <section className="container pb-2 pb-sm-3 pb-md-4 pb-lg-5 mb-xxl-3">
//                     <ol className="breadcrumb pt-3 mt-2 mt-md-3 mb-md-4">
//                         <li className="breadcrumb-item">
//                             <a href="/">Home</a>
//                         </li>
//                         <li className="breadcrumb-item">
//                             <a href="/categories">Categories</a>
//                         </li>
//                         <li aria-current="page" className="breadcrumb-item active">
//                             Products
//                         </li>
//                     </ol>
//                     <div className="row">
//                         <div className="col-lg-8 col-xl-9">
//                             <h1 className="h3 mb-sm-4">
//                                 A stunning Techa pro mockups for products.
//                             </h1>
//                             <div className="d-flex flex-column flex-md-row align-items-md-center gap-3 gap-md-4">
//                                 <div className="nav align-items-center gap-2 fs-sm">
//                                     <a className="nav-link text-body gap-1 p-0" href="shop-catalog-marketplace.html">
//                                     <i className="ci-grid-2 fs-xl animate-target" />
//                                         Salesnet
//                                     </a>
//                                     <div className="text-body-secondary">in</div>
//                                     <a className="nav-link text-body p-0" href="shop-catalog-marketplace.html">
//                                         development
//                                     </a>
//                                 </div>
//                                 <div className="d-flex justify-content-between flex-grow-1 gap-4">
//                                     <span className=" rounded-pill text-info bg-info-subtle d-inline-flex align-items-center fs-sm">
//                                         ...
//                                     </span>

//                                     <div className="d-flex gap-2">
//                                         <button className="btn btn-sm btn-info rounded-pill animate-pulse text-info bg-info-subtle" type="button">
//                                             <i className="ci-filter animate-target fs-sm ms-n1 me-1" />
//                                             Filter
//                                         </button>
//                                         <button className="btn btn-sm btn-secondary rounded-pill animate-pulse" type="button">
//                                             <i className="ci-heart animate-target fs-sm ms-n1 me-1" />
//                                             12
//                                         </button>
//                                         {/* <a className="btn btn-sm btn-secondary rounded-pill animate-scale" href="#comments">
//                                             <i className="ci-grid-2 fs-xl animate-target" />
//                                             Sub Categories
//                                         </a> */}
//                                         <div className="dropdown">
//                                         {/* <a className="btn btn-sm btn-secondary rounded-pill animate-scale" href="#comments">
//                                             <i className="ci-grid-2 animate-target" />
//                                             Sub Categories
//                                         </a> */}
//                                         <button aria-expanded="false" aria-label="Share" className="btn btn-sm btn-secondary rounded-pill animate-scale " 
//                                         data-bs-toggle="dropdown" type="button">
//                                                 <i className="ci-grid-2 animate-target fs-sm" />
//                                                 Sub Categories
//                                         </button>

//                                             <ul className="dropdown-menu dropdown-menu-end" style={{ "--cz-dropdown-min-width": "8.5rem" }}>
//                                                 <li>
//                                                     <a className="dropdown-item" href="#!">
//                                                         <i className="ci-facebook fs-base me-2" />
//                                                         Tailoring
//                                                     </a>
//                                                 </li>
//                                                 <li>
//                                                     <a className="dropdown-item" href="#!">
//                                                         <i className="ci-instagram fs-base me-2" />
//                                                         Master-minds
//                                                     </a>
//                                                 </li>
//                                                 <li>
//                                                     <a className="dropdown-item" href="#">
//                                                         <i className="ci-linkedin fs-base me-2" />
//                                                         Rebranding
//                                                     </a>
//                                                 </li>
//                                             </ul>
//                                         </div>

//                                         <div className="dropdown">
//                                             <button aria-expanded="false" aria-label="Share" className="btn btn-icon btn-sm btn-secondary animate-scale rounded-circle" data-bs-toggle="dropdown" type="button">
//                                                 <i className="ci-share-2 animate-target fs-sm" />
//                                             </button>
//                                             <ul className="dropdown-menu dropdown-menu-end" style={{ "--cz-dropdown-min-width": "8.5rem" }}>
//                                                 <li>
//                                                     <a className="dropdown-item" href="#!">
//                                                         <i className="ci-facebook fs-base me-2" />
//                                                         Facebook
//                                                     </a>
//                                                 </li>
//                                                 <li>
//                                                     <a className="dropdown-item" href="#!">
//                                                         <i className="ci-instagram fs-base me-2" />
//                                                         Instagram
//                                                     </a>
//                                                 </li>
//                                                 <li>
//                                                     <a className="dropdown-item" href="#">
//                                                         <i className="ci-linkedin fs-base me-2" />
//                                                         LinkedIn
//                                                     </a>
//                                                 </li>
//                                             </ul>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* <div className="row g-4 pt-4">
//                         <div className="d-flex align-items-start justify-content-between border-bottom pb-3 pb-md-4">
//                             <div className="d-flex align-items-center">
//                                 <h2 className="h3 pe-3 me-3 mb-0">African Ankaras</h2>
//                                 <div className="d-flex align-items-center" data-countdown-date="demoDate">
//                                     <Link to="/categories/slug" className="product-card-button btn btn-icon btn-dark animate-slide-end ms-2 border-2">
//                                         <i className="ci-arrow-up-right fs-base animate-target" />
//                                     </Link>
//                                 </div>
//                             </div>
//                         </div>
//                     </div> */}

//                     {/* <div className="row g-4 pt-2"> */}
//                     <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4 pt-4">
//                         {products.map((product) => (
//                             <ProductSummary
//                                 key={product.id}
//                                 image={product.image_urls.length > 0 ? product.image_urls[0] : ''}
//                                 name={product.name}
//                                 slug={product.slug}
//                                 price={product.price}
//                                 id={product.id}
//                                 url={`/products/${product.slug}`}
//                             />
//                         ))}

//                         {/* Loading Wave Placeholders */}
//                         {loading && (
//                             Array.from({ length: 8 }).map((_, index) => (
                                
//                                 <LoadingCard key={index} />

//                             ))
//                         )}
//                     </div>
//                 </section>
//             </main>
//         </>
//     );
// };

// export default ProductsInCategory;

// 

// import { useEffect, useState, useCallback } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import ProductSummary from "./ProductSummary";
// import { ProductAxiosService } from '../../services/net/ProductAxiosService';
// import { NotificationService } from "../../services/local/NotificationService";
// import LoadingCard from '../../components/shared/LoadingCard';
// import Breadcrumb from '../../components/shared/Breadcrumb';
// import './Products.css';

// const ProductsInCategory = () => {
//     const { categorySlug } = useParams();
//     const [products, setProducts] = useState([]);
//     const [category, setCategory] = useState(null);
//     const [subcategories, setSubcategories] = useState([]);
//     const [pageMeta, setPageMeta] = useState({});
//     const [loading, setLoading] = useState(true);
//     const [loadingMore, setLoadingMore] = useState(false);
//     const [page, setPage] = useState(1);
//     const [hasMore, setHasMore] = useState(true);

//     // Fetch initial category and products
//     useEffect(() => {
//         const fetchCategoryData = async () => {
//             try {
//                 setLoading(true);
                
//                 // Fetch category details
//                 const categoryRes = await ProductAxiosService.getCategoryBySlug(categorySlug);
//                 setCategory(categoryRes.data.category);
//                 setSubcategories(categoryRes.data.children || []);
                
//                 // Fetch products in this category
//                 const productsRes = await ProductAxiosService.getProductsByCategory({
//                     category: categorySlug,
//                     page: 1,
//                     page_size: 12
//                 });
                
//                 setProducts(productsRes.data.products);
//                 setPageMeta(productsRes.data.page_meta);
//                 setHasMore(productsRes.data.page_meta.has_next_page);
//             } catch (err) {
//                 console.error('Failed to fetch category data:', err);
//                 NotificationService.showError('Failed to load category products');
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchCategoryData();
//     }, [categorySlug]);

//     // Fetch more products for infinite scroll
//     const fetchMoreProducts = useCallback(async () => {
//         if (!hasMore || loadingMore) return;

//         try {
//             setLoadingMore(true);
//             const res = await ProductAxiosService.getProductsByCategory({
//                 category: categorySlug,
//                 page: page + 1,
//                 page_size: 12
//             });

//             setProducts(prev => [...prev, ...res.data.products]);
//             setPageMeta(res.data.page_meta);
//             setHasMore(res.data.page_meta.has_next_page);
//             setPage(prev => prev + 1);
//         } catch (err) {
//             console.error('Failed to fetch more products:', err);
//             NotificationService.showError('Failed to load more products');
//         } finally {
//             setLoadingMore(false);
//         }
//     }, [categorySlug, page, hasMore, loadingMore]);

//     // Infinite scroll handler
//     const handleScroll = useCallback(() => {
//         if (window.innerHeight + document.documentElement.scrollTop < 
//             document.documentElement.offsetHeight - 500 || loadingMore) {
//             return;
//         }
//         fetchMoreProducts();
//     }, [fetchMoreProducts, loadingMore]);

//     useEffect(() => {
//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, [handleScroll]);

//     if (loading && products.length === 0) {
//         return (
//             <main className="content-wrapper">
//                 <section className="container py-5">
//                     <div className="row">
//                         {Array.from({ length: 12 }).map((_, i) => (
//                             <div key={i} className="col-6 col-md-4 col-lg-3 mb-4">
//                                 <LoadingCard />
//                             </div>
//                         ))}
//                     </div>
//                 </section>
//             </main>
//         );
//     }

//     if (!category) {
//         return (
//             <main className="content-wrapper">
//                 <section className="container py-5 text-center">
//                     <h2>Category not found</h2>
//                     <Link to="/categories" className="btn btn-primary mt-3">
//                         Browse Categories
//                     </Link>
//                 </section>
//             </main>
//         );
//     }

//     return (
//         <main className="content-wrapper">
//             <section className="container pb-5">
//                 <Breadcrumb 
//                     items={[
//                         { label: 'Home', path: '/' },
//                         { label: 'Categories', path: '/categories' },
//                         { label: category.name, path: `/categories/${categorySlug}` }
//                     ]} 
//                 />

//                 <div className="row">
//                     <div className="col-lg-8 col-xl-9">
//                         <div className="d-flex justify-content-between align-items-center mb-4">
//                             <h1 className="h2 mb-0">{category.name}</h1>
//                             <div className="d-flex gap-2">
//                                 <span className="badge bg-info bg-opacity-10 text-info">
//                                     {pageMeta.total_items_count || 0} products
//                                 </span>
//                             </div>
//                         </div>

//                         {category.description && (
//                             <p className="text-muted mb-4">{category.description}</p>
//                         )}

//                         {/* Subcategories dropdown */}
//                         {subcategories.length > 0 && (
//                             <div className="dropdown mb-4 d-inline-block me-2">
//                                 <button 
//                                     className="btn btn-outline-secondary dropdown-toggle"
//                                     type="button"
//                                     id="subcategoriesDropdown"
//                                     data-bs-toggle="dropdown"
//                                     aria-expanded="false"
//                                 >
//                                     Subcategories
//                                 </button>
//                                 <ul className="dropdown-menu" aria-labelledby="subcategoriesDropdown">
//                                     {subcategories.map(subcat => (
//                                         <li key={subcat.id}>
//                                             <Link 
//                                                 className="dropdown-item" 
//                                                 to={`/categories/${subcat.slug}`}
//                                             >
//                                                 {subcat.name}
//                                             </Link>
//                                         </li>
//                                     ))}
//                                 </ul>
//                             </div>
//                         )}

//                         {/* Sorting/filtering options would go here */}

//                         <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4">
//                             {products.map(product => (
//                                 <div key={product.id} className="col">
//                                     <ProductSummary
//                                         image={product.image_urls?.[0] || ''}
//                                         name={product.name}
//                                         slug={product.slug}
//                                         price={product.price}
//                                         id={product.id}
//                                         url={`/products/${product.slug}`}
//                                     />
//                                 </div>
//                             ))}
//                         </div>

//                         {/* Loading more indicator */}
//                         {loadingMore && (
//                             <div className="text-center my-4">
//                                 <div className="spinner-border text-primary" role="status">
//                                     <span className="visually-hidden">Loading...</span>
//                                 </div>
//                             </div>
//                         )}

//                         {/* End of results */}
//                         {!hasMore && products.length > 0 && (
//                             <div className="text-center text-muted py-4">
//                                 You've reached the end of products in this category
//                             </div>
//                         )}
//                     </div>

//                     {/* Sidebar for filters would go here */}
//                     <div className="col-lg-4 col-xl-3 d-none d-lg-block">
//                         <div className="card border-0 shadow-sm mb-4">
//                             <div className="card-header bg-white">
//                                 <h5 className="mb-0">Filters</h5>
//                             </div>
//                             <div className="card-body">
//                                 {/* Filter components would go here */}
//                                 <p className="text-muted">Filter options coming soon</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </main>
//     );
// };

// export default ProductsInCategory;

// 
// import { useEffect, useState, useCallback } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import ProductSummary from "./ProductSummary";
// import { ProductAxiosService } from '../../services/net/ProductAxiosService';
// import { NotificationService } from "../../services/local/NotificationService";
// import LoadingCard from '../../components/shared/LoadingCard';
// import Breadcrumb from '../../components/shared/Breadcrumb';
// import './Products.css';

// const ProductsInCategory = () => {
//     const { slug } = useParams();
//     const [products, setProducts] = useState([]);
//     const [category, setCategory] = useState(null);
//     const [subcategories, setSubcategories] = useState([]);
//     const [pageMeta, setPageMeta] = useState({});
//     const [loading, setLoading] = useState(true);
//     const [loadingMore, setLoadingMore] = useState(false);
//     const [page, setPage] = useState(1);
//     const [hasMore, setHasMore] = useState(true);

//     // Fetch initial category and products
//     const fetchCategoryData = useCallback(async () => {
//         try {
//             setLoading(true);
            
//             // Fetch category details
//             const categoryRes = await ProductAxiosService.getCategoryBySlug(slug);
//             setCategory(categoryRes.data);
//             setSubcategories(categoryRes.data.children || []);
            
//             // Fetch products in this category
//             const productsRes = await ProductAxiosService.getProductsByCategory({
//                 category: slug,
//                 page: 1,
//                 page_size: 12
//             });
            
//             setProducts(productsRes.data.products);
//             setPageMeta(productsRes.data.page_meta);
//             setHasMore(productsRes.data.page_meta.has_next_page);
//         } catch (err) {
//             console.error('Failed to fetch category data:', err);
//             NotificationService.showError('Failed to load category products');
//         } finally {
//             setLoading(false);
//         }
//     }, [slug]);

//     useEffect(() => {
//         fetchCategoryData();
//     }, [fetchCategoryData]);

//     // Fetch more products for infinite scroll
//     const fetchMoreProducts = useCallback(async () => {
//         if (!hasMore || loadingMore) return;

//         try {
//             setLoadingMore(true);
//             const res = await ProductAxiosService.byCategorySlug({
//                 slug: slug,
//                 page: page + 1,
//                 page_size: 12
//             });

//             setProducts(prev => [...prev, ...res.data.products]);
//             setPageMeta(res.data.page_meta);
//             setHasMore(res.data.page_meta.has_next_page);
//             setPage(prev => prev + 1);
//         } catch (err) {
//             console.error('Failed to fetch more products:', err);
//             NotificationService.showError('Failed to load more products');
//         } finally {
//             setLoadingMore(false);
//         }
//     }, [slug, page, hasMore, loadingMore]);

//     // Infinite scroll handler
//     const handleScroll = useCallback(() => {
//         if (window.innerHeight + document.documentElement.scrollTop < 
//             document.documentElement.offsetHeight - 500 || loadingMore) {
//             return;
//         }
//         fetchMoreProducts();
//     }, [fetchMoreProducts, loadingMore]);

//     useEffect(() => {
//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, [handleScroll]);

//     if (loading && products.length === 0) {
//         return (
//             <main className="content-wrapper">
//                 <section className="container py-5">
//                     <div className="row">
//                         {Array.from({ length: 12 }).map((_, i) => (
//                             <div key={i} className="col-6 col-md-4 col-lg-3 mb-4">
//                                 <LoadingCard />
//                             </div>
//                         ))}
//                     </div>
//                 </section>
//             </main>
//         );
//     }

//     if (!category) {
//         return (
//             <main className="content-wrapper">
//                 <section className="container py-5 text-center">
//                     <h2>Category not found</h2>
//                     <Link to="/categories" className="btn btn-primary mt-3">
//                         Browse Categories
//                     </Link>
//                 </section>
//             </main>
//         );
//     }

//     return (
//         <main className="content-wrapper">
//             <section className="container pb-5">
//                 <Breadcrumb 
//                     items={[
//                         { label: 'Home', path: '/' },
//                         { label: 'Categories', path: '/categories' },
//                         { label: category.name, path: `/categories/${slug}` }
//                     ]} 
//                 />

//                 <div className="row">
//                     <div className="col-lg-9">
//                         <div className="d-flex justify-content-between align-items-center mb-4">
//                             <h1 className="h2 mb-0">{category.name}</h1>
//                             <div className="d-flex gap-2">
//                                 <span className="badge bg-info bg-opacity-10 text-info">
//                                     {pageMeta.total_items_count || 0} products
//                                 </span>
//                             </div>
//                         </div>

//                         {category.description && (
//                             <p className="text-muted mb-4">{category.description}</p>
//                         )}

//                         {subcategories.length > 0 && (
//                             <div className="mb-4">
//                                 <h3 className="h5 mb-3">Subcategories</h3>
//                                 <div className="d-flex flex-wrap gap-2">
//                                     {subcategories.map(subcat => (
//                                         <Link
//                                             key={subcat.id}
//                                             to={`/categories/${subcat.slug}`}
//                                             className="btn btn-outline-secondary btn-sm"
//                                         >
//                                             {subcat.name}
//                                         </Link>
//                                     ))}
//                                 </div>
//                             </div>
//                         )}

//                         <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4">
//                             {products.map(product => (
//                                 <div key={product.id} className="col">
//                                     <ProductSummary
//                                         image={product.image_urls?.[0] || ''}
//                                         name={product.name}
//                                         slug={product.slug}
//                                         price={product.price}
//                                         id={product.id}
//                                         url={`/products/${product.slug}`}
//                                     />
//                                 </div>
//                             ))}
//                         </div>

//                         {loadingMore && (
//                             <div className="text-center my-4">
//                                 <div className="spinner-border text-primary" role="status">
//                                     <span className="visually-hidden">Loading...</span>
//                                 </div>
//                             </div>
//                         )}

//                         {!hasMore && products.length > 0 && (
//                             <div className="text-center text-muted py-4">
//                                 You've reached the end of products in this category
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             </section>
//         </main>
//     );
// };

// export default ProductsInCategory;

// 
// import { useEffect, useState, useCallback } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import ProductSummary from './ProductSummary';
// import { ProductAxiosService } from '../../services/net/ProductAxiosService';
// import { NotificationService } from '../../services/local/NotificationService';
// import LoadingCard from '../../components/shared/LoadingCard';
// import Breadcrumb from '../../components/shared/Breadcrumb';
// import './Products.css';

// const ProductsInCategory = () => {
//   const { slug } = useParams<{ slug: string }>();

//   const [products, setProducts] = useState<any[]>([]);
//   const [category, setCategory] = useState<any | null>(null);
//   const [subcategories, setSubcategories] = useState<any[]>([]);
//   const [pageMeta, setPageMeta] = useState<any>({});
//   const [loading, setLoading] = useState(true);
//   const [loadingMore, setLoadingMore] = useState(false);
//   const [page, setPage] = useState(1);
//   const [hasMore, setHasMore] = useState(true);

//   // Extract category info from first product
//   const extractCategoryInfo = (productsData: any[]) => {
//     if (productsData.length && productsData[0].categories) {
//       const mainCategory = productsData[0].categories.find((cat: any) => cat.slug === slug);
//       if (mainCategory) {
//         setCategory(mainCategory);

//         const allCategories = productsData.flatMap((p: any) => p.categories);
//         const uniqueSubcategories = allCategories
//           .filter((cat: any) => cat.slug !== slug)
//           .filter((cat: any, i: number, self: any[]) => i === self.findIndex((c: any) => c.id === cat.id));

//         setSubcategories(uniqueSubcategories);
//       }
//     }
//   };

//   // Fetch products in this category
//   const fetchProducts = useCallback(async (pageNum = 1) => {
//     try {
//       pageNum === 1 ? setLoading(true) : setLoadingMore(true);

//       const res = await ProductAxiosService.byCategorySlug({
//         slug: slug,
//         page: pageNum,
//         page_size: 12
//     });
    
//     console.log('Request params:', {
//         slug: typeof categorySlug, // Should be "string"
//         slugValue: categorySlug,   // Should be your actual slug
//         page: pageNum,
//         page_size: 12
//     });

//       if (pageNum === 1) {
//         setProducts(res.data.products);
//         extractCategoryInfo(res.data.products);
//       } else {
//         setProducts(prev => [...prev, ...res.data.products]);
//       }

//       setPageMeta(res.data.page_meta);
//       setHasMore(res.data.page_meta.has_next_page);
//     } catch (err) {
//       console.error('Failed to fetch products:', err);
//       NotificationService.showDialog('Failed to load products');
//     } finally {
//       pageNum === 1 ? setLoading(false) : setLoadingMore(false);
//     }
//   }, [slug]);

//   useEffect(() => {
//     fetchProducts();
//   }, [fetchProducts]);

//   const fetchMoreProducts = useCallback(async () => {
//     if (!hasMore || loadingMore) return;
//     await fetchProducts(page + 1);
//     setPage(prev => prev + 1);
//   }, [fetchProducts, page, hasMore, loadingMore]);

//   const handleScroll = useCallback(() => {
//     const nearBottom = window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 500;
//     if (nearBottom && !loadingMore) {
//       fetchMoreProducts();
//     }
//   }, [fetchMoreProducts, loadingMore]);

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [handleScroll]);

//   if (loading && products.length === 0) {
//     return (
//       <main className="content-wrapper">
//         <section className="container py-5">
//           <Breadcrumb
//             items={[
//               { label: 'Home', path: '/' },
//               { label: 'Categories', path: '/categories' },
//               { label: 'Loading...', path: '#' },
//             ]}
//           />
//           <div className="row">
//             {Array.from({ length: 12 }).map((_, i) => (
//               <div key={i} className="col-6 col-md-4 col-lg-3 mb-4">
//                 <LoadingCard />
//               </div>
//             ))}
//           </div>
//         </section>
//       </main>
//     );
//   }

//   if (!category && !loading) {
//     return (
//       <main className="content-wrapper">
//         <section className="container py-5 text-center">
//           <h2>Category not found</h2>
//           <Link to="/categories" className="btn btn-primary mt-3">
//             Browse Categories
//           </Link>
//         </section>
//       </main>
//     );
//   }

//   return (
//     <main className="content-wrapper">
//       <section className="container pb-5">
//         <Breadcrumb
//           items={[
//             { label: 'Home', path: '/' },
//             { label: 'Categories', path: '/categories' },
//             { label: category?.name || 'Category', path: `/categories/${slug}` },
//           ]}
//         />

//         <div className="row">
//           <div className="col-lg-9">
//             <div className="d-flex justify-content-between align-items-center mb-4">
//               <h1 className="h2 mb-0">{category?.name || 'Category'}</h1>
//               {pageMeta.total_items_count && (
//                 <span className="badge bg-info bg-opacity-10 text-info">
//                   {pageMeta.total_items_count} products
//                 </span>
//               )}
//             </div>

//             {subcategories.length > 0 && (
//               <div className="mb-4">
//                 <h3 className="h5 mb-3">Subcategories</h3>
//                 <div className="d-flex flex-wrap gap-2">
//                   {subcategories.map(subcat => (
//                     <Link
//                       key={subcat.id}
//                       to={`/categories/${subcat.slug}`}
//                       className="btn btn-outline-secondary btn-sm"
//                     >
//                       {subcat.name}
//                     </Link>
//                   ))}
//                 </div>
//               </div>
//             )}

//             <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4">
//               {products.map(product => (
//                 <div key={product.id} className="col">
//                   <ProductSummary
//                     image={product.image_urls?.[0] || ''}
//                     name={product.name}
//                     slug={product.slug}
//                     price={product.price}
//                     id={product.id}
//                     url={`/products/${product.slug}`}
//                   />
//                 </div>
//               ))}
//             </div>

//             {loadingMore && (
//               <div className="text-center my-4">
//                 <div className="spinner-border text-primary" role="status">
//                   <span className="visually-hidden">Loading...</span>
//                 </div>
//               </div>
//             )}

//             {!hasMore && products.length > 0 && (
//               <div className="text-center text-muted py-4">
//                 You've reached the end of products in this category
//               </div>
//             )}

//             {products.length === 0 && !loading && (
//               <div className="text-center py-5">
//                 <h4>No products found in this category</h4>
//                 <Link to="/categories" className="btn btn-outline-primary mt-3">
//                   Browse Other Categories
//                 </Link>
//               </div>
//             )}
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default ProductsInCategory;

// 
import { useEffect, useState, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import ProductSummary from "./ProductSummary";
import { ProductAxiosService } from '../../services/net/ProductAxiosService';
import { NotificationService } from "../../services/local/NotificationService";
import LoadingCard from '../../components/shared/LoadingCard';
import Breadcrumb from '../../components/shared/Breadcrumb';
import './Products.css';
import SocialShare from '../../components/shared/SocialShare';

interface Category {
  id: number;
  name: string;
  slug: string;
  description?: string;
}

interface Product {
  id: number;
  name: string;
  slug: string;
  price: number;
  image_urls: string[];
  categories: Category[];
}

interface PageMeta {
  current_page_number: number;
  has_next_page: boolean;
  has_prev_page: boolean;
  total_items_count: number;
  total_pages_count: number;
}

const ProductsInCategory = () => {
  const { slug } = useParams<{ slug: string }>();
  const [products, setProducts] = useState<Product[]>([]);
  const [category, setCategory] = useState<Category | null>(null);
  const [subcategories, setSubcategories] = useState<Category[]>([]);
  const [pageMeta, setPageMeta] = useState<PageMeta>({
    current_page_number: 1,
    has_next_page: false,
    has_prev_page: false,
    total_items_count: 0,
    total_pages_count: 0
  });
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);

  // Extract category info from products
  const extractCategoryData = useCallback((products: Product[]) => {
    // if (products.length === 0) return;
    
    // Always set loading to false even if no products
    if (products.length === 0) {
        setCategory(null); // Explicitly set category to null
        return;
    }

    // Find main category
    // console.log('response product data', products);
    const mainCategory = products[0].categories.find(c => c.slug === slug);
    if (mainCategory) {
      setCategory(mainCategory);
    }
    
    // Get unique subcategories
    const allCategories = products.flatMap(p => p.categories);
    const uniqueSubcategories = allCategories
      .filter(c => c.slug !== slug)
      .filter((cat, index, self) => 
        index === self.findIndex(c => c.id === cat.id)
      );
    setSubcategories(uniqueSubcategories);
  }, [slug]);

  // Fetch products with proper error handling
  const fetchProducts = useCallback(async (pageNumber = 1) => {
    try {
      if (!slug) {
        throw new Error('Category slug is missing');
      }
   
      pageNumber === 1 ? setLoading(true) : setLoadingMore(true);

      const response = await ProductAxiosService.getProductsByCategorySlug(
        slug,
        pageNumber,
        12
      );

      if (pageNumber === 1) {
        setProducts(response.data.products);
        extractCategoryData(response.data.products);
      } else {
        setProducts(prev => [...prev, ...response.data.products]);
      }

      setPageMeta(response.data.page_meta);
    } catch (error) {
      console.error('Error fetching products by category:', error);
      NotificationService.showDialog(
        error.response?.data?.error || 'Failed to load products by categories.'
      );
    } finally {
      pageNumber === 1 ? setLoading(false) : setLoadingMore(false);
    }
  }, [slug, extractCategoryData]);

  // Initial load
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  // Infinite scroll handler
  const handleScroll = useCallback(() => {
    if (
      loadingMore ||
      !pageMeta.has_next_page ||
      window.innerHeight + document.documentElement.scrollTop < 
      document.documentElement.offsetHeight - 500
    ) {
      return;
    }
    fetchProducts(pageMeta.current_page_number + 1);
  }, [loadingMore, pageMeta, fetchProducts]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  if (loading && products.length === 0) {
    return (
      <main className="content-wrapper">
        <section className="container py-5">
          <Breadcrumb 
            items={[
              { label: 'Home', path: '/' },
              { label: 'Categories', path: '/categories' },
              { label: 'Loading...', path: '#' }
            ]} 
          />
          <div className="row">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="col-6 col-md-4 col-lg-3 mb-4">
                <LoadingCard />
              </div>
            ))}
          </div>
        </section>
      </main>
    );
  }

if (!category && !loading && products.length === 0) {
    return (
      <main className="content-wrapper">
        <section className="container py-5 text-center">
          <h2>Category not found</h2>
          <Link to="/categories" className="btn btn-primary mt-3">
            Browse Categories
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="content-wrapper">
      <section className="container pb-5">
        
        {/* <div className="row">
            <div className="col-lg-8 col-xl-9">
                <h1 className="h3 mb-sm-4">
                    A stunning Techa pro mockups for products.
                </h1>
                <div className="d-flex flex-column flex-md-row align-items-md-center gap-3 gap-md-4">
                    <div className="nav align-items-center gap-2 fs-sm">
                        <a className="nav-link text-body gap-1 p-0" href="shop-catalog-marketplace.html">
                        <i className="ci-grid-2 fs-xl animate-target" />
                            Salesnet
                        </a>
                        <div className="text-body-secondary">in</div>
                        <a className="nav-link text-body p-0" href="shop-catalog-marketplace.html">
                            development
                        </a>
                    </div>

                    <div className="d-flex justify-content-between flex-grow-1 gap-4">
                        <span className=" rounded-pill text-info bg-info-subtle d-inline-flex align-items-center fs-sm">
                            ...
                        </span>

                        <div className="d-flex gap-2">
                            <button className="btn btn-sm btn-info rounded-pill animate-pulse text-info bg-info-subtle" type="button">
                                <i className="ci-filter animate-target fs-sm ms-n1 me-1" />
                                Filter
                            </button>
                            <button className="btn btn-sm btn-secondary rounded-pill animate-pulse" type="button">
                                <i className="ci-heart animate-target fs-sm ms-n1 me-1" />
                                12
                            </button>
                            <div className="dropdown">
                            <button aria-expanded="false" aria-label="Share" className="btn btn-sm btn-secondary rounded-pill animate-scale " 
                            data-bs-toggle="dropdown" type="button">
                                    <i className="ci-grid-2 animate-target fs-sm" />
                                    Sub Categories
                            </button>

                                <ul className="dropdown-menu dropdown-menu-end" style={{ "--cz-dropdown-min-width": "8.5rem" }}>
                                    <li>
                                        <a className="dropdown-item" href="#!">
                                            <i className="ci-facebook fs-base me-2" />
                                            Tailoring
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#!">
                                            <i className="ci-instagram fs-base me-2" />
                                            Master-minds
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            <i className="ci-linkedin fs-base me-2" />
                                            Rebranding
                                        </a>
                                    </li>
                                </ul>
                            </div>

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
        </div> */}
        
        <Breadcrumb 
          items={[
            { label: 'Home', path: '/' },
            { label: 'Categories', path: '/categories' },
            { label: category?.name || slug, path: `/categories/${slug}` }
          ]} 
        />

        <div className="row">
          <div className="col-lg-12">

            <div className="d-flex justify-content-between align-items-center mb-4">
            <h1 className="h2 mb-0">{category?.name || 'Category'}</h1>

                <div className="d-flex gap-2">
                {pageMeta.total_items_count > 0 && (
                    <button className="btn btn-sm btn-info rounded-pill animate-pulse text-info bg-info-subtle" type="button">
                        <i className="ci-filter animate-target fs-sm ms-n1 me-1" />
                        Filter | {pageMeta.total_items_count} items
                    </button>
                    
                    )}
                    <button className="btn btn-sm btn-secondary rounded-pill animate-pulse" type="button">
                        <i className="ci-heart animate-target fs-sm ms-n1 me-1" />
                        12
                    </button>

                    {/* <div className="dropdown">
                        <button aria-expanded="false" aria-label="Share" className="btn btn-icon btn-sm btn-secondary animate-scale rounded-circle" data-bs-toggle="dropdown" type="button">
                            <i className="ci-share-2 animate-target fs-sm" />
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end" style={{ "--cz-dropdown-min-width": "8.5rem" }}>
                            <li>
                                <button className="dropdown-item" onClick={() => handleSocialShare('facebook')}>
                                <i className="ci-facebook fs-base me-2 text-info" />
                                Facebook
                                </button>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#!" onClick={() => handleSocialShare('instagram')}>
                                    <i className="ci-instagram fs-base me-2 text-primary" />
                                    Instagram
                                </a>
                                </li>

                            <li>
                                <button className="dropdown-item" onClick={() => handleSocialShare('twitter')}>
                                <i className="ci-twitter fs-base me-2" />
                                Twitter
                                </button>
                            </li>
                            <li>
                                <button className="dropdown-item" onClick={() => handleSocialShare('linkedin')}>
                                <i className="ci-linkedin fs-base me-2 text-info" />
                                LinkedIn
                                </button>
                            </li>
                            <li>
                                <button className="dropdown-item" onClick={() => handleSocialShare('copy')}>
                                <i className="ci-copy fs-base me-2" />
                                Copy Link
                                </button>
                            </li>
                          </ul>
                          
                        {/* <ul className="dropdown-menu dropdown-menu-end" style={{ "--cz-dropdown-min-width": "8.5rem" }}>
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
                        </ul> *
                    </div> */}
                    <SocialShare 
                      url={window.location.href}  // Full current page URL
                      title={category?.name}
                      description={category?.description || `Quality products in ${category?.name} Salesnet.`}
                    />
                    
                </div>

            </div>

            {category?.description && (
              <p className="text-muted mb-4">{category.description}</p>
            )}

            {subcategories.length > 0 && (
              <div className="mb-4">
                {/* <h3 className="h5 mb-3">Subcategories</h3> */}
                <div className="d-flex flex-wrap gap-2">
                  {subcategories.map(subcat => (
                    <Link
                      key={subcat.id}
                      to={`/categories/${subcat.slug}`}
                      className="btn btn-outline-secondary btn-sm rounded-pill"
                    >
                      {subcat.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4">
              {products.map(product => (
                <div key={product.id} className="col">
                  {/* <ProductSummary
                    image={product.image_urls?.[0]}
                    name={product.name}
                    slug={product.slug}
                    price={product.price}
                    id={product.id}
                    url={`/products/${product.slug}`}
                  /> */}
                  <ProductSummary
                      key={product.id}
                      product={product}
                      showDetails={true}
                  />

                </div>
              ))}
            </div>

            {loadingMore && (
              <div className="text-center my-4">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            )}

            {!pageMeta.has_next_page && products.length > 0 && (
              <div className="text-center text-muted py-4">
                You've reached the end of products
              </div>
            )}

            {products.length === 0 && !loading && (
              <div className="text-center py-5">
                <h4>No products found in this category</h4>
                <Link to="/categories" className="btn btn-outline-primary mt-3">
                  Browse Other Categories
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
    
    
    
      // <main className="content-wrapper">
      //   <section className="container pb-5">

      //     {/* New Header Section */}
      //     <div className="row">
      //     <Breadcrumb 
      //     items={[
      //       { label: 'Home', path: '/' },
      //       { label: 'Categories', path: '/categories' },
      //       { label: category?.name || slug, path: `/categories/${slug}` }
      //     ]} 
      //   />

      //       <div className="col-lg-8 col-xl-9">
      //         <h1 className="h3 mb-sm-4">
      //           {category?.name || 'Category Products'}
      //         </h1>
      //         <div className="d-flex flex-column flex-md-row align-items-md-center gap-3 gap-md-4">
                
      //           {/* <div className="nav align-items-center gap-2 fs-sm">
      //             <Link className="nav-link text-body gap-1 p-0" to="/">
      //               <i className="ci-grid-2 fs-xl animate-target" />
      //               Home
      //             </Link>
      //             <div className="text-body-secondary">in</div>
      //             <Link className="nav-link text-body p-0" to="/categories">
      //               Categories
      //             </Link>
      //           </div> */}
                

      //           <div className="d-flex justify-content-between flex-grow-1 gap-4">
      //             {pageMeta.total_items_count > 0 && (
      //               <span className="rounded-pill text-info bg-info-subtle d-inline-flex align-items-center fs-sm">
      //                 {pageMeta.total_items_count} products
      //               </span>
      //             )}
    
      //             <div className="d-flex gap-2">
      //               <button className="btn btn-sm btn-info rounded-pill animate-pulse text-info bg-info-subtle" type="button">
      //                 <i className="ci-filter animate-target fs-sm ms-n1 me-1" />
      //                 Filter
      //               </button>
                    
      //               {subcategories.length > 0 && (
      //                 <div className="dropdown">
      //                   <button 
      //                     aria-expanded="false" 
      //                     aria-label="Subcategories" 
      //                     className="btn btn-sm btn-secondary rounded-pill animate-scale" 
      //                     data-bs-toggle="dropdown" 
      //                     type="button"
      //                   >
      //                     <i className="ci-grid-2 animate-target fs-sm" />
      //                     Sub Categories
      //                   </button>
      //                   <ul className="dropdown-menu dropdown-menu-end" style={{ "--cz-dropdown-min-width": "8.5rem" }}>
      //                     {subcategories.map(subcat => (
      //                       <li key={subcat.id}>
      //                         <Link 
      //                           className="dropdown-item" 
      //                           to={`/categories/${subcat.slug}`}
      //                         >
      //                           {subcat.name}
      //                         </Link>
      //                       </li>
      //                     ))}
      //                   </ul>
      //                 </div>
      //               )}
    
      //               <div className="dropdown">
      //                 <button 
      //                   aria-expanded="false" 
      //                   aria-label="Share" 
      //                   className="btn btn-icon btn-sm btn-secondary animate-scale rounded-circle" 
      //                   data-bs-toggle="dropdown" 
      //                   type="button"
      //                 >
      //                   <i className="ci-share-2 animate-target fs-sm" />
      //                 </button>
      //                 <ul className="dropdown-menu dropdown-menu-end" style={{ "--cz-dropdown-min-width": "8.5rem" }}>
      //                   <li>
      //                     <a className="dropdown-item" href="#!">
      //                       <i className="ci-facebook fs-base me-2" />
      //                       Facebook
      //                     </a>
      //                   </li>
      //                   <li>
      //                     <a className="dropdown-item" href="#!">
      //                       <i className="ci-instagram fs-base me-2" />
      //                       Instagram
      //                     </a>
      //                   </li>
      //                   <li>
      //                     <a className="dropdown-item" href="#">
      //                       <i className="ci-linkedin fs-base me-2" />
      //                       LinkedIn
      //                     </a>
      //                   </li>
      //                 </ul>
      //               </div>
      //             </div>
      //           </div>

      //         </div>
      //       </div>
      //     </div>
    
      //     {/* Products Grid (keep your existing products grid) */}
      //     <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4">
      //       {products.map(product => (
      //         <div key={product.id} className="col">
      //           <ProductSummary
      //             image={product.image_urls?.[0] || ''}
      //             name={product.name}
      //             slug={product.slug}
      //             price={product.price}
      //             id={product.id}
      //             url={`/products/${product.slug}`}
      //           />
      //         </div>
      //       ))}
      //     </div>
    
      //     {/* Keep your existing loading and pagination indicators */}
      //     {loadingMore && (
      //       <div className="text-center my-4">
      //         <div className="spinner-border text-primary" role="status">
      //           <span className="visually-hidden">Loading...</span>
      //         </div>
      //       </div>
      //     )}
    
      //     {!pageMeta.has_next_page && products.length > 0 && (
      //       <div className="text-center text-muted py-4">
      //         You've reached the end of products
      //       </div>
      //     )}
    
      //     {products.length === 0 && !loading && (
      //       <div className="text-center py-5">
      //         <h4>No products found in this category</h4>
      //         <Link to="/categories" className="btn btn-outline-primary mt-3">
      //           Browse Other Categories
      //         </Link>
      //       </div>
      //     )}
      //   </section>
      // </main>
  );
};

export default ProductsInCategory;

// import { useEffect, useState, useCallback } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import ProductSummary from "./ProductSummary";
// import { ProductAxiosService } from '../../services/net/ProductAxiosService';
// import { NotificationService } from "../../services/local/NotificationService";
// import LoadingCard from '../../components/shared/LoadingCard';
// import Breadcrumb from '../../components/shared/Breadcrumb';
// import './Products.css';

// interface Category {
//   id: number;
//   name: string;
//   slug: string;
//   description?: string;
// }

// interface Product {
//   id: number;
//   name: string;
//   slug: string;
//   price: number;
//   image_urls: string[];
//   categories: Category[];
// }

// interface PageMeta {
//   current_page_number: number;
//   has_next_page: boolean;
//   has_prev_page: boolean;
//   total_items_count: number;
//   total_pages_count: number;
// }

// const ProductsInCategory = () => {
//   const { slug } = useParams<{ slug: string }>();
//   const [products, setProducts] = useState<Product[]>([]);
//   const [category, setCategory] = useState<Category | null>(null);
//   const [subcategories, setSubcategories] = useState<Category[]>([]);
//   const [pageMeta, setPageMeta] = useState<PageMeta>({
//     current_page_number: 1,
//     has_next_page: false,
//     has_prev_page: false,
//     total_items_count: 0,
//     total_pages_count: 0
//   });
//   const [loading, setLoading] = useState(true);
//   const [loadingMore, setLoadingMore] = useState(false);

//   // Extract category info from products
//   const extractCategoryData = useCallback((products: Product[]) => {

//     // Always set loading to false even if no products
//       if (products.length === 0) {
//         setCategory(null); // Explicitly set category to null
//         return;
//       }

//     // Find main category
//     const mainCategory = products[0].categories.find(c => c.slug === slug);
//     if (mainCategory) {
//       setCategory(mainCategory);
//     }

//     // Get unique subcategories
//     const allCategories = products.flatMap(p => p.categories);
//     const uniqueSubcategories = allCategories
//       .filter(c => c.slug !== slug)
//       .filter((cat, index, self) => 
//         index === self.findIndex(c => c.id === cat.id)
//       );
//     setSubcategories(uniqueSubcategories);
//   }, [slug]);

//   // Fetch products with proper error handling
//   const fetchProducts = useCallback(async (pageNumber = 1) => {
//     try {
//       if (!slug) {
//         throw new Error('Category slug is missing');
//       }
   
//       pageNumber === 1 ? setLoading(true) : setLoadingMore(true);

//       const response = await ProductAxiosService.getProductsByCategorySlug(
//         slug,
//         pageNumber,
//         12
//       );
//       console.log('products by categories', products);

//       if (pageNumber === 1) {
//         setProducts(response.data.products);
//         extractCategoryData(response.data.products);
//       } else {
//         setProducts(prev => [...prev, ...response.data.products]);
//       }

//       setPageMeta(response.data.page_meta);
//     } catch (error) {
//       console.error('Error fetching products by category:', error);
//       NotificationService.showDialog(
//         error.response?.data?.error || 'Failed to load products by categories.'
//       );
//     } finally {
//       pageNumber === 1 ? setLoading(false) : setLoadingMore(false);
//     }
//   }, [slug, extractCategoryData]);

//   // Initial load
//   useEffect(() => {
//     fetchProducts();
//   }, [fetchProducts]);

//   // Infinite scroll handler
//   const handleScroll = useCallback(() => {
//     if (
//       loadingMore ||
//       !pageMeta.has_next_page ||
//       window.innerHeight + document.documentElement.scrollTop < 
//       document.documentElement.offsetHeight - 500
//     ) {
//       return;
//     }
//     fetchProducts(pageMeta.current_page_number + 1);
//   }, [loadingMore, pageMeta, fetchProducts]);

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [handleScroll]);

//   console.log('with-category', category, loading)

//   if (loading && products.length === 0) {
//     return (
//       <main className="content-wrapper">
//         <section className="container py-5">
//           <Breadcrumb 
//             items={[
//               { label: 'Home', path: '/' },
//               { label: 'Categories', path: '/categories' },
//               { label: 'Loading...', path: '#' }
//             ]} 
//           />
//           <div className="row">
//             {Array.from({ length: 12 }).map((_, i) => (
//               <div key={i} className="col-6 col-md-4 col-lg-3 mb-4">
//                 <LoadingCard />
//               </div>
//             ))}
//           </div>
//         </section>
//       </main>
//     );
//   }

// //   if (!category && !loading) {
// //     console.log('!category', category, loading)
// //     return (
// //       <main className="content-wrapper">
// //         <section className="container py-5 text-center">
// //           <h2>Category not found</h2>
// //           <Link to="/categories" className="btn btn-primary mt-3">
// //             Browse Categories
// //           </Link>
// //         </section>
// //       </main>
// //     );
// //   }

//   return (
//     <main className="content-wrapper">
//       <section className="container pb-5">
//         {/* <div className="row">
//             <div className="col-lg-8 col-xl-9">
//                 <h1 className="h3 mb-sm-4">
//                     A stunning Techa pro mockups for products.
//                 </h1>
//                 <div className="d-flex flex-column flex-md-row align-items-md-center gap-3 gap-md-4">
//                     <div className="nav align-items-center gap-2 fs-sm">
//                         <a className="nav-link text-body gap-1 p-0" href="shop-catalog-marketplace.html">
//                         <i className="ci-grid-2 fs-xl animate-target" />
//                             Salesnet
//                         </a>
//                         <div className="text-body-secondary">in</div>
//                         <a className="nav-link text-body p-0" href="shop-catalog-marketplace.html">
//                             development
//                         </a>
//                     </div>
//                     <div className="d-flex justify-content-between flex-grow-1 gap-4">
//                         <span className=" rounded-pill text-info bg-info-subtle d-inline-flex align-items-center fs-sm">
//                             ...
//                         </span>

//                         <div className="d-flex gap-2">
//                             <button className="btn btn-sm btn-info rounded-pill animate-pulse text-info bg-info-subtle" type="button">
//                                 <i className="ci-filter animate-target fs-sm ms-n1 me-1" />
//                                 Filter
//                             </button>
//                             <button className="btn btn-sm btn-secondary rounded-pill animate-pulse" type="button">
//                                 <i className="ci-heart animate-target fs-sm ms-n1 me-1" />
//                                 12
//                             </button>
//                             <div className="dropdown">
//                             <button aria-expanded="false" aria-label="Share" className="btn btn-sm btn-secondary rounded-pill animate-scale " 
//                             data-bs-toggle="dropdown" type="button">
//                                     <i className="ci-grid-2 animate-target fs-sm" />
//                                     Sub Categories
//                             </button>

//                                 <ul className="dropdown-menu dropdown-menu-end" style={{ "--cz-dropdown-min-width": "8.5rem" }}>
//                                     <li>
//                                         <a className="dropdown-item" href="#!">
//                                             <i className="ci-facebook fs-base me-2" />
//                                             Tailoring
//                                         </a>
//                                     </li>
//                                     <li>
//                                         <a className="dropdown-item" href="#!">
//                                             <i className="ci-instagram fs-base me-2" />
//                                             Master-minds
//                                         </a>
//                                     </li>
//                                     <li>
//                                         <a className="dropdown-item" href="#">
//                                             <i className="ci-linkedin fs-base me-2" />
//                                             Rebranding
//                                         </a>
//                                     </li>
//                                 </ul>
//                             </div>

//                             <div className="dropdown">
//                                 <button aria-expanded="false" aria-label="Share" className="btn btn-icon btn-sm btn-secondary animate-scale rounded-circle" data-bs-toggle="dropdown" type="button">
//                                     <i className="ci-share-2 animate-target fs-sm" />
//                                 </button>
//                                 <ul className="dropdown-menu dropdown-menu-end" style={{ "--cz-dropdown-min-width": "8.5rem" }}>
//                                     <li>
//                                         <a className="dropdown-item" href="#!">
//                                             <i className="ci-facebook fs-base me-2" />
//                                             Facebook
//                                         </a>
//                                     </li>
//                                     <li>
//                                         <a className="dropdown-item" href="#!">
//                                             <i className="ci-instagram fs-base me-2" />
//                                             Instagram
//                                         </a>
//                                     </li>
//                                     <li>
//                                         <a className="dropdown-item" href="#">
//                                             <i className="ci-linkedin fs-base me-2" />
//                                             LinkedIn
//                                         </a>
//                                     </li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div> */}
        
//         <Breadcrumb 
//           items={[
//             { label: 'Home', path: '/' },
//             { label: 'Categories', path: '/categories' },
//             { label: category?.name || 'Category', path: `/categories/${slug}` }
//           ]} 
//         />

//         <div className="row">
//           <div className="col-lg-9">
//             <div className="d-flex justify-content-between align-items-center mb-4">
//               <h1 className="h2 mb-0">{category?.name || 'Category'}</h1>
//               {pageMeta.total_items_count > 0 && (
//                 <span className="badge bg-info bg-opacity-10 text-info">
//                   {pageMeta.total_items_count} products
//                 </span>
//               )}
//             </div>

//             {category?.description && (
//               <p className="text-muted mb-4">{category.description}</p>
//             )}

//             {subcategories.length > 0 && (
//               <div className="mb-4">
//                 <h3 className="h5 mb-3">Subcategories</h3>
//                 <div className="d-flex flex-wrap gap-2">
//                   {subcategories.map(subcat => (
//                     <Link
//                       key={subcat.id}
//                       to={`/categories/${subcat.slug}`}
//                       className="btn btn-outline-secondary btn-sm"
//                     >
//                       {subcat.name}
//                     </Link>
//                   ))}
//                 </div>
//               </div>
//             )}

//             <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4">
//               {products.map(product => (
//                 <div key={product.id} className="col">
//                   <ProductSummary
//                     image={product.image_urls?.[0] || ''}
//                     name={product.name}
//                     slug={product.slug}
//                     price={product.price}
//                     id={product.id}
//                     url={`/products/${product.slug}`}
//                   />
//                 </div>
//               ))}
//             </div>

//             {loadingMore && (
//               <div className="text-center my-4">
//                 <div className="spinner-border text-primary" role="status">
//                   <span className="visually-hidden">Loading...</span>
//                 </div>
//               </div>
//             )}

//             {!pageMeta.has_next_page && products.length > 0 && (
//               <div className="text-center text-muted py-4">
//                 You've reached the end of products
//               </div>
//             )}

//             {products.length === 0 && !loading && (
//               <div className="text-center py-5">
//                 <h4>No products found in this category</h4>
//                 <Link to="/categories" className="btn btn-outline-primary mt-3">
//                   Browse Other Categories
//                 </Link>
//               </div>
//             )}
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default ProductsInCategory;