import { Container, Navbar as NavbarBs, Nav, Button } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useShppingcart } from '../contexts/ShoppingCartContext';
export default function Navbar() {
    const { handleShow, cartQuantity } = useShppingcart();
    // const item = cartItem.find((i) => i.id === id);
    return (
        <>
            <NavbarBs sticky="top" className="bg-white shadow rounded mb-3">
                <Container>
                    <Nav>
                        <Nav.Link to='/' as={NavLink}>Home</Nav.Link>
                        <Nav.Link to='/store' as={NavLink}>Store</Nav.Link>
                        <Nav.Link to='/about' as={NavLink}>About</Nav.Link>
                    </Nav>
                    <Button style={{ width: "3rem", height: "3rem", position: "relative" }}
                        variant="outline-warning"
                        className="rounded-circle "
                        onClick={handleShow}
                    >
                        <ShoppingCartIcon />
                        <div
                            className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                            style={{
                                width: "1.5rem",
                                height: "1.5rem",
                                position: "absolute",
                                right: "0",
                                bottom: "0",
                                transform: "translate(25%,25%)",
                                color: "white"
                            }}

                        >
                            {cartQuantity}
                        </div>
                    </Button>
                </Container>
            </NavbarBs>
        </>
    )
}