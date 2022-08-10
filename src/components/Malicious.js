import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Malicious.css";

function Malicious() {
  return (
    <div id="page-container">
   <div id="content-wrap">
   <div >
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
      <div className="container headingstyle font-weight-bold mb-2">
        Report Malicious Short Link
      </div>
      <div className="text-center style1 mb-3 pl-2,pr-2,pb-2,pt-2 ex1">
        Use the form below to report URLs that are distributing spam and
        malware. Help us by sending links that are against our terms of use, we
        will delete and block these shortened links. If spammers are sending you
        e-mails containing our shortened URLs, tell us and we can take quick
        action to avoid the distribution of inappropriate links.
      </div>
      <div className="ex2">
        <div className="fl">Invalid or malicious URL</div>
        <div className="fl">
          <input type="link" id="url" name="url"></input>
        </div>
        <div className="fl">
          <button className="btn btn-primary m-4">Send</button>
          <button className="btn btn-primary m-4">Back</button>
        </div>
      </div>

      
    </div>
   </div>
   <footer id="footer">
        <div className="ex1 headingstyle style2 text-white font-weight-bold fl pt-4 pb-3" >
          2022 shorten URL - Tool to shorten a long link
        </div>
        <div className="flex">
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

export default Malicious;
