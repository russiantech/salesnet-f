import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { AxiosAddressesService } from "../../../services/net/AxiosAddressesService";
class Addresses extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            addresses: [],
            classNames: ['card bg-light mb-3', 'card text-white bg-dark mb-3']
        };
    }
    componentDidMount() {
        AxiosAddressesService.fetchAll().then(res => {
            this.setState({ addresses: res.data.addresses });
        }).catch(err => {
            throw err;
        });
    }
    render() {
        const addressesView = this.state.addresses.map((address, index) => {
            return (_jsxs("div", { className: this.state.classNames[index % 2], style: { maxWidth: "18rem;" }, children: [_jsxs("div", { className: "card-header", children: [address.first_name, " ", address.last_name, " "] }), _jsxs("div", { className: "card-body", children: [_jsxs("h5", { className: "card-title", children: [address.street_address, " ", address.city, " ", address.country] }), _jsxs("p", { className: "card-text", children: ["Zip code: ", address.zip_code] })] })] }));
        });
        return (_jsx("div", { className: "container", style: { marginTop: "100px", marginBottom: "100px" }, children: _jsxs("div", { className: "row", children: [this.state.addresses.length > 1 && addressesView, this.state.addresses.length === 0 && _jsx("h3", { children: "You have not made any order yet" })] }) }));
    }
}
export default Addresses;
