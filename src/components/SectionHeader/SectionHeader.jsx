import "./sectionHeader.css";

const SectionHeader = ({ number, title, subtitle }) => {
  return (
    <div className="sectionHeader">
      <p className="sectionHeader_number">{number}</p>
      <span></span>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </div>
  );
};

export default SectionHeader;
