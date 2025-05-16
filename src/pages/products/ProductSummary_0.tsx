import {Link, NavLink} from 'react-router-dom'

const ProductSummary1 = (props) => (
    <>
        <div className="col-lg-4 col-md-6 mb-4" id={props.id}>
            <div className="card h-100">
                <Link href="/"><img className="card-img-top" style={{height: "250px"}} src={props.image} alt=""/></Link>
                <div className="card-body">
                    <h4 className="card-title">
                        <NavLink to={props.url}>{props.name}</NavLink>
                    </h4>
                    <h5>Price :${props.price}</h5>
                    <p className="card-text">{props.description}</p>
                </div>
                <div className="card-footer">

                    <NavLink className="btn btn-primary" style={{float: "right"}} to={props.url}>
                        Details
                    </NavLink>
                </div>
            </div> 
        </div>
    </>
)

// import React from 'react';

const ProductSummary2 = ({ image, name, slug, price, id, discount, originalPrice }) => {
    return (
        <div className="product-card animate-underline hover-effect-opacity bg-body rounded - col">
            <div className="position-relative">
                <div className="position-absolute top-0 end-0 z-2 hover-effect-target opacity-0 mt-3 me-3">
                    <div className="d-flex flex-column gap-2">
                        <button type="button" className="btn btn-icon btn-secondary animate-pulse d-none d-lg-inline-flex" aria-label="Add to Wishlist">
                            <i className="ci-heart fs-base animate-target"></i>
                        </button>
                        <button type="button" className="btn btn-icon btn-secondary animate-rotate d-none d-lg-inline-flex" aria-label="Compare">
                            <i className="ci-refresh-cw fs-base animate-target"></i>
                        </button>
                    </div>
                </div>
                <div className="dropdown d-lg-none position-absolute top-0 end-0 z-2 mt-2 me-2">
                    <button type="button" className="btn btn-icon btn-sm btn-secondary bg-body" data-bs-toggle="dropdown" aria-expanded="false" aria-label="More actions">
                        <i className="ci-more-vertical fs-lg"></i>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end fs-xs p-2" style={{ minWidth: 'auto' }}>
                        <li>
                            <Link className="dropdown-item" to="#!">
                                <i className="ci-heart fs-sm ms-n1 me-2"></i>
                                Add to Wishlist
                            </Link>
                        </li>
                        <li>
                            <Link className="dropdown-item" to="#!">
                                <i className="ci-refresh-cw fs-sm ms-n1 me-2"></i>
                                Compare
                            </Link>
                        </li>
                    </ul>
                </div>
                <Link className="d-block rounded-top overflow-hidden p-3 p-sm-4" to={`/products/${slug}`}>
                    {discount && (
                        <span className="badge bg-danger position-absolute top-0 start-0 mt-2 ms-2 mt-lg-3 ms-lg-3">-{discount}%</span>
                    )}
                    <div className="ratio" style={{ '--cz-aspect-ratio': 'calc(240 / 258 * 100%)' }}>
                        <img src={image} alt={name} className='img img-fluid rounded-2' />
                    </div>
                </Link>
            </div> 
            <div className="w-100 min-w-0 px-1 pb-2 px-sm-3 pb-sm-3">
                <div className="d-flex align-items-center gap-2 mb-2">
                    <div className="d-flex gap-1 fs-xs">
                        {/* Assuming you have a way to get the rating */}
                        <i className="ci-star-filled text-warning"></i>
                        <i className="ci-star-filled text-warning"></i>
                        <i className="ci-star-filled text-warning"></i>
                        <i className="ci-star-half text-warning"></i>
                        <i className="ci-star text-body-tertiary opacity-75"></i>
                    </div>
                    <span className="text-body-tertiary fs-xs">(123)</span>
                </div>
                <h3 className="pb-1 mb-2">
                    <Link className="d-block fs-sm fw-medium text-truncate" to={`/products/${slug}`}>
                        <span className="animate-target">{name}</span>
                    </Link>
                </h3>
                <div className="d-flex align-items-center justify-content-between">
                    <div className="h5 lh-1 mb-0">
                        ${price} <del className="text-body-tertiary fs-sm fw-normal">${originalPrice}</del>
                    </div>
                    <button type="button" className="product-card-button btn btn-icon btn-secondary animate-slide-end ms-2" aria-label="Add to Cart">
                        <i className="ci-shopping-cart fs-base animate-target"></i>
                    </button>
                </div>
            </div>
            <div className="product-card-details d-none position-absolute top-100 start-0 w-100 bg-body rounded-bottom shadow mt-n2 p-3 pt-1">
                <span className="position-absolute top-0 start-0 w-100 bg-body mt-n2 py-2"></span>
                {/* <ul className="list-unstyled d-flex flex-column gap-2 m-0">
                    <li className="d-flex align-items-center">
                        <span className="fs-xs">Display:</span>
                        <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2"></span>
                        <span className="text-dark-emphasis fs-xs fw-medium text-end">OLED 1440x1600</span>
                    </li>
                    <li className="d-flex align-items-center">
                        <span className="fs-xs">Graphics:</span>
                        <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2"></span>
                        <span className="text-dark-emphasis fs-xs fw-medium text-end">Adreno 540</span>
                    </li>
                    <li className="d-flex align-items-center">
                        <span className="fs-xs">Sound:</span>
                        <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2"></span>
                        <span className="text-dark-emphasis fs-xs fw-medium text-end">2x3.5mm jack</span>
                    </li>
                    <li className="d-flex align-items-center">
                        <span className="fs-xs">Input:</span>
                        <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2"></span>
                        <span className="text-dark-emphasis fs-xs fw-medium text-end">4 built-in cameras</span>
                    </li>
                </ul> */}
            </div>
        </div>
    );
};

