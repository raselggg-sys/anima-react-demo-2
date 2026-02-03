import { StickyCartButton } from "@/sections/Header/components/StickyCartButton";
import { HeaderComponent } from "@/sections/Header/components/HeaderComponent";

export const Header = () => {
  return (
    <header className="relative box-border caret-transparent z-[8888] my-0 md:z-[5] md:my-5">
      <StickyCartButton />
      <HeaderComponent />
    </header>
  );
};
