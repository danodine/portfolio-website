import Navbar from "./components/NavbarComponent";
import Header from "./sections/Header";
import About from "./sections/About";
import CareerPath from "./sections/CareerPath";
import Education from "./sections/Education";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <section id="header">
          <Header />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="career">
          <CareerPath />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <section id="footer">
          <Footer />
        </section>
      </main>
    </div>
  );
}

export default App;
