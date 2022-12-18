export function ErrorButton({ text }) {
    return (
      <div className="w-full bg-red-50 border border-red-500  p-3.5 rounded flex items-start gap-3 ">
        <div className="w-[20px]">
          <img src="/imgs/error.svg" alt="error" className="w-full" />
        </div>
        <span className="text-red-500 font-semibold mt-[-3px]">{text}</span>
      </div>
    );
  }
  