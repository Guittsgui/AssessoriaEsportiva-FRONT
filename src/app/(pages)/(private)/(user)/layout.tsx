"use client"
import Sidebar from '@/app/components/Layout/Sidebar'
import React, { ReactNode } from 'react'

interface props{
    children: ReactNode
}

function layout({children}: props) {
  return (
    <>
    <Sidebar/>
    {children}

    </>
  )
}

export default layout