import * as s from './style'
import { CiTrash } from "react-icons/ci";


import React from 'react'

function ProductCart() {

    function handleRemoveItem(){
        alert('Apagou !')
    }

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
        <s.Remove>
            <button onClick={handleRemoveItem}><CiTrash size={20} className='logo'/></button>
        </s.Remove>
    </s.Container>
  )
}

export default ProductCart
