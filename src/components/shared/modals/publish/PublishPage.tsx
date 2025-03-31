import React, { useState } from 'react';
import ListingDetails from './ListingDetails';
import Media from './Media';
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

    const handleNext = (event) => {
        const tabs = ['home', 'media', 'contact', 'location', 'promote'];
        const currentIndex = tabs.indexOf(activeTab);

        if (activeTab === 'promote') {
            handleSubmit(event); // Submit the form if on the promote tab
        } else if (currentIndex < tabs.length - 1) {
            setActiveTab(tabs[currentIndex + 1]);
        }

    };

    const handleBack = () => {
        const tabs = ['home', 'media', 'contact', 'location', 'promote'];
        const currentIndex = tabs.indexOf(activeTab);
        if (currentIndex > 0) {
            setActiveTab(tabs[currentIndex - 1]);
        }
    };

    return (
        <form onSubmit={handleSubmit}>

            <section className="container pb-2 pb-sm-3 pb-md-4 pb-lg-5 mb-xxl-3">
                <div className=" align-items-center">
                    {/* Nav pills */}
                    <ul className="nav nav-pills mb-3 flex-nowrap gap-2 text-nowrap pb-3" role="tablist">
                        {['home', 'media', 'contact', 'location', 'promote'].map(tab => (
                            <li className="nav-item" role="presentation" key={tab}>
                                <button type="button" className={`nav-link ${activeTab === tab ? 'active' : ''}`}
                                    onClick={() => handleTabChange(tab)}>
                                    {tab.charAt(0).toUpperCase() + tab.slice(1).replace('-', ' ')}
                                </button>
                            </li>
                        ))}
                    </ul>
                    {/* Pills content */}
                    <div className="tab-content" id="pills-tabContent">
                        <div className={`tab-pane fade ${activeTab === 'home' ? 'show active' : ''}`}>
                            <ListingDetails onChange={handleInputChange} />
                        </div>
                        <div className={`tab-pane fade ${activeTab === 'media' ? 'show active' : ''}`}>
                            <Media onChange={handleInputChange} />
                        </div>
                        <div className={`tab-pane fade ${activeTab === 'contact' ? 'show active' : ''}`}>
                            <Contact onChange={handleInputChange} />
                        </div>
                        <div className={`tab-pane fade ${activeTab === 'location' ? 'show active' : ''}`}>
                            <Location onChange={handleInputChange} />
                        </div>
                        <div className={`tab-pane fade ${activeTab === 'promote' ? 'show active' : ''}`}>
                            <Promote onChange={handleInputChange} />
                        </div>

                        <footer className="sticky-bottom bg-body pb-3">
                            <div className="container d-flex gap-3 pt-3">
                                <button type="button" className="btn btn-outline-dark" onClick={handleBack} disabled={activeTab === 'home'}>
                                    Back
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-dark ms-auto"
                                    onClick={handleNext}
                                >
                                    {activeTab === 'promote' ? 'Submit' : 'Next'}
                                </button>
                            </div>
                        </footer>
                    </div>
                </div>
            </section>


            {/*  */}
            <div className="card">
              <div className="card-body">
                {/* Nav pills */}
                <ul className="nav nav-pills mb-3 flex-nowrap gap-2 text-nowrap pb-3" role="tablist">
                  {['home', 'media', 'contact', 'location', 'promote'].map(tab => (
                    <li className="nav-item" role="presentation" key={tab}>
                      <button type="button" className={`nav-link ${activeTab === tab ? 'active' : ''}`}
                        onClick={() => handleTabChange(tab)}>
                        {tab.charAt(0).toUpperCase() + tab.slice(1).replace('-', ' ')}
                      </button>
                    </li>
                  ))}
                </ul>
                {/* Pills content */}
                <div className="tab-content" id="pills-tabContent">
                  <div className={`tab-pane fade ${activeTab === 'home' ? 'show active' : ''}`}>
                    <ListingDetails onChange={handleInputChange} />
                  </div>
                  <div className={`tab-pane fade ${activeTab === 'media' ? 'show active' : ''}`}>
                    <Media onChange={handleInputChange} />
                  </div>
                  <div className={`tab-pane fade ${activeTab === 'contact' ? 'show active' : ''}`}>
                    <Contact onChange={handleInputChange} />
                  </div>
                  <div className={`tab-pane fade ${activeTab === 'location' ? 'show active' : ''}`}>
                    <Location onChange={handleInputChange} />
                  </div>
                  <div className={`tab-pane fade ${activeTab === 'promote' ? 'show active' : ''}`}>
                    <Promote onChange={handleInputChange} />
                  </div>
                </div>
                <footer className="sticky-bottom bg-body pb-3">
                <div className="container d-flex gap-3 pt-3">
                  <button type="button" className="btn btn-outline-dark" onClick={handleBack} disabled={activeTab === 'home'}>
                    Back
                  </button>
                  <button 
                    type="button" 
                    className="btn btn-dark ms-auto" 
                    onClick={handleNext}
                  >
                    {activeTab === 'promote' ? 'Submit' : 'Next'}
                  </button>
                </div>
              </footer>
              
              </div>
            </div>
            {/*  */}

        </form>
    );
}

export default PublishPage;
