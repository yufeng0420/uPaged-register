import React, { useState } from "react";
import { connect } from "react-redux";
import { setAlert } from "../actions/alert";
import { register } from "../actions/register";
import PropTypes from "prop-types";
import logo from "../assets/icon.png";
import Alert from "./Alert";

const Register = ({ setAlert, register }) => {
  const [formData, setFormData] = useState({
    email: "",
    firstname: "",
    lastname: "",
    skills: "",
    type: ""
  });

  const { email, lastname, firstname, skills, type } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    const requiredData = formData;
    delete requiredData.skills;
    for (let key in requiredData) {
      if (requiredData[key] === "") {
        return setAlert(`please privide ${key}`, "danger");
      }
    }
    register({ email, lastname, firstname, skills, type });
    setAlert("register successful", "success");
  };

  return (
    <div className="register">
      <div className="container">
        <Alert />
        <img className="icon" src={logo} alt="icon" />
        <div className="authType">Nurse Register</div>

        <form action="" className="form">
          <div className="form-header">
            Join <b>uPaged</b>
          </div>
          <div className="form-small">
            Note that we are currently in our beta phase and are only accepting
            applications from the Sydney region.
          </div>

          <div className="form-group">
            <input
              type="email"
              placeholder="* Email Address"
              name="email"
              value={email}
              onChange={e => onChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="* First Name"
              name="firstname"
              value={firstname}
              onChange={e => onChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="* Last Name"
              name="lastname"
              value={lastname}
              onChange={e => onChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Skills (eg. Professionalism,Compassion)"
              name="skills"
              value={skills}
              onChange={e => onChange(e)}
            />
          </div>
          <div className="form-group">
            <select name="type" value={type} onChange={e => onChange(e)}>
              <option value="0">* Type of Nurse</option>
              <option value="Developer">Registered Nurse</option>
              <option value="Junior Developer">Enrolled Nurse</option>
              <option value="Senior Developer">Midwife</option>
              <option value="Manager">Nurse Practitioner</option>
              <option value="Student or Learning">
                Endorsed Enrolled Nurse
              </option>
              <option value="Other">Other</option>
            </select>
            <small className="form-text">
              Give us an idea of where you are at in your career
            </small>
          </div>
          <input
            type="submit"
            className="form-btn"
            value="Register"
            onClick={e => {
              onSubmit(e);
            }}
          />
          <button type="submit" className="form-btn2">
            Back
          </button>
        </form>
      </div>
      <div className="right-side" />
    </div>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired
};

export default connect(
  null,
  { setAlert, register }
)(Register);
