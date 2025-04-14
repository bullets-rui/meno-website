import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#00B4C8] text-[14px] font-bold tracking-widest text-white py-4 px-6 relative">
      <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-2">
        <p className="text-center sm:text-left">© Menō Ltd.</p>
        <Link href="/privacy" className="hover:underline text-center sm:text-right">
          プライバシーポリシー
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
