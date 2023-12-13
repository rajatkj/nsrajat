import { useRef, useState } from "react";
import "./contact.scss";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Instagram, LinkedIn, GitHub, Email } from '@mui/icons-material';
const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const ref = useRef();
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const isInView = useInView(ref, { margin: "-100px" });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ikhsp0j",
        "template_ztsjta5",
        formRef.current,
        "A39CnojUFBX24-u9d"
      )
      .then(
        (result) => {
          setSuccess(true)
        },
        (error) => {
          setError(true);
        }
      );
  };

  return (
    <motion.div
      ref={ref}
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>Get in touch!</motion.h1>
        <motion.div className="item" variants={variants}>
          <h2>Mail</h2>
          <span>rajat.zangra@gmail.com</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Address</h2>
          <span>Newcastle upon Tyne, United Kingdom</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Phone</h2>
          <span>+44 7825952883</span>
        </motion.div>
        <motion.div className="socials" variants={variants}>
            <a href="https://instagram.com">
            <Instagram fontSize="large"/>
            </a>
            <a href="https://github.com/rajatkj">
            <GitHub fontSize="large"/>
            </a>
            <a href="http://www.linkedin.com/in/i-rajat-kumar">
            <LinkedIn fontSize="large"/>
            </a>
            <a href="mailto:rajat.zangra@gmail.com">
            <Email fontSize="large"/>
            </a>
        </motion.div>
      </motion.div>
      <div className="formContainer">
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <input type="text" required placeholder="Name" name="name"/>
          <input type="email" required placeholder="Email" name="email"/>
          <textarea rows={8} placeholder="Message" name="message"/>
          <button>Submit</button>
          {error && "Error"}
          {success && "Success"}
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;
