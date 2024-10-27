"use client";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import styled from "styled-components";

const Hero = () => {
  return (
    <StyledSection id="hero">
      <StyledIconList>
        <StyledLi>
          <Link href="https://linkedin.com/in/jan-riemenschneider">
            <StyledLinkedIn />
          </Link>
          <Link href="https://github.com/jan-riemenschneider">
            <StyledGithub />
          </Link>
          <Link href="mailto:jan-riemenschneider@outlook.de">
            <StyledToMail />
          </Link>
        </StyledLi>
      </StyledIconList>
      <StyledGreetingBox>
        <StyledH2Hey>HEY, I'M JAN!</StyledH2Hey>
        <StyledH2Greeting>
          I'm a web developer in training – passionate about building functional
          and creative digital experiences!
        </StyledH2Greeting>
      </StyledGreetingBox>
      <StyledImage
        src="/images/4653eebe (1)-removebg-preview (1).jpg"
        alt="Jan Riemenschneider"
        width={250}
        height={240}
        priority
      />
    </StyledSection>
  );
};

export default Hero;

const StyledSection = styled.section`
  height: 66.6rem;
  background-color: var(--secondary-color);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10rem;
  position: relative;
  padding: 0 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    gap: 2rem;
    padding: 20px;
    padding-top: 30px;
  }
`;

const StyledIconList = styled.ul`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  @media (max-width: 768px) {
    top: 75%;
    transform: translateY(-50%);
  }
`;

const StyledLi = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: white;
  gap: 10px;
  height: 125px;
  width: 40px;
  padding-top: 10px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
`;

const StyledH2Hey = styled.h2`
  color: black;
  font-size: 3.9rem;
  font-weight: 700;
  word-wrap: break-word;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const StyledH2Greeting = styled.h2`
  color: black;
  font-size: 3rem;
  font-weight: 400;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2.4rem;
  }
`;

const StyledGreetingBox = styled.div`
  width: 56rem;
  text-align: center;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 20px;
  }
`;

const StyledImage = styled(Image)`
  border-radius: 50%;
  width: 250px;
  height: 240px;

  @media (max-width: 768px) {
    width: 200px;
    height: 190px;
  }
`;

const StyledLinkedIn = styled(FaLinkedin)`
  width: 25px;
  height: 25px;
  color: black;
  transition: transform 0.3s ease;

  &:hover {
    transform: rotate(20deg);
  }
`;

const StyledGithub = styled(FaGithub)`
  width: 25px;
  height: 25px;
  color: black;
  transition: transform 0.3s ease;

  &:hover {
    transform: rotate(20deg);
  }
`;

const StyledToMail = styled(IoMail)`
  width: 25px;
  height: 25px;
  color: black;
  transition: transform 0.3s ease;

  &:hover {
    transform: rotate(20deg);
  }
`;
