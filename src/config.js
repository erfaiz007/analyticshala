const RAZORPAY_KEY_ID = import.meta.env.VITE_RAZORPAY_KEY_ID;

const GOOGLESHEET_WEB_APP_URL = import.meta.env.VITE_GOOGLESHEET_WEB_APP_URL;

if (!RAZORPAY_KEY_ID) {
  throw new Error("Missing RAZORPAY_KEY_ID. Check environment variables.");
}

if (!GOOGLESHEET_WEB_APP_URL) {
  throw new Error(
    "Missing VITE_GOOGLESHEET_WEB_APP_URL. Check environment variables.",
  );
}

export { RAZORPAY_KEY_ID, GOOGLESHEET_WEB_APP_URL };
