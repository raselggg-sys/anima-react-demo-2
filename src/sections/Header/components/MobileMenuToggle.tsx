export const MobileMenuToggle = () => {
  return (
    <div className="items-center box-border caret-transparent flex col-end-[icons-left] col-start-[icons-left] row-end-[icons-left] row-start-[icons-left] min-h-[auto] min-w-[auto] z-[2] md:hidden md:min-h-0 md:min-w-0">
      <div className="box-border caret-transparent block col-end-[hamburger] col-start-[hamburger] row-end-[hamburger] row-start-[hamburger] min-h-[auto] min-w-[auto] -ml-2 md:min-h-0 md:min-w-0">
        <button
          aria-label="Menu"
          className="bg-transparent caret-transparent flex flex-col gap-y-1.5 text-center w-10 p-2"
        >
          <div className="bg-slate-600 box-border caret-transparent h-0.5 min-h-[auto] min-w-[auto] w-5 md:min-h-0 md:min-w-0"></div>
          <div className="bg-slate-600 box-border caret-transparent h-0.5 min-h-[auto] min-w-[auto] w-6 md:min-h-0 md:min-w-0"></div>
          <div className="bg-slate-600 box-border caret-transparent h-0.5 min-h-[auto] min-w-[auto] w-3.5 md:min-h-0 md:min-w-0"></div>
        </button>
      </div>
      <a
        href="https://beyondalpha.co/pages/estrocontrol-detox#rivo"
        aria-label="Account page"
        className="relative box-border caret-transparent block min-h-[auto] min-w-[auto] underline w-[38px] px-2 py-2.5 md:hidden md:min-h-0 md:min-w-0 md:w-12 md:px-3"
      >
        <img
          src="https://c.animaapp.com/ml2ohkbneWFNKS/assets/icon-5.svg"
          alt="Icon"
          className="box-border caret-transparent shrink-0 h-6 w-6"
        />
      </a>
    </div>
  );
};
