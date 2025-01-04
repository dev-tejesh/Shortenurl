import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Contact.css";
import { Link } from "react-router-dom";
function Contact() {
  return (
    <div id="page-container">
      <div id="content-wrap">
        <div>
          <Navbar bg="body" expand="lg" className="pad1">
            <Navbar.Brand className="headingstyle text-primary fw-bold">
              <Link to="/" style={{ textDecoration: "none" }}>
                Shorten-Url
              </Link>
            </Navbar.Brand>
            {/* <Nav.Link href="#home" className="text-primary ms-auto pr-8">
              Logout
            </Nav.Link> */}
          </Navbar>
          <hr className="myhrline"></hr>
          <div className="ex1 headingstyle style1 font-weight-bold fl">
            Contact our team
          </div>
          <div className="ex1 fl">Do email us at:</div>
          {/* <a>shortenurl@gmail.com</a> */}
          <a href="http://mail.google.com" className="ex1 fl">
            shortenurl@gmail.com
          </a>
        </div>
      </div>
      <footer id="footer">
        <div className="ex1 headingstyle style2 text-white font-weight-bold fl pt-4 pb-4">
          2022 shorten URL - Tool to shorten a long link
        </div>
        <div className="fle">
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
          {/* <a href="http://" className="pad">
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
          </a> */}
        </div>
      </footer>
    </div>

    // <footer id="footer">
    // <div className="ex1 headingstyle style2 text-white font-weight-bold fl pt-3">
    //     2022 shorten URL - Tool to shorten a long link
    //   </div>
    //   <div className="flex">
    //     <a href="http://" className="pad">
    //       shortenUrl
    //     </a>

    //     <a href="http://" className="pad">
    //       URL Click Counter
    //     </a>
    //     <a href="http://" className="pad">
    //       Report Malicious URL
    //     </a>
    //     <a href="http://" className="pad">
    //       Terms Of Service
    //     </a>
    //     <a href="" className="pad">
    //       Privacy
    //     </a>
    //     <a href="http://" className="pad">
    //       Contact
    //     </a>
    //   </div>
    // </footer>
  );
}

export default Contact;
