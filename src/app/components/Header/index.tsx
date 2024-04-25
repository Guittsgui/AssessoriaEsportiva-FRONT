import Link from 'next/link'
import * as s from './style'

import React from 'react'

function Header() {
  return (
    <s.Header>
        <div className="Logo">
            <Link href="/"> LOGO </Link>
        </div>
        <nav>
            <Link href="/OurPlans"> Nossos Planos </Link>
            <Link href="/VirtualStore"> Loja Virtual </Link>
            <Link href="/Login">Área do Atleta</Link>
        </nav>
        <div className="LoginArea">
            <Link href="/Login"> Login </Link>
            <Link href="/Register"> Registre-se </Link>
        </div>
    </s.Header>
  )
}

export default Header