import Card from 'react-bootstrap/Card';
import './SingleBook.css';

const SingleBook = (props) => {

    return (
        <>

            <Card
                className={`book-card ${props.selected === props.asin ? "selected" : ""}`}
                onClick={() => props.setSelected(props.asin)}
            >

                <Card.Img
                    className="book-img"
                    variant="top"
                    src={props.img}
                />

                <Card.Body className="book-body">
                    <Card.Title className="book-title">
                        {props.title}
                    </Card.Title>

                    <Card.Text className="book-price">
                        {props.price} €
                    </Card.Text>
                </Card.Body>

            </Card>

        </>
    )
}

export default SingleBook