import React, { useState } from 'react';
import ListingDetails from './ListingDetails';
import ListingType from './ListingType';
import ImagesAndVideos from './ImagesAndVideos';
import Contact from './Contact';
import Location from './Location';
import Promote from './Promote';

const PublishPage = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [formData, setFormData] = useState({});

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle the submission logic (e.g., API call)
  };

  const handleNext = () => {
    const tabs = ['home', 'listing-type', 'images', 'contact', 'location', 'promote'];
    const currentIndex = tabs.indexOf(activeTab);
    if (currentIndex < tabs.length - 1) {
      setActiveTab(tabs[currentIndex + 1]);
    }
  };

  const handleBack = () => {
    const tabs = ['home', 'listing-type', 'images', 'contact', 'location', 'promote'];
    const currentIndex = tabs.indexOf(activeTab);
    if (currentIndex > 0) {
      setActiveTab(tabs[currentIndex - 1]);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
        <div className="container pt-4 justify-content-center">
        <div className="row pt-sm-2" style={{ marginLeft: "-15px", marginRight: "-15px" }}>
            <section id="pills-tabs" className="docs-section">
            <div className="card border-0 shadow row g-0 overflow-x-auto pb-3 mb-2 mb-md-3 mb-lg-4">
                <div className="card-body position-relative z-2 col-auto">
                {/* Nav pills */}
                <ul className="nav nav-pills mb-3 flex-nowrap gap-2 text-nowrap pb-3" role="tablist">
                    {['home', 'listing-type', 'images', 'contact', 'location', 'promote'].map(tab => (
                    <li className="nav-item" role="presentation" key={tab}>
                        <button
                        type="button"
                        className={`nav-link ${activeTab === tab ? 'active' : ''}`}
                        onClick={() => handleTabChange(tab)}
                        >
                        {tab.charAt(0).toUpperCase() + tab.slice(1).replace('-', ' ')}
                        </button>
                    </li>
                    ))}
                </ul>
                {/* Pills content */}
                <div className="tab-content" id="pills-tabContent">
                    <div className="fixed-height-card">
                    {activeTab === 'home' && <ListingDetails onChange={handleInputChange} />}
                    {activeTab === 'listing-type' && <ListingType onChange={handleInputChange} />}
                    {activeTab === 'images' && <ImagesAndVideos onChange={handleInputChange} />}
                    {activeTab === 'contact' && <Contact onChange={handleInputChange} />}
                    {activeTab === 'location' && <Location onChange={handleInputChange} />}
                    {activeTab === 'promote' && <Promote onChange={handleInputChange} />}
                    </div>
                </div>
                </div>
                <footer className="sticky-bottom bg-body pb-3">
                <div className="container d-flex gap-3 pt-3">
                    <button type="button" className="btn btn-outline-dark" onClick={handleBack} disabled={activeTab === 'home'}>
                    Back
                    </button>
                    <button type="button" className="btn btn-dark ms-auto" onClick={handleNext} disabled={activeTab === 'promote'}>
                    Next
                    </button>
                    <button type="submit" className="btn btn-success ms-auto" style={{ display: activeTab === 'promote' ? 'block' : 'none' }}>
                    Submit
                    </button>
                </div>
                </footer>
            </div>
            </section>
        </div>
        </div>
    </form>
  );
}

export default PublishPage;
