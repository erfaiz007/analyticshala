import "./Payment.css";

import { GOOGLESHEET_WEB_APP_URL, RAZORPAY_KEY_ID } from "../../config";
import { useLocation, useNavigate } from "react-router-dom";

const Payment = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  // ✅ prevent direct access / refresh crash
  if (!state) {
    navigate("/");
    return null;
  }

  const openRazorpay = () => {
    const razorpayKey = RAZORPAY_KEY_ID;

    if (!razorpayKey) {
      alert("Razorpay key missing.");
      return;
    }

    const options = {
      key: razorpayKey,
      amount: state.amount,
      currency: "INR",
      name: "Workshop Registration",
      description: "Workshop Fee",
      order_id: state.orderId,

      prefill: {
        name: state.user.name,
        email: state.user.email,
        contact: state.user.phone,
      },

      handler: async function (response) {
        try {
          // ✅ SAVE ONLY AFTER PAYMENT
          await fetch(GOOGLESHEET_WEB_APP_URL, {
            method: "POST",
            body: new URLSearchParams({
              action: "saveRegistration",
              name: state.user.name,
              email: state.user.email,
              phone: state.user.phone,
              age: state.user.age,
              status: state.user.status,
              mode: state.user.mode,
              analyticshalaStudent: state.user.analyticshalaStudent,
              paymentId: response.razorpay_payment_id,
            }),
          });

          navigate("/payment-success");
        } catch (err) {
          console.error(err);
          alert(
            "Payment successful but failed to record registration. Contact support.",
          );
        }
      },

      theme: {
        color: "#6c5ce7",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="payment_wrapper">
      <div className="payment_card">
        <h2>Complete Your Payment</h2>
        <p className="payment_subtext">Secure checkout powered by Razorpay</p>

        <div className="payment_amount">
          <span>Amount to Pay</span>
          <strong>₹{state.amount / 100}</strong>
        </div>

        <button className="pay_button" onClick={openRazorpay}>
          Pay ₹{state.amount / 100}
        </button>

        <div className="payment_secure">
          🔒 100% secure payment • Cards • UPI • Netbanking
        </div>
      </div>
    </div>
  );
};

export default Payment;
