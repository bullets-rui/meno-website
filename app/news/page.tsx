import Header from '../components/Header'
import AnimatedTitle from '../components/AnimatedTitle';
import Contact from '../components/Contact'
import Footer from '../components/Footer';

export default function News() {
  return (
    <main className="opacity-0 animate-fade-in duration-500">
      <Header />

      <section className="text-[#00B4C8] px-15 pt-15 pb-30 space-y-4">
        <div className="pb-15">
          <img src="logo.svg" alt="ロゴ" />
        </div>
        
        <AnimatedTitle text={`NEW LIST`} />

        <ul className="mt-6 mb-12 space-y-2">
      {Array.from({ length: 10 }).map((_, index) => (
        <li
          key={index}
          className="text-base flex border-b border-dotted border-[#00B4C8] py-10"
        >
          <span className="text-[#CCCCCC] pr-5">2025.00.00</span>
          <span className="text-[#00B4C8] font-bold">
            ニュースタイトルが入るニュースタイトルが入る
          </span>
        </li>
      ))}
    </ul>

      </section>

      <Contact />
      <Footer />
    </main>
  );
}


