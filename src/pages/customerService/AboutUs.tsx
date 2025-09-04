import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Footer from '../../components/shared/Footer';
import { appConfig } from '../../config/appConfig';

const AboutUs = () => {
  return (
    <>
      {/* Global styles for consistent header-like appearance */}
      <style>{`
        .about-header {
          background: linear-gradient(135deg, rgba(0,0,0,0.95) 0%, rgba(26,26,26,0.95) 100%);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          padding: 0.5rem 0;
        }
        
        .about-content {
          padding-top: 76px; /* Account for fixed header */
          padding-bottom: 40px;
        }
        
        .stat-number {
          font-size: 2.5rem;
          font-weight: 700;
          line-height: 1;
        }
        
        .icon-shape {
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .hero-img {
          max-height: 400px;
          object-fit: cover;
          width: 100%;
        }
        
        @media (max-width: 768px) {
          .stat-number {
            font-size: 2rem;
          }
          
          .icon-shape {
            width: 50px;
            height: 50px;
          }
          
          .hero-img {
            max-height: 300px;
          }
        }
      `}</style>
      
      {/* Header section matching the site's navigation style */}
      <header className="about-header navbar navbar-expand-lg navbar-dark fixed-top">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center w-100">
            <NavLink to="/" className="navbar-brand d-flex align-items-center">
              <img width={36} height={36} src={appConfig.app_logo} alt={`${appConfig.app_name} Logo`} className="me-2" />
              <span className="d-none d-md-inline">{appConfig.app_name}</span>
            </NavLink>
            
            <div className="d-flex">
              <NavLink to="/" className="btn btn-outline-light btn-sm ms-2">
                <i className="ci-home me-1"></i> Home
              </NavLink>
            </div>
          </div>
        </div>
      </header>

      <main className="about-content">
        <div className="container py-5">
          {/* Hero Section */}
          <div className="row align-items-center mb-5 py-4">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-4">About {appConfig.app_name}</h1>
              <p className="lead">
                {appConfig.hype}. {appConfig.app_desc}
              </p>
            </div>
            <div className="col-lg-6">
              <img 
                src="/assets/img/us/pages/smile_shoppers.jpg" 
                alt={`${appConfig.app_name} Marketplace`} 
                className="img-fluid rounded-3 shadow hero-img" 
              />
            </div>
          </div>

          {/* Stats Section */}
          <div className="row mb-5 py-4">
            <div className="col-12 text-center mb-4">
              <h2 className="display-5 fw-semibold">Our Impact</h2>
            </div>
            <div className="col-md-3 col-6 text-center mb-4">
              <div className="stat-number text-primary">{appConfig.stats.businesses}</div>
              <p className="text-muted">Businesses Empowered</p>
            </div>
            <div className="col-md-3 col-6 text-center mb-4">
              <div className="stat-number text-success">{appConfig.stats.users}</div>
              <p className="text-muted">Active Users</p>
            </div>
            <div className="col-md-3 col-6 text-center mb-4">
              <div className="stat-number text-info">{appConfig.stats.products}</div>
              <p className="text-muted">Products Listed</p>
            </div>
            <div className="col-md-3 col-6 text-center mb-4">
              <div className="stat-number text-warning">{appConfig.stats.rating}</div>
              <p className="text-muted">Average Rating</p>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="row align-items-center mb-5 py-4">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h2 className="display-6 fw-semibold mb-4">Vision & Mission</h2>
              <p className="text-muted mb-4">
                At {appConfig.app_name}, we're dedicated to transforming commerce and sales through the internet and AI technologies by creating seamless connections 
                between buyers and sellers with intelligent sales pages for users.
              </p>
            </div>
            <div className="col-lg-5 ms-lg-auto">
              <div className="vstack gap-4">
                <div className="d-flex align-items-start gap-4">
                  <div className="icon icon-shape text-bg-primary rounded-circle flex-shrink-0">
                    <i className="ci-rocket fs-4"></i>
                  </div>
                  <div>
                    <h3 className="h4 fw-semibold">Our Mission</h3>
                    <p>
                      To empower businesses of all sizes by providing a trusted platform for commerce, 
                      making buying and selling accessible to everyone globally.
                    </p>
                  </div>
                </div>
                
                <hr className="my-2" />
                
                <div className="d-flex align-items-start gap-4">
                  <div className="icon icon-shape text-bg-primary rounded-circle flex-shrink-0">
                    <i className="ci-eye fs-4"></i>
                  </div>
                  <div>
                    <h3 className="h4 fw-semibold">Our Vision</h3>
                    <p>
                      To become the world's most trusted marketplace, fostering economic growth by connecting 
                      communities through technology.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Who We Are */}
          <div className="row g-4 align-items-center mb-5 py-4">
            <div className="col-lg-6 order-2 order-lg-1">
              <h2 className="display-6 fw-semibold mb-4">Who We Are</h2>
              <p className="text-muted mb-3">
                {appConfig.app_name} is a global marketplace platform founded with a simple goal: to make buying and selling 
                online easier, safer, and more accessible for everyone.
              </p>
              <p className="text-muted mb-3">
                Our team combines expertise in technology, commerce, and customer service to create an experience 
                that meets the unique needs of the global market. We understand the challenges and opportunities 
                of doing business online, and we've built {appConfig.app_name} to address them directly.
              </p>
              <p className="text-muted">
                We believe in the power of commerce to transform lives and communities, and we're committed to 
                building a platform that empowers both buyers and sellers worldwide.
              </p>
            </div>
            <div className="col-lg-6 order-1 order-lg-2">
              <img 
                src="/assets/img/us/pages/delivery_walk.jpg" 
                alt={`${appConfig.app_name} Team`} 
                className="img-fluid rounded-3 shadow" 
              />
            </div>
          </div>

          {/* Call to Action */}
          <div className="row py-5 mb-4">
            <div className="col-12 text-center bg-light rounded-3 p-5">
              <h2 className="display-6 fw-semibold mb-3">Join the {appConfig.app_name} Community</h2>
              <p className="text-muted mb-4 mx-auto" style={{maxWidth: '600px'}}>
                Whether you're looking to grow your business or find great products from trusted sellers, 
                {appConfig.app_name} is here for you.
              </p>
              <div className="d-flex flex-wrap justify-content-center gap-3">
                {/* Start Selling Button */}
                <NavLink 
                  to="#" 
                  data-bs-toggle="modal" 
                  data-bs-target="#PublishPage"
                  className="btn btn-primary btn-lg position-relative"
                  style={{ cursor: 'pointer', paddingLeft: '3rem', paddingRight: '1.5rem' }}
                >
                  <span className="position-absolute top-50 start-0 translate-middle-y ms-3 d-flex align-items-center justify-content-center rounded-circle bg-dark bg-opacity-20" 
                        style={{width: '32px', height: '32px'}}>
                    <i className="ci-click text-white" style={{fontSize: '1rem'}} />
                  </span>
                  Start Selling
                </NavLink>

                {/* Explore Products Button */}
                <NavLink to="/products" className="btn btn-outline-primary btn-lg">
                  Explore Products
                </NavLink>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="row py-4">
            <div className="col-12 text-center">
              <h2 className="h3 fw-semibold mb-3">Get In Touch</h2>
              <p className="text-muted mb-4">
                Have questions or feedback? We'd love to hear from you.
              </p>
              <div className="d-flex flex-wrap justify-content-center gap-3 mb-4">
                <Link to={`mailto:${appConfig.app_email}`} className="btn btn-outline-dark">
                  <i className="ci-mail me-2"></i> {appConfig.app_email}
                </Link>
                <Link to={`tel:${appConfig.phone_number.replace(/\s/g, '')}`} className="btn btn-outline-dark">
                  <i className="ci-phone me-2"></i> {appConfig.phone_number}
                </Link>
              </div>
              
              {/* Social Links */}
              <div className="d-flex justify-content-center gap-3 mt-4">
                <Link to={appConfig.x_link} target="_blank" rel="noopener noreferrer" className="btn btn-icon btn-lg btn-outline-dark rounded-circle">
                  <i className="ci-x"></i>
                </Link>
                <Link to={appConfig.fb_link} target="_blank" rel="noopener noreferrer" className="btn btn-icon btn-lg btn-outline-dark rounded-circle">
                  <i className="ci-facebook"></i>
                </Link>
                <Link to={appConfig.instagram_link} target="_blank" rel="noopener noreferrer" className="btn btn-icon btn-lg btn-outline-dark rounded-circle">
                  <i className="ci-instagram"></i>
                </Link>
                <Link to={appConfig.whatsapp_link} target="_blank" rel="noopener noreferrer" className="btn btn-icon btn-lg btn-outline-dark rounded-circle">
                  <i className="ci-whatsapp"></i>
                </Link>
                <Link to={appConfig.linkedin_link} target="_blank" rel="noopener noreferrer" className="btn btn-icon btn-lg btn-outline-dark rounded-circle">
                  <i className="ci-linkedin"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default AboutUs;