import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Homepage.css";
function Homepage() {
  return (
    <div class="page-wrap">
      <div className="bgcolor">
        <Navbar bg="body" expand="lg" className="pad1">
          <Navbar.Brand href="#home" className="text-warning fw-bold">
            Shorten-Url
          </Navbar.Brand>
          <Nav.Link href="#home" className="text-primary ms-auto pr-8">
            Logout
          </Nav.Link>
        </Navbar>
        <hr className="myhrline"></hr>
        <div className="container text-primary font-weight-bold mb-2">
          Shorten-URL
        </div>
        <div className="container border border-5 ">
          <label for="url" className="blackcolor mt-3 mb-4">
            Paste the url to be shortend
          </label>
          <div className="fl">
            <input type="link" id="url" name="url"></input>
          </div>
          <div className="fl">
            <button className="btn btn-primary mt-4 mb-1">Shorten Url</button>
          </div>
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
            <div>
              <img src="done.png" alt="Italian Trulli"></img>
              <div>Easy</div>
              <div className="fl style3">
                ShortURL is easy and fast, enter the long link
              </div>
              <div className="fl style3 mb-3">to get your shortened link</div>
            </div>
            <div>
              <img src="shortend.png" alt="Italian Trulli"></img>
              <div>Shortend</div>
              <div className="fl style3">
                Use any link, no matter what size, ShortURL
              </div>
              <div className="fl style3 mb-3">always shortens</div>
            </div>
            <div>
              <img src="secure.png" alt="Italian Trulli"></img>
              <div>Secure</div>
              <div className="fl style3">
                It is fast and secure, our service have HTTPS
              </div>
              <div className="fl style3 mb-3">protocol and data encryption</div>
            </div>
            <div>
              <img src="reliable.png" alt="Italian Trulli"></img>
              <div>Reliable</div>
              <div className="fl style3">
                All links that try to disseminate spam, viruses
              </div>
              <div className="fl style3 mb-3">and malware are deleted</div>
            </div>
            <div>
              <img src="statistics.png" alt="Italian Trulli"></img>
              <div>Statistics</div>
              <div className="fl style3">
                Check the amount of clicks that your
              </div>
              <div className="fl style3 mb-3">shortened url received</div>
            </div>
            <div>
              <img src="devices.png" alt="Italian Trulli"></img>
              <div>Devices</div>
              <div className="fl style3">
                Compatible with smartphones, tablets and
              </div>
              <div className="fl style3 mb-3 ">desktop</div>
            </div>
          </div>
        </div>
        <footer className="site-footer">
          <div className="ex1 headingstyle style2 text-white font-weight-bold fl pt-3">
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
    </div>
  );
}

export default Homepage;
