import { HashRouter, Routes, Route } from 'react-router-dom';
import './i18n';
import './index.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Expertise from './components/Expertise/Expertise';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import StarBackground from './components/StarBackground/StarBackground';
import Impressum from './components/Legal/Impressum';
import Datenschutz from './components/Legal/Datenschutz';

function HomePage() {
  return (
    <>
      <Hero />
      <Expertise />
      <Projects />
      <Contact />
    </>
  );
}

function App() {
  return (
    <HashRouter>
      <StarBackground />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
        </Routes>
      </main>
      <Footer />
    </HashRouter>
  );
}

export default App;
