import { useState } from "react";
import "./styles.css";
import Submitted from "./Submitted";

export default function App() {
  let content = false;
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const loginAccount = (e) => {
    e.preventDefault();
    if (loginData.username != "" && loginData.password != "") {
      setSubmitted((prevValue) => !prevValue);
      setTimeout(() => {
        setSubmitted((prevValue) => !prevValue);
      }, 4000);
    }
  };

  return (
    <div className="App">
      <div className="login-container">
        <h1>Log in</h1>
        <form className="login-form" onSubmit={loginAccount}>
          <div className="form-set">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              onChange={handleChanges}
              value={loginData.username}
            />
          </div>
          <div className="form-set">
            <label htmlFor="password">Password</label>
            <input
              type="text"
              name="password"
              onChange={handleChanges}
              value={loginData.password}
            />
          </div>
          <button>Log in</button>
        </form>
      </div>
      {submitted && <Submitted {...loginData} />}
    </div>
  );
}
