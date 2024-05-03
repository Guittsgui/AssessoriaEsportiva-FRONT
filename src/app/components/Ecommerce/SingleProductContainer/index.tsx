import * as s from './style'
import React from 'react'
import { IProduct } from '@/app/types/IProduct'
import Link from 'next/link'

type Props = {
  product: IProduct
}



function SingleProductContainer({product}: Props) {

  function handleSeeSelectedProduct(){
    alert(product.id)
  }

  return (
    <s.Container url={product.urlImage}>
        <div className="imageContainer">
            <div className="image">

            </div>
        </div>
        <div className="infosContainer">
            <p>{product.name}</p>
            <span> R$ {product.priece.toFixed(2)}</span>
            <Link href={`/SingleProduct/${product.id}`}>Detalhes</Link>
        </div>
        

    </s.Container>
  )
}

export default SingleProductContainer