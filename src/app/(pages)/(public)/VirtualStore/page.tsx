"use client"
import * as s from './style'
import { BiCartDownload } from "react-icons/bi";
import { productList } from '@/app/utils/mockProducts';
import {useState} from 'react'
import React from 'react'
import { Input } from '@/app/components/UI/input';
import { CiSearch } from "react-icons/ci";
import SingleProductContainer from '@/app/components/Ecommerce/SingleProductContainer';
import { IProduct } from "../../../types/IProduct";


function VirtualStore() {

  const [allProducts, setAllProducts] = useState<IProduct[]>(productList);
  const [filtredList, setFiltredList] = useState<IProduct[]>(productList)

  return (
    <s.Container>
      <s.Header>
        <div>
          <p>Loja Virtual</p>
        </div>
        <div className='counterContainer'>
          <BiCartDownload size={40}/>
          <div className='counter'>
              <span> 01</span>
          </div>
        </div>
      </s.Header> 

      <s.Banner>
          <h2> Treine estiloso, Treine com os melhores Equipamentos</h2> 
      </s.Banner> 

      <s.Nav>
        <div>
          <Input placeholder='Procurar Item...'/>
          <CiSearch size={25} className="icon"/>


        </div>
      </s.Nav>
      <s.ProductListContainer>

        {filtredList.map((item, index)=> (
          <SingleProductContainer key={index} product={item}/>
        ))}
        
     

      </s.ProductListContainer>
      <s.PaginationContainer>
        <p> <span>1</span> , 2 , 3 , 4 , 5</p>
      </s.PaginationContainer>
      
    </s.Container>
  )
}

export default VirtualStore