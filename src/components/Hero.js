"use client";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import styled from "styled-components";

const StyledSection = styled.section`
  height: 650px;
  background-color: var(--secondary-color);
  display: flex;
  align-items: center;
  justify-items: auto;
  justify-content: center;
  gap: 100px;
  position: relative;
`;

const StyledLi = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: white;
  margin-left: 10px;
  gap: 10px;
  height: 125px;
  width: 40px;
  padding-top: 10px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
  position: absolute;
  left: 10px;
  transform: translateY(-50%);
  top: 50%;
`;

const StyledH2Hey = styled.h2`
  color: black;
  font-size: 39px;
  font-weight: 700;
  word-wrap: break-word;
`;

const StyledH2Greeting = styled.h2`
  color: black;
  font-size: 30px;
  font-weight: 400;
  word-wrap: break-word;
`;
const StyledGreetingBox = styled.div`
  width: 560px;
  height: 216px;
`;

const StyledImage = styled(Image)`
  border-radius: 1000px;
`;

const StyledLinkedIn = styled(FaLinkedin)`
  transition: transform 0.3s ease;
  &:hover {
    transform: rotate(20deg);
  }
`;

const StyledGithub = styled(FaGithub)`
  transition: transform 0.3s ease;
  &:hover {
    transform: rotate(20deg);
  }
`;

const StyledToMail = styled(IoMail)`
  transition: transform 0.3s ease;
  &:hover {
    transform: rotate(20deg);
  }
`;

const Hero = () => {
  return (
    <StyledSection>
      <ul>
        <StyledLi>
          <Link href="https://linkedin.com/in/jan-riemenschneider">
            <StyledLinkedIn
              style={{ width: "25px", height: "25px", color: "black" }}
            />
          </Link>
          <Link href="https://github.com/jan-riemenschneider">
            <StyledGithub
              style={{ width: "25px", height: "25px", color: "black" }}
            />
          </Link>
          <Link href="mailto:jan-riemenschneider@outlook.de">
            <StyledToMail
              style={{ width: "25px", height: "25px", color: "black" }}
            />
          </Link>
        </StyledLi>
      </ul>
      <StyledGreetingBox>
        <StyledH2Hey>HEY, I'M JAN!</StyledH2Hey>
        <StyledH2Greeting>
          I'm a web developer in training – I love creating both creative and
          functiond!
        </StyledH2Greeting>
      </StyledGreetingBox>
      <StyledImage
        src="/images/4653eebe (1)-removebg-preview (1).jpg"
        alt="Jan Riemenschneider"
        width={230}
        height={220}
      ></StyledImage>
    </StyledSection>
  );
};

export default Hero;
