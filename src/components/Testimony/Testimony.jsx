import React, { useState } from "react";
import { testimonyData } from "../../../appData";

// imported CSS
import "./testimony.css";
import SectionHeader from "../SectionHeader/SectionHeader";

const Testimony = () => {
  const [currentCard, setCurrentCard] = useState(0);

  const handleArrowClick = (type) => {
    const maxCards = 4;

    if (type === "up") {
      setCurrentCard((prev) => (prev <= 0 ? maxCards - 1 : prev - 1));
    } else {
      setCurrentCard((prev) => (prev >= maxCards - 1 ? 0 : prev + 1));
    }
  };
  return (
    <section className="testimony" id="testimony">
      <div className="container">
        <SectionHeader number="04" title="Reviews by" subtitle="Students" />

        <main className="testimony_main">
          <div
            className="testimony_cards"
            style={{ transform: `translateY(${currentCard * -50}vh)` }}
          >
            {testimonyData.map((value, index) => (
              <div key={value.id} className="testimony_card_wrapper">
                <div
                  className={`testimony_card_item ${
                    currentCard === index && "active"
                  }`}
                >
                  <p>
                    <i className="fas fa-quote-left" />
                    {value.review}
                    <i className="fas fa-quote-right" />
                  </p>
                  <div className="profile">
                    <img src={value.image} alt="image" />
                    <div>
                      <h3>{value.name}</h3>
                      <p>{value.position}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="sidebar">
            <i
              className="fas fa-arrow-up"
              onClick={() => handleArrowClick("up")}
            />

            <span className="current_card_number">
              {currentCard + 1}/<span>{testimonyData.length}</span>
            </span>

            <i
              className="fas fa-arrow-down"
              onClick={() => handleArrowClick("down")}
            />
          </div>
        </main>
      </div>
    </section>
  );
};

export default Testimony;
