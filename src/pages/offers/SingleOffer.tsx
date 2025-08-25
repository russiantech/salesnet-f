// import { useEffect, useState, useCallback } from 'react';
// import { useParams } from 'react-router-dom';
// import { NotificationService } from "../../services/local/NotificationService";
// import LoadingCard from '../../components/shared/LoadingCard';
// import ProductSummary from '../products/ProductSummary';
// import { OffersAxiosService } from '../../services/net/OffersAxiosService';
// import { motion, useScroll, useTransform } from 'framer-motion';

// const SingleOffer = () => {
//     const { slug } = useParams();
//     const [offer, setOffer] = useState(null);
//     const [products, setProducts] = useState([]);
//     const [page, setPage] = useState(1);
//     const [hasMore, setHasMore] = useState(true);
//     const [loading, setLoading] = useState(true);
//     const [now, setNow] = useState(Date.now());

//     const { scrollYProgress } = useScroll();
//     const waveOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
//     const waveY = useTransform(scrollYProgress, [0, 1], [0, -100]);

//     useEffect(() => {
//         const timer = setInterval(() => setNow(Date.now()), 1000);
//         return () => clearInterval(timer);
//     }, []);

//     const fetchOfferDetails = useCallback(async () => {
//         try {
//             const [offerRes, productsRes] = await Promise.all([
//                 OffersAxiosService.getBySlug(slug),
//                 OffersAxiosService.getProducts(slug, { page })
//             ]);

//             setOffer(offerRes.data);
//             setProducts(prev => [...prev, ...productsRes.data.products]);
//             setHasMore(productsRes.data.page_meta.has_next_page);
//         } catch (err) {
//             NotificationService.showDialog(err.message);
//         } finally {
//             setLoading(false);
//         }
//     }, [slug, page]);

//     useEffect(() => {
//         setLoading(true);
//         fetchOfferDetails();
//     }, [fetchOfferDetails, page]);

//     const handleScroll = useCallback(() => {
//         const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
//         if (scrollTop + clientHeight >= scrollHeight - 200 && !loading && hasMore) {
//             setPage(prev => prev + 1);
//         }
//     }, [loading, hasMore]);

//     useEffect(() => {
//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, [handleScroll]);

//     const calculateTimeLeft = (endDate) => {
//         const difference = new Date(endDate) - now;
//         if (difference <= 0) return null;

//         return {
//             days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//             hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
//             minutes: Math.floor((difference / 1000 / 60) % 60),
//             seconds: Math.floor((difference / 1000) % 60)
//         };
//     };

//     const CountdownTimer = ({ endDate }) => {
//         const timeLeft = calculateTimeLeft(endDate);

//         return (
//             <motion.div 
//                 className="d-flex gap-2"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 0.5 }}
//             >
//                 {timeLeft ? (
//                     Object.entries(timeLeft).map(([unit, value]) => (
//                         <div key={unit} className="text-center">
//                             <div className="badge bg-dark bg-opacity-10 px-3 py-2">
//                                 <div className="fs-3 fw-bold">{value.toString().padStart(2, '0')}</div>
//                                 <div className="text-uppercase text-muted fs-xs">{unit}</div>
//                             </div>
//                         </div>
//                     ))
//                 ) : (
//                     <div className="badge bg-danger bg-opacity-15 text-danger py-2 px-3">
//                         <i className="ci-time me-2" /> Offer Expired
//                     </div>
//                 )}
//             </motion.div>
//         );
//     };

//     if (!offer) return <LoadingCard count={1} />;

//     return (
//         <main className="content-wrapper">
//             {/* Wave Animation Background */}
//             <motion.div
//                 className="position-absolute top-0 start-0 w-100 h-100 bg-primary bg-opacity-05"
//                 style={{
//                     opacity: waveOpacity,
//                     y: waveY,
//                     background: `linear-gradient(45deg, ${offer.background_gradient || '#1c0d8c'} 0%, 
//                                ${offer.text_color || '#ffffff'} 100%)`
//                 }}
//             />

