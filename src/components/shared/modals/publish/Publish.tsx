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

    <PublishPage/>
  );
}

export default Publish;
