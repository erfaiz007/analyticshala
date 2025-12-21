import { useNavigate } from "react-router-dom";
import "./PaymentSuccess.css";

const PaymentSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="success_wrapper">
      <div className="success_card">
        <div className="success_icon">🎉</div>

        <h1>Payment Successful</h1>
        <p>
          Thank you for registering! We look forward to seeing you at the
          workshop.
        </p>

        <div className="success_actions">
          <button className="success_primary" onClick={() => navigate("/")}>
            Go to Home
          </button>

          <button className="success_secondary" onClick={() => navigate("/")}>
            Submit Another Form
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
