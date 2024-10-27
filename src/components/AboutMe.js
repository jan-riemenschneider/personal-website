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
          <SkillsTitle>My Skillset</SkillsTitle>
          <SkillsList>
            <SkillItem>HTML</SkillItem>
            <SkillItem>CSS</SkillItem>
            <SkillItem>JavaScript</SkillItem>
            <SkillItem>React</SkillItem>
            <SkillItem>Next.js</SkillItem>
            <SkillItem>MongoDB</SkillItem>
            <SkillItem>GIT</SkillItem>
            <SkillItem>GitHub</SkillItem>
            <SkillItem>Terminal</SkillItem>
            <SkillItem>Responsive Design</SkillItem>
            <SkillItem>Figma</SkillItem>
          </SkillsList>
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
  padding: 4rem 2rem;
  height: 100%;

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const AboutMeHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 5rem;

  @media (max-width: 768px) {
    padding-bottom: 4rem;
  }
`;

const AboutMeTitle = styled.h2`
  font-size: 3.2rem;

  @media (max-width: 768px) {
    font-size: 2.8rem;
  }
`;

const AboutMeDescription = styled.p`
  font-size: 1.6rem;
  margin-top: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.4rem;
    margin-top: 1rem;
  }
`;

const AboutMeDescriptionSpan = styled.span`
  font-size: 1.6rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const WhoIAmAndSkillsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  gap: 3rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
`;

const WhoIAMSection = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 45rem;

  h3 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 2rem;

    @media (max-width: 768px) {
      font-size: 1.8rem;
      text-align: center;
    }
  }

  p {
    font-size: 1.6rem;
    line-height: 1.6;
    text-align: justify;

    @media (max-width: 768px) {
      font-size: 1.4rem;
      text-align: center;
    }
  }
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SkillsTitle = styled.h3`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1.8rem;
    text-align: center;
  }
`;

const SkillsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  list-style: none;
  justify-content: center;
  padding: 0;
`;

const SkillItem = styled.li`
  background-color: #d9d9d9;
  padding: 1rem 2rem;
  border-radius: 1rem;
  font-size: 1.4rem;
  font-weight: 200;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    padding: 0.8rem 1.5rem;
    font-size: 1.2rem;
  }
`;
