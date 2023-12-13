import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Work, School } from '@mui/icons-material'

const Timeline = () => {

  const educations = [
      {
        year: "2011 – 2015",
        name: "Bachelor in Technology(CSE)",
        institute: "Maharishi Markandeshwar University",
        desc: "Ambala, India" ,
      },
      {
        year: "2008 – 2011",
        name: "SSC - 10th Std - HSC 12th Std",
        institute: "Gita Niketan Residential School",
        desc: "Kurukshetra, India" ,
      },
  ];

    const experiences = [
        {
          year: "Jun 2021 – present",
          
          name: "Senior iOS Developer @hedgehog lab",
          company: "Newcastle upon tyne, UK", 
          desc: "Played a significant role in launching a Fitness App with 60,000 users in the first week. Built Content discovery UI, enhanced user engagement, and maintained app architecture. Collaborated on CI/CD pipelines, reducing deployment effort. Supported Python Backend team, wrote technical blog posts, and actively engaged in Agile methodologies.",
        },
        {
          year: "May 2020 – Jun 2021",
          
          name: "Senior Software Engineer @SenecaGlobal, Inc",
          company: "Hyderabad, India",
          desc: "Developed and delivered an award-winning Instant Messaging app. Collaborated cross-functionally with iOS, Android, and Backend teams, integrating Sendbird SDK and a sophisticated Push notification system. Provided pivotal support for an Emergency Alerts app across multiple countries. Led the re-architecture of the app, implementing MVVM, unit testing, and integrating SonarQube for code analysis.",
        },
        {
          year: "Sept 2017 – May 2020",
          
          name: "Senior iOS Engineer @hedgehog lab",
          company: "Hyderabad, India",
          desc: "Steered the Indian iOS team, facilitating effective communication with the UK team. Contributed to critical projects, including a Patient management app for iPadOS, a Travel and Tourism app in Swift, and an iOS app for a UK Pharmaceutical agency. Led team hiring, conducted one-to-one meetings, and provided mentorship. Explored CI/CD processes with Gitlab Pipelines and Fastlane.",
        },
        {
          year: "Jun 2015 – Sept 2017",
          
          name: "iOS Developer @Code Brew labs",
          company: "Chandigarh, India",
          desc: "Pioneered the development of my first iOS Application in Objective-C. Subsequently, transitioned to Swift, contributing significantly to various client projects. Assumed a mentoring role, guiding Graduate developers in iOS Development.",
        },
      ];

    return (
        <VerticalTimeline>
          
          { experiences.map( (experience) => (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: '#3d5872', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  #3d5872' }}
              date={experience.year}
              iconStyle={{ background: '#3d5872', color: '#fff' }}
              icon={ <Work />}
            >
              <h3 className="vertical-timeline-element-title">{experience.name}</h3>
              <h5 className="vertical-timeline-element-subtitle">{experience.company}</h5>
              <p>
                {experience.desc}
              </p>
            </VerticalTimelineElement>
          ))}

          { educations.map( (education) => (
                <VerticalTimelineElement
                className="vertical-timeline-element--education"
                contentStyle={{ background: '#029791', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #029791' }}
                date={ education.year }
                iconStyle={{ background: '#029791', color: '#fff' }}
                icon={ <School/> }
              >
                <h3 className="vertical-timeline-element-title">{education.name}</h3>
                <h5 className="vertical-timeline-element-subtitle">{education.institute}</h5>
                <p>
                  {education.desc}
                </p>
              </VerticalTimelineElement>
            ))}
      </VerticalTimeline>
    );
};

export default Timeline;