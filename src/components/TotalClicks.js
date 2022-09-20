import React, { useEffect } from "react";
import "./TotalClicks.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
function TotalClicks() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { longUrl, shortUrl, clicks } = state;
  const navigateToContacts = () => {
    //  navigate to /contacts
    navigate('/');
  };


  return (
    <div>
      <div className="d">
        <Navbar bg="body" expand="lg" className="pad1">
          <Navbar.Brand className="headingstyle text-primary fw-bold">
            <Link to="/" style={{ textDecoration: "none" }}>
              Shorten-Url
            </Link>
          </Navbar.Brand>
        </Navbar>
      </div>
      <hr className="myhrline"></hr>
      <div className="flo">
        <div className="aadi">
          <div className="container headingstyle font-weight-bold mb-2">
            Total URL Clicks
          </div>
          <div className="text-center font-weight-bold">Longurl:</div>
          <div className="text-center">
            <a href={longUrl}>{longUrl}</a>
          </div>

          <div className="text-center font-weight-bold">shortenurl:</div>
          <div className="text-center">
            <a href={shortUrl}>{shortUrl}</a>
          </div>
          <div className="text-center style3 pt-1 font-weight-bold ">
            The total number of clicks that your link has received so far.
          </div>
          <div className="fo fl m-3">{clicks}</div>
          <div className="fl">
            <div className="text-center style3 pt-1 font-weight-bold ">
              Our tool will count each click as one hit to the long URL, even if
              there are multiple clicks from the same person or device. Check
              the &nbsp;
              <a href="/clickscounter">total number of clicks</a> &nbsp;from
              other URL
            </div>
            <button className="colorbutton mt-3 " onClick={navigateToContacts}>
              Create other shortend url
            </button>
          </div>
        </div>
        <footer id="footer" className="site-footer mt-5">
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
    </div>
  );
}

export default TotalClicks;
