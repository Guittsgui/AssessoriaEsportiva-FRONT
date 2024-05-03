"use client"
import { IProduct } from '@/app/types/IProduct';
import * as s from './style'
import React, { useEffect, useState } from 'react'
import { productList } from '../../../../utils/mockProducts';
import Link from 'next/link';

interface Props {
  params: {
    id: string;
  }
}

function SingleProduct({params}: Props) {
  const [product, setProduct] = useState<IProduct>();

  useEffect(() => {
    setProduct(productList.find(item => item.id === parseInt(params.id)))
  },[])

  return (
    <s.Container>
      <s.productContainer url={product?.urlImage}>
        <div className="imageBox">
          <div className="image"></div>
        </div>
        <div className="infoBox">
          <h4>{product?.name}</h4>
          
          <div className="priece">
              <span>R$: {product?.priece.toFixed(2)}</span>
              <small> (Parcelamos em até 20x sem Juros) </small>
          </div>

          <p>{product?.description}</p>
          <button>Adicionar ao Carrinho </button>
          <Link href="/VirtualStore">Voltar a Loja</Link>
        </div>
      </s.productContainer>
    </s.Container>
  )
}

export default SingleProduct