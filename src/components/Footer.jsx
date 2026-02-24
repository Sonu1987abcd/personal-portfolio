import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col xs={12} className="text-center mt-4">
            <div className="social-icon">

              <a
                href="https://www.linkedin.com/in/sonu1987"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon1} alt="LinkedIn" />
              </a>

              <a
                href="https://github.com/Sonu1987abcd"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon2} alt="GitHub" />
              </a>

              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon3} alt="Twitter" />
              </a>

            </div>

            <p className="mt-3">
              © {new Date().getFullYear()} Sonu Kumar Singh. All Rights Reserved.
            </p>
          </Col>

        </Row>
      </Container>
    </footer>
  );
};
