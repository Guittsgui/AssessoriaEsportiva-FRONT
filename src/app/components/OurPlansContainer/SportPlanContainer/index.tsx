import SingleSportContainer from '../SingleSportContainer'
import * as s from './style'
import React from 'react'
type props = {
  filtredList: any
}

function SportPlanContainer(props: props) {
  return (
    <s.Container>
        <div className='title'>
            {props.filtredList &&
              <h3> {props.filtredList.title} </h3>
            }
        </div>
        <s.allSportsContainer>
          {props.filtredList.plans.map((item: any, index: any) => (
            <SingleSportContainer 
              key={index} 
              benefits={item.benefits}
              priece={item.value}
              type ={item.type}/>
          ))}
        </s.allSportsContainer>
        
    </s.Container>
  )
}

export default SportPlanContainer