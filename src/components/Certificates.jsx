import { Container, Row, Col } from "react-bootstrap";
import { FileEarmarkPdf } from "react-bootstrap-icons";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

// Put your certificate PDFs in the public/certificates folder and add entries below.
// pdf: path relative to public folder, e.g. "certificates/react-cert.pdf"
export const Certificates = () => {
  const certificates = [
    {
      title: "Full-Stack Web Development",
      issuer: "Udemy",
      date: "2023",
      pdf: "certificates/Full-Stack Web Development.pdf",
      description: "Full-Stack Web Development with expertise in frontend and backend technologies, RESTful APIs, database management, and industry best practices.",
    },
    {
      title: "Java Programming-Certificate",
      issuer: "Techvanto Academy",
      date: "2024",
      pdf: "certificates/Java Programming-Certificate.pdf",
      description: "Certification in core Java programming and gaining strong knowledge of object-oriented programming concepts, exception handling, collections, and problem-solving techniques..",
    },
    {
      title: "Data Structures and Algorithms",
      issuer: "Udemy",
      date: "2023",
      pdf: "certificates/Data Structures and Algorithms.pdf",
      description: "Comprehensive understanding of Data Structures and Algorithms including arrays, linked lists, stacks, queues, trees, graphs, sorting, and searching techniques.",
    },
    {
      title: "computer organization and Architecture",
      issuer: "Udemy",
      date: "2023",
      pdf: "certificates/computer organization and Architecture.pdf",
      description: "Comprehensive understanding of Computer Organization and Architecture including CPU design, memory hierarchy, instruction sets, and input/output systems."
    },
     {
      title: "Computer Networking",
      issuer: "Coursera",
      date: "2023",
      pdf: "certificates/Computer Networking.pdf",
      description: "Comprehensive understanding of Computer Networking including TCP/IP, DNS, HTTP, and network security."
    },
     {
      title: "C++ Programming",
      issuer: "Coursera",
      date: "2023",
      pdf: "certificates/C++ Programming.pdf",
      description: "Comprehensive understanding of C++ programming including object-oriented programming, memory management, and standard library."
    },
  ];

  const getPdfUrl = (path) => process.env.PUBLIC_URL + "/" + path;

  return (
    <section className="certificates" id="certificates">
      <Container>
        <Row>
          <Col xs={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Certificates</h2>
                  <p className="cert-intro">
                    Certifications I've completed. Click a card to open the certificate PDF.
                  </p>
                  <Row className="cert-grid">
                    {certificates.map((cert, index) => (
                      <Col xs={12} sm={6} lg={6} key={index}>
                        <TrackVisibility>
                          {({ isVisible }) => (
                            <a
                              href={getPdfUrl(cert.pdf)}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`cert-card ${isVisible ? "animate__animated animate__zoomIn" : ""}`}
                              style={{ animationDelay: `${index * 0.1}s` }}
                            >
                              <div className="cert-icon-wrap">
                                <FileEarmarkPdf size={32} />
                              </div>
                              <h4>{cert.title}</h4>
                              <span className="cert-issuer">{cert.issuer}</span>
                              <span className="cert-date">{cert.date}</span>
                              <p>{cert.description}</p>
                              <span className="cert-view-pdf">View PDF</span>
                            </a>
                          )}
                        </TrackVisibility>
                      </Col>
                    ))}
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
