"use client";
import styled from "styled-components";

const AboutMe = () => {
  return (
    <AboutMeSectionWrapper id="about">
      <AboutMeHeaderContainer>
        <AboutMeTitle>ABOUT ME</AboutMeTitle>
        <AboutMeDescription>
          Learn more about me, what I do, and the skills I’ve built.
        </AboutMeDescription>
        <AboutMeDescriptionSpan>
          focused on programming and technology.
        </AboutMeDescriptionSpan>
      </AboutMeHeaderContainer>
      <WhoIAmAndSkillsContainer>
        <WhoIAMSection>
          <h3>Who I Am</h3>
          <p>
            I'm Jan, a Web Developer in training with 9 years of experience in
            sales, where I developed strong communication skills and a
            customer-focused approach. Through a hands-on bootcamp, I built my
            technical and analytical skills and learned to create user-friendly,
            functional, and visually engaging web applications. I focus on
            writing clean code and delivering smooth user experiences. As I
            finish my training, I’m excited to join a team where I can
            contribute my skills, learn more, and grow as a developer.
          </p>
        </WhoIAMSection>
        <SkillsContainer>
          <div>
            <SkillsTitle>My Skillset</SkillsTitle>
            <SkillsList>
              <SkillItem>HTML</SkillItem>
              <SkillItem>CSS</SkillItem>
              <SkillItem>JavaScript</SkillItem>
            </SkillsList>
            <SkillsList>
              <SkillItem>React</SkillItem>
              <SkillItem>Next.js</SkillItem>
              <SkillItem>MongoDB</SkillItem>
            </SkillsList>
            <SkillsList>
              <SkillItem>GIT</SkillItem>
              <SkillItem>GitHub</SkillItem>
              <SkillItem>Terminal</SkillItem>
            </SkillsList>
            <SkillsList>
              <SkillItem>Responsive Design</SkillItem>
              <SkillItem>Figma</SkillItem>
            </SkillsList>
          </div>
        </SkillsContainer>
      </WhoIAmAndSkillsContainer>
    </AboutMeSectionWrapper>
  );
};

export default AboutMe;

const AboutMeSectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 66.6rem;
  @media (max-width: 768px) {
    height: auto;
    padding: 10px;
  }
`;

const AboutMeHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 10rem;
  @media (max-width: 768px) {
    padding-bottom: 20px;
    margin-top: 20px;
  }
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
  @media (max-width: 768px) {
    flex-direction: column;
    justify-items: center;
    gap: 30px;
    margin-left: 30%;
    margin-top: 30px;
  }
`;

const WhoIAMSection = styled.div`
  display: flex;
  flex-direction: column;
  h3 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 3rem;
  }

  p {
    width: 42rem;
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
  margin-bottom: 20px;
`;
const SkillsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
`;

const SkillItem = styled.li`
  background-color: #d9d9d9;
  padding: 1rem 2rem;
  border-radius: 1rem;
  font-size: 1.4rem;
  font-weight: 200;
  text-align: center;
  margin: 1rem 1rem 1rem 0rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;
