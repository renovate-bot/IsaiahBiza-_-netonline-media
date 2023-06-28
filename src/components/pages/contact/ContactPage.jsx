import React from "react";
import Breadcrumb from "../../common/Breadcrumb";
import ContactForm from "./ContactForm";
import ContactUsArea from "./ContactUsArea";

function ContactPage() {
  return (
    <>
      <Breadcrumb pageName="Contact Us" />
      <div className="contact-area sec-mar">
        <ContactUsArea />
        <ContactForm />
      </div>
    </>
  );
}

export default ContactPage;
