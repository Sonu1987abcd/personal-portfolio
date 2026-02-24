import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState(null);

  const onFormUpdate = (field, value) => {
    setFormDetails({
      ...formDetails,
      [field]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    setStatus(null);

    try {
      const { firstName, lastName, email, phone, message } = formDetails;
      // Contact details on top, then message
      const contactLine = `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone || "Not provided"}`;
      const messageWithContact = `${contactLine}\n\n--- Message ---\n\n${message}`;

      await emailjs.send(
        process.env.REACT_APP_EMAIL_SERVICE,
        process.env.REACT_APP_EMAIL_TEMPLATE,
        {
          firstName,
          lastName,
          email,
          phone: phone || "Not provided",
          message: messageWithContact,
        },
        process.env.REACT_APP_EMAIL_PUBLIC
      );

      setStatus({ success: true, message: "Message sent successfully!" });
      setFormDetails(formInitialDetails);
    } catch (error) {
      console.error(error);
      setStatus({
        success: false,
        message: "Failed to send message. Please try again.",
      });
    }

    setButtonText("Send");
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={isVisible ? "animate__animated animate__zoomIn" : ""}
                  src={contactImg}
                  alt="Contact"
                />
              )}
            </TrackVisibility>
          </Col>

          <Col xs={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={isVisible ? "animate__animated animate__fadeIn" : ""}
                >
                  <h2>Get In Touch</h2>

                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col xs={12} sm={6} className="px-1">
                        <input
                          required
                          type="text"
                          placeholder="First Name"
                          value={formDetails.firstName}
                          onChange={(e) =>
                            onFormUpdate("firstName", e.target.value)
                          }
                        />
                      </Col>

                      <Col xs={12} sm={6} className="px-1">
                        <input
                          required
                          type="text"
                          placeholder="Last Name"
                          value={formDetails.lastName}
                          onChange={(e) =>
                            onFormUpdate("lastName", e.target.value)
                          }
                        />
                      </Col>

                      <Col xs={12} sm={6} className="px-1">
                        <input
                          required
                          type="email"
                          placeholder="Email Address"
                          value={formDetails.email}
                          onChange={(e) =>
                            onFormUpdate("email", e.target.value)
                          }
                        />
                      </Col>

                      <Col xs={12} sm={6} className="px-1">
                        <input
                          type="tel"
                          placeholder="Phone Number"
                          value={formDetails.phone}
                          onChange={(e) =>
                            onFormUpdate("phone", e.target.value)
                          }
                        />
                      </Col>

                      <Col xs={12} className="px-1">
                        <textarea
                          required
                          rows="6"
                          placeholder="Message"
                          value={formDetails.message}
                          onChange={(e) =>
                            onFormUpdate("message", e.target.value)
                          }
                        ></textarea>

                        <button type="submit">
                          <span>{buttonText}</span>
                        </button>
                      </Col>

                      {status && (
                        <Col>
                          <p
                            className={
                              status.success ? "success" : "danger"
                            }
                          >
                            {status.message}
                          </p>
                        </Col>
                      )}
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
