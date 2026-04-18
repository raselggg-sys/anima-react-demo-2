import { HeroContent } from "@/sections/Hero/components/HeroContent";
import { HeroImage } from "@/sections/Hero/components/HeroImage";

export const Hero = () => {
  return (
    <section className="box-border caret-transparent contents scroll-smooth overflow-hidden font-ui_sans_serif">
      <section className="box-border caret-transparent max-w-full w-[calc(100%_+_32px)] overflow-hidden mx-auto md:w-full">
        <div className="relative content-start bg-[url('')] bg-no-repeat bg-cover box-border caret-transparent gap-x-4 grid grid-cols-[minmax(0px,12fr)] grid-rows-[1fr] justify-start max-w-full gap-y-0 w-full bg-center -mt-5 mx-auto">
          <div className="relative box-border caret-transparent flex flex-col justify-start max-w-full">
            <div className="relative content-start bg-[url('')] bg-no-repeat bg-cover shadow-[rgba(0,0,0,0)_2.82843px_2.82843px_4px_0px] box-border caret-transparent gap-x-0 grid grid-cols-[minmax(0px,12fr)] grid-rows-[1fr] h-full justify-start max-w-full gap-y-0 w-full bg-center mx-auto md:shadow-[rgba(18,18,18,0.2)_2.82843px_2.82843px_4px_0px] md:grid-cols-[minmax(0px,7fr)_minmax(0px,5fr)] md:gap-y-4">
              <div className="relative box-border caret-transparent flex flex-col justify-start max-w-full order-1 md:order-none">
                <div className="relative content-start bg-[url('')] bg-no-repeat bg-cover box-border caret-transparent gap-x-4 grid grid-cols-[minmax(0px,12fr)] grid-rows-[1fr] h-full justify-start max-w-full gap-y-0 w-full bg-center mx-auto">
                  <div className="relative box-border caret-transparent flex flex-col justify-start max-w-full">
                    <div className="relative content-start bg-black bg-[url('')] bg-no-repeat bg-cover box-border caret-transparent gap-x-4 grid grid-cols-[minmax(0px,auto)] grid-rows-[1fr] h-full justify-start max-w-full gap-y-0 w-full bg-center mx-auto pt-2.5 pb-[30px] px-0 md:w-[1200px] md:pl-[120px] md:pr-4 md:py-0">
                      <HeroContent />
                    </div>
                  </div>
                </div>
              </div>
              <HeroImage />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};
