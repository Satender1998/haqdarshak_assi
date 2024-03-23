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
        Nurtured from the core idea of 'empowering individuals with seamless and
        instant property transactions, providing diverse options,' Rent&Sale
        stands as a trailblazer in the online real estate space. Founded by
        Satender Singh in 2005, Rent&Sale embarked on its journey with a
        commitment to offering best-value products and services, supported by
        robust technology and unwavering customer assistance.
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
        After establishing itself as a customer-centric brand recognized for
        reliability and transparency, Rent&Sale expanded its operations to serve
        the real estate market in [Year].
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
        As the demand for online real estate solutions surged, especially with
        the advent of cost-effective property options, Rent&Sale responded
        promptly by introducing a user-friendly platform for buying, selling,
        and renting properties with just a few clicks.
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
        Throughout our journey, we have forged strategic partnerships with
        leading brands in the real estate industry, fostering mutually
        beneficial relationships for business growth. Venturing into diverse
        segments, such as homestays, villas, and ground transport services, we
        continually strive to capture an increasing market share.
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
        What enhances our narrative further is the success of our recent
        ventures, including myBiz—a comprehensive suite for business
        transactions—and myPartner—an exclusive platform for real estate agents.
        Our latest achievement involves entering the Gulf market, where we offer
        compelling deals on properties.
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
        Rent&Sale remains committed to revolutionizing the real estate
        experience, providing individuals with a one-stop solution for all their
        property needs.
      </p>
    </div>
  );
};

export default Dashboard;
