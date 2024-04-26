import SingleSportContainer from '../SingleSportContainer'
import * as s from './style'


import React from 'react'
import { sportList } from '../../../utils/sportsList';

type props = {
  title: string,
}


function SportPlanContainer( {title}: props) {
  return (
    <s.Container>
        <div className='title'>
            <h3> {title} </h3>
        </div>
        <s.SingleSportsContainer>
          <SingleSportContainer/>
          <SingleSportContainer/>
          <SingleSportContainer/>
          <SingleSportContainer/>
        </s.SingleSportsContainer>
        
    </s.Container>
  )
}

export default SportPlanContainer