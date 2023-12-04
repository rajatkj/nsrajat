import { animate, motion } from "framer-motion";

const variants = {
  open: {
    transition: {
      delay: 1.5,
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
    y: 50,
    opacity: 0,
  },
};

const SkillIcons = () => {
  

    const skills = [
        { name: "XCode", icon: "/icons/xcode.png"},
        { name: "Swift", icon: "/icons/swift.png"},
        { name: "Python", icon: "/icons/python.png"},
        { name: "JSON", icon: "/icons/json.png"},
        { name: "Git", icon: "/icons/git.png"},
        { name: "CSS", icon: "/icons/css.png"},
        { name: "iOS", icon: "/icons/apple.png"},
      ];

    return (
        <div className="skillContainer" >
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