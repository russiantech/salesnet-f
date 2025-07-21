// src/components/product/ShareButton.tsx
import { useState } from 'react';
import { NotificationService } from '../../../services/local/NotificationService';

interface ShareButtonProps {
  productId: string;
  productName: string;
  className?: string;
}

export const ShareButton = ({ 
  productId, 
  productName, 
  className = ''
}: ShareButtonProps) => {
  const [showDropdown, setShowDropdown] = useState(false);
  
  const handleSocialShare = (platform: string) => {
    const url = window.location.href;
    const text = `Check out ${productName} on SalesNet!`;
    
    switch (platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(productName)}`, '_blank');
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        NotificationService.showDialog('Link copied to clipboard!', 'success');
        break;
      default:
        break;
    }
    
    setShowDropdown(false);
  };

  return (
    <div className={`dropdown ${className}`}>
      {/* <button 
        className="btn btn-icon btn-secondary animate-scale rounded-circle"
        aria-label="Share"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <i className="ci-share-2 animate-target fs-sm" />
      </button> */}

      <button aria-expanded="false" aria-label="Share" onClick={() => setShowDropdown(!showDropdown)}
       className="btn btn-icon btn-sm btn-secondary animate-scale rounded-circle" 
        data-bs-toggle="dropdown" type="button">
            <i className="ci-share-2 animate-target fs-sm" />
      </button>
      
      <ul className={`dropdown-menu dropdown-menu-end ${showDropdown ? 'show' : ''}`} style={{ minWidth: '8.5rem' }}>
    {/* <ul className="dropdown-menu dropdown-menu-end" style={{ "--cz-dropdown-min-width": "8.5rem" }}> */}

        <li>
          <button className="dropdown-item" onClick={() => handleSocialShare('facebook')}>
            <i className="ci-facebook fs-base me-2 text-info" />
            Facebook
          </button>
        </li>
                                                                            
        <li>
          <button className="dropdown-item" onClick={() => handleSocialShare('twitter')}>
            <i className="ci-twitter fs-base me-2" />
            Twitter
          </button>
        </li>
        <li>
          <button className="dropdown-item" onClick={() => handleSocialShare('linkedin')}>
            <i className="ci-linkedin fs-base me-2 text-info" />
            LinkedIn
          </button>
        </li>
        <li>
          <button className="dropdown-item" onClick={() => handleSocialShare('copy')}>
            <i className="ci-copy fs-base me-2" />
            Copy Link
          </button>
        </li>
      </ul>
    </div>
  );
};