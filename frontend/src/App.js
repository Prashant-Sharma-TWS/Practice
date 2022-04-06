import React, { useEffect, useState } from "react";
import {
  Link,
  Route,
  Routes,
  useNavigate,
  useLocation,
  useParams,
} from "react-router-dom";
import "./App.css";
import { Home } from "./Pages/Home";
import Login from "./Pages/Login";
import { Button, CircularProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  loginRequest,
  loginSuccess,
  logoutFailure,
  logoutRequest,
  logoutSuccess,
} from "./Redux/Auth/auth.action";
import { display } from "@mui/system";

function App() {
  const accesstoken = useSelector((state) => state.auth.userToken);
  const isLoading = useSelector((state) => state.auth.isLoading);
  const [user, setUser] = useState("User");
  const navigate = useNavigate();
  const { pathname, search } = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (search.startsWith("?code=")) {
      dispatch(loginRequest());
      dispatch(loginSuccess(search.split("=")[1]));
    }
    if (accesstoken) {
      if (pathname === "/login") navigate("/");
      else navigate(`${pathname}`);
    } else {
      navigate("/login");
    }
  }, [pathname, navigate, accesstoken]);

  const handleLogout = async function () {
    try {
      dispatch(logoutRequest());
      await setTimeout(() => dispatch(logoutSuccess()), 500);
      setUser("User");
    } catch (e) {
      display(logoutFailure());
    }
  };

  return (
    <div className="App">
      <nav>
        <span>{user}</span>
        <span>
          <Link to="/">Home</Link>
        </span>
        <span>
          {accesstoken ? (
            <Button variant="contained" onClick={handleLogout}>
              Logout
            </Button>
          ) : (
            <Link to="/login">
              <Button variant="contained">Login</Button>
            </Link>
          )}
        </span>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
      </Routes>
      {isLoading ? <CircularProgress className="circularLoader" /> : ""}
    </div>
  );
}

export default App;
