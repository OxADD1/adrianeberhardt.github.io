import './i18n';
import './index.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Expertise from './components/Expertise/Expertise';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import StarBackground from './components/StarBackground/StarBackground';

function App() {
  return (
    <>
      <StarBackground />
      <Header />
      <main>
        <Hero />
        <Expertise />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
