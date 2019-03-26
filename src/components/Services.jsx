import React from "react";
import { Container } from "reactstrap";

const Services = () => {
  return (
    <Container>
      <div className="services">
        <h1>Services</h1>
        <img src={require("../assets/Patient.JPEG")} alt="patient" />
        <img src={require("../assets/treatment.jpg")} alt="treatment" />
        <div className="offerings">
          <h3>What we offer:</h3>
          <ul>
            <li>Same day appointments</li>
            <li>Open for half day on Saturday (Beach Location)</li>
            <li>24 hour patient phone support</li>
            <li>Accepts most insurances, including Medicaid and HMO's</li>
            <li>Round newborns in hospital</li>
            <li>
              Multi-lingual staff: Tagalong, Chinese, Spanish in addition to
              English
            </li>
            <li>Friendly and accomodating staff</li>
            <li>Separate waiting room for sick and well (Beach location)</li>
            <li>Up to date immunizations for all ages</li>
          </ul>
        </div>
        <img src={require("../assets/interior_one.JPG")} alt="Interior Mural" />
        <img
          src={require("../assets/interior_two.JPG")}
          alt="Interior Mural two"
        />
      </div>
    </Container>
  );
};

export default Services;
