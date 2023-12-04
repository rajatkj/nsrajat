import { motion } from "framer-motion";
import "./experience.scss";


const Experience = () => {

    const experiences = [
        {
          year: "Jun 2021 – present",
          works: [
            { name: "Senior iOS Developer", company: "hedgehog lab", desc: "Newcastle upon tyne, UK" },
          ],
        },
        {
            year: "May 2020 – Jun 2021",
            works: [
              { name: "Senior Software Engineer", company: "SenecaGlobal, Inc", desc: "Hyderabad, India" },
            ],
          },
          {
            year: "Sept 2017 – May 2020",
            works: [
              { name: "Senior iOS Engineer", company: "hedgehog lab india", desc: "Hyderabad, India" },
            ],
          },
          {
            year: "Jun 2015 – Sept 2017",
            works: [
              { name: "iOS Developer", company: "Code Brew labs", desc: "Chandigarh, India" },
            ],
          },
      ];

    return (
        <div className="experienceContainer">
            {experiences.map((experience) => (
              <motion.div
                className="experience-item"
                key={experience.year}
              >
                <div className="experience-year">
                  <p>{experience.year}</p>
                </div>
                <motion.div className="experience-works">
                  {experience.works.map((work) => (
                    <>
                      <motion.div
                        whileInView={{ opacity: [0, 1] }}
                        transition={{ duration: 0.5 }}
                        className="experience-work"
                        data-tip
                        data-for={work.name}
                        key={work.name}
                      >
                        <h4>{work.name}</h4>
                        <p>{work.company}</p>
                      </motion.div>
                      <motion.div
                        whileInView={{ opacity: [0, 1] }}
                        transition={{ duration: 0.5 }}
                        className="experience-work-desc"
                        data-tip
                        data-for={work.desc}
                        key={work.desc}
                      >
                        <h4 className="bold-text">{work.desc}</h4>
                      </motion.div>
                    </>
                  ))}
                </motion.div>
              </motion.div>
            ))}
        </div>
    );
};

export default Experience;