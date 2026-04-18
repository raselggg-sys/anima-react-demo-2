export const StickyCartButton = () => {
  return (
    <div className="box-border caret-transparent">
      <div className="box-border caret-transparent flex">
        <button
          aria-label="Cart"
          className="fixed items-center bg-transparent caret-transparent hidden h-[60px] justify-center opacity-0 outline-offset-8 pointer-events-none text-center w-[60px] z-[1111] p-0 right-6 top-6 md:flex md:h-16 md:opacity-100 md:w-16 md:right-8 md:top-8 before:accent-auto before:bg-white before:shadow-[rgba(0,0,0,0.15)_0px_9px_32px_0px] before:box-border before:caret-transparent before:text-slate-600 before:block before:text-base before:not-italic before:normal-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:pointer-events-none before:absolute before:text-center before:indent-[0px] before:normal-case before:transform-none before:visible before:w-full before:rounded-tr-[0.0625%] before:rounded-b-[50%] before:rounded-l-[50%] before:border-separate before:left-2/4 before:top-2/4 before:font-dm_sans before:md:-translate-x-8 before:md:-translate-y-8"
        >
          <div className="relative box-border caret-transparent min-h-0 min-w-0 pointer-events-none md:min-h-[auto] md:min-w-[auto]">
            <img
              src="https://c.animaapp.com/ml2ohkbneWFNKS/assets/icon-2.svg"
              alt="Icon"
              className="relative box-border caret-transparent shrink-0 h-6 pointer-events-none w-6 z-[1]"
            />
            <div className="box-border caret-transparent pointer-events-none">
              <div className="absolute text-stone-700 text-xs font-bold items-center bg-yellow-300 box-border caret-transparent flex h-4 justify-center left-[calc(100%_-_11px)] leading-4 min-w-4 pointer-events-none top-[-5px] z-auto px-1 rounded-[50%] md:z-[1]">
                <span className="box-border caret-transparent block min-h-0 min-w-0 pointer-events-none md:min-h-[auto] md:min-w-[auto]">
                  1
                </span>
              </div>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};
