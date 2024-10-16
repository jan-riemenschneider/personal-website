"use client";
import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: var(--primary-color);
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 80px;
`;

const StyledH1 = styled.h1`
  font-size: 24px;
  font-family: "poppins";
`;

const Header = () => {
  return (
    <StyledHeader>
      <StyledH1>JAN RIEMENSCHNEIDER</StyledH1>
      <ul>
        <li>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
        </li>
      </ul>
    </StyledHeader>
  );
};

export default Header;
