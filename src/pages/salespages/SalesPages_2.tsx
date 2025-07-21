
// // v02
// import { useState, useEffect } from "react";
// import { useParams, useNavigate, Link } from "react-router-dom";
// import LoadingSpinner from "../../components/shared/LoadingSpinner";
// import { ProductAxiosService } from "../../services/net/ProductAxiosService";
// import { PagesAxiosService } from "../../services/net/PagesAxiosService";
// import { UsersAxiosService } from "../../services/net/UsersAxiosService";
// import BusinessAbout from "./BusinessAbout";
// import BusinessHours from "./BusinessHours";
// import BusinessReviews from "./BusinessReviews";
// import { BusinessStats, BusinessStats2 } from './BusinessStats';

// import ProductSummary from "../products/ProductSummary";

// interface BusinessProfile {
//     id: number;
//     name: string;
//     username: string;
//     slug: string;
//     avatar: string;
//     cover_image: string;
//     description: string;
//     website?: string;
//     phone?: string;
//     email?: string;
//     address?: string;
//     type: "user" | "page";
//     created_at: string;
//     categories: Array<{ id: number; name: string }>;
//     business_hours?: Array<{
//         day: string;
//         opening: string;
//         closing: string;
//         closed: boolean;
//     }>;
// }

// interface BusinessStatsData {
//     products_count: number;
//     followers_count: number;
//     rating: number;
// }

// const SalesPages = () => {
//     const { username, page_slug } = useParams();
//     const [business, setBusiness] = useState<BusinessProfile | null>(null);
//     const [stats, setStats] = useState<BusinessStatsData | null>(null);
//     const [products, setProducts] = useState<any[]>([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState<string | null>(null);
//     const [activeTab, setActiveTab] = useState("products");
//     const navigate = useNavigate();

//     useEffect(() => {
//         const fetchBusinessData = async () => {
//             try {
//                 setLoading(true);
//                 let businessResponse;
//                 let businessUsername: string | undefined;

//                 // Fetch business profile
//                 if (username) {
//                     businessResponse = await UsersAxiosService.getByUsername(username);
//                     businessUsername = businessResponse.data.username;
//                     setBusiness({
//                         ...businessResponse.data,
//                         type: "user",
//                         slug: businessResponse.data.username,
//                         username: businessResponse.data.username,
//                     });
//                 } else if (page_slug) {
//                     businessResponse = await PagesAxiosService.getBySlug(page_slug);
//                     businessUsername = businessResponse.data.username;
//                     setBusiness({
//                         ...businessResponse.data,
//                         type: "page",
//                         slug: businessResponse.data.slug,
//                         username: businessResponse.data.username,
//                     });
//                 }

//                 if (!businessUsername) {
//                     throw new Error("Business identifier not found");
//                 }

//                 // alert(username, businessUsername);
//                 // Fetch stats and products in parallel
//                 const [statsResponse, productsResponse] = await Promise.all([
//                     PagesAxiosService.getStats(businessUsername),
//                     //   ProductAxiosService.getByOwner(businessUsername, 1, 100),
//                     //   PagesAxiosService.getStats(username),
//                     //   ProductAxiosService.getByOwner(username),
//                     //   ProductAxiosService.getByOwner(username, 1, 100),

//                     // 
//                     ProductAxiosService.getByOwner({ page: 1, page_size: 100 }, businessUsername)

//                 ]);

//                 console.log([statsResponse, productsResponse]);

//                 setStats(statsResponse.data);
//                 setProducts(productsResponse.data.products || []);
//             } catch (err) {
//                 setError("Failed to load business data");
//                 console.error("Data fetching error:", err);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchBusinessData();
//     }, [username, page_slug]);

//     if (loading) {
//         return <LoadingSpinner />;
//     }

//     if (error || !business || !stats) {
//         return (
//             <div className="container py-5 text-center">
//                 <h3>{error || "Business profile not found"}</h3>
//                 <button
//                     className="btn btn-primary rounded-pill mt-3"
//                     onClick={() => navigate("/")}
//                 >
//                     Go to Homepage
//                 </button>
//             </div>
//         );
//     }

//     return (
//         <div className="business-profile-page">
//             {/* Cover Image */}
//             <div className="cover-container position-relative d-none">
//                 {business.cover_image ? (
//                     <img src={business.cover_image} alt={`${business.name} cover`} className="cover-image" />
//                 ) : (
//                     <div className="cover-placeholder bg-secondary" style={{ background: 'black' }}></div>
//                 )}

