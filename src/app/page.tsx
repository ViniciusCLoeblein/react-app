"use client";
import Image from 'next/image'
import logo from '../assets/logo.png'
import Input from '@/components/inputs'
import { setCookie } from 'cookies-next'
import { useRouter } from 'next/navigation';
import { useForm } from '@tanstack/react-form'
import { Button, InputAdornment } from '@mui/material'
import { zodValidator } from '@tanstack/zod-form-adapter'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import React, { memo, useCallback, useEffect, useState } from 'react'


const Acessar: React.FC = () => {
  const router = useRouter();
  const [showPswd, setShowPswd] = useState(false)
  const [checked, setChecked] = useState(false)
  const [valor, setValor] = useState({ password: '', username: '' })

  const form = useForm({
    defaultValues: valor,
    validatorAdapter: zodValidator(),
    onSubmit: handleNavigation,
  });
  

  const handleCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked)
  }

  function handleNavigation() {
    setCookie('LOGIN_INFO',valor)
    router.push('/home');
  }
  

  useEffect(() => {
    localStorage.setItem('isChecked', String(checked))
  }, [checked])

  useEffect(() => {
    const unsubscribe = form.store.subscribe(() => {
      setValor(form.store.state.values)
    })
    return () => unsubscribe()
  }, [form.store, form.store.state.values])

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      form.handleSubmit()
    },
    [form],
  )

  return (
    <div className="min-h-screen h-screen flex flex-col items-center justify-center bg-gradient-to-r from-emerald-700 to-emerald-700 py-12 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="animate-background-lines w-full h-full absolute transform -skew-y-[20deg] opacity-20 bg-gradient-to-r from-white to-transparent" />
      </div>
      <div className="text-center flex flex-col items-center pb-8 z-10">
        <Image src={logo} alt="grazziotin" width={200} height={200} priority />
      </div>
      <div className="max-w-md w-full bg-white bg-opacity-90 p-10 rounded-lg shadow-2xl space-y-8 z-10 backdrop-blur-lg">
        <h2 className="text-2xl font-extrabold text-center w-full text-emerald-700">
          Iniciar sessão
        </h2>
        <p className="text-sm text-black">
          Bem-vindo! <br />
          Entre com suas credenciais para acessar sua conta.
        </p>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <form.Field name="username">
            {(v) => (
              <Input
                required
                size="small"
                type="number"
                label="Usuário"
                autoComplete="new-username"
                value={v.state.value}
                sx={{ width: '100%' }}
                placeholder="Informe seu código"
                onChange={(e) => v.handleChange(e.target.value.slice(0, 6))}
              />
            )}
          </form.Field>
          <form.Field name="password">
            {(v) => (
              <Input
                required
                size="small"
                label="Senha"
                autoComplete="new-password"
                value={v.state.value}
                sx={{ width: '100%' }}
                placeholder="Informe sua senha"
                type={showPswd ? 'text' : 'password'}
                onChange={(e) => v.handleChange(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment
                      className="cursor-pointer"
                      position="end"
                      onClick={() => setShowPswd(!showPswd)}
                    >
                      {showPswd ? (
                        <Visibility fontSize={'small'} className="text-emerald-700" />
                      ) : (
                        <VisibilityOff fontSize={'small'} className="text-emerald-700" />
                      )}
                    </InputAdornment>
                  ),
                }}
              />
            )}
          </form.Field>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                checked={checked}
                onChange={handleCheckbox}
                className="h-4 w-4 !text-emerald-700 border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-black"
              >
                Me manter conectado
              </label>
            </div>
            <div className="text-sm">
              <button
                type="reset"
                className="font-medium text-emerald-700 hover:text-bemerald-600"
              >
                Esqueceu sua senha?
              </button>
            </div>
          </div>
          <div>
            <Button
              className="!bg-emerald-700 w-full !text-white"
              type="submit"
            >
              entrar
            </Button>
          </div>
        </form>
        <span className="flex text-sm content-center text-center h-5">
          <p className="text-gray-600 pr-2">Precisa de ajuda?</p>
          <p className="font-medium text-emerald-700 hover:text-emerald-600">
            Entre em contato com o suporte
          </p>
        </span>
      </div>
    </div>
  )
}

export default memo(Acessar)