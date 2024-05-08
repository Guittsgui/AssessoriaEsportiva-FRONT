"use client"
import { IProduct } from '@/app/types/IProduct';
import * as s from './style'
import React, { useContext, useEffect, useState } from 'react'
import { productList } from '../../../../utils/Mocks/mockProducts';
import Link from 'next/link';
import Header from '@/app/components/Ecommerce/Header';
import { ShoppingCartContext } from '@/app/contexts/ShoopingCart.tsx/ShoppinmgCartProvider';
import { useToastMessage} from '@/app/hooks/useToastMessage';

interface Props {
  params: {
    id: string;
  }
}


function SingleProduct({params}: Props) {
  const [product, setProduct] = useState<IProduct>();

  const {shoppingCartList, handleAddProductToTheCart} = useContext(ShoppingCartContext)

  useEffect(() => {
    setProduct(productList.find(item => item.id === parseInt(params.id)))
  },[])

  function handleAddProduct(){
    if(product?.id){
      handleAddProductToTheCart(product?.id)
    }
    document.dispatchEvent(useToastMessage("Produto Adicionado ", "success"))
  }

  return (
    <s.Container>
      <Header/>
      <s.productContainer url={product?.urlImage}>
        <div className="imageBox">
          <div className="image"></div>
        </div>
        <div className="infoBox">
          <h4>{product?.name}</h4>
          
          <div className="priece">
              <span>R$: {product?.priece.toFixed(2)}</span>
              <small> (Em até 10x sem Juros) </small>
          </div>

          <p>{product?.description}</p>
          <button className="add" onClick={handleAddProduct}>Adicionar ao Carrinho </button>
          <Link href="/VirtualStore">Voltar a Loja</Link>
        </div>
      </s.productContainer>
    </s.Container>
  )
}

export default SingleProduct