import { Col } from "react-bootstrap";

export const ProjectCard = ({
  title,
  description,
  features,
  technologies,
  imgUrl,
  liveLink,
  githubLink,
}) => {
  return (
    <Col xs={12} md={6} lg={4} className="mb-4">
      <div className="proj-card p-3 shadow-sm">
        <img src={imgUrl} alt={title} className="img-fluid mb-3" />
        
        <h4>{title}</h4>
        <p>{description}</p>

        <h6>Key Features:</h6>
        <ul>
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>

        <p><strong>Technologies Used:</strong> {technologies}</p>

        <div className="d-flex gap-3 mt-2">
          {liveLink && liveLink !== "#" && (
            <a href={liveLink} target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
          )}
          {githubLink && (
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          )}
        </div>
      </div>
    </Col>
  );
};
