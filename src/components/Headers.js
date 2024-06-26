import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, useNavigate } from "react-router-dom";
import myImage from "../images/choreography by RS.jpg";
import { logout } from "../services/logout";

const Headers = () => {
  const navigate = useNavigate();

  const redirectToDashboard = () => {
    navigate("/dashboard");
  };

  const handleLogout = () => {
    logout(); 
    navigate("/");
  }

  const isLoggedIn = localStorage.getItem("userdbtoken"); // Check if token exists
  console.log(isLoggedIn);

  return (
    <>
      <Navbar bg="" variant="dark">
        <Container>
          <NavLink
            to="/"
            className=" text-dark text-decoration-none"
            style={{ fontSize: "24px" }}
          >
            Haqdarshak
          </NavLink>
          <Nav className="">
            {isLoggedIn ? (
              <button className="mt-3 mx-2 text-dark text-decoration-none btn" onClick={handleLogout}>Logout</button>
            ) : (
              <NavLink
                to="/register"
                className="mt-3 mx-2 text-dark text-decoration-none"
                style={{ fontSize: "20px" }}
              >
                Register
              </NavLink>
            )}
            <NavLink to="/dashboard" onClick={redirectToDashboard}>
              <img
                src={myImage}
                style={{
                  width: "90px",
                  height: "50px",
                  marginTop: "10px",
                  borderRadius: "10%",
                  border: "2px solid #fff",
                  boxShadow: "0 0 10px #4F285E",
                }}
                className="image"
                alt="hey"
              />
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Headers;
