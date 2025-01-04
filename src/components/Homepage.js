import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Homepage.css";
import { Link } from "react-router-dom";
import axios from "axios";

function Homepage() {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleShorten = async () => {
    console.log("came");
    try {
      setError(""); // Reset the error message
      setLoading(true); // Start loading
      setShortUrl(""); // Reset short URL before a new request
      const response = await axios.post("https://small.tejesh.in/", {
        longUrl,
      });
      setShortUrl("https://small.tejesh.in/" + response.data.urlCode + "/");
    } catch (err) {
      console.log(err);
      setError("An error occurred while shortening the URL. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-wrap">
      <div className="bgcolor">
        <Navbar bg="body" expand="lg" className="pad1">
          <Navbar.Brand className="text-warning fw-bold">
            <Link to="/" style={{ textDecoration: "none" }}>
              Shorten-Url
            </Link>
          </Navbar.Brand>
        </Navbar>
        <hr className="myhrline"></hr>
        <div className="container text-primary font-weight-bold mb-2">
          Shorten-URL
        </div>
        <div className="container border border-5 ">
          <label htmlFor="url" className="blackcolor mt-3 mb-4">
            Paste the URL to be shortened
          </label>
          <div className="fl">
            <input
              type="url"
              id="url"
              name="url"
              value={longUrl}
              onChange={(e) => setLongUrl(e.target.value)}
            />
          </div>
          <div className="fl">
            <button
              className="btn btn-primary mt-4 mb-1"
              onClick={handleShorten}
              disabled={loading}
            >
              {loading ? "Loading..." : "Shorten URL"}
            </button>
          </div>
          {loading && (
            <div className="fl style1 text-info mt-2">
              Processing your request...
            </div>
          )}
          {shortUrl && (
            <div className="fl style1">
              Shortened URL:{" "}
              <a href={shortUrl} target="_blank" rel="noopener noreferrer">
                {shortUrl}
              </a>
            </div>
          )}
          {error && <div className="fl style1 text-danger">{error}</div>}
          <div className="fl style1">
            ShortenURL is a free tool to shorten a URL or reduce a link
          </div>
          <div className="fl style1 mb-3">
            Use our URL Shortener to create a shortened link making it easy to
            remember
          </div>
        </div>
        <div className="container">
          <div className="text-start style2 pt-4">
            Simple and fast URL shortener!
          </div>
          <div className="text-start style3 pt-2">
            ShortURL allows to reduce long links from &nbsp;
            <a href="http://instagram.com">Instagram</a>, &nbsp;
            <a href="http://facebook.com">Facebook</a>, &nbsp;
            <a href="http://youtube.com">Youtube</a>, &nbsp;
            <a href="http://twitter.com">Twitter</a>, &nbsp;
            <a href="http://linkedin.com">Linked In</a>, &nbsp; and top sites on
            the Internet, just paste the long URL and click the Shorten URL
            button. On the next screen, copy the shortened URL and share it on
            websites, chat and e-mail.
          </div>
        </div>
        <div className="container">
          <div className="text-start style2 pt-4">Shorten and share</div>
          <div className="text-start style3 pt-2 pb-5">
            Your shortened URLs can be used in publications, documents,
            advertisements, blogs, forums, instant messages, and other
            locations. Track statistics for your business and projects by
            monitoring the number of hits from your URL with the click counter,
            you do not have to register.
          </div>
        </div>
        <div className="container">
          <div className="flex">
            <div className="p-right">
              <img src="done.png" alt="Italian Trulli"></img>
              <div>Easy</div>
              <div className="fl style3 ">
                ShortURL is easy and fast, enter the long link
              </div>
              <div className="fl style3 mb-3">to get your shortened link</div>
            </div>
            <div className="p-right">
              <img src="shortend.png" alt="Italian Trulli"></img>
              <div>Shortened</div>
              <div className="fl style3">
                Use any link, no matter what size, ShortURL
              </div>
              <div className="fl style3 mb-3">always shortens</div>
            </div>
            <div className="p-right">
              <img src="secure.png" alt="Italian Trulli"></img>
              <div>Secure</div>
              <div className="fl style3">
                It is fast and secure, our service have HTTPS
              </div>
              <div className="fl style3 mb-3">protocol and data encryption</div>
            </div>
            <div className="p-rig">
              <img src="reliable.png" alt="Italian Trulli"></img>
              <div>Reliable</div>
              <div className="fl style3">
                All links that try to disseminate spam, viruses
              </div>
              <div className="fl style3 mb-3">and malware are deleted</div>
            </div>
            <div className="p-rig">
              <img src="statistics.png" alt="Italian Trulli"></img>
              <div>Statistics</div>
              <div className="fl style3">
                Check the amount of clicks that your
              </div>
              <div className="fl style3 mb-3">shortened url received</div>
            </div>
            <div className="p-rig">
              <img src="devices.png" alt="Italian Trulli"></img>
              <div>Devices</div>
              <div className="fl style3">
                Compatible with smartphones, tablets and
              </div>
              <div className="fl style3 mb-3 ">desktop</div>
            </div>
          </div>
        </div>
        <div>
          <footer className="site-footer mt-5">
            <div className="ex1 headingstyle style2 text-white font-weight-bold fl pt-3">
              2025 shorten URL - Tool to shorten a long link
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
    </div>
  );
}

export default Homepage;
