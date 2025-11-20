import React, { useState } from 'react';
import * as Yup from 'yup';
import './Login.css';
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  // Yup validation schema
  const schema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    password: Yup.string().required('Password is required')
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await schema.validate(form, { abortEarly: false });
      setErrors({});

      const response = await fetch('https://vercel-backend-tau-three.vercel.app/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || 'Login failed');
        return;
      }

      // Save user data
      localStorage.setItem("user", JSON.stringify(data.user));

      alert('Login successful!');
      console.log('Logged in user:', data.user);

      // Redirect to profile page
      navigate("/dashboard");

    } catch (err) {
      if (err.inner) {
        const newErrors = {};
        err.inner.forEach(error => {
          newErrors[error.path] = error.message;
        });
        setErrors(newErrors);
      } else {
        console.error(err);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <label>Email</label>
      <input
        name="email"
        className="input-box"
        placeholder="your.email@samskruti.ac.in"
        value={form.email}
        onChange={handleChange}
      />
      {errors.email && <p className="error">{errors.email}</p>}

      <label>Password</label>
      <input
        name="password"
        type="password"
        className="input-box"
        placeholder="Enter password"
        value={form.password}
        onChange={handleChange}
      />
      {errors.password && <p className="error">{errors.password}</p>}

      <button className="createbtn" type="submit">Login</button>
    </form>
  );
}
