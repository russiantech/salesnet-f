import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ProductAxiosService } from '../../services/net/ProductAxiosService';
import './Products.css';
import ProductRecommendations from './ProductRecommendations';
import { formatDate } from '../../utils/dateUtils';
import ProductReviewForm from './ProductReviewForm';
import LoadingSpinner from '../../components/shared/LoadingSpinner';
import Breadcrumb from '../../components/shared/Breadcrumb';

interface ProductOwner {
    id: number;
    name: string;
    slug: string;
    avatar?: string;
    type: 'user' | 'page';
  }
  
  interface ProductDetails {
    id: number;
    name: string;
    price: string;
    description: string;
    image_urls: string[];
    reviews_count: number;
    categories: Array<{ id: number; name: string }>;
    users: any[];
    pages: any[];
    created_at: string;
    tags: string[];
  }

const ProductDetails = () => {

  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<ProductDetails | null>(null);
  const [owner, setOwner] = useState<ProductOwner | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProductDetails = async () => {
          try {
            const response = await ProductAxiosService.getBySlug(slug!);
            const data = response.data;
            setProduct(data);
            
            // Determine owner (page or user)
            const ownerData = data.pages?.length > 0 
              ? { ...data.pages[0], type: 'page' }
              : data.users?.length > 0 
                ? { ...data.users[0], type: 'user' }
                : null;
                
            setOwner(ownerData ? {
              id: ownerData.id,
              name: ownerData.name || ownerData.username,
              slug: ownerData.slug || ownerData.username,
              avatar: ownerData.avatar,
              type: ownerData.type
            } : null);
    
          } catch (err) {
            setError('Failed to load product details');
          } finally {
            setLoading(false);
          }
        };
    
        fetchProductDetails();
      }, [slug]);


    const handleSocialShare = (platform: string) => {
        const shareUrl = window.location.href;
        const text = `Check out ${product?.name} on our platform - ${product?.description}`;

        switch(platform) {
            
        case 'facebook':
            window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank');
            break;
        case 'instagram':
            alert("Instagram sharing is not supported directly. Please copy the link.");
            break;
        case 'twitter':
            window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(shareUrl)}`, '_blank');
            break;
        case 'linkedin':
            window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(product?.name || '')}`, '_blank');
            break;
        case 'copy':
            navigator.clipboard.writeText(shareUrl);
            alert('Link copied to clipboard!');
            break;
        }
    };

    if (loading) {
        return (
           <LoadingSpinner />
        )
    }

    if (error) {
        return <div>{error}</div>; // Error state
    }

    return (
        <>
        <main className="content-wrapper">
        {/* <main className="content-wrapper px-3 ps-lg-5 pe-lg-4 mx-auto">     */}
        {/* <main className="content-wrapper mx-auto">     */}
        {/* <main className="content-wrapper w-100 px-3 ps-lg-5 pe-lg-4 mx-auto" style={{"maxWidth": "1920px"}}>  */}
            
            <section className="container pb-2 pb-sm-3 pb-md-4 pb-lg-5 mb-xxl-3">
                
                {/* <ol className="breadcrumb pt-3 mt-2 mt-md-3 mb-md-4">
                    <li className="breadcrumb-item">
                        <a href="/">Home</a>
                    </li>
                    <li className="breadcrumb-item">
                        <a href="/pages">Pages</a>
                    </li>
                    <li aria-current="page" className="breadcrumb-item active">
                        products
                    </li>
                </ol> */}
                
                <Breadcrumb 
                    items={[
                    { label: 'Home', path: '/' },
                    { label: 'Products', path: '/products' },
                    { label: product?.name || slug, path: `/products/${slug}` }
                    ]} 
                />
                

                <div className="row">
                    <div className="col-lg-8 col-xl-9">
                      
                        <h1 className="h3 mb-sm-4">
                            <span onClick={() => navigate(-1)} className="btn btn-sm btn-dark rounded-pill animate-pulse text-dark bg-info-subtle" type="button">
                                <i className="ci-arrow-up-left fs-md"></i>
                            </span> 
                            {product.name} 
                            </h1>

                        <div className="d-flex flex-column flex-md-row align-items-md-center gap-3 gap-md-4">

                              {owner && (
                                <div className="nav align-items-center gap-2 fs-sm">
                                <Link  to={`/${owner.type === 'page' ? 'pages' : 'users'}/${owner.slug}`} className="nav-link text-body gap-1 p-0" >
                                    <div className="flex-shrink-0 border rounded-circle" style={{ width: "32px" }}>
                                    <img alt={owner.name} src={owner.avatar || '/assets/img/us/logos/avatar.png'} className="ratio ratio-1x1 rounded-circle" />
                                    </div>
                                    {owner.name}
                                </Link>
                                <span className="text-body-secondary">
                                    Listed {formatDate(product!.created_at)}
                                </span>
                                </div>
                            )}

                            <div className="d-flex justify-content-between flex-grow-1 gap-4">
                            {product.reviews_count > 0 && (
                                <span className="badge rounded-pill text-info bg-info-subtle d-inline-flex align-items-center fs-sm">
                                    {product.reviews_count} sales
                                </span>
                            )}
                                <div className="d-flex gap-2">
                                    <button className="btn btn-sm btn-dark bg-dark rounded-pill animate-pulse fw-bold">
                                        ${product.price}
                                    </button>

                                    <button className="btn btn-sm btn-info rounded-pill animate-pulse text-info bg-info-subtle " type="button">
                                        <i className="ci-shopping-cart animate-target fs-sm ms-n1 me-1" />
                                        Basket
                                    </button>
                                    
                                    <button className="btn btn-sm btn-secondary rounded-pill animate-pulse" type="button">
                                        <i className="ci-heart animate-target fs-sm ms-n1 me-1" />
                                        {product.reviews_count}
                                    </button>
                                    <Link className="btn btn-sm btn-secondary rounded-pill animate-scale" to="#comments">
                                        <i className="ci-message-circle animate-target fs-sm ms-n1 me-1" />
                                        {product.reviews_count}
                                    </Link>
                                    <div className="dropdown">
                                        <button aria-expanded="false" aria-label="Share" className="btn btn-icon btn-sm btn-secondary animate-scale rounded-circle" 
                                        data-bs-toggle="dropdown" type="button">
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

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row pb-5 pt-4">
                    <div className="col-lg-8 col-xl-9">
                        
                        <div className="vstack gap-3">

                           // Replace media display in ProductDetailsPage
<div className="swiper swiper-initialized swiper-horizontal">
  <div className="swiper-wrapper">
    {product.image_urls.map((url, index) => (
      <div className="swiper-slide" key={index}>
        <div className="ratio ratio-1x1">
          <a
            className="glightbox"
            data-gallery="product-gallery"
            href={url}
          >
            <img
              src={url}
              alt={`Product view ${index + 1}`}
              className="img-fluid"
            />
          </a>
        </div>
      </div>
    ))}
  </div>
  
  {/* Navigation buttons */}
  <div className="position-absolute top-50 start-0 z-2 translate-middle-y">
    <button className="btn btn-prev btn-icon btn-outline-secondary bg-body rounded-circle">
      <i className="ci-chevron-left"></i>
    </button>
  </div>
  <div className="position-absolute top-50 end-0 z-2 translate-middle-y">
    <button className="btn btn-next btn-icon btn-outline-secondary bg-body rounded-circle">
      <i className="ci-chevron-right"></i>
    </button>
  </div>
</div>

{/* Thumbnails */}
<div className="swiper swiper-thumbs pt-2 mt-1">
  <div className="swiper-wrapper">
    {product.image_urls.map((url, index) => (
      <div className="swiper-slide" key={index}>
        <div className="ratio ratio-1x1" style={{ maxWidth: '94px' }}>
          <img
            src={url}
            className="swiper-thumb-img"
            alt={`Thumbnail ${index + 1}`}
          />
        </div>
      </div>
    ))}
  </div>
</div>

                        </div>

                        <section className="container pt-5 mt-2 mt-sm-3 mt-lg-4 mt-xl-5">
                            <ul className="nav nav-underline flex-nowrap border-bottom" role="tablist">
                                <li className="nav-item me-md-1" role="presentation">
                                    <button aria-controls="description-tab-pane" aria-selected="true" className="nav-link active badge rounded-pill text-info bg-info-subtle p-2" data-bs-target="#description-tab-pane" data-bs-toggle="tab" id="description-tab" role="tab" type="button">
                                        Description
                                    </button>
                                </li>
                                <li className="nav-item me-md-1" role="presentation">
                                    <button aria-controls="delivery-tab-pane" aria-selected="false" className="nav-link badge rounded-pill text-info bg-info-subtle p-2" data-bs-target="#delivery-tab-pane" data-bs-toggle="tab" id="delivery-tab" role="tab" tabIndex={-1} type="button">
                                        Delivery
                                        <span className="d-none d-md-inline"> and returns</span>
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button aria-controls="reviews-tab-pane" aria-selected="false" className="nav-link badge rounded-pill text-info bg-info-subtle p-2" data-bs-target="#reviews-tab-pane" data-bs-toggle="tab" id="reviews-tab" role="tab" tabIndex={-1} type="button">
                                        Reviews
                                        <span className="d-none d-md-inline"> ({product.reviews_count})</span>
                                    </button>
                                </li>
                            </ul>
                            <div className="tab-content pt-4 mt-sm-1 mt-md-3">
                                <div aria-labelledby="description-tab" className="tab-pane fade active show" id="description-tab-pane" role="tabpanel">
                                    <div className="row">
                                        <h2 className="h4 pt-2 mt-md-2 mb-lg-2">Overview</h2>
                                        {/* <p>{JSON.stringify(product)}</p> */}
                                        <p>{product?.description}</p>
                                        <h2 className="h4 pt-5 mt-md-2 mb-lg-4">Highlights</h2>
                                        <ul className="mb-0">
                                            <li>If you need more details regarding this {product.name}</li>
                                            <li>Kindly get in touch with me.</li>
                                            <li>I'm more than happy to help you get it.</li>
                                        </ul>
                                    </div>
                                </div>
                                {/* Delivery and Returns */}
                                <div aria-labelledby="delivery-tab" className="tab-pane fade fs-sm" id="delivery-tab-pane" role="tabpanel">
                                    <div className="row row-cols-1 row-cols-md-2">
                                        <div className="col mb-3 mb-md-0">
                                            <div className="pe-lg-2 pe-xl-3">
                                                <h6>Delivery</h6>
                                                <p>We strive to deliver your product as quickly as possible. Our estimated delivery times are as follows:</p>
                                                <ul className="list-unstyled">
                                                    <li>Standard delivery: <span className="text-dark-emphasis fw-semibold">Within 3-7 business days</span></li>
                                                    <li>Express delivery: <span className="text-dark-emphasis fw-semibold">Within 1-3 business days</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="ps-lg-2 ps-xl-3">
                                                <h6>Returns</h6>
                                                <p>If you are not happy with your purchase, you can return it within 30 days for a full refund or exchange.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Reviews */}
                                <div aria-labelledby="reviews-tab" className="tab-pane fade" id="reviews-tab-pane" role="tabpanel">
                                    <div className="d-sm-flex align-items-center justify-content-between border-bottom pb-2 pb-sm-3">
                                        <div className="mb-3 me-sm-3">
                                            <h2 className="h5 pb-2 mb-1">Customer reviews</h2>
                                            <div className="d-flex align-items-center text-body-secondary fs-sm">
                                                <div className="d-flex gap-1 me-2">
                                                    <i className="ci-star-filled text-warning" />
                                                    <i className="ci-star-filled text-warning" />
                                                    <i className="ci-star-filled text-warning" />
                                                    <i className="ci-star-filled text-warning" />
                                                    <i className="ci-star text-body-tertiary opacity-75" />
                                                </div>
                                                Based on {product.reviews_count} reviews
                                            </div>
                                        </div>
                                        <button className="btn btn-outline-dark mb-3" data-bs-target="#reviewForm" data-bs-toggle="modal" type="button">
                                            Leave a review
                                        </button>
                                         {/* Modal for the review form */}
                                         {product && (
                                            <ProductReviewForm 
                                                productSlug={product.slug} // Use product.slug instead
                                                onReviewSubmitted={() => {
                                                    console.log('Review submitted, refresh reviews.');
                                                }}
                                            />
                                        )}

                                    </div>
                                    {/* Review List */}
                                    <div className="bg-body-tertiary rounded-4 p-4 p-sm-5">
                                        {/* Reviews would be dynamically generated here */}
                                       
                                        <div className="vstack gap-3 gap-md-4 mt-n3">

                                            {product.reviews && product.reviews.length > 0 ? (
                                                product.reviews.map((review) => (
                                                    <div key={review.id} className="mt-3">
                                                        <div className="d-flex align-items-center justify-content-between gap-3 mb-3">
                                                            <div className="d-flex align-items-center">
                                                                <div
                                                                    className="ratio ratio-1x1 flex-shrink-0 bg-body-secondary rounded-circle overflow-hidden"
                                                                    style={{ width: "40px" }}>
                                                                    {/* <img alt="Avatar" src={`/assets/img/pages/products/comments/${review.user_id}.jpg`} /> */}
                                                                    <img alt={review.username} src={review.avatar || '/assets/img/us/logos/avatar.png'} />
                                                                </div>
                                                                <div className="ps-2 ms-1">
                                                                    <div className="fs-sm fw-semibold text-dark-emphasis mb-1">
                                                                        {/* Assuming user names are mapped from user IDs */}
                                                                        {review.name || review.username}
                                                                    </div>
                                                                    <div className="fs-xs text-body-secondary">
                                                                        {/* {new Date(review.created_at).toLocaleDateString()} */}
                                                                        {new Date(review.created_at).toLocaleDateString('en-US', { year: 'numeric',  month: 'long',  day: 'numeric' })}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex gap-2">
                                                                <button
                                                                    className="btn btn-sm btn-secondary bg-body border-0 animate-pulse rounded-pill"
                                                                    type="button">
                                                                    <i className="ci-heart animate-target fs-sm ms-n1 me-1" />
                                                                    {review.rating}
                                                                </button>
                                                                <button
                                                                    aria-label="Reply"
                                                                    className="btn btn-icon btn-sm btn-secondary bg-body border-0 animate-slide-end rounded-circle"
                                                                    type="button">
                                                                    <i className="ci-corner-up-right animate-target fs-sm" />
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <p className="fs-sm mb-0 text-break">{review.comment}</p>
                                                    </div>
                                                ))
                                            ) : (
                                                <p className="fs-sm text-body-secondary">No comments available for this product just yet.</p>
                                            )}
                                        </div>

                                        {/*  */}
                                    </div>
                                </div>
                            </div>
                        </section>
                        <h2 className="h4 pt-5 mt-md-2 mb-lg-4">Tags</h2>
                        <div className="d-flex flex-wrap gap-2 mt-n1">
                            {product.tags && product.tags.length > 0 ? (
                                product.tags.slice(1).map((tag, index) => (
                                    <Link key={index} className="btn btn-sm btn-secondary rounded-pill fs-sm text-body-emphasis"
                                        to={`/products/${tag}`}>
                                        {tag}
                                    </Link>
                                ))
                            ) : (
                                <>
                                    <Link className="btn btn-sm btn-secondary rounded-pill fs-sm text-body-emphasis" to="/products">New Goods</Link>
                                    <Link className="btn btn-sm btn-secondary rounded-pill fs-sm text-body-emphasis" to="/products">Go to products</Link>
                                    <Link className="btn btn-sm btn-secondary rounded-pill fs-sm text-body-emphasis" to="/products">Recharge</Link>
                                    <Link className="btn btn-sm btn-secondary rounded-pill fs-sm text-body-emphasis" to="/products">Digital</Link>
                                    <Link className="btn btn-sm btn-secondary rounded-pill fs-sm text-body-emphasis" to="/products">Physical</Link>
                                </>
                            )}
                        </div>

                    </div>
                </div>
            </section>

            <ProductRecommendations />

        </main>
        </>
    );
}

export default ProductDetails;
