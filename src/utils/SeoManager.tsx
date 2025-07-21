import { Helmet } from 'react-helmet-async';

interface SeoConfigProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  image?: string;
}

const SeoConfig = ({
  title = 'Salesnet | Internet of sales. Quality Products And Best Deals',
  description = 'Discover amazing products and exclusive offers at Salesnet. Shop now for the best deals!',
  keywords = 'ecommerce, online shopping, deals, offers, trending products',
  canonical,
  image = '/assets/img/us/logos/favicon.ico',
}: SeoConfigProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {canonical && <link rel="canonical" href={canonical} />}
    </Helmet>
  );
};

export default SeoConfig;

// v2 - custom SEO, no need for wrapping/external libraries

// // utils/useSEO.ts
// // import { useEffect } from 'react';
// import React, { useEffect } from 'react';

// interface SEOProps {
//   title?: string;
//   description?: string;
//   keywords?: string;
//   canonical?: string;
//   image?: string;
// }

// export const useSEO = ({ 
//   title = 'Salesnet | Internet of sales. Quality Products And Best Deals',
//   description = 'Discover amazing products and exclusive offers at Salesnet. Shop now for the best deals!',
//   keywords = 'ecommerce, online shopping, deals, offers, trending products',
//   canonical,
//   image = '/assets/img/us/logos/favicon.ico'
// }: SEOProps) => {
//   useEffect(() => {
//     // Update document title
//     if (title) {
//       document.title = title;
//     }

//     // Helper function to update or create meta tags
//     const updateMetaTag = (selector: string, content: string) => {
//       let meta = document.querySelector(selector) as HTMLMetaElement;
//       if (!meta) {
//         meta = document.createElement('meta');
//         if (selector.includes('property')) {
//           meta.setAttribute('property', selector.split('property="')[1].split('"')[0]);
//         } else {
//           meta.setAttribute('name', selector.split('name="')[1].split('"')[0]);
//         }
//         document.head.appendChild(meta);
//       }
//       meta.content = content;
//     };

//     // Update meta tags
//     if (description) {
//       updateMetaTag('meta[name="description"]', description);
//       updateMetaTag('meta[property="og:description"]', description);
//       updateMetaTag('meta[name="twitter:description"]', description);
//     }

//     if (keywords) {
//       updateMetaTag('meta[name="keywords"]', keywords);
//     }

//     if (title) {
//       updateMetaTag('meta[property="og:title"]', title);
//       updateMetaTag('meta[name="twitter:title"]', title);
//     }

//     if (image) {
//       updateMetaTag('meta[property="og:image"]', image);
//       updateMetaTag('meta[name="twitter:image"]', image);
//     }

//     // Update canonical URL
//     if (canonical) {
//       let linkCanonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
//       if (!linkCanonical) {
//         linkCanonical = document.createElement('link');
//         linkCanonical.rel = 'canonical';
//         document.head.appendChild(linkCanonical);
//       }
//       linkCanonical.href = `${window.location.origin}${canonical}`;
//     }
//   }, [title, description, keywords, canonical, image]);
// };

// // Component wrapper for backward compatibility
// interface SeoConfigProps {
//   title?: string;
//   description?: string;
//   keywords?: string;
//   canonical?: string;
//   image?: string;
// }

// const SeoConfig = (props: SeoConfigProps) => {
//   useSEO(props);
//   return null;
// };

// export default SeoConfig;