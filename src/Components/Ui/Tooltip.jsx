const Tooltip = ({ children, text }) => {
  return (
    <div className="group relative flex items-center justify-center">
      <div className="absolute invisible opacity-0 group-hover:visible group-hover:opacity-100 min-w-max -top-9 bg-slate-800 text-sm text-white px-2 py-1 rounded-lg whitespace-nowrap duration-150 transition-all left-1/2 -translate-x-1/2 z-10">
        {text}
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Tooltip;
