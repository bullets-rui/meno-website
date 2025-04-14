import Link from 'next/link';

const Service = () => {
  const titles = [
    'SATELLITE DATA<br/>PROCESSING SERVICE',
    'SPACE ENVIRONMENT<br/>TESTING',
  ];

  return (
    <section className="bg-[#00B4C8] text-white py-15 sm:py-30 pb-20 sm:pb-70 px-5 sm:px-15 md:flex md:justify-between block">
      <h2 className="text-5xl font-bold mb-10 md:mb-0">SERVICE</h2>

      <Link href="/service" className="block w-full md:w-auto">
        <div className="text-[32px] sm:text-[40px] md:text-[50px] leading-tight">
          {titles.map((title, index) => {
            const lines = title.split('<br/>');

            return (
              <div
                key={index}
                className={`
                  group 
                  flex flex-col md:flex-row md:items-start md:space-x-6 
                  border-t border-white py-6 md:py-10 
                  transition-colors duration-300 
                  hover:bg-white 
                  ${index === 1 ? 'border-b' : ''}
                `}
              >
                {/* 番号 */}
                <span className="text-[32px] sm:text-[40px] md:text-[50px] whitespace-nowrap group-hover:text-[#00B4C8] transition-colors duration-300 ml-0 md:ml-10 mb-2 md:mb-0">
                  {`0${index + 1}`}
                </span>

                {/* テキスト + アイコン */}
                <div className="flex justify-between w-full items-start text-white group-hover:text-[#00B4C8] transition-colors duration-300 cursor-pointer">
                  <div className="leading-[1.2]">
                    {lines.map((line, i) => (
                      <div key={i}>{line}</div>
                    ))}
                  </div>

                  {/* 通常時とホバー時の矢印を切り替える */}
                    <div className="relative w-6 h-6 md:w-10 md:h-10 pl-16 md:pl-40 mt-6 md:mt-10">
                      <img
                        src="/arrow.svg"
                        alt="矢印"
                        className="absolute top-0 left-0 w-full h-full transition-opacity duration-300 opacity-100 group-hover:opacity-0"
                      />
                      <img
                        src="/arrow_after.svg"
                        alt="矢印（ホバー時）"
                        className="absolute top-0 left-0 w-full h-full transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                      />
                    </div>
                </div>
              </div>
            );
          })}
        </div>
      </Link>
    </section>
  );
};

export default Service;
