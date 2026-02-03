export const BackToTop = () => {
  return (
    <div className="box-border caret-transparent">
      <button
        aria-label="Back to top"
        className="fixed items-center bg-transparent caret-transparent flex h-[60px] justify-center outline-offset-4 text-center w-[60px] z-[4] p-0 left-6 bottom-6 md:h-16 md:w-16 md:left-8 md:bottom-8 before:accent-auto before:bg-white before:shadow-[rgba(0,0,0,0.15)_0px_9px_32px_0px] before:box-border before:caret-transparent before:text-slate-600 before:block before:text-base before:not-italic before:normal-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:absolute before:text-center before:indent-[0px] before:normal-case before:translate-x-[-30px] before:translate-y-[-30px] before:visible before:w-full before:rounded-[50%] before:border-separate before:left-2/4 before:top-2/4 before:font-dm_sans before:md:-translate-x-8 before:md:-translate-y-8"
      >
        <img
          src="https://c.animaapp.com/ml2ohkbneWFNKS/assets/icon-22.svg"
          alt="Icon"
          className="relative box-border caret-transparent shrink-0 h-6 w-6 z-[1]"
        />
      </button>
    </div>
  );
};
