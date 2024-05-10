"use client"
import { ShoppingCardProvider, ShoppingCartContext } from '@/app/contexts/ShoopingCart.tsx/ShoppinmgCartProvider'
import * as s from './style'
import React, { useContext } from 'react'

function FinishShopping() {

  const {shoppingCartList, total, discountValue} = useContext(ShoppingCartContext)

  return (
    <s.Container>
      <s.CartContainer>
        <h2> Resumo do Pedido:</h2>
        {shoppingCartList?.map((item, index) => (
          <p key={index}> Produto: XXX {item.productID} - Quantidae: - {item.amount} - Preço Unitário: R$ {item.productPriece.toFixed(2)} Total : R$ {(item.productPriece * item.amount).toFixed(2)} </p>
        ))}

        <h3>Total: R$ {total.toFixed(2)}</h3>
        {discountValue !== 0 && 
        <h4>Com o desconto de: R$ {(discountValue).toFixed(2)} do Cupom</h4>
        }

      </s.CartContainer>
      <s.AdressContainer>

      </s.AdressContainer>
      <s.PaymentContainer>

      </s.PaymentContainer>

      <button className="final"> Finalizar Compra </button>
    </s.Container>
  )
}

export default FinishShopping
