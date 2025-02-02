
'use client'
import Link from 'next/link';
import YoubikeLogo from '@/app/assets/youbike_logo.png';
import MenuIcon from '@/app/assets/menu.png';
import Image from 'next/image';
import { useState } from 'react';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isWeb, setIsWeb] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" flex md:flex-row flex-col h-100vh overflow-hidden">
      <div className="container mx-auto flex items-center justify-between px-3">
        <div className="text-white text-2xl">
          <Image src={YoubikeLogo} alt='logo' ></Image>
        </div>
        <button
          className="block md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          <Image src={MenuIcon} alt='menu' className="h-6 w-6" />

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