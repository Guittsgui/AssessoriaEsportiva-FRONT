import * as s from './style'
import { BiCartDownload } from "react-icons/bi";
import React, { useContext } from 'react'
import { ShoppingCartContext } from '@/app/contexts/ShoopingCart.tsx/ShoppinmgCartProvider';

function Header() {

  const {shoppingCartList} = useContext(ShoppingCartContext)

  return (
    <s.Header>
        <div>
          <p>Loja Virtual</p>
        </div>
        <div className='counterContainer'>
          <BiCartDownload size={40}/>
          <div className='counter'>
              <span> {shoppingCartList?.length}</span>
          </div>
        </div>
    </s.Header>
  )
}

export default Header