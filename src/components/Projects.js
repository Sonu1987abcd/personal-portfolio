import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {

  const projects = [
    {
      title: "Wanderlust – Travel Listing Platform",
      description:
        "A full-stack travel listing web application where users can explore destinations, create listings, and manage bookings. Implemented secure authentication, CRUD operations, and dynamic routing.",
      features: [
        "User Authentication & Authorization",
        "Create, Edit, Delete Listings (CRUD)",
        "Cloud-based Image Upload",
        "Responsive UI Design"
      ],
      technologies: "Node.js, Express.js, MongoDB, EJS, CSS, HTML, Bootstrap",
      imgUrl: projImg2,
      liveLink: "https://wanderlust-project-7b25.onrender.com/listings",
      githubLink: "https://github.com/Sonu1987abcd/WanderLust-project",
    },
    {
      title: "Wonderland – Weather Application",
      description:
        "A real-time weather forecasting web application that fetches live weather data from external APIs and displays temperature, humidity, and weather conditions dynamically.",
      features: [
        "Real-time API Integration",
        "Dynamic UI Updates",
        "City-based Weather Search",
        "Responsive & Clean Interface"
      ],
      technologies: "React.js, REST API, JavaScript, CSS, HTML, Bootstrap, Node.js, Express.js, MongoDB Atlas",
      imgUrl: projImg1,
      liveLink: "https://wonderland-weather-app-1.onrender.com",
      githubLink: "https://github.com/Sonu1987abcd/Wonderland-Weather-App",
    },
   {
  title: "Personal Portfolio Website",
  description:
    "A responsive and modern portfolio website designed to showcase projects, resume, technical skills, and certifications with smooth animations and interactive UI.",
  features: [
    "Responsive Design (Mobile Friendly)",
    "Animated Sections using Animate.css",
    "Project Showcase with Live & GitHub Links",
    "Resume View & Download Feature"
  ],
  technologies: "React.js, REST API, JavaScript, CSS, HTML, Bootstrap, Node.js, Express.js, MongoDB Atlas",
  imgUrl: projImg3,
  liveLink: "https://personal-portfolio-p32k.onrender.com/",  // 👈 Replace with your real deployed link
  githubLink: "https://github.com/Sonu1987abcd/personal-portfolio",
},

  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col xs={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  
                  <h2>Projects</h2>
                  <p>
                    These projects demonstrate my ability to design, develop,
                    and deploy scalable web applications using modern
                    technologies. Each project reflects strong problem-solving
                    skills, backend logic implementation, API integration,
                    and responsive UI development.
                  </p>

                  <Tab.Container defaultActiveKey="all">
                    <Nav variant="pills" className="mb-4 justify-content-center">
                      <Nav.Item>
                        <Nav.Link eventKey="all">All Projects</Nav.Link>
                      </Nav.Item>
                    </Nav>

                    <Tab.Content className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="all">
                        <Row>
                          {projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>

                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>

      <img
        className="background-image-right"
        src={colorSharp2}
        alt="Background"
      />
    </section>
  );
};
