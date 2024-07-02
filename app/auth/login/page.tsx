'use client';
import { login } from '@/actions/login';
import FormSubmit from '@/components/FormSubmit';
import React from 'react';
import { useFormState } from 'react-dom';

export default function LoginPage() {
  const [state, formAction] = useFormState(login, {
    error: '',
    success: '',
  });
  return (
    <form action={formAction}>
      <label htmlFor="email">Email</label>
      <input type="email" name="email" id="email" />
      <label htmlFor="password">Password</label>
      <input type="password" name="password" id="password" />
      <FormSubmit />
      {state.error && (
        <ul className="bg-red-500/15 text-red-500 ">
          <li key={state.error}>{state.error}</li>
        </ul>
      )}
      {state.success && (
        <ul className="bg-emerald-300/15 text-emerald-300">
          <li key={state.success}>{state.success}</li>
        </ul>
      )}
    </form>
  );
}
