import React from 'react';
import { auth } from '@/auth';

export default async function SettingsPage() {
  const session = await auth();
  return <div>SettingsPage</div>;
}
