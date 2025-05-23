import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Component } from 'react';
import { AxiosAddressesService } from "../../../services/net/AxiosAddressesService";
import { AxiosOrdersService } from "../../../services/net/AxiosOrdersService";
import { CartService } from "../../../services/local/CartService";
import { NotificationService } from "../../../services/local/NotificationService";
import { UsersService } from "../../../services/local/UsersService";
class Checkout extends Component {
    constructor(props) {
        super(props);
        const defaultAddress = {
            id: -1,
            first_name: '',
            last_name: '',
            street_address: '',
            city: '',
            country: '',
            zip_code: ''
        };
        this.state = {
            addresses: [],
            cart_items: [],
            active_address: { ...defaultAddress },
            mutable_address: { ...defaultAddress },
            is_authenticated: false,
            cart_changed_callback: this.onCartUpdate.bind(this),
        };
    }
    componentWillMount() {
        const self = this;
        CartService.subscribe(this.state.cart_changed_callback);
        if (UsersService.isAuthenticated()) {
            AxiosAddressesService.fetchAll().then(res => {
                self.setState({ addresses: res.data.addresses });
            }).catch(err => {
                NotificationService.showDialogError(err.message);
            });
        }
    }
    componentWillUnmount() {
        CartService.unsubscribe(this.state.cart_changed_callback);
    }
    onAddressChanged(evt) {
        // const selectedOptionHtml = evt.target.children[evt.target.selectedIndex];
        const addressId = parseInt(evt.target.value);
        const address = this.state.addresses.find(address => address.id === addressId);
        this.setState({
            active_address: address,
            mutable_address: { ...address }
        });
    }
    onCartUpdate(cart) {
        this.setState({ cart_items: cart });
    }
    placeOrder() {
        const activeAddress = this.state.active_address;
        // _.isEqual(this.state.active_address, this.state.mutable_address)
        //if (activeAddress.first_name === this.state.first_name && activeAddress.last_name === this.state.last_name && activeAddress.country === this.state.country && activeAddress.city === this.state.city && activeAddress.zip_code === this.state.zip_code) {
        if (JSON.stringify(this.state.active_address) === JSON.stringify(this.state.mutable_address)) {
            debugger;
            AxiosOrdersService.checkoutReusingAddress(this.state.cart_items, this.state.active_address.id).then(res => {
                if (res.data && res.data.success) {
                    const message = res.data.full_messages instanceof Array
                        && res.data.full_messages.length > 0 ? res.data.full_messages[0] : 'Order made successfully';
                    NotificationService.showDialogSuccess(message);
                    CartService.emptyCart();
                    this.props.history.push('/');
                }
            }).catch(err => {
                NotificationService.showDialogError(err.message);
            });
        }
        else {
            AxiosOrdersService.checkoutWithNewAddress(this.state.cart_items, this.state.mutable_address).then(res => {
                if (res.data && res.data.success) {
                    const message = res.data.full_messages instanceof Array
                        && res.data.full_messages.length > 0 ? res.data.full_messages[0] : 'Order made successfully';
                    NotificationService.showDialogSuccess(message);
                    this.props.history.push('/');
                }
            }).catch(err => {
                NotificationService.showDialogError(err.message);
            });
        }
    }
    onInputChange(key, evt) {
        this.setState({
            mutable_address: {
                ...this.state.mutable_address,
                [key]: evt.target.value
            }
        });
    }
    render() {
        const placehoderDiv = {
            marginTop: '70px',
            marginBottom: '70px'
        };
        let addressesView = _jsx(_Fragment, {});
        if (this.state.addresses.length > 0) {
            let options = this.state.addresses.map(ad => {
                return _jsxs("option", { value: ad.id, children: [ad.street_address, "/", ad.country, "/", ad.city, "/", ad.zip_code] }, ad.id);
            });
            addressesView = _jsxs("select", { onChange: this.onAddressChanged.bind(this), children: [_jsx("option", { value: "-1", children: "Not selected" }), options] });
        }
        return (_jsxs("div", { className: "card text-center shadow-lg p-3 mb-5 bg-white rounded page-hero d-flex align-items-center justify-content-center", children: [_jsxs("div", { className: "cart-body", children: [addressesView, _jsx("h4", { children: "Shipping Address" }), _jsxs("div", { className: "form-group col-md-12", children: [_jsx("strong", { children: "First Name:" }), _jsx("input", { type: "text", name: "first_name", className: "form-control", onChange: (evt) => this.onInputChange('first_name', evt), value: this.state.mutable_address.first_name })] }), _jsxs("div", { className: "form-group col-md-12", children: [_jsx("strong", { children: "Last Name:" }), _jsx("input", { type: " text", name: " last_name", className: "form-control", onChange: (evt) => this.onInputChange('last_name', evt), value: this.state.mutable_address.last_name })] }), _jsxs("div", { className: "form-group col-md-12", children: [_jsx("div", { className: " col-md-12", children: _jsx("strong", { children: "Street Address" }) }), _jsx("input", { type: " text", name: " address", className: " form-control", onChange: (evt) => this.onInputChange('street_address', evt), value: this.state.mutable_address.street_address })] }), _jsxs("div", { className: "form-group col-md-12", children: [_jsx("div", { className: " col-md-12", children: _jsx("strong", { children: "City:" }) }), _jsx("input", { type: " text", name: " city", className: " form-control", onChange: (evt) => this.onInputChange('city', evt), value: this.state.mutable_address.city })] }), _jsxs("div", { className: "form-group col-md-12", children: [_jsx("div", { className: " col-md-12", children: _jsx("strong", { children: "Country:" }) }), _jsx("input", { type: " text", name: "state", className: " form-control", onChange: (evt) => this.onInputChange('country', evt), value: this.state.mutable_address.country })] }), _jsxs("div", { className: "form-group col-md-12", children: [_jsx("div", { className: " col-md-12", children: _jsx("strong", { children: "Zip / Postal Code:" }) }), _jsx("input", { type: " text", name: " zip_code", className: " form-control", onChange: (evt) => this.onInputChange('zip_code', evt), value: this.state.mutable_address.zip_code })] })] }), _jsx("div", { className: "row cart-footer", children: _jsx("button", { type: "button", className: "btn btn-primary btn-submit-fix", onClick: this.placeOrder.bind(this), children: "Place Order" }) })] }));
    }
}
export default Checkout;
