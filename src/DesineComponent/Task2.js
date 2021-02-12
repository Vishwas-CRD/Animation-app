import React, { useState } from 'react'
import './Task2.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { dom } from '@fortawesome/fontawesome-svg-core'
import { FaAlignJustify, FaEnvelope, FaMarker, FaPhone, FaTrash, FaAngleDoubleDown } from "react-icons/fa"


dom.watch()

// import { faMenu } from '@fortawesome/free-solid-svg-icons'

function Task2() {
    const [show, setShow] = useState(false)
    const[list,setList]=useState(false)
    const handleShow = () => {
        setShow(!show)
        
    }


    const handleMore=()=>
    {
        console.log("fdsfs")
  
        setList(!list)
    }
    return (
        <div className="big-cantainer">
            {/* <nav className="container-nav">Task-1</nav> */}
            <div className="container-body">
                <div className="container-1">
                    <div className={show ? "container-menu-show" : "container-menu"}>
                        <div className="container-menu-icons">
                           
                            <div className= "icon" >
                               <div className="icon-icon" onClick={() => handleShow()}> <FaAlignJustify color="black" size="2.5rem" /></div>
                            </div>
                            
                            <div key={0} className= "icon" >
                                <div className="icon-icon"><FaEnvelope color="black" size="2.5rem" /></div>
                                <div className="text-info">Messages</div> 
                                 
                                
                            </div>
                            
                            <div  key={1} className= "icon" >
                       
                                    <div className="icon-icon"><FaMarker color="black" size="2.5rem" /></div>
                                    <div className="text-info">Pen</div> 
                            </div >
                            <div key={2} className= "icon"> 
                                
                                   <div className="icon-icon"> <FaPhone color="black" size="2.5rem" /></div>
                                   <div className="text-info">Phone</div> 
                               
                               
                            </div>
                            <div className= "icon"> 
                                 
                                     <div className="icon-icon"> <FaTrash color="black" size="2.5rem" /></div>       
                                     <div className="text-info">Deleted Files</div> 
                            </div>
                           
                       {  show && <div  className= {list?"icon-drop-anime":"icon-drop"}> 
                              
                            
                               <div  className="icon-more">
                                  <div onClick={() => handleMore()}> <FaAngleDoubleDown color="red" size="2.5rem" /></div> 
                                   <div> <FaAngleDoubleDown color="black" size="2.5rem" /></div> 
                                   <div> <FaAngleDoubleDown color="red" size="2.5rem" /></div> 
                                   <div> <FaAngleDoubleDown color="black" size="2.5rem" /></div> 
                                   <div> <FaAngleDoubleDown color="red" size="2.5rem" /></div> 
                               </div>  
                               <div className="text-info">List </div>

                            </div>}
                           

                           
                        </div>



                    </div>
                </div>


                <div className="container-2"></div>
            </div>


        </div>
    )
}

export default Task2
