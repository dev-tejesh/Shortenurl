import logo from './logo.svg';
import './App.css';
import Stylesheet from './components/Stylesheet';
import 'bootstrap/dist/css/bootstrap.min.css'
import BasicExample from './components/Navbar';
import Login  from './components/Login';
import Signup from './components/Signup';
import Homepage from './components/Homepage';
import Clickscounter from './components/Clickscounter';
import Malicious from './components/Malicious';
import Termsofservice from './components/Termsofservice';
import Privacy from './components/Privacy';
import Contact from './components/Contact';
function App() {
  return (
  // <Stylesheet></Stylesheet>
  <div>
  {/* <BasicExample></BasicExample> */}
  {/* <Login></Login> */}
  {/* <Signup></Signup> */}
  <Homepage></Homepage>
 <Clickscounter></Clickscounter>
 <Malicious></Malicious>
 <Termsofservice></Termsofservice>
 <Privacy></Privacy>  
 <Contact></Contact>
  </div>
  );
}

export default App;
