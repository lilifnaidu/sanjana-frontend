import { useState } from "react";
import LoginForm from "../Login/Login";
import SignupForm from "../Signup/Signup";
import { FaShareAlt } from "react-icons/fa";
import { useAuth } from "../../Context/Authcontext";  // <-- import Auth
import './Auth.css';

export default function AuthForm() {
  const [active, setActive] = useState("login");
  const { setUser } = useAuth(); // <-- ADD THIS HERE

  // This will receive user data from LoginForm & SignupForm
  const handleAuthSuccess = (userData) => {
    setUser({
      name: userData.name,
      email: userData.email,
      roll: userData.roll || "",
    });
  };

  return (
    <div className="auth-bg">
      <div className="auth-card">
        <div className="logo-circle">
          <FaShareAlt className="logo-icon" />
        </div>

        <h1 className="app-title">EduSwap</h1>
        <p className="college-name">Samskruti College of Engineering and Technology</p>
        <p className="tagline">"Share Knowledge, Build Community"</p>

        <div className="toggle-container">
          <button
            className={`toggle-btn ${active === "login" ? "active" : ""}`}
            onClick={() => setActive("login")}
          >
            Login
          </button>

          <button
            className={`toggle-btn ${active === "signup" ? "active" : ""}`}
            onClick={() => setActive("signup")}
          >
            Sign Up
          </button>
        </div>

        {active === "login" ? (
          <LoginForm onSuccess={handleAuthSuccess} />   // <--- PASS FUNCTION
        ) : (
          <SignupForm onSuccess={handleAuthSuccess} />  // <--- PASS FUNCTION
        )}
      </div>
    </div>
  );
}
