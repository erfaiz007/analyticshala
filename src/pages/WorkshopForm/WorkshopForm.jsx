import { useState, useEffect } from "react";
import "./WorkshopForm.css";
import { useNavigate } from "react-router-dom";

const WorkshopForm = () => {
  const navigate = useNavigate();

  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    mode: "",
    about: "",
  });

  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (showSuccess) {
      const timer = setTimeout(() => {
        setShowSuccess(false);
      }, 2500);

      return () => clearTimeout(timer);
    }
  }, [showSuccess]);

  const handleFormChange = (e) => {
    setFormValue((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    setErrors((prev) => ({
      ...prev,
      [e.target.name]: undefined,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formValue.name.trim()) {
      newErrors.name = "Full name is required";
    }

    if (!formValue.email) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formValue.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formValue.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formValue.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
    }

    if (!formValue.mode) {
      newErrors.mode = "Please select a mode";
    }

    if (!formValue.about) {
      newErrors.about = "Please tell us about yourself";
    }

    return newErrors;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    console.log("Submit clicked");

    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length !== 0) {
      console.log("Validation failed", validationErrors);
      return;
    }

    try {
      console.log("Sending data to backend...", formValue);

      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbw_FXe6DCfl13atbm8fYzDkjP-AbCoj6T19Crr74kWF7Zv7aj6xWD5kF3drGWPeqfjR/exec",
        {
          method: "POST",
          headers: { "Content-Type": "text/plain" },
          body: JSON.stringify({
            ...formValue,
            amount: 9,
          }),
        }
      );

      console.log("Response status:", response.status);

      if (!response.ok) {
        const text = await response.text();
        console.error("Backend error:", text);
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log("Backend result:", result);

      if (result.success) {
        setShowSuccess(true);

        setTimeout(() => {
          navigate("/payment", {
            state: {
              orderId: result.orderId,
              amount: result.amount,
              user: formValue,
            },
          });
        }, 2500);
      }
    } catch (error) {
      console.error("Form submission failed:", error);
      alert("Submission failed. Please try again.");
    }
  };

  return (
    <div className="form_wrapper">
      <h2 className="form_title">Test title</h2>

      <form onSubmit={handleFormSubmit} noValidate>
        <div className="input_group">
          <label htmlFor="name">Full Name</label>
          <input
            id="name"
            type="text"
            name="name"
            value={formValue.name}
            onChange={handleFormChange}
            className={errors.name ? "error" : ""}
          />
          {errors.name && <small>{errors.name}</small>}
        </div>

        <div className="input_group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={formValue.email}
            onChange={handleFormChange}
            className={errors.email ? "error" : ""}
          />
          {errors.email && <small>{errors.email}</small>}
        </div>

        <div className="input_group">
          <label htmlFor="phone">Phone Number</label>
          <input
            id="phone"
            type="text"
            name="phone"
            value={formValue.phone}
            onChange={handleFormChange}
            className={errors.phone ? "error" : ""}
          />
          {errors.phone && <small>{errors.phone}</small>}
        </div>

        <div className="input_group">
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="text"
            name="age"
            value={formValue.age}
            onChange={handleFormChange}
          />
        </div>

        <div className="input_group_radio">
          <div className="input_group">
            <label>Mode to Attend</label>
            <div className="radio_group">
              <label>
                <input
                  type="radio"
                  name="mode"
                  value="offline"
                  checked={formValue.mode === "offline"}
                  onChange={handleFormChange}
                />
                Offline
              </label>

              <label>
                <input
                  type="radio"
                  name="mode"
                  value="online"
                  checked={formValue.mode === "online"}
                  onChange={handleFormChange}
                />
                Online
              </label>
            </div>
            {errors.mode && <small>{errors.mode}</small>}
          </div>

          <div className="input_group">
            <label>About You</label>
            <div className="radio_group">
              <label>
                <input
                  type="radio"
                  name="about"
                  value="student"
                  checked={formValue.about === "student"}
                  onChange={handleFormChange}
                />
                Student
              </label>

              <label>
                <input
                  type="radio"
                  name="about"
                  value="working"
                  checked={formValue.about === "working"}
                  onChange={handleFormChange}
                />
                Working Professional
              </label>
            </div>
            {errors.about && <small>{errors.about}</small>}
          </div>
        </div>

        <div className="button_wrapper">
          <button type="submit">Proceed</button>
        </div>
      </form>

      {showSuccess && (
        <div className="success_popup">
          <span>Form submitted successfully!</span>
        </div>
      )}
    </div>
  );
};

export default WorkshopForm;
