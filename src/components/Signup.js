import React, { useState } from "react";
import { Button, Container, Form, Navbar } from "react-bootstrap";
import "./sign.css";

function Signup() {
  const [email, setemail] = useState("");

  return (
    <div>
      <div>
        <Navbar bg="body" expand="lg" className="pad1 ">
          <Navbar.Brand href="#home" className="text-warning fw-bold">
            Shorten-Url
          </Navbar.Brand>
        </Navbar>
        <hr className="myhrline"></hr>
      </div>
      <div className="container">Sign up and start shortening</div>
      <div className="align">
        <span className="prop">Already have an account?</span>
        <a href="login" className="prop margin1">
          Login
        </a>
        <div className="prop margin1">sign up with:</div>
      </div>
      <div>
        <label for="exampleInputEmail1" className="form-label pro font">
          UserName
        </label>
      </div>
      <div className="update">
        <div className="news">
          <input type="text" id="email" name="email"></input>
        </div>
      </div>
      <div>
        <label for="exampleInputEmail1" className="form-label pro font">
          Email address
        </label>
      </div>
      <div className="update">
        <div className="news">
          <input
            type="text"
            id="email"
            name="email"
            onChange={(e) => setemail(e.target.value)}
          ></input>
          <p>{email}</p>
        </div>
      </div>
      <div>
        <label for="exampleInputEmail1" className="form-label pro font">
          Password
        </label>
      </div>
      <div className="update">
        <div className="news">
          <input type="password" id="password" name="email"></input>
        </div>
      </div>
      <div className="update">
        <div className="news">
          <button className="btn btn-primary mt-3">sign up</button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
// class Signup extends Component {
//   render() {
//     return (
//       <div>
//       <div>
//         <Navbar bg="body" expand="lg" className="pad1 ">
//           <Navbar.Brand href="#home" className="text-warning fw-bold">
//             Shorten-Url
//           </Navbar.Brand>
//         </Navbar>
//         <hr className="myhrline"></hr>
//       </div>
//       <div className="container">Sign up and start shortening</div>
//       <div className="align">
//         <span className="prop">Already have an account?</span>
//         <a href="login" className="prop margin1">
//           Login
//         </a>
//         <div className="prop margin1">sign up with:</div>
//       </div>
//       <div>
//         <label for="exampleInputEmail1" className="form-label pro font">
//           UserName
//         </label>
//       </div>
//       <div className="update">
//         <div className="news">
//           <input type="text" id="email" name="email"></input>
//         </div>
//       </div>
//       <div>
//         <label for="exampleInputEmail1" className="form-label pro font">
//           Email address
//         </label>
//       </div>
//       <div className="update">
//         <div className="news">
//           <input type="text" id="email" name="email"></input>
//         </div>
//       </div>
//       <div>
//         <label for="exampleInputEmail1" className="form-label pro font">
//           Password
//         </label>
//       </div>
//       <div className="update">
//         <div className="news">
//           <input type="password" id="password" name="email"></input>
//         </div>
//       </div>
//       <div className="update">
//         <div className="news">
//           <button className="btn btn-primary mt-3">sign up</button>
//         </div>
//       </div>
//     </div>

//     );
//   }
// }

// export default Signup;
