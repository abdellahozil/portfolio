
import './App.css';
import About from './components/about/About';
import Contact from './components/Contact/Contact';
// import Header from './components/header/Header';
import HeaderTwo from './components/headerTwo/HeaderTwo';
import Home from './components/Home/Home';
import Project from './components/projects/Project';
import ScrollUp from './components/scrollup/ScrollUp';
import Skills from './components/skills/Skills';

function App() {
  return (
    <>
      <HeaderTwo/>
      <main className='main'>
        <Home/>
        <About />
        <Skills />
        <Project/>
        <Contact />
      </main>
      <ScrollUp/>
    </>
  );
}

export default App;
