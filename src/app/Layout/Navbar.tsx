import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className='bg-blue-500 p-4 fixed top-0 left-0 right-0 z-50'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link className='text-white font-bold text-xl' href='/'>
          Home
        </Link>
        <div className='hidden md:flex'>
          <Link className='text-white mr-4' href='/login'>
            Login
          </Link>
          <button className='text-white'>Logout</button>
        </div>
        <div className='md:hidden'>{/* Add a responsive menu icon here */}</div>
      </div>
    </nav>
  );
};

export default Navbar;