// export default ProductSummary1;

// 
// import { Link } from 'react-router-dom';

const ProductSummary = ({ image, name, slug, price, id, discount, originalPrice }) => {
    return (
        <div className="col">
            <div className="product-card animate-underline hover-effect-opacity bg-body rounded">
                <div className="position-relative">
                    <div className="position-absolute top-0 end-0 z-2 hover-effect-target opacity-0 mt-3 me-3">
                        <div className="d-flex flex-column gap-2">
                            <button type="button" className="btn btn-icon btn-secondary animate-pulse d-none d-lg-inline-flex" aria-label="Add to Wishlist">
                                <i className="ci-heart fs-base animate-target" />
                            </button>
                            <button type="button" className="btn btn-icon btn-secondary animate-rotate d-none d-lg-inline-flex" aria-label="Compare">
                                <i className="ci-refresh-cw fs-base animate-target" />
                            </button>
                        </div>
                    </div>
                    <div className="dropdown d-lg-none position-absolute top-0 end-0 z-2 mt-2 me-2">
                        <button type="button" className="btn btn-icon btn-sm btn-secondary bg-body" data-bs-toggle="dropdown" aria-expanded="false" aria-label="More actions">
                            <i className="ci-more-vertical fs-lg" />
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end fs-xs p-2" style={{ minWidth: 'auto' }}>
                            <li>
                                <Link className="dropdown-item" to="#!">
                                    <i className="ci-heart fs-sm ms-n1 me-2" />
                                    Add to Wishlist
                                </Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" to="#!">
                                    <i className="ci-refresh-cw fs-sm ms-n1 me-2" />
                                    Compare
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <Link className="d-block rounded-top overflow-hidden p-3 p-sm-4" to={`/products/${slug}`}>
                        {discount && (
                            <span className="badge bg-danger position-absolute top-0 start-0 mt-2 ms-2 mt-lg-3 ms-lg-3">-{discount}%</span>
                        )}
                        <div className="ratio" style={{ '--cz-aspect-ratio': 'calc(240 / 258 * 100%)' }}>
                            {/* <img src={image} alt={name} className='img img-fluid rounded-2' /> */}
                            <img src={image || `/static/images/products/0.webp`} alt={name} className='img img-fluid rounded-2' />
                        </div>
                    </Link>
                </div>
                <div className="w-100 min-w-0 px-1 pb-2 px-sm-3 pb-sm-3">
                    <div className="d-flex align-items-center gap-2 mb-2">
                        <div className="d-flex gap-1 fs-xs">
                            <i className="ci-star-filled text-warning" />
                            <i className="ci-star-filled text-warning" />
                            <i className="ci-star-filled text-warning" />
                            <i className="ci-star text-body-tertiary opacity-75" />
                        </div>
                        <span className="text-body-tertiary fs-xs">(123)</span>
                    </div>
                    <h3 className="pb-1 mb-2">
                        <Link className="d-block fs-sm fw-medium text-truncate" to={`/products/${slug}`}>
                            <span className="animate-target">{name}</span>
                        </Link>
                    </h3>
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="h5 lh-1 mb-0">
                            ${price} <del className="text-body-tertiary fs-sm fw-normal">${originalPrice}</del>
                        </div>
                        <button type="button" className="product-card-button btn btn-icon btn-secondary animate-slide-end ms-2" aria-label="Add to Cart">
                            <i className="ci-shopping-cart fs-base animate-target" />
                        </button>
                    </div>
                </div>
                <div className="product-card-details position-absolute top-100 start-0 w-100 bg-body rounded-bottom shadow mt-n2 p-3 pt-1">
                    <span className="position-absolute top-0 start-0 w-100 bg-body mt-n2 py-2" />
                    <ul className="list-unstyled d-flex flex-column gap-2 m-0">
                        <li className="d-flex align-items-center">
                            <span className="fs-xs">Display:</span>
                            <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                            <span className="text-dark-emphasis fs-xs fw-medium text-end">OLED 1440x1600</span>
                        </li>
                        <li className="d-flex align-items-center">
                            <span className="fs-xs">Graphics:</span>
                            <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                            <span className="text-dark-emphasis fs-xs fw-medium text-end">Adreno 540</span>
                        </li>
                        <li className="d-flex align-items-center">
                            <span className="fs-xs">Sound:</span>
                            <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                            <span className="text-dark-emphasis fs-xs fw-medium text-end">2x3.5mm jack</span>
                        </li>
                        <li className="d-flex align-items-center">
                            <span className="fs-xs">Input:</span>
                            <span className="d-block flex-grow-1 border-bottom border-dashed px-1 mt-2 mx-2" />
                            <span className="text-dark-emphasis fs-xs fw-medium text-end">4 built-in cameras</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ProductSummary;
