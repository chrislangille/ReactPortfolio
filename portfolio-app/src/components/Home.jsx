import HeadShot from "../assets/headshot.jpeg"
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

function Home() {
    return (
      <div className="home-div">
        <section className="introduction-section">
          <Image src={HeadShot} roundedCircle className="headshot"/>
          <div className="introduction-block">
          <h2>Hi, I am Chris Langille</h2>
          <p>I am a 4th year Computer Science student at Dalhousie University who is interested in Cloud Computing.</p>
          </div>
        </section>
          <Button variant="primary" className="about-me-btn" href="./about">About me</Button>
      </div>
    )
}
  
export default Home
  