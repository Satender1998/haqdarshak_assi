import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const userValid = () => {
    let token = localStorage.getItem("userdbtoken");
    if (token) {
      console.log("user valid");
    } else {
      navigate("*");
    }
  };

  useEffect(() => {
    userValid();
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#4F285E",
        paddingTop: "5rem",
        paddingBottom: "5rem",
        paddingLeft: "1rem",
        paddingRight: "1rem",
        maxWidth: "100rem",
        marginLeft: "auto",
        marginRight: "auto",
      }}
      className="about-container"
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "4.875rem",
          fontWeight: "bold",
          marginBottom: "4rem",
          color: "orangered",
        }}
        className="about-heading"
      >
        Haqdarshaq
      </h1>
      <p
        style={{
          textAlign: "justify",
          textJustify: "inter-word",
          marginBottom: "1rem",
          color: "white",
        }}
        className="about-paragraph"
      >
        Our assisted-tech model for schemes linkages at the last-mile provides
        offline and online doorstep support for scheme applications by training
        a field cadre of women Haqdarshaks—our support agents—on our tech
        platforms.
      </p>
      <p
        style={{
          textAlign: "justify",
          textJustify: "inter-word",
          marginBottom: "1rem",
          color: "white",
        }}
        className="about-paragraph"
      >
        haqdarshak for MSMEs A one-of-a-kind platform to know about welfare
        schemes for small businesses. Our on-ground support service for MSMEs
        includes support for documentation, and scheme applications.
      </p>
      <p
        style={{
          textAlign: "justify",
          textJustify: "inter-word",
          marginBottom: "1rem",
          color: "white",
        }}
        className="about-paragraph"
      >
        haqdarshak yojana card First-of-its-kind, physical card for all things
        welfare and financial services — government schemes, awareness,
        eligibility, applications, documentation, benefits, inclusion, and
        security.
      </p>
      <p
        style={{
          textAlign: "justify",
          textJustify: "inter-word",
          marginBottom: "1rem",
          color: "white",
        }}
        className="about-paragraph"
      >
        Our assisted-tech model for schemes linkages at the last-mile provides
        offline and online doorstep support for scheme applications by training
        a field cadre of women Haqdarshaks—our support agents—on our tech
        platforms.
      </p>
      <p
        style={{
          textAlign: "justify",
          textJustify: "inter-word",
          marginBottom: "1rem",
          color: "white",
        }}
        className="about-paragraph"
      >
        haqdarshak yojana card First-of-its-kind, physical card for all things
        welfare and financial services — government schemes, awareness,
        eligibility, applications, documentation, benefits, inclusion, and
        security.
      </p>
      <p
        style={{
          textAlign: "justify",
          textJustify: "inter-word",
          marginBottom: "1rem",
          color: "white",
        }}
        className="about-paragraph"
      >
        haqdarshak yojana card First-of-its-kind, physical card for all things
        welfare and financial services — government schemes, awareness,
        eligibility, applications, documentation, benefits, inclusion, and
        security.haqdarshak yojana card First-of-its-kind, physical card for all things
        welfare and financial services — government schemes, awareness,
        eligibility, applications, documentation, benefits, inclusion, and
        security.
      </p>
    </div>
  );
};

export default Dashboard;
