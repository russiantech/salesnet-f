import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import ProductSummary from "./ProductSummary_0";
import { ProductAxiosService } from '../../services/net/ProductAxiosService';
import { NotificationService } from "../../services/local/NotificationService";
import Pagination from "../../partials/Pagination";
class ProductList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            page_meta: {}
        };
    }
    componentDidMount() {
        this.fetchProducts();
    }
    fetchMore(location, page, page_size) {
        this.fetchProducts({ location, page, page_size });
    }
    fetchProducts(query) {
        ProductAxiosService.fetchPage(query).then(res => {
            console.log('The response is:');
            console.log(res.data.products);
            this.setState({ products: res.data.products, page_meta: res.data.page_meta });
        }).catch(err => {
            NotificationService.showDialogError(err.message);
        });
    }
    render() {
        let ProductsSummary;
        if (this.state.products) {
            ProductsSummary = [...Array(this.state.products.length).keys()].map(i => {
                let product = this.state.products[i];
                return (_jsx(ProductSummary, { image: product.image_urls.length > 0 ? product.image_urls[0] : '', name: product.name, slug: product.slug, price: product.price, id: product.id, url: '/products/' + product.slug }, i));
            });
        }
        else {
            ProductsSummary = _jsx("h2", { children: "Loading ..." });
        }
        return (_jsxs("div", { className: "container", style: { marginTop: "100px" }, children: [_jsx("div", { className: "row", children: _jsx("div", { className: "col-lg-12", children: _jsx("div", { className: "row", children: ProductsSummary }) }) }), _jsx(Pagination, { loadMore: this.fetchMore.bind(this), pageMeta: this.state.page_meta })] }));
    }
}
export default ProductList;
