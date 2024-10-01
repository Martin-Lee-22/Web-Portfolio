import Box from "../components/box";
import Card from "../components/card";
import projects from "../data/projects.json";
import "../styles/projects.css";
import React from "react";
import {motion} from 'framer-motion'

export default function Projects(props) {

  return (
    <motion.div
    id="Projects"
    initial={{opacity: 0, translateY: 30}} 
    whileInView={{opacity: 1, translateY: 0}} 
    viewport={{once:true}} 
    transition={{duration: 1}}>
    <Box colour="rgb(131, 174, 252)">
      <h1>Projects</h1>
      <hr/>
      <div id="project_cards_container">
        {projects.map((project, index) => {
          return (
            <motion.div key={index} onClick={()=>{props.showModal(index)}}>
              <Card
                index={index}
                title={project.title}
                images={project.images}
                alt={project.alt}
                description={project.description}
                inProgress={project.inProgress}
                date={project.date}
              />
            </motion.div>
          );
        })}
      </div>
    </Box>
    </motion.div>
  );
}
