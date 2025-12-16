import React from "react";
import { useNavigate } from "react-router-dom";
import LoginInput from "../components/LoginInput";
import { login, putAccessToken } from "../utils/api";
import "../style/login-styled.css";

function LoginPage() {
  const navigate = useNavigate();

  async function onLogin({ email, password }) {
    const { error, data } = await login({ username: email, password });

    if (!error) {
      putAccessToken(data.accessToken);
      navigate("/");
    }
  }

  return (
    <section className="login-container">
      <div className="login-card-container">
        <div className="photo-container">
          <img src="/images/dicoding.png" alt="Logo Dicoding" />
          <img src="/images/learning-genie.png" alt="Logo LG" />
        </div>
        <div className="login-card">
          <h2 className="title">Masuk</h2>

          <LoginInput login={onLogin} />
        </div>
      </div>
    </section>
  );
}

export default LoginPage;


