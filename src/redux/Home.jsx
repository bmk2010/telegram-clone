import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Home() {
  const token = localStorage.getItem("accesToken");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://127.0.0.1:5000/check/token", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: token }),
    })
      .then((res) => res.json())
      .then((valid) => {
        if (valid.valid !== true) {
          navigate("/login");
        }
      });
  }, []);

  return <div>Main page</div>;
}

export default Home;
