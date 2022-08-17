import logo from "./logo.svg";
import "./App.css";
import Stylesheet from "./components/Stylesheet";
import "bootstrap/dist/css/bootstrap.min.css";
import BasicExample from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Homepage from "./components/Homepage";
import Clickscounter from "./components/Clickscounter";
import Malicious from "./components/Malicious";
import Termsofservice from "./components/Termsofservice";
import Privacy from "./components/Privacy";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    // <Stylesheet></Stylesheet>
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/clickscounter" element={<Clickscounter />} />
          <Route path="/malicious" element={<Malicious />} />
          <Route path="/termsofservice" element={<Termsofservice />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      
      {/* </Switch> */}
      {/* </Router> */}
      {/* <BasicExample></BasicExample> */}
      {/* <Login></Login> */}
      {/* <Signup></Signup> */}
      {/* <Homepage></Homepage>
      <Clickscounter></Clickscounter>
      <Malicious></Malicious>
      <Termsofservice></Termsofservice>
      <Privacy></Privacy>
      <Contact></Contact> */}
    </div>
  );
}

export default App;
