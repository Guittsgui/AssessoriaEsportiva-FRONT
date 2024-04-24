import * as s from './styled'
import { FaArrowUp , FaArrowDown} from "react-icons/fa";
import React, { useState } from 'react'


type Props = {
    question: string,
    answer: string
}

function QuestionContainer( {question, answer} : Props) {

    const [showAnswer, setShowAnswer] = useState<boolean>(false)

  return (
    <s.Container showAnswer={showAnswer}>
        <div className="QuestionBox" onClick={() => setShowAnswer(!showAnswer)}>
            <p> {question} </p>
            {showAnswer=== true ? <FaArrowDown size={25}/>:<FaArrowUp size={25}/>}                 
        </div>
        <div className="AnswerBox">
            <p>{answer}</p>
        </div>

    </s.Container>
  )
}

export default QuestionContainer