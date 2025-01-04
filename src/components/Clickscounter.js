import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Clickscounter.css";
import { Link } from "react-router-dom";

function Clickscounter() {
  const [url, setUrl] = useState("");
  const [clicks, setClicks] = useState(null);
  const [error, setError] = useState("");

  const handleTrackClicks = async () => {
    if (!url.includes("small.tejesh.in/")) {
      setError("URL must start with small.tejesh.in/");
      setClicks(null);
      return;
    }

    try {
      console.log("came")
      const response = await fetch(`${url}stats`);
      if (!response.ok) {
        throw new Error("Failed to fetch stats");
      }
      const data = await response.json();
      setClicks(data.clicks);
      setError("");
    } catch (err) {
      setError("Unable to fetch stats. Please try again.");
      setClicks(null);
    }
  };

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
          </Navbar>
          <hr className="myhrline"></hr>
          <div className="container headingstyle font-weight-bold mb-2">
            URL click counter
          </div>
          <div className="fl style1 pb-2 mb-4">
            Enter the URL to find out how many clicks it has received so far.
          </div>
          <div className="container border border-5">
            <label htmlFor="url" className="blackcolor mt-3 mb-4">
              Enter your shortened URL
            </label>
            <div className="fl">
              <input
                type="text"
                id="url"
                name="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              ></input>
            </div>
            <div className="fl">
              <button
                className="btn btn-primary mt-4 mb-1"
                onClick={handleTrackClicks}
              >
                Track clicks
              </button>
            </div>
            {error && <div className="fl text-danger mt-2">{error}</div>}
            {clicks !== null && (
              <div className="fl text-success mt-2">Total Clicks: {clicks}</div>
            )}
            <div className="fl style1">Example: small.tejesh.in/AbCdEFG</div>
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
