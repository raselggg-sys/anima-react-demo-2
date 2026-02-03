export const AnnouncementBar = () => {
  return (
    <section className="relative bg-white box-border caret-transparent z-[4] overflow-hidden md:z-[2]">
      <div className="bg-white box-border caret-transparent max-w-[calc(100%_+_40px)] w-full mx-auto rounded-none md:max-w-[min(100%_+_40px,100%_+_0px)] md:rounded-2xl">
        <div className="box-border caret-transparent max-w-[calc(100%_+_40px)] w-full mx-auto">
          <div className="items-center bg-orange-300 box-border caret-transparent gap-x-[normal] flex justify-center min-h-[52px] px-5 md:gap-x-10 md:grid md:px-10">
            <div className="items-center box-border caret-transparent hidden h-full min-h-0 min-w-0 md:flex md:min-h-[auto] md:min-w-[auto]"></div>
            <div className="box-border caret-transparent block justify-normal max-w-full w-auto md:flex md:justify-center md:w-full">
              <div className="relative items-center box-border caret-transparent gap-x-[7px] flex max-w-none min-h-0 min-w-0 w-full py-[9px] md:gap-x-5 md:max-w-[880px] md:min-h-[auto] md:min-w-[auto]">
                <div className="relative box-border caret-transparent w-full overflow-hidden">
                  <div className="items-center box-border caret-transparent flex">
                    <div className="relative box-border caret-transparent flex justify-center min-w-full">
                      <div className="text-sm font-medium items-center box-border caret-transparent gap-x-2 flex leading-[22px] text-center">
                        <div className="box-border caret-transparent overflow-hidden">
                          🔥 By the health experts who transformed the lives of
                          2.4 mln people 🚚 FREE SHIPPING on orders over $99
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="items-center box-border caret-transparent hidden h-full justify-end min-h-0 min-w-0 md:flex md:min-h-[auto] md:min-w-[auto]"></div>
          </div>
        </div>
      </div>
      <div className="bg-white box-border caret-transparent hidden max-w-[calc(100%_+_40px)] w-full mx-auto rounded-none md:max-w-[min(100%_+_40px,100%_+_0px)] md:rounded-2xl">
        <div className="box-border caret-transparent max-w-[calc(100%_+_40px)] w-full mx-auto">
          <div className="items-center bg-black box-border caret-transparent gap-x-[normal] flex justify-center min-h-[52px] px-5 md:gap-x-10 md:grid md:px-10">
            <div className="box-border caret-transparent block justify-normal max-w-full w-auto md:flex md:justify-center md:w-full">
              <div className="relative items-center box-border caret-transparent gap-x-[7px] flex max-w-none w-full py-[9px] md:gap-x-5 md:max-w-[880px]">
                <div className="relative box-border caret-transparent w-full overflow-hidden">
                  <div className="items-center box-border caret-transparent flex">
                    <div className="relative box-border caret-transparent flex justify-center min-w-full">
                      <div className="text-sm font-medium items-center box-border caret-transparent gap-x-2 flex leading-[22px] text-center">
                        <div className="text-amber-500 box-border caret-transparent overflow-hidden">
                          🎃{" "}
                          <strong className="font-bold box-border caret-transparent">
                            Halloween Sale:
                          </strong>
                          Use The Code{" "}
                          <strong className="text-white font-bold box-border caret-transparent">
                            TREAT
                          </strong>
                          at Checkout to Unlock Your Discount
                          <span className="box-border caret-transparent">
                            ( For orders above $100 )
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
