import Link from 'next/link';

const Service = () => {
  const titles = [
    'SATELLITE DATA<br/>PROCESSING SERVICE',
    'SPACE ENVIRONMENT<br/>TESTING',
  ];

  return (
    <section className="bg-[#00B4C8] text-white py-30 pb-70 px-15 flex justify-between">
      <h2 className="text-5xl font-bold">SERVICE</h2>

      <Link href="/service">
        <div className="text-[50px] leading-14">
          {titles.map((title, index) => {
            const lines = title.split('<br/>');

            return (
              <div
                key={index}
                className={`
                  group 
                  flex items-start space-x-6 
                  border-t border-white py-10 
                  transition-colors duration-300 
                  hover:bg-white 
                  ${index === 1 ? 'border-b' : ''}
                `}
              >
                {/* 番号 */}
                <span className="text-[50px] whitespace-nowrap group-hover:text-[#00B4C8] transition-colors duration-300 ml-10">
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
                  <div className="relative w-10 h-10 pl-50 mt-10">
                    {/* 通常状態の矢印 */}
                    <img
                      src="/arrow.svg"
                      alt="矢印"
                      className="absolute top-0 left-0 w-full h-full transition-opacity duration-300 opacity-100 group-hover:opacity-0" 
                    />
                    {/* ホバー時の矢印 */}
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
