import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { CartService } from '../../../services/local/CartService';
import './Basket.css';

const Basket = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const onCartUpdated = (items) => {
      if (items) {
        setCartItems(items);
        setTotalPrice(
          items.reduce((accumulator, currentValue) => 
            accumulator + currentValue.quantity * currentValue.price, 0)
        );
      }
    };

    CartService.subscribe(onCartUpdated, true);

    return () => {
      CartService.unsubscribe(onCartUpdated);
    };
  }, []);

  const updateCart = (cartItem, quantity) => {
    CartService.addItem(cartItem, parseInt(quantity));
  };

  const deleteProductFromCart = (cartItem) => {
    CartService.removeItem(cartItem);
  };

  const calculateSubtotal = (cartItem) => {
    return cartItem.quantity * cartItem.price;
  };

  const checkoutImageStyle = {
    height: '100px',
    width: '100px'
  };

  return (
    <div className="container" style={{ marginTop: '100px', marginBottom: '110px' }}>
      <table id="cart" className="table table-hover table-condensed">
        <thead>
          <tr>
            <th style={{ width: "50%" }}>Product</th>
            <th style={{ width: "10%" }}>Price</th>
            <th style={{ width: "8%" }}>Quantity</th>
            <th style={{ width: "22%" }} className="text-center">Subtotal</th>
            <th style={{ width: "10%" }}></th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map(cartItem => (
            <tr key={cartItem.id}>
              <td data-th="Product">
                <div className="row">
                  <div className="col-sm-3 hidden-xs">
                    <img src={cartItem.image_urls[0]} style={checkoutImageStyle} alt={cartItem.name} className="img-responsive" />
                  </div>
                  <div className="col-sm-9">
                    <h4 className="nomargin">{cartItem.name}</h4>
                    <p>{cartItem.description}</p>
                  </div>
                </div>
              </td>
              <td data-th="Price">${cartItem.price}</td>
              <td data-th="Quantity">
                <input className="form-control text-center" type="number" min="1"
                  onChange={(e) => updateCart(cartItem, e.target.value)}
                  defaultValue={cartItem.quantity} />
              </td>
              <td data-th="Subtotal" className="text-center">{calculateSubtotal(cartItem)}$</td>
              <td className="my-auto" data-th="">
                <button className="remove-product" onClick={() => deleteProductFromCart(cartItem)}>X</button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className="visible-xs">
            <td className="text-center"><strong>Total ${totalPrice}</strong></td>
          </tr>
          <tr>
            <td><NavLink to="/products" className="btn btn-warning"><i className="fa fa-angle-left" /> Continue Shopping</NavLink></td>
            <td colSpan="2" className="hidden-xs" />
            <td className="hidden-xs text-center"><strong>Total ${totalPrice}</strong></td>
            <td>
              <NavLink to="/checkout" className="btn btn-success btn-block">
                Checkout
                <i className="fa fa-angle-right" />
              </NavLink>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Basket;
