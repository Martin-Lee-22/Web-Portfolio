import '../styles/response.css'
import { motion, AnimatePresence } from "framer-motion";

function Response (props){
    return(
        <AnimatePresence>
            <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.75, delay: 0.2, type: "spring" }}
            className="response_container"
            >
            <img src={props.responseSuccess ? '/images/success.png':'/images/fail.png'} alt={'Send Contact to Developer'} />
            <h4>
                {props.responseSuccess ? `Message Successfully Sent!` : 'Oh no! Something went wrong, please try again'}
            </h4>
            <button onClick={()=>{props.setShowResponse(false)}}>Send Another</button>
            </motion.div>
        </AnimatePresence>
    )
}

export default Response