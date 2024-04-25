"use client"
import QuestionContainer from './(components)/QuestionContainer';
import * as s from './styled'
import { homePageQuestions } from './(utils)/homeQuestions';
import { Input } from './(components)/input';
import { Button } from './(components)/button';
import FormFieldBox from './(components)/FormFieldBox';
import z from 'zod'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

export default function Home() {

  type emailMessage = z.infer<typeof talkWithUsFormSchema>

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

  return (
      <s.Container>
        <h1> Testando </h1>

        <s.TalkWithUsBanner>
          <h2> Fale Conosco: </h2>
          <s.Form onSubmit={handleSubmit(handleSubmitForm)}>
            <FormFieldBox >
              <Input placeholder="Informe seu Nome" 
                {...register('name')} 
                hasErrors={errors.name}/>
              {errors.name?.message && <p> {errors.name?.message}</p>}
            </FormFieldBox>

            <FormFieldBox>
              <Input placeholder="Informe seu Email: " 
                {...register('email')}
                hasErrors={errors.email}/>
              {errors.email?.message && <p> {errors.email?.message}</p>}
            </FormFieldBox>

            <FormFieldBox>
              <Input placeholder="Informe seu Telefone: " 
                type="number" 
                {...register('tel')}
                hasErrors={errors.tel}/>
              {errors.tel?.message && <p> {errors.tel?.message}</p>}
            </FormFieldBox>

            <FormFieldBox>
              <textarea placeholder="Insira sua Mensagem:" 
                {...register('messageBody')}
                />
              {errors.messageBody?.message && <p> {errors.messageBody?.message}</p>}
            </FormFieldBox>
            <Button type='submit'> Enviar </Button>

          </s.Form>
        </s.TalkWithUsBanner>
        <s.FaqBanner>
          <h2> FAQ`s </h2>          
          {homePageQuestions.map(item => (
            <QuestionContainer question={item.question} answer={item.answer}/>
          ))}
        </s.FaqBanner>

      </s.Container>
  );
}
