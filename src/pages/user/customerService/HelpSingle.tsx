// import Navigation from "../../../components/shared/Navigation"

const HelpSingle = () => {
  return (
    <>
        {/* <Navigation /> */}
        
      <main className="content-wrapper">
        {/* Hero */}
        <section className="container pt-3 pt-sm-4">
          <div className="position-relative px-4 px-sm-5 px-xl-0 py-5">
            <span className="position-absolute top-0 start-0 w-100 h-100 rounded-5 d-none-dark rtl-flip" style={{background: 'linear-gradient(-90deg, #accbee 0%, #e7f0fd 100%)'}} />
            <span className="position-absolute top-0 start-0 w-100 h-100 rounded-5 d-none d-block-dark rtl-flip" style={{background: 'linear-gradient(-90deg, #1b273a 0%, #1f2632 100%)'}} />
            <div className="position-relative z-1">
              <h1 className="h2 text-center pt-md-2 pt-lg-3 pt-xl-4 mb-4">How can we help?</h1>
              <div className="position-relative mx-auto mb-4" style={{maxWidth: '545px'}}>
                <i className="ci-search position-absolute top-50 start-0 translate-middle-y text-body fs-lg ms-3" />
                <input type="search" className="form-control form-control-lg form-icon-start" placeholder="What do you need help with?" aria-label="Search field" />
              </div>
              <div className="row justify-content-center g-4 pt-2 pt-sm-3 pb-md-2 pb-lg-3 pb-xl-4">
                <div className="col-6 col-md-3 col-xl-2 text-center">
                  <div className="position-relative d-inline-block">
                    <div className="position-relative d-inline-flex justify-content-center align-items-center text-body-emphasis" style={{width: '48px', height: '48px'}}>
                      <span className="position-absolute top-0 start-0 w-100 h-100 bg-white bg-opacity-50 rounded-circle d-none-dark" />
                      <span className="position-absolute top-0 start-0 w-100 h-100 bg-white bg-opacity-10 rounded-circle d-none d-block-dark" />
                      <i className="ci-delivery position-relative z-1 fs-xl" />
                    </div>
                    <h3 className="text-dark fs-sm fw-medium pt-1 mt-2 mb-0">
                      <a className="hover-effect-underline stretched-link text-decoration-none" href="#!">Track your order</a>
                    </h3>
                  </div>
                </div>
                <div className="col-6 col-md-3 col-xl-2 text-center">
                  <div className="position-relative d-inline-block">
                    <div className="position-relative d-inline-flex justify-content-center align-items-center text-body-emphasis" style={{width: '48px', height: '48px'}}>
                      <span className="position-absolute top-0 start-0 w-100 h-100 bg-white bg-opacity-50 rounded-circle d-none-dark" />
                      <span className="position-absolute top-0 start-0 w-100 h-100 bg-white bg-opacity-10 rounded-circle d-none d-block-dark" />
                      <i className="ci-shopping-bag position-relative z-1 fs-xl" />
                    </div>
                    <h3 className="text-dark fs-sm fw-medium pt-1 mt-2 mb-0">
                      <a className="hover-effect-underline stretched-link text-decoration-none" href="#!">Edit or cancel order</a>
                    </h3>
                  </div>
                </div>
                <div className="col-6 col-md-3 col-xl-2 text-center">
                  <div className="position-relative d-inline-block">
                    <div className="position-relative d-inline-flex justify-content-center align-items-center text-body-emphasis" style={{width: '48px', height: '48px'}}>
                      <span className="position-absolute top-0 start-0 w-100 h-100 bg-white bg-opacity-50 rounded-circle d-none-dark" />
                      <span className="position-absolute top-0 start-0 w-100 h-100 bg-white bg-opacity-10 rounded-circle d-none d-block-dark" />
                      <i className="ci-refresh-cw position-relative z-1 fs-xl" />
                    </div>
                    <h3 className="text-dark fs-sm fw-medium pt-1 mt-2 mb-0">
                      <a className="hover-effect-underline stretched-link text-decoration-none" href="#!">Returns &amp; refunds</a>
                    </h3>
                  </div>
                </div>
                <div className="col-6 col-md-3 col-xl-2 text-center">
                  <div className="position-relative d-inline-block">
                    <div className="position-relative d-inline-flex justify-content-center align-items-center text-body-emphasis" style={{width: '48px', height: '48px'}}>
                      <span className="position-absolute top-0 start-0 w-100 h-100 bg-white bg-opacity-50 rounded-circle d-none-dark" />
                      <span className="position-absolute top-0 start-0 w-100 h-100 bg-white bg-opacity-10 rounded-circle d-none d-block-dark" />
                      <i className="ci-gift position-relative z-1 fs-xl" />
                    </div>
                    <h3 className="text-dark fs-sm fw-medium pt-1 mt-2 mb-0">
                      <a className="hover-effect-underline stretched-link text-decoration-none" href="#!">My bonus account</a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Page content */}
        <section className="container pb-5 mb-1 mb-sm-2 mb-md-3 mb-lg-4 mb-xl-5">
          {/* Breadcrumb */}
          <nav className="pt-3 my-3 my-md-4" aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="help-topics-v1.html">Help center</a></li>
              <li className="breadcrumb-item"><a href="#!">Returns &amp; refunds</a></li>
              <li className="breadcrumb-item active" aria-current="page">What is your returns policy?</li>
            </ol>
          </nav>
          <div className="row">
            {/* Sticky sidebar with related articles */}
            <aside className="col-lg-4 order-lg-2 pb-3 mb-3 mb-md-4" style={{marginTop: '-115px'}}>
              <div className="sticky-md-top ps-lg-4 ms-xl-3" style={{paddingTop: '115px'}}>
                <h4 className="h5 mb-4 d-none d-lg-block">Articles in this section</h4>
                <div className="position-relative py-1 py-sm-2 px-3 px-sm-4 p-lg-0">
                  <span className="position-absolute top-0 start-0 w-100 h-100 border rounded-4 d-lg-none" />
                  <button type="button" className="btn btn-lg btn-outline-secondary position-relative z-1 w-100 justify-content-start border-0 px-0 d-lg-none" data-bs-toggle="collapse" data-bs-target="#articles" aria-expanded="true" aria-controls="articles">
                    <i className="ci-menu fs-lg me-2" />
                    Articles in this section
                    <i className="ci-chevron-down fs-lg ms-auto" />
                  </button>
                  <div className="position-relative z-1 d-lg-block collapse show" id="articles" style={{}}>
                    <ul className="nav flex-column gap-3 pt-2 pb-3 pt-lg-0">
                      <li>
                        <a className="nav-link hover-effect-underline fw-normal p-0" href="#!">What is your returns policy?</a>
                      </li>
                      <li>
                        <a className="nav-link hover-effect-underline fw-normal p-0" href="#!">I paid with Afterpay, how do returns work?</a>
                      </li>
                      <li>
                        <a className="nav-link hover-effect-underline fw-normal p-0" href="#!">What happens to my refund if I return 45 days?</a>
                      </li>
                      <li>
                        <a className="nav-link hover-effect-underline fw-normal p-0" href="#!">How do I return something to you?</a>
                      </li>
                      <li>
                        <a className="nav-link hover-effect-underline fw-normal p-0" href="#!">Can I return an exchange instead of a refund?</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </aside>
            {/* Article */}
            <div className="col-lg-8 order-lg-1">
              <h2 className="pb-2 pb-sm-3 pb-lg-4">What is your returns policy?</h2>
              <p className="h6"><span className="text-body-secondary">Last Updated:</span> June 26, 2024</p>
              <p>At Salesnet, we strive to ensure your complete satisfaction with every purchase. If, for any reason, you are not entirely pleased with your order, we've got you covered with our Returns Policy. You may return eligible items within 30 days of the delivery date.</p>
              <h3 className="h4 pt-3 pt-sm-4">1. Pack the goods</h3>
              <ul>
                <li>Check if your product is eligible for return.</li>
                <li>Put the new product in its original packaging without any signs of use. If the product consists of several parts, you must return the entire set. Make sure that nothing is lost and that you return the product in the complete set in which you received it.</li>
                <li>If you purchased a product with a gift, you must return the entire set (product and gift). Otherwise, the nominal value of the gift will be deducted from the refund amount.</li>
                <li>It is not necessary to send a cheque.</li>
              </ul>
              <h3 className="h4 pt-3 pt-sm-4">2. Where to bring the goods</h3>
              <p>You can return the goods to the service department or Salesnet return point.</p>
              <ul className="pb-3 pb-sm-4">
                <li>Service departments at Salesnet  points of delivery. Here, we will immediately check the goods and, if everything is in order, agree on a return policy on the spot. You can bring any goods here. Simple goods, such as clothes and shoes. Complex goods: smartphones, washing machines, microwaves, power tools. The examination is carried out by a technical specialist. If long-term diagnostics are required, the goods will be sent to a service centre.</li>
                <li>Returns acceptance points at Salesnet pick-up points. Here, our employee will conduct a visual inspection of your goods. The decision regarding the goods is made after the goods are delivered to the service department. The details will be agreed with you. The examination is carried out within 14 days.</li>
              </ul>
              <div className="ratio ratio-4x3 mb-3">
                <img src="/assets/img/help/single.jpg" className="rounded-5" alt="Image" />
              </div>
              <h3 className="h4 pt-3 pt-sm-4">3. How will I get a refund for the goods?</h3>
              <p>You can provide your bank card details for a refund when making a refund in your personal account on the website or in a paper return form. Please indicate the card number and full name of the bank card holder in English on the return form.</p>
              <p>Usually, the money is refunded in 3-5 days after the decision to refund is made.</p>
              <div className="py-2 py-sm-3 mt-n3"><hr /></div>
              <h4 className="h5 mb-4">Was this information helpful?</h4>
              <div className="d-flex gap-3 pb-3 mb-4">
                <button type="button" className="btn btn-outline-secondary">
                  <i className="ci-thumbs-up fs-base me-1 ms-n1" />
                  Yes
                </button>
                <button type="button" className="btn btn-outline-secondary">
                  <i className="ci-thumbs-down fs-base me-1 ms-n1" />
                  No
                </button>
              </div>
              {/* Contact CTA */}
              <div className="border rounded-4 p-4">
                <div className="d-sm-flex align-items-center justify-content-between text-center text-sm-start p-md-3">
                  <div className="me-sm-3 me-md-4">
                    <h3 className="h4 pb-1 mb-2">Can't find the answer to a question?</h3>
                    <p className="pb-2 pb-sm-0 mb-sm-0">Get in touch with our support team.</p>
                  </div>
                  <a className="btn btn-lg btn-primary" href="#!">Contact us</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

    </>
  )
}

export default HelpSingle
