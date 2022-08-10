import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import "./myStyles.css";
const name = [];
class Login extends Component {
  render() {
    return (
      // <div >tejesh</div>
      <div>
        <Navbar bg="body" expand="lg" className="pad1 ">
          <Navbar.Brand href="#home" className="text-warning fw-bold">
            Shorten-Url
          </Navbar.Brand>
        </Navbar>
        <hr className="myhrline"></hr>
        <div className="container">Log in and start sharing</div>
        <div className="align">
          <span className="prop">Don't have an account?</span>
          <a href="signup" className="prop margin1">
            Signup
          </a>
          <div className="prop margin1">Login in with:</div>
          <div className="container2">
            <button type="button" className="btn btn-primary m-1">
              Google
            </button>
            {/* <i class="bi bi-google"></i> */}
            <button type="button" className="btn btn-primary ">
              Facebook
            </button>
          </div>
          <span>
            <div className="prop margin2">OR</div>
            {/* <div className='pro'>Email address or username</div> */}
            {/* <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input> */}
          </span>
          <form>
            <div class="mb-3">
              <div>
                <label for="exampleInputEmail1" className="form-label pro">
                  Email address
                </label>
              </div>
              {/* <input type="email"  width='10' 
    class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input> */}
              <input type="text" id="email" name="email" width="500"></input>
            </div>
            <div>
              <label for="exampleInputPassword1" class="form-label pro">
                Password
              </label>
            </div>
            <input type="password" id="exampleInputPassword1"></input>
          </form>
          <a href="#forgot" className="prop margin1">
            Forgot your password?
          </a>
        </div>
        <div className="container2">
          <button type="submit" class="btn btn-primary btn-md butmar">
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default Login;
