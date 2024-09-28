import { motion } from "framer-motion";
import "../styles/modal.css";
import ToolBox from "./toolBox";
import Carousel from "./carousel";
import data from "../data/projects.json";

export default function Modal(props) {
  const project = data[props.modalIndex];
  const tools = project["tools"];
  const libraries = project["libraries"];
  const images = project["images"];
  const description = project["description"];
  const title = project["title"];
  const role = project["role"];
  const link = project["link"];
  const github = project["github"];
  const inProgress = project["inProgress"];

  return (
    <div>
      <div onClick={props.onClose} className="overlay">
        <motion.div layoutId={`project_${props.index}`}
          onClick={(e) => {
            e.stopPropagation();
          }}
          id="modal_container"
        >
          <div id="modal_nav_wrapper">
            <img
              id="close_btn"
              onClick={props.onClose}
              src="images/close.png"
              alt="Image of close button"
            />
          </div>
          <Carousel slides={images} />
          <div id="project_info_container">
            <div id="project_description_container">
              <h2>{title}</h2>
              <h4>{role}</h4>
              {inProgress &&<h3>(Work In Progress...)</h3>}
              <p>{description}</p>
              <h5>Link:<a href={link} target="_blank">{link}</a></h5>
              <h5>Github:<a href={github} target="_blank">{github}</a></h5>
            </div>
            <div id="project_toolbox_container">
              <h3>Toolbox</h3>
              <ToolBox tools={tools}/>
              {libraries.length > 0 && 
              <>
                <h3>Libraries</h3>
                <ToolBox tools={libraries}/>
              </>
              }

            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
