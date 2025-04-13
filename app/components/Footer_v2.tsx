import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#00B4C8] text-[14px] font-bold tracking-widest text-white py-2 relative">
      <p className="text-center">© Menō Ltd.</p>
      <p className="absolute right-10 top-2.5">
        <Link href="/privacy" className="hover:underline">
          プライバシーポリシー
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
