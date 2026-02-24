import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

// Put your photo in the public folder as profile.jpg (or update the path below)
const profileImg = process.env.PUBLIC_URL + '/profile.jpg';

export const About = () => {
  return (
    <section className="about" id="about">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={profileImg} alt="My profile" className="about-profile-img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>About Me</h2>
                  <p>
                    I'm a passionate Web Developer with a strong foundation in front-end technologies 
                    and a keen eye for design. I enjoy building responsive, user-friendly applications 
                    that solve real-world problems.
                  </p>
                  <p>
                    With experience in React, JavaScript, and modern UI/UX practices, I focus on writing 
                    clean, maintainable code and creating seamless user experiences. I'm always eager to 
                    learn new technologies and take on challenging projects.
                  </p>
                  <ul className="about-highlights">
                    <li>Strong problem-solving and analytical skills</li>
                    <li>Experience with version control (Git) and collaborative workflows</li>
                    <li>Committed to continuous learning and best practices</li>
                  </ul>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
