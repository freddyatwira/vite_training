import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setInputs((prevInputs) => ({
      ...prevInputs,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8001/api/register", inputs);
      navigate("/login");
    } catch (error) {
      setError(error.response.data);
    }
  };

  return (
    <div className="">
      <h3>REGISTRATION FORM</h3>
      <form className="d-flex flex-column col-lg-6 col-md-10 col-sm-11 mx-auto border rounded pt-5 shadow-lg">
        <input
          type="text"
          name="username"
          className="mb-3 p-1"
          placeholder="username..."
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          className="mb-3 p-1"
          placeholder="email..."
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          className="mb-3 p-1"
          placeholder="password..."
          onChange={handleChange}
        />
        <button
          type="button"
          className="mb-3 btn btn-primary"
          onClick={handleSubmit}
        >
          REGISTER
        </button>
        {error && <small className="text-danger mb-2">{error}</small>}
        <p>
          Do you have an account? <Link to="/login">login</Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
