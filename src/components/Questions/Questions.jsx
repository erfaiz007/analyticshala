import { useState } from "react";

// import CSS
import "./questions.css";

// import appData
import { questionsData } from "../../../appData";

// import Components
import SectionHeader from "../SectionHeader/SectionHeader";

const Questions = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  return (
    <section className="questions" id="faq">
      <div className="container">
        <SectionHeader
          number="07"
          title="Frequently Asked"
          subtitle="Questions"
        />

        <main className="questions_main">
          {questionsData.map((question, index) => (
            <div
              key={index}
              className={`question_item ${
                currentQuestion === index ? "active" : ""
              }`}
              onClick={() => setCurrentQuestion(index)}
            >
              <div className="question_area">
                <h3>
                  <span className="question_number">0{question.id}</span>
                  {question.question}
                </h3>
                <div className="question_arrow">
                  <i className="fas fa-chevron-right" />
                </div>
              </div>
              <p className="answer_area">{question.answer}</p>
            </div>
          ))}
        </main>
      </div>
    </section>
  );
};

export default Questions;
