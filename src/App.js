import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Navbar from './components/layout/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import AddUser from './components/user/AddUser';
import EditUser from './components/user/EditUser';
import SeeUser from './components/user/SeeUser';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/adduser" element={<AddUser />} />
            <Route exact path="/edituser/:id" element={<EditUser />} />
            <Route exact path="/user/:id" element={<SeeUser/>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
