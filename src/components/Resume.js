import { Container, Row, Col } from "react-bootstrap";
import { FileEarmarkText, Briefcase, Mortarboard, Eye } from "react-bootstrap-icons";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Resume = () => {

  const experience = [
    {
      role: "Frontend Developer",
      company: "Company Name",
      period: "2023 – Present",
      description:
        "Building responsive web applications using React and modern JavaScript. Collaborating with design and backend teams to deliver high-quality user experiences.",
    },
    {
      role: "Web Development Intern",
      company: "Company Name",
      period: "2022 – 2023",
      description:
        "Assisted in developing and maintaining web projects. Gained hands-on experience with HTML, CSS, JavaScript, and React.",
    },
  ];

  const education = [
    {
      degree: "Bachelor of Technology (B.Tech)",
      institution: "Lovely Professional University",
      period: "2022 – 2026",
      description: "Computer Science Engineering.",
    },
    {
      degree: "Senior Secondary (12th)",
      institution: "DAV Public School",
      period: "2019 – 2021",
      description:
        "Science stream with focus on Mathematics and Science.",
    },
    {
      degree: "Secondary (10th)",
      institution: "DAV Public School",
      period: "2018 – 2019",
      description:
        "Completed secondary education with strong academic performance.",
    },
  ];

  const resumeUrl = process.env.PUBLIC_URL + "/resume.pdf";

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Sonu_Kumar_Singh_Resume.pdf";
    link.click();
  };

  const handleViewResume = () => {
    window.open(resumeUrl, "_blank");
  };

  return (
    <section className="resume" id="resume">
      <Container>
        <Row>
          <Col xs={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  
                  <h2>Resume</h2>
                  <p className="resume-intro">
                    Here you can find my experience and education.
                    Feel free to view or download my resume for more details.
                  </p>

                  {/* Buttons */}
                  <div className="resume-download-wrap d-flex justify-content-center align-items-center gap-3 flex-wrap mt-4">
                    
                    <button
                      className="resume-download-btn"
                      onClick={handleViewResume}
                    >
                      <Eye size={22} /> View Resume
                    </button>

                    <button
                      className="resume-download-btn"
                      onClick={handleDownloadResume}
                    >
                      <FileEarmarkText size={22} /> Download Resume
                    </button>

                  </div>

                  <Row className="resume-row mt-5">
                    
                    {/* Experience */}
                    <Col xs={12} md={6}>
                      <div className="resume-card">
                        <h3>
                          <Briefcase className="resume-icon" /> Experience
                        </h3>

                        {experience.map((item, index) => (
                          <div key={index} className="resume-item">
                            <h4>{item.role}</h4>
                            <span className="resume-meta">
                              {item.company} · {item.period}
                            </span>
                            <p>{item.description}</p>
                          </div>
                        ))}
                      </div>
                    </Col>

                    {/* Education */}
                    <Col xs={12} md={6}>
                      <div className="resume-card">
                        <h3>
                          <Mortarboard className="resume-icon" /> Education
                        </h3>

                        {education.map((item, index) => (
                          <div key={index} className="resume-item">
                            <h4>{item.degree}</h4>
                            <span className="resume-meta">
                              {item.institution} · {item.period}
                            </span>
                            <p>{item.description}</p>
                          </div>
                        ))}
                      </div>
                    </Col>

                  </Row>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
