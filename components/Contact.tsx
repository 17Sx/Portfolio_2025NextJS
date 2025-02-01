import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

const Contact = () => {
  const contactRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (formRef.current) {
      emailjs
        .sendForm(
          "service_rqyaqx5", 
          "template_ibcfhk9", 
          formRef.current,
          "nydX_-APuiSZrBKYL" 
        )
        .then(
          (result) => {
            console.log("Email sent successfully!", result.text);
            alert("Message sent successfully!");
            if (formRef.current) formRef.current.reset();
          },
          (error) => {
            console.error("Error sending email:", error.text);
            alert("An error occurred. Please try again.");
          }
        );
    }
  };

  useGSAP(() => {
    if (contactRef.current) {
      gsap.from(contactRef.current, {
        opacity: 0,
        y: 100,
        duration: 1,
        ease: "power2.out",
      });
    }
  }, []);

  return (
    <section className="contact" id="contact" ref={contactRef}>
      <div className="contact-container">
          <form ref={formRef} onSubmit={sendEmail} className="contact-form">
          <h2 className="contact-title">Let&apos;s Talk!</h2>
            <div className="form-group">
              <label htmlFor="name">[Your Name]</label>
              <input type="text" id="name" name="from_name" required/>
            </div>
            <div className="form-group">
              <label htmlFor="email">[Your Email]</label>
              <input type="email" id="email" name="from_email" required/>
            </div>
            <div className="form-group">
              <label htmlFor="message"> [Your Message]</label>
              <textarea id="message" name="message" rows={1} required/>
            </div>
            <button type="submit" className="submit-btn">
              [Send Message
              <Image src="/img/uprarr.png" alt="" width={16} height={16}/>
              ]
            </button>
          </form>
      </div>
    </section>
  );
};

export default Contact;
