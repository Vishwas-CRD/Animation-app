import styled, { keyframes } from 'styled-components'
 
export const MainWrapper=styled.div`
  background-color:red;
   display:flex;
   position:absolute;
   border:none;
   outline:none;
   width:100vw;
   height:100vh;
 
 `

 export const LoderWrapper=styled.div`
   background-color:white;
   display:flex;
   flex-direction:row;
   align-items:center;
   justify-content:space-between;
     position:relative;
   height:30%;
 `

 const shink=()=>keyframes`

   0%{
       transform:scale(0.25,0.25);
       background-color:red;
   }
   

   100%{
       transform:scale(1,1);
       background-color:blue;
   }
 
 
 `

 export const Item=styled.div`
   width:40px;
   height:40px;
   border-radius:20px;
   background-color:red;
   /* margin-left:3px; */
   animation:${props=>shink(props.delay)} 1s linear infinite; 
   animation-direction: alternate;
   animation-delay:${props=>props.delay};
   /* animation-play-state:paused; */
 
 `

 export const Rounds=styled.div`
   width:40px;
   height:40px;
   border-radius:40px;
   position: relative;
   top:${props=>props.top};
   left:${props=>props.left};
   background-color:white;
 `

 export const Round=styled.section`
 position: relative;  
 width:200px;
 height:200px;
 border-radius:100px;
 background-color:black;
 margin-left:20px;
 
 
 
 `



//=====================================================================================================//

const Move=keyframes`

   0%{
       left:50px;
       
   }
   

   100%{
         left:500px;
     
   }
 
 
 `


export const Container=styled.div`

width:600px;
height:800px;
position:absolute;
top:50px;
left:50px;
border:2px red solid;


animation:${Move};
animation-timing-function:linear;
animation-duration:5s;
animation-iteration-count:1;

`
export const Arrow=styled.button`

width:20px;
height:20px;
font-weight:bold;
background-color:white;
border:none;
outline:none;
position: absolute;
top: 409px;
left: 676px;
/* display:none; */

&:after{
  display:none;
  border-color:red;
  transform:rotate(30deg)


}



`


