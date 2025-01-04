import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Clickscounter.css";
import { Link } from "react-router-dom";
function Clickscounter() {
  return (
    <div id="page-container">
      <div id="content-wrap">
        <div>
          <Navbar bg="body" expand="lg" className="pad1">
            <Navbar.Brand className="text-warning fw-bold">
              <Link to="/" style={{ textDecoration: "none" }}>
                Shorten-Url
              </Link>
            </Navbar.Brand>
            {/* <Nav.Link href="#home" className="text-primary ms-auto pr-8">
              Logout
            </Nav.Link> */}
          </Navbar>
          <hr className="myhrline"></hr>
          <div className="container headingstyle font-weight-bold mb-2">
            URL click counter
          </div>
          <div className="fl style1 pb-2 mb-4">
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
              <button className="btn btn-primary mt-4 mb-1">
                Track clicks
              </button>
            </div>
            <div className="fl style1">Example: shorturl.at/AbCdE</div>
          </div>
          <div className="fl style1 pt-3 mb-3">
            * Track the total hits of the shortened URL in real time
          </div>
        </div>
      </div>
      <footer className="site-footer mt-5">
        <div className="ex1 headingstyle style2 text-white font-weight-bold fl pt-4 pb-4">
          2022 shorten URL - Tool to shorten a long link
        </div>
        <div className="fle">
          <div className="pad">
            <Link to="/">ShortenUrl</Link>
          </div>
          <div className="pad">
            <Link to="/clickscounter">URL Clicks Counter</Link>
          </div>
          <div className="pad">
            <Link to="/malicious">Report Malicious URL</Link>
          </div>
          <div className="pad">
            <Link to="/termsofservice">Terms Of Service</Link>
          </div>
          <div className="pad">
            <Link to="/privacy">Privacy</Link>
          </div>
          <div className="pad">
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Clickscounter;
