import * as s from './style'
import React from 'react'

type Props = {
  product: IProduct
}

function SingleProductContainer({product}: Props) {
  return (
    <s.Container>
        <div className="imageContainer">
            <div className="image">

            </div>
        </div>
        <div className="infosContainer">
            <p>Camisa de Treino Oficial BLUE</p>
            <span> R$ 59,90</span>
            <button> Detalhes </button>
        </div>
        

    </s.Container>
  )
}

export default SingleProductContainer