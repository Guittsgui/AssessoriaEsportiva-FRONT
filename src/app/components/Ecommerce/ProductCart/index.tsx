import * as s from './style'


import React from 'react'

function ProductCart
() {
  return (
    <s.Container>
        <s.ProductImageAndName>
            <div className="image">

            </div>
            <div className="title">
                <p>Camiseta Treino Azul</p>
            </div>
        </s.ProductImageAndName>
        <s.ProductSinglePriece>
            <p> R$ 88.00 </p>
        </s.ProductSinglePriece>
        <s.ProductQuantity>
            <button> - </button>
                <div className="border">
                    <p> 15 </p>
                </div>
            <button> + </button>
        </s.ProductQuantity>
        <s.ProductsTotalPriece>
            <p> R$ 159,90 </p>
        </s.ProductsTotalPriece>
    </s.Container>
  )
}

export default ProductCart
