import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { auth } from '@/auth';

export default async function Home() {
  const session = await auth();
  console.log(session);
  return (
    <div>
      <h1>Home page</h1>
      <Button variant={'link'} asChild>
        <Link href="/auth/register">Sign up</Link>
      </Button>
      <Button variant={'link'} asChild>
        <Link href="/auth/login">Sign in</Link>
      </Button>
    </div>
  );
}
