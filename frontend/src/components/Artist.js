import { Button, Card, Container, Row, Col } from 'react-bootstrap';

function Artist() {
  return (
    <Container>
      <Row>
        <Col>
          <img
            alt=""
            style={{ width: '4rem', height: '4rem' }}
            src="https://i.scdn.co/image/ab6761610000e5eb9555a0b3231117c8cde1fca7"
          />
        </Col>
        <Col style={{ color: '#865DFF' }} className="my-auto">
          Jack Johnson
        </Col>
      </Row>
    </Container>
  );
}

export default Artist;
