import * as s from './styles'
import React from 'react'
import { CiCircleCheck , CiCircleAlert} from "react-icons/ci";

type props = {
    message: string;
    type: "error" | "success";
    id: number;
    onRemoveToast: (id: number) => void
}


function ToastMessage({id, message, type, onRemoveToast}: props) {
  return (
    <s.Container type={type} onClick={() => onRemoveToast(id)}>
        {message}
        {type === "error" && <CiCircleAlert size={40}/>}
        {type === "success" && <CiCircleCheck size={40}/>}
    </s.Container>
  )
}

export default ToastMessage