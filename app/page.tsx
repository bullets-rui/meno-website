import Header from './components/Header';
import AnimatedTitle from './components/AnimatedTitle';
import Service from './components/Service';
import Works from './components/Works';
import News from './components/News';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="opacity-0 animate-fade-in duration-500">
      <Header />

      {/* Hero セクション */}
      <section className="text-[#00B4C8] px-15 pt-15 pb-30 space-y-4">
        <div className="pb-15">
          <img src="logo.svg" alt="ロゴ" />
        </div>
        
        <AnimatedTitle text={`SPACE BRIDGE\n& SOLUTION\nCOMPANY`} />

        <div className="text-8xl tracking-tighter pb-10">© Menō Ltd.</div>
        <div className="flex">
          <img className="-mt-6 mr-2" src="pin.svg" alt="ピン" />
          <div className="text-xl tracking-tighter leading-5">
            A. I. Nihombashi East 1F, 30-1 Nihonbashi-hakozaki-cho,<br />
            Chuo-ku, Tokyo, 103-0015, JAPAN
          </div>
        </div>
        <div className="text-xl text-right -mt-10 pb-16">
          宇宙と人を繋げて未来を創造する会社
        </div>
      </section>

      {/* ABOUT US セクション */}
      <section id="aboutus"className="flex flex-col md:flex-row px-8 pb-16 md:px-20 text-[#00B4C8] gap-8 md:gap-20 items-start">
        <h2 className="text-5xl font-bold whitespace-nowrap min-w-[200px] text-left leading-tight mr-12">
          ABOUT US
        </h2>
        <div className="text-2xl leading-loose text-justify">
          株式会社Menōは、「宇宙と人を繋げて未来を創造する」ことを使命に、衛星データの活用、宇宙環境試験の提供、地域社会の活性化（地方創生）を通じて、持続可能な社会の実現に向けて問題解決に取り組む会社です。
        </div>
      </section>

      {/* VISION セクション */}
      <section id="vision"className="flex flex-col md:flex-row px-8 md:px-20 text-[#00B4C8] gap-8 md:gap-20 items-start pb-30">
        <h2 className="text-5xl font-bold whitespace-nowrap min-w-[200px] text-left leading-tight mr-12">
          VISION
        </h2>
        <div className="text-2xl leading-loose text-justify">
          Menōという社名には、多様な色が層になって調和する瑪瑙（めのう）石に由来しており、宇宙から地球、地域社会から個人に至るまで、人々と世界が共に発展するための架け橋となり、より良い持続可能な未来を切り拓くという理念が込められています。
        </div>
      </section>

      <Service />
      <section id="works"><Works /></section>
      <News />
      <Contact />
      <Footer />
    </main>
  );
}
