import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
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
