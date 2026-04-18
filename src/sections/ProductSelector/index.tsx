import { ProductCard } from "@/sections/ProductSelector/components/ProductCard";

export const ProductSelector = () => {
  return (
    <div className="relative content-start bg-neutral-700 bg-[url('')] bg-no-repeat bg-cover box-border caret-transparent gap-x-2 grid grid-cols-[minmax(0px,12fr)] grid-rows-[1fr] h-full justify-start max-w-full w-full bg-center mx-auto pb-10 md:h-auto md:w-[1200px]">
      <div className="relative box-border caret-transparent flex flex-col justify-start max-w-full">
        <div
          role="presentation"
          className="relative box-border caret-transparent hidden shrink-0 mt-[-50px] max-w-full min-h-0 min-w-0 text-center mb-5 px-5 md:block md:mt-[-62px] md:min-h-[auto] md:min-w-[auto] md:px-0"
        >
          <div className="box-border caret-transparent flex h-full justify-center max-w-full w-full">
            <picture className="box-border caret-transparent contents max-w-full">
              <img
                src="https://ucarecdn.com/b8812434-a0dd-49dd-b01b-e285f0d884b6/progress-bar.svg"
                alt=""
                className="box-border caret-transparent max-w-full min-h-0 min-w-0 object-cover md:min-h-[auto] md:min-w-[auto]"
              />
            </picture>
          </div>
        </div>
        <div
          role="presentation"
          className="relative box-border caret-transparent block shrink-0 max-w-full min-h-[auto] min-w-[auto] text-center -mt-20 mb-5 px-2.5 md:hidden md:mt-[-62px] md:min-h-0 md:min-w-0 md:px-0"
        >
          <div className="box-border caret-transparent flex h-full justify-center max-w-full w-full">
            <picture className="box-border caret-transparent contents max-w-full">
              <img
                src="https://ucarecdn.com/b8812434-a0dd-49dd-b01b-e285f0d884b6/progress-bar.svg"
                alt=""
                className="box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] object-cover w-full md:min-h-0 md:min-w-0 md:w-auto"
              />
            </picture>
          </div>
        </div>
        <div className="box-border caret-transparent max-w-full text-left mb-[15px]">
          <div className="box-border caret-transparent flex max-w-full">
            <h2 className="text-white text-2xl font-bold bg-[url('')] bg-no-repeat bg-cover box-border caret-transparent leading-[31.2px] max-w-full text-center w-full overflow-hidden bg-center font-oswald md:text-[46px] md:leading-[67px]">
              Choose Your Package Below
            </h2>
          </div>
        </div>
        <div className="relative content-start bg-[url('')] bg-no-repeat bg-cover box-border caret-transparent gap-x-2.5 grid grid-cols-[minmax(0px,12fr)] grid-rows-[1fr] justify-start max-w-full w-full bg-center mx-auto px-2.5 md:grid-cols-[minmax(0px,4fr)_minmax(0px,4fr)_minmax(0px,4fr)] md:w-[1200px] md:px-[15px]">
          <div className="relative box-border caret-transparent flex flex-col justify-start max-w-full">
            <ProductCard
              cardVariant="border-zinc-300 border-[3px] md:border-[5px]"
              badgeVariant="bg-zinc-300 rounded-t-[18px]"
              badgeTextVariant="text-neutral-500"
              badgeTitle="Starter Order"
              hasDiscount={false}
              discountPercentage={undefined}
              discountBadgeVariant={undefined}
              productImageUrl="https://beyondalpha.co/cdn/shop/files/estrocontrol-1-jar_png_95e60f03-1aa6-437b-aafb-f9b93226f84d.png?v=1141395866200619079"
              productImageAlt=""
              productImageVariant=""
              pricePerBottle="$89.99"
              priceVariant="text-neutral-500 text-4xl font-bold box-border caret-transparent leading-[43.2px] max-w-full font-oswald"
              totalPrice="$89.99"
              originalPrice=""
              isInStock={true}
              guaranteeIconUrl="https://beyondalpha.co/cdn/shop/files/gempages_530032437942551346-45f6ec29-6215-42b5-a14e-7b5fb79fff29.png?v=3366874540483319203"
              guaranteeIconAlt=""
              buyButtonIconUrl="https://c.animaapp.com/ml2ohkbneWFNKS/assets/icon-12.svg"
              buyButtonIconAlt="Icon"
              featuresContainerVariant=""
              featuresListVariant=""
              featuresItemVariant=""
              shippingListVariant=""
              shippingItemVariant=""
              treatListVariant=""
              treatItemVariant=""
              shippingIconUrl={undefined}
              shippingIconAlt={undefined}
              treatIconUrl={undefined}
              treatIconAlt={undefined}
            />
          </div>
          <div className="relative box-border caret-transparent flex flex-col justify-start max-w-full">
            <ProductCard
              cardVariant="border-amber-300 border-[5px] md:border-2"
              badgeVariant="bg-amber-300 rounded-t-[15px]"
              badgeTextVariant="text-neutral-700"
              badgeTitle="BIGGEST SAVINGS"
              hasDiscount={true}
              discountPercentage=" 22% "
              discountBadgeVariant="text-slate-600 text-[28px] font-bold box-border caret-transparent leading-7 max-w-full w-full overflow-hidden font-cabin md:text-[32px] md:leading-8"
              productImageUrl="https://beyondalpha.co/cdn/shop/files/estrocontrol-4-jar_png_7c76713a-9dc8-401d-af4e-fefb29a3a557.png?v=3887055851704794532"
              productImageAlt=""
              productImageVariant="relative content-center items-center bg-amber-300 bg-[url('')] bg-no-repeat bg-cover box-border caret-transparent gap-x-2 grid grid-cols-[minmax(0px,auto)] grid-rows-[1fr] h-20 justify-center max-w-20 w-full z-[1] bg-center mx-auto rounded-[999999px] md:h-[120px] md:max-w-[120px] md:w-[120px]"
              pricePerBottle="$69.99"
              priceVariant="text-yellow-400 text-4xl font-bold box-border caret-transparent leading-[43.2px] max-w-full font-oswald"
              totalPrice="$279.99"
              originalPrice="$359.99"
              isInStock={true}
              guaranteeIconUrl="https://beyondalpha.co/cdn/shop/files/gempages_530032437942551346-45f6ec29-6215-42b5-a14e-7b5fb79fff29.png?v=3366874540483319203"
              guaranteeIconAlt=""
              buyButtonIconUrl="https://c.animaapp.com/ml2ohkbneWFNKS/assets/icon-12.svg"
              buyButtonIconAlt="Icon"
              featuresContainerVariant="relative content-center bg-[url('')] bg-no-repeat bg-cover box-border caret-transparent gap-x-3 grid grid-cols-[minmax(0px,auto)_minmax(0px,auto)_minmax(0px,auto)] grid-rows-[1fr] justify-center max-w-full gap-y-3 w-full bg-center mt-2 mx-auto md:gap-x-[5px] md:gap-y-[normal] md:w-[1200px]"
              featuresListVariant="box-border caret-transparent gap-x-0.5 inline-flex flex-col list-none max-w-full gap-y-0.5 pl-0 md:gap-x-4 md:gap-y-4"
              featuresItemVariant="items-center box-border caret-transparent gap-x-[5px] flex max-w-full w-full"
              shippingListVariant="box-border caret-transparent gap-x-1.5 inline-flex flex-col list-none max-w-full gap-y-1.5 pl-0 md:gap-x-4 md:gap-y-4"
              shippingItemVariant="items-center box-border caret-transparent gap-x-0.5 flex max-w-full w-full md:gap-x-[5px]"
              treatListVariant="box-border caret-transparent gap-x-4 hidden flex-col list-none max-w-full gap-y-4 pl-0"
              treatItemVariant="items-center box-border caret-transparent gap-x-[5px] flex max-w-full w-full md:gap-x-1"
              shippingIconUrl="https://beyondalpha.co/cdn/shop/files/gempages_530032437942551346-1eb9caa5-8b90-42e3-b721-3ea38519f5ef.png?v=17548906434538230174"
              shippingIconAlt=""
              treatIconUrl="https://beyondalpha.co/cdn/shop/files/gempages_530032437942551346-8d878e3d-c12b-4d2f-adf8-165f329dbebb.svg?v=4487852075860397260"
              treatIconAlt=""
            />
          </div>
          <div className="relative box-border caret-transparent flex flex-col justify-start max-w-full">
            <ProductCard
              cardVariant="border-neutral-700 border-2 border-solid"
              badgeVariant="bg-neutral-700 rounded-t-[18px]"
              badgeTextVariant="text-amber-300"
              badgeTitle="Most popular"
              hasDiscount={true}
              discountPercentage=" 11% "
              discountBadgeVariant="text-amber-300"
              productImageUrl="https://beyondalpha.co/cdn/shop/files/estrocontrol-2-jar_png_34082241-8047-41e2-99bf-074134aa4076.png?v=12465558133972686675"
              productImageAlt=""
              productImageVariant="relative content-center items-center bg-slate-600 bg-[url('')] bg-no-repeat bg-cover box-border caret-transparent gap-x-2 grid grid-cols-[minmax(0px,auto)] grid-rows-[1fr] h-20 justify-center max-w-20 w-full z-[1] bg-center mx-auto rounded-[999999px] md:h-[120px] md:max-w-[120px] md:w-[120px]"
              pricePerBottle="$79.99"
              priceVariant="text-slate-600 text-4xl font-bold box-border caret-transparent leading-[43.2px] max-w-full font-oswald"
              totalPrice="$159.99"
              originalPrice="$179.99"
              isInStock={true}
              guaranteeIconUrl="https://beyondalpha.co/cdn/shop/files/gempages_530032437942551346-45f6ec29-6215-42b5-a14e-7b5fb79fff29.png?v=3366874540483319203"
              guaranteeIconAlt=""
              buyButtonIconUrl="https://c.animaapp.com/ml2ohkbneWFNKS/assets/icon-12.svg"
              buyButtonIconAlt="Icon"
              featuresContainerVariant="relative content-center bg-[url('')] bg-no-repeat bg-cover box-border caret-transparent gap-x-3 grid grid-cols-[minmax(0px,auto)_minmax(0px,auto)_minmax(0px,auto)] grid-rows-[1fr] justify-center max-w-full gap-y-3 w-full bg-center mt-2 mx-auto px-0 md:gap-x-[5px] md:gap-y-[normal] md:w-[1200px] md:px-2.5"
              featuresListVariant="box-border caret-transparent gap-x-4 inline-flex flex-col list-none max-w-full gap-y-4 pl-0"
              featuresItemVariant="items-center box-border caret-transparent gap-x-[5px] flex max-w-full w-full"
              shippingListVariant="box-border caret-transparent gap-x-1.5 inline-flex flex-col list-none max-w-full gap-y-1.5 text-center pl-0 md:gap-x-4 md:gap-y-4 md:text-right"
              shippingItemVariant="items-center box-border caret-transparent gap-x-0.5 flex max-w-full text-center w-full md:gap-x-[5px] md:text-right"
              treatListVariant="box-border caret-transparent gap-x-4 hidden flex-col list-none max-w-full gap-y-4 pl-0"
              treatItemVariant="items-center box-border caret-transparent gap-x-0.5 flex max-w-full w-full md:gap-x-1"
              shippingIconUrl="https://beyondalpha.co/cdn/shop/files/gempages_530032437942551346-1eb9caa5-8b90-42e3-b721-3ea38519f5ef.png?v=17548906434538230174"
              shippingIconAlt=""
              treatIconUrl="https://beyondalpha.co/cdn/shop/files/gempages_530032437942551346-8d878e3d-c12b-4d2f-adf8-165f329dbebb.svg?v=4487852075860397260"
              treatIconAlt=""
            />
          </div>
        </div>
        <div className="relative content-start box-border caret-transparent gap-x-4 grid grid-cols-[minmax(0px,12fr)] grid-rows-[1fr] justify-start max-w-full gap-y-0 w-full mx-auto pl-0 pr-6 py-0 md:w-[1200px] md:p-4">
          <div className="relative box-border caret-transparent flex flex-col justify-start max-w-full">
            <div className="relative content-start bg-[url('')] bg-no-repeat bg-cover box-border caret-transparent gap-x-2 grid grid-cols-[minmax(0px,12fr)] grid-rows-[1fr] justify-start max-w-full w-full border bg-center mt-2.5 mx-2.5 p-5 rounded-[10px] border-solid border-white md:grid-cols-[minmax(0px,4fr)_minmax(0px,8fr)] md:w-[1000px] md:mt-[30px] md:mx-auto">
              <div className="relative box-border caret-transparent flex flex-col justify-center max-w-full">
                <div className="box-border caret-transparent max-w-full text-left mb-2.5">
                  <div className="box-border caret-transparent flex max-w-full">
                    <div className="text-white bg-[url('')] bg-no-repeat bg-cover box-border caret-transparent leading-4 max-w-full text-center w-full overflow-hidden bg-center font-dm_sans">
                      <p className="box-border caret-transparent max-w-full">
                        Our trusted payment processors:
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  role="presentation"
                  className="relative box-border caret-transparent shrink-0 max-w-full text-center mt-[5px] mx-10 md:mt-0 md:mx-0"
                >
                  <div className="box-border caret-transparent flex h-full justify-center max-w-full w-full">
                    <picture className="box-border caret-transparent contents max-w-full">
                      <img
                        src="https://beyondalpha.co/cdn/shop/files/gempages_530032437942551346-ee2cb01d-cbd9-4411-aadc-e69eef63070f.png?v=13675758585171763170"
                        alt=""
                        className="box-border caret-transparent max-w-full object-cover"
                      />
                    </picture>
                  </div>
                </div>
              </div>
              <div className="relative box-border caret-transparent flex flex-col justify-center max-w-full">
                <div className="box-border caret-transparent max-w-full">
                  <div className="box-border caret-transparent flex max-w-full">
                    <div className="bg-[url('')] bg-no-repeat bg-cover box-border caret-transparent max-w-full text-left w-full bg-center mt-2.5 top-0 md:mt-0 md:top-auto">
                      <ul className="box-border caret-transparent gap-x-4 inline-flex flex-col list-none max-w-full gap-y-4 pl-0">
                        <li className="items-center box-border caret-transparent gap-x-2.5 flex max-w-full w-full md:gap-x-5">
                          <div className="relative box-border caret-transparent flex flex-col max-w-full">
                            <div
                              role="presentation"
                              className="relative box-border caret-transparent shrink-0 max-w-full text-left md:text-center"
                            >
                              <div className="box-border caret-transparent flex h-full max-w-full text-left w-full md:justify-center md:text-center">
                                <picture className="box-border caret-transparent contents max-w-full text-left md:text-center">
                                  <img
                                    src="https://beyondalpha.co/cdn/shop/files/gempages_530032437942551346-94e97d1e-5105-481a-843e-4e816bbf353d.png?v=9122059931612933585"
                                    alt=""
                                    className="box-border caret-transparent max-w-full object-cover text-left w-[65px] md:text-center"
                                  />
                                </picture>
                              </div>
                            </div>
                          </div>
                          <div className="relative box-border caret-transparent flex flex-col max-w-full w-full">
                            <div className="box-border caret-transparent max-w-full">
                              <div className="box-border caret-transparent flex max-w-full">
                                <div className="text-white text-sm bg-[url('')] bg-no-repeat bg-cover box-border caret-transparent leading-[25.2px] max-w-full w-full overflow-hidden bg-center font-dm_sans md:text-base md:leading-7">
                                  <p className="text-sm box-border caret-transparent leading-[25.2px] max-w-full md:text-base md:leading-7">
                                    We use a 256-bit secure shopping cart where
                                    100% of your data is encrypted, safe and
                                    secure. This is the same data security
                                    standard used by most banks, governments and
                                    military organizations.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
