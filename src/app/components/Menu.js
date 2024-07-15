
'use client'
import Link from 'next/link';
import YoubikeLogo from '@/app/assets/youbike_logo.png';
import MenuIcon from '@/app/assets/menu.png';
import Image from 'next/image';
import { useState } from 'react';

const Menu = () => {
  // <header className='w-full flex justify-between items-center px-5'>
  //   <div>
  //     <Image src={YoubikeLogo} alt='logo' ></Image>
  //   </div>
  //   <div>
  //     <Image src={MenuIcon} alt='menu' ></Image>
  //   </div>
  //   {/* <Link href="/">使用說明</Link>
  //   <Link href="/">收費方式</Link>
  //   <Link href="/">站點資訊</Link>
  //   <Link href="/">最新消息</Link>
  //   <Link href="/">活動專區</Link>
  //   <button className='bg-black text-white'>登入</button> */}
  // </header>

  const [isOpen, setIsOpen] = useState(false);
  const [isWeb, setIsWeb] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" border-[1px] border-gra flex md:flex-row flex-col h-100vh overflow-hidden">
      <div className="container mx-auto flex items-center justify-between px-3">
        <div className="text-white text-2xl">
          <Image src={YoubikeLogo} alt='logo' ></Image>
        </div>
        <button
          className="text-white block md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'
        } w-full md:flex md:items-center md:w-auto`}
      >
        <div className="bg-[#B5CC22] text-white flex flex-col md:flex-row justify-between md:gap-4 h-100vh">
          <div className='flex flex-col md:flex-row'>
            <Link href="/" className="block py-2 px-4">使用說明</Link>
            <Link href="/" className="block py-2 px-4">收費方式</Link>
            <Link href="/" className="block py-2 px-4">站點資訊</Link>
            <Link href="/" className="block py-2 px-4">最新消息</Link>
            <Link href="/" className="block py-2 px-4">活動專區</Link>
          </div>
          <button className="block py-2 px-4 bg-white text-[#B5CC22] rounded-md">登入</button>
        </div>
      </div>

    </nav>

  );
};


export default Menu;