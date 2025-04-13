import Header from '../components/Header'
import AnimatedTitle from '../components/AnimatedTitle';
import Contact from '../components/Contact'
import Footer from '../components/Footer';

export default function Service() {
  return (
    <main className="opacity-0 animate-fade-in duration-500">
      <Header />

      <section className="text-[#00B4C8] px-15 pt-15 pb-30 space-y-4">
        <div className="pb-15">
          <img src="logo.svg" alt="ロゴ" />
        </div>

        <AnimatedTitle text={`SERVICE`} />

        <div className="flex items-start space-x-10">

 
          <span className="text-[175px] font-semibold transform rotate-90 mt-[-1.0rem] ml-[-8rem] leading-none whitespace-nowrap">
          01
          </span>

          {/* サービス名と説明 */}
          <div>
            <h3 className="text-[90px] font-semibold tracking-tight leading-20 pb-10">
            SATELLITE DATA< br/>PROCESSING SERVICE
            </h3>
            <ul className="text-[20px] font-bold leading-10 pb-30">
                <li>・可視リモートセンシングデータの処理</li>
                <li>・アルゴリズム</li>
                <li>・アプリケーション開発</li>
            </ul>
          </div>

        </div>

        <div className="flex items-start space-x-9 ml-[-0.5rem] pb-16">

          <span className="text-[170px] font-semibold transform rotate-90 + mt-[-1.5rem] ml-[-8rem] leading-none tracking-[-0.1em] whitespace-nowrap">
            02
          </span>

          {/* サービス名と説明 */}
          <div>
            <h3 className="text-[90px] font-semibold tracking-tight leading-20 pb-10">
            SPACE ENVIRONMENT< br/>TESTING
            </h3>
            <ul className="text-[20px] font-bold leading-10">
                <li>・宇宙環境試験サポート</li>
                <li>・試験方法提案</li>
                <li>・試験治具等製作</li>
            </ul>
          </div>

        </div>
      </section>

      <Contact />
      <Footer />
    </main>
  );
}


