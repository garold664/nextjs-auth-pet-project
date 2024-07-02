import React from 'react';
import { useFormStatus } from 'react-dom';

export default function FormSubmit() {
  const status = useFormStatus();

  if (status.pending) {
    return (
      <button disabled className="bg-slate-300/10 text-slate-300 ">
        Loading...
      </button>
    );
  }
  return (
    <>
      <button>Login</button>
    </>
  );
}
