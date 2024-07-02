import React from 'react';
import { useFormStatus } from 'react-dom';

export default function FormSubmit() {
  const status = useFormStatus();

  if (status.pending) {
    return (
      <button
        disabled
        className="p-2 rounded-md shadow-lg bg-slate-200/10 text-slate-300 cursor-not-allowed"
      >
        Loading...
      </button>
    );
  }
  return (
    <>
      <button className="bg-blue-800 p-2 rounded-md shadow-lg shadow-blue-500">
        Login
      </button>
    </>
  );
}
