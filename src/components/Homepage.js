import React, { useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Homepage.css";
import "./Termsofservice.css";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import * as ReactBootstrap from "react-bootstrap";
import { Audio } from "react-loader-spinner";
import { ThreeDots } from "react-loader-spinner";
import validator from "validator";

function Homepage() {
  const [LongUrl, setLongUrl] = useState("");
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const api = axios.create({
    baseURL: "https://shotyurl.herokuapp.com",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [check, setCheck] = useState(false);

  const validate = (value) => {
    if (validator.isURL(value)) {
      setCheck(true);
      // setErrorMessage("Is Valid URL");
      setErrorMessage("");
    } else {
      setLoading(false);
      setErrorMessage("enter a valid Url");
    }
  };
  // const senturl = async (LongUrl) => {
  //   await api.post("/", { longUrl: LongUrl }).then((response) => {
  //     console.log("success");
  //     setData(response.data);
  //     console.log(data);
  //     if (response.status === 200) {
  //       navigate("/surl");
  //     }
  //   });
  // };

  const senturl = async (LongUrl) => {
    setLoading(true);
    if(LongUrl===""){
      setLoading(false);
    }
    await axios
      .post("https://shotyurl.herokuapp.com", { longUrl: LongUrl })
      .then((res) => {
        setData(res.data);
        console.log(data);
        setLoading(false);
        navigate("/surl", {
          state: { longUrl: LongUrl, shortUrl: res.data.shortUrl },
        });
      })
      .catch((err) => {
        console.log(err.data);
      });
  };
  useEffect(() => {
    senturl(LongUrl);
    validate(LongUrl);
    
  }, []);
  // const baseURL = "https://shotyurl.herokuapp.com";
  // useEffect(() => {
  //   senturl(LongUrl);
  // }, [baseURL]);
  return (
    <div class="page-wrap">
      <div className="bgcolor">
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
        <div className="container text-primary font-weight-bold mb-2">
          Shorten-URL
        </div>
        <div className="container border border-5 ">
          <label for="url" className="blackcolor mt-3 mb-4">
            Paste the url to be shortend
          </label>
          <div className="fl">
            <input
              placeholder="Enter url to get shortend"
              type="link"
              id="url"
              name="url"
              value={LongUrl}
              onChange={(e) => {
                setLongUrl(e.target.value);
                validate(e.target.value);
              }}
            ></input>

            {/* <div>{error}</div> */}
          </div>
          <div
            style={{
              color: "red",
              fontWeight: "lighter",
              fontSize: "smaller",
              // fontSize:10px,
            }}
          >
            {errorMessage}
          </div>
          {loading ? (
            <div className="cen">
              <ThreeDots
                height="80"
                width="80"
                radius="9"
                color="blue"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
              />
              {/* <Audio
            className="align-items-center justify-content-center"
            height="80"
            width="80"
            radius="9"
            color="green"
            ariaLabel="loading"
            wrapperStyle
            wrapperClass
          /> */}
            </div>
          ) : (
            <div></div>
          )}
          <div className="fl">
            <button
              disabled={loading}
              // onChange={(e) => validate(e.target.value)}
              className="btn btn-primary mt-4 mb-1"
              onClick={() => {
                check ? senturl(LongUrl) : <div></div>;
                // {check}?
                // senturl(LongUrl);
              }}
            >
              Shorten Url
            </button>
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
              <div>Shortend</div>
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
          <footer id="footers">
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
      </div>
    </div>
  );
}

export default Homepage;
