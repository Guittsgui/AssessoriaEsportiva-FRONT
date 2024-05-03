import * as s from './style'
import React from 'react'
import { IProduct } from '@/app/types/IProduct'

type Props = {
  product: IProduct
}

function SingleProductContainer({product}: Props) {
  return (
    <s.Container url={product.urlImage}>
        <div className="imageContainer">
            <div className="image">

            </div>
        </div>
        <div className="infosContainer">
            <p>{product.name}</p>
            <span> R$ {product.priece.toFixed(2)}</span>
            <button> Detalhes </button>
        </div>
        

    </s.Container>
  )
}

export default SingleProductContainer