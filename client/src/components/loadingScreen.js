import "../styles/loadingScreen.css";
import { useEffect, useState } from "react";
import quotes_data from "../data/quotes.json";
import colors_data from "../data/colors.json";
import { motion, AnimatePresence } from "framer-motion";
import Box from "./box";
import {sound_effects} from "./audio.js"
import Loading from './loading.js'

export default function LoadingScreen() {
  // An array of objects consisting of 'quote' and 'author'
  const quotes = quotes_data.quotes;
  // An array of light-color values
  const colors = colors_data;
  // Random color for loading box
  const loading_box_color = colors[Math.floor(Math.random() * colors.length)];
  // A boolean that will show the quote box container if true
  const [showQuoteBox, setShowQuoteBox] = useState(true);

  const [quoteBox, setQuoteBox] = useState();

  const pop_up_animation ={
    initial:{ scale: 0},
    animate:{scale: 1},
    exit:{ scale: 0, opacity: 0 }
  }

  useEffect(() => {
    createQuoteBox();
    // Shows the quote box after a period of time has passed
    if (!showQuoteBox) {
      setTimeout(() => {
        setShowQuoteBox(true);
      }, 500);
    }
  }, [showQuoteBox]);


  function createQuoteBox() {
    if (!showQuoteBox || !quoteBox) {
      let newQuote = quotes[Math.floor(Math.random() * quotes.length)];
      let newColor = colors[Math.floor(Math.random() * colors.length)];
      setQuoteBox(
        <Box key={newColor} colour={newColor}>
          <p>{'"' + newQuote.quote + '"'}</p>
          <p id='author'>{"- " + newQuote.author}</p>
        </Box>
      );
    }
  }

  // This function hides the quote box and creates a new one
  function refreshQuoteBox() {
    setShowQuoteBox(!showQuoteBox);
    createQuoteBox();
    sound_effects.pop.play()
  }

  return (
    <motion.div key="loading_screen" id="loading_container" exit={{opacity: 0}} transition={{duration: 0.75, delay: 0, type: "spring" }}>
      <AnimatePresence>
        <motion.div id="loading_wrapper" {...pop_up_animation} transition={{duration: 0.75, delay: 0, type: "spring" }}>
          <Box colour={loading_box_color} isLoading={true}><Loading/></Box>
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        {showQuoteBox && 
          <div id="quote_container" onClick={refreshQuoteBox}>
            <motion.div id="quote_wrapper" {...pop_up_animation} transition={{ duration: 0.75, delay: 0.2, type: "spring" }}>
              {quoteBox}
              <img src="images/quote_arrow.png" alt="Image of curvy arrow"/>
              <span>"Click for more"</span>
            </motion.div>
          </div>
        }
      </AnimatePresence>
      
    </motion.div>
  );
}