//                 {/* Profile Header */}
//                 <div className="profile-header container">
//                     <div className="profile-avatar">
//                         <img
//                             src={business.avatar || "/assets/img/us/logos/avatar.png"}
//                             alt={business.name}
//                             className="rounded-circle"
//                         />
//                     </div>

//                     <div className="profile-info">
//                         <h1 className="profile-name">{business.name}</h1>
//                         {/* <div className="d-flex flex-wrap gap-4 pe-4"> </div> */}
//                         <BusinessStats
//                             productsCount={stats.products_count}
//                             followersCount={stats.followers_count}
//                             rating={stats.rating}
//                         />
//                         <div className="profile-actions mt-4 d-flex flex-wrap gap-4">
//                             <button className="btn btn-outline-dark rounded-pill">
//                                 <i className="ci-message me-1"></i> Message
//                             </button>
//                             <button className="btn btn-primary rounded-pill">
//                                 <i className="ci-heart me-1"></i>
//                                 Follow
//                                 <span className="badge rounded-pill bg-info1 ms-1 fw-bold">{stats.followers_count}</span>
//                             </button>

//                         </div>
//                     </div>
//                 </div>


//             </div>

//             {/*  */}
//             {/* Cover Image */}
//             <div className="cover-container w-100 position-relative">
//                 {business.cover_image ? (
//                     <img
//                         src={business.cover_image}
//                         alt={`${business.name} cover`}
//                         className="w-100 object-fit-cover"
//                         style={{ maxHeight: '300px', objectFit: 'cover' }}
//                     />
//                 ) : (
//                     <div
//                         className="bg-secondary w-100"
//                         style={{ height: '300px', backgroundColor: 'black' }}
//                     ></div>
//                 )}
//             </div>

//             {/* Profile Header - below cover */}
//             <div className="container mt-n5 position-relative z-2">
//                 <div className="bg-white shadow rounded p-4 d-flex flex-column flex-md-row align-items-center gap-4">
//                     {/* Avatar */}
//                     <div className="flex-shrink-0">
//                         <img
//                             src={business.avatar || "/assets/img/us/logos/avatar.png"}
//                             alt={business.name}
//                             className="rounded-circle"
//                             style={{ width: '120px', height: '120px', objectFit: 'cover' }}
//                         />
//                     </div>

//                     {/* Business Info */}
//                     <div className="flex-grow-1">
//                         <h1 className="h4 mb-2">{business.name}</h1>

//                         {/* <div className="d-flex flex-wrap gap-3 mb-3 text-muted small">
//         <div><i className="ci-star me-1 text-warning"></i> {stats.rating || '0.0'} Rating</div>
//         <div><i className="ci-heart me-1"></i> {stats.followers_count || 0} Followers</div>
//         <div><i className="ci-bag me-1"></i> {stats.products_count || 0} Products</div>
//       </div> */}
//                         <BusinessStats2
//                             productsCount={stats.products_count}
//                             followersCount={stats.followers_count}
//                             rating={stats.rating}
//                         />

//                         <div className="d-flex flex-wrap gap-3">
//                             <button className="btn btn-outline-dark rounded-pill">
//                                 <i className="ci-message me-1"></i> Message
//                             </button>
//                             <button className="btn btn-primary rounded-pill">
//                                 <i className="ci-heart me-1"></i> Follow
//                                 <span className="badge rounded-pill bg-info1 ms-2 fw-bold">
//                                     {stats.followers_count}
//                                 </span>
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>


//             {/* Navigation Tabs */}

