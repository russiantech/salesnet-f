import React from 'react';

const ListingType = ({ onChange }) => {
    return (

        <section className="container pt-2 mt-1 mt-sm-3 mt-lg-4">
            <div className="row">
                {/* <label className="form-label pb-1 mb-2">Model</label> */}
                <h4 className="h4 mb-3 mb-sm-4">Select a listing type</h4>
                <div className="d-flex flex-wrap gap-2">
                    <input
                        type="radio"
                        className="btn-check"
                        name="product_type"
                        id="model-1"
                        defaultChecked=""
                    />
                    <label htmlFor="model-1" className="btn btn-sm border-2 btn-outline-secondary">
                        <div className="d-flex flex-column flex-xxl-row align-items-center">
                            <div className="d-flex text-dark-emphasis bg-body-tertiary rounded-circle p-4 mb-3 mb-xxl-0">
                                <i className="ci-delivery fs-2 m-xxl-1" />
                            </div>
                            <div className="text-center text-xxl-start ps-xxl-3">
                                <h3 className="h6 mb-1">Sell an item</h3>
                            </div>
                        </div>
                    </label>
                    <input
                        type="radio"
                        className="btn-check"
                        name="product_type"
                        id="model-2"
                    />
                    <label htmlFor="model-2" className="btn btn-sm border-2  btn-outline-secondary">
                        <div className="d-flex flex-column flex-xxl-row align-items-center">
                            <div className="d-flex text-dark-emphasis bg-body-tertiary rounded-circle p-4 mb-3 mb-xxl-0">
                                <i className="ci-chat fs-2 m-xxl-1" />
                            </div>
                            <div className="text-center text-xxl-start ps-xxl-3">
                                <h3 className="h6 mb-1">Offer a service</h3>
                            </div>
                        </div>
                    </label>

                    <input
                        type="radio"
                        className="btn-check"
                        name="product_type"
                        id="model-3"
                    />
                    <label htmlFor="model-3" className="btn btn-sm border-2 btn-outline-secondary">
                        <div className="d-flex flex-column flex-xxl-row align-items-center">
                            <div className="d-flex text-dark-emphasis bg-body-tertiary rounded-circle p-4 mb-3 mb-xxl-0">
                                <i className="ci-credit-card fs-2 m-xxl-1" />
                            </div>
                            <div className="text-center text-xxl-start ps-xxl-3">
                                <h3 className="h6 mb-1">Sell a property</h3>
                            </div>
                        </div>
                    </label>
                    <input
                        type="radio"
                        className="btn-check"
                        name="product_type"
                        id="model-4"
                        disabled=""
                    />
                    <label htmlFor="model-4" className="btn btn-sm border-2 btn-outline-secondary">
                        <div className="d-flex flex-column flex-xxl-row align-items-center">
                            <div className="d-flex text-dark-emphasis bg-body-tertiary rounded-circle p-4 mb-3 mb-xxl-0">
                                <i className="ci-refresh-cw fs-2 m-xxl-1" />
                            </div>
                            <div className="text-center text-xxl-start ps-xxl-3">
                                <h3 className="h6 mb-1">Sell a car</h3>
                            </div>
                        </div>
                    </label>
                </div>
            </div>
        </section>
    );
}

export default ListingType;
