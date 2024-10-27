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
      name: "Rick and Morty App",
      discription:
        "A team project that dynamically fetches all characters from the Rick and Morty series via an API. Includes search and filter functionality.",
      languages: "HTML | CSS | JavaScript",
      LinkGithub: "https://github.com/jan-riemenschneider/Recap-Project-3",
      LinkWebsite: "https://recap-project-3-alpha.vercel.app/",
      ImageLink: "/images/Bildschirmfoto 2024-10-25 um 21.28.25.png",
    },
    {
      id: 2,
      name: "Theme Creator App",
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
                <Image
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
                  <StyledGithub
                    style={{ width: "2rem", height: "20px", color: "black" }}
                  />
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
  padding: 10px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 72.2rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 600px;
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
`;

const ProjectsHeaderDiscription = styled.p`
  font-size: 1.5rem;
  margin-top: 2rem;
`;

const Product = styled.li`
  display: flex;
  margin-top: 3rem;
  height: 15rem;
  gap: 3rem;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    align-items: center;
    gap: 1rem;
  }
`;

const ProductDiscriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
    gap: 0.5rem;
  }
`;

const ProductName = styled.h3`
  font-size: 1.6rem;
  font-weight: 600;
`;

const ProductDiscription = styled.p`
  font-size: 1.4rem;
`;

const StyledGithub = styled(FaGithub)`
  transition: transform 0.3s ease;
  &:hover {
    transform: rotate(20deg);
  }
`;

const Styledul = styled.ul`
  display: flex;
  flex-direction: column;
  margin-bottom: 10rem;
  margin-top: 5%;
  gap: 8rem;

  @media (max-width: 768px) {
    gap: 4rem;
  }
`;
