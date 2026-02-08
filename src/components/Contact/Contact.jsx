// imported Data
import { contactData } from "../../../appData";

// imported CSS
import "./contact.css";
import SectionHeader from "../SectionHeader/SectionHeader";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <SectionHeader number="06" title="To know more" subtitle="Contact Us" />

        <main className="contact_main">
          <div className="contact_info">
            {contactData.map((data, i) => (
              <div key={i} className="contact_sub_info">
                <div className="contact_info_title">
                  <img
                    className="contact_icon"
                    src={data.icon}
                    alt={data.alt}
                  />
                  <h3>{data.name}</h3>
                </div>
                {data.href ? (
                  <a href={data.href}>{data.info}</a>
                ) : (
                  <span>{data.info}</span>
                )}
              </div>
            ))}
          </div>
          <div className="contact_qr">
            <span className="qr_wrapper">
              <img src="/analyticShala-Insta-qr.jpeg" alt="insta image" />
            </span>
            <span className="qr_wrapper">
              <img src="/analyticShala-whatsapp-qr.jpeg" alt="whatsapp image" />
            </span>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Contact;
