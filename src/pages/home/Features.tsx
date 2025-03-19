const Features = () => {
    return (
      <>
        {/* Features */}
        <section className="container pt-5 mt-1 mt-sm-3 mt-lg-4">
              <div className="row row-cols-2 row-cols-md-4 g-4">
                {/* Item */}
                <div className="col">
                  <div className="d-flex flex-column flex-xxl-row align-items-center">
                    <div className="d-flex text-dark-emphasis bg-body-tertiary rounded-circle p-4 mb-3 mb-xxl-0">
                      <i className="ci-delivery fs-2 m-xxl-1" />
                    </div>
                    <div className="text-center text-xxl-start ps-xxl-3">
                      <h3 className="h6 mb-1">Free Shipping &amp; Returns</h3>
                      <p className="fs-sm mb-0">For all orders over $199.00</p>
                    </div>
                  </div>
                </div>
                {/* Item */}
                <div className="col">
                  <div className="d-flex flex-column flex-xxl-row align-items-center">
                    <div className="d-flex text-dark-emphasis bg-body-tertiary rounded-circle p-4 mb-3 mb-xxl-0">
                      <i className="ci-credit-card fs-2 m-xxl-1" />
                    </div>
                    <div className="text-center text-xxl-start ps-xxl-3">
                      <h3 className="h6 mb-1">Secure Payment</h3>
                      <p className="fs-sm mb-0">We ensure secure payment</p>
                    </div>
                  </div>
                </div>
                {/* Item */}
                <div className="col">
                  <div className="d-flex flex-column flex-xxl-row align-items-center">
                    <div className="d-flex text-dark-emphasis bg-body-tertiary rounded-circle p-4 mb-3 mb-xxl-0">
                      <i className="ci-refresh-cw fs-2 m-xxl-1" />
                    </div>
                    <div className="text-center text-xxl-start ps-xxl-3">
                      <h3 className="h6 mb-1">Money Back Guarantee</h3>
                      <p className="fs-sm mb-0">Returning money 30 days</p>
                    </div>
                  </div>
                </div>
                {/* Item */}
                <div className="col">
                  <div className="d-flex flex-column flex-xxl-row align-items-center">
                    <div className="d-flex text-dark-emphasis bg-body-tertiary rounded-circle p-4 mb-3 mb-xxl-0">
                      <i className="ci-chat fs-2 m-xxl-1" />
                    </div>
                    <div className="text-center text-xxl-start ps-xxl-3">
                      <h3 className="h6 mb-1">24/7 Customer Support</h3>
                      <p className="fs-sm mb-0">Friendly customer support</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
      </>
    )
  }
  
  export default Features