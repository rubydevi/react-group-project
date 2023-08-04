import React from 'react';
import { useSelector } from 'react-redux';
import ListGroup from 'react-bootstrap/ListGroup';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';

const ReservedDragons = () => {
  const { dragons } = useSelector((state) => state.dragons);
  const reservedDragons = dragons.filter((dragon) => dragon.reserved === true);

  return (
    <Container className="mt-4">
      <Row>
        {reservedDragons.length > 0 ? (
          <Col>
            <ListGroup>
              {
            reservedDragons.map((dragon) => (
              <ListGroup.Item key={dragon.id}>{dragon.name}</ListGroup.Item>
            ))
              }
            </ListGroup>
          </Col>
        ) : (
          <Col>
            <h5>
              Dragons
              {' '}
              <Badge bg="info">No dragon reserved</Badge>
            </h5>
          </Col>
        )}

      </Row>
    </Container>

  );
};

export default ReservedDragons;
