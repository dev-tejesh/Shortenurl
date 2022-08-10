import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Contact.css";

function Contact() {
  return (
    <div id="page-container">
    <div id="content-wrap">
    <div>
          <Navbar bg="body" expand="lg" className="pad1">
            <Navbar.Brand
              href="#home"
              className="headingstyle text-primary fw-bold"
            >
              Shorten-Url
            </Navbar.Brand>
            <Nav.Link href="#home" className="text-primary ms-auto pr-8">
              Logout
            </Nav.Link>
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
      {/* <div>tejesh</div> */}
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
