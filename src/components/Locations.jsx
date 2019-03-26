import React from "react";
import { Container, Row, Col, Card } from "reactstrap";

const Locations = () => {
  return (
    <Container>
      <div className="locations">
        <h1>Locations:</h1>
        <Container>
          <Row>
            <Col>
              <Card className="locCard">
                <h4>Jacksonville:</h4>
                <a href="https://goo.gl/maps/xmzasosGh4N2">
                  <b>9860 Ste A, Beach Blvd, Jacksonville, FL 32246</b>
                </a>
                <br />
                <a href="tel:904-642-9929">Phone: 904-642-9929</a>
                <a href="tel:904-642-9910">Fax: 904-642-9910</a>

                <h4>Hours:</h4>
                <p> Mon-Fri: 8:30-5:00</p>
                <p>Sat: 9:30-12:00</p>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card className="locCard">
                <h4>St. Augustine:</h4>
                <a href="https://goo.gl/maps/mppfmEShv3s">
                  <b>161-4 Hampton Point Drive, Saint Augustine, FL 32092</b>
                </a>
                <br />
                <a href="tel:904-230-0624">Phone: 904-230-0624 </a>
                <a href="tel:904-230-9427">Fax: 904-230-9427</a>
                  <h4>Hours:</h4>
                  <p> Mon-Fri: 8:30-5:00</p>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </Container>
  )
}

export default Locations;
