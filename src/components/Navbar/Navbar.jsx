import "./Navbar.scss";
import { motion } from "framer-motion"
import { useState } from "react";
import Hamburger from "./Hamburger/Hamburger"

const Navbar = () => {
  const pages = ["Home", "Skills", "Experience", "Projects", "Contact"];

  const [open, setOpen] = useState(false);

  const menuVariants = {
    open: {
      x: 0,
      opacity: 1,
    },
    closed: {
      x: 50,
      opacity: 0,
    },
  };

  return (
      <nav> 
            <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            >
                <a href="#Home">nsrajat</a>
            </motion.div>
            <ul className="navItems">
              { pages.map( (page) => (

                  <motion.li key={ page } whileHover={ { scale: 1.1 } }>
                    <div/>
                    <a href={"#" + page}>{page}</a>
                  </motion.li>
              ))}
            </ul>

            <motion.div className="navMenu" >
              <motion.div className="bg" variants={menuVariants} animate={open ? "open" : "closed"}>

                  <ul className="navMenuItems" onClick={() => setOpen((prev) => !prev)}>
                    { pages.map( (page) => (

                        <motion.li key={ page }>
                          <div/>
                          <a href={"#" + page} >{page}</a>
                        </motion.li>
                    ))}
                  </ul>
              </motion.div>
              <Hamburger open={open} setOpen={setOpen}/>
            </motion.div>
      </nav>
  );
};

export default Navbar;

{/* <div className="socials">
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
            </div> */}