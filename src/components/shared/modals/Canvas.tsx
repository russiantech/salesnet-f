
const Canvas = () => {
  return (
    <>
      <Search/>
      <Basket/>
      <Installer/>
    </>
  )
}

export default Canvas

const Search = () => {
  return (
    <>
      {/* Search Off Canvas */}
      <div className="offcanvas offcanvas-top" id="searchBox" data-bs-backdrop="static" tabIndex="-1">
        <div className="offcanvas-header border-bottom p-0 py-lg-1">
          <form className="container d-flex align-items-center">
            <input
              type="search"
              className="form-control form-control-lg fs-lg border-0 rounded-0 py-3 ps-0"
              placeholder="Search the products"
              data-autofocus="offcanvas"
              data-listener-added_49ba725d="true"
            />
            <button type="reset" className="btn-close fs-lg" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </form>
        </div>
        <div className="offcanvas-body px-0">
          <div className="container text-center">
            <svg
              className="text-body-tertiary opacity-60 mb-4"
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              viewBox="0 0 512 512"
              fill="currentColor"
            >
              {/* SVG path */}
            </svg>
            <h6 className="mb-2">Your search results will appear here</h6>
            <p className="fs-sm mb-0">Start typing in the search field above to see instant search results.</p>
          </div>
        </div>
      </div>
    </>
  );
}

const Basket = () => {
  return (
    <>
      {/* Empty Basket Offcanvas */}
      <div
        className="offcanvas offcanvas-end pb-sm-2 px-sm-2 d-none"
        id="shoppingCart_01"
        tabIndex="-1"
        aria-labelledby="shoppingCartLabel"
        style={{ width: '500px' }}
        aria-modal="true"
        role="dialog"
      >
        <div className="offcanvas-header py-3 pt-lg-4">
          <h4 className="offcanvas-title" id="shoppingCartLabel">
            Shopping Basket
          </h4>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body text-center">
          <svg
            className="d-block mx-auto mb-4"
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            viewBox="0 0 29.5 30"
          >
            {/* SVG path */}
          </svg>
          <h6 className="mb-2">Your shopping basket is currently empty!</h6>
          <p className="fs-sm mb-4">Add item(s) to the cart to proceed with your purchase.</p>
          <button
            type="button"
            className="btn btn-dark rounded-pill"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            Continue shopping
          </button>
        </div>
      </div>

      {/* Shopping cart offcanvas */}
      <div
        className="offcanvas offcanvas-end pb-sm-2 px-sm-2"
        id="shoppingCart"
        tabIndex="-1"
        aria-labelledby="shoppingCartLabel"
        style={{ width: '500px' }}
      >
        {/* Header */}
        <div className="offcanvas-header flex-column align-items-start py-3 pt-lg-4">
          <div className="d-flex align-items-center justify-content-between w-100 mb-3 mb-lg-4">
            <h4 className="offcanvas-title" id="shoppingCartLabel">
              Basket
            </h4>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <p className="fs-sm">
            Buy <span className="text-dark-emphasis fw-semibold">$183</span> more to get{' '}
            <span className="text-dark-emphasis fw-semibold">Free Shipping</span>
          </p>
          <div
            className="progress w-100"
            role="progressbar"
            aria-label="Free shipping progress"
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ height: '4px' }}
          >
            <div className="progress-bar bg-warning rounded-pill" style={{ width: '75%' }}></div>
          </div>
        </div>
        {/* Items */}
        <div className="offcanvas-body d-flex flex-column gap-4 pt-2">
          {/* Item */}
          <div className="d-flex align-items-center">
            <a className="flex-shrink-0" href="/products/techa-products-slug">
              <img src="/assets/img/shop/electronics/thumbs/08.png" width="110" alt="iPhone 14" />
            </a>
            <div className="w-100 min-w-0 ps-2 ps-sm-3">
              <h5 className="d-flex animate-underline mb-2">
                <a
                  className="d-block fs-sm fw-medium text-truncate animate-target"
                  href="/products/techa-products-slug"
                >
                  Apple iPhone 14 128GB White
                </a>
              </h5>
              <div className="h6 pb-1 mb-2">$899.00</div>
              <div className="d-flex align-items-center justify-content-between">
                <div className="count-input rounded-2">
                  <button
                    type="button"
                    className="btn btn-icon btn-sm"
                    data-decrement=""
                    aria-label="Decrement quantity"
                  >
                    <i className="ci-minus"></i>
                  </button>
                  <input
                    type="number"
                    className="form-control form-control-sm"
                    value="1"
                    readOnly
                  />
                  <button
                    type="button"
                    className="btn btn-icon btn-sm"
                    data-increment=""
                    aria-label="Increment quantity"
                  >
                    <i className="ci-plus"></i>
                  </button>
                </div>
                <button
                  type="button"
                  className="btn-close fs-sm"
                  data-bs-toggle="tooltip"
                  data-bs-custom-className="tooltip-sm"
                  data-bs-title="Remove"
                  aria-label="Remove from cart"
                ></button>
              </div>
            </div>
          </div>
          {/* Item */}
          <div className="d-flex align-items-center">
            <a className="flex-shrink-0" href="/products/techa-products-slug">
              <img src="/assets/img/shop/electronics/thumbs/08.png" width="110" alt="iPhone 14" />
            </a>
            <div className="w-100 min-w-0 ps-2 ps-sm-3">
              <h5 className="d-flex animate-underline mb-2">
                <a
                  className="d-block fs-sm fw-medium text-truncate animate-target"
                  href="/products/techa-products-slug"
                >
                  Apple iPhone 14 128GB White
                </a>
              </h5>
              <div className="h6 pb-1 mb-2">$899.00</div>
              <div className="d-flex align-items-center justify-content-between">
                <div className="count-input rounded-2">
                  <button
                    type="button"
                    className="btn btn-icon btn-sm"
                    data-decrement=""
                    aria-label="Decrement quantity"
                  >
                    <i className="ci-minus"></i>
                  </button>
                  <input
                    type="number"
                    className="form-control form-control-sm"
                    value="1"
                    readOnly
                  />
                  <button
                    type="button"
                    className="btn btn-icon btn-sm"
                    data-increment=""
                    aria-label="Increment quantity"
                  >
                    <i className="ci-plus"></i>
                  </button>
                </div>
                <button
                  type="button"
                  className="btn-close fs-sm"
                  data-bs-toggle="tooltip"
                  data-bs-custom-className="tooltip-sm"
                  data-bs-title="Remove"
                  aria-label="Remove from cart"
                ></button>
              </div>
            </div>
          </div>
          {/* Additional items */}
        </div>
        {/* Footer */}
        <div className="offcanvas-header flex-column align-items-start">
          <div className="d-flex align-items-center justify-content-between w-100 mb-3 mb-md-4">
            <span className="text-light-emphasis">Subtotal:</span>
            <span className="h6 mb-0">$2,317.00</span>
          </div>
          <div className="d-flex w-100 gap-3">
            <a className="btn btn-lg btn-secondary w-100" href="checkout-v1-cart.html">
              View cart
            </a>
            <a className="btn btn-lg btn-primary w-100" href="checkout-v1-delivery-1.html">
              Checkout
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

