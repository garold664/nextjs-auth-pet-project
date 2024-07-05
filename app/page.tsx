import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Home page</h1>
      <Link href="/auth/register">Sign up</Link>
      <Link href="/auth/login">Sign in</Link>
    </div>
  );
}
