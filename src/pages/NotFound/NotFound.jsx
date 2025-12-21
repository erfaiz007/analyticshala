import { useNavigate } from "react-router-dom";
import "./notFound.css";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="notfound_wrapper">
      <div className="notfound_card">
        <div className="notfound_code">404</div>

        <h1>Page Not Found</h1>
        <p>
          Oops! The page you’re looking for doesn’t exist or may have been
          moved.
        </p>

        <button onClick={() => navigate("/")}>Go Back Home</button>
      </div>
    </div>
  );
};

export default NotFound;
