import { Link } from "react-router-dom";
import "./workshopCard.css";

const WorkshopCard = (props) => {
  return (
    <div className="WorkshopCard_wrapper">
      <div className="card_left">
        <img src={props.image} alt="workshop image" />
      </div>
      <div className="card_right">
        <p className="limited_seats">Limited Seats</p>

        <div className="event_details">
          <h4>{props.title}</h4>
          <p className="event_date">{props.date}</p>
          <p className="event_time">{props.time}</p>
          <div className="event_mode">
            {props.eventMode.map((mode) => (
              <span>{mode}</span>
            ))}
          </div>
        </div>

        <Link to="/workshop-details">Register Now</Link>
      </div>
    </div>
  );
};

export default WorkshopCard;
