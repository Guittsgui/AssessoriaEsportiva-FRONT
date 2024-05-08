"use client"
import ProductCart from '@/app/components/Ecommerce/ProductCart'
import * as s from './style'

import React from 'react'
import Link from 'next/link'

function MyCart() {
  return (
    <s.Container>
        <s.Title>
          <h1> Meu Carrinho </h1>
        </s.Title>

        <s.MainContainer>
          <s.ProductsResume>
            <ProductCart/>
            <ProductCart/>
            <ProductCart/>
            <ProductCart/>
            <ProductCart/>
            <ProductCart/>
            <ProductCart/>
            <ProductCart/>
            <ProductCart/>
            <ProductCart/>
            <ProductCart/>
            <ProductCart/>
          </s.ProductsResume>


          <s.OrderResume>
            <s.OrderInfos>
              <div className="title">
                <h3> Resumo do Pedido: </h3>
              </div>
              <div className="separate">
                <span>SubTotal:</span>
                <span>R$ 177.00</span>
              </div>
              <div className="separate">
                <span>Entrega:</span>
                <span>R$ 17.00</span>
              </div>
              <div className="separate total">
                <span>TOTAL:</span>
                <span>R$ 120.00</span>
              </div>
              <div  className="cupom">
                <div className="form">
                  <input placeholder="Possui Cupom ?"/> 
                  <button>Aplicar</button>
                </div>
                <div className="message">
                  <p> Desconto Aplicado: 10% CUPOM: VODKA</p>
                </div>
              </div>
            </s.OrderInfos>
            <s.Buttons>
              <Link href="" className="finish"> Finalizar Pedido </Link>
              <Link href="/VirtualStore" className="return"> Adicionar mais Items </Link>
            </s.Buttons>
          </s.OrderResume>
        </s.MainContainer>




    </s.Container>
  )
}

export default MyCart 