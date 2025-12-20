import "./workshops.css";

// import appData
import { workshopData } from "../../../appData";
import WorkshopCard from "../../components/workshopCard/workshopCard";

const Workshops = () => {
  return (
    <div className="workshops_container">
      <div className="upcoming">
        <h2>Upcoming Workshops</h2>

        <main>
          {workshopData.upcoming.map((data) => (
            <WorkshopCard {...data} key={data.id} />
          ))}
        </main>
      </div>

      <div className="previous">
        <h2>Previous Workshops</h2>

        <main>
          {workshopData.previous.map((data) => (
            <WorkshopCard {...data} key={data.id} />
          ))}
        </main>
      </div>
    </div>
  );
};

export default Workshops;
