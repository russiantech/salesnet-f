import { useEffect, useState, useCallback } from 'react';
import { NotificationService } from "../../services/local/NotificationService";
import { Link } from 'react-router-dom';
import LoadingCard from '../../components/shared/LoadingCard';
import ProductSummary from '../products/ProductSummary';
import { OffersAxiosService } from '../../services/net/OffersAxiosService';
import Breadcrumb from '../../components/shared/Breadcrumb';

import './ProductsByOffers.css'

const ProductsByOffers = () => {
    const [offers, setOffers] = useState([]);
    const [pageMeta, setPageMeta] = useState({});
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [now, setNow] = useState(Date.now());

    // Update current time every second for countdown
    useEffect(() => {
        const timer = setInterval(() => setNow(Date.now()), 1000);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        fetchOffers();
    }, [page]);

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

    const fetchOffers = async () => {
        if (!hasMore) return;

        setLoading(true);
        try {
            const res = await OffersAxiosService.fetchOffers({
                page,
                page_size: 3,
                status: 'active',
                include_products: true
            });
            
            const data = res.data;
            const newOffers = data.offers.map(offer => ({
                ...offer,
                id: offer.id,
                name: offer.name,
                slug: offer.slug,
                end_date: offer.dates.end,
                banner_image: offer.banner_image,
                discount: offer.discount,
                products: offer.products || []
            }));

            setOffers(prev => {
                const existingIds = new Set(prev.map(offer => offer.id));
                const filteredOffers = newOffers.filter(offer => !existingIds.has(offer.id));
                return [...prev, ...filteredOffers];
            });

            setPageMeta(data.page_meta);
            setHasMore(data.page_meta.has_next_page);
        } catch (err) {
            console.error('Failed to fetch offers:', err);
            NotificationService.showDialog(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleScroll = useCallback(() => {
        const scrollPosition = window.innerHeight + document.documentElement.scrollTop;
        const threshold = document.documentElement.offsetHeight - 200;
        if (loading || scrollPosition < threshold) return;
        setPage(prevPage => prevPage + 1);
    }, [loading]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

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
                        <div className="badge bg-dark bg-opacity-10 text-danger px-2 py-1 rounded-pill">
                            <span className="fs-sm fw-medium">{value.toString().padStart(2, '0')}</span>
                            <span className="ms-1 fs-xs text-muted rounded-pill">{unit.charAt(0)}</span>
                        </div>
                        {idx < 3 && <span className="text-muted fs-xs">:</span>}
                    </div>
                ))}
            </div>
        );
    };

    return (
        <main className="content-wrapper">
            <section className="container pb-2 pb-sm-3 pb-md-4 pb-lg-5 mb-xxl-3">
                <Breadcrumb
                    items={[
                        { label: 'Home', path: '/' },
                        { label: 'Offers', path: '/offers' }
                    ]} 
                />
                
                {/* Sticky Header Container */}
                <div className="sticky-header bg-white zindex-sticky pt-2 pt-md-3">
                    <div className="container">
                        <div className="d-flex align-items-center justify-content-between py-2 border-bottom">
                            <div className="d-flex align-items-center">
                                <h1 className="h4 mb-0">
                                    <i className="ci-gift text-warning me-2" />
                                    Active Offers
                                </h1>
                                <span className="badge bg-primary rounded-pill bg-opacity-10 text-primary ms-3">
                                    {offers.length} Ongoing
                                </span>
                            </div>
                            
                            <div className="d-flex align-items-center gap-3">
                                <button className="btn btn-sm btn-outline-secondary rounded-pill">
                                    <i className="ci-filter me-2" />
                                    Filter
                                </button>
                                <div className="vr d-none d-md-inline-block" />
                                <button className="btn btn-sm btn-outline-secondary rounded-pill">
                                    <i className="ci-sort-asc me-2" />
                                    Sort
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Offers List */}
                <div className="container mt-4">
                    {offers.map((offer) => (
                        <div key={offer.slug} className="mb-5">
                            {/* Sticky Offer Header */}
                            <div className="sticky-top bg-white zindex-sticky py-3 border-bottom">
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center">
                                        <h3 className="h5 mb-0 me-3">{offer.name}</h3>
                                        <span className="badge bg-danger bg-opacity-15 rounded-pill ">
                                            {offer.discount.value}{offer.discount.type === 'percentage' ? '%' : '$'} OFF
                                        </span>
                                        <CountdownTimer endDate={offer.end_date} />
                                    </div>
                                    
                                    <Link
                                        to={`/offers/${offer.slug}`}
                                        className="btn btn-sm btn-outline-dark rounded-pill"
                                    >
                                        View Details
                                        <i className="ci-arrow-right ms-2" />
                                    </Link>
                                </div>
                            </div>

                            {/* Products Grid */}
                            <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4 pt-4">
                                {offer.products.map((product, i) => (
                                    <ProductSummary
                                        key={product.id + i}
                                        product={product}
                                        showDetails={true}
                                    />
                                ))}
                                {loading && Array.from({ length: 4 }).map((_, index) => (
                                    <LoadingCard key={`loading-${index}`} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default ProductsByOffers;


const ProductsByOffersFORMER = () => {
    const [offers, setOffers] = useState([]);
    const [pageMeta, setPageMeta] = useState({});
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [now, setNow] = useState(Date.now());

    // Update current time every second for countdown
    useEffect(() => {
        const timer = setInterval(() => setNow(Date.now()), 1000);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        fetchOffers();
    }, [page]);

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

    const fetchOffers = async () => {
        if (!hasMore) return;

        setLoading(true);
        try {
            const res = await OffersAxiosService.fetchOffers({
                page,
                page_size: 3,
                status: 'active',
                include_products: true
            });
            
            const data = res.data;
            const newOffers = data.offers.map(offer => ({
                ...offer,
                id: offer.id,
                name: offer.name,
                slug: offer.slug,
                end_date: offer.dates.end,
                banner_image: offer.banner_image,
                discount: offer.discount,
                products: offer.products || []
            }));

            setOffers(prev => {
                const existingIds = new Set(prev.map(offer => offer.id));
                const filteredOffers = newOffers.filter(offer => !existingIds.has(offer.id));
                return [...prev, ...filteredOffers];
            });

            setPageMeta(data.page_meta);
            setHasMore(data.page_meta.has_next_page);
        } catch (err) {
            console.error('Failed to fetch offers:', err);
            NotificationService.showDialog(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleScroll = useCallback(() => {
        const scrollPosition = window.innerHeight + document.documentElement.scrollTop;
        const threshold = document.documentElement.offsetHeight - 200;
        if (loading || scrollPosition < threshold) return;
        setPage(prevPage => prevPage + 1);
    }, [loading]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    const CountdownTimer = ({ endDate }) => {
        const timeLeft = calculateTimeLeft(endDate);

        if (!timeLeft) return (
            <div className="badge bg-danger ms-3">Offer Expired</div>
        );

        return (
            <div className="d-flex align-items-center ms-md-4 mt-2 mt-md-0">
                <div className="btn btn-success pe-none px-2 rounded-pill">
                    <span>{timeLeft.days.toString().padStart(2, '0')}</span>
                    <span className="ms-1">d</span>
                </div>
                <div className="animate-blinking text-body-tertiary fs-lg fw-medium mx-2">:</div>
                <div className="btn btn-outline-warning pe-none px-2 rounded-pill">
                    <span>{timeLeft.hours.toString().padStart(2, '0')}</span>
                    <span className="ms-1">h</span>
                </div>
                <div className="animate-blinking text-body-tertiary fs-lg fw-medium mx-2">:</div>
                <div className="btn btn-outline-danger pe-none px-2 rounded-pill">
                    <span>{timeLeft.minutes.toString().padStart(2, '0')}</span>
                    <span className="ms-1">m</span>
                </div>
                <div className="animate-blinking text-body-tertiary fs-lg fw-medium mx-2">:</div>
                <div className="btn btn-outline-info pe-none px-2 rounded-pill">
                    <span>{timeLeft.seconds.toString().padStart(2, '0')}</span>
                    <span className="ms-1">s</span>
                </div>
            </div>
        );
    };

    return (
                    <main className="content-wrapper">
        
                        <section className="container pb-2 pb-sm-3 pb-md-4 pb-lg-5 mb-xxl-3">
                            <Breadcrumb
                            items={[
                                { label: 'Home', path: '/' },
                                { label: 'Offers', path: '/offers' }
                            ]} 
                            />
                        
                        <div className="row">
                            <div className="col-lg-8 col-xl-12">
                                <div className="d-flex flex-column flex-md-row align-items-md-center gap-3 gap-md-4">
                                    <div className="nav align-items-center gap-2 fs-sm">
                                        <Link className="nav-link text-body gap-1 p-0" to="/">
                                            <div className="flex-shrink-0 border rounded-circle" style={{ width: "32px" }}>
                                                <div className="ratio ratio-1x1 rounded-circle overflow-hidden">
                                                    <img alt="Avatar" src="/assets/img/us/logos/favicon.svg" />
                                                </div>
                                            </div>
                                            <span className='badge rounded-pill text-body bg-grey-subtle fs-lg'>
                                                Special Offers 4 You <i className="ci-gift text-warning"></i> :
                                            </span> 
                                        </Link>
                                    </div>
                                    <div className="d-flex justify-content-between flex-grow-1 gap-4">
                                        <span className="badge rounded-pill text-info bg-info-subtle1 d-inline-flex align-items-center fs-sm visibility-hidden">
                                            
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
    
                    </section>
                                        
        <section className="container pb-2 pb-sm-3 pb-md-4 pb-lg-5 mb-xxl-3">

            {/* Offers List */}
            {offers.map((offer) => {
                const timeLeft = calculateTimeLeft(offer.end_date);
                
                return (
                    <div key={offer.slug} className="mb-5">
                        {/* Offer Header */}
                        <div className="d-flex flex-wrap align-items-center justify-content-between border-bottom pb-3 pb-md-4">
                            <div className="d-flex align-items-center flex-wrap">
                                <h3 className="h4 pe-3 me-3 mb-2 mb-md-0">{offer.name}</h3>
                                <span className="badge bg-danger me-3 mb-2 mb-md-0">
                                    {offer.discount.value}{offer.discount.type === 'percentage' ? '%' : '$'} OFF
                                </span>
                                <CountdownTimer endDate={offer.end_date} />
                            </div>
                            <Link
                                to={`/offers/${offer.slug}`}
                                className="btn btn-icon btn-dark ms-auto mt-2 mt-md-0 animate-scale"
                                aria-label={`View ${offer.name} details`}
                            >
                                {/* <i className="ci-arrow-right fs-base"></i> */}
                                <i className="ci-arrow-up-right fs-base animate-target" />
                            </Link>
                        </div>

                        {/* Products Grid */}
                        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4 pt-4">
                            {offer.products.map((product) => (
                                
                                <ProductSummary
                                    key={product.id}
                                    product={product}
                                    showDetails={true}
                                />
                            ))}

                            {loading && Array.from({ length: 4 }).map((_, index) => (
                                <LoadingCard key={`loading-${index}`} />
                            ))}
                        </div>
                    </div>
                );
            })}
        </section>
        </main>
    );
};

