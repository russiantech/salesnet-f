import React, { useState } from 'react';
// import PublishPage from './PublishPage';
import './PublishPage.css'; // Ensure you have this CSS file
import PublishPage from './PublishPage';

const Publish = () => {
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
    // <div className="modal fade" id="PublishPage1" tabIndex={-1} aria-modal="true" role="dialog">
    //   <div className="modal-dialog modal-fullscreen" role="document">
    //     <div className="modal-content">
    //       <div className="modal-header">
    //         <h5 className="modal-title">List Product - Sales Works Like Charm</h5>
    //         <button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close" />
    //       </div>
    //       <div className="modal-body d-flex flex-column gap-4 pt-2">
    //         <PublishPage/>
    //       </div>
    //       <div className="modal-footer flex-column flex-sm-row align-items-stretch">
    //         <button className="btn btn-primary" type="button" data-bs-dismiss="modal">
    //           Close
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <PublishPage/>
  );
}

export default Publish;
