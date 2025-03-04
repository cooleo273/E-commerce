'use client'
import React from 'react'
import { SignUpProps } from './types'
import { useActionState } from 'react'
import Form from 'next/form'

const initialState = {
    message: ''
}
const SignUp = ({action}: SignUpProps) => {
    const [state, formAction, isPending] = useActionState(action, initialState )
  return (
    <Form action={formAction}>
        
    </Form>
  )
}

export default SignUp