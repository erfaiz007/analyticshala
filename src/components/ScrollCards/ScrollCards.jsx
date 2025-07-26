// import CSS
import "./scrollCards.css";

// import appData
import { scrollCardsData } from "../../../appData";

// import Components
import SectionHeader from "../SectionHeader/SectionHeader";

const ScrollCards = ({ setShowDownload }) => {
  return (
    <section className="scrollCards">
      <div className="container">
        <SectionHeader
          number="03"
          title="Why to Choose"
          subtitle="Analyticshala"
        />

        <div className="scrollCards_all">
          {scrollCardsData.map((card) => (
            <div key={card.id} className="scrollCard_item">
              <div className="card_body">
                <div className="card_number_title">
                  <h1 className="card_number">0{card.id}</h1>
                  <h2 className="card_title">{card.title}</h2>
                </div>
                <p>{card.info}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="card_btn">
          <a href="#" onClick={() => setShowDownload(true)}>
            Download Brochure
          </a>
        </div>
      </div>
    </section>
  );
};

export default ScrollCards;
