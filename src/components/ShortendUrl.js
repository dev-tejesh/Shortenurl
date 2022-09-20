import React from "react";
import "./TotalClicks.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
const name = [];

function ShortendUrl() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { longUrl, shortUrl } = state;
  const shortendpage=()=>{
    navigate('/');
  }
  return (
    <div className="flo">
      <div className="d">
          <Navbar bg="body" expand="lg" className="pad1">
            <Navbar.Brand className="text-warning fw-bold">
              <Link to="/" style={{ textDecoration: "none" }}>
                Shorten-Url
              </Link>
            </Navbar.Brand>
          </Navbar>
        </div>
        <hr className="myhrline"></hr>
      <div className="aadi">
        <div className="container headingstyle font-weight-bold mb-2">
          Your shortend URL
        </div>

        <div className="text-center style3 pt-1 font-weight-bold ">
          Copy the shortened link and share it in messages, texts, posts,
          websites and other locations.
        </div>
        <div className="shadow">
          <div className="m-2">
            <div className="f mt-3">
              Long URL:{" "}
              <a href={longUrl} className="text-decoration-none">
                {longUrl}
              </a>
            </div>
            <div className="f">
              Shorten URL:{" "}
              <a href={shortUrl} className="text-decoration-none">
                {shortUrl}
              </a>
            </div>
          </div>

          <div className="fl">
            <div className="text-center style3 pt-1 font-weight-bold ">
              Track the{" "}
              <Link to="/clickscounter" className="text-decoration-none">
                total number of clicks
              </Link>
              &nbsp; in real-time from your shortened URL. Create other{" "}
              <a href="/" className="text-decoration-none">
                shortened URL
              </a>
            </div>
            <button
              className="colorbutton mt-3 mb-3"
              onClick={() => {
                shortendpage();
              }}
            >
              Create other shortend url
            </button>
          </div>
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
  );
}

export default ShortendUrl;
