import { getServerSession } from 'next-auth';
import { options } from '../api/auth/[...nextauth]/options';
import { BsFillCartFill } from 'react-icons/bs';
import { ThemeMenu } from './ThemeMenu';
import UserMenu from './UserMenu';
import SmallScreenMenu from './SmallScreenMenu';
import CartDropdown from './CartDropdown';
import { LoginButton } from '../components';
import Logo from '../../../public/images/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';

const Navbar: React.FC = async () => {
  const session = await getServerSession(options);
  if (!session) {
    redirect('api/auth/signin?callbackUrl=/');
  }
  return (
    <nav className='bg-white dark:bg-zinc-900 rounded-md sticky top-0 flex items-center justify-between p-3 z-50'>
      <div className='flex items-center space-x-6 ml-4'>
        <Link className='font-bold text-md' href='/'>
          <Image
            src={Logo}
            alt='Your Logo'
            width={50}
            height={40}
            className='rounded-lg'
          />
        </Link>
        <Link className='font-bold text-md' href='/'>
          Home
        </Link>
        <Link className='font-bold text-md' href='/categories'>
          Categories
        </Link>
      </div>

      {/* PC */}
      {/* laptop */}

      <div className='hidden md:block'>
        <div className='flex items-center space-x-4 '>
          <div className='relative inline-block text-left '>
            <button className=' focus:outline-none '>
              <BsFillCartFill className='text-xl' />
            </button>
            <CartDropdown />
          </div>
          <ThemeMenu />
          {session ? <UserMenu user={session?.user} /> : <LoginButton />}
        </div>
      </div>

      {/* tablet */}
      <div className='hidden sm:block tablet:hidden flex justify-end '>
        <SmallScreenMenu>
          {session ? <UserMenu user={session?.user} /> : <LoginButton />}
        </SmallScreenMenu>
      </div>

      {/* mobile */}
      <div className='sm:hidden tablet:hidden  flex justify-end '>
        <SmallScreenMenu>
          {session ? <UserMenu user={session?.user} /> : <LoginButton />}
        </SmallScreenMenu>
      </div>
    </nav>
  );
};

export default Navbar;
