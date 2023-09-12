import Image from 'next/image';
import Link from 'next/link';
import { options } from './api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth';
import type { Session } from 'next-auth';

export default async function Home() {
  const session = await getServerSession(options);

  return (
    <>
      {console.log('session', session)}
      <div
        style={{ marginTop: '30px', display: 'flex', justifyContent: 'center' }}
      >
        {session ? <h3>hjkl</h3> : <h3>You shall Not Pass</h3>}
      </div>
    </>
  );
}
