import { Button } from '@/components/ui/button';
import { signOut } from '@/auth';

async function handleSignOut() {
  'use server';
  await signOut();
}

export default async function SettingsPage() {
  return (
    <div>
      <h1>SettingsPage</h1>
      <form action={handleSignOut}>
        <Button type="submit" variant={'link'}>
          Sign out
        </Button>
      </form>
    </div>
  );
}
