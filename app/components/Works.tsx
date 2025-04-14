const Works = () => (
  <section className="px-5 sm:px-10 md:px-15 py-20 sm:py-30">
    <h2 className="text-[#00B4C8] text-5xl sm:text-4xl md:text-[50px] font-bold">
      WORKS
    </h2>

    {/* grid-cols-4 をレスポンシブ化 */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 sm:mt-15">
      <div>
        <img
          src="/works_001.png"
          alt="jaxa Earth API"
          className="w-full h-auto object-cover"
        />
        <h3 className="text-[#00B4C8] text-base sm:text-lg md:text-xl font-bold mt-3 ml-2 sm:ml-3">
          JAXA Earth API 開発・運用
        </h3>
        <p className="text-[#00B4C8] text-sm sm:text-base ml-2 sm:ml-3">
          取引先企業：JAXA（宇宙航空研究開発機構）
        </p>
      </div>
    </div>
  </section>
);

export default Works;
