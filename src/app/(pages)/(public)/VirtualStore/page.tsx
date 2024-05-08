"use client"
import * as s from './style'

import { productList } from '@/app/utils/Mocks/mockProducts';
import {ChangeEvent, FormEvent, useState} from 'react'
import React from 'react'
import { Input } from '@/app/components/UI/input';
import { CiSearch } from "react-icons/ci";
import SingleProductContainer from '@/app/components/Ecommerce/SingleProductContainer';
import { IProduct } from "../../../types/IProduct";
import Header from '@/app/components/Ecommerce/Header';


function VirtualStore() {

  const [allProducts, setAllProducts] = useState<IProduct[]>(productList);
  const [filtredList, setFiltredList] = useState<IProduct[]>(productList)
  const [searchInputValue, setSearchInputValue] = useState("")

  function handleSearchList(e: ChangeEvent<HTMLInputElement>){
     setSearchInputValue(e.target.value)
     setFiltredList(productList.filter((item) => 
      item.name.toUpperCase().startsWith(e.target.value.toUpperCase())))
  }

  return (
    <s.Container>

      <Header/>
      <s.Banner>
          <h2> Treine estiloso, Treine com os melhores Equipamentos</h2> 
      </s.Banner> 

      <s.Nav>
        <div className='inputContainer'>
          <Input placeholder='Procurar Item...' 
            value={searchInputValue}
            onChange={handleSearchList}/>
          <CiSearch size={25} className="icon"/>
        </div>

        <div className="selectContainer">
          <p>Ordenar por: </p>
          <select>
            <option> - </option>
            <option> Maior Preço </option>
            <option> Menor Preço </option>
          </select>
        </div>

      </s.Nav>

      <s.CounterContainer>
        <h3> Total Produtos: {filtredList.length}</h3>
      </s.CounterContainer>

      <s.ProductListContainer>
        {filtredList.map((item, index)=> (
          <SingleProductContainer key={item.id} product={item}/>
        ))}
      </s.ProductListContainer>
      <s.PaginationContainer>
        <p> <span>1</span> , 2 , 3 , 4 , 5</p>
      </s.PaginationContainer>
      
    </s.Container>
  )
}

export default VirtualStore