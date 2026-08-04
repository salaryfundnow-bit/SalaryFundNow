import React, { useRef } from "react";
import "./Client-stories.css";
import { motion, useScroll, useTransform } from "framer-motion";

// center image

import centerImage from "../../assets/lifeat3.jpg";

// client images
import {
  FaUserTie,
  FaUserGraduate,
  FaStore,
  FaBriefcase,
  FaUserShield,
} from "react-icons/fa";

const stories = [
  {
    name: "Amit Sharma",
    role: "Small Business Owner",
    icon: <FaStore />,
    story:
      "Working with this team has been an absolute pleasure. From the very beginning, they understood my business needs and offered solutions that were practical and growth-oriented.",
  },
  {
    name: "Priya Verma",
    role: "Entrepreneur",
    icon: <FaUserGraduate />,
    story:
      "What impressed me most was the clarity in communication and commitment to timelines. Every step was explained clearly and professionally.",
  },
  {
    name: "Rahul Singh",
    role: "Retail Partner",
    icon: <FaUserTie />,
    story:
      "In today's fast-paced environment, quick response and reliability matter the most. This team delivered exactly that with consistency.",
  },
  {
    name: "Neha Gupta",
    role: "Startup Founder",
    icon: <FaBriefcase />,
    story:
      "Their guidance helped me take informed decisions and focus on growth instead of worrying about processes and documentation.",
  },
  {
    name: "Vikas Mehta",
    role: "Self Employed",
    icon: <FaUserShield />,
    story:
      "Simple, transparent, and efficient. The entire journey was smooth with no hidden surprises. Highly recommended.",
  },
];

const ClientStories = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [80, 0]);

  return (
    <section className="client-stories" ref={ref}>
      {/* HEADER */}
      <div className="stories-header">
        <h1>Client Stories</h1>
        <p>Real experiences from people who trust and grow with us</p>
      </div>

      <motion.div className="stories-container" style={{ y }}>
        <div className="stories-layout">
          {/* LEFT COLUMN */}
          <div className="stories-column">
            {stories.slice(0, 2).map((item, index) => (
              <motion.div
                className="story-card"
                key={index}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="story-user">
                  <div className="story-icon">
  {item.icon}
</div>
                  <div>
                    <h4>{item.name}</h4>
                    <span>{item.role}</span>
                  </div>
                </div>
                <p className="story-text">“{item.story}”</p>
              </motion.div>
            ))}
          </div>

          {/* CENTER IMAGE */}
          <div className="story-image">
            <img src={centerImage} alt="Client Stories" />
          </div>

          {/* RIGHT COLUMN */}
          <div className="stories-column">
            {stories.slice(2).map((item, index) => (
              <motion.div
                className="story-card"
                key={index}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
               <div className="story-user">

  <div className="story-icon">
    {item.icon}
  </div>

  <div>
    <h4>{item.name}</h4>
    <span>{item.role}</span>
  </div>

</div>
                <p className="story-text">“{item.story}”</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ClientStories;