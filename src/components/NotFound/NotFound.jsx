import { Container } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';

const NotFound = () => {
    return (
        <Container>
            <Alert className='text-center p-4'>
                404 - Pagina non trovata
            </Alert>
        </Container>
    )
}

export default NotFound
