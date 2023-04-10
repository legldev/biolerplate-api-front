import { Container, Row, Col } from "react-bootstrap";

const Home: React.FC = () => {
  return (
    <Container className="justify-content-md-center">
      <Row>
        <Row>
          <Col xs={12} md={6}>
            Hola Mundo
          </Col>
        </Row>
      </Row>
    </Container>
  );
};

export default Home;
