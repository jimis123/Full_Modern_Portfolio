import React, { useState } from 'react';
import { Container, Wrapper, Title, Desc, CardContainer, ToggleGroup, Divider } from './ProjectStyle';
import ProjectCard from '../Cards/ProjectCard.jsx';
import styled from 'styled-components';
import { projects } from '../../data/constants';

export const ToggleButton = styled.div `
    padding: 8px 18px;
    border-radius: 6px;
    cursor: pointer;
${({ active, theme }) => active && `background: ${ theme.primary + 20 };
`}
    &:hover {
        background: ${({ theme }) => theme.primary + 8};
    }
    @media (max-width: 768px) {
        padding: 6px 8px;
        border-radius: 4px;
    }
`;


function Projects({openModal, setOpenModal}) {
  
    const [toggle, setToggle] = useState("ALL");

    return (

    <Container id='projects'>
        <Wrapper>
            <Title>Projects</Title>
            <Desc>
                Here are some of my projects. Check them out.
            </Desc>

            <ToggleGroup>
            {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'Website' ?
            <ToggleButton active value="Website" onClick={() => setToggle('Website')}>WEBSITE</ToggleButton>
            :
            <ToggleButton value="Website" onClick={() => setToggle('Website')}>WEBSITE</ToggleButton>
          }
          <Divider />
          {toggle === 'Company' ?
            <ToggleButton active value="Company" onClick={() => setToggle('Company')}>COMPANY</ToggleButton>
            :
            <ToggleButton value="Company" onClick={() => setToggle('Company')}>COMPANY</ToggleButton>
          }
          <Divider />
          {toggle === 'AI' ?
            <ToggleButton active value="AI" onClick={() => setToggle('AI')}>AI</ToggleButton>
            :
            <ToggleButton value="AI" onClick={() => setToggle('AI')}>AI</ToggleButton>
          }
          <Divider />
          {toggle === 'Database' ?
            <ToggleButton active value="Database" onClick={() => setToggle('Database')}>DATABASE</ToggleButton>
            :
            <ToggleButton value="Database" onClick={() => setToggle('Database')}>DATABASE</ToggleButton>
          }
          <Divider />
          {toggle === 'IOT' ?
            <ToggleButton active value="IOT" onClick={() => setToggle('IOT')}>IOT</ToggleButton>
            :
            <ToggleButton value="IOT" onClick={() => setToggle('IOT')}>IOT</ToggleButton>
          }
            </ToggleGroup>

            <CardContainer>
                {toggle === 'all' && projects.map((project, index) => (
                    <ProjectCard key={index} project={project} openModal={openModal} setOpenModal={setOpenModal}/>
                ))}
                {projects.filter((item) => item.category == toggle).map((project, index) => (
                    <ProjectCard key={index} project={project} openModal={openModal} setOpenModal={setOpenModal}/>
                ))}
            </CardContainer>
        </Wrapper>
    </Container>
  );
};

export default Projects
