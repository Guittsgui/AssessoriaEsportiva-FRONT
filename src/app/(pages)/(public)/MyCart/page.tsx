"use client"
import ProductCart from '@/app/components/Ecommerce/ProductCart'
import * as s from './style'
import React, { useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import { ShoppingCartContext } from '@/app/contexts/ShoopingCart.tsx/ShoppinmgCartProvider'
import Header from '@/app/components/Ecommerce/Header'
import CepService from '@/app/services/CepService'


function MyCart() {

  const {shoppingCartList, handleCalculateTotal,total , applyDiscount} = useContext(ShoppingCartContext)
  const [state, setState] = useState("");
  const [city, setCity] = useState("")
  const [cep,setCep] = useState("")
  const [loading, setLoading] =  useState(false)


  useEffect(()=>{
    handleCalculateTotal();
  },[shoppingCartList])

  async function handleCalculateFreight(){
    setLoading(true);
    const response = await CepService.getCep(25620040)
    setLoading(false);

    if(response.status === 200){
      setCity(response.data.localidade)
      setState(response.data.uf)
    }
  }


  return (


    <s.Container>
      <Header/>
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
                     <span>Grátis</span>
                   </div>
                   <div className="separate total">
                     <span>TOTAL:</span>
                     <span>R$: {total.toFixed(2)}</span>
                   </div>
                   <div  className="cupom">
                     <div className="form">
                       <input placeholder="Possui Cupom ?"/> 
                       <button onClick={() => applyDiscount(10)}>Aplicar</button>
                     </div>
                     <div className="message">
                       <p> Desconto Aplicado: 10% CUPOM: VODKA</p>
                     </div>
                   </div>
                   <div className="cep">
                      <div className="form">
                        <input type="number" placeholder="Calcular Frete - CEP"/>
                        <button onClick={handleCalculateFreight}>Calcular</button>
                      </div>
                      {loading && <span>CARREGANDO...</span>}
                      {state !== "" &&
                          <div className="info">
                            <p>CIDADE: {city}</p>
                            <p>ESTADO: {state}</p>
                            <small>Como o projeto é apenas para fins lucrativos, não estou usando a API de FRETE dos correios, pois ela é paga. Então estou utilizando a de CEP, que o ersultado ficaria praticamente igual.</small>
                          </div>
                      }
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