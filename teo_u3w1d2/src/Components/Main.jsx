import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import fantasy from "../data/fantasy.json";

class Main extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col className="d-flex row justify-content-around">
            {fantasy.map((book) => {
              return (
                <Card className="m-2 card" style={{ width: "19rem" }} key={`BOOK-${book.asin}`}>
                  <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Img className="cardImg" variant="top" src={book.img} />
                    <Card.Text>{book.category}</Card.Text>
                    <Card.Text> € {book.price}</Card.Text>
                    <button className="btn btn-primary">Acquista</button>
                  </Card.Body>
                </Card>
              );
            })}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Main;
