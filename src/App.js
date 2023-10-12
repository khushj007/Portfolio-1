import './App.css';
import NavBar from "./Components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Components/Home"
import Skills from "./Components/Skills"
import Project from "./Components/Project";
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
    <NavBar/>
    <Home/>
    <Skills/>
    <Project/>
    <Contact/>
  </div>
  );
}

export default App;
