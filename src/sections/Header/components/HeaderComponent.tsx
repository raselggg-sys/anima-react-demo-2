import { Logo } from "@/components/Logo";
import { DesktopNav } from "@/sections/Header/components/DesktopNav";
import { HeaderActions } from "@/sections/Header/components/HeaderActions";
import { MobileMenuToggle } from "@/sections/Header/components/MobileMenuToggle";

export const HeaderComponent = () => {
  return (
    <div className="relative items-center bg-white border-l-slate-600 border-r-slate-600 border-t-slate-600 box-border caret-transparent flex max-w-none mx-0 rounded-none border-b-transparent border-b font-poppins md:bg-transparent md:border-b-slate-600 md:max-w-[min(100%_+_40px,100%_+_0px)] md:mx-auto md:rounded-2xl md:border-b-0">
      <div className="absolute bg-white box-border caret-transparent hidden h-full w-full rounded-none top-0 inset-x-0 md:block md:rounded-2xl"></div>
      <div className="static box-border caret-transparent w-full md:relative">
        <div className="relative items-center bg-stone-200 box-border caret-transparent gap-x-3 grid [grid-template-areas:'icons-left_logo_icons-right'] grid-cols-[1fr_auto_1fr] grid-rows-none min-h-[65px] w-full z-[4] px-6 md:gap-x-5 md:[grid-template-areas:'nav_logo_icons-right'] md:grid-rows-[1fr] md:px-10">
          <Logo
            linkClassName="flex min-h-[auto] min-w-[auto] md:hidden md:min-h-0 md:min-w-0"
            imageClassName="block max-w-[131.25px] min-h-[auto] min-w-[auto] md:inline md:max-w-md md:min-h-0 md:min-w-0"
          />
          <Logo
            linkClassName="hidden max-w-[60px] min-h-0 min-w-0 md:flex md:max-w-[100px] md:min-h-[auto] md:min-w-[auto]"
            imageClassName="inline mb-[-30px] mt-[-30px] min-h-0 min-w-0 md:block md:min-h-[auto] md:min-w-[auto]"
          />
          <DesktopNav />
          <HeaderActions />
          <MobileMenuToggle />
        </div>
      </div>
      <div className="absolute box-border caret-transparent hidden h-[863.02px] max-h-[64.9922px] min-h-[64.9922px] z-[2] rounded-none top-0 inset-x-0 md:block md:rounded-2xl">
        <div className="absolute items-start box-border caret-transparent hidden flex-col list-none max-h-[799.02px] pointer-events-none gap-y-3.5 visible w-full z-[-1] overflow-hidden rounded-b-2xl left-0 top-0 md:grid md:invisible"></div>
      </div>
    </div>
  );
};
