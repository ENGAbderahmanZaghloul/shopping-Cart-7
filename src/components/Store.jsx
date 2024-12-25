import { Row , Col } from "react-bootstrap"
import StoreItems from '../data/storeItems.json';
import StoreItem from "./StoreItem";
export default function Store() {
    return (
        <>
        <h1>Store</h1>
            <Row lg={4} md={2} xs={1} className="g-3">
                {StoreItems.map((i)=>(
                    <Col key={i.id}>
                        <StoreItem {...i} />
                    </Col>
                ))}
            </Row>
        </>
    )
}