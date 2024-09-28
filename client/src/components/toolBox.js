import data from "../data/toolBox"
import '../styles/toolBox.css'
import { motion } from "framer-motion"

export default function ToolBox(props){
    const tools = data
    return(
        <div id='tool_box_container'>
            {tools.map((tool, index) => {
                if(props.tools.includes(tool['id'])){
                    return (
                        <motion.div key={index} 
                            className="tool_box_wrapper" 
                            initial={{opacity: 0, translateY: 30}} 
                            whileInView={{opacity: 1, translateY: 0}} 
                            viewport={{once:true}} 
                            transition={{duration: 1, delay: index * 0.05}}>
                                <img src={tool['path']} alt="Image of a development tool"/>
                                <p>{tool['name']}</p>
                        </motion.div>
                    )
                }
            })}
        </div>
    )
}