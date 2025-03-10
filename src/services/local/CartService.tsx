import {LocalStorageService} from "./base/LocalStorageService";

const CART_KEY = 'basket';
let observers = [];

function notifyObservers(basket) {
    // const basket = JSON.parse(LocalStorageService.get(CART_KEY));
    observers.forEach(o => {
        o(basket);
    });
}

export const CartService = {

    subscribe(observer, receiveFirstState = true) {
        if (observers.indexOf(observer) === -1) {
            observers.push(observer);
            if (receiveFirstState) {
                const basket = JSON.parse(LocalStorageService.get('basket')) || [];
                observer(basket);
            }
        }
    },
    unsubscribe(observer) {
        if (observers.includes(observer)) {
            observers = observers.filter(o => o !== observer);
        }
    },
    itemTotal() {
        if (typeof window !== 'undefined') {
            if (LocalStorageService.get()) {
                return JSON.parse(LocalStorageService.get('basket')).length
            }
        }
        return 0
    },
    addItem(product, quantity) {
        let cartItems = JSON.parse(LocalStorageService.get(CART_KEY)) || [];
        let cartItem = cartItems.find(ci => ci.id === product.id);

        // If it will be a change then proceed to save and notify the observers
        if ((cartItem && cartItem.quantity !== quantity) || !cartItem) {
            if (cartItem) {
                cartItem.quantity = quantity;
            } else {
                /* Clone the product, then trip out what we do not need
                cartItem = Object.assign({}, product);
                delete cartItem.stock;
                delete cartItem.comments;
                delete cartItem.tags;
                delete cartItem.categories;
                */
                // or take what we need and build a new object
                const {id, name, slug, price, image_urls} = product;
                cartItem = {
                    id, name, slug, price, quantity, image_urls
                };

                cartItems.push(cartItem);
            }
            localStorage.setItem(CART_KEY, JSON.stringify(cartItems));

            notifyObservers(cartItems);
        }
    },
    updateCart(itemIndex, quantity) {
        let basket = [];
        if (typeof window !== "undefined") {
            if (LocalStorageService.get(CART_KEY)) {
                basket = JSON.parse(LocalStorageService.get(CART_KEY))
            }
            basket[itemIndex].quantity = quantity;
            localStorage.setItem(CART_KEY, JSON.stringify(basket));
            notifyObservers(basket);
        }

    },
    getCart() {
        if (typeof window !== "undefined") {
            if (LocalStorageService.get(CART_KEY)) {
                const basket = JSON.parse(LocalStorageService.get(CART_KEY));
                notifyObservers(basket);
                return;
            }
        }
        return []
    },
    removeItem(itemIndex) {
        let basket = [];
        if (typeof window !== "undefined") {
            if (LocalStorageService.get(CART_KEY)) {
                basket = JSON.parse(LocalStorageService.get(CART_KEY))
            }
            basket.splice(itemIndex, 1);
            LocalStorageService.set(CART_KEY, JSON.stringify(basket));
            notifyObservers(basket);
        }
        return basket
    },
    emptyCart() {
        LocalStorageService.remove(CART_KEY);
        notifyObservers([]);
    },
};
