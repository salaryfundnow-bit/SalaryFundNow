import React, { useRef } from "react";  
import "./ContactUs.css";

import { motion, useScroll, useTransform } from "framer-motion";
import contactImage from "../../assets/ContactUs.png"; // replace with your image path


const ContactSection = () => {
  const ref = useRef(null);

  // Get scroll progress for this section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // start and end points
  });

  // Transform scroll progress to X positions
  const textX = useTransform(scrollYProgress, [0, 1], [-200, 0]);  // text slides from left
  const imageX = useTransform(scrollYProgress, [0, 1], [200, 0]);  // image slides from right

  return (
    <section className="contact-section" ref={ref}>
      <div className="containerr">
        <motion.div className="contact-content" style={{ x: textX }}>
          <h2>Contact Us</h2>
          <p className="subtitle">We are here to help you</p>
          <p className="description">
            Reach out to us for any queries or assistance. Our team is ready to respond promptly.
          </p>
          <div className="contact-info">
            <h3>Email</h3>
            <p>info@salaryfundnow.com</p>
            <h3>Phone</h3>
            <p>+91 9792355358</p>
          </div>
        </motion.div>
        <motion.div className="contact-image" style={{ x: imageX }}>
          <img src={contactImage} alt="Contact" />
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;