import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Helmet } from 'react-helmet-async';
const SeoConfig = ({ title, description, keywords, canonical, image }) => {
    return (_jsxs(Helmet, { children: [_jsx("title", { children: title }), _jsx("meta", { name: "description", content: description }), _jsx("meta", { name: "keywords", content: keywords }), _jsx("meta", { property: "og:title", content: title }), _jsx("meta", { property: "og:description", content: description }), _jsx("meta", { property: "og:image", content: image }), _jsx("meta", { name: "twitter:title", content: title }), _jsx("meta", { name: "twitter:description", content: description }), _jsx("meta", { name: "twitter:image", content: image }), canonical && _jsx("link", { rel: "canonical", href: canonical })] }));
};
SeoConfig.defaultProps = {
    title: 'Salesnet | Internet of sales. Quality Products And Best Deals',
    description: 'Discover amazing products and exclusive offers at Salesnet. Shop now for the best deals!',
    keywords: 'ecommerce, online shopping, deals, offers, trending products',
    image: '/assets/img/us/logos/favicon.ico'
};
export default SeoConfig;
