import { motion } from "framer-motion";
import "./hamburger.scss";

const Hamburger = ({ open, setOpen }) => {
    const size = 24;
    const animations = {
        lines: [
            {   
                initial: { y: -size/3 },
                opened: { 
                    y: 0,
                    rotate: 45
                } ,
            },
            { 
                initial: { 
                    y: 0,
                    height: 2,
                    opacity: 1,
                },
                opened: {
                    height: 0,
                    opacity: 0,
                }
            },
            { 
                initial: { y: size/3 },
                opened: { 
                    y: 0,
                    rotate: -45
                },
            },
        ],
      };

    return [
        <motion.div 
        className="hamburgerContainer"
        onClick={() => setOpen((prev) => !prev)}
        >
            {animations.lines.map((_, index) => (
                <motion.div
                    key={index}
                    className="line"
                    variants={animations.lines[index]}
                    initial="initial"
                    animate={open ? 'opened' : 'initial'}
                />
            ))}
        </motion.div>
    ];
};

export default Hamburger;