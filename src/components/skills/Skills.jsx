// import { motion } from "framer-motion";
import SkillIcons from "./skillIcons/SkillIcons"
import "./skills.scss";

const Skills = () => {
      
  const iOSSkills = [
    { name: "XCode", icon: "/icons/xcode.png"},
    { name: "Swift", icon: "/icons/swift.png"},
    { name: "SwiftUI", icon: "/icons/swiftui.png"},
    { name: "Core Data", icon: "/icons/coredata.png"},
    { name: "Fastlane", icon: "/icons/fastlane.png"},
  ];
  const miscSkills = [
    { name: "Python", icon: "/icons/python.png"},
    { name: "React", icon: "/icons/react.png"},
    { name: "SASS", icon: "/icons/sass.png"},
    { name: "Figma", icon: "/icons/figma.png"},
    { name: "Django", icon: "/icons/django.png"},
    { name: "JSON", icon: "/icons/json.png"},
    { name: "Git", icon: "/icons/git.png"},
  ];
    return (
      <div className="skills">
        <img className="background" src="/background.jpg" alt="background" />

        <div className="container">
            <div className="wrapper">
              <SkillIcons title="iOS" skills={iOSSkills}/>
              <SkillIcons title="Misc" skills={miscSkills}/>
            </div>
              {/* <Experience/> */}
        </div>
        <div className="skillstitle">Skills</div>
      </div> 
    );
  };

  export default Skills;