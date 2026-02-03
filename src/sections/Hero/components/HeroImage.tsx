export const HeroImage = () => {
  return (
    <div className="relative box-border caret-transparent flex flex-col justify-start max-w-full">
      <div className="relative content-start box-border caret-transparent gap-x-4 flex flex-col grid-cols-[minmax(0px,auto)] grid-rows-[1fr] h-full justify-start max-w-full gap-y-0 w-full mx-auto md:grid md:flex-row">
        <div className="relative box-border caret-transparent flex flex-col justify-start max-w-full">
          <div
            role="presentation"
            className="relative box-border caret-transparent basis-[0%] grow h-full max-w-full text-center"
          >
            <div className="box-border caret-transparent flex h-full justify-center max-w-full w-full">
              <picture className="box-border caret-transparent contents max-w-full">
                <img
                  src="https://beyondalpha.co/cdn/shop/files/IMG_1762_1.png?v=2642822880239187464"
                  alt=""
                  className="box-border caret-transparent h-[640px] max-w-full min-h-[400px] object-cover w-full md:h-full md:min-h-[auto]"
                />
              </picture>
            </div>
          </div>
          <div className="bg-[url('')] bg-no-repeat bg-cover box-border caret-transparent max-w-full text-left bg-center">
            <div className="box-border caret-transparent max-w-full">
              <div className="absolute bg-[linear-gradient(to_top,rgba(0,0,0,0.95),rgba(0,0,0,0))] box-border caret-transparent h-11 max-w-full w-full left-auto top-auto bottom-0 md:bg-[linear-gradient(to_right,rgba(0,0,0,0.95),rgba(0,0,0,0))] md:h-full md:left-[-3px] md:w-[170px] md:top-0 md:bottom-auto"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[url('')] bg-no-repeat bg-cover box-border caret-transparent max-w-full text-left bg-center">
        <div className="box-border caret-transparent max-w-full">
          <div className="absolute bg-white shadow-[rgba(0,0,0,0.05)_0px_2px_6px_0px] box-border caret-transparent max-w-xl opacity-90 text-center z-[9] mx-auto p-2.5 rounded-[10px] bottom-4 inset-x-6 font-dm_sans md:px-5 md:left-auto md:right-[52px]">
            <div className="items-center box-border caret-transparent gap-x-3 flex justify-center max-w-full gap-y-3 mb-[3px] md:mb-2.5">
              <div className="box-border caret-transparent max-w-full w-20 md:w-auto">
                <img
                  src="https://c.animaapp.com/ml2ohkbneWFNKS/assets/icon-8.svg"
                  alt="Icon"
                  className="box-border caret-transparent shrink-0 h-[18px] w-[100px] md:h-[25px] md:w-[141px]"
                />
              </div>
              <div className="box-border caret-transparent max-w-full">
                <img
                  src="https://c.animaapp.com/ml2ohkbneWFNKS/assets/icon-9.svg"
                  alt="Icon"
                  className="box-border caret-transparent shrink-0 h-6 w-[106px] md:w-[137px]"
                />
              </div>
            </div>
            <h3 className="text-black text-xs box-border caret-transparent leading-[22px] max-w-full md:text-base">
              <strong className="text-xs font-bold box-border caret-transparent max-w-full md:text-base">
                Estrogen Overload is REAL
              </strong>
            </h3>
            <p className="text-black text-[11px] box-border caret-transparent leading-[16.5px] max-w-full md:text-xs md:leading-[18px]">
              “EstroControl made me realize just how much excess estrogen was
              affecting me. I feel more masculine and back to my confident self.
              Highly recommended!”
            </p>
            <p className="text-black text-xs box-border caret-transparent leading-[18px] max-w-full md:text-base md:leading-6">
              <strong className="text-xs font-bold box-border caret-transparent leading-[18px] max-w-full md:text-base md:leading-6">
                — Paul R.
              </strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
