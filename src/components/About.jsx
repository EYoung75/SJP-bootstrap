import React from "react";
import { Col, Row, Container } from "reactstrap";

const About = () => {
  return (
    <Container>
      <div className="about">
      <h1>About</h1>
        <img src={require("../assets/Clinic_exterior.JPG")} alt="clinic" />
        <h4>St. John's Pediatric Clinic</h4>
          <Row className="drs">
            <Col>
              <img src={require("../assets/Dr.Abrea.jpg")} alt="Dr. Abrea" />
              <p>Leticia Abrea M.D. FAAP</p>
            </Col>
            <Col>
              <img src={require("../assets/Dr.Dizon.jpg")} alt="Dr. Dizon" />
              <p>Liberty Dizon M.D. FAAP</p>
            </Col>
            <Col>
              <img
                src={require("../assets/Dr.Valenzuela.jpg")}
                alt="Dr. Valenzuela"
              />
              <p>Vanessa Valenzuela M.D. FAAP</p>
            </Col>
          </Row>
          <div className="bio">
            <h4>History of St. John’s Pediatrics </h4>
            <p>
              St. John’s Pediatrics was established in 2007 in the City of
              Jacksonville, state of Florida by two local Pediatricians, Dr.
              Leticia Abrea and Dr. Liberty Dizon, both graduates of the
              University of Florida, at Shands Jacksonville, Department of
              Pediatrics in 2004 and 2006 respectively. They were later joined
              by another UF Graduate Class 2005, Dr. Maria Vanessa Valenzuela in
              2013. All three doctors received their degree as Doctor of
              Medicine in the Philippines graduating in some of the most
              prestigious universities in Manila. All three received awards at
              some point during college and residency. Drs. Abrea and Dizon were
              practicing pediatrics in the Philippines for several years before
              moving to the US. They are all currently board-certified by
              American Board of Pediatrics. All of our doctors are equally
              successful in their chosen field as doctors for children from
              birth to adolescence while simultaneously and effectively raising
              their own children as parents.
            </p>
            <p>
              St. John’s Pediatrics has been a strong advocate in the wellness
              of pediatrics population in the city of Jacksonville in areas of
              sports and physical activity, weight consciousness through proper
              nutrition, good education preparing them for a bright future, and
              mental wellness through early detection of illicit drug use,
              sexual activity and violence through anticipatory guidance. The
              practice strongly supports vaccination for children according to
              the AAP and CDC guidelines for a healthier community.
            </p>
            <p>
              We believe in the saying that family is the basic foundation of
              our society. Our children are the future of this nation, hence,
              the mission of St. John’s Pediatrics is to partner with parents in
              keeping their children healthy, responsible, and productive
              towards adulthood.
            </p>
          </div>
 
      </div>
    </Container>
  );
};

export default About;
