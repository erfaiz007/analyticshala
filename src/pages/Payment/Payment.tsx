import "./Payment.css";
import { useLocation } from "react-router-dom";

declare global {
  interface Window {
    Razorpay: any;
  }
}

const Payment = () => {
  const { state } = useLocation() as {
    state: {
      orderId: string;
      amount: number;
      user: {
        name: string;
        email: string;
        phone: string;
      };
    };
  };

  const openRazorpay = () => {
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
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
      handler: function (response: any) {
        console.log("Payment success:", response);
        window.location.href = "/payment-success";
      },
      theme: {
        color: "#6c5ce7",
      },
    };

    if (!options.key) {
      alert("Razorpay key not found. Check environment variables.");
      return;
    }

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
