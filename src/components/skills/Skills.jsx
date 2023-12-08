// import { motion } from "framer-motion";
import SkillIcons from "./skillIcons/SkillIcons"
import Experience from "./experience/Experience"
import "./skills.scss";

const Skills = () => {
      
    return (
      <div className="container">
          <h1 className="title">Skills & Experiences</h1>
            <SkillIcons/>
            <Experience/>
      </div>
    );
  };

  export default Skills;