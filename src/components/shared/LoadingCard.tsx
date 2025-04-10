import React from 'react';
import { Link } from 'react-router-dom';

const LoadingCard = (props) => (
    <div className="col" aria-hidden="true">
        <div className="position-relative placeholder-wave">
            <div className="card-img-top placeholder ratio ratio-16x9" />
            <i className="ci-image position-absolute top-50 start-50 translate-middle fs-1 opacity-40" />
        </div>
        <div className="card-body">
            <h5 className="card-title placeholder-glow">
                <span className="placeholder col-6" />
                <span className="visually-hidden">Techa - awesome.</span>
            </h5>
            <p className="card-text placeholder-glow">
                <span className="placeholder placeholder-sm col-7 me-2" />
                <span className="placeholder placeholder-sm col-4" />
                <span className="placeholder placeholder-sm col-4 me-2" />
                <span className="placeholder placeholder-sm col-6" />
                <span className="placeholder placeholder-sm col-8" />
            </p>
            <Link to="!#" className="btn btn-primary disabled placeholder col-6 placeholder-wave" tabIndex={-1}>
                &nbsp;
            </Link>
        </div>
    </div>
);

export default LoadingCard;
