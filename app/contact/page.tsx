import Header from '../components/Header'
import AnimatedTitle from '../components/AnimatedTitle';
import Footer_v2 from '../components/Footer_v2';

export default function News() {
  return (
    <main className="opacity-0 animate-fade-in duration-500">
      <Header />

      <section className="text-[#00B4C8] px-15 pt-15 pb-30 space-y-4">
        <div className="pb-15">
          <img src="logo.svg" alt="ロゴ" />
        </div>

        <AnimatedTitle text={`CONTACT`} />

   {/* フォーム全体を囲むボックス */}
   <div className="border border-[#00B4C8] p-6 md:p-10 w-full max-w-4xl mx-auto space-y-6 text-[14px]">
          {/* ご相談内容（チェックボックス） */}
          <div className="flex items-center flex-wrap gap-x-10">
            <span className="text-[14px] font-bold bg-[#00B4C8] text-white px-3 pt-2 mr-3">必須</span>
            <label><input type="checkbox" className="mr-1" />ご相談</label>
            <label><input type="checkbox" className="mr-1" />お見積り</label>
            <label><input type="checkbox" className="mr-1" />お問い合わせ</label>
            <label><input type="checkbox" className="mr-1" />その他</label>
          </div>

          {/* お名前 */}
          <div>
            <label className="flex items-center font-bold">
              <span className="text-[14px] font-bold bg-[#00B4C8] text-white px-3 pt-2 mr-3">必須</span><p className='text-[16px] mt-0.5'>お名前</p>
            </label>
            <input
              type="text" placeholder="あなたのお名前" className="w-full border border-[#00B4C8] p-2 text-black"/>
          </div>

          {/* メールアドレス */}
          <div>
            <label className="flex items-center font-bold">
              <span className="text-[14px] font-bold bg-[#00B4C8] text-white px-3 pt-2 mr-3">必須</span><p className='text-[16px] mt-0.5'>メールアドレス</p>
            </label>
            <input type="email" placeholder="xxxxx@xx.com" className="w-full border border-[#00B4C8] p-2 text-black"/>
          </div>

          {/* 会社名 */}
          <div>
            <label className="flex items-center font-bold">
              <span className="text-[14px] font-bold  bg-[#CCCCCC] text-white px-3 pt-2 mr-3">任意</span><p className='text-[16px] mt-0.5'>会社名</p>
            </label>
            <input
              type="text"
              placeholder="○○○株式会社"
              className="w-full border border-[#00B4C8] p-2 text-black"
            />
          </div>

          {/* 電話番号 */}
          <div>
            <label className="flex items-center font-bold">
              <span className="text-[14px] font-bold  bg-[#CCCCCC] text-white px-3 pt-2 mr-3">任意</span><p className='text-[16px] mt-0.5'>お電話番号</p>
            </label>
            <input
              type="tel"
              placeholder="000-0000-0000"
              className="w-full border border-[#00B4C8] p-2 text-black"
            />
          </div>

          {/* ご住所 */}
          <div>
            <label className="flex items-center font-bold">
              <span className="text-[14px] font-bold  bg-[#CCCCCC] text-white px-3 pt-2 mr-3">任意</span><p className='text-[16px] mt-0.5'>ご住所</p>
            </label>
            <input
              type="text"
              placeholder="〒123-4567 東京都中央区箱崎町12-345 マンション 109"
              className="w-full border border-[#00B4C8] p-2 text-black"
            />
          </div>

          {/* メッセージ本文 */}
          <div>
            <label className="flex items-center font-bold">
              <span className="text-[14px] font-bold bg-[#00B4C8] text-white px-3 pt-2 mr-3">必須</span><p className='text-[16px] mt-0.5'>メッセージ本文</p>
            </label>
            <textarea
              rows={6}
              placeholder="お問い合わせ内容をご記入ください"
              className="w-full border border-[#00B4C8] p-2 text-black"
            />
          </div>
        </div>

        {/* 送信ボタン */}
        <div className="text-center pt-10">
          <button type="submit"className="text-[20px] bg-[#00B4C8] text-white font-bold py-2 px-10 hover:bg-[#009aae] transition">
            <p className='mt-1'>送信する</p>
          </button>
        </div>

      </section>

      <Footer_v2 />
    </main>
  );
}


