"use client"
import QuestionContainer from './(components)/QuestionContainer';
import * as s from './styled'
import { homePageQuestions } from './(utils)/homeQuestions';

export default function Home() {
  return (
      <s.Container>
        <h1> Testando </h1>

        <s.FaqBanner>
          <h2> FAQ`s </h2>
          
          {homePageQuestions.map(item => (
            <QuestionContainer question={item.question} answer={item.answer}/>
          ))}

        </s.FaqBanner>

      </s.Container>
  );
}
