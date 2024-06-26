import React from "react";
import { Card, Col, Container, FormControl, Row } from "react-bootstrap";
import fantasy from "../data/fantasy.json";

class Main extends React.Component {
  state = { search: "" };
  render() {
    return (
      <Container>
        <Row>
          <FormControl className="text-center" type="text" placeholder="Search" value={this.state.search} />
          <Col className="d-flex row justify-content-around">
            {fantasy.map((book) => {
              return (
                <Card className="m-2 cardBook d-flex p-2" style={{ width: "21rem" }} key={`BOOK-${book.asin}`}>
                  <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Img className="cardImg" variant="top" value src={book.img} />
                    <Card.Text>value={book.category}</Card.Text>
                    <Card.Text> € {book.price}</Card.Text>
                    <button className="btn btnBay">Acquista</button>
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
