import React, { Component } from "react";
import { Button, Container, Form, Navbar } from "react-bootstrap";
import "./sign.css";
class Signup extends Component {
  render() {
    return (
      <div >
        <Navbar bg="body" expand="lg" className="pad1 ">
          <Navbar.Brand href="#home" className="text-warning fw-bold">
            Shorten-Url
          </Navbar.Brand>
        </Navbar>
        <hr className="myhrline"></hr>
        <div className="container">Sign in and start shortening</div>
        <span className="pro">
          <span className="style1">Already have an account?</span>
          <a href="#login">Log in</a>
        </span>
        <div className="container">
          <button type="button" className="btn btn-primary text-center wid2">
            Sign up with Google
          </button>
        </div>
        <div className="or margin2 text-center">OR</div>
        {/* <div className="cent">
          <div className="formButtonfront">Google</div>
        </div> */}
        <form className="con1">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            ></input>
            <div id="emailHelp" class="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            ></input>
          </div>
          <div class="mb-3 form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            ></input>
            <label class="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Signup;
