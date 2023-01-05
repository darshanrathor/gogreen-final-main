export function Paragraph({ extra, height, children }) {
  const extratext = extra || "";
  return (
    <p
      style={{ lineHeight: 1.6 }}
      className={`${extratext} text-lg md:text-[19px]  text-zinc-700 `}
    >
      {children}
    </p>
  );
}

export function Heading({ style, height, children, size }) {
  const lineHeight = height || "leading-[1.2]";
  const size1 = size || "md:text-6xl text-5xl";
  return (
    <h2
      style={{ lineHeight: 1.2 }}
      className={`${style} ${lineHeight} ${size1} font-bold `}
    >
      {children}
    </h2>
  );
}
