import React from "react";
import { useState } from "react";
import {
  Container,
  Wrapper,
  Title,
  Desc,
  CardContainer,
  ToggleButtonGroup,
  ToggleButton,
  Divider,
} from "./ProjectsStyle";
import ProjectCard from "../Cards/ProjectCards";
import { projects } from "../../data/constants";

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState("all");
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on few front-end , Back-end and full-stack projects. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup>
          {toggle === "all" ? (
            <ToggleButton active value="all" onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          ) : (
            <ToggleButton value="all" onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          )}
          <Divider />
          {toggle === "front end" ? (
            <ToggleButton
              active
              value="front end"
              onClick={() => setToggle("front end")}
            >
              FRONT END
            </ToggleButton>
          ) : (
            <ToggleButton value="front end" onClick={() => setToggle("front end")}>
              FrontEnd
            </ToggleButton>
          )}
          <Divider />
          {toggle === "back end" ? (
            <ToggleButton
              active
              value="back end"
              onClick={() => setToggle("back end")}
            >
              BACK END
            </ToggleButton>
          ) : (
            <ToggleButton
              value="back end"
              onClick={() => setToggle("back end")}
            >
              BackEnd
            </ToggleButton>
          )}
          <Divider />
          {toggle === "full stack" ? (
            <ToggleButton
              active
              value="full stack"
              onClick={() => setToggle("full stack")}
            >
              FULL STACK
            </ToggleButton>
          ) : (
            <ToggleButton
              value="full stack"
              onClick={() => setToggle("full stack")}
            >
              FullStack
            </ToggleButton>
          )}
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === "all" &&
            projects.map((project) => (
              <ProjectCard
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project) => (
              <ProjectCard
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
