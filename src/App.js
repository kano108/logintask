import "./App.css";
import Login from "./login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./register";
import Home from "./home";
import NavBar from "./NavBar";
import Contact from "./contact"
import Protected from "./protect";
import { useEffect } from "react";
import { useState } from "react";
function App() {
  const [isLogged, setIsLogged] = useState(false);
  let login = JSON.parse(localStorage.getItem("isLogin"));
  useEffect(() => {
    if (login) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  }, [login]);
  return (
    <Router>
      <div className="App">
        <NavBar isLogged={isLogged} setIsLogged={setIsLogged}/>
        <Routes>
          <>
            <Route path="/" element={<Login setIsLogged={setIsLogged}/>} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Protected><Home/></Protected>} />
            <Route path="/contact" element={<Protected><Contact/></Protected>}/>
          </>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
