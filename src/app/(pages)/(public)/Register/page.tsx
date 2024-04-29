"use client" 
import FormFieldBox from '@/app/components/FormFieldBox'
import * as s from './style'


import React, { FormEvent } from 'react'
import { Input } from '@/app/components/UI/input'
import { Button } from '@/app/components/UI/button'
import z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form } from '@/app/components/UI/form'
import { useToastMessage } from '@/app/hooks/useToastMessage'
import UsersService from '@/app/services/UsersService'


function Register() {

  type registerForm = z.infer<typeof registerSchema>
  
  const registerSchema = z.object({
    name: z.string().min(1, "Preencha este Campo"),
    email: z.string().min(1, "Preencha este Campo").email("Informe um Email Válido"),
    password: z.string().min(5, "Preencha este Campo"),
    confirmPassword: z.string().min(5, "Preencha este Campo")
  }).refine( fields => fields.password === fields.confirmPassword , {
    path: ['confirmPassword'],
    message: 'Senhas imcompatíveis'
  })

  const {register, reset, formState: {errors}, handleSubmit} = useForm<registerForm>({
    resolver: zodResolver(registerSchema)
  })

  async function handleSubmitRegisterForm( data: registerForm){

    const response = await UsersService.addNewUser(data)
    console.log(response.data.msg)
    response.status !== 201 
      ? document.dispatchEvent(useToastMessage(response.data.msg, "error")) 
      : document.dispatchEvent(useToastMessage(response.data.msg,"success"))
    reset()
  }

  return (
    <s.PageContainer>
        <h1> Register </h1>
        <Form onSubmit={handleSubmit(handleSubmitRegisterForm)}>

          <FormFieldBox>
            <Input placeholder='Informe seu Nome'
              {...register('name')}
              hasErrors={errors.name}/>
            <div>
              {errors.name?.message && <p> {errors.name.message}</p>}
            </div>
          </FormFieldBox>

          <FormFieldBox>
            <Input placeholder='Informe seu Email'
              {...register('email')}
              hasErrors={errors.email}/>
            <div>
              {errors.email?.message && <p> {errors.email.message}</p>}
            </div>
          </FormFieldBox>

          <FormFieldBox>
            <Input placeholder='Informe sua Senha:' 
              type='password'
              {...register('password')}
              hasErrors={errors.password}/>
            <div>
              {errors.password?.message && <p> {errors.password.message}</p>}
            </div>
          </FormFieldBox>

          <FormFieldBox>
            <Input placeholder='Confirme sua Senha:' 
              type='password'
              {...register('confirmPassword')}
              hasErrors={errors.confirmPassword}/>
            <div>
              {errors.confirmPassword?.message && <p> {errors.confirmPassword.message}</p>}
            </div>
          </FormFieldBox>

          <Button type="submit"> Enviar </Button>
          
        </Form>
    </s.PageContainer>
  )
}

export default Register