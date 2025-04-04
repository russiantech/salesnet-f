import React, { useEffect, useState } from 'react';
import { ProductAxiosService } from '../../../../services/net/ProductAxiosService';

const ListingDetails = ({ onChange }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await ProductAxiosService.fetchCategories();
        console.log("Fetched categories:", response.data);
        setCategories(response.data.categories); // Store the categories array
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const flattenCategories = (categories) => {
    let flatList = [];

    const flatten = (cats) => {
      for (const cat of cats) {
        flatList.push({ id: cat.id, name: cat.name });
        if (cat.children && cat.children.length > 0) {
          flatten(cat.children);
        }
      }
    };

    flatten(categories);
    return flatList;
  };

  const flatCategories = flattenCategories(categories);

  return (
    <section className="position-relative bg-body rounded p-4 mt-4">
      <div className="position-relative z-1 pb-md-2 px-md-2">
        <h2 className="h4 mb-3 mb-sm-4">Listing Basic Details</h2>
        <div className="row row-cols-1 row-cols-sm-2 g-3 g-md-4 mb-3 mb-md-4">
          <div className="col">
            <label htmlFor="name" className="form-label">Product Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              minLength={10}
              placeholder="Enter product name"
              onChange={onChange}
            />
          </div>
          <div className="col">
            <label htmlFor="price" className="form-label">Price</label>
            <input
              type="number"
              className="form-control"
              id="price"
              name="price"
              placeholder="Enter price"
              onChange={onChange}
            />
          </div>
          <div className="col">
            <label htmlFor="categories" className="form-label d-flex align-items-center">
              Categories 
              {loading && <span className="ms-2">Loading...</span>}
              <i className="fi-info fs-base ms-2" data-bs-toggle="tooltip" aria-label="Select a category" />
            </label>
            <select
              className="form-select"
              name="categories"
              onChange={onChange}
              disabled={loading} // Disable the dropdown while loading
            >
              <option value="">Select option...</option>
              {/* {flatCategories.map(category => (
                <option key={category.id} value={category.id}>{category.name}</option>
              ))} */}

              {flatCategories.map((category, index) => (
                <option key={`${category.id}-${index}`} value={category.id}>
                  {category.name}
                </option>
              ))}

            </select>
          </div>

          <div className="col">
            <label htmlFor="condition" className="form-label">Condition</label>
            <select
              className="form-select"
              id="condition"
              name="condition"
              onChange={onChange}
            >
              <option value="">Select option...</option>
              <option value={1}>Used Item</option>
              <option value={2}>Brand New</option>
            </select>
          </div>
        </div>
        <label htmlFor="description" className="form-label fs-6 fw-semibold">Description *</label>
        <p className="fs-sm mb-2">Describe the product in detail (maximum 300 characters).</p>
        <textarea
          className="form-control"
          rows={4}
          id="description"
          name="description"
          placeholder="Maximum 300 characters"
          required
          onChange={onChange}
        />
      </div>
    </section>
  );
}

export default ListingDetails;
