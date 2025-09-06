import { useEffect, useState, useCallback } from 'react';
// import ProductSummary from "./ProductSummary_0";
import { ProductAxiosService } from '../../services/net/ProductAxiosService';
import { NotificationService } from "../../services/local/NotificationService";
import { Link } from 'react-router-dom';
import './Products.css'; // Import custom CSS for loading animation
import LoadingCard from '../../components/shared/LoadingCard';
import Breadcrumb from '../../components/shared/Breadcrumb';
// import { ProductSummary } from './ProductSummary_0';
import { ProductSummary } from './ProductSummary';
import { Key } from 'react';
import { BasketButton } from './interactions/BasketButton';
import { ChatButton } from './interactions/ChatButton';
import { FavoriteButton } from './interactions/FavoriteButton';
import { ShareButton } from './interactions/ShareButton';
// import ProductSummary from './ProductSummary';

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
            // console.log('API Response:', res); // Log the response
            setProducts(prevProducts => [...prevProducts, ...res.data.products]);
            setPageMeta(res.data.page_meta);
            setHasMore(res.data.page_meta.has_next_page);
        } catch (err) {
            console.error('Failed to fetch products:', err); // Log the error
            NotificationService.showDialog(err.message);
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
                                      <Breadcrumb
                                        items={[
                                          { label: 'Home', path: '/' },
                                          { label: 'Products', path: '/products' }
                                        ]} 
                                      />
                                  
                                    <div className="row">
                                        <div className="col-lg-8 col-xl-12">
                                            <div className="d-flex flex-column flex-md-row align-items-md-center gap-3 gap-md-4">
                                                <div className="nav align-items-center gap-2 fs-sm">
                                                    <Link className="nav-link text-body gap-1 p-0" to="/">
                                                        {/* <div className="flex-shrink-0 border rounded-circle" style={{ width: "32px" }}>
                                                            <div className="ratio ratio-1x1 rounded-circle overflow-hidden">
                                                                <img alt="Avatar" src="/assets/img/us/logos/favicon.svg" />
                                                            </div>
                                                        </div> */}
                                                        <div className="flex-shrink-0" style={{ width: "32px" }}>
                                                            <div className="ratio ratio-1x1">
                                                                <img alt="Avatar" src="/assets/img/us/logos/favicon.svg" />
                                                            </div>
                                                        </div>
                                                       <span className='badge rounded-pill text-dark bg-grey-subtle fs-sm border'>Salesnet</span> 
                                                    </Link>
                                                </div>
                                                <div className="d-flex justify-content-between flex-grow-1 gap-4">
                                                    <span className=" d-inline-flex align-items-center fs-sm"> </span>
                
                                                    <div className="d-flex gap-2">
                                                                        
                                                    <BasketButton productId={0} productName={0} className='rounded-pill' />
                                
                                                    <FavoriteButton productId={0} productName={'salesnet'} className='rounded-pill' />
                                
                                                    <ChatButton businessId={''} />
                                                    
                                                    <ShareButton productId={''} productName={''} />
                                
                                                    </div>


                                                </div>
                                            </div>
                                        </div>
                                    </div>
                
                                </section>
                                
                <section className="container pb-2 pb-sm-3 pb-md-4 pb-lg-5 mb-xxl-3">

                    {/* <div className="row g-4 pt-2"> */}
                    <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-2">
                        {products.map((product: unknown, i: Key | null | undefined) => (

                            <ProductSummary key={i} product={product} />

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

export default Products;
