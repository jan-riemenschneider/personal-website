"use client";
import styled from "styled-components";

const AboutMeSectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 666px;
`;

const AboutMeHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 10rem;
`;

const AboutMeTitle = styled.h2`
  font-size: 3.2rem;
`;

const AboutMeDescription = styled.p`
  font-size: 1.5rem;
  margin-top: 2rem;
`;
const AboutMeDescriptionSpan = styled.span`
  font-size: 1.5rem;
`;

const WhoIAmAndSkillsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;

const WhoIAMSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h3 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 3rem;
  }

  p {
    width: 420px;
    font-size: 1.6rem;
  }
`;

const SkillsTitle = styled.h3`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const SkillsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
`;

const SkillItem = styled.li`
  background-color: #d9d9d9;
  padding: 10px 20px;
  border-radius: 10px;
  font-size: 1.4rem;
  font-weight: 200;
  text-align: center;
  margin: 1rem 1rem 1rem 0rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const AboutMe = () => {
  return (
    <AboutMeSectionWrapper>
      <AboutMeHeaderContainer>
        <AboutMeTitle>ABOUT ME</AboutMeTitle>
        <AboutMeDescription>
          Here you can learn more about who I am, what I do, and the skills I've
          developed, mainly
        </AboutMeDescription>
        <AboutMeDescriptionSpan>
          focused on programming and technology.
        </AboutMeDescriptionSpan>
      </AboutMeHeaderContainer>
      <WhoIAmAndSkillsContainer>
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
        <SkillsContainer>
          <div>
            <SkillsTitle>My Current Skillset</SkillsTitle>
            <SkillsList>
              <SkillItem>HTML</SkillItem>
              <SkillItem>CSS</SkillItem>
              <SkillItem>JavaScript</SkillItem>
              <SkillItem>GIT</SkillItem>
              <SkillItem>GitHub</SkillItem>
            </SkillsList>
            <SkillsList>
              <SkillItem>Responsive Design</SkillItem>
              <SkillItem>Figma</SkillItem>
              <SkillItem>Terminal</SkillItem>
            </SkillsList>
          </div>
          <div>
            <SkillsTitle>In Progress</SkillsTitle>
            <SkillsList>
              <SkillItem>React</SkillItem>
              <SkillItem>Next.js</SkillItem>
              <SkillItem>MongoDB</SkillItem>
            </SkillsList>
          </div>
        </SkillsContainer>
      </WhoIAmAndSkillsContainer>
    </AboutMeSectionWrapper>
  );
};

export default AboutMe;
