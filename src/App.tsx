import { AnnouncementBar } from "@/sections/AnnouncementBar";
import { Header } from "@/sections/Header";
import { DrawerMenu } from "@/components/DrawerMenu";
import { CartDrawer } from "@/components/CartDrawer";
import { SearchSidebar } from "@/components/SearchSidebar";
import { Hero } from "@/sections/Hero";
import { FeaturedLogos } from "@/sections/FeaturedLogos";
import { ProductFeatures } from "@/sections/ProductFeatures";
import { ProductBenefits } from "@/sections/ProductBenefits";
import { Testimonials } from "@/sections/Testimonials";
import { ProductSelector } from "@/sections/ProductSelector";
import { Footer } from "@/sections/Footer";
import { LegalDisclaimer } from "@/sections/LegalDisclaimer";
import { QuickView } from "@/components/QuickView";
import { CartNotification } from "@/components/CartNotification";
import { BackToTop } from "@/components/BackToTop";
import { AccountSidebar } from "@/components/AccountSidebar";

export const App = () => {
  return (
    <body className="relative text-slate-600 text-base not-italic normal-nums font-normal accent-auto bg-white box-border caret-transparent flex flex-col tracking-[normal] leading-6 list-outside list-disc min-h-[1000px] overflow-x-hidden overflow-y-scroll pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-dm_sans">
      <img
        src="https://c.animaapp.com/ml2ohkbneWFNKS/assets/icon-1.svg"
        alt="Icon"
        className="box-border caret-transparent hidden shrink-0"
      />
      <section className="box-border caret-transparent overflow-hidden"></section>
      <AnnouncementBar />
      <Header />
      <DrawerMenu />
      <aside className="box-border caret-transparent">
        <CartDrawer />
      </aside>
      <aside className="box-border caret-transparent">
        <SearchSidebar />
      </aside>
      <section className="box-border caret-transparent overflow-hidden">
        <div className="bg-white box-border caret-transparent">
          <div className="box-border caret-transparent max-w-[1360px] w-full mx-auto">
            <div className="box-border caret-transparent overflow-hidden"></div>
          </div>
        </div>
      </section>
      <main className="box-border caret-transparent flex basis-[0%] flex-col grow">
        <Hero />
        <section className="box-border caret-transparent contents scroll-smooth overflow-hidden font-ui_sans_serif">
          <FeaturedLogos />
        </section>
        <section className="box-border caret-transparent contents scroll-smooth overflow-hidden font-ui_sans_serif">
          <ProductFeatures />
        </section>
        <section className="box-border caret-transparent contents scroll-smooth overflow-hidden font-ui_sans_serif">
          <ProductBenefits />
        </section>
        <section className="box-border caret-transparent contents scroll-smooth overflow-hidden font-ui_sans_serif">
          <section className="box-border caret-transparent max-w-full w-[calc(100%_+_32px)] overflow-hidden mx-auto md:w-full">
            <div className="relative content-start bg-[url('')] bg-no-repeat bg-cover box-border caret-transparent gap-x-4 grid grid-cols-[minmax(0px,12fr)] grid-rows-[1fr] justify-start max-w-full gap-y-0 w-full bg-center mx-auto pb-8">
              <div className="relative box-border caret-transparent flex flex-col justify-start max-w-full">
                <div className="relative content-start box-border caret-transparent gap-x-4 grid grid-cols-[minmax(0px,12fr)] grid-rows-[1fr] justify-start max-w-full gap-y-0 w-full mb-5 mx-auto md:mb-[150px]">
                  <div className="relative box-border caret-transparent flex flex-col justify-start max-w-full">
                    <Testimonials />
                  </div>
                </div>
                <ProductSelector />
              </div>
            </div>
          </section>
        </section>
      </main>
      <section className="box-border caret-transparent overflow-hidden">
        <div className="bg-white box-border caret-transparent">
          <div className="box-border caret-transparent max-w-[760px] w-full mx-auto">
            <div className="box-border caret-transparent overflow-hidden"></div>
          </div>
        </div>
      </section>
      <Footer />
      <LegalDisclaimer />
      <aside className="box-border caret-transparent">
        <QuickView />
      </aside>
      <aside className="box-border caret-transparent">
        <CartNotification />
      </aside>
      <aside className="box-border caret-transparent"></aside>
      <aside className="box-border caret-transparent">
        <div className="fixed box-border caret-transparent block h-full pointer-events-none z-[9999] p-0 right-0 top-0 md:translate-x-[100.0%] md:p-5">
          <div className="box-border caret-transparent"></div>
        </div>
      </aside>
      <aside className="box-border caret-transparent">
        <BackToTop />
      </aside>
      <aside className="box-border caret-transparent">
        <div className="fixed backdrop-blur-0 bg-transparent box-border caret-transparent block h-full pointer-events-none w-full z-[3] left-0 top-0"></div>
      </aside>
      <div className="box-border caret-transparent"></div>
      <div className="box-border caret-transparent"></div>
      <div className="box-border caret-transparent">
        <div className="box-border caret-transparent"></div>
      </div>
      <div className="box-border caret-transparent"></div>
      <div className="box-border caret-transparent"></div>
      <AccountSidebar />
      <div className="box-border caret-transparent block">
        <iframe
          src="cid://frame-6305A55FCDCB7D3F039A8E49D80635B5@mhtml.blink"
          title="Shop Pay cart sync"
          className="caret-transparent border-zinc-100"
        ></iframe>
      </div>
      <div className="fixed box-border caret-transparent hidden h-full leading-[normal] w-full z-[1000000002] overflow-hidden left-0 top-0"></div>
      <div className="fixed bg-white shadow-[rgba(153,153,153,0.2)_2px_2px_10px_2px] box-border caret-transparent hidden text-left w-[calc(100%_-_20px)] z-[2147483200] rounded-md left-2.5 top-2.5 bottom-auto md:w-80 md:left-5 md:top-auto md:bottom-5">
        <div className="items-center box-border caret-transparent flex h-20">
          <div className="box-border caret-transparent flex h-20 text-center align-middle w-20 overflow-hidden rounded-l-md">
            <div className="items-center box-border caret-transparent flex basis-[0%] grow h-full justify-center w-full overflow-hidden">
              <img
                alt="30 Day Challenge"
                src="https://cdn.shopify.com/s/files/1/0888/9293/2371/files/image_4_8094d314-f190-4dca-a895-3c689b90f38a_small.png?v=1768838839"
                className="box-border caret-transparent h-full max-w-full"
              />
            </div>
          </div>
          <div className="text-zinc-500 box-border caret-transparent flex basis-[0%] flex-col grow h-full justify-center align-middle px-5 rounded-r-md">
            <p className="text-[13px] box-border caret-transparent leading-[14.3px]">
              Cory in Missouri City, Texas bought{" "}
              <a
                href="https://beyondalpha.co/products/the-dream-body-stack-bundle?variant=52918758539539&utm_source=fomo&utm_medium=notification"
                className="box-border caret-transparent"
              >
                30 Day Challenge
              </a>
              <small className="text-[9px] box-border caret-transparent block leading-[9.9px] align-middle mr-1.5 mt-[3px]">
                about 1 hour ago
              </small>
            </p>
          </div>
          <span className="absolute box-border caret-transparent block h-12 opacity-80 w-12 -right-2.5 -top-2.5 before:accent-auto before:bg-zinc-500 before:box-border before:caret-transparent before:text-slate-600 before:block before:text-base before:not-italic before:normal-nums before:font-normal before:h-0.5 before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-left before:indent-[0px] before:normal-case before:visible before:w-3 before:border-separate before:left-2/4 before:top-2/4 before:font-dm_sans after:accent-auto after:bg-zinc-500 after:box-border after:caret-transparent after:text-slate-600 after:block after:text-base after:not-italic after:normal-nums after:font-normal after:h-3 after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:pointer-events-auto after:absolute after:text-left after:indent-[0px] after:normal-case after:visible after:w-0.5 after:border-separate after:left-2/4 after:top-2/4 after:font-dm_sans"></span>
        </div>
      </div>
      <div className="box-border caret-transparent"></div>
    </body>
  );
};
