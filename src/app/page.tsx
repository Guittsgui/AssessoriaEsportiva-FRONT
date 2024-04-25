"use client"
import QuestionContainer from './components/QuestionContainer';
import * as s from './styles/styled'
import { homePageQuestions } from './utils/homeQuestions';
import { Input } from './components/input';
import { TextArea } from './components/textArea';
import { Button } from './components/button';
import FormFieldBox from './components/FormFieldBox';
import z from 'zod'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from './components/form';

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
          <h2> Alguma Dúvida? Fale Conosco: </h2>
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
        <s.FaqBanner>
          <h2> FAQ`s </h2>          
          {homePageQuestions.map((item, index)=> (
            <QuestionContainer question={item.question}
               answer={item.answer}
               key={index}/>
          ))}
        </s.FaqBanner>

      </s.Container>
  );
}
