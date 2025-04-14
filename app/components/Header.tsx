'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: 'HOME', href: '/' },
    { label: 'ABOUT US', href: '/about' },
    { label: 'SERVICE', href: '/service' },
    { label: 'WORKS', href: '/#works' },
    { label: 'NEWS', href: '/news' },
    { label: 'CONTACT', href: '/contact' },
  ];

  return (
    <header className="fixed top-0 right-0 z-50 text-[#00B4C8] font-bold">
      {/* ハンバーガーアイコン（モバイル用） */}
      <div className="md:hidden p-6">
        <button
          className="relative w-8 h-6 z-50 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="メニューを開く"
        >
          <span className={`block absolute h-1 w-full bg-[#00B4C8] rounded transition-transform duration-300 ${isOpen ? 'rotate-45 top-2.5' : 'top-0'}`} />
          <span className={`block absolute h-1 w-full bg-[#00B4C8] rounded transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'top-2.5'}`} />
          <span className={`block absolute h-1 w-full bg-[#00B4C8] rounded transition-transform duration-300 ${isOpen ? '-rotate-45 top-2.5' : 'top-5'}`} />
        </button>
      </div>

      {/* ナビゲーションメニュー */}
      <nav
        className={`
          fixed top-0 right-0 w-50 h-full bg-white shadow-lg opacity-95 
          transform transition-transform duration-300
          ${isOpen ? 'translate-x-0' : 'translate-x-full'} 
          md:translate-x-0 md:static md:w-auto md:h-auto md:shadow-none md:bg-white md:opacity-80 
          p-10 text-right space-y-10
          pt-32 md:pt-10
          text-xl md:text-base
        `}
      >
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={`block hover:underline ${pathname === item.href ? 'underline' : ''}`}
            onClick={() => setIsOpen(false)}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
