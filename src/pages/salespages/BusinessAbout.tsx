import React from 'react';
import { formatDate } from '../../utils/dateUtils';
import { Link } from 'react-router-dom';

const BusinessAbout = ({ description, foundedDate, categories }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h2 className="h4 mb-4">About</h2>
        
        {description && (
          <div className="mb-4">
            <h5 className="h6">Description</h5>
            <p>{description}</p>
          </div>
        )}
        
        <div className="mb-4">
          <h5 className="h6">Founded</h5>
          <p>{formatDate(foundedDate)}</p>
        </div>
        
        {categories.length > 0 && (
          <div>
            <h5 className="h6">Categories</h5>
            <div className="d-flex flex-wrap gap-2">
              {categories.map(category => (
                // <span key={category.id} className="badge bg-primary rounded-pill">
                //   {category.name}
                // </span>
                 <Link to={`/categories/${category.slug}`} key={category.id} className="badge bg-primary rounded-pill text-decoration-none">
                    {category.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BusinessAbout;