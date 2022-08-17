import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Termsofservice.css";
import { Link } from "react-router-dom";
function Privacy() {
  return (
    <div>
      <div className="page-wrap">
        <Navbar bg="body" expand="lg" className="pad1">
          <Navbar.Brand className="headingstyle text-primary fw-bold">
            <Link to="/" style={{ textDecoration: "none" }}>
              Shorten-Url
            </Link>
          </Navbar.Brand>
          <Nav.Link href="#home" className="text-primary ms-auto pr-8">
            Logout
          </Nav.Link>
        </Navbar>
        <hr className="myhrline"></hr>
        <div className="ex1 headingstyle style1 font-weight-bold">
          Privacy Policy
        </div>
        <div className="ex1 style2">
          Your privacy is important to us, this privacy policy explains what
          personal information we collect and how it is used. The site collects
          this information to analyze and provide better experiences with our
          services.
        </div>
        <div className="ex1 headingstyle style1 font-weight-bold ">
          Technologies and personal data
        </div>
        <div className="ex1 style2">
          This site may use tools to collect user data, such as your IP address,
          web browser and operating system, identifying the number of visitors
          and understand how they use the site.
        </div>
        <div className="ex1 headingstyle style1 font-weight-bold ">
          Cookies and advertising data
        </div>
        <div className="ex1 style2 mb-2">
          We use third-party advertising companies to serve ads when you visit
          our site. These companies, such as our advertisers, may use cookies
          (small text files placed on your device) and similar technologies to
          collect information for the purpose of displaying ads related to
          products and services of interest to you.
        </div>
        <div className="ex1 style2 mb-2">
          This site may display advertisements served by Google advertising
          network, which uses cookies to identify user preferences and browsing
          habits. Users can get more information about these cookies and privacy
          on Google's website.
        </div>
        <div className="ex1 style2 mb-2">
          Web browsers accept cookies automatically, but if you prefer you can
          modify the configuration of your browser to refuse cookies. However,
          this can affect how you are able to interact with our site and other
          sites on the Internet.
        </div>
        <div className="ex1 headingstyle style1 font-weight-bold ">
          Other Important Information
        </div>
        <div className="ex1 style2 mb-5">
          If there are any questions regarding privacy or need any further
          information, please contact our team.
        </div>
      </div>

      <footer className="site-footer">
        <div className="ex1 headingstyle style2 text-white font-weight-bold fl pt-3">
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

export default Privacy;
