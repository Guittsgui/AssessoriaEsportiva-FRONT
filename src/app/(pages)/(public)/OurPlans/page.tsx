"use client"
import SportPlanContainer from '@/app/components/OurPlansContainer/SportPlanContainer'
import * as s from './style'
import Link from 'next/link'
import  { useState , useEffect} from 'react'
import React from 'react'
import { ourPlanslist } from '@/app/utils/ourPlansList'
import { OurPlans } from '@/app/types/PlansTypes'


function OurPlans() {

  const allPlansList = ourPlanslist;
  const [filtredList, setFiltredList] = useState<OurPlans[]>();

  useEffect(() => {

    setFiltredList(allPlansList.filter(item => item.title === "Triathlon"))
    
  },[])

  function handleChangeListFilter(filter: string){
    setFiltredList(allPlansList.filter(item => item.title === filter))
  }

  return (
    <s.Container>
      <s.TextContainer>
          <div className="title">
            <h2> Nossos Planos </h2>
          </div>
          <p>Ainda não está pronto para um acompanhamento com um coach, mas gostaria de ter uma planilha para seguir?</p>
          <p>Conheça abaixo os nossos programas de treino! São planilhas com treinos estruturados para diversos níveis de atleta (do iniciante ao avançado), para diversas distâncias e objetivos específicos. Criamos programas específicos para as principais provas nacionais e internacionais de triathlon, corrida e ciclismo.</p>
          <p>Não encontrou sua prova? Nos envie um E-mail que teremos um enorme prazer em confecciona-la para você.</p>
          <p>Dúvidas? Acesse nosso <Link href="/">FAQ</Link> .</p>
      </s.TextContainer>

      <s.Nav>
        <button className="active" 
          onClick={() => handleChangeListFilter("Triathlon")}> 
            Triathlon 
        </button>
        <button onClick={() => handleChangeListFilter("Corrida")}> Corrida</button>
        <button onClick={() => handleChangeListFilter("Natação")}> Natação </button>
        <button onClick={() => handleChangeListFilter("Personal")}> Personal</button>
      </s.Nav>

      {filtredList && 
        <SportPlanContainer  filtredList={filtredList[0]}/>
      }

    </s.Container>
  )
}


export default OurPlans