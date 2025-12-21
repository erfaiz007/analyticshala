import { useEffect } from "react";
import InfiniteMarquee from "vanilla-infinite-marquee";
import "./marq.css";

const Marq = ({ data }) => {
  useEffect(() => {
    const marquee = new InfiniteMarquee({
      element: ".marq_container",
      speed: 60,
      direction: "left",
      duplicateCount: 2,
      smoothEdges: true,
      pauseOnHover: true,
      mobileSettings: {
        direction: "left",
        speed: 40,
      },
    });

    return () => {
      marquee.destroy();
    };
  }, []);

  return (
    <div className="marq_container">
      <div className="image_wrapper">
        {data.map((item) => (
          <div className="image_item" key={item.id}>
            <img src={item.image} alt="logo" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marq;
