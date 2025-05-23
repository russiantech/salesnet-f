// import ManualInstallButton from "../../components/shared/ManualInstallButton"

const Brands = () => {
    return (
        <section className="container pt-4 pt-md-5 pb-5 mt-sm-2 mb-2 mb-sm-3 mb-md-4 mb-lg-5">
            <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 g-3 g-md-4 g-lg-3 g-xl-4">
                <div className="col">
                    
                 
                        {/* <ManualInstallButton /> */}
                    <a
                        className="btn btn-outline-secondary w-100 rounded-4 p-3"
                        href="#"
                    >
                        <img
                            src="assets/img/shop/electronics/brands/apple-light-mode.svg"
                            className="d-none-dark"
                            alt="Apple"
                        />
                        <img
                            src="assets/img/shop/electronics/brands/apple-dark-mode.svg"
                            className="d-none d-block-dark"
                            alt="Apple"
                        />
                    </a>
                </div>
                <div className="col">
                    <a
                        className="btn btn-outline-secondary w-100 rounded-4 p-3"
                        href="#"
                    >
                        <img
                            src="assets/img/shop/electronics/brands/motorola-light-mode.svg"
                            className="d-none-dark"
                            alt="Apple"
                        />
                        <img
                            src="assets/img/shop/electronics/brands/motorola-dark-mode.svg"
                            className="d-none d-block-dark"
                            alt="Apple"
                        />
                    </a>
                </div>
                <div className="col">
                    <a
                        className="btn btn-outline-secondary w-100 rounded-4 p-3"
                        href="#"
                    >
                        <img
                            src="assets/img/shop/electronics/brands/canon-light-mode.svg"
                            className="d-none-dark"
                            alt="Apple"
                        />
                        <img
                            src="assets/img/shop/electronics/brands/canon-dark-mode.svg"
                            className="d-none d-block-dark"
                            alt="Apple"
                        />
                    </a>
                </div>
                <div className="col">
                    <a
                        className="btn btn-outline-secondary w-100 rounded-4 p-3"
                        href="#"
                    >
                        <img
                            src="assets/img/shop/electronics/brands/samsung-light-mode.svg"
                            className="d-none-dark"
                            alt="Apple"
                        />
                        <img
                            src="assets/img/shop/electronics/brands/samsung-dark-mode.svg"
                            className="d-none d-block-dark"
                            alt="Apple"
                        />
                    </a>
                </div>
                <div className="col">
                    <a
                        className="btn btn-outline-secondary w-100 rounded-4 p-3"
                        href="#"
                    >
                        <img
                            src="assets/img/shop/electronics/brands/sony-light-mode.svg"
                            className="d-none-dark"
                            alt="Apple"
                        />
                        <img
                            src="assets/img/shop/electronics/brands/sony-dark-mode.svg"
                            className="d-none d-block-dark"
                            alt="Apple"
                        />
                    </a>
                </div>
                <div className="col">
                    <a
                        className="btn btn-outline-secondary w-100 h-100 rounded-4 p-3"
                        href="shop-categories-electronics.html"
                    >
                        All brands
                        <i className="ci-plus-circle fs-base ms-2" />
                    </a>
                </div>
            </div>
        </section>

    )
}

export default Brands
