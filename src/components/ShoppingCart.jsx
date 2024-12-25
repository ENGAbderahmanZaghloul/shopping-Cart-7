import { Offcanvas,Stack } from "react-bootstrap";
// import Button from 'react-bootstrap/Button';
import { useShppingcart } from "../contexts/ShoppingCartContext"
import CartItemComp from "./CartItemComp"
import StoreItems from '../data/storeItems.json';
import FormatCurrency from "./FormatCurrency";


export default function ShoppingCart({ show }) {
    const { cartItem, handleClose, handleShow } = useShppingcart();

    return <>
        <Offcanvas show={show} onHide={handleClose} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Stack gap={3}>
                    {cartItem.map((i) => (
                        <CartItemComp key={i.id} {...i} />
                    ))}
                   <div className="ms-auto  fs-5 ">
                        <span className="fw-bold me-2">Total::</span>
                        {FormatCurrency(
                            cartItem.reduce((total, cartItem) => {
                                const item = StoreItems.find((i) => i.id === cartItem.id);
                                return total + (item?.price || 0) * cartItem.quantity;
                            }, 0)

                        )}
                   </div>
                </Stack>
            </Offcanvas.Body>
        </Offcanvas>
    </>

}
