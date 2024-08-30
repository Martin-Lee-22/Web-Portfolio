import '../styles/box.css'
import { useEffect, useState} from 'react'

export default function Box(props){
    const [backBox, setBackBox] = useState()

    useEffect(() => {
        setBackBox(createBackBox(props.colour))
    }, [])

    function createBackBox(colour){
        if(props.isLoading){
            return <div className="back_box" id="loading_back_box" style={{backgroundColor: colour}}/>

        } else {

            return <div className="back_box" style={{backgroundColor: colour}}/>
        }
    }

    return(
        <div id="box_container">
            <div id="front_box">
                {props.children}
                {backBox}
            </div>
        </div>
    )
}