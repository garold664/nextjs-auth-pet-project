'use client';
import { login } from '@/actions/login';
import FormSubmit from '@/components/FormSubmit';
import Link from 'next/link';
import React from 'react';
import { useFormState } from 'react-dom';

import { auth } from '@/auth';

export default function LoginPage() {
  const [state, formAction] = useFormState(login, {
    error: '',
    success: '',
  });
  return (
    <form action={formAction} className="flex flex-col w-[600px] p-6 gap-y-5">
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        className="p-2 rounded-sm ring-2 text-black"
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        id="password"
        className="p-2 rounded-sm text-black"
      />
      <FormSubmit>Login</FormSubmit>
      <Link href="/auth/register">Register</Link>
      {state.error && (
        <ul className="bg-red-500/15 text-red-500  p-2 mt-4 rounded-md">
          <li key={state.error}> ⚠️{state.error}</li>
        </ul>
      )}
      {state.success && (
        <ul className="bg-emerald-300/15 text-emerald-300 p-2 mt-4 rounded-md">
          <li key={state.success}>✅ {state.success}</li>
        </ul>
      )}
    </form>
  );
}
