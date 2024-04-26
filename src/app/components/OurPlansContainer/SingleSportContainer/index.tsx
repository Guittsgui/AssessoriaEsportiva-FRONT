import * as s from './style'


import React from 'react'

type props = {
  benefits: string[],
  priece: number,
  type: string
}

function SingleSportContainer({benefits, priece, type}: props) {
  return (
    <s.SingleSportContainer>
        <div>
          <h4> {type} </h4>
          <span> R$ {priece}</span>
          <h5> Benefícios: </h5>
        </div>
        <ul>
          {benefits.map((item) => 
            <li> {item}</li>
          )}
        </ul>
    </s.SingleSportContainer>
  )
}

export default SingleSportContainer