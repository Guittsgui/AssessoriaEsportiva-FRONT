"use client"
import { ShoppingCardProvider, ShoppingCartContext } from '@/app/contexts/ShoopingCart.tsx/ShoppinmgCartProvider'
import * as s from './style'
import React, { useContext , useState, useEffect} from 'react'
import { Input } from '@/app/components/UI/input'
import CepService from '@/app/services/CepService'
import { FaPix } from "react-icons/fa6";
import { CiCreditCard1 } from "react-icons/ci";

function FinishShopping() {

  const {shoppingCartList, total, discountValue} = useContext(ShoppingCartContext)
  const [cepInput, setCepInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [finalCep, setFinalCep] = useState("");
  const [street, setStreet] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [city, setCity] = useState("");
  const [complement, setComplement] = useState("");
  const [errorMsg, setErrorMsg] = useState(false);


  useEffect(() => {
    setIsLoading(false)
    const handleGetCep = async () => {
      const response = await CepService.getCep(cepInput)
      const {cep, logradouro, bairro , localidade } = response.data
      if(cep && bairro){
        setIsLoading(false);
        setCity(localidade)
        setStreet(logradouro)
        setNeighborhood(bairro)     
        return;
      }
      setIsLoading(false);
      setErrorMsg(true);
    }

    setErrorMsg(false);
    if(cepInput.length === 8){
      setIsLoading(true)
      handleGetCep();
    }
  }, [cepInput])



  return (
    <s.Container>
      <s.CartContainer className='Box'>
        <h2> Resumo do Pedido:</h2>

        {shoppingCartList?.map((item, index) => (
          <p key={index}> Produto: XXX {item.productID} - Quantidade: - {item.amount} - Preço Unitário: R$ {item.productPriece.toFixed(2)} Total : R$ {(item.productPriece * item.amount).toFixed(2)} </p>
        ))}

        <h3>Total: R$ {total.toFixed(2)}</h3>
        {discountValue !== 0 && 
          <h4>Com o desconto de: R$ {(discountValue).toFixed(2)} do Cupom</h4>
        }

      </s.CartContainer>

      <s.AdressContainer className='Box'>
        <h2>Endereço de Entrega: </h2>
        <Input placeholder='Informe seu Cep' 
          value={cepInput}
          onChange={(e) =>  setCepInput(e.target.value)}/>
        {isLoading &&  
          <p> Carregando ... </p>
        }
        {errorMsg && 
          <span> Cep Não Encontrado.</span>
        }
        <div className='separator'> 
          <Input placeholder='Bairro: ' 
            value={neighborhood} 
            disabled={city === ""}
            onChange={(e) => setNeighborhood(e.target.value)}/>
          <Input placeholder='Cidade: ' 
            value={city} 
            disabled={city === ""}
            onChange={(e) => setCity(e.target.value)}/>
        </div>
        <Input placeholder='Rua: ' 
          value={street} 
          disabled={city === ""}
          onChange={(e) => setStreet(e.target.value)}/>
        <Input placeholder='Complemento: ' 
          value={complement} 
          onChange={(e) => setComplement(e.target.value)}/>

      </s.AdressContainer>
      
      <s.PaymentContainer className='Box'>
        <h2> Finalizar Compra: </h2>
        <h3>Selecione o Meio de pagamento: </h3>
        <div className="options">
          <div>
            <p>Pix: </p>
            <FaPix size={30}/>
          </div>
          <div>
            <p>Cartão: </p>
            <CiCreditCard1 size={34}/>
          </div>
        </div>

      </s.PaymentContainer >
      <button className="final"> Finalizar Compra </button>
    </s.Container>
  )
}

export default FinishShopping
