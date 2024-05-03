"use client"
import * as s from './style'
import { BiCartDownload } from "react-icons/bi";

import React from 'react'

function VirtualStore() {
  return (
    <s.Container>
      <s.NavContainer>
        <div>
          <p>Loja Virtual</p>
        </div>
        <div className='counterContainer'>
          <BiCartDownload size={40}/>
          <div className='counter'>
              <span> 01</span>
          </div>
        </div>
      </s.NavContainer> 
        <h1> Virtual Store</h1>
        <h2> Em Breve ... </h2>
    </s.Container>
  )
}

export default VirtualStore