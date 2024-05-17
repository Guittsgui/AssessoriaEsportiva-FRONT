import Link from 'next/link'
import * as s from './style'
import React, { useContext, useState } from 'react'
import Logo from '../../UI/Logo'
import { AuthContext } from '@/app/contexts/Auth/AuthProvider'
import { useRouter} from 'next/navigation'

function Header() {

  const authContext = useContext(AuthContext)
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState(false);

  function handleLogout(){
    authContext.handleExecuteLogout()
    router.replace('/')
  }

  function handleToogleMenu(){
    setOpenMenu(!openMenu)
  }

  if(!authContext.hasUser){
    return (
      <s.Header>
          <div className="Logo">
              <Link href="/"> <Logo/> </Link>
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
  }else{
    return (
      <>
        <s.UserHeader>
          <div className="userArea">
            <div className='MenuLogo' onClick={() => handleToogleMenu()}>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
            <p> Hello, {authContext.hasUser.name}</p>
          <button onClick={() => handleLogout()}> Logout </button>
        </s.UserHeader>
        <s.Dropdown isMenuOpen={openMenu}>
          <Link href='/'> Meus Endereços </Link>
          <Link href='/'> Meus Exercícios </Link>
          <Link href='/'> Blog </Link>
          <Link href='/'> Store </Link>
          <Link href='/'> Minahs Configuracoes </Link>
        </s.Dropdown>
      </>
    )

  }

  
}

export default Header