//             <nav className="profile-nav bg-light border-top border-bottom py-2 mt-2">
//                 <div className="container overflow-auto">
//                     <ul className="nav nav-pills flex-nowrap gap-2" role="tablist" style={{ overflowX: 'auto' }}>
//                         <li className="nav-item" role="presentation">
//                             <button
//                                 type="button"
//                                 className={`nav-link rounded-pill ${activeTab === "products" ? "active" : ""}`}
//                                 onClick={() => setActiveTab("products")}
//                                 role="tab"
//                                 aria-selected={activeTab === "products"}
//                             >
//                                 <i className="ci-bag me-2 ms-n1" />
//                                 Products <span className="badge rounded-pill bg-secondary ms-1">{stats.products_count}</span>
//                             </button>
//                         </li>
//                         <li className="nav-item" role="presentation">
//                             <button
//                                 type="button"
//                                 className={`nav-link rounded-pill ${activeTab === "about" ? "active" : ""}`}
//                                 onClick={() => setActiveTab("about")}
//                                 role="tab"
//                                 aria-selected={activeTab === "about"}
//                             >
//                                 <i className="ci-info me-2 ms-n1" />
//                                 About
//                             </button>
//                         </li>
//                         <li className="nav-item" role="presentation">
//                             <button
//                                 type="button"
//                                 className={`nav-link rounded-pill ${activeTab === "reviews" ? "active" : ""}`}
//                                 onClick={() => setActiveTab("reviews")}
//                                 role="tab"
//                                 aria-selected={activeTab === "reviews"}
//                             >
//                                 <i className="ci-star me-2 ms-n1" />
//                                 Reviews <span className="badge rounded-pill bg-warning ms-1">{stats.rating.toFixed(1)}</span>
//                             </button>
//                         </li>
//                         <li className="nav-item" role="presentation">
//                             <button
//                                 type="button"
//                                 className={`nav-link rounded-pill ${activeTab === "photos" ? "active" : ""}`}
//                                 onClick={() => setActiveTab("photos")}
//                                 role="tab"
//                                 aria-selected={activeTab === "photos"}
//                             >
//                                 <i className="ci-camera me-2 ms-n1" />
//                                 Photos
//                             </button>
//                         </li>

//                     </ul>
//                 </div>
//             </nav>

//             {/* Main Content */}
//             <main className="container py-5">
//                 <div className="row">
//                     {/* Left Sidebar */}
//                     <div className="col-lg-4 mb-5 mb-lg-0">
//                         <div className="card mb-4">
//                             <div className="card-body">
//                                 <h5 className="card-title">About</h5>
//                                 <p className="card-text">
//                                     {business.about_me || "No description provided"}
//                                 </p>

//                                 {business.website && (
//                                     <div className="mb-2">
//                                         <i className="ci-globe me-2"></i>
//                                         <Link
//                                             to={
//                                                 business.website.startsWith("http")
//                                                     ? business.website
//                                                     : `https://${business.website}`
//                                             }
//                                             target="_blank"
//                                             rel="noreferrer"
//                                         >
//                                             {business.website}
//                                         </Link>
//                                     </div>
//                                 )}

//                                 {business.phone && (
//                                     <div className="mb-2">
//                                         <i className="ci-phone me-2"></i> {business.phone}
//                                     </div>
//                                 )}

//                                 {business.email && (
//                                     <div className="mb-2">
//                                         <i className="ci-mail me-2"></i> {business.email}
//                                     </div>
//                                 )}

//                                 {business.addresses && (
//                                     <div className="mb-2">
//                                         <i className="ci-location me-2"></i> {business.address}
//                                     </div>
//                                 )}
//                             </div>
//                         </div>

//                         <div className="card mb-4">
//                             <div className="card-body">
//                                 <h5 className="card-title">Business Hours</h5>
//                                 <BusinessHours hours={business.business_hours} />
//                             </div>
//                         </div>

//                         <div className="card">
//                             <div className="card-body">
//                                 <h5 className="card-title">Categories</h5>
//                                 <div className="d-flex flex-wrap gap-2">
//                                     {business.categories.map((category) => (

//                                         <Link to={`/categories/${category.slug}`} key={category.id} className="badge bg-info rounded-pill text-decoration-none">
//                                             {category.name}
//                                         </Link>

//                                     ))}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Main Content Area */}
//                     <div className="col-lg-8">

//                         {activeTab === "products" && (
//                             <div className="card">
//                                 <div className="card-body">
//                                     <h2 className="h4 mb-4">Products</h2>
//                                     {products.length > 0 ? (
//                                         <div className="row g-3">
//                                             {products.map((product, i) => (
//                                                 <div className="col-md-4" key={i}>
//                                                     <ProductSummary product={product} />
//                                                 </div>
//                                             ))}
//                                         </div>
//                                     ) : (
//                                         <div className="text-center py-5">
//                                             <i className="ci-bag fs-1 text-muted mb-3"></i>
//                                             <p>No products available yet</p>
//                                         </div>
//                                     )}
//                                 </div>
//                             </div>
//                         )}


//                         {activeTab === "about" && (
//                             <BusinessAbout
//                                 description={business.about_me}
//                                 foundedDate={business.created_at}
//                                 categories={business.categories}
//                             />
//                         )}

