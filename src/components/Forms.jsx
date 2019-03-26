import React from "react";
import { Button, Container } from "reactstrap";

const Forms = () => {
  return (
    <Container>
      <div className="forms">
        <h1>Forms</h1>
        <h3>(Select to follow link to Google Form)</h3>
        <Container>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://docs.google.com/forms/d/e/1FAIpQLSfP9ZNpx6oox2T0BuqreE12AhLQdtnVmKV_qMXqgzB5--SjLQ/viewform?usp=sf_link"
          >
            <Button color="secondary" size="lg" block>
              Patient Registration Form
            </Button>
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://docs.google.com/forms/d/e/1FAIpQLSfwTcWBUFdIr9NDmEqmlCLYTuhOYtNuIH0FDPSWLGSPeW3wBA/viewform?usp=sf_link"
          >
            <Button color="secondary" size="lg" block>
              Patient Insurance Form
            </Button>
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://docs.google.com/forms/d/e/1FAIpQLSer9ZGvbpKOVkA8AxALlp7THs7FYkHxDtzXuuAzTn7KeJ6Ayg/viewform?usp=sf_link"
          >
            <Button color="secondary" size="lg" block>
              Records Release Form
            </Button>
          </a>
        </Container>
      </div>
    </Container>
  );
};

export default Forms;
