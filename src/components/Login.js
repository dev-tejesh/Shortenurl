import React, { useState } from "react";
import { Navbar } from "react-bootstrap";
import "./myStyles.css";
import axios from "axios";
const name = [];
const instance = axios.create({
  baseURL: "http://minyurl.ml/",
});
async function createlogin(email, pass) {
  console.log("test")
  instance.get("");
  // const res = await axios.get("https://minyurl.ml/app/login/", {});
}

function Login() {
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
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
      <div className="container">Log in and start sharing</div>
      <div className="align">
        <span className="prop">Don't have an account?</span>
        <a href="signup" className="prop margin1">
          Signup
        </a>
        <div className="prop margin1">Login in with:</div>
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
        </div>
      </div>
      <div>
        <label for="exampleInputEmail1" className="form-label pro font">
          Password
        </label>
      </div>
      <div className="update">
        <div className="news">
          <input
            type="password"
            id="password"
            name="email"
            onChange={(e) => setpass(e.target.value)}
          ></input>
        </div>
      </div>
      <div className="update">
        <div className="news">
          <button
            className="btn btn-primary mt-3"
            onClick={() => {
              createlogin(email, pass);
            }}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
// class Login extends Component {
//   render() {
//     return (
//       // <div >tejesh</div>
//       <div>
//         <Navbar bg="body" expand="lg" className="pad1 ">
//           <Navbar.Brand href="#home" className="text-warning fw-bold">
//             Shorten-Url
//           </Navbar.Brand>
//         </Navbar>
//         <hr className="myhrline"></hr>
//         <div className="customcontainer">
//           <div className="container">Log in and start sharing</div>
//           <div className="align">
//             <span className="prop">Don't have an account?</span>
//             <a href="signup" className="prop margin1">
//               Signup
//             </a>
//             <div className="prop margin1">Login in with:</div>
//             {/* <div className="container2">
//               <button type="button" className="btn btn-primary m-1">
//                 Google
//               </button> */}
//               {/* <i class="bi bi-google"></i> */}
//               {/* <button type="button" className="btn btn-primary ">
//                 Facebook
//               </button>
//             </div> */}
//             {/* <span> */}
//               {/* <div className="prop">OR</div> */}
//               {/* <div className='pro'>Email address or username</div> */}
//               {/* <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input> */}
//             {/* </span> */}
//             <form className="wid">
//               <div class="mb-3">
//                 <div>
//                   <label for="exampleInputEmail1" className="form-label pro">
//                     Email address
//                   </label>
//                 </div>

//                 <input type="text" id="email" name="email" width="200"></input>
//               </div>
//               <div>
//                 <label for="exampleInputPassword1" class="form-label pro">
//                   Password
//                 </label>
//               </div>
//               <input type="password" id="exampleInputPassword1"></input>
//             </form>
//             <a href="#forgot" className="prop margin1">
//               Forgot your password?
//             </a>
//           </div>
//           <div className="container2">
//             <button type="submit" class="btn btn-primary btn-md butmar">
//               Submit
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Login;
