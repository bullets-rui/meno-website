import Link from 'next/link';

const News = () => (
  <section className="px-5 sm:px-10 md:px-15 pb-20 sm:pb-30">
    {/* モバイル：NEWSとアイコンを1行・両端揃え / デスクトップ：横並び */}
    <div className="flex flex-row justify-between sm:justify-start sm:items-center sm:gap-6">
      <h2 className="text-[#00B4C8] text-5xl sm:text-4xl md:text-[50px] font-bold">
        NEWS
      </h2>

      {/* ホバーで画像切り替え */}
      <Link href="/news" className="sm:ml-10">
        <div className="relative group w-[100px] sm:w-[150px] h-auto cursor-pointer mt-1 sm:mb-5">
          {/* 通常画像 */}
          <img
            src="/news-list_before.svg"
            alt="ALL NEWSボタン"
            className="w-full h-auto transition-opacity duration-300 opacity-100 group-hover:opacity-0"
          />
          {/* ホバー画像 */}
          <img
            src="/news-list_after.svg"
            alt="ALL NEWSボタン（ホバー）"
            className="w-full h-auto absolute top-0 left-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
          />
        </div>
      </Link>
    </div>

    {/* ニュースリスト */}
    <ul className="mt-6 mb-12 space-y-2">
      {Array.from({ length: 4 }).map((_, index) => (
        <li
          key={index}
          className="text-sm sm:text-base flex border-b border-dotted border-[#00B4C8] py-4"
        >
          <span className="text-[#CCCCCC] pr-2 sm:pr-5">2025.00.00</span>
          <span className="text-[#00B4C8] font-bold">
            ニュースタイトルが入るニュースタイトルが入る
          </span>
        </li>
      ))}
    </ul>
  </section>
);

export default News;
