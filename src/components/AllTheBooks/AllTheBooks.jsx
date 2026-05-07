import { Container, Row, Col } from "react-bootstrap"
import fantasy from "../../books/fantasy.json"
import SingleBook from "../SingleBook/SingleBook"
import Alert from "react-bootstrap/Alert"

const AllTheBooks = ({ search }) => {

    // Filtra i libri in base al testo ricevuto dalla navbar.
    const filteredBooks = fantasy.filter((book) =>
        book.title.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <Container>
            <Row className="g-4">

                {filteredBooks.length > 0 ? (

                    // Crea una card per ogni libro trovato.
                    filteredBooks.map((book) => (
                        <Col md={3} key={book.asin}>
                            <SingleBook
                                img={book.img}
                                title={book.title}
                                price={book.price}
                                asin={book.asin}
                            />
                        </Col>
                    ))

                ) : (

                    <Col className="text-center">
                        <Alert variant="danger">
                            Nessun libro trovato per "{search}" 😢
                        </Alert>
                    </Col>

                )}

            </Row>

        </Container>
    )
}

export default AllTheBooks
