import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useBootstrapPopovers } from '../../hooks/useBootstrapPopovers';
// import Footer from '../../components/shared/Footer';
import FooterMini from '../../components/shared/FooterMini';

const ContactUs = () => {
  const [newsletterData, setNewsletterData] = useState({
    email: '',
    preferences: {
      woman: false,
      man: false,
      sale: false
    }
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    if (!newsletterData.email) {
      setSubmitMessage('Please enter your email address');
      return;
    }

    setIsSubmitting(true);
    try {
      // Simulate newsletter submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitMessage('Successfully subscribed to newsletter!');
      setNewsletterData({ email: '', preferences: { woman: false, man: false, sale: false } });
    } catch (error) {
      setSubmitMessage('Failed to subscribe. Please try again.');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitMessage(''), 5000);
    }
  };

  const handlePreferenceChange = (preference) => {
    setNewsletterData(prev => ({
      ...prev,
      preferences: {
        ...prev.preferences,
        [preference]: !prev.preferences[preference]
      }
    }));
  };

  const faqData = [
    {
      id: 1,
      question: "How long will delivery take?",
      answer: "Delivery times vary based on your location and the chosen shipping method. Generally, our standard delivery takes up to 5 days, while our Express Delivery ensures your order reaches you within 1 day. Please note that these times may be subject to occasional variations due to unforeseen circumstances, but we do our best to meet these estimates."
    },
    {
      id: 2,
      question: "What payment methods do you accept?",
      answer: "We offer a range of secure payment options to provide you with flexibility and convenience. Accepted methods include major credit/debit cards, PayPal, and other secure online payment gateways. You can find the complete list of accepted payment methods during the checkout process."
    },
    {
      id: 3,
      question: "Do you ship internationally?",
      answer: "Yes, we proudly offer international shipping to cater to our global customer base. Shipping costs and delivery times will be automatically calculated at the checkout based on your selected destination. Please note that any customs duties or taxes applicable in your country are the responsibility of the customer."
    },
    {
      id: 4,
      question: "Do I need an account to place an order?",
      answer: "While you can place an order as a guest, creating an account comes with added benefits. By having an account, you can easily track your orders, manage your preferences, and enjoy a quicker checkout process for future purchases. It also allows us to provide you with personalized recommendations and exclusive offers."
    },
    {
      id: 5,
      question: "How can I track my order?",
      answer: "Once your order is dispatched, you will receive a confirmation email containing a unique tracking number. You can use this tracking number on our website to monitor the real-time status of your shipment. Additionally, logging into your account will grant you access to a comprehensive order history, including tracking information."
    },
    {
      id: 6,
      question: "What are the product refund conditions?",
      answer: "Our refund policy is designed to ensure customer satisfaction. We accept returns within 30 days of receiving the product, provided it is in its original condition with all tags and packaging intact. Refunds are processed promptly once the returned item is inspected and approved."
    },
    {
      id: 7,
      question: "Is there a minimum order value for free shipping?",
      answer: "Yes, we offer free shipping on orders exceeding $250. Orders below this threshold are subject to standard shipping fees, which will be displayed during the checkout process."
    },
    {
      id: 8,
      question: "Can I modify or cancel my order?",
      answer: "You can modify or cancel your order within 2 hours of placing it, provided it hasn't been processed for shipping. Please contact our customer service team immediately if you need to make changes."
    }
  ];

  const instagramPosts = [
    { id: 1, image: "/assets/img/instagram/01.jpg", alt: "Fashion collection showcase" },
    { id: 2, image: "/assets/img/instagram/02.jpg", alt: "Summer trends" },
    { id: 3, image: "/assets/img/instagram/03.jpg", alt: "Behind the scenes" },
    { id: 4, image: "/assets/img/instagram/04.jpg", alt: "Customer spotlight" },
    { id: 5, image: "/assets/img/instagram/05.jpg", alt: "New arrivals" },
    { id: 6, image: "/assets/img/instagram/06.jpg", alt: "Style inspiration" },
    { id: 7, image: "/assets/img/instagram/07.jpg", alt: "Fashion tips" },
    { id: 8, image: "/assets/img/instagram/08.jpg", alt: "Seasonal collection" }
  ];


  useBootstrapPopovers();

  return (
    <>
    <main className="content-wrapper">
      {/* Page title */}
      <section className="position-relative bg-body-tertiary py-4">
        <img src="/assets/img/help/single.jpg" 
          className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover rtl-flip" 
          alt="Background image" 
        />
        <div className="container position-relative z-2 py-4 py-md-5 my-lg-3 my-xl-4 my-xxl-5a">
          <div className="row pt-lg-2 pb-2 pb-sm-3 pb-lg-4">
            <div className="col-9 col-md-8 col-lg-6 bg-info-subtle rounded-3 p-2">
              <h1 className="display-4 mb-lg-4">Contact us</h1>
              <p className="mb-0">Feel free to contact us and we will be happy to help you!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact details */}
      <section className="container pt-5 mt-2 mt-sm-3 mt-lg-4 mt-xl-5 mb-n3">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4 pt-lg-2 pt-xl-0">
          {/* Location */}
          <div className="col">
            <div className="d-flex align-items-center">
              <i className="ci-map-pin fs-lg text-dark-emphasis" />
              <h3 className="h6 ps-2 ms-1 mb-0">Store location</h3>
            </div>
            <hr className="text-dark-emphasis opacity-50 my-3 my-md-4" />
            <ul className="list-unstyled">
              <li>Lekki, Lagos, Nigeria</li>
            </ul>
          </div>
          {/* Phones */}
          <div className="col">
            <div className="d-flex align-items-center">
              <i className="ci-phone-outgoing fs-lg text-dark-emphasis" />
              <h3 className="h6 ps-2 ms-1 mb-0">Call/Whatsapp us directly</h3>
            </div>
            <hr className="text-dark-emphasis opacity-50 my-3 my-md-4" />
            <ul className="list-unstyled">
              <li>Customers: <Link to="tel:07026561327" className="text-dark-emphasis">07026561327</Link></li>
              <li>Franchise: <Link to="tel:08038958645" className="text-dark-emphasis">08038958645</Link></li>
            </ul>
          </div>
          {/* Emails */}
          <div className="col">
            <div className="d-flex align-items-center">
              <i className="ci-mail fs-lg text-dark-emphasis" />
              <h3 className="h6 ps-2 ms-1 mb-0">Send a message</h3>
            </div>
            <hr className="text-dark-emphasis opacity-50 my-3 my-md-4" />
            <ul className="list-unstyled">
              <li>Customers: <Link to="mailto:hi@salesnet.ng" className="text-dark-emphasis">hi@salesnet.ng</Link></li>
              <li>Franchise: <Link to="mailto:franchise@salesnet.ng" className="text-dark-emphasis">franchise@salesnet.ng</Link></li>
            </ul>
          </div>
          {/* Working hours */}
          <div className="col">
            <div className="d-flex align-items-center">
              <i className="ci-clock fs-lg text-dark-emphasis" />
              <h3 className="h6 ps-2 ms-1 mb-0">Working hours</h3>
            </div>
            <hr className="text-dark-emphasis opacity-50 my-3 my-md-4" />
            <ul className="list-unstyled">
              <li>Mon - Fri  8:00 - 18:00</li>
              <li>Sat - Sun  10:00 - 16:00</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="container py-5 my-2 my-sm-3 my-lg-4 my-xl-5">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="text-center mb-4">
              <h2 className="h3">Join us and stay up to date</h2>
              <p className="text-muted">Subscribe to our newsletter for latest updates and exclusive offers</p>
            </div>
            <form onSubmit={handleNewsletterSubmit} className="needs-validation" noValidate>
              <div className="mb-3">
                <div className="form-check form-check-inline">
                  <input 
                    type="checkbox" 
                    className="form-check-input" 
                    id="check-woman"
                    checked={newsletterData.preferences.woman}
                    onChange={() => handlePreferenceChange('woman')}
                  />
                  <label htmlFor="check-woman" className="form-check-label">Woman</label>
                </div>
                <div className="form-check form-check-inline">
                  <input 
                    type="checkbox" 
                    className="form-check-input" 
                    id="check-man"
                    checked={newsletterData.preferences.man}
                    onChange={() => handlePreferenceChange('man')}
                  />
                  <label htmlFor="check-man" className="form-check-label">Man</label>
                </div>
                <div className="form-check form-check-inline">
                  <input 
                    type="checkbox" 
                    className="form-check-input" 
                    id="check-sale"
                    checked={newsletterData.preferences.sale}
                    onChange={() => handlePreferenceChange('sale')}
                  />
                  <label htmlFor="check-sale" className="form-check-label">Sale</label>
                </div>
              </div>
              <div className="position-relative">
                <input 
                  type="email" 
                  className="form-control form-control-lg bg-image-none text-start" 
                  placeholder="Enter email" 
                  aria-label="Your email address"
                  value={newsletterData.email}
                  onChange={(e) => setNewsletterData(prev => ({ ...prev, email: e.target.value }))}
                  required 
                />
                <button 
                  type="submit" 
                  className="btn btn-icon btn-ghost fs-xl btn-secondary border-0 position-absolute top-0 end-0 mt-1 me-1" 
                  aria-label="Submit your email address"
                  disabled={isSubmitting}
                >
                  <i className="ci-arrow-up-right" />
                </button>
              </div>
              {submitMessage && (
                <div className={`mt-2 text-center ${submitMessage.includes('Successfully') ? 'text-success' : 'text-danger'}`}>
                  {submitMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Support / Help center */}
      <section className="container py-5 my-2 my-sm-3 my-lg-4 my-xl-5">
        <div className="d-sm-flex align-items-center justify-content-between py-xxl-3">
          <div className="mb-4 mb-sm-0 me-sm-4 position-relative">
            <h2 className="h3">
              Looking for support? 
              <i 
                className="ci-info fs-base text-warning ms-2" 
                data-bs-toggle="popover" 
                data-bs-trigger="hover" 
                data-bs-custom-class="popover-sm" 
                data-bs-content="Get human help from our customer support system/service"
                style={{ cursor: 'pointer' }}
              />
            </h2>
            <p className="mb-0">We might already have what you're looking for. See our FAQs or head to our dedicated Help Center.</p>
          </div>
          <Link  
            className="btn btn-lg btn-outline-dark" 
            to="/customer-service/support-center" 
            data-bs-toggle="popover" 
            data-bs-trigger="hover" 
            data-bs-custom-class="popover-sm" 
            data-bs-content="Get human help from our customer support system/service"
          >
            <i className="ci-info fs-base me-1"/>
            Help Center
          </Link>
        </div>
      </section>

      {/* Map */}
      <section className="position-relative bg-body-tertiary">
        <div className="position-relative w-100">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d507401.62783639313!2d3.444550859876257!3d6.512163650517913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf75df5c74367%3A0x6a7e7df9d6c1cd4a!2sLekki%2C%20Lagos!5e0!3m2!1sen!2sng!4v1756622006515!5m2!1sen!2sng"
            className="w-100 border-0"
            style={{
              height: '600px'
            }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Salesnet Hub Location - Lekki, Lagos, Nigeria"
          />
          
          {/* Custom marker overlay */}
          <div className="position-absolute top-50 start-50 translate-middle z-2 pointer-events-none"
            style={{ marginTop: '-25px' }} >
            <div 
              className="d-flex align-items-center justify-content-center bg-primary text-white rounded-circle shadow-lg"
              style={{ width: '50px', height: '50px' }}
            >
              <i className="ci-map-pin fs-4" />
            </div>
            <div className="position-absolute top-100 start-50 translate-middle-x mt-2 bg-white text-dark px-3 py-2 rounded shadow-sm border"
              style={{ whiteSpace: 'nowrap', fontSize: '12px' }}
            >
              <strong>Sales Hub</strong>
              <br />
              Lekki, Lagos, Nigeria
            </div>
          </div>
          
          {/* Responsive height adjustments */}
          <style jsx="true">{`
            @media (max-width: 1399.98px) {
              iframe {
                height: 500px !important;
              }
            }
            @media (max-width: 1199.98px) {
              iframe {
                height: 420px !important;
              }
            }
            @media (max-width: 991.98px) {
              iframe {
                height: 350px !important;
              }
            }
            @media (max-width: 767.98px) {
              iframe {
                height: 300px !important;
              }
            }
          `}</style>
        </div>
      </section>

      {/* FAQ and Instagram side by side */}
      <section className="container pt-5 mt-2 mt-sm-3 mt-lg-4 mt-xl-5">
        <div className="row g-4 g-lg-5">
          {/* FAQ accordion - Left side */}
          <div className="col-lg-6">
            <div className="pe-lg-3">
              <h2 className="text-center text-lg-start pt-xxl-3 pb-lg-2 pb-xl-3 mb-4">Popular Questions</h2>
              <div 
                className="overflow-auto pe-2" 
                style={{ 
                  maxHeight: '500px',
                  scrollbarWidth: 'thin',
                  scrollbarColor: '#dee2e6 transparent'
                }}
              >
                <div className="accordion accordion-alt-icon" id="faq">
                  {faqData.map((faq) => (
                    <div key={faq.id} className="accordion-item">
                      <h3 className="accordion-header" id={`faqHeading-${faq.id}`}>
                        <button 
                          type="button" 
                          className="accordion-button hover-effect-underline collapsed" 
                          data-bs-toggle="collapse" 
                          data-bs-target={`#faqCollapse-${faq.id}`} 
                          aria-expanded="false" 
                          aria-controls={`faqCollapse-${faq.id}`}
                        >
                          <span className="me-2">{faq.question}</span>
                        </button>
                      </h3>
                      <div 
                        className="accordion-collapse collapse" 
                        id={`faqCollapse-${faq.id}`} 
                        aria-labelledby={`faqHeading-${faq.id}`} 
                        data-bs-parent="#faq"
                      >
                        <div className="accordion-body">{faq.answer}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Instagram feed - Right side */}
          <div className="col-lg-6">
            <div className="ps-lg-3">
              <div className="text-center text-lg-start pt-xxl-3 pb-lg-2 pb-xl-3 mb-4">
                <h2>
                  <span className="animate-underline">
                    <Link  className="animate-target text-dark-emphasis text-decoration-none" to="#!">Our Insta Posts</Link>
                  </span>
                </h2>
              </div>
              <div 
                className="overflow-auto pe-2" 
                style={{ 
                  maxHeight: '500px',
                  scrollbarWidth: 'thin',
                  scrollbarColor: '#dee2e6 transparent'
                }}
              >
                <div className="row g-2 g-md-3">
                  {instagramPosts.map((post) => (
                    <div key={post.id} className="col-6">
                      <Link  
                        className="hover-effect-scale hover-effect-opacity position-relative w-100 overflow-hidden d-block" 
                        to="#!"
                      >
                        <span className="hover-effect-target position-absolute top-0 start-0 w-100 h-100 bg-black bg-opacity-25 opacity-0 z-1" />
                        <i className="ci-instagram hover-effect-target fs-4 text-white position-absolute top-50 start-50 translate-middle opacity-0 z-2" />
                        <div className="hover-effect-target ratio ratio-1x1">
                          <img src={post.image} alt={post.alt} className="w-100 h-100 object-fit-cover rounded" />
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterMini />

      <style jsx="true">{`
        .overflow-auto::-webkit-scrollbar {
          width: 6px;
        }
        .overflow-auto::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 3px;
        }
        .overflow-auto::-webkit-scrollbar-thumb {
          background: #c1c1c1;
          border-radius: 3px;
        }
        .overflow-auto::-webkit-scrollbar-thumb:hover {
          background: #a8a8a8;
        }
        
        /* Hide scrollbars for Firefox */
        .overflow-auto {
          scrollbar-width: thin;
          scrollbar-color: #c1c1c1 #f1f1f1;
        }
        
        /* Ensure no vertical scrollbars on main container */
        .content-wrapper {
          overflow-x: hidden;
        }
        
        /* Smooth scroll behavior */
        html {
          scroll-behavior: smooth;
        }
        
        /* Enhanced hover effects */
        .hover-effect-scale:hover .hover-effect-target {
          transform: scale(1.05);
          transition: transform 0.3s ease;
        }
        
        .animate-underline .animate-target:hover {
          text-decoration: underline !important;
        }
        
        /* Button hover effects */
        .btn:hover {
          transform: translateY(-1px);
          transition: transform 0.2s ease;
        }
        
        /* Form validation styles */
        .form-control:invalid {
          border-color: #dc3545;
        }
        
        .form-control:valid {
          border-color: #198754;
        }
      `}</style>
    </main>

    </>
  );
};

export default ContactUs;