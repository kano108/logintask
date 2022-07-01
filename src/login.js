import React, { useState } from "react";
import { useNavigate , Link } from "react-router-dom";
import "./App.css";

const GetData = () => {
  let datah = localStorage.getItem("loginTask");
  if(datah){
    return JSON.parse(localStorage.getItem("loginTask"));
  }
  else{
    return [];
  }
}

const Login = (props) => {
  const [getData , setGetData] = useState(GetData());
  const [inputData , setInputData] = useState("");
  const [password , setPassword] = useState("");
  const navigate = useNavigate();
  const submitLogin = (e) => {
        e.preventDefault();
        const login_sub = getData.find((item)=>item.Email === inputData && item.Password === password);
        if(login_sub)
        {
          props.setIsLogged(true)
          localStorage.setItem("isLogin" ,true)
          //localStorage.setItem("user" ,JSON.stringify(login_sub))
          navigate("/Home")
        }
        else{
          alert("Invalid Password and Email")
        }
        setInputData("");
        setPassword("");
  };


  return (
    <>
      <div className="bkimage_login">
        <div className="input_login">
          <h1>LOGIN PAGE</h1>
          <br />
          <div>
            <div className="login_page">
              <label>Email : </label>
              <input
                type="text"
                value={inputData}
                onChange={(e)=>setInputData(e.target.value)}
                className="form-control"
                placeholder="Enter The Email Id"
              />
            </div>
            <br />
            <div className="login_page">
              <label>Password : </label>
              <input
                type="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                className="form-control"
                placeholder="Enter The password"
              />
            </div>

            <button
              onClick={(e) => submitLogin(e)}
              className="login_button"
              type="submit"
            >
              submit
            </button>
            {/* <div >
              <Link className="register_link" to="/register">Create New Account</Link>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
