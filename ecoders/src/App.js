import './App.css';
import Navbar    from './components/Navbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Notfound  from './pages/Notfound';
import Footer    from './components/Footer';
import Home      from './pages/Home';
import Contact   from './pages/Contact';
import About     from './pages/About';
import Portfolio  from './pages/Portfolio';
import Service   from './pages/Service';
import Allstudent from './pages/Allstudent';

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route path="/"                   element={<Home />}     />
          <Route path="/about"              element={<About />}    />
          <Route path="/service"            element={<Service />}  />
          <Route path="/portfolio"           element={<Portfolio />} />
          <Route path="/contact"            element={<Contact />}  />
          <Route path="/Allstudent"         element={<Allstudent />}  />
          <Route path="/notfound"           element={<Notfound />} />
          <Route path="/*"                  element={<Notfound />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}
export default App;