const Installer = () => {
  return (
    <div className="offcanvas offcanvas-bottom show" id="offcanvasBottom" tabIndex="-1" aria-labelledby="offcanvasBottomLabel">
      <div className="offcanvas-header border-bottom">
        <h5 className="offcanvas-title" id="offcanvasBottomLabel">
          <a className="navbar-brand pt-0" href="./">
            <span className="d-flex flex-shrink-0 text-primary rtl-flip me-2">
              <div className="flex-shrink-0 border rounded-circle" style={{ width: '40px' }}>
                <div className="ratio ratio-1x1 rounded-circle overflow-hidden">
                  <img src="/assets/img/us/logos/favicon.svg" alt="Avatar" />
                </div>
              </div>
            </span>
            Salesnet
          </a>
        </h5>
        <button className="btn-close" type="button" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body d-flex flex-column align-items-center justify-content-center text-center">
        <p className='lead'>Install Salesnet - Internet of sales - Sell like crazy charm.</p>
        <div className="d-flex flex-column align-items-center gap-3 pb-4 mb-3 mb-lg-4">
          <button 
            id="install" 
            type="button" 
            className="btn btn-dark rounded w-100 px-3 py-2 btn-lg btn-info rounded-pill" 
            style={{ maxWidth: '250px', fontSize: '1rem' }}
          >
            {/* <i className="ci-arrow-down-circle ms-2 me-2"></i> Click to install. */}
            <i className="ci-download ms-2 me-2"></i>Add to Home Screen
          </button>
        </div>
      </div>
    </div>
  );
};
