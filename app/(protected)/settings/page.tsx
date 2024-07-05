import { Button } from '@/components/ui/button';
import { signOut } from '@/auth';
import { auth } from '@/auth';
import { json } from 'stream/consumers';
async function handleSignOut() {
  'use server';
  await signOut();
}

export default async function SettingsPage() {
  const session = await auth();
  return (
    <div>
      <h1>SettingsPage</h1>
      <div>{JSON.stringify(session)}</div>
      <form action={handleSignOut}>
        <Button type="submit" variant={'link'}>
          Sign out
        </Button>
      </form>
    </div>
  );
}
