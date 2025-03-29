import React from 'react';

const Promote = ({ onChange }) => {
  return (
    <div className="tab-pane fade">
      <h2 className="h4 mb-3">Promote Your Listing</h2>
      {/* Promotion options go here */}
      <div>
        <label htmlFor="promotion_plan" className="form-label">Select a promotion plan</label>
        <select id="promotion_plan" name="promotion_plan" className="form-select" onChange={onChange}>
          <option value="">Select...</option>
          <option value="easy_start">Easy Start</option>
          <option value="fast_sale">Fast Sale</option>
          <option value="turbo_boost">Turbo Boost</option>
        </select>
      </div>
    </div>
  );
}

export default Promote;
