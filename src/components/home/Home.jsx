import "./home.scss";
import { motion } from "framer-motion"

const sliderVariants = {
    initial: {
      x: 0,
    },
    animate: {
      x: "-1000%",
      transition: {
        repeat: Infinity,
        repeatType:"mirror",
        duration: 30,
      },
    },
  };

const Home = () => {

    return (
        <div className="home">
            <div className="wrapper">
                <motion.div className="textContainer">
                    <motion.h2 >RAJAT KUMAR</motion.h2>
                    <motion.h1 >iOS Developer</motion.h1>
                    <motion.div className="buttons">
                        <motion.button>
                            <a href="#Contact">Contact Me!</a>
                        </motion.button>
                        <motion.button>
                            <a href="/cv/cv.docx" download="Rajat Kumar Senior iOS Developer">Download CV</a>
                        </motion.button>
                    </motion.div>
                </motion.div>
                
            </div>
            <motion.div className="slidingTextContainer" variants={ sliderVariants } initial="initial" animate="animate">
                Swift SwiftUI UIKit Fastlane DjangoREST ReactJS
            </motion.div>
            
            <div className="imageContainer">
                <img src="/Rajat71.jpg" alt="" />
            </div>
        </div>
    );
};
export default Home