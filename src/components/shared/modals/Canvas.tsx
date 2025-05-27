import { Link, NavLink } from "react-router-dom";

const Canvas = () => {
  return (
    <>
      {/* <Search /> */}
      {/* <Basket /> */}
      {/* <Installer /> */}
    </>
  )
}

export default Canvas


const Installer = () => {
  return (
    <div className="offcanvas offcanvas-bottom" id="offcanvasBottom" tabIndex={-1} aria-labelledby="offcanvasBottomLabel">
      <div className="offcanvas-header border-bottom">
        <h5 className="offcanvas-title" id="offcanvasBottomLabel">
          <Link className="navbar-brand pt-0" to="#">
            <span className="d-flex flex-shrink-0 text-primary rtl-flip me-2">
              <div className="flex-shrink-0 border rounded-circle" style={{ width: '40px' }}>
                <div className="ratio ratio-1x1 rounded-circle overflow-hidden">
                  <img src="/assets/img/us/logos/favicon.svg" alt="Avatar" />
                </div>
              </div>
            </span>
            Salesnet
          </Link>
        </h5>
        <button className="btn-close" type="button" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body d-flex flex-column align-items-center justify-content-center text-center">
        <p className='lead'>Install Salesnet - Internet of sales - Sell like crazy charm.</p>
        <div className="d-flex flex-column align-items-center gap-3 pb-4 mb-3 mb-lg-4">
          <button id="install" type="button" className="btn btn-dark rounded w-100 px-3 py-2 btn-lg btn-info rounded-pill" style={{ maxWidth: '250px', fontSize: '1rem' }} >
            {/* <i className="ci-arrow-down-circle ms-2 me-2"></i> Click to install. */}
            <i className="ci-download ms-2 me-2"></i>Add to Home Screen
          </button>
        </div>
      </div>
    </div>
  );
};