//                         {activeTab === "reviews" && (
//                             <BusinessReviews
//                                 businessId={business.id}
//                                 businessType={business.type}
//                             />
//                         )}

//                         {activeTab === "photos" && (
//                             <div className="card">
//                                 <div className="card-body">
//                                     <h2 className="h4 mb-4">Business Photos</h2>
//                                     <div className="text-center py-5">
//                                         <i className="ci-camera fs-1 text-muted mb-3"></i>
//                                         <p>No photos available yet</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             </main>
//         </div>
//     );
// };

// export default SalesPages;

// 
import { useState, useEffect, useRef, useCallback } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import LoadingSpinner from "../../components/shared/LoadingSpinner";
import { ProductAxiosService } from "../../services/net/ProductAxiosService";
import { PagesAxiosService } from "../../services/net/PagesAxiosService";
import { UsersAxiosService } from "../../services/net/UsersAxiosService";
import BusinessAbout from "./BusinessAbout";
import BusinessHours from "./BusinessHours";
import BusinessReviews from "./BusinessReviews";
import { BusinessStats2 } from './BusinessStats';
import ProductSummary from "../products/ProductSummary";
import "./SalesPages.css";
import LoadingCard from "../../components/shared/LoadingCard";

interface Address {
  id: number;
  street_address: string;
  city: { id: number; name: string };
  zip_code: string;
  is_primary: boolean;
}

interface BusinessProfile {
  id: number;
  name: string | null;
  username: string;
  slug: string;
  avatar: string | null;
  cover_image: string | null;
  about_me: string | null;
  website: string | null;
  phone: string | null;
  email: string | null;
  type: "user" | "page";
  created_at: string;
  categories: Array<{ id: number; name: string; slug: string }>;
  business_hours: Array<{
    day: string;
    opening: string;
    closing: string;
    closed: boolean;
  }>;
  addresses: Address[];
}

interface BusinessStatsData {
  products_count: number;
  followers_count: number;
  rating: number;
}

interface ProductPageMeta {
  current_page_number: number;
  total_pages_count: number;
  has_next_page: boolean;
}

