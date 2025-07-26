import { useEffect, useState } from "react";

// import CSS
import "./download.css";

const Download = ({ showDownload, setShowDownload }) => {
  // component states
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  // Method: invoke on form input value change
  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Method: invoke when submit button is clicked
  const handleFormSubmit = (e) => {
    e.preventDefault();

    downloadFile();
    sendNotification();
    setFormData({
      name: "",
      email: "",
      phone: "",
    });
    setShowDownload(false);
  };

  // Method: Download pdf file
  const downloadFile = () => {
    const fileUrl = "/AnalyticShala-Booklet.pdf";
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "analyticShala-brochure.pdf";
    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
  };

  // Method: send notification when file is downloaded
  const sendNotification = async () => {
    const tempFormData = formData;
    tempFormData.access_key = "87ca862d-400f-49cc-be1f-1de878f69bfc";

    const json = JSON.stringify(tempFormData);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };

  return (
    <div className={`download_container ${showDownload ? "show" : ""}`}>
      <div className="download_wrapper">
        <button className="close_btn" onClick={() => setShowDownload(false)}>
          <i className="fas fa-times" />
        </button>

        <div className="download_header">
          <h1>Download Brochure</h1>
          <h3>Please fill the form to download the Brochure</h3>
        </div>

        <form onSubmit={handleFormSubmit}>
          <div className="input_area">
            <div className="input_box">
              <input
                type="text"
                name="name"
                placeholder="Please enter your name"
                value={formData.name}
                onChange={handleFormChange}
                required
                pattern="^[A-Za-z]{3,}(?: [A-Za-z]{1,})*$"
                title="Name should be more than 3 letters"
              />
            </div>
            <div className="input_box">
              <input
                type="email"
                name="email"
                placeholder="Please enter your email"
                value={formData.email}
                onChange={handleFormChange}
                required
              />
            </div>

            <div className="input_box">
              <input
                type="text"
                name="phone"
                placeholder="Please enter your phone"
                value={formData.phone}
                onChange={handleFormChange}
                required
                pattern="^(\+91|91)?[789]\d{9}$"
                title="eg: +919876543210, 9876543210"
              />
            </div>
          </div>

          <button type="submit">Download</button>
        </form>
      </div>
    </div>
  );
};

export default Download;
