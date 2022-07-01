import React, {useState} from "react";
import "./App.css";

const Register = () => {
  const [inputdata, setInputData] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [items, setItems] = useState([]);
  // const [isLogged , setIsLogged] = useState("");
  const addItem = (e) => {
    e.preventDefault();
    const alldata = {
      Id : new Date().getTime().toString(),
      Name: inputdata,
      Email: email,
      Password: password,
      Address: address,
      isLogged : false,
    };
    // console.log("alldata" , alldata);
    setItems([...items, alldata]);
    localStorage.setItem("loginTask", JSON.stringify([...items, alldata]));
    setInputData("");
    setEmail("");
    setPassword("");
    setAddress("");
  };

  return (
    <>
      <div className="bkimage">
        <div className="input_register">
          <h1>REGISTER PAGE</h1>
          <br />
          <form onSubmit={(e) => addItem(e)}>
            <div className="register_login">
              <label>Name : </label>
              <input
                type="text"
                value={inputdata}
                onChange={(e) => setInputData(e.target.value)}
                className="form-control"
                placeholder="enter the Name"
                required
              />
            </div>
            <br />

            <div className="register_login">
              <label> Email : </label>
              <input
                type="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                placeholder="enter the Email Id"
                required
              />
            </div>
            <br />

            <div className="register_login">
              <label>Password : </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                placeholder="enter the password"
                required
              />
            </div>
            <br />

            <div className="register_login">
              <label>Address : </label>
              <textarea
                value={address}
                required
                placeholder="enter the address"
                onChange={(e) => setAddress(e.target.value)}
                className="form-control"
                name=""
                id=""
                cols="50"
                rows="3"
              ></textarea>
            </div>

            <button className="register_button" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
