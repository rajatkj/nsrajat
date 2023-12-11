import { motion } from "framer-motion";
import "./skillicons.scss";

const variants = {
  open: {
    transition: {
      delay: 2.5,
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 100,
    opacity: 0,
  },
};

const SkillIcons = ( { title, skills } ) => {

    return (
        <div className="skillContainer" >
          <div className="skillsTitle">
              <img className="skillTitleImage" src={ title === "iOS" ? "/icons/apple.png" : "/icons/coding.png"} alt="skilltitle" />
          </div>
          <motion.div className="skills-list" variants={ variants } initial="closed" whileInView="open">
            { skills.map( (skill) => (

              <motion.div className="skillsItem" key={ skill.name } variants={ itemVariants } initial="closed" whileInView="open" >
                <div className="skill-image">
                    <img src={ skill.icon } alt={skill.name} />
                </div>
                <p>{skill.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div> 
    );
};

export default SkillIcons;