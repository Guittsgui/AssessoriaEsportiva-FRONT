"use client"
import ProductCart from '@/app/components/Ecommerce/ProductCart'
import * as s from './style'
import React, { useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import { ShoppingCartContext } from '@/app/contexts/ShoopingCart.tsx/ShoppinmgCartProvider'
import { productList } from '@/app/utils/Mocks/mockProducts'
import { IProduct } from '@/app/types/IProduct';


function MyCart() {

  const {shoppingCartList} = useContext(ShoppingCartContext)

  useEffect(()=>{
    handleCalculateTotal();
  },[shoppingCartList])

  const [total, setTotal] = useState<number>();

  function handleCalculateTotal(){
    let total = 0;
      if( shoppingCartList){
        for( let item of shoppingCartList){          
          const product = productList.find((product) => product.id === item.productID)  
          if(product){
            total += product?.priece;
          }
        }

        
      }
    return total
  }

  return (


    <s.Container>
        <s.Title>
          <h1> Meu Carrinho </h1>
        </s.Title>

        {shoppingCartList && shoppingCartList.length > 0 && 
               <s.MainContainer>
               <s.ProductsResume>
                  {shoppingCartList.map((item ,index) => (
                    <ProductCart key={index} itemLine={item}/>
                  ))}
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
                     <span>R$: {handleCalculateTotal().toFixed(2)}</span>
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
        }

        {shoppingCartList && shoppingCartList.length == 0 &&
          <s.EmptyCart>
            <p> Seu Carrinho está Vazio.</p>
            <Link href="/VirtualStore"> Clique Aqui para adicionar Items.</Link>
          </s.EmptyCart>
        
        }




    </s.Container>
  )
}

export default MyCart 