//             <div className="container position-relative py-5">
//                 {/* Sticky Offer Header */}
//                 <motion.div 
//                     className="sticky-top bg-white rounded-3 shadow-sm p-4 mb-4 zindex-sticky"
//                     initial={{ y: -100 }}
//                     animate={{ y: 0 }}
//                     transition={{ type: 'spring', stiffness: 100 }}
//                 >
//                     <div className="row align-items-center">
//                         <div className="col-md-6">
//                             <h1 className="display-5 fw-bold mb-3">{offer.name}</h1>
//                             <div className="d-flex align-items-center gap-3">
//                                 <span className="badge bg-danger fs-5 py-2 px-3">
//                                     {offer.discount.value}{offer.discount.type === 'percentage' ? '%' : '$'} OFF
//                                 </span>
//                                 <CountdownTimer endDate={offer.dates.end} />
//                             </div>
//                         </div>
//                         <div className="col-md-6 text-md-end mt-4 mt-md-0">
//                             <p className="lead mb-0">{offer.description}</p>
//                         </div>
//                     </div>
//                 </motion.div>

//                 {/* Products Grid */}
//                 <motion.div 
//                     className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                 >
//                     {products.map((product, index) => (
//                         <motion.div
//                             key={product.id}
//                             className="col"
//                             initial={{ opacity: 0, y: 50 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ 
//                                 delay: index * 0.1,
//                                 type: 'spring',
//                                 stiffness: 100
//                             }}
//                         >
//                             <ProductSummary
//                                 product={product}
//                                 showDetails={true}
//                                 discountBadge={false}
//                             />
//                         </motion.div>
//                     ))}

//                     {loading && Array.from({ length: 4 }).map((_, index) => (
//                         <LoadingCard key={`loading-${index}`} />
//                     ))}

//                     {!hasMore && (
//                         <div className="col-12 text-center py-5">
//                             <p className="text-muted">No more products in this offer</p>
//                         </div>
//                     )}
//                 </motion.div>
//             </div>
//         </main>
//     );
// };

// export default SingleOffer;

