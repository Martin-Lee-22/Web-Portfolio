import '../styles/portrait.css'
import { useState } from 'react'

export default function Portrait(){
    const [blur, setBlur] = useState(false)
    const [img, setImg] = useState(false)

    function switchImage(){
        setBlur(true);
        setTimeout(()=>{setImg(!img)}, 500);
    }

    return(
        <div onAnimationEnd={()=>{setBlur(false)}} className={blur ? 'portrait_container blur' : 'portrait_container'} onClick={switchImage}>
            {img ? <img src='/images/portrait/man.jpg' alt='Image of man'/> :
            <img src='/images/portrait/anime.jpeg' alt='Image of anime man'/>}
        </div>
    )
}