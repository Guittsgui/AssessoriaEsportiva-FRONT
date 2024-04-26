"use client"
import SportPlanContainer from '@/app/components/OurPlansContainer/SportPlanContainer'
import * as s from './style'
import Link from 'next/link'

import React from 'react'

function OurPlans() {
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

      <SportPlanContainer title="Triathlon"/>
      <SportPlanContainer title="Corrida"/>
      <SportPlanContainer title="Natação"/>
      <SportPlanContainer title="Personal"/>


    </s.Container>
  )
}


export default OurPlans