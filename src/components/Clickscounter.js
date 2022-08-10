import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Clickscounter.css";

function Clickscounter() {
  return (
    <div id="page-container">
    <div id="content-wrap">
    <div >
      <Navbar bg="body" expand="lg" className="pad1">
        <Navbar.Brand href="#home" className="text-warning fw-bold">
          Shorten-Url
        </Navbar.Brand>
        <Nav.Link href="#home" className="text-primary ms-auto pr-8">
          Logout
        </Nav.Link>
      </Navbar>
      <hr className="myhrline"></hr>
      <div className="container headingstyle font-weight-bold mb-2">
        URL click counter
      </div>
      <div className="fl style1 pb-2">
        Enter the URL to find out how many clicks it has received so far.
      </div>
      <div className="container border border-5 ">
        <label for="url" className="blackcolor mt-3 mb-4">
          Enter your shortend url
        </label>
        <div className="fl">
          <input type="link" id="url" name="url"></input>
        </div>
        <div className="fl">
          <button className="btn btn-primary mt-4 mb-1">Track clicks</button>
        </div>
        <div className="fl style1">Example: shorturl.at/AbCdE</div>
      </div>
      <div className="fl style1 pt-2">
        * Track the total hits of the shortened URL in real time
      </div>
    </div>
    </div>
    <footer id="footer">
        <div className="ex1 headingstyle style2 text-white font-weight-bold fl pt-4 pb-4">
          2022 shorten URL - Tool to shorten a long link
        </div>
        <div className="fle">
          <a href="http://" className="pad">
            shortenUrl
          </a>
    
       <a href="http://" className="pad">
            URL Click Counter
          </a>
          <a href="http://" className="pad">
            Report Malicious URL
          </a>
          <a href="http://" className="pad">
            Terms Of Service
          </a>
          <a href="" className="pad">
            Privacy
          </a>
          <a href="http://" className="pad">
            Contact
          </a>
        </div>
      </footer> 
  </div>
    
  );
}

export default Clickscounter;
