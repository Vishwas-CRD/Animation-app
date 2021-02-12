import React from 'react'
import {MainWrapper,LoderWrapper,Item,Round, Rounds} from './LoderStyled'


function Loader1() {
    return (
        <MainWrapper>
            <LoderWrapper >
                <Item  delay="-.75s" >
               </Item>
               <Item  delay="-.5s" >
               </Item>
               <Item  delay="-.25s" >
               </Item>
               <Item  delay="0s" >
               </Item>
            </LoderWrapper>   
                 <Round>
                 <Rounds top="0px" left="80px"></Rounds>
                 <Rounds top="44px" left="0px" ></Rounds>
                 <Rounds top="0px" left="160px"></Rounds>
                 <Rounds top="15px" left="23px"></Rounds>
                 <Rounds top="0px" left="80px"></Rounds>
                 <Rounds top="10px" left="8px"></Rounds>
                 <Rounds top="-106px" left="140px"></Rounds>
                 <Rounds top="-254px" left="137px"></Rounds>
                 {/* <Rounds top="-172px" left="19px"></Rounds> */}
                    
                 </Round>

        </MainWrapper>
    )
}

export default Loader1