const SalesPages = () => {
  const { username, page_slug } = useParams();
  const [business, setBusiness] = useState<BusinessProfile | null>(null);
  const [stats, setStats] = useState<BusinessStatsData | null>(null);
  const [products, setProducts] = useState<any[]>([]);
  const [pageMeta, setPageMeta] = useState<ProductPageMeta>({
    current_page_number: 1,
    total_pages_count: 1,
    has_next_page: false
  });
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("products");
  const navigate = useNavigate();
  const sentinelRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Fetch business profile data
  const fetchBusinessProfile = useCallback(async () => {
    try {
      let businessResponse;
      let businessUsername: string | undefined;

      if (username) {
        businessResponse = await UsersAxiosService.getByUsername(username);
        businessUsername = businessResponse.data.username;
        setBusiness({
          ...businessResponse.data,
          type: "user",
          slug: businessResponse.data.username,
          username: businessResponse.data.username,
        });
      } else if (page_slug) {
        businessResponse = await PagesAxiosService.getBySlug(page_slug);
        businessUsername = businessResponse.data.username;
        setBusiness({
          ...businessResponse.data,
          type: "page",
          slug: businessResponse.data.slug,
          username: businessResponse.data.username,
        });
      }

      return businessUsername;

    } catch (err) {
      console.error("Business profile error:", err);
      setError("Failed to load business profile");
      return null;
    }
  }, [username, page_slug]);

  // Fetch business stats
  const fetchBusinessStats = useCallback(async (identifier: string) => {
    try {
      const statsResponse = await PagesAxiosService.getStats(identifier);
      setStats(statsResponse.data);
    } catch (err) {
      console.error("Business stats error:", err);
      setError("Failed to load business statistics");
    }
  }, []);

  // Fetch products with pagination
  const fetchProducts = useCallback(async (identifier: string, page: number = 1) => {
    try {
      const isInitialLoad = page === 1;
      if (isInitialLoad) setLoading(true);
      else setLoadingMore(true);

      const productsResponse = await ProductAxiosService.getByOwner(
        { page, page_size: 12 },
        identifier
      );

      setProducts(prev => 
        isInitialLoad 
          ? productsResponse.data.products 
          : [...prev, ...productsResponse.data.products]
      );

      setPageMeta({
        current_page_number: productsResponse.data.page_meta.current_page_number,
        total_pages_count: productsResponse.data.page_meta.total_pages_count,
        has_next_page: productsResponse.data.page_meta.has_next_page
      });
    } catch (err) {
      console.error("Products error:", err);
      setError("Failed to load products");
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  }, []);

  // Initial data loading
  useEffect(() => {
    const fetchBusinessData = async () => {
      const businessUsername = await fetchBusinessProfile();
      if (!businessUsername) return;

      await Promise.all([
        fetchBusinessStats(businessUsername),
        fetchProducts(businessUsername)
      ]);
    };

    fetchBusinessData();

  }, [fetchBusinessProfile, fetchBusinessStats, fetchProducts]);

  // Infinite scroll setup
  useEffect(() => {
    if (!sentinelRef.current || !pageMeta.has_next_page || loadingMore) return;

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting && business?.username) {
        fetchProducts(business.username, pageMeta.current_page_number + 1);
      }
    };

    observerRef.current = new IntersectionObserver(handleIntersection, {
      rootMargin: "100px",
      threshold: 0.1
    });

    observerRef.current.observe(sentinelRef.current);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [pageMeta, loadingMore, business, fetchProducts]);

  // Get primary address
  const primaryAddress = business?.addresses?.find(addr => addr.is_primary) || 
                         business?.addresses?.[0];

  if (loading && !business) {
    return (
      <div className="d-flex justify-content-center py-5">
        <LoadingSpinner />
      </div>
    );
  }

  if (error || !business || !stats) {
    return (
      <div className="container py-5 text-center">
        <h3>{error || "Business profile not found"}</h3>
        <button className="btn btn-primary rounded-pill mt-3" onClick={() => navigate("/")} >
          Go to Homepage
        </button>
      </div>
    );
  }

  return (
    <div className="business-profile-page">
      {/* Cover Image */}
      <div className="cover-container w-100 position-relative">
        {business.cover_image ? (
          <img
            src={business.cover_image}
            alt={`${business.name || business.username} cover`}
            className="w-100 object-fit-cover"
            style={{ height: '300px', objectFit: 'cover' }}
          />
        ) : (
          <div
            className="bg-dark w-100"
            style={{ height: '300px' }}
          />
        )}
      </div>

      {/* Profile Header */}
      <div className="container mt-n5 position-relative z-2">
        <div className="bg-white shadow rounded p-4 d-flex flex-column flex-md-row align-items-center gap-4">
          {/* Avatar */}
          <div className="flex-shrink-0">
            <img src={business.avatar || "/assets/img/us/logos/avatar.png"}
              alt={business.name || business.username}
              className="rounded-circle"
              style={{ width: '120px', height: '120px', objectFit: 'cover' }}
            />
          </div>

          {/* Business Info */}
          <div className="flex-grow-1">
            <h1 className="h4 mb-2">
              {business.name || business.username}
            </h1>

            <BusinessStats2
              productsCount={stats.products_count}
              followersCount={stats.followers_count}
              rating={stats.rating}
            />

            <div className="d-flex flex-wrap gap-3">
              <button className="btn btn-outline-dark rounded-pill">
                <i className="ci-message me-1"></i> Message
              </button>
              <button className="btn btn-primary rounded-pill">
                <i className="ci-heart me-1"></i> Follow
                <span className="badge rounded-pill bg-info1 ms-2 fw-bold">
                  {stats.followers_count}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <nav className="profile-nav bg-light border-top border-bottom py-2 mt-2">
        <div className="container overflow-auto">
          <ul className="nav nav-pills flex-nowrap gap-2" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                type="button"
                className={`nav-link rounded-pill ${activeTab === "products" ? "active" : ""}`}
                onClick={() => setActiveTab("products")}
                role="tab"
              >
                <i className="ci-bag me-2 ms-n1" />
                Products <span className="badge rounded-pill bg-secondary ms-1">{stats.products_count}</span>
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                type="button"
                className={`nav-link rounded-pill ${activeTab === "about" ? "active" : ""}`}
                onClick={() => setActiveTab("about")}
                role="tab"
              >
                <i className="ci-info me-2 ms-n1" />
                About
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                type="button"
                className={`nav-link rounded-pill ${activeTab === "reviews" ? "active" : ""}`}
                onClick={() => setActiveTab("reviews")}
                role="tab"
              >
                <i className="ci-star me-2 ms-n1" />
                Reviews <span className="badge rounded-pill bg-warning ms-1">{stats.rating.toFixed(1)}</span>
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                type="button"
                className={`nav-link rounded-pill ${activeTab === "photos" ? "active" : ""}`}
                onClick={() => setActiveTab("photos")}
                role="tab"
              >
                <i className="ci-camera me-2 ms-n1" />
                Photos
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container py-5">
        <div className="row">
          {/* Left Sidebar */}
          <div className="col-lg-4 mb-5 mb-lg-0">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">About</h5>
                <p className="card-text">
                  {business.about_me || "No description provided"}
                </p>

                {/* {business.website && (
                  <div className="mb-2">
                    <i className="ci-globe me-2"></i>
                    <Link
                      to={
                        business.website.startsWith("http")
                          ? business.website
                          : `https://${business.website}`
                      }
                      target="_blank"
                      rel="noreferrer"
                      className="text-truncate d-inline-block"
                      style={{ maxWidth: "100%" }}
                    >
                      {business.website}
                    </Link>
                  </div>
                )}

                {business.phone && (
                  <div className="mb-2">
                    <Link tel={business.phone}>
                      <i className="ci-phone me-2"></i> {business.phone}
                    </Link>
                  </div>
                )}

                {business.email && (
                  <div className="mb-2">
                    <i className="ci-mail me-2"></i> {business.email}
                  </div>
                )} */}
                {business.website && (
  <div className="mb-2">
    <i className="ci-globe me-2"></i>
    <a
      href={
        business.website.startsWith("http")
          ? business.website
          : `https://${business.website}`
      }
      target="_blank"
      rel="noreferrer"
      className="text-truncate d-inline-block"
      style={{ maxWidth: "100%" }}
    >
      {business.website}
    </a>
  </div>
)}

{business.phone && (
  <div className="mb-2">
    <a href={`tel:${business.phone}`} className="text-decoration-none">
      <i className="ci-phone me-2"></i> {business.phone}
    </a>
  </div>
)}

{business.email && (
  <div className="mb-2">
    <a href={`mailto:${business.email}`} className="text-decoration-none">
      <i className="ci-mail me-2"></i> {business.email}
    </a>
  </div>
)}

                {primaryAddress && (
                  <div className="mb-2">
                    <i className="ci-location me-2"></i> 
                    {primaryAddress.street_address}
                    {primaryAddress.city && `, ${primaryAddress.city.name}`}
                    {primaryAddress.zip_code && `, ${primaryAddress.zip_code}`}
                  </div>
                )}
              </div>
            </div>

            {business.business_hours?.length > 0 && (
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title">Business Hours</h5>
                  <BusinessHours hours={business.business_hours} />
                </div>
              </div>
            )}

            {business.categories?.length > 0 && (
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Categories</h5>
                  <div className="d-flex flex-wrap gap-2">
                    {business.categories.map((category) => (
                      <Link 
                        to={`/categories/${category.slug}`} 
                        key={category.id} 
                        className="badge bg-info rounded-pill text-decoration-none"
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Main Content Area */}
          <div className="col-lg-8">
            {activeTab === "products" && (
              <div className="card">
                <div className="card-body">
                  <h2 className="h4 mb-4">Products</h2>
                  
                  {products.length > 0 ? (
                    <>
                      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                        {products.map((product) => (
                          <div className="col" key={product.id}>
                            <ProductSummary product={product} />
                          </div>
                        ))}

                         {/* Loading Wave Placeholders */}
                         {(loading || loadingMore) && (
                            Array.from({ length: 6 }).map((_, index) => (
                                
                                <LoadingCard key={index} />

                            ))
                        )}
                        
                      </div>
                      
                      {/* Sentinel element for infinite scroll */}
                      {pageMeta.has_next_page && !loadingMore && (
                        <div ref={sentinelRef} style={{ height: "1px" }}></div>
                      )}
                    </>
                  ) : (
                    <div className="text-center py-5">
                      <i className="ci-bag fs-1 text-muted mb-3"></i>
                      <p>No products available yet</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {activeTab === "about" && (
              <BusinessAbout
                description={business.about_me || ""}
                foundedDate={business.created_at}
                categories={business.categories}
              />
            )}

            {activeTab === "reviews" && (
              <BusinessReviews
                businessId={business.id}
                businessType={business.type}
              />
            )}

            {activeTab === "photos" && (
              <div className="card">
                <div className="card-body">
                  <h2 className="h4 mb-4">Business Photos</h2>
                  <div className="text-center py-5">
                    <i className="ci-camera fs-1 text-muted mb-3"></i>
                    <p>No photos available yet</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default SalesPages;