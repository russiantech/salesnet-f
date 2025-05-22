import { Helmet } from 'react-helmet-async';

const SeoConfig = ({ title, description, keywords, canonical, image }) => {
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

SeoConfig.defaultProps = {
  title: 'Salesnet | Internet of sales. Quality Products And Best Deals',
  description: 'Discover amazing products and exclusive offers at Salesnet. Shop now for the best deals!',
  keywords: 'ecommerce, online shopping, deals, offers, trending products',
  image: '/assets/img/us/logos/favicon.ico'
};

export default SeoConfig;