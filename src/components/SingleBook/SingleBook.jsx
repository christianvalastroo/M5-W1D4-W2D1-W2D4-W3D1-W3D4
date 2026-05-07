import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import './SingleBook.css';
import CommentArea from '../CommentArea/CommentArea';

const SingleBook = (props) => {

    // Quando il libro è selezionato, mostra l'area commenti.
    const [selected, setSelected] = useState(false)

    return (
        <>
        <Card
            className={`book-card ${selected ? "selected" : ""}`}
        >
            <Card.Img
                className="book-img"
                variant="top" src={props.img}
                onClick={() => setSelected(!selected)}
            />

            <Card.Body className="book-body">
                <Card.Title className="book-title">{props.title}</Card.Title>
                <Card.Text className="book-price">{props.price} €</Card.Text>
            </Card.Body>
        </Card>

        {selected && <CommentArea asin={props.asin} />}
        
        </>
    )
}

export default SingleBook
