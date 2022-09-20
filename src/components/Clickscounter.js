import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Clickscounter.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import validator from "validator";
import { ThreeDots } from "react-loader-spinner";
function Clickscounter() {
  const [TrackLongUrl, setTrackLongUrl] = useState("");
  const navigate = useNavigate();
  const senttrackurl = async (TrackLongUrl) => {
    setLoading(true);
    if (TrackLongUrl === "") {
      setLoading(false);
    }
    await axios
      .post("https://shotyurl.herokuapp.com", { longUrl: TrackLongUrl })
      .then((res) => {
        setLoading(false);
        navigate("/totalclicks", {
          state: {
            longUrl: TrackLongUrl,
            shortUrl: res.data.shortUrl,
            clicks: res.data.clicks,
          },
        });
      });
  };
  const [errorMessage, setErrorMessage] = useState("");
  const [check, setCheck] = useState(false);
  const [loading, setLoading] = useState(false);
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
  return (
    <div id="page-container">
      <div id="content-wrap">
        <div>
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
          <div className="container headingstyle font-weight-bold mb-2">
            URL click counter
          </div>
          <div className="fl style1 pb-2 mb-4">
            Enter the URL to find out how many clicks it has received so far.
          </div>
          <div className="container border border-5 ">
            <label for="url" className="blackcolor mt-3 mb-4">
              Enter your Long url
            </label>
            <div className="fl">
              <input
                placeholder="enter your long url"
                type="link"
                id="url"
                name="url"
                value={TrackLongUrl}
                onChange={(e) => {
                  setTrackLongUrl(e.target.value);
                  validate(e.target.value);
                }}
              ></input>
            </div>
            <div
              style={{
                color: "red",
                fontWeight: "lighter",
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
                className="btn btn-primary mt-4 mb-1"
                disabled={loading}
                onClick={() => {
                  // senttrackurl(TrackLongUrl);
                  check ? (
                    senttrackurl(TrackLongUrl)
                  ) : (
                    <div>enter a valid url</div>
                  );
                }}
              >
                Track clicks
              </button>
            </div>
            <div className="fl style1"></div>
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
