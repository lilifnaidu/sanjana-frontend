import { FaCloudUploadAlt } from "react-icons/fa";
import React, { useState } from "react";
import * as Yup from "yup";
import "./Signup.css";

export default function SignupForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    studentId: "",
    idCard: null,
  });

  const [errors, setErrors] = useState({});

  // Yup Schema
  const schema = Yup.object().shape({
    name: Yup.string().required("Full Name is required"),

    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),

    password: Yup.string()
      .required("Password is required"),

    studentId: Yup.string().required("Student/Staff ID is required"),

    idCard: Yup.mixed().required("Please upload your ID card"),
  });

  // Handle normal inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Handle file upload
  const handleFile = (e) => {
    setForm({ ...form, idCard: e.target.files[0] });
  };

  // Submit
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    // Validate form with Yup
    await schema.validate(form, { abortEarly: false });

    // Prepare FormData for uploading the file
    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("password", form.password);
    formData.append("studentId", form.studentId);
    formData.append("idCard", form.idCard); // FILE MUST USE append()

    const response = await fetch("https://server-qkb9j5wh2-lilifs-projects.vercel.app/signup", {
      method: "POST",
      body: formData, // no headers needed for multipart
    });

    const data = await response.json();
    console.log(data);
    alert("Form submitted successfully!");
 setForm({
  name: "",
  email: "",  
  password: "",
  studentId: "",
  idCard: null,
});
if (!response.ok) {
  alert(data.message || "Error submitting form");
  return
}
  } catch (validationError) {
    const newErrors = {};
    validationError.inner.forEach((err) => {
      newErrors[err.path] = err.message;
    });
    setErrors(newErrors);
    setTimeout(() => {
  setErrors({})
}, 2000);
  }
};


  return (
    <form onSubmit={handleSubmit}>
      {/* NAME */}
      <label>Full Name</label>
      <input
        name="name"
        className="input-box"
        placeholder="John Doe"
        value={form.name}
        onChange={handleChange}
      />
      {errors.name && <p className="error">{errors.name}</p>}

      {/* EMAIL */}
      <label>Email</label>
      <input
        name="email"
        className="input-box"
        placeholder="your.email@samskruti.ac.in"
        value={form.email}
        onChange={handleChange}
      />
      {errors.email && <p className="error">{errors.email}</p>}

      {/* PASSWORD */}
      <label>Password</label>
      <input
        name="password"
        className="input-box"
        placeholder="Create a password"
        value={form.password}
        onChange={handleChange}
      />
      {errors.password && <p className="error">{errors.password}</p>}

      {/* STUDENT ID */}
      <label>Student/Staff ID</label>
      <input
        name="studentId"
        className="input-box"
        placeholder="Enter your ID"
        value={form.studentId}
        onChange={handleChange}
      />
      {errors.studentId && <p className="error">{errors.studentId}</p>}

      {/* FILE UPLOAD */}
      <label>Upload ID Card (for verification)</label>

      <div className="upload-wrapper">
        <input id="id-upload" type="file" className="hidden-input" onChange={handleFile} />

        <label htmlFor="id-upload" className="upload-area">
          <div><FaCloudUploadAlt className="upload-center-icon" />
          
          </div>
          <div><p className="upload-text">Click to upload ID card</p>
          {form.idCard && (
  <p className="file-name">Selected: {form.idCard.name}</p>
)}
</div>
        </label>
        
      </div>
      {errors.idCard && <p className="error">{errors.idCard}</p>}

      <button className="createbtn">Create account</button>
    </form>
  );
}
