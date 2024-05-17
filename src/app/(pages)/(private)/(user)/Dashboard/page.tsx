"use client"
import { AuthContext } from '@/app/contexts/Auth/AuthProvider'
import * as s from './style'
import React, { useContext, useEffect } from 'react'


function Dashboard() {

  const {hasUser} = useContext(AuthContext)

  return (
    <s.Container>
        <h1>Hello {hasUser?.name}</h1>
    </s.Container>
  )
}

export default Dashboard