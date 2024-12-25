import { createContext, useContext, useState, useEffect } from "react";
import PropTypes from 'prop-types';
import ShoppingCart from "../components/ShoppingCart";


let ShoppingCartContext = createContext({});

const initialCartItem = localStorage.getItem("shopping-cart") ? JSON.parse(localStorage.getItem("shopping-cart")) : []
const ShoppingCartProvider = ({ children }) => {
    const [cartItem, setCartItem] = useState(initialCartItem);


    // state of cart actions
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // useEffect and local storage
    useEffect(() => {
        localStorage.setItem("shopping-cart", JSON.stringify(cartItem));
    }, [cartItem])
    // logic functions to call in the project

    // the num of quantity in the cart 
    const getItemQuantity = (id) => {
        // return cartItem.find((i) => {
        //     i.id === id
        // })?.quantity || 0;
        return cartItem.find((i) => i.id === id)?.quantity || 0;
    }

    // add to cart && increase num of elemnt in the cart function 
    const addToCartTheQuantity = (id) => {
        setCartItem((currentItems) => {
            if (currentItems.find(i => i.id === id) == null) { //بتقوله لو العنصر دا مش موجود ف الكارت وهو هو ال انضغط عليه نفذ 
                return [...currentItems, { id, quantity: 1 }]
            } else {  // لو بقا العنصر موجود ف الكارت وضغط عليه يحصل لاي 
                return currentItems.map((i) => {
                    if (i.id === id) {
                        return { ...i, quantity: i.quantity + 1 }
                    } else {
                        return i;
                    }
                })
            }
        })
    }
    // decrease the elemnt from the cart
    const decreaseCartTheQuantity = (id) => {
        setCartItem((currentItems) => {
            if (currentItems.find(i => i.id === id) == null) { //بتقوله لو العنصر دا مش موجود ف الكارت وهو هو ال انضغط عليه نفذ 
                return currentItems.filter((i) => i.id !== id);
            } else {  // لو بقا العنصر موجود ف الكارت وضغط عليه يحصل لاي 
                return currentItems.map((i) => {
                    if (i.id === id) {
                        return { ...i, quantity: i.quantity - 1 }
                    } else {
                        return i;
                    }
                })
            }
        })
    }
    // remove elemnt from the cart
    const removeItemFromCart = (id) => {
        // setCartItem((currentItems) =>{
        //     currentItems.filter((i) => i.id !== id);

        // })
        setCartItem((currentItems) => currentItems.filter((i) => i.id !== id));
    }

    // know the num of items in the cart
    const cartQuantity = cartItem.reduce((quantity, item) => item.quantity + quantity, 0)

    return <ShoppingCartContext.Provider
        value={{
            cartItem,
            getItemQuantity,
            addToCartTheQuantity,
            decreaseCartTheQuantity,
            removeItemFromCart,
            handleClose,
            handleShow,
            cartQuantity
        }}>
        {children}
        <ShoppingCart show={show} />
    </ShoppingCartContext.Provider>
}

export default ShoppingCartProvider;


// data you want  to reach === call useShppingcart custom hook
export const useShppingcart = () => {
    return useContext(ShoppingCartContext);
}


ShoppingCartProvider.propTypes = {
    children: PropTypes.string.isRequired,

};
