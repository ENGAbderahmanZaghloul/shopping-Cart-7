import { Button, Stack } from "react-bootstrap";
import StoreItems from '../data/storeItems.json';
import FormatCurrency from "./FormatCurrency";
import { useShppingcart } from '../contexts/ShoppingCartContext';

export default function CartItemComp({ id, quantity }) {
    const { removeItemFromCart } = useShppingcart()
    const item = StoreItems.find((i) => i.id === id);
    if (item == null) return null;
    return <Stack direction="horizontal" className="d-flex align-items-center" gap={2}>
        <img src={item.imgUrl} alt="Cart-img"
            style={{ width: "125px", height: "75px", objectFit: "cover" }} />
        <div className="me-auto">
            <div>
                {item.name}
                {quantity > 1 && (<span className="text-muted" style={{ fontSize: "0.65rem" }}>
                    x{quantity}
                </span>)}

                <div className="text-muted" style={{ fontSize: "0.75rem" }} >
                    {FormatCurrency(item.price)}
                </div>
            </div>



        </div>

        <div >
            {FormatCurrency(item.price * quantity)}
        </div>
        <Button variant="outline-danger" size="sm" onClick={() => removeItemFromCart(item.id)} >
            &times;
        </Button>
    </Stack>

}