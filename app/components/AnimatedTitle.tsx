type Props = {
  text: string; // 改行したいところに \n を含めて渡す
  className?: string;
};

const AnimatedTitle = ({ text, className = '' }: Props) => {
  const lines = text.split('\n');

  return (
    <div
      className={`text-[8vw] font-semibold tracking-[-0.07em] leading-[0.9] pb-20 text-[#00B4C8] ${className}`}
    >
      {lines.map((line, i) => (
        <div
          key={i}
          className="line-animate"
          style={{ animationDelay: `${i * 0.05}s` }}>
          {line}
        </div>
      ))}
    </div>
  );
};

export default AnimatedTitle;