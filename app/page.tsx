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
      <section className="text-[#00B4C8] px-4 sm:px-8 md:px-16 pt-10 sm:pt-20 pb-16 sm:pb-24 space-y-6">
        <div className="pb-8 sm:pb-12">
          <img src="logo.svg" alt="ロゴ" className="w-28 sm:w-40 md:w-64" />
        </div>

        <div className="max-w-full overflow-hidden">
          <AnimatedTitle text={`SPACE BRIDGE\n& SOLUTION\nCOMPANY`} />
        </div>

        <div className="text-5xl sm:text-[100px] tracking-tighter pb-50 sm:pb-10">© Menō Ltd.</div>

        {/* 住所 & ピン + キャッチコピー */}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:gap-4">
          {/* ピン + 住所 */}
          <div className="flex items-start sm:items-center text-[#00B4C8]">
            <img
              className="w-5 h-5 sm:w-6 sm:h-6 mt-1 sm:mt-0 mr-2"
              src="pin.svg"
              alt="ピン"
            />
            <div className="text-xs sm:text-sm md:text-base leading-[1] tracking-tight break-words mt-1 sm:mt-0">
              A. I. Nihombashi East 1F, 30-1 Nihonbashi-hakozaki-cho, Chuo-ku, Tokyo, 103-0015, JAPAN
            </div>
          </div>

          {/* キャッチコピー */}
          <div className="text-xs sm:text-sm md:text-base leading-snug text-left mt-2 sm:mt-0 sm:ml-auto">
            宇宙と人を繋げて未来を創造する会社
          </div>
        </div>


      </section>

      {/* ABOUT US セクション */}
      <section
        id="aboutus"
        className="flex flex-col md:flex-row px-4 sm:px-8 md:px-16 pb-12 sm:pb-20 md:pb-32 text-[#00B4C8] gap-6 md:gap-20 items-start"
      >
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold min-w-[150px] md:min-w-[200px] leading-tight">
          ABOUT US
        </h2>
        <div className="text-sm sm:text-lg md:text-2xl leading-relaxed text-justify">
          株式会社Menōは、「宇宙と人を繋げて未来を創造する」ことを使命に、衛星データの活用、宇宙環境試験の提供、地域社会の活性化（地方創生）を通じて、持続可能な社会の実現に向けて問題解決に取り組む会社です。
        </div>
      </section>

      {/* VISION セクション */}
      <section
        id="vision"
        className="flex flex-col md:flex-row px-4 sm:px-8 md:px-16 text-[#00B4C8] gap-6 md:gap-20 items-start pb-16 sm:pb-24 md:pb-32"
      >
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold min-w-[150px] md:min-w-[200px] leading-tight">
          VISION
        </h2>
        <div className="text-sm sm:text-lg md:text-2xl leading-relaxed text-justify">
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
