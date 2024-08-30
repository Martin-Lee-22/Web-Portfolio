import Box from "../components/box";
import "../styles/about.css";
import { motion } from "framer-motion";
export default function About() {
  return (
    <motion.div
    id="About"
      initial={{ opacity: 0, translateY: 30 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <Box colour="rgb(88, 144, 247)">
          <div id="about_container">
            <h1>Hello There!
              <span className="wave_hand">&#128075;</span>
              </h1>
            <h4>My name is <span>Martin</span> and I am want to be your next Junior Full Stack Web developer!</h4>
          </div>
      </Box>
    </motion.div>
  );
}
