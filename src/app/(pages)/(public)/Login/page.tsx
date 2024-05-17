"use client"
import FormFieldBox from '@/app/components/FormFieldBox'
import * as s from './style'
import React, { useContext } from 'react'
import { Input } from '@/app/components/UI/input'
import { Button } from '@/app/components/UI/button'
import z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form } from '@/app/components/UI/form'
import { useRouter} from 'next/navigation'
import { useToastMessage } from '@/app/hooks/useToastMessage'
import { AuthContext } from '@/app/contexts/Auth/AuthProvider'
import UsersService from '@/app/services/UsersService'




function Login() {

  type loginForm = z.infer<typeof loginSchema>

  const loginSchema = z.object({
    email: z.string().min(1, "Preencha este Campo").email("Informe um Email válido"),
    password: z.string().min(1, "Preencha este Campo")
  })

  const { register, reset, handleSubmit, formState: {errors}} = useForm<loginForm>({
    resolver: zodResolver(loginSchema)
  })

  const router = useRouter();
  const authContext = useContext(AuthContext)

  async function handleSubmitLogin(data: loginForm){
    const {email, password} = data;
    const response = await authContext.handleValidateLogin(email, password)
    
    if(response.status === 200){
      router.replace('/UserHome')
      return
    }

    document.dispatchEvent(useToastMessage(response.data.msg, "error"))


  }

  return (
    <s.PageContainer>
        <h1> Login </h1>
        <Form onSubmit={handleSubmit(handleSubmitLogin)}>

          <FormFieldBox>
            <Input placeholder="Informe seu Email: "
             {...register('email')}
             hasErrors={errors.email}/>
             <div className="div">
              {errors.email?.message && <p> {errors.email.message}</p> }
             </div>
          </FormFieldBox>

          <FormFieldBox>
            <Input placeholder="informe sua Senha:"
              {...register('password')}
              hasErrors={errors.password}
              type='password'/>
            <div>
              {errors.password?.message && <p>{errors.password.message}</p>}
            </div>
          </FormFieldBox>

          <Button type='submit'> Logar </Button>
        </Form>
    </s.PageContainer>
  )
}

export default Login