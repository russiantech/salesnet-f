import React from 'react';

const ListingType = ({ onChange }) => {
  return (
    <div className="tab-pane fade">
      <h4 className="h4 mb-3">Select a listing type</h4>
      <div className="d-flex flex-wrap gap-2">
        <input type="radio" className="btn-check" name="listing_type" id="model-1" onChange={onChange} />
        <label htmlFor="model-1" className="btn btn-sm border-2 btn-outline-secondary">Sell an item</label>
        <input type="radio" className="btn-check" name="listing_type" id="model-2" onChange={onChange} />
        <label htmlFor="model-2" className="btn btn-sm border-2 btn-outline-secondary">Offer a service</label>
        {/* Add other options as necessary */}
      </div>
    </div>
  );
}

export default ListingType;
