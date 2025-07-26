import { useEffect } from "react";
import InfiniteMarquee from "vanilla-infinite-marquee";

// import CSS
import "./marq.css";

const Marq = ({ data }) => {
  useEffect(() => {
    const marquee = new InfiniteMarquee({
      element: ".image_wrapper",
      speed: 50000,
      smoothEdges: true,
      direction: "left",
      duplicateCount: 2,
      mobileSettings: {
        direction: "top",
        speed: 60000,
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
          <img key={item.id} src={item.image} alt="logo" />
        ))}
      </div>
    </div>
  );
};

export default Marq;
