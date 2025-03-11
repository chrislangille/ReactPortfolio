import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Redirect from "./components/Redirect";

function App() {
    return (
        <Router>
          <Header />
            <main>
              <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/home" element={<Home />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/projects" element={<Projects />}/>
                <Route path="*" element={<Redirect />} />
              </Routes>
            </main>
            <Footer />
        </Router>
      )
  }

export default App;