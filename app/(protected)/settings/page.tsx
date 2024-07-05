import React from 'react';
import { auth } from '@/auth';

export default async function SettingsPage() {
  const session = await auth();
  return (
    <div>
      <h1>SettingsPage</h1>
      <div>{JSON.stringify(session, null, 2)}</div>
    </div>
  );
}
