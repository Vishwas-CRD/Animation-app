import React,{useState} from 'react'
import {Container,Arrow} from './LoderStyled'
import "./Style.css"

function Task1() {

const [anime,setAnime]=useState(false);




    const handleAnimation=()=>
    {
        setAnime(!anime)

    }
    return (
        <div>
             {/* <div onClick={()=>handleAnimation()}> <i className={anime?"arrow right":"arrow left"}></i></div>
             <div className={anime?"container":"animestate"}>
             <div className="box12"><div className="box1">hello</div>
             <div className="box2">hi</div></div>
             <div className="box3">form</div>
            </div>  */}

            <div onClick={()=>handleAnimation()} style={{alignItems:"center"}}><i className={anime?"arrow left":"arrow right"}></i></div> 
            <div className={anime?"animestate1":"container1"}>
            
             <div className="box12"><div className="box1">hello</div>
             <div className="box2">hi</div></div>
             <div className="box3">form</div>

                 </div>  
        </div>
    )
}

export default Task1
