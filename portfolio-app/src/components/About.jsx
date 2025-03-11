import Button from 'react-bootstrap/Button';

function About() {
    return (
      <section className="container my-5">
      <div className="row align-items-center">
        <div className="col-md-2 text-center">
        </div>
        <div className="col-md-8">
          <h2 className="fw-bold">About Me</h2>
          <p className="text-muted">
            Hi, I'm Chris Langille! I am a 4th year Computer Science student at Dalhousie University. I am interested in Cloud Computing.
          </p>
          <p className="text-muted">Currently I am studying AWS, Azure, and Docker in order to land a junior Cloud Developer role.</p>
          <p className="text-muted">Below are my strongest and most relavent skills focused towards Cloud Computing that I have learned from my time at Dalhousie University and my internships in the field:</p>

          <ul class="list-group my-3">
            <li class="list-group-item">Docker</li>
            <li class="list-group-item">Java, C#, Python</li>
            <li class="list-group-item">Linux</li>
            <li class="list-group-item">AWS, Azure, & Kubernetes concepts</li>
          </ul>
          
          <Button variant="primary" href="./projects">View my projects</Button>
        </div>
      </div>
    </section>
    )
}
  
export default About
  