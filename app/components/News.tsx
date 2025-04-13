import Link from 'next/link';

const News = () => (
  <section className="px-15 pb-30">
    <div className="flex items-center">
      <h2 className="text-[#00B4C8] text-[50px] font-bold">NEWS</h2>

      {/* ホバーで画像切り替え */}
      <Link href="/news">
        <div className="relative group w-[150px] h-auto cursor-pointer mb-3 ml-10">
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

    <ul className="mt-6 mb-12 space-y-2">
      {Array.from({ length: 4 }).map((_, index) => (
        <li
          key={index}
          className="text-base flex border-b border-dotted border-[#00B4C8] py-4"
        >
          <span className="text-[#CCCCCC] pr-5">2025.00.00</span>
          <span className="text-[#00B4C8] font-bold">
            ニュースタイトルが入るニュースタイトルが入る
          </span>
        </li>
      ))}
    </ul>
  </section>
);

export default News;
