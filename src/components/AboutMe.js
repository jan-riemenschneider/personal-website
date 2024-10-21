"use client";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const AboutMeSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2%;
`;

const AboutMeHeader = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px;

  h2 {
    font-size: 32px;
  }
  p {
    font-size: 15px;
    margin-top: 20px;
  }
`;
const WhoIAMSection = styled.section`
  h3 {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 30px;
  }

  p {
    height: 263px;
    width: 400px;
    font-size: 16 px;
  }
`;

const DivForFlexbox = styled.div`
  display: flex;
  gap: 300px;
  margin-top: 30px;
`;

const AboutMe = () => {
  return (
    <AboutMeSection>
      <AboutMeHeader>
        <h2>ABOUT ME</h2>
        <p>
          Here you can learn more about who I am, what I do, and the skills I've
          developed, mainly
        </p>
        <span> focused on programming and technology.</span>
      </AboutMeHeader>
      <DivForFlexbox>
        <WhoIAMSection>
          <h3>Who I Am</h3>
          <p>
            I'm Jan, a passionate Junior Web Developer in training. With a
            strong interest in building user-friendly, functional, and creative
            web applications, I’m constantly working on improving my skills. I
            focus on delivering clean code and smooth user experiences. As I
            complete my bootcamp, I am actively looking for opportunities to
            contribute to real-world projects where I can apply my technical
            skills and grow as a developer. Feel free to check out my projects
            or contact me if you'd like to collaborate!
          </p>
        </WhoIAMSection>

        <section>
          <h3>My Current Skillset</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>GIT</li>
            <li>GitHub</li>
            <li>Responsive Design</li>
            <li>Figma</li>
            <li>Terminal</li>
          </ul>

          <h3>In Progress</h3>
          <ul>
            <li>React</li>
            <li>Next.js</li>
            <li>MongoDB</li>
          </ul>
        </section>
      </DivForFlexbox>
    </AboutMeSection>
  );
};
export default AboutMe;
