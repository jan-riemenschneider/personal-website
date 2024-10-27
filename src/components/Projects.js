"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "Quiz App / Part of neueFische Bootcamp",
      discription:
        "Interactive quiz app with dynamic questions and various categories.",
      languages: "HTML | CSS | JavaScript",
      LinkGithub: "https://github.com/jan-riemenschneider/Recap-Project-1",
      LinkWebsite: "https://github.com/jan-riemenschneider/Recap-Project-1",
      ImageLink: "/images/Bildschirmfoto 2024-10-27 um 19.48.08.png",
    },
    {
      id: 2,
      name: "Rick and Morty App / Part of neueFische Bootcamp",
      discription:
        "A team project that dynamically fetches all characters from the Rick and Morty series via an API. Includes search and filter functionality.",
      languages: "HTML | CSS | JavaScript",
      LinkGithub: "https://github.com/jan-riemenschneider/Recap-Project-3",
      LinkWebsite: "https://recap-project-3-alpha.vercel.app/",
      ImageLink: "/images/Bildschirmfoto 2024-10-25 um 21.28.25.png",
    },
    {
      id: 3,
      name: "Theme Creator App / Part of neueFische Bootcamp",
      discription:
        "Easily create and manage custom color themes. Add, edit, and save colors with automatic contrast checking to ensure readability.",
      languages: "React",
      LinkGithub: "https://github.com/jan-riemenschneider/Recap-Project-4",
      LinkWebsite: "https://recap-project-4-8qdp.vercel.app",
      ImageLink: "/images/Bildschirmfoto 2024-10-26 um 14.01.30.png",
    },
  ]);

  return (
    <ProjectsWrapper id="projects">
      <ContentWrapper>
        <ProjectsHeaderContainer>
          <ProjectsHeader>PROJECTS</ProjectsHeader>
          <ProjectsHeaderDiscription>
            Explore some example projects that showcase my skills in programming
            and technology.
          </ProjectsHeaderDiscription>
        </ProjectsHeaderContainer>
        <Styledul>
          {projects.map((project) => (
            <Product key={project.id}>
              <Link href={project.LinkWebsite} passHref>
                <StyledImage
                  src={project.ImageLink}
                  width={258}
                  height={160}
                  alt="Image"
                />
              </Link>
              <ProductDiscriptionWrapper>
                <ProductName>{project.name}</ProductName>
                <ProductDiscription>{project.discription}</ProductDiscription>
                <ProductDiscription>{project.languages}</ProductDiscription>
                <Link href={project.LinkGithub} passHref>
                  <StyledGithub />
                </Link>
              </ProductDiscriptionWrapper>
            </Product>
          ))}
        </Styledul>
      </ContentWrapper>
    </ProjectsWrapper>
  );
};
export default Projects;

const ProjectsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  background-color: var(--secondary-color);
  padding: 2rem 1rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 100%;
  max-width: 72.2rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 1rem;
  }
`;

const ProjectsHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
  text-align: center;
`;

const ProjectsHeader = styled.h2`
  font-size: 3.2rem;

  @media (max-width: 768px) {
    font-size: 2.4rem;
  }
`;

const ProjectsHeaderDiscription = styled.p`
  font-size: 1.5rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const Product = styled.li`
  display: flex;
  margin-top: 3rem;
  gap: 3rem;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const StyledImage = styled(Image)`
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    max-width: 100%;
  }
`;

const ProductDiscriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const ProductName = styled.h3`
  font-size: 1.6rem;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const ProductDiscription = styled.p`
  font-size: 1.4rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const StyledGithub = styled(FaGithub)`
  width: 2rem;
  height: 2rem;
  color: black;
  transition: transform 0.3s ease;

  &:hover {
    transform: rotate(20deg);
  }
`;

const Styledul = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 5%;
  gap: 8rem;
  width: 100%;

  @media (max-width: 768px) {
    gap: 4rem;
  }
`;
