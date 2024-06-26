import React from "react";
import { Accordion, CardLink, Col, Container, Row } from "react-bootstrap";

class Footer extends React.Component {
  render() {
    return (
      <Container className="fixed-bottom">
        <Row className="justify-content-center">
          <Col>
            <Accordion defaultActiveKey="">
              <Accordion.Item className="" eventKey="">
                <Accordion.Header className="accordionHeader">
                  BOOK SPACE{" "}
                  <CardLink className="ms-2" href="#">
                    {" "}
                    bookspace@info.com
                  </CardLink>
                </Accordion.Header>
                <Row md="6 justify-content-around">
                  <Accordion.Body className="pe-2"> CONTACTS ☎️ 3206812491</Accordion.Body>
                  <Accordion.Body className="">ADRESS 🚘 Via Raoul Chiodelli 25, Roma RM</Accordion.Body>
                </Row>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Footer;
