import { FooterLogo } from "@/sections/Footer/components/FooterLogo";
import { FooterColumn } from "@/sections/Footer/components/FooterColumn";

export const FooterContent = () => {
  return (
    <div className="box-border caret-transparent max-w-[calc(100%_+_40px)] w-full mx-auto px-5">
      <div className="bg-white border-b-slate-600 border-l-slate-600 border-r-slate-600 border-t-stone-200 box-border caret-transparent max-w-[calc(100%_+_40px)] w-full overflow-hidden mx-auto px-5 rounded-2xl border-t md:max-w-[calc(100%_+_80px)] md:px-10">
        <div className="box-border caret-transparent gap-x-5 grid grid-cols-[repeat(2,1fr)] grid-rows-[1fr] max-w-full gap-y-5 m-auto pt-[50px] pb-14 md:grid-cols-[repeat(5,1fr)] md:max-w-[1080px] md:pt-14">
          <FooterLogo />
          <FooterColumn
            title="Shop Product"
            links={[
              {
                href: "https://beyondalpha.co/products/t-breakthrough",
                ariaLabel: "Testosterone Breakthrough",
                text: "Testosterone Breakthrough",
              },
              {
                href: "https://beyondalpha.co/products/estrocontrol",
                ariaLabel: "EstroControl",
                text: "EstroControl",
              },
              {
                href: "https://beyondalpha.co/products/ultimate-alpha-stack",
                ariaLabel: "Ultimate Alpha Stack",
                text: "Ultimate Alpha Stack",
              },
              {
                href: "https://beyondalpha.co/products/ultimate-weight-loss-control",
                ariaLabel: "Ultimate Weight Control",
                text: "Ultimate Weight Control",
              },
            ]}
            columnVariant="col-end-[span_2] col-start-1 md:col-end-auto md:col-start-auto"
          />
          <FooterColumn
            title="Customer Service"
            links={[
              {
                href: "https://beyondalpha.co/pages/support",
                ariaLabel: "Support / Contact Us",
                text: "Support / Contact Us",
              },
              {
                href: "https://beyondalpha.co/pages/tracking",
                ariaLabel: "Track My Order",
                text: "Track My Order",
              },
              {
                href: "https://beyondalpha.co/pages/estrocontrol-detox#rivo",
                ariaLabel: "Manage My Subscription",
                text: "Manage My Subscription",
              },
              {
                href: "https://beyondalpha.co/policies/terms-of-service",
                ariaLabel: "Terms & Conditions",
                text: "Terms & Conditions",
              },
              {
                href: "https://beyondalpha.co/policies/privacy-policy",
                ariaLabel: "Privacy Policy",
                text: "Privacy Policy",
              },
              {
                href: "https://beyondalpha.co/policies/refund-policy",
                ariaLabel: "Refund Policy",
                text: "Refund Policy",
              },
              {
                href: "https://beyondalpha.co/pages/shipping-policy",
                ariaLabel: "Shipping Policy",
                text: "Shipping Policy",
              },
            ]}
          />
          <FooterColumn
            title="Discover More"
            links={[
              {
                href: "https://beyondalpha.co/pages/alpha-club",
                ariaLabel: "Alpha Club",
                text: "Alpha Club",
              },
              {
                href: "https://beyondalpha.co/pages/about-us",
                ariaLabel: "About Us",
                text: "About Us",
              },
              {
                href: "https://beyondalpha.co/pages/ingredients",
                ariaLabel: "Ingredient Benefits",
                text: "Ingredient Benefits",
              },
              {
                href: "https://beyondalpha.co/blogs/articles",
                ariaLabel: "Blog",
                text: "Blog",
              },
            ]}
          />
        </div>
        <div className="border-b-slate-600 border-l-slate-600 border-r-slate-600 border-t-stone-200 box-border caret-transparent gap-x-[normal] hidden flex-col flex-nowrap gap-y-[normal] py-[30px] border-t md:gap-x-7 md:flex-row md:flex-wrap md:gap-y-7">
          <div className="[align-items:normal] box-border caret-transparent gap-x-6 flex col-end-auto col-start-auto row-end-auto row-start-auto md:items-center md:gap-x-4 md:col-end-[settings] md:col-start-[settings] md:row-end-[settings] md:row-start-[settings]">
            <div className="box-border caret-transparent">
              <div className="text-sm font-medium items-center box-border caret-transparent gap-x-0.5 flex h-auto leading-[22px] md:h-full">
                English
                <img
                  src="https://c.animaapp.com/ml2ohkbneWFNKS/assets/icon-17.svg"
                  alt="Icon"
                  className="box-border caret-transparent shrink-0 h-[22px] w-[22px]"
                />
              </div>
            </div>
            <div className="box-border caret-transparent">
              <div className="text-sm font-medium items-center box-border caret-transparent gap-x-0.5 flex h-auto leading-[22px] md:h-full">
                USD
                <img
                  src="https://c.animaapp.com/ml2ohkbneWFNKS/assets/icon-17.svg"
                  alt="Icon"
                  className="box-border caret-transparent shrink-0 h-[22px] w-[22px]"
                />
              </div>
            </div>
          </div>
          <div className="box-border caret-transparent gap-x-6 flex basis-auto grow-0 flex-wrap col-end-auto col-start-auto row-end-auto row-start-auto min-w-0 gap-y-6 mr-0 mt-7 md:basis-[0%] md:grow md:col-end-[bottom-bar] md:col-start-[bottom-bar] md:row-end-[bottom-bar] md:row-start-[bottom-bar] md:min-w-fit md:mr-2 md:mt-0">
            <a
              href="https://beyondalpha.co/collections/all-products"
              aria-label="Shop"
              className="text-slate-600/80 text-[13px] items-center box-border caret-transparent flex leading-[18px]"
            >
              <span className="relative text-black text-sm font-medium box-border caret-transparent block leading-[16.8px] overflow-hidden before:accent-auto before:bg-slate-600 before:box-border before:caret-transparent before:text-black before:block before:text-sm before:not-italic before:normal-nums before:font-medium before:h-px before:tracking-[normal] before:leading-[16.8px] before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-start before:indent-[0px] before:normal-case before:visible before:w-full before:overflow-hidden before:border-separate before:left-0 before:bottom-0 before:font-dm_sans">
                Shop
              </span>
            </a>
            <a
              href="https://beyondalpha.co/products/ultimate-alpha-stack"
              aria-label="Get Started"
              className="text-slate-600/80 text-[13px] items-center box-border caret-transparent flex leading-[18px]"
            >
              <span className="relative text-black text-sm font-medium box-border caret-transparent block leading-[16.8px] overflow-hidden before:accent-auto before:bg-slate-600 before:box-border before:caret-transparent before:text-black before:block before:text-sm before:not-italic before:normal-nums before:font-medium before:h-px before:tracking-[normal] before:leading-[16.8px] before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-start before:indent-[0px] before:normal-case before:visible before:w-full before:overflow-hidden before:border-separate before:left-0 before:bottom-0 before:font-dm_sans">
                Get Started
              </span>
            </a>
            <a
              href="https://beyondalpha.co/pages/about-us"
              aria-label="Our Story"
              className="text-slate-600/80 text-[13px] items-center box-border caret-transparent flex leading-[18px]"
            >
              <span className="relative text-black text-sm font-medium box-border caret-transparent block leading-[16.8px] overflow-hidden before:accent-auto before:bg-slate-600 before:box-border before:caret-transparent before:text-black before:block before:text-sm before:not-italic before:normal-nums before:font-medium before:h-px before:tracking-[normal] before:leading-[16.8px] before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-start before:indent-[0px] before:normal-case before:visible before:w-full before:overflow-hidden before:border-separate before:left-0 before:bottom-0 before:font-dm_sans">
                Our Story
              </span>
            </a>
            <a
              href="https://beyondalpha.co/pages/ingredients"
              aria-label="Ingredients"
              className="text-slate-600/80 text-[13px] items-center box-border caret-transparent flex leading-[18px]"
            >
              <span className="relative text-black text-sm font-medium box-border caret-transparent block leading-[16.8px] overflow-hidden before:accent-auto before:bg-slate-600 before:box-border before:caret-transparent before:text-black before:block before:text-sm before:not-italic before:normal-nums before:font-medium before:h-px before:tracking-[normal] before:leading-[16.8px] before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-start before:indent-[0px] before:normal-case before:visible before:w-full before:overflow-hidden before:border-separate before:left-0 before:bottom-0 before:font-dm_sans">
                Ingredients
              </span>
            </a>
            <a
              href="https://beyondalpha.co/pages/reviews"
              aria-label="Reviews"
              className="text-slate-600/80 text-[13px] items-center box-border caret-transparent flex leading-[18px]"
            >
              <span className="relative text-black text-sm font-medium box-border caret-transparent block leading-[16.8px] overflow-hidden before:accent-auto before:bg-slate-600 before:box-border before:caret-transparent before:text-black before:block before:text-sm before:not-italic before:normal-nums before:font-medium before:h-px before:tracking-[normal] before:leading-[16.8px] before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-start before:indent-[0px] before:normal-case before:visible before:w-full before:overflow-hidden before:border-separate before:left-0 before:bottom-0 before:font-dm_sans">
                Reviews
              </span>
            </a>
          </div>
          <div className="items-center box-border caret-transparent gap-x-6 flex flex-wrap gap-y-6 mt-[22px] md:gap-x-7 md:gap-y-7 md:mt-0">
            <div className="[align-items:normal] box-border caret-transparent gap-x-2 flex flex-wrap col-end-auto col-start-auto row-end-auto row-start-auto gap-y-2 md:items-center md:col-end-[payment-icons] md:col-start-[payment-icons] md:row-end-[payment-icons] md:row-start-[payment-icons]">
              <img
                src="https://beyondalpha.co/cdn/shopifycloud/storefront/assets/payment_icons/amazon-ec9fb491.svg"
                alt="Payment: amazon_pay"
                className="box-border caret-transparent"
              />
              <img
                src="https://beyondalpha.co/cdn/shopifycloud/storefront/assets/payment_icons/american_express-1efdc6a3.svg"
                alt="Payment: american_express"
                className="box-border caret-transparent"
              />
              <img
                src="https://beyondalpha.co/cdn/shopifycloud/storefront/assets/payment_icons/apple_pay-1721ebad.svg"
                alt="Payment: apple_pay"
                className="box-border caret-transparent"
              />
              <img
                src="https://beyondalpha.co/cdn/shopifycloud/storefront/assets/payment_icons/bancontact-13d5ac60.svg"
                alt="Payment: bancontact"
                className="box-border caret-transparent"
              />
              <img
                src="https://beyondalpha.co/cdn/shopifycloud/storefront/assets/payment_icons/diners_club-678e3046.svg"
                alt="Payment: diners_club"
                className="box-border caret-transparent"
              />
              <img
                src="https://beyondalpha.co/cdn/shopifycloud/storefront/assets/payment_icons/discover-59880595.svg"
                alt="Payment: discover"
                className="box-border caret-transparent"
              />
              <img
                src="https://beyondalpha.co/cdn/shopifycloud/storefront/assets/payment_icons/google_pay-34c30515.svg"
                alt="Payment: google_pay"
                className="box-border caret-transparent"
              />
              <img
                src="https://beyondalpha.co/cdn/shopifycloud/storefront/assets/payment_icons/ideal-506610f2.svg"
                alt="Payment: ideal"
                className="box-border caret-transparent"
              />
              <img
                src="https://beyondalpha.co/cdn/shopifycloud/storefront/assets/payment_icons/master-54b5a7ce.svg"
                alt="Payment: master"
                className="box-border caret-transparent"
              />
              <img
                src="https://beyondalpha.co/cdn/shopifycloud/storefront/assets/payment_icons/paypal-a7c68b85.svg"
                alt="Payment: paypal"
                className="box-border caret-transparent"
              />
              <img
                src="https://beyondalpha.co/cdn/shopifycloud/storefront/assets/payment_icons/shopify_pay-925ab76d.svg"
                alt="Payment: shopify_pay"
                className="box-border caret-transparent"
              />
              <img
                src="https://beyondalpha.co/cdn/shopifycloud/storefront/assets/payment_icons/visa-65d650f7.svg"
                alt="Payment: visa"
                className="box-border caret-transparent"
              />
              <div className="box-border caret-transparent">
                <div className="box-border caret-transparent">
                  <div className="caret-transparent">
                    <button
                      type="button"
                      className="text-stone-950/30 text-[13.3333px] bg-zinc-100/30 caret-transparent leading-[normal] text-center border-neutral-500/30 font-arial"
                    >
                      <div className="caret-transparent"></div>
                      <div className="caret-transparent">
                        <img
                          src="https://c.animaapp.com/ml2ohkbneWFNKS/assets/icon-18.svg"
                          alt="Icon"
                          className="caret-transparent"
                        />
                      </div>
                      <span className="caret-transparent">
                        Follow on{" "}
                        <img
                          src="https://c.animaapp.com/ml2ohkbneWFNKS/assets/icon-19.svg"
                          alt="Icon"
                          className="caret-transparent"
                        />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="box-border caret-transparent gap-x-6 hidden flex-wrap gap-y-6 pb-[30px]">
          <a
            href="https://beyondalpha.co/policies/privacy-policy"
            aria-label="Privacy policy"
            className="text-slate-600/80 text-[13px] items-center box-border caret-transparent flex leading-[18px]"
          >
            <span className="relative text-black text-sm font-medium box-border caret-transparent block leading-[16.8px] overflow-hidden before:accent-auto before:bg-slate-600 before:box-border before:caret-transparent before:text-black before:block before:text-sm before:not-italic before:normal-nums before:font-medium before:h-px before:tracking-[normal] before:leading-[16.8px] before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-start before:indent-[0px] before:normal-case before:visible before:w-full before:overflow-hidden before:border-separate before:left-0 before:bottom-0 before:font-dm_sans">
              Privacy policy
            </span>
          </a>
          <a
            href="https://beyondalpha.co/policies/shipping-policy"
            aria-label="Shipping policy"
            className="text-slate-600/80 text-[13px] items-center box-border caret-transparent flex leading-[18px]"
          >
            <span className="relative text-black text-sm font-medium box-border caret-transparent block leading-[16.8px] overflow-hidden before:accent-auto before:bg-slate-600 before:box-border before:caret-transparent before:text-black before:block before:text-sm before:not-italic before:normal-nums before:font-medium before:h-px before:tracking-[normal] before:leading-[16.8px] before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-start before:indent-[0px] before:normal-case before:visible before:w-full before:overflow-hidden before:border-separate before:left-0 before:bottom-0 before:font-dm_sans">
              Shipping policy
            </span>
          </a>
          <a
            href="https://beyondalpha.co/policies/terms-of-service"
            aria-label="Terms of service"
            className="text-slate-600/80 text-[13px] items-center box-border caret-transparent flex leading-[18px]"
          >
            <span className="relative text-black text-sm font-medium box-border caret-transparent block leading-[16.8px] overflow-hidden before:accent-auto before:bg-slate-600 before:box-border before:caret-transparent before:text-black before:block before:text-sm before:not-italic before:normal-nums before:font-medium before:h-px before:tracking-[normal] before:leading-[16.8px] before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-start before:indent-[0px] before:normal-case before:visible before:w-full before:overflow-hidden before:border-separate before:left-0 before:bottom-0 before:font-dm_sans">
              Terms of service
            </span>
          </a>
          <a
            href="https://beyondalpha.co/policies/refund-policy"
            aria-label="Refund policy"
            className="text-slate-600/80 text-[13px] items-center box-border caret-transparent flex leading-[18px]"
          >
            <span className="relative text-black text-sm font-medium box-border caret-transparent block leading-[16.8px] overflow-hidden before:accent-auto before:bg-slate-600 before:box-border before:caret-transparent before:text-black before:block before:text-sm before:not-italic before:normal-nums before:font-medium before:h-px before:tracking-[normal] before:leading-[16.8px] before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-start before:indent-[0px] before:normal-case before:visible before:w-full before:overflow-hidden before:border-separate before:left-0 before:bottom-0 before:font-dm_sans">
              Refund policy
            </span>
          </a>
          <a
            href="https://beyondalpha.co/policies/contact-information"
            aria-label="Contact information"
            className="text-slate-600/80 text-[13px] items-center box-border caret-transparent flex leading-[18px]"
          >
            <span className="relative text-black text-sm font-medium box-border caret-transparent block leading-[16.8px] overflow-hidden before:accent-auto before:bg-slate-600 before:box-border before:caret-transparent before:text-black before:block before:text-sm before:not-italic before:normal-nums before:font-medium before:h-px before:tracking-[normal] before:leading-[16.8px] before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-start before:indent-[0px] before:normal-case before:visible before:w-full before:overflow-hidden before:border-separate before:left-0 before:bottom-0 before:font-dm_sans">
              Contact information
            </span>
          </a>
          <a
            href="https://beyondalpha.co/policies/subscription-policy"
            aria-label="Cancellation policy"
            className="text-slate-600/80 text-[13px] items-center box-border caret-transparent flex leading-[18px]"
          >
            <span className="relative text-black text-sm font-medium box-border caret-transparent block leading-[16.8px] overflow-hidden before:accent-auto before:bg-slate-600 before:box-border before:caret-transparent before:text-black before:block before:text-sm before:not-italic before:normal-nums before:font-medium before:h-px before:tracking-[normal] before:leading-[16.8px] before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-start before:indent-[0px] before:normal-case before:visible before:w-full before:overflow-hidden before:border-separate before:left-0 before:bottom-0 before:font-dm_sans">
              Cancellation policy
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};
