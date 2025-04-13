import Header from '../components/Header'
import AnimatedTitle from '../components/AnimatedTitle';
import Contact from '../components/Contact'
import Footer from '../components/Footer';

export default function About() {
  return (
    <main className="opacity-0 animate-fade-in duration-500">
      <Header />

      {/* Hero セクション */}
      <section className="text-[#00B4C8] px-15 pt-15 pb-30 space-y-4">
        <div className="pb-15">
          <img src="logo.svg" alt="ロゴ" />
        </div>

        <AnimatedTitle text={`ABOUT US`} />
        
        <div className="text-3xl tracking-tighter pb-10 w-8/12 leading-12">
          株式会社Menōは、「宇宙と人を繋げて未来を創造する」ことを使命に、衛星データの活用、宇宙環境試験の提供、地域社会の活性化〈地方創生〉を通じて、持続可能な社会の実現に向けて問題解決に取り組む会社です。
        </div>
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

    <section className="px-15 py-10 text-[#00B4C8] w-max leading-10">
        <div className="grid grid-cols-2 gap-y-10 text-[16px] divide-y divide-[#00B4C8] mb-10">
    {/* 会社名 */}
    <div className="font-semibold ">会社名</div>
    <div className='pb-1'>メノー株式会社 (Menō Ltd.)</div>

    {/* 住所 */}
    <div className="font-semibold">住所</div>
    <div className='pb-1'>
      〒103-0015 東京都中央区日本橋箱崎町30-1<br />
      A.i.Nihombashi EAST 1階
    </div>

    {/* 連絡先 */}
    <div className="font-semibold">連絡先</div>
    <div className='pb-1'>contact@meno.ltd</div>

    {/* 資本金 */}
    <div className="font-semibold">資本金</div>
    <div className='pb-1'>100万円</div>

    {/* 創業 */}
    <div className="font-semibold">創業</div>
    <div className='pb-1'>2024年（令和6年）8月26日</div>

    {/* 役員 */}
    <div className="font-semibold">役員</div>
    <div className='pb-1'>
      ・代表取締役　根本 雅人<br />
      ・代表取締役　緒方 一紀
    </div>

    {/* 業務内容 */}
    <div className="font-semibold">業務内容</div>
    <div className='pb-1'>
      ・人工衛星に関連する事業<br />
      ・ロボティクスに関連する事業<br />
      ・情報通信に関する事業<br />
      ・地方創生に関連する事業<br />
      ・その他関連事業
    </div>

    {/* 取引先組織 */}
    <div className="font-semibold">取引先組織</div>
    <div className='pb-1'>
      ・宇宙航空研究開発機構 (JAXA)<br />
      ・ロ横浜国立大学<br />
    </div>

    {/* 参加コミュニティ組織 */}
    <div className="font-semibold">参加コミュニティ< br/>組織</div>
    <div className='flex pb-3'>
      <img src="ablab_logo.svg" alt="ABラボロゴ"/>
      <img src="cross_u_logo.svg" alt="クロスUロゴ"/>
    </div>

  {/* 空div←これがないと線が途切れるから消さない */}
    <div className="font-semibold"></div>

  </div>

        {/* Googleマップ埋め込み */}
        <span className="text-[20px] font-semibold">アクセス</span>
            <div className='pt-3 pb-16'>
                <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.870226791739!2d139.7853933120121!3d35.68019727247327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601889ce41034f67%3A0xc0e57e8c052c1390!2zU1RBWVVQ77yI44K544OG44Kk44Ki44OD44OX77yJ5pel5pys5qmL566x5bSO!5e0!3m2!1sja!2sjp!4v1744393197450!5m2!1sja!2sjp"
                width="1000"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
        </section>
        
        <Contact />
        <Footer />
    </main>
  );
}
