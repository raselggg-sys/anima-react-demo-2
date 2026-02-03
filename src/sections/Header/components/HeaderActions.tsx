export const HeaderActions = () => {
  return (
    <div className="items-center box-border caret-transparent flex col-end-[icons-right] col-start-[icons-right] row-end-[icons-right] row-start-[icons-right] justify-self-end z-[2] -mr-2 md:justify-self-end md:-mr-3">
      <div className="box-border caret-transparent hidden min-h-0 min-w-0 mr-5 md:flex md:min-h-[auto] md:min-w-[auto]">
        <a
          href="https://beyondalpha.co/pages/support"
          className="font-medium items-center box-border caret-transparent flex min-h-0 min-w-0 px-1 py-0 md:min-h-[auto] md:min-w-[auto] md:p-4"
        >
          <span className="relative text-black text-sm box-border caret-transparent block leading-[16.8px] min-h-0 min-w-0 overflow-hidden md:min-h-[auto] md:min-w-[auto] before:accent-auto before:bg-slate-600 before:box-border before:caret-transparent before:text-black before:block before:text-sm before:not-italic before:normal-nums before:font-medium before:h-px before:tracking-[normal] before:leading-[16.8px] before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-start before:indent-[0px] before:normal-case before:transform-none before:visible before:w-full before:overflow-hidden before:border-separate before:left-0 before:bottom-0 before:font-poppins before:md:translate-x-[-49.5373px]">
            Support
          </span>
        </a>
        <a
          href="https://beyondalpha.co/pages/refer-a-friend"
          className="font-medium items-center box-border caret-transparent flex min-h-0 min-w-0 px-1 py-0 md:min-h-[auto] md:min-w-[auto] md:p-4"
        >
          <span className="relative text-black text-sm box-border caret-transparent block leading-[16.8px] min-h-0 min-w-0 overflow-hidden md:min-h-[auto] md:min-w-[auto] before:accent-auto before:bg-slate-600 before:box-border before:caret-transparent before:text-black before:block before:text-sm before:not-italic before:normal-nums before:font-medium before:h-px before:tracking-[normal] before:leading-[16.8px] before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-start before:indent-[0px] before:normal-case before:transform-none before:visible before:w-full before:overflow-hidden before:border-separate before:left-0 before:bottom-0 before:font-poppins before:md:translate-x-[-55.8025px]">
            Rewards
          </span>
        </a>
      </div>
      <div className="[align-items:normal] box-border caret-transparent gap-x-[normal] hidden h-auto justify-normal min-h-0 min-w-0 mr-0 md:items-center md:gap-x-4 md:flex md:h-full md:justify-end md:min-h-[auto] md:min-w-[auto] md:mr-3">
        <div className="box-border caret-transparent min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
          <div className="text-sm font-medium items-center box-border caret-transparent gap-x-0.5 flex leading-[22px] font-dm_sans">
            USD
            <img
              src="https://c.animaapp.com/ml2ohkbneWFNKS/assets/icon-3.svg"
              alt="Icon"
              className="box-border caret-transparent shrink-0 h-[22px] transform-none w-[22px] md:rotate-90"
            />
          </div>
        </div>
      </div>
      <div className="box-border caret-transparent flex">
        <button
          aria-label="Search drawer"
          className="relative bg-transparent caret-transparent block text-center w-[38px] px-2 py-2.5 md:w-12 md:px-3"
        >
          <img
            src="https://c.animaapp.com/ml2ohkbneWFNKS/assets/icon-4.svg"
            alt="Icon"
            className="box-border caret-transparent shrink-0 h-6 w-6"
          />
        </button>
      </div>
      <a
        href="https://beyondalpha.co/pages/estrocontrol-detox#rivo"
        aria-label="Account page"
        className="relative box-border caret-transparent hidden min-h-0 min-w-0 underline w-[38px] px-2 py-2.5 md:block md:min-h-[auto] md:min-w-[auto] md:w-12 md:px-3"
      >
        <img
          src="https://c.animaapp.com/ml2ohkbneWFNKS/assets/icon-5.svg"
          alt="Icon"
          className="box-border caret-transparent shrink-0 h-6 w-6"
        />
      </a>
      <div className="box-border caret-transparent flex">
        <button
          aria-label="Cart"
          className="relative bg-transparent caret-transparent block text-center w-[38px] px-2 py-2.5 md:w-12 md:px-3"
        >
          <div className="relative box-border caret-transparent">
            <img
              src="https://c.animaapp.com/ml2ohkbneWFNKS/assets/icon-6.svg"
              alt="Icon"
              className="box-border caret-transparent shrink-0 h-6 w-6"
            />
            <div className="box-border caret-transparent">
              <div className="absolute text-stone-700 text-xs font-bold items-center bg-yellow-300 box-border caret-transparent flex h-4 justify-center left-[calc(100%_-_11px)] leading-4 min-w-4 top-[-5px] px-1 rounded-[50%]">
                <span className="box-border caret-transparent block">1</span>
              </div>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};
