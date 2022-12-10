import './App.css';
import Advertance from './Components/Advertance';
import Banner from './Components/Banner';
import Contact from './Components/Contact';
import Education from './Components/Education';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Advertance/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
