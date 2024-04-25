import React, { useEffect, useState } from 'react'
import * as s from './style'
import ToastMessage from '../ToastMessage'
import { Message } from '@/app/types/Messages';


function ToastContainer() {

  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(()=>{
    document.addEventListener('addtoast', (event: any) => {
      const{type, message} = event.detail

      setMessages([...messages, {
        id: messages.length + 1,
        type,
        message
      }])

      setTimeout(() => {
        setMessages(messages.filter((item) => item.id !== item.id))
      }, 3000)
      
    })
  },[])

  function handleRemoveToast(id: number){
    setMessages(messages.filter((item) => item.id !== id))
  }

  return (

    <s.Container>
        {messages.map(item => (
          <ToastMessage key={item.id} 
            message={item.message} 
            type={item.type}
            id={item.id}
            onRemoveToast={handleRemoveToast}/>
        ))}
    </s.Container>
  )
}

export default ToastContainer