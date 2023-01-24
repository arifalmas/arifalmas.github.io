import { CONTACT } from "../../../data";
import { ContactForm, ContactInfo, SectionTitle } from "../../elements";

function Contact() {
  const { title, subtitle, typeWriter, email } = CONTACT;
  return (
    <section name="Contact" className="element">
      <div className="container">
        {/* ==== Section Title ==== */}
        <SectionTitle
          title={title}
          subtitle={subtitle}
          typeWriter={typeWriter}
          className="!mb-0"
        />
        <div className="flex flex-wrap justify-between">
          {/* ==== Contact Info ==== */}
          <ContactInfo {...CONTACT} />
          {/* ==== Contact Form ==== */}
          <ContactForm contactEmail={email} />
        </div>
      </div>
    </section>
  );
}

export default Contact;
