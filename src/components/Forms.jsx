import React from "react";
import { Button, Container, Row, Col } from "reactstrap";

const Forms = () => {
  return (
    <div className="forms">
      <h1>Forms</h1>
      <h3>(Select to follow link to Google Form)</h3>
      <Container>
        <Button color="secondary" size="lg" block>
          Patient Registration Form
        </Button>
        <Button color="secondary" size="lg" block>
          Patient Insurance Form
        </Button>
        <Button color="secondary" size="lg" block>
          Records Release Form
        </Button>
      </Container>

      {/* <div className="forms">
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://docs.google.com/forms/d/e/1FAIpQLSfP9ZNpx6oox2T0BuqreE12AhLQdtnVmKV_qMXqgzB5--SjLQ/viewform?usp=sf_link"
        >
          <button>Patient Registration Form</button>
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://docs.google.com/forms/d/e/1FAIpQLSfwTcWBUFdIr9NDmEqmlCLYTuhOYtNuIH0FDPSWLGSPeW3wBA/viewform?usp=sf_link"
        >
          <button>Patient Insurance Information</button>
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://docs.google.com/forms/d/e/1FAIpQLSer9ZGvbpKOVkA8AxALlp7THs7FYkHxDtzXuuAzTn7KeJ6Ayg/viewform?usp=sf_link"
        >
          <button>Medical Records Release Form</button>
        </a>
      </div> */}
    </div>
  );
};

export default Forms;
