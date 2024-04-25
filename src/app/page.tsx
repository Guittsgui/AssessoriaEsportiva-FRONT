"use client"
import QuestionContainer from './components/QuestionContainer';
import * as s from './styles/mainPageStyle'
import { homePageQuestions } from './utils/homeQuestions';
import { Input } from './components/UI/input';
import { TextArea } from './components/UI/textArea';
import { Button } from './components/UI/button';
import FormFieldBox from './components/FormFieldBox';
import z from 'zod'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from './components/UI/form';
import { AiTwotoneMail } from "react-icons/ai";
import { FormEvent, useState } from 'react';
import { isEmailValid } from './utils/isEmailValid';
import Link from 'next/link'


export default function Home() {

  type emailMessage = z.infer<typeof talkWithUsFormSchema>

  const [emailNewsLetter , setEmailNewsLetter] = useState<string>('');

  const talkWithUsFormSchema = z.object({
    name: z.string().min(1 , "Nome Obrigatório"),
    email: z.string().email("Insira um Email Válido").min(1, "Preencha este Campo"),
    tel: z.string().min(11, "Campo Obrigatório"),
    messageBody: z.string().min(10, "Campo obrigatório - Min 10 caracteres.")
  })
  const {handleSubmit, register, formState: {errors}, reset} = useForm<emailMessage>({
    resolver: zodResolver(talkWithUsFormSchema)
  });

  

  function handleSubmitForm(data: emailMessage){
    alert('passou' + data.name)

    reset();
  }

  function handleSubmitNewsLetterForm(e: FormEvent){
    e.preventDefault();
    if(!isEmailValid(emailNewsLetter)){
      setEmailNewsLetter('')
      return
    }else{
      alert("é valido")
      setEmailNewsLetter('')
    }

  }

  return (
      <s.Container>


        <s.ImageBanner2/>

        <s.WhoWeAre>
          <div className="leftSide">
            <div className="textArea"> 
              <h2>Somos a TRIsportS Assessoria</h2>
              <p>Uma empresa feita por profissionais honestos, de gente que acredita e vive o esporte. Aqui você encontrará o melhor caminho para trilhar sua trajetória no mundo dos esportes de Endurance. Seja bem vindo.</p>
              <span> Se você acredita nisso também, é só chegar!</span>
            </div>
          </div>
          <div className="rightSide">
            <div className="imageBox">
            </div>
          </div>
        </s.WhoWeAre>

        <s.NumbersBanner>
          <h2>A maior Assessoria de Esportes do Brasil</h2>
          <div className="infos">
            <p className="fp"> Faça parte <br/> Desses Números</p>
            <div>
              <span> +300 </span>
              <p>Pódios</p> 
            </div>
            <div>
              <span> +47 </span>
              <p>Classificações para o IM 70.3 WC</p> 
            </div>
            <div>
              <span> +20 </span>
              <p>Classificações para o IM WC Kona</p> 
            </div>
          </div>
        </s.NumbersBanner>

        <s.ImageBanner1/>

        <s.OurSports>
          <h2> Nossos Esportes </h2>
        </s.OurSports>

        <s.NewsLetterBanner>
          <div className="title">
             <h4>Dicas para o treinamento de endurance</h4>
             <p>Inscreva-se na nossa newsletter e receba em primeira mão o nosso conteúdo e informações de nossos cursos por e-mail.</p>
             <AiTwotoneMail size={50} color="red"/>
          </div>
          <form onSubmit={handleSubmitNewsLetterForm}>
            <input placeholder="EMAIL" value={emailNewsLetter}
              type='email'
               onChange={(e) => setEmailNewsLetter(e.target.value)}>
            </input>
            <button type='submit'>ENVIAR</button>
          </form>
        </s.NewsLetterBanner>


        <s.FaqBanner>
          <h2> FAQ`s </h2>          
          {homePageQuestions.map((item, index)=> (
            <QuestionContainer question={item.question}
               answer={item.answer}
               key={index}/>
          ))}
        </s.FaqBanner>
        
        <s.OurPlans>
          <h2>PLANOS ASSESSORIA ESPORTIVA</h2>
          <p> Conheca os Planos da TRISports Assessoria Esoprtiva que atende a diversas modalidades diferentes, no formato presencial ou remoto. çaca parte do time TRISports, a maior e mais completa assessoria do Brasil.</p>
          <Link href="/OurPlans"> VER NOSSOS PLANOS </Link>

        </s.OurPlans>

        <s.TalkWithUsBanner>
          <h2> Fale Conosco: </h2>
          <Form onSubmit={handleSubmit(handleSubmitForm)}>
            <FormFieldBox >
              <Input placeholder="Informe seu Nome" 
                {...register('name')} 
                hasErrors={errors.name}/>
              <div>
                {errors.name?.message && <p> {errors.name?.message}</p>}
              </div>
            </FormFieldBox>

            <FormFieldBox>
              <Input placeholder="Informe seu Email: " 
                {...register('email')}
                hasErrors={errors.email}/>
              <div>
                {errors.email?.message && <p> {errors.email?.message}</p>}
              </div>
            </FormFieldBox>

            <FormFieldBox>
              <Input placeholder="Informe seu Telefone: " 
                type="number" 
                {...register('tel')}
                hasErrors={errors.tel}/>
              <div>
                {errors.tel?.message && <p> {errors.tel?.message}</p>}
              </div>
            </FormFieldBox>

            <FormFieldBox>
              <TextArea placeholder="Insira sua Mensagem:" 
                {...register('messageBody')}
                hasErrors={errors.messageBody}/>
              <div>
                {errors.messageBody?.message && <p> {errors.messageBody?.message}</p>}
              </div>
            </FormFieldBox>
            <Button type='submit'> Enviar Email </Button>

          </Form>
        </s.TalkWithUsBanner>


      </s.Container>
  );
}
