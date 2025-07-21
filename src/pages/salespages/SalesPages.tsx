// v5
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
import Breadcrumb from "../../components/shared/Breadcrumb";
import { FollowButton } from "../../components/shared/FollowButton";

interface Address {
  id: number;
  street_address: string;
  city: { id: number; name: string };
  zip_code: string;
  is_primary: boolean;
}

interface BusinessStatsData {
  products_count: number;
  followers_count: number;
  rating: number;
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
  stats: BusinessStatsData;
  is_following: boolean;
  is_own_profile: boolean;
}

interface ProductPageMeta {
  current_page_number: number;
  total_pages_count: number;
  has_next_page: boolean;
}

const SalesPages = () => {
  const { username, page_slug } = useParams();
  const [business, setBusiness] = useState<BusinessProfile | null>(null);
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

  // FollowButton states
  const [followingStatus, setFollowingStatus] = useState(false);
  const [followersCount, setFollowersCount] = useState(0);

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

      await fetchProducts(businessUsername);
    };

    fetchBusinessData();
  }, [fetchBusinessProfile, fetchProducts]);

  // Update follow status when business data is available
  useEffect(() => {
    if (business) {
      setFollowingStatus(business.is_following);
      setFollowersCount(business.stats.followers_count);
    }
  }, [business]);

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

  // Handle follow count updates
  const handleFollowChange = (isFollowing: boolean, newCount: number) => {
    setFollowingStatus(isFollowing);
    setFollowersCount(newCount);
    
    // Update business stats to keep everything in sync
    if (business) {
      setBusiness({
        ...business,
        stats: {
          ...business.stats,
          followers_count: newCount
          // followers_count: business.stats.follows_count
        },
        is_following: isFollowing
      });
    }
  };

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

  if (error || !business) {
    return (
      <div className="container py-5 text-center">
        <h3>{error || "Fetching sales page..."}</h3>
        <button className="btn btn-primary rounded-pill mt-3" onClick={() => navigate("/products")} >
          Browse Salesnet.
        </button>
      </div>
    );
  }

   // Breadcrumb navigation
  const getBreadcrumb = () => {
    if (username) {
      return (
        <Link to="/users" className="text-white text-decoration-none">
          Users
        </Link>
      );
    } else if (page_slug) {
      return (
        <Link to="/pages" className="text-white text-decoration-none">
          Pages
        </Link>
      );
    }
    return null;
  };

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

        {/* Back Button and Breadcrumb */}
        <div className="position-absolute top-0 start-0 p-3 d-flex align-items-center">
          <button className="btn btn-light text-warning btn-sm me-2 badge rounded-pill"
            onClick={() => navigate(-1)}
            aria-label="Go back"
          >
             <i className="ci-corner-up-left fw-bold me-2 fw-bold"></i>
          </button>
          
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <Link to="/" className="text-white text-decoration-none">
                  Home
                </Link>
              </li>
              <li className="breadcrumb-item">
                {getBreadcrumb()}
              </li>
              <li className="breadcrumb-item active text-white" aria-current="page">
                {business.name || business.username}
              </li>
            </ol>
          </nav>
        </div>
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
              productsCount={business.stats.products_count}
              followersCount={followersCount}
              rating={business.stats.rating}
            />

            <div className="d-flex flex-wrap gap-3">
              <button className="btn btn-outline-dark rounded-pill">
                <i className="ci-message me-1"></i> Message
              </button>

              <FollowButton
                businessId={business.id}
                businessType={business.type}
                businessName={business.name}
                initialFollowing={followingStatus}
                initialFollowersCount={followersCount}
                isOwnProfile={business.is_own_profile}
                onFollowChange={handleFollowChange}
              />

            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <nav className="profile-nav bg-light border-top border-bottom py-2 mt-2 overflow-x-auto" data-simplebar data-simplebar-auto-hide="false">
        <div className="container">
          <ul className="nav nav-pills flex-nowrap gap-2" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                type="button"
                className={`nav-link rounded-pill ${activeTab === "products" ? "active" : ""}`}
                onClick={() => setActiveTab("products")}
                role="tab"
              >
                <i className="ci-bag me-2 ms-n1" />
                Products <span className="badge rounded-pill bg-secondary ms-1">{business.stats.products_count}</span>
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
                Reviews <span className="badge rounded-pill bg-warning ms-1">{business.stats.rating.toFixed(1)}</span>
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
                    <Link to={`tel:${business.phone}`} className="text-decoration-none">
                      <i className="ci-phone me-2"></i> {business.phone}
                    </Link>
                  </div>
                )}

                {business.email && (
                  <div className="mb-2">
                    <Link to={`mailto:${business.email}`} className="text-decoration-none text-default">
                      <i className="ci-mail me-2 text-warning"></i> {business.email}
                    </Link>
                  </div>
                )}

                {primaryAddress && (
                  <div className="mb-2">
                    <i className="ci-map-pin me-2 text-success"></i>
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
              <div className="card mb-4">
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
                     <div className="vstack gap-3 gap-md-4 mt-n3 overflow-y-auto pe-3" data-simplebar data-simplebar-auto-hide="false" style={{maxWidth: "100%", maxHeight: "650px"}}>
                      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                        {products.map((product, i) => (
                          <div className="col" key={i}>
                            <ProductSummary product={product} />
                          </div>
                        ))}

                         {/* Loading Wave Placeholders */}
                         {(loading || loadingMore) && (
                            Array.from({ length: 6 }).map((_, index) => (
                              <div className="col" key={`loading-${index}`}>
                                <LoadingCard />
                              </div>
                            ))
                        )}
                        
                      </div>
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