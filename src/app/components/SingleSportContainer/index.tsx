import * as s from './style'

import React from 'react'

type props = {
  sport: {
    name: string,
    url: string
  }
}

function SingleSoprtContainer(props: props) {
  return (
    <s.Container url={props.sport.url}>
        <div className="image">     
        </div>
        <div className="title">
            <h2> {props.sport.name}</h2>
        </div>
    </s.Container>
  )
}

export default SingleSoprtContainer