import React, { useState } from "react";
import './ContactForm.css'

const ContactForm = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    title: "",
    content: "",
    error: false,
    message: false,
  });
  const { name, email, title, content, error, message } = values;
  const showError = () =>
    error ? (
      <div
        className="alert alert-danger"
        style={{ maxWidth: "25vw", height: "auto" }}
      >
        {error}
      </div>
    ) : (
      ""
    );
  const showMessage = () =>
    message ? (
      <div
        className="alert alert-success"
        style={{ maxWidth: "25vw", height: "auto" }}
      >
        {message}
      </div>
    ) : (
      ""
    );

  const handleChange = (key, e) => {
    setValues({
      ...values,
      [key]: e.target.value,
      error: false,
      message: false,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <div className="contactUs" id="contact">
      <div className="contact__box">
        <div className="map">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2952.5991043427052!2d-83.44470018430947!3d42.26573304904546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b51eaa808a931%3A0x450f2b32e65c25a0!2s41150%20Van%20Born%20Rd%2C%20Canton%2C%20MI%2048188%2C%20USA!5e0!3m2!1sen!2sin!4v1612025693827!5m2!1sen!2sin"
            width="600"
            height="450"
            frameBorder="0"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
        <form className="form__contact" onSubmit={handleSubmit}>
          {showError()}
          {showMessage()}
          <h1>Contact Us</h1>
          <div className="user__info__contact">
          <label htmlFor="name"/>
            <input
              type="text"
              id="name"
              placeholder="Name"
              value={name}
              onChange={(e) => handleChange("name", e)}
            />
            <label htmlFor="email"/>
            <input
              type="email"
              placeholder="Email"
              id="email"
              value={email}
              onChange={(e) => handleChange("email", e)}
            />
          </div>
          <label htmlFor="title"/>
          <input
            type="text"
            placeholder="Title"
            id="title"
            value={title}
            onChange={(e) => handleChange("title", e)}
          />
          <label htmlFor="content"/>
          <textarea
            cols="30"
            rows="8"
            id="content"
            placeholder="Enter your message here"
            value={content}
            onChange={(e) => handleChange("content", e)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
