import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState, memo } from 'react';
import sbnlogo from '../public/logos/sbn.png';

const Header = ({ darkMode = false }) => {
  const router = useRouter();

  const [mobileMenuClicked, setMobileMenuClicked] = useState(false);

  return (
    <>
      <div className="hidden lg:flex items-center justify-between">
        <div className="w-40 ml-24 flex items-center">
          <Image
            alt="samudera biru nusantara logo"
            src={sbnlogo}
            className="z-10"
          />
        </div>
        <div className="flex flex-row space-x-6 text-white font-mono pr-24">
          <button className={`py-1 px-3 rounded-xl ${router.route === '/' ? 'bg-blue-400' : ''}`} type="button" onClick={() => router.push('/')}>
            <h1 className={`hover:cursor-pointer active:opacity-30 ${darkMode ? 'text-black' : 'text-white'}`}>Home</h1>
          </button>
          <button className={`py-1 px-3 rounded-xl ${router.route === '/services' ? 'bg-blue-400' : ''}`} type="button" onClick={() => router.push('/services')}>
            <h1 className={`hover:cursor-pointer active:opacity-30 ${darkMode ? 'text-black' : 'text-white'}`}>Services</h1>
          </button>
          <button className={`py-1 px-3 rounded-xl ${router.route === '/projects' ? 'bg-blue-400' : ''}`} type="button" onClick={() => router.push('/projects')}>
            <h1 className={`hover:cursor-pointer active:opacity-30 ${darkMode ? 'text-black' : 'text-white'}`}>Projects</h1>
          </button>
          <button className={`py-1 px-3 rounded-xl ${router.route === '/about' ? 'bg-blue-400' : ''}`} type="button" onClick={() => router.push('/about')}>
            <h1 className={`hover:cursor-pointer active:opacity-30 ${darkMode ? 'text-black' : 'text-white'}`}>About</h1>
          </button>
          <button className={`py-1 px-3 rounded-xl ${router.route === '/contact' ? 'bg-blue-400' : ''}`} type="button" onClick={() => router.push('/contact')}>
            <h1 className={`hover:cursor-pointer active:opacity-30 ${darkMode ? 'text-black' : 'text-white'}`}>Contact</h1>
          </button>
        </div>
      </div>

      <div className="lg:hidden flex justify-between items-center w-full">
        <div className="ml-10 w-28 md:w-40 flex items-center">
          <Image
            alt="samudera biru nusantara logo"
            src={sbnlogo}
            className="z-10 w-28 h-10"
          />
        </div>
        <div className="pr-10">
          <button type="button" onClick={() => {
            setMobileMenuClicked(true);
          }}>
            <img src="/icons/menu.png" alt="menu" className="w-7 md:w-8 hover:opacity-60 active:opacity-30" />
          </button>
        </div>
      </div>

      <div className={`lg:hidden z-20 fixed h-[35rem] inset-x-0 top-0 bg-gray-800 transform ${mobileMenuClicked ? 'translate-x-0' : '-translate-x-full'} transition duration-300 ease-in-out flex flex-col shadow-sm`}>
        <div className="flex flex-row w-full items-center justify-between shadow-md shadow-gray-900 px-10 py-2">
          <div className="w-[7rem] flex justify-center items-center">
            <Image
              alt="samudera biru nusantara logo"
              src={sbnlogo}
            />
          </div>
          <button type="button" onClick={() => {
            setMobileMenuClicked(false);
          }}>
            <img src="/icons/close.png" alt="close" className="w-5 hover:opacity-60 active:opacity-30" />
          </button>
        </div>
        <div className="flex flex-col w-full items-start space-y-5 p-5">
          <button type="button" onClick={() => router.push('/')}>
            <h1 className="text-white text-lg">Home</h1>
          </button>
          <button type="button" onClick={() => router.push('/services')}>
            <h1 className="text-white text-lg">Services</h1>
          </button>
          <button type="button" onClick={() => router.push('/projects')}>
            <h1 className="text-white text-lg">Projects</h1>
          </button>
          <button type="button" onClick={() => router.push('/about')}>
            <h1 className="text-white text-lg">About</h1>
          </button>
          <button type="button" onClick={() => router.push('/contact')}>
            <h1 className="text-white text-lg">Contact</h1>
          </button>
        </div>
      </div>
    </>
  );
};

export default memo(Header);
