import Card from "react-bootstrap/Card";
import DalSearch from "../assets/DalSearch.png";
import GradeCalculator from "../assets/grade-calculator.png";
import HopewellLinks from "../assets/hopewell-links.png";

function Projects() {
  return (
    <div className="projects">
      <h2>View some of my projects</h2>
      <div className="projects-card-collection">
        <div className="project-card">
          <Card style={{ width: "18rem", height: "550px" }}>
            <Card.Img variant="top" src={DalSearch} />
            <Card.Body>
              <Card.Title>DalSearch</Card.Title>
              <Card.Text>
                Course search website for Dalhousie Univeristy. I played a small roll in collaboration for
                this project such as the data collection and the design process.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className="project-card">
          <Card style={{ width: "18rem", height: "550px" }}>
            <Card.Img variant="top" src={GradeCalculator} />
            <Card.Body>
              <Card.Title>Grade Calculator</Card.Title>
              <Card.Text>
                A basic calculator app based on Dalhousie University's grade scale. Use this web app to see
                what exam grade you need to get the grade you want.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className="project-card">
          <Card style={{ width: "18rem", height: "550px" }}>
            <Card.Img variant="top" src={HopewellLinks} />
            <Card.Body>
              <Card.Title>Golfcourse Website</Card.Title>
              <Card.Text>
                A simple website for my local golf course, Hopewell Links. This page showcases the course
                location, course rules, and an image gallery.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Projects;
