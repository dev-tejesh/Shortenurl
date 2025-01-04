import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Malicious.css";
import emailjs, { send } from "emailjs-com";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { render } from "@testing-library/react";
function Malicious() {
  const initialValues = { link: "", user_email: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    console.log("came");
    e.preventDefault();
    emailjs
      .sendForm(
        "service_qf4to2t",
        "template_wm1orqr",
        e.target,
        "JV5yzAfc_pUbtPexW"
      )
      .then((res) => {
        console.log("success");
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
      // sendEmail();
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const reg = new RegExp(
      "(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?"
    );
    if (!values.link) {
      errors.link = "url is required!";
    } else if (!reg.test(values.link)) {
      errors.link = "This is not a valid url format!";
    }
    if (!values.user_email) {
      errors.user_email = "Email is required!";
    } else if (!regex.test(values.user_email)) {
      errors.user_email = "This is not a valid email format!";
    }

    return errors;
  };

  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_qf4to2t",
        "template_wm1orqr",
        e.target,
        "JV5yzAfc_pUbtPexW"
      )
      .then((res) => {
        console.log("success");
      })
      .catch((err) => console.log(err));
  }

  return (
    <div id="page-container">
      <div id="content-wrap">
        <div>
          <Navbar bg="body" expand="lg" className="pad1">
            <Navbar.Brand className="headingstyle text-primary fw-bold">
              <Link to="/" style={{ textDecoration: "none" }}>
                Shorten-Url
              </Link>
            </Navbar.Brand>
            {/* <Nav.Link href="#home" className="text-primary ms-auto pr-8">
              Logout
            </Nav.Link> */}
          </Navbar>
          <hr className="myhrline"></hr>
          <div className="container headingstyle font-weight-bold mb-2">
            Report Malicious Short Link
          </div>
          <div className="text-center style1 mb-3 pl-2,pr-2,pb-2,pt-2 ex1">
            Use the form below to report URLs that are distributing spam and
            malware. Help us by sending links that are against our terms of use,
            we will delete and block these shortened links. If spammers are
            sending you e-mails containing our shortened URLs, tell us and we
            can take quick action to avoid the distribution of inappropriate
            links.
          </div>
          <div className="ex2">
            {/* <div className="fl">Invalid or malicious URL</div> */}
            {Object.keys(formErrors).length === 0 && isSubmit ? (
              <div className="msg fl">
                Thank you, the URL has been sent to our team and will be checked
                within a few hours.
              </div>
            ) : (
              <div></div>
              // <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
            )}

            <form onSubmit={handleSubmit}>
              <div className="new">
                <label>Invalid or malicious URL</label>
                <input
                  type="text"
                  name="link"
                  value={formValues.link}
                  onChange={handleChange}
                ></input>
                <p className="error">{formErrors.link}</p>
                <label>Enter your email id</label>
                <input
                  type="email"
                  name="user_email"
                  value={formValues.user_email}
                  onChange={handleChange}
                ></input>
                <p className="error">{formErrors.user_email}</p>
                <button
                  className="btn btn-primary mt-4 form-control mb-4"
                  type="submit"
                  // onClick={sendEmail}
                >
                  Send
                </button>
                {/* <button className="btn btn-primary m-4 form-control">
                  Cancel
                </button> */}
              </div>
            </form>
          </div>
        </div>
        {/* </div> */}
        {/* </div> */}
      </div>
      <footer className="site-footer mt-5">
        <div className="ex1 headingstyle style2 text-white font-weight-bold fl pt-4 pb-3">
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
        </div>
      </footer>
    </div>
  );
}

export default Malicious;
