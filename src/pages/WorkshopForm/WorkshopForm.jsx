import { useState } from "react";
import "./WorkshopForm.css";

import { GOOGLESHEET_WEB_APP_URL } from "../../config";
import { useNavigate } from "react-router-dom";

const WorkshopForm = () => {
  const navigate = useNavigate();

  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    status: "",
    mode: "",
    analyticshalaStudent: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // ✅ HANDLE CHANGE
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValue((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: value ? undefined : "Required",
    }));
  };

  // ✅ VALIDATION
  const validate = () => {
    const err = {};

    if (!formValue.name.trim()) err.name = "Full name is required";

    if (!formValue.email.trim()) {
      err.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formValue.email)) {
      err.email = "Enter a valid email";
    }

    if (!formValue.phone.trim()) {
      err.phone = "Phone is required";
    } else if (!/^\d{10}$/.test(formValue.phone)) {
      err.phone = "Enter a valid 10-digit number";
    }

    if (!formValue.age) err.age = "Age is required";
    if (!formValue.status) err.status = "Select your status";
    if (!formValue.mode) err.mode = "Select a mode";
    if (!formValue.analyticshalaStudent)
      err.analyticshalaStudent = "Please select";

    return err;
  };

  // ✅ SUBMIT → CREATE ORDER ONLY
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Values :", GOOGLESHEET_WEB_APP_URL);

    const validation = validate();
    setErrors(validation);

    if (Object.keys(validation).length) {
      document
        .querySelector(".error_input, .choice_error")
        ?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    try {
      setIsSubmitting(true);

      const res = await fetch(GOOGLESHEET_WEB_APP_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          action: "createOrder",
          workshopId: "excel_bootcamp",
        }),
      });

      const contentType = res.headers.get("content-type");

      if (!contentType?.includes("application/json")) {
        const text = await res.text();
        console.error("Expected JSON, got:", text);
        throw new Error("Server returned non-JSON response");
      }

      const result = await res.json();

      if (!result.success) {
        console.error("SERVER RESPONSE:", result);
        throw new Error(result.message || "Order creation failed");
      }

      navigate("/payment", {
        state: {
          orderId: result.orderId,
          amount: result.amount,
          user: formValue,
        },
      });
    } catch (err) {
      alert("Unable to start payment. Try again.");
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="premium_wrapper">
      <div className="premium_card">
        <h1>Workshop Registration</h1>
        <p className="subtitle">Secure your seat in under 30 seconds.</p>

        <form onSubmit={handleSubmit} noValidate>
          <div className="grid">
            {["name", "email", "phone", "age"].map((field) => (
              <div key={field}>
                <input
                  type={field === "age" ? "number" : "text"}
                  placeholder={
                    field === "name"
                      ? "Full Name"
                      : field === "email"
                        ? "Email Address"
                        : field === "phone"
                          ? "Phone Number"
                          : "Age"
                  }
                  name={field}
                  value={formValue[field]}
                  onChange={handleChange}
                  className={errors[field] ? "error_input" : ""}
                />
                {errors[field] && (
                  <span className="error_text">{errors[field]}</span>
                )}
              </div>
            ))}
          </div>

          {/* STATUS */}
          <label className="section_label">Professional Status</label>
          <div className={`choice_row ${errors.status ? "choice_error" : ""}`}>
            {[
              "Student",
              "Working Professional",
              "Graduate",
              "Career Switcher",
            ].map((s) => (
              <div
                key={s}
                className={`choice_card ${formValue.status === s ? "active" : ""}`}
                onClick={() => setFormValue((p) => ({ ...p, status: s }))}
              >
                {s}
              </div>
            ))}
          </div>
          {errors.status && <span className="error_text">{errors.status}</span>}

          {/* MODE */}
          <label className="section_label">Workshop Mode</label>
          <div className={`choice_row ${errors.mode ? "choice_error" : ""}`}>
            {["Offline", "Online"].map((m) => (
              <div
                key={m}
                className={`choice_card ${formValue.mode === m ? "active" : ""}`}
                onClick={() => setFormValue((p) => ({ ...p, mode: m }))}
              >
                {m}
              </div>
            ))}
          </div>
          {errors.mode && <span className="error_text">{errors.mode}</span>}

          {/* STUDENT */}
          <label className="section_label">
            Current student of AnalyticShala?
          </label>
          <div
            className={`choice_row ${
              errors.analyticshalaStudent ? "choice_error" : ""
            }`}
          >
            {["Yes", "No"].map((val) => (
              <div
                key={val}
                className={`choice_card ${
                  formValue.analyticshalaStudent === val ? "active" : ""
                }`}
                onClick={() =>
                  setFormValue((p) => ({
                    ...p,
                    analyticshalaStudent: val,
                  }))
                }
              >
                {val}
              </div>
            ))}
          </div>
          {errors.analyticshalaStudent && (
            <span className="error_text">{errors.analyticshalaStudent}</span>
          )}

          <button disabled={isSubmitting}>
            {isSubmitting ? "Preparing Payment..." : "Continue"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default WorkshopForm;
