import Sidebar from "../sidebar/Sidebar";
import "./Navbar.scss";
import { motion } from "framer-motion"

const Navbar = () => {
  return (
      <div className="navbar"> 
        <Sidebar/>
        <div className="wrapper">
            <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            >
                nsrajat
            </motion.span>
            <div className="socials">
              <a href="https://instagram.com">
                <img src="/icons/instagram.png" alt="" />
              </a>
              <a href="https://instagram.com">
                <img src="/icons/github.png" alt="" />
              </a>
              <a href="https://instagram.com">
                <img src="/icons/linkedin.png" alt="" />
              </a>
              <a href="https://instagram.com">
                <img src="/icons/mail.png" alt="" />
              </a>
            </div>
          </div>
      </div>
  );
};

export default Navbar;