// 
import { useEffect, useState, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import { NotificationService } from "../../services/local/NotificationService";
import LoadingCard from '../../components/shared/LoadingCard';
import ProductSummary from '../products/ProductSummary_0';
import { OffersAxiosService } from '../../services/net/OffersAxiosService';
import Breadcrumb from '../../components/shared/Breadcrumb';
import { motion, useScroll, useTransform } from 'framer-motion';
import SeoConfig from '../../utils/SeoManager';

const SingleOffer = () => {
    const { slug } = useParams();
    const [offer, setOffer] = useState(null);
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState(true);
    const [now, setNow] = useState(Date.now());

    const { scrollYProgress } = useScroll();
    const waveOpacity = useTransform(scrollYProgress, [0, 0.2], [0.6, 0]);
    const waveY = useTransform(scrollYProgress, [0, 1], [0, -100]);

    useEffect(() => {
        const timer = setInterval(() => setNow(Date.now()), 1000);
        return () => clearInterval(timer);
    }, []);

    const fetchOfferDetails = useCallback(async () => {
        try {
            const [offerRes, productsRes] = await Promise.all([
                OffersAxiosService.getBySlug(slug),
                OffersAxiosService.getProducts(slug, { page })
            ]);

            setOffer(offerRes.data);
            setProducts(prev => [...prev, ...productsRes.data.products]);
            setHasMore(productsRes.data.page_meta.has_next_page);
        } catch (err) {
            NotificationService.showDialog(err.message);
        } finally {
            setLoading(false);
        }
    }, [slug, page]);

    useEffect(() => {
        setLoading(true);
        fetchOfferDetails();
    }, [fetchOfferDetails, page]);

    const handleScroll = useCallback(() => {
        const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
        if (scrollTop + clientHeight >= scrollHeight - 200 && !loading && hasMore) {
            setPage(prev => prev + 1);
        }
    }, [loading, hasMore]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    const calculateTimeLeft = (endDate) => {
        const difference = new Date(endDate) - now;
        if (difference <= 0) return null;

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60)
        };
    };

    const CountdownTimer = ({ endDate }) => {
        const timeLeft = calculateTimeLeft(endDate);

        if (!timeLeft) return (
            <div className="badge bg-danger rounded-pill bg-opacity-15 text-danger fs-sm ms-3">
                <i className="ci-time me-1" /> Expired
            </div>
        );

        return (
            <div className="d-flex align-items-center gap-2 ms-md-3">
                {Object.entries(timeLeft).map(([unit, value], idx) => (
                    <div key={unit} className="d-flex align-items-center gap-1">
                        <div className="badge bg-dark bg-opacity-10 px-2 py-1 rounded-pill">
                            <span className="fs-sm fw-medium text-dark">{value.toString().padStart(2, '0')}</span>
                            <span className="ms-1 fs-xs text-muted">{unit.charAt(0)}</span>
                        </div>
                        {idx < 3 && <span className="text-muted fs-xs">:</span>}
                    </div>
                ))}
            </div>
        );
    };

    // if (!offer) return <LoadingCard count={1} />;
    if (loading && !offer) {
        return (
            <><SeoConfig
                title={offer ? `${offer.name} | Special Offer` : 'Special Offer'}
                description={offer?.description || 'Discover this exclusive offer with amazing discounts'}
                keywords={`offer, discount, ${offer?.name}, deals`}
                image={offer?.banner_image}
                canonical={`/offers/${offer?.slug}`} /><main className="container py-5">
                    <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4">
                        {Array.from({ length: 6 }).map((_, index) => (
                            <div className="col" key={`loading-${index}`}>
                                <LoadingCard />
                            </div>
                        ))}
                    </div>
                </main></>
        );
        }

    return (
        <main className="content-wrapper position-relative">

            <SeoConfig 
                title={offer ? `${offer.name} | Special Offer` : 'Special Offer'}
                description={offer?.description || 'Discover this exclusive offer with amazing discounts'}
                keywords={`offer, discount, ${offer?.name}, deals`}
                image={offer?.banner_image}
                canonical={`/offers/${offer?.slug}`}
            />
                
            {/* Multiple Wave Animation Backgrounds */}
            {[0, 1, 2, 3].map((i) => (
                <motion.div
                    key={i}
                    className="position-absolute top-0 start-0 w-100 h-100"
                    style={{
                        opacity: waveOpacity,
                        y: waveY,
                        background: `linear-gradient(${45 + i * 45}deg, 
                            ${offer.background_gradient || '#1c0d8c'} 0%, 
                            ${offer.text_color || '#ffffff'} 100%)`,
                        zIndex: -1 - i,
                        transform: `scale(${1 + i * 0.1})`
                    }}
                />
            ))}

            {/* Content with higher z-index */}
            <div className="position-relative" style={{ zIndex: 1 }}>
                {/* Breadcrumb with semi-transparent background */}
                <section className="container py-2">
                    <div className="bg-white bg-opacity-75 p-3 rounded-3">
                        <Breadcrumb
                            items={[
                                { label: 'Home', path: '/' },
                                { label: 'Offers', path: '/offers' },
                                { label: offer.name, path: `/offers/${offer.slug}` }
                            ]} 
                        />
                    </div>
                </section>

                <div className="container pb-2">
                    {/* Sticky Offer Header */}
                    <motion.div 
                        className="sticky-top bg-white rounded-3 shadow-sm p-4 mb-4 zindex-sticky"
                        initial={{ y: -100 }}
                        animate={{ y: 0 }}
                        transition={{ type: 'spring', stiffness: 100 }}
                    >
                        <div className="d-flex flex-wrap align-items-center justify-content-between">
                            <div className="d-flex align-items-center flex-wrap">
                                <h1 className="h4 pe-3 me-3 mb-2 mb-md-0">{offer.name}</h1>
                                <span className="badge bg-danger bg-opacity-15 border border-danger rounded-pill me-3 mb-2 mb-md-0">
                                    {offer.discount.value}{offer.discount.type === 'percentage' ? '%' : '$'} OFF
                                </span>
                                <CountdownTimer endDate={offer.dates.end} />
                            </div>
                            <Link to="/offers" className="btn btn-sm btn-outline-dark mt-2 mt-md-0 rounded-pill">
                                <i className="ci-arrow-left me-2" />
                                Back to Offers
                            </Link>
                        </div>
                    </motion.div>

                    {/* Offer Description */}
                    {offer.description && (
                        <div className="alert alert-info bg-white bg-opacity-75 mb-4">
                            <i className="ci-gift text-warning me-2" />
                            {offer.description}
                        </div>
                    )}

                    {/* Products Grid */}
                    <motion.div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4 pb-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        {products.map((product, index) => (
                            <motion.div
                                key={product.id + index}
                                className="col"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ 
                                    delay: index * 0.1,
                                    type: 'spring',
                                    stiffness: 100
                                }}
                            >
                                <ProductSummary
                                    product={product}
                                    showDetails={true}
                                />
                            </motion.div>
                        ))}

                        {loading && Array.from({ length: 4 }).map((_, index) => (
                            <LoadingCard key={`loading-${index}`} />
                        ))}

                        {!hasMore && (
                            <div className="col-12 text-center py-5">
                                <p className="text-muted">No more products in this offer</p>
                            </div>
                        )}
                    </motion.div>
                </div>
            </div>
        </main>
    );
};

export default SingleOffer;