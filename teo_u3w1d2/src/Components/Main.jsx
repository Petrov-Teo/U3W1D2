import React from "react";
import { Col, Container, FormControl, Row } from "react-bootstrap";
import SinglBook from "./SinglBook";
import fantasy from "../data/fantasy.json";

class Main extends React.Component {
  state = {
    searchBook: "",
  };
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <FormControl
              className="text-center"
              type="text"
              placeholder="Search"
              value={this.state.searchBook}
              onChange={(e) => this.setState({ searchBook: e.target.value })}
            />
            <SinglBook SinglBook={fantasy} />
          </Col>
        </Row>
        <Row>{this.props.SinglBook.filter}</Row>
      </Container>
    );
  }
}

export default Main;
