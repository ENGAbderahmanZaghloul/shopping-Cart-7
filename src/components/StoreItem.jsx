import { Card, Button } from "react-bootstrap";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import PropTypes from 'prop-types';
import FormatCurrency from './FormatCurrency';
import { useShppingcart } from '../contexts/ShoppingCartContext';

export default function StoreItem({ id, title, imgUrl, price }) {
    const { getItemQuantity, addToCartTheQuantity, decreaseCartTheQuantity, removeItemFromCart } = useShppingcart();
    const itemQuantity = getItemQuantity(id);
    return (
        <>
            <Card>
                <Card.Img src={imgUrl} variant="top" style={{ height: "200px" }} />
                <Card.Body >
                    <Card.Title className="d-flex justify-content-between align-items-center">
                        <span className="fs-5" >{title}</span>
                        <span className="text-muted me-2" dir="rtl">{FormatCurrency(price)} </span>
                    </Card.Title>
                    <div className="mt-auto" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        {itemQuantity === 0 ? <Button
                            onClick={() => addToCartTheQuantity(id)}
                            variant="warning"
                            style={{ width: "80%", display: "flex", alignItems: "center", justifyContent: "center" }}
                        >Add To Cart</Button> :
                            <div className="w-100" >
                                <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <RemoveIcon
                                        onClick={() => decreaseCartTheQuantity(id)}
                                        style={{ height: "30px", width: "30px", color: "White", backgroundColor: "#ffc400", borderRadius: "7px", cursor: "pointer" }}
                                    />
                                    <div className="fs-3" style={{ margin: "auto 10px" }}> <spam>{itemQuantity}</spam> in Cart</div>
                                    <AddIcon
                                        onClick={() => addToCartTheQuantity(id)}
                                        style={{ height: "30px", width: "30px", color: "White", backgroundColor: "#ffc400", borderRadius: "7px", cursor: "pointer" }}
                                    />
                                </div>
                                <Button style={{ margin: "7px auto", display: "flex", alignItems: "center", justifyContent: "center" }}
                                    variant="danger"
                                    onClick={() => removeItemFromCart(id)}>Remove</Button>
                            </div>}
                    </div>
                </Card.Body>
            </Card>
        </>
    )
}

// define the prototype

StoreItem.propTypes = {
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    title: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
};
