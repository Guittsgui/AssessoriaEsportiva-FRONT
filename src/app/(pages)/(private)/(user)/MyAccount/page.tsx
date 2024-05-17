"use client"
import { AuthContext } from '@/app/contexts/Auth/AuthProvider'
import * as s from './style'


import React, { useContext, useState } from 'react'
import { Input } from '@/app/components/UI/input'
import { Button } from '@/app/components/UI/button'
import UsersService from '@/app/services/UsersService'


function MyAccount() {

  const {hasUser} = useContext(AuthContext)
  const [showChangePasswordFields, setShowChangePasswordsFields] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmNewPassword, setConfirmNewPassword] = useState('')

  async function handleSubmitChangePassword(){
    if(!currentPassword || !newPassword || !confirmNewPassword){
      alert('nao tem')
      return
    }
    if(newPassword !== confirmNewPassword){
      return
    }
    const data  = {
      currentPassword,
      newPassword,
      confirmNewPassword
    }
    const response = await UsersService.changePassword(data)
  }

 

  return (
    <s.Container show={showChangePasswordFields}>
        <h2> Minha Conta </h2>

        <div className="infosContainer">
            <p> Nome: {hasUser?.name} </p>
            <p> Email: {hasUser?.email} </p>
            <p> Senha: ********** </p>
            <button onClick={() => setShowChangePasswordsFields(!showChangePasswordFields)}> Alterar Senha </button>
        </div>

        <div className="changePasswordContainer">
          <Input placeholder='Informe sua Senha Atual'
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}/>
          <Input placeholder='Informe sua Nova Senha'
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}/>
          <Input placeholder='Repita sua Nova Senha'
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}/>
          <Button onClick={handleSubmitChangePassword}>Salvar</Button>
        </div>
    </s.Container>
  )
}

export default MyAccount