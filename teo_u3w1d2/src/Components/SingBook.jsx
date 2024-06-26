import React from "react";
import { Button, Card } from "react-bootstrap";

class SingBook extends React.Component {
  render() {
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={this.props.img} />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.price}</Card.Text>
          <Button variant="primary">More Info</Button>
        </Card.Body>
      </Card>
    );
  }
}
export default SingBook;
