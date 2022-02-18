import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <Image
            src="https://avatars.githubusercontent.com/u/93389594?v=4"
            alt="man-svgrepo"
          />
          <div className="AboutBio">
            Hello! My name is <strong>Rishav Chauhan</strong> 
            "A passionate Full Stack Web Developer having an experience of building Web applications with JavaScript / Reactjs / Nodejs / MongoDb / Express.js and some other cool libraries and frameworks.",

          </div>
          <div className="AboutBio tagline2">
         ,

          </div>
          <Technologies>
            {stackList.map((stack, index) => (
              <Tech key={index} className="tech">
                <TechImg src={stack.img} alt={stack.name} />
                <TechName>{stack.name}</TechName>
              </Tech>
            ))}
          </Technologies>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
