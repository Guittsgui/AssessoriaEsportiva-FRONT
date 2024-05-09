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
  const [neighborhood, setNeighborhood] = useState("")
  const [loading, setLoading] =  useState(false)
  const [error, setError] = useState<string>("");
  const [coupon, setCoupon] = useState("");


  useEffect(()=>{
    handleCalculateTotal();
  },[shoppingCartList])

  async function handleCalculateFreight(){
    setError("");
    setCity("");
    setState("");
    setNeighborhood("")
    setCep("")

    if(cep.length < 8 || cep.length > 8){
      setError("Informe um cep Válido ")
      return
    }

    setLoading(true);
    const response = await CepService.getCep(cep)
    setLoading(false);

    if(response.status === 200){
      setCity(response.data.localidade)
      setState(response.data.uf)
      setNeighborhood(response.data.bairro)
      return
    }
    
  }

  async function handleCheckCoupon(){
    if(coupon === ""){
      alert('informe um cupom válido')
      return
    }
    const response =  applyDiscount(coupon)
    console.log(response)

  }


  function handleFinishCart(){
    alert('finalizou')
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
                       <input placeholder="Possui Cupom ?"
                        value={coupon}
                        onChange={(e) => setCoupon(e.target.value)}/> 
                       <button onClick={handleCheckCoupon}>Aplicar</button>
                     </div>
                     <div className="message">
                       <p> Desconto Aplicado: 10% CUPOM: VODKA</p>
                     </div>
                   </div>
                   <div className="cep">
                      <div className="form">
                        <input 
                          type="number" 
                          placeholder="Calcular Frete - CEP"
                          value={cep}
                          onChange={(e) => setCep(e.target.value)}/>
                        <button onClick={handleCalculateFreight}>Calcular</button>
                      </div>
                      {loading && <span>CARREGANDO...</span>}
                      {error !== "" && <span className="error">{error}</span>}
                      {state !== "" &&
                          <div className="info">
                            <p>CIDADE: {city}</p>
                            <p>ESTADO: {state}</p>
                            <p>ESTADO: {neighborhood}</p>
                            <small>Como o projeto é apenas para portifólio, não estou usando a API de FRETE dos correios, pois ela é paga. Então estou utilizando a de CEP, que o ersultado ficaria praticamente igual.</small>
                          </div>
                      }
                   </div>
                 </s.OrderInfos>
                 <s.Buttons>
                   <button className="finish" onClick={handleFinishCart}> Finalizar Pedido </button>
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