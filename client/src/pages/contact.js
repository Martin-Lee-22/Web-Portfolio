import Box from "../components/box";
import "../styles/contact.css";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import axios from 'axios'
import Response from "../components/response";


export default function Contact() {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [showResponse, setShowResponse] = useState(false);
  const [responseSuccess, setResponseSuccess] = useState(false)

  const sendEmail = async (e) => {
    e.preventDefault();
    const data = await axios.get("http://localhost:8000").then((response)=>{return response.data});
    emailjs.sendForm(data.serviceID, data.publicID, form.current, data.publicKey)
      .then(
        () => {
          setResponseSuccess(true)
          setEmail("");
          setName("");
          setMessage("");
        },
        (error) => {
          setResponseSuccess(false);
          console.log(error)
        }
      );
      setShowResponse(true);
  };

  return (
    <motion.div
      id="Contact"
      initial={{ opacity: 0, translateY: 30 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <Box colour="rgb(131, 174, 252)">
        <div id="contact_container">
          <h1>Let's Chat!&#128172;</h1>
          <hr />
          <h5>
            You can contact me via the form or at <a href="mailto:man.chuen.lee.22@gmail.com">man.chuen.lee.22@gmail.com</a>
          </h5>
          <form ref={form} onSubmit={sendEmail}>
            {showResponse && <Response setShowResponse={setShowResponse} responseSuccess={responseSuccess}/>}
            <div className="label_wrapper">
              <input
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                name="user_name"
                required
              />
              <label className="label_effect">Name:</label>
            </div>
            <div className="label_wrapper">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                name="user_email"
                required
              />
              <label className={`label_effect ` + (email && 'email_active')}>Email:</label>
            </div>
            <div className="message_area">
              <label>Message:</label>
              <textarea
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                name="message"
                placeholder="Enter Your Message"
                required
              />
            </div>
            <input type="submit" value="Send" />
          </form>
        </div>
      </Box>
    </motion.div>
  );
}
