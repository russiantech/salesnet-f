import React from 'react';

interface SocialShareProps {
  url: string;
  title: string;
  description: string;
  image?: string;
}

const SocialShare: React.FC<SocialShareProps> = ({ url, title, description, image }) => {
  const shareTo = (platform: string) => {
    const encodedUrl = encodeURIComponent(url);
    const text = `${title} - ${description}`;
    
    switch(platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodedUrl}`, '_blank');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodeURIComponent(title)}`, '_blank');
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        break;
    }
  };

  return (
    <div className="dropdown">
      <button className="btn btn-icon btn-secondary rounded-circle" data-bs-toggle="dropdown">
        <i className="ci-share-2" />
      </button>
      <ul className="dropdown-menu dropdown-menu-end">
        <li>
          <button className="dropdown-item" onClick={() => shareTo('facebook')}>
            <i className="ci-facebook me-2" />
            Facebook
          </button>
        </li>
        <li>
          <button className="dropdown-item" onClick={() => shareTo('twitter')}>
            <i className="ci-twitter me-2" />
            Twitter
          </button>
        </li>
        <li>
          <button className="dropdown-item" onClick={() => shareTo('linkedin')}>
            <i className="ci-linkedin me-2" />
            LinkedIn
          </button>
        </li>
        <li>
          <button className="dropdown-item" onClick={() => shareTo('copy')}>
            <i className="ci-copy me-2" />
            Copy Link
          </button>
        </li>
      </ul>
    </div>
  );
};

export default SocialShare;