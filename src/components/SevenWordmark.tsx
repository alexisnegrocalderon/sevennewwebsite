export default function SevenWordmark({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center leading-none ${className}`}>
      <span
        className="text-[17px] font-black italic tracking-tighter text-white"
        style={{ transform: "skewX(-8deg)" }}
      >
        SEVEN
      </span>
      <span className="mt-0.5 text-[6px] font-medium tracking-[0.4em] text-white">
        FITNESS CLUB
      </span>
    </div>
  );
}
