import * as s from './style'
import { CiTrash } from "react-icons/ci";
import React, { useContext, useEffect, useState } from 'react'
import { productList } from '@/app/utils/Mocks/mockProducts';
import { IProduct } from '@/app/types/IProduct';
import { ShoppingCartContext } from '@/app/contexts/ShoopingCart.tsx/ShoppinmgCartProvider';

interface Props{
    itemLine: {
        productID: number,
        amount: number,
        size?: string,
    }
}


function ProductCart({itemLine}: Props) {

    const { shoppingCartList,handleRemoveProductToTheCart} = useContext(ShoppingCartContext)

    function handleRemoveItem(){
        if(product?.id){
            handleRemoveProductToTheCart(product.id)
        }

    }

    useEffect(()=>{
        setProduct(productList.find((item) => item.id === itemLine.productID));
    },[shoppingCartList])

    const [product, setProduct] = useState<IProduct | null>();
  return (
    <s.Container>
        <s.ProductImageAndName urlImage={product?.urlImage}>
            <div className="image">

            </div>
            <div className="title">
                <p>{product?.name} + id: {product?.id}</p>
            </div>
        </s.ProductImageAndName>
        <s.ProductSinglePriece>
            <p> R$ {product?.priece.toFixed(2)}</p>
        </s.ProductSinglePriece>
        <s.ProductQuantity>
            <button> - </button>
                <div className="border">
                    <p> {itemLine.amount}</p>
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
