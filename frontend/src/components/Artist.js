import { Button, Card, Container, Row, Col } from 'react-bootstrap';

function Artist({ artistName, artistImage }) {
  console.log(artistName.name);
  const name = artistName.name.toUpperCase();
  console.log(name);
  const image = artistName.image;
  console.log(image);
  return (
    <Container>
      <Row>
        <Col>
          <img alt="" style={{ width: '5rem', height: '5rem' }} src={image} />
        </Col>
        <Col style={{ color: '#865DFF' }} className="my-auto">
          {name}
        </Col>
      </Row>
    </Container>
  );
}

export default Artist;
