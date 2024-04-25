import * as s from './style'


import React, { ReactNode } from 'react'

type props = {
    children: ReactNode;
}

function FormFieldBox({children}: props) {
  return (
    <s.Container>
        {children}
    </s.Container>
  )
}

export default FormFieldBox