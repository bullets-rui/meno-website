type Props = {
  text: string; // 改行したいところに \n を含めて渡す
  className?: string;
};

const AnimatedTitle = ({ text }: { text: string }) => {
  const lines = text.split('\n');

  return (
    <div className="text-[clamp(4rem,10vw,160px)] font-semibold tracking-[-0.07em] leading-[0.9] pb-15 pt-1 overflow-visible">
      {lines.map((line, lineIndex) => (
        <div
          key={lineIndex}
          className="line-animate"
          style={{
            animationDelay: `${lineIndex * 0.05}s`,
            display: 'block',
          }}
        >
          {line}
        </div>
      ))}
    </div>
  );
};


export default AnimatedTitle;