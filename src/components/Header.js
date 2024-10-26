"use client";
import Link from "next/link";
import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: var(--primary-color);
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  position: sticky;
  top: 0;
  width: 1%;
  z-index: 1000; 
}
`;

const StyledH2 = styled.h2`
  font-size: 24px;
  padding-left: 5%;
`;

const StyledUl = styled.ul`
  padding-right: 5%;
`;

const StyledList = styled.li`
  display: flex;
  gap: 100px;
`;

const StyledA = styled(Link)`
  text-decoration: none;
  color: #fcfaf8;
  font-size: 24px;
  transition: font-size 0.3s ease;

  &:hover {
    font-size: 26px;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <StyledH2>JAN RIEMENSCHNEIDER</StyledH2>
      <StyledUl>
        <StyledList>
          <StyledA href="#home">Home</StyledA>
          <StyledA href="#about">About</StyledA>
          <StyledA href="#projects">Projects</StyledA>
        </StyledList>
      </StyledUl>
    </StyledHeader>
  );
};

export default Header;
