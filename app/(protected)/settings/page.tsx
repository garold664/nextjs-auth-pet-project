'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { signOut } from 'next-auth/react';

function logOut() {
  signOut();
}

export default function SettingsPage() {
  return (
    <div>
      <h1>SettingsPage</h1>
      <Button onClick={logOut} variant={'link'}>
        Sign out
      </Button>
    </div>
  );
}
