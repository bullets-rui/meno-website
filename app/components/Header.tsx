import Link from 'next/link';

const Header = () => (
  <header className="fixed top-0 right-0 p-10 text-[#00B4C8] text-xl font-bold text-right z-50 bg-white opacity-80 rounded-bl-[50px]">
    <nav className="space-y-8">
      {['HOME', 'ABOUT US', 'SERVICE', 'WORKS', 'NEWS', 'CONTACT'].map((item) => {
        let href = `#${item.toLowerCase().replace(' ', '')}`;
        if (item === 'HOME') href = '/';
        if (item === 'ABOUT US') href = '/about';
        if (item === 'SERVICE') href = '/service';
        if (item === 'WORKS') href = '/#works';
        if (item === 'NEWS') href = '/news';
        if (item === 'CONTACT') href = '/contact';

        return (
          <Link key={item} href={href} className="block hover:underline">
            {item}
          </Link>
        );
      })}
    </nav>
  </header>
);

export default Header;