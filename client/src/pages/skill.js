import Box from '../components/box'
import '../styles/skills.css'
import ToolBox from '../components/toolBox'
import {motion} from 'framer-motion'

export default function Skills(){
    const webTools = [1,2,3,4,6,7,8,9,11,12,14,15,17]
    const softwareTools = [5,10]
    return(
        <motion.div
        id='Skills'
        initial={{opacity: 0, translateY: 30}} 
        whileInView={{opacity: 1, translateY: 0}} 
        viewport={{once:true}} 
        transition={{duration: 1}}>
        <Box colour="rgb(131, 174, 252)">
            <div id='skills_container'>
                <h1>Skills & Experience</h1>
                <hr />
                <div id='tools_container'>
                    <h2>Web</h2>
                    <ToolBox tools={webTools}/>
                    <h2>Software</h2>
                    <ToolBox tools={softwareTools}/>
                </div>
            </div>
        </Box>
        </motion.div>       
    )
}