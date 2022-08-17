import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Termsofservice.css";
import { Link } from "react-router-dom";
function Termsofservice() {
  return (
    <div>
      <div class="page-wrap">
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
        <div className="ex1 headingstyle style1 font-weight-bold mb-2">
          Terms of service
        </div>
        <div className="ex1 style2">
          This page explains the terms of use of Short URL, the user when using
          the shortener site is conditioned to the acceptance of the terms and
          conditions of use.
        </div>
        <div className="ex1 headingstyle style1 font-weight-bold mb-2 mt-2">
          Conditions of use
        </div>
        <div className="ex1 style2">
          The site is available for access to all users and therefore you need
          to agree with the conditions of use when using our services.
        </div>
        <div className="ex1 style2 mt-2">
          In order to provide a secure service for users it is not allowed to
          create short links that redirect to URLs that have:
        </div>
        <ul className="ex1 style2 mt-1">
          <li>Content that spreads phishing, malware or viruses</li>
          <li>Abusive or suspicious content</li>
          <li>Pornographic, sexual, violent or prejudiced content</li>
          <li>Content related to drugs, weapons or drinks</li>
          <li>Any content that may infringe other people's rights</li>
          <li>
            Disgusting, explicit or offensive content that causes any kind of
            discomfort to other users
          </li>
          <li>Child or child-related content</li>
          <li>Pop-ups, scripts and malicious code</li>
          <li>
            Pages that provide information that is false, inaccurate or
            incomplete
          </li>
          <li>Double redirection</li>
          <li>Pages without content</li>
          <li>Pages created recently</li>
          <li>Pages without authority</li>
          <li>Content to collect data and personal information from users</li>
        </ul>
        <div className="ex1 style2 mt-2">
          Do not use our URL shortener service for:
        </div>
        <ul className="ex1 style2 mt-1">
          <li>Commercial purposes</li>
          <li>Ad campaigns</li>
          <li>Emails campaigns</li>
          <li>Spam material</li>
        </ul>
        <div className="ex1 style2 mt-3 mb-3">
          All urls are checked and analyzed by our team, any shortened url that
          leads to the landing page that meets the above conditions can be
          deleted. If we notice any abusive behavior against our terms of
          service, the shortened url will be deleted without notice. Shortened
          urls that do not receive clicks will also be removed.
        </div>
        <div className="ex1 headingstyle style1 font-weight-bold mb-2">
          Disclaimer
        </div>
        <div className="ex1 style2">
          We offer a free service for all users, so Short URL does not warrant
          that the site or services are uninterrupted, secure or error-free. Due
          to a large number of emails received, we may not respond to all
          emails.
        </div>
        <div className="ex1 headingstyle style1 font-weight-bold mb-2">
          Terms Updates
        </div>
        <div className="ex1 style2 mb-5">
          Short URL reserves the right to update or change these terms of use at
          any time. The most current version of the terms will be posted on this
          page.
        </div>
      </div>

      <footer className="site-footer">
        <div className="ex1 headingstyle style2 text-white font-weight-bold fl pt-3">
          2022 shorten URL - Tool to shorten a long link
        </div>
        <div className="flex">
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
  );
}

export default Termsofservice;
