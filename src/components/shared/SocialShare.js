import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const SocialShare = ({ url, title, description, image }) => {
    const shareTo = (platform) => {
        const encodedUrl = encodeURIComponent(url);
        const text = `${title} - ${description}`;
        switch (platform) {
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
    return (_jsxs("div", { className: "dropdown", children: [_jsx("button", { className: "btn btn-icon btn-secondary rounded-circle", "data-bs-toggle": "dropdown", children: _jsx("i", { className: "ci-share-2" }) }), _jsxs("ul", { className: "dropdown-menu dropdown-menu-end", children: [_jsx("li", { children: _jsxs("button", { className: "dropdown-item", onClick: () => shareTo('facebook'), children: [_jsx("i", { className: "ci-facebook me-2" }), "Facebook"] }) }), _jsx("li", { children: _jsxs("button", { className: "dropdown-item", onClick: () => shareTo('twitter'), children: [_jsx("i", { className: "ci-twitter me-2" }), "Twitter"] }) }), _jsx("li", { children: _jsxs("button", { className: "dropdown-item", onClick: () => shareTo('linkedin'), children: [_jsx("i", { className: "ci-linkedin me-2" }), "LinkedIn"] }) }), _jsx("li", { children: _jsxs("button", { className: "dropdown-item", onClick: () => shareTo('copy'), children: [_jsx("i", { className: "ci-copy me-2" }), "Copy Link"] }) })] })] }));
};
export default SocialShare;
