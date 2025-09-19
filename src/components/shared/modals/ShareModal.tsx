// ShareModal.jsx - Professional social sharing modal
import React, { useState } from 'react';

interface BusinessProfile {
  id: number;
  name: string | null;
  username: string;
  slug: string;
  avatar: string | null;
  cover_image: string | null;
  about_me: string | null;
  type: "user" | "page";
}

interface ShareModalProps {
  show: boolean;
  onHide: () => void;
  business: BusinessProfile;
  onShare: (platform: string) => void;
}

const ShareModal: React.FC<ShareModalProps> = ({
  show,
  onHide,
  business,
  onShare
}) => {
  const [copied, setCopied] = useState(false);
  const [copyTimeout, setCopyTimeout] = useState<NodeJS.Timeout | null>(null);

  const currentUrl = window.location.href;
  const businessName = business.name || business.username;
  const title = `Check out ${businessName} on Salesnet`;

  const shareOptions = [
    {
      platform: 'facebook',
      name: 'Facebook',
      icon: 'ci-facebook',
      color: 'btn-primary',
      bgColor: '#1877F2'
    },
    {
      platform: 'twitter',
      name: 'Twitter',
      icon: 'ci-twitter',
      color: 'btn-info',
      bgColor: '#1DA1F2'
    },
    {
      platform: 'linkedin',
      name: 'LinkedIn',
      icon: 'ci-linkedin',
      color: 'btn-primary',
      bgColor: '#0A66C2'
    },
    {
      platform: 'whatsapp',
      name: 'WhatsApp',
      icon: 'ci-whatsapp',
      color: 'btn-success',
      bgColor: '#25D366'
    },
    {
      platform: 'telegram',
      name: 'Telegram',
      icon: 'ci-telegram',
      color: 'btn-info',
      bgColor: '#0088CC'
    }
  ];

  const handleShare = (platform: string) => {
    if (platform === 'copy') {
      handleCopyLink();
    } else {
      onShare(platform);
    }
  };

  const handleCopyLink = () => {
    onShare('copy');
    setCopied(true);
    
    // Clear existing timeout
    if (copyTimeout) {
      clearTimeout(copyTimeout);
    }
    
    // Reset copied state after 2 seconds
    const timeout = setTimeout(() => {
      setCopied(false);
    }, 2000);
    
    setCopyTimeout(timeout);
  };

  if (!show) return null;

  return (
    <>
      {/* Modal Backdrop */}
      <div className="modal-backdrop fade show" onClick={onHide}></div>
      
      {/* Modal */}
      <div className="modal fade show d-block" tabIndex={-1} role="dialog">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                <i className="ci-share me-2"></i>
                Share Page
              </h5>
              <button 
                type="button" 
                className="btn-close" 
                onClick={onHide}
              ></button>
            </div>
            
            <div className="modal-body">
              {/* Business Preview */}
              <div className="d-flex align-items-center mb-4 p-3 bg-light rounded">
                <img
                  src={business.avatar || "/assets/img/us/logos/avatar.png"}
                  alt={businessName}
                  className="rounded-circle me-3"
                  style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                />
                <div className="flex-grow-1">
                  <h6 className="mb-1">{businessName}</h6>
                  <p className="text-muted mb-0 small">
                    {business.about_me ? 
                      business.about_me.slice(0, 80) + (business.about_me.length > 80 ? '...' : '') 
                      : `Discover products and services from ${businessName}`
                    }
                  </p>
                </div>
              </div>

              {/* Share Options */}
              <div className="mb-4">
                <h6 className="mb-3">Share on social media</h6>
                <div className="row g-3">
                  {shareOptions.map((option) => (
                    <div className="col-6" key={option.platform}>
                      <button
                        type="button"
                        className="btn btn-outline-secondary w-100 d-flex align-items-center justify-content-start p-3"
                        onClick={() => handleShare(option.platform)}
                        style={{
                          borderColor: option.bgColor,
                          transition: 'all 0.2s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = option.bgColor;
                          e.currentTarget.style.color = 'white';
                          e.currentTarget.style.borderColor = option.bgColor;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = '';
                          e.currentTarget.style.color = '';
                          e.currentTarget.style.borderColor = option.bgColor;
                        }}
                      >
                        <i className={`${option.icon} me-2 fs-5`}></i>
                        <span className="fw-medium">{option.name}</span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Copy Link Section */}
              <div>
                <h6 className="mb-3">Or copy link</h6>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    value={currentUrl}
                    readOnly
                    style={{ backgroundColor: '#f8f9fa' }}
                  />
                  <button
                    type="button"
                    className={`btn ${copied ? 'btn-success' : 'btn-outline-primary'}`}
                    onClick={handleCopyLink}
                  >
                    {copied ? (
                      <>
                        <i className="ci-check me-1"></i>
                        Copied!
                      </>
                    ) : (
                      <>
                        <i className="ci-copy me-1"></i>
                        Copy
                      </>
                    )}
                  </button>
                </div>
                <small className="text-muted mt-2 d-block">
                  Anyone with this link can view this {business.type === 'page' ? 'page' : 'profile'}
                </small>
              </div>
            </div>
            
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onHide}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShareModal;