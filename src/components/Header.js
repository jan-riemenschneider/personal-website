"use client";
import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [HamburgerMenu, setHamburgerMenu] = useState(false);

  const HandleClick = () => {
    setHamburgerMenu(!HamburgerMenu);
  };

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
      <StyledHamburgerButton
        onClick={HandleClick}
        style={{
          border: "none",
          background: "none",
          padding: 0,
          cursor: "pointer",
        }}
      >
        <StyledHamburgerMenu
          style={{
            width: "50px",
            height: "50px",
            color: "white",
            border: "none",
          }}
        />
      </StyledHamburgerButton>
      {HamburgerMenu ? (
        <StyledUlForHamburgerMenu>
          <StyledListForHamburgerMenu>
            <StyledAForHamburgerMenu href="#home" onClick={HandleClick}>
              Home
            </StyledAForHamburgerMenu>
            <StyledAForHamburgerMenu href="#about" onClick={HandleClick}>
              About
            </StyledAForHamburgerMenu>
            <StyledAForHamburgerMenu href="#projects" onClick={HandleClick}>
              Projects
            </StyledAForHamburgerMenu>
          </StyledListForHamburgerMenu>
        </StyledUlForHamburgerMenu>
      ) : (
        false
      )}
    </StyledHeader>
  );
};
export default Header;

const StyledHeader = styled.header`
  background-color: var(--primary-color);
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1000;
`;

const StyledH2 = styled.h2`
  font-size: 24px;
  font-weight: 600;
  padding-left: 5%;
`;

const StyledUl = styled.ul`
  padding-right: 5%;
  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledList = styled.li`
  display: flex;
  gap: 100px;
`;

const StyledA = styled(Link)`
  text-decoration: none;
  color: #fcfaf8;
  font-size: 24px;
  font-weight: 600;
  transition: font-size 0.3s ease;

  &:hover {
    font-size: 26px;
  }
`;

// Hamburger Menu

const StyledHamburgerMenu = styled(GiHamburgerMenu)`
  display: none;

  @media (max-width: 768px) {
    display: block;
    margin-right: 1rem;
  }
`;

const StyledHamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const StyledUlForHamburgerMenu = styled.ul`
  position: absolute;
  top: 60px;
  right: 0;
  background-color: var(--primary-color);
  padding: 10px;
  list-style: none;
  flex-direction: column;
  gap: 10px;
  border-radius: 0 0 10px 10px;
`;

const StyledListForHamburgerMenu = styled.li`
  display: flex;
  flex-direction: column;
`;

const StyledAForHamburgerMenu = styled(Link)`
  text-decoration: none;
  color: #fcfaf8;
  font-size: 24px;
  font-weight: 600;
`;
