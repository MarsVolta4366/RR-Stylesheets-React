import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import './App.css';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Home from './components/Home';
import Profile from './components/Profile';

function App() {

  const styledUl = {
    listStyleType: "none"
  }

  const styledContactUs = {
    color: "red",
  }

  const styledProfile = {
    color: "green"
  }

  const styledAboutUs = {
    color: "blue"
  }

  return (
    <div className="App">
      <Router>
        <nav>
          <ul style={styledUl}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contactUs">Contact Us</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/aboutUs">About Us</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contactUs" element={<ContactUs styledContactUs={styledContactUs} />} />
          <Route path="/profile" element={<Profile styledProfile={styledProfile} />} />
          <Route path="/aboutUs" element={<AboutUs styledAboutUs={styledAboutUs} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
