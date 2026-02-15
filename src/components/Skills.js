import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">

            {/* ================= TECH SKILLS ================= */}
            <div className="skill-bx wow zoomIn">
              <h2>Technical Skills</h2>
              <p>
                Proficient in front-end technologies including HTML5, CSS3,
                JavaScript (ES6+), and React.js. Experienced in building
                responsive web applications using Bootstrap and modern UI/UX
                principles. Familiar with Git, GitHub, backend concepts,
                and REST APIs.
              </p>

              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="Web Development" />
                  <h5>Web Development</h5>
                </div>

                <div className="item">
                  <img src={meter2} alt="Java Programming" />
                  <h5>Java Programming</h5>
                </div>

                <div className="item">
                  <img src={meter3} alt="DSA" />
                  <h5>Data Structures & Algorithms</h5>
                </div>

                <div className="item">
                  <img src={meter1} alt="UI/UX Design" />
                  <h5>UI/UX Design</h5>
                </div>
              </Carousel>
            </div>

            {/* ================= SOFT SKILLS ================= */}
            <div className="skill-bx wow zoomIn mt-5">
              <h2>Soft Skills</h2>
              <p>
                Strong communication and teamwork abilities. Excellent
                problem-solving mindset with attention to detail.
                Quick learner with adaptability to new technologies.
                Time management and leadership qualities with a focus
                on delivering high-quality results.
              </p>

              <div className="row text-center">
                <div className="col-md-3 col-6 mb-4">
                  <h5>Communication</h5>
                </div>
                <div className="col-md-3 col-6 mb-4">
                  <h5>Teamwork</h5>
                </div>
                <div className="col-md-3 col-6 mb-4">
                  <h5>Problem Solving</h5>
                </div>
                <div className="col-md-3 col-6 mb-4">
                  <h5>Project Management</h5>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <img
        className="background-image-left"
        src={colorSharp}
        alt="Background"
      />
    </section>
  );
};
