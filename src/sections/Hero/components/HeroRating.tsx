export const HeroRating = () => {
  return (
    <div className="relative content-center box-border caret-transparent gap-x-0 grid grid-cols-[minmax(0px,auto)_minmax(0px,auto)_minmax(0px,auto)] grid-rows-[1fr] justify-center max-w-full gap-y-0 w-full mx-auto pr-0 pt-0 pb-4 md:content-start md:justify-start md:w-[1200px] md:pr-4 md:pt-4">
      <div className="relative box-border caret-transparent flex flex-col justify-center max-w-full w-20 md:justify-start md:w-auto">
        <div
          role="presentation"
          className="relative box-border caret-transparent shrink-0 max-w-full text-center"
        >
          <div className="box-border caret-transparent flex h-full justify-center max-w-full w-full">
            <picture className="box-border caret-transparent contents max-w-full">
              <img
                src="https://beyondalpha.co/cdn/shop/files/gempages_530032437942551346-d5f50cf6-0791-4b19-b5b0-39c4d11f2d55.svg?v=4360503636506347426"
                alt=""
                className="box-border caret-transparent max-w-full object-cover w-[90px] md:w-[100px]"
              />
            </picture>
          </div>
        </div>
      </div>
      <div className="relative box-border caret-transparent flex flex-col justify-center max-w-full md:justify-start">
        <div className="box-border caret-transparent max-w-full text-left ml-[5px] mr-2.5">
          <div className="box-border caret-transparent flex max-w-full">
            <div className="text-white text-[10.5px] font-bold bg-[url('')] bg-no-repeat bg-cover box-border caret-transparent leading-[18.9px] max-w-full text-center w-full overflow-hidden bg-center font-dm_sans md:text-sm md:leading-[19.6px] md:text-left">
              <p className="text-[10.5px] box-border caret-transparent leading-[18.9px] max-w-full text-center md:text-sm md:leading-[19.6px] md:text-left">
                Rated 4.7 Based on 913+ reviews
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative box-border caret-transparent flex flex-col justify-center max-w-full md:justify-start">
        <div
          role="presentation"
          className="relative box-border caret-transparent shrink-0 max-w-full text-left"
        >
          <div className="box-border caret-transparent flex h-full max-w-full w-full">
            <picture className="box-border caret-transparent contents max-w-full">
              <img
                src="https://beyondalpha.co/cdn/shop/files/gempages_530032437942551346-e72ad4f1-766a-464a-a6dd-d794bc788286.png?v=8398968939707602359"
                alt=""
                className="box-border caret-transparent max-w-full object-cover w-[58px] md:w-[68px]"
              />
            </picture>
          </div>
        </div>
      </div>
    </div>
  );
};
