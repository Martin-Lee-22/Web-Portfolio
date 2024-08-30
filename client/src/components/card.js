import "../styles/card.css";
import { motion } from "framer-motion";

export default function Card(props) {
  return (
    <motion.div
      key={props.index}
      layoutId={`project_${props.index}`}
      initial={{ opacity: 0, translateX: 30 }}
      whileInView={{ opacity: 1, translateX: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: props.index * 0.1 }}
    >
      <div id="card_container">
        <img src={props.images[0]['src']} alt={props.images[0]['alt']}/>
        <div id="description_container">
          <h3>{props.title.substring(0, 20)}{props.title.length >= 20 && <span>...</span>}</h3>
          <hr/>
          <p>{props.description.substring(0, 155)}{props.description.length >= 155 && <span>...</span>}</p>
        </div>
      </div>
    </motion.div>
  );
}
