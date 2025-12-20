import { useState } from "react";
import "./WorkshopForm.css";

const WorkshopForm = () => {
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    phone: "",
    mode: "",
    student: "",
  });

  const handleFormChange = (e) => {
    console.log("changed");
    setFormValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    console.log("formValue");
  };

  return (
    <div className="form_wrapper">
      <form>
        <div className="input_group">
          <label htmlFor="name">Full Name</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={formValue.name}
            onChange={(e) => handleFormChange(e)}
          />
        </div>
        <div className="input_group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formValue.email}
            onChange={(e) => handleFormChange(e)}
          />
        </div>
        <div className="input_group">
          <label htmlFor="name">Phone Number</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Enter your phone number"
            value={formValue.name}
            onChange={(e) => handleFormChange(e)}
          />
        </div>

        <div className="input_group">
          <label htmlFor="name">Mode to Attend</label>
          <input
            id="offline"
            type="radio"
            name="offline"
            value={formValue.name}
            onChange={(e) => handleFormChange(e)}
          />
          <input
            id="online"
            type="radio"
            name="online"
            value={formValue.name}
            onChange={(e) => handleFormChange(e)}
          />
        </div>

        <div className="input_group">
          <label htmlFor="name">About You</label>
          <input
            id="student"
            type="radio"
            name="student"
            value={formValue.name}
            onChange={(e) => handleFormChange(e)}
          />
          <input
            id="working"
            type="radio"
            name="working"
            value={formValue.name}
            onChange={(e) => handleFormChange(e)}
          />
        </div>

        <div className="button_wrapper">
          <button onClick={(e) => handleFormSubmit(e)}>Submit Form</button>
        </div>
      </form>
    </div>
  );
};

export default WorkshopForm;
