import React, { useState } from 'react';
import Button from './Button';

const Form = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Name is required";
    if (!formData.email) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
    }
    if (formData.message.length < 10) tempErrors.message = "Message must be 10+ chars";
    return tempErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = validate();
    if (Object.keys(result).length === 0) {
      console.log("Form Submitted:", formData);
      setSubmitted(true);
      setErrors({});
      // Reset form
      setFormData({ name: '', email: '', message: '' });
    } else {
      setErrors(result);
      setSubmitted(false);
    }
  };

  return (
    <div className="form-container">
      {submitted && <div className="success-msg">Message sent successfully!</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input 
            type="text" 
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>

        <div className="form-group">
          <input 
            type="email" 
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="form-group">
          <textarea 
            placeholder="Your Message"
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
          ></textarea>
          {errors.message && <span className="error">{errors.message}</span>}
        </div>

        <Button text="Send Message" variant="success" type="submit" />
      </form>
    </div>
  );
};

export default Form;