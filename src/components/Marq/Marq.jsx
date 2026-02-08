import Marquee from "react-fast-marquee";
import "./marq.css";

const Marq = ({ data }) => {
  if (!data || data.length === 0) return null;

  return (
    <div className="marq_container">
      <Marquee speed={30} pauseOnHover gradient={false}>
        {data.map((item) => (
          <div className="image_item" key={item.id}>
            <img src={item.image} alt="logo" />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Marq;
