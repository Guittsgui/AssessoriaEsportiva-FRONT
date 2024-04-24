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
            <Link href=""> Nossos Planos </Link>
            <Link href=""> Loja Virtual </Link>
            <Link href="">Área do Atleta</Link>
        </nav>
        <div className="LoginArea">
            <Link href="/Login"> Login </Link>
            <Link href="/Register"> Registre-se </Link>
        </div>
    </s.Header>
  )
}

export default Header