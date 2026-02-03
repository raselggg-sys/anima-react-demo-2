export type ProductFormProps = {
  hasDiscount: boolean;
  discountPercentage?: string;
  discountBadgeVariant?: string;
  productImageUrl: string;
  productImageAlt: string;
  productImageVariant: string;
  pricePerBottle: string;
  priceVariant: string;
  totalPrice: string;
  originalPrice?: string;
  isInStock: boolean;
  guaranteeIconUrl: string;
  guaranteeIconAlt: string;
  shippingIconUrl?: string;
  shippingIconAlt?: string;
  treatIconUrl?: string;
  treatIconAlt?: string;
  featuresContainerVariant: string;
  featuresListVariant?: string;
  featuresItemVariant?: string;
  shippingListVariant?: string;
  shippingItemVariant?: string;
  treatListVariant?: string;
  treatItemVariant?: string;
  buyButtonIconUrl: string;
  buyButtonIconAlt: string;
};

export const ProductForm = (props: ProductFormProps) => {
  return (
    <div className="box-border caret-transparent flex flex-col max-w-full gap-y-[15px]">
      <form className="box-border caret-transparent max-w-full">
        <button
          type="submit"
          className="bg-transparent caret-transparent hidden max-w-full text-center p-0"
        ></button>
        <div className="relative content-start box-border caret-transparent gap-x-10 grid grid-cols-[minmax(0px,12fr)] grid-rows-[1fr] justify-start max-w-full gap-y-0 w-full mx-auto px-[5px] rounded-[3px] md:px-5">
          <div className="box-border caret-transparent flex max-w-full relative flex-col justify-start">
            {props.hasDiscount && (
              <div className={props.productImageVariant}>
                <div className="box-border caret-transparent flex max-w-full relative flex-col justify-start">
                  <div className="box-border caret-transparent max-w-full">
                    <div className="box-border caret-transparent max-w-full block text-center">
                      <div className="items-end box-border caret-transparent gap-x-3 inline-flex flex-wrap max-w-full gap-y-3">
                        <div className="items-center box-border caret-transparent flex h-full justify-center max-w-full w-full">
                          <div className="box-border caret-transparent max-w-full">
                            <div className="box-border caret-transparent max-w-full">
                              <div
                                className={`text-[28px] font-bold box-border caret-transparent leading-7 max-w-full w-full overflow-hidden font-cabin md:text-[32px] md:leading-8 ${props.discountBadgeVariant}`}
                              >
                                {props.discountPercentage}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="box-border caret-transparent max-w-full text-left">
                    <div className="box-border caret-transparent flex max-w-full">
                      <div
                        className={`text-[28px] font-bold bg-[url('')] bg-no-repeat bg-cover box-border caret-transparent leading-7 max-w-full text-center w-full overflow-hidden bg-center font-cabin md:text-[32px] md:leading-8 ${props.discountBadgeVariant}`}
                      >
                        <p className="text-[28px] box-border caret-transparent leading-7 max-w-full md:text-[32px] md:leading-8">
                          OFF
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div
              role="presentation"
              className={
                props.hasDiscount
                  ? "box-border caret-transparent max-w-full text-center relative shrink-0 -mt-20 mb-2 md:mt-[-100px]"
                  : "relative box-border caret-transparent shrink-0 max-w-full text-center mt-0 mb-2 md:mt-5"
              }
            >
              <div className="box-border caret-transparent flex h-full justify-center max-w-full w-full">
                <picture className="box-border caret-transparent contents max-w-full">
                  <img
                    src={props.productImageUrl}
                    alt={props.productImageAlt}
                    className="box-border caret-transparent max-w-full object-cover w-full"
                  />
                </picture>
              </div>
            </div>
            <div className="bg-[url('')] bg-no-repeat bg-cover box-border caret-transparent max-w-full text-center bg-center mb-0 md:mb-2">
              <div className="box-border caret-transparent max-w-full">
                <span className={props.priceVariant}>
                  {props.pricePerBottle}
                </span>
              </div>
            </div>
            <div className="box-border caret-transparent max-w-full text-left">
              <div className="box-border caret-transparent flex max-w-full">
                <h2 className="text-slate-500 text-2xl bg-[url('')] bg-no-repeat bg-cover box-border caret-transparent leading-[31.2px] max-w-full text-center w-full overflow-hidden bg-center font-dm_sans md:text-[26px] md:leading-[33.8px]">
                  Per Bottle
                </h2>
              </div>
            </div>
            <div
              className={`box-border caret-transparent max-w-full ${props.hasDiscount ? "relative content-center bg-[url('')] bg-no-repeat bg-cover gap-x-2.5 grid grid-cols-[minmax(0px,auto)_minmax(0px,auto)] grid-rows-[1fr] justify-center w-full bg-center mt-0 mb-5 mx-auto rounded-[3px] md:my-2.5" : "relative content-center bg-[url('')] bg-no-repeat bg-cover gap-x-1 grid grid-cols-[minmax(0px,auto)_minmax(0px,auto)] grid-rows-[1fr] justify-center w-full bg-center mt-0 mb-5 mx-auto rounded-[3px] md:my-2.5"}`}
            >
              <div className="relative box-border caret-transparent flex flex-col justify-center max-w-full order-1">
                <div className="box-border caret-transparent max-w-full relative content-start bg-[url('')] bg-no-repeat bg-cover gap-x-1 grid grid-cols-[minmax(0px,auto)_minmax(0px,auto)] grid-rows-[1fr] justify-start w-full bg-center mx-auto">
                  <div className="relative box-border caret-transparent flex flex-col justify-center max-w-full order-1">
                    <div className="box-border caret-transparent block max-w-full rounded-[3px]">
                      <div className="box-border caret-transparent max-w-full">
                        <div className="box-border caret-transparent max-w-full">
                          <div className="text-zinc-600 text-[22px] font-bold box-border caret-transparent leading-[28.6px] max-w-full text-left decoration-1 w-full overflow-hidden font-dm_sans md:leading-[22px]">
                            {props.totalPrice}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative box-border caret-transparent flex flex-col justify-center max-w-full">
                    <div
                      className={
                        props.hasDiscount
                          ? "box-border caret-transparent block max-w-full rounded-[3px]"
                          : "box-border caret-transparent hidden max-w-full rounded-[3px]"
                      }
                    >
                      <div className="box-border caret-transparent max-w-full">
                        <div className="box-border caret-transparent max-w-full">
                          <div className="text-zinc-600 box-border caret-transparent leading-6 max-w-full text-left line-through w-full overflow-hidden font-dm_sans md:leading-4">
                            {props.originalPrice}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative box-border caret-transparent flex flex-col justify-center max-w-full">
                <div className="box-border caret-transparent max-w-full text-left">
                  <div className="box-border caret-transparent flex max-w-full">
                    <div className="text-neutral-600 text-[22px] bg-[url('')] bg-no-repeat bg-cover box-border caret-transparent leading-[39.6px] max-w-full w-full overflow-hidden bg-center font-dm_sans">
                      <p className="box-border caret-transparent max-w-full">
                        Total :
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="box-border caret-transparent max-w-full block">
              <div className="box-border caret-transparent flex flex-col max-w-full">
                {props.isInStock ? (
                  <div className="box-border caret-transparent max-w-full text-left mb-2.5">
                    <button
                      aria-label="BUY NOW"
                      name="add"
                      type="submit"
                      className="relative text-white text-[26px] font-semibold items-center bg-rose-500 shadow-[rgba(0,0,0,0.25)_2.44929e-16px_4px_2px_0px] caret-transparent inline-flex justify-center leading-[33.8px] max-w-full opacity-30 text-center uppercase w-full px-6 py-[18px] rounded-[10px] font-oswald md:py-3 before:accent-auto before:box-border before:caret-transparent before:text-white before:block before:text-[26px] before:not-italic before:normal-nums before:font-semibold before:h-full before:tracking-[normal] before:leading-[33.8px] before:list-outside before:list-disc before:pointer-events-none before:absolute before:text-center before:indent-[0px] before:uppercase before:visible before:w-full before:rounded-[10px] before:border-separate before:left-0 before:top-0 before:font-oswald"
                    >
                      <div className="box-border caret-transparent flex max-w-full">
                        <span className="items-center box-border caret-transparent flex shrink-0 justify-center max-w-full z-[1] mr-2 md:mr-2.5">
                          <img
                            src={props.buyButtonIconUrl}
                            alt={props.buyButtonIconAlt}
                            className="box-border caret-transparent shrink-0 h-[26px]"
                          />
                        </span>
                        <span className="relative items-center box-border caret-transparent flex h-full max-w-full break-words overflow-hidden">
                          BUY NOW
                        </span>
                      </div>
                    </button>
                  </div>
                ) : (
                  <div className="box-border caret-transparent hidden max-w-full text-left mb-2.5">
                    <button
                      aria-label="Out of stock"
                      type="button"
                      className="relative text-white text-[26px] font-semibold items-center bg-rose-500 shadow-[rgba(0,0,0,0.25)_2.44929e-16px_4px_2px_0px] caret-transparent inline-flex justify-center leading-[33.8px] max-w-full opacity-30 text-center uppercase w-full px-6 py-[18px] rounded-[10px] font-oswald md:py-3 before:accent-auto before:box-border before:caret-transparent before:text-white before:block before:text-[26px] before:not-italic before:normal-nums before:font-semibold before:h-full before:tracking-[normal] before:leading-[33.8px] before:list-outside before:list-disc before:pointer-events-none before:absolute before:text-center before:indent-[0px] before:uppercase before:visible before:w-full before:rounded-[10px] before:border-separate before:left-0 before:top-0 before:font-oswald"
                    >
                      <div className="box-border caret-transparent flex max-w-full">
                        <span className="items-center box-border caret-transparent flex shrink-0 justify-center max-w-full z-[1] mr-2 md:mr-2.5">
                          <img
                            src={props.buyButtonIconUrl}
                            alt={props.buyButtonIconAlt}
                            className="box-border caret-transparent shrink-0 h-[26px]"
                          />
                        </span>
                        <span className="relative items-center box-border caret-transparent flex h-full max-w-full break-words overflow-hidden">
                          Out of stock
                        </span>
                      </div>
                    </button>
                  </div>
                )}
              </div>
            </div>
            {!props.hasDiscount ? (
              <div className="box-border caret-transparent max-w-full relative content-start bg-[url('')] bg-no-repeat bg-cover gap-x-0 grid grid-cols-[minmax(0px,12fr)] grid-rows-[1fr] justify-start w-[90%] bg-center mt-2 mx-auto px-0 md:w-[1200px] md:px-[15px]">
                <div className="relative box-border caret-transparent flex flex-col justify-center max-w-full">
                  <div className="box-border caret-transparent max-w-full relative content-center bg-[url('')] bg-no-repeat bg-cover gap-x-0 grid grid-cols-[minmax(0px,auto)_minmax(0px,auto)_minmax(0px,auto)] grid-rows-[1fr] justify-center gap-y-0 w-[90%] bg-center mx-auto px-0 md:gap-x-[5px] md:gap-y-[normal] md:w-[1200px] md:px-2.5">
                    <div className="relative box-border caret-transparent hidden flex-col justify-center max-w-full"></div>
                    <div className="relative box-border caret-transparent flex flex-col justify-center max-w-full">
                      <div className="box-border caret-transparent max-w-full">
                        <div className="box-border caret-transparent flex max-w-full">
                          <div className="bg-[url('')] bg-no-repeat bg-cover box-border caret-transparent max-w-full text-left w-[100px] bg-center">
                            <ul className="box-border caret-transparent gap-x-0 inline-flex flex-col list-none max-w-full gap-y-0 pl-0 md:gap-x-4 md:gap-y-4">
                              <li className="items-center box-border caret-transparent gap-x-1 flex max-w-full w-full md:gap-x-[5px]">
                                <div className="relative box-border caret-transparent flex flex-col max-w-full">
                                  <div
                                    role="presentation"
                                    className="relative box-border caret-transparent shrink-0 max-w-full text-center"
                                  >
                                    <div className="box-border caret-transparent flex h-full justify-center max-w-full w-full">
                                      <picture className="box-border caret-transparent contents max-w-full">
                                        <img
                                          src={props.guaranteeIconUrl}
                                          alt={props.guaranteeIconAlt}
                                          className="aspect-[32_/_32] box-border caret-transparent max-w-full object-cover w-8"
                                        />
                                      </picture>
                                    </div>
                                  </div>
                                </div>
                                <div className="relative box-border caret-transparent flex flex-col max-w-full w-full">
                                  <div className="box-border caret-transparent max-w-full">
                                    <div className="box-border caret-transparent flex max-w-full">
                                      <div className="text-zinc-600 text-[9px] bg-[url('')] bg-no-repeat bg-cover box-border caret-transparent leading-[10.8px] max-w-full w-full overflow-hidden bg-center font-cabin md:text-[10px] md:leading-3">
                                        <p className="text-[9px] box-border caret-transparent leading-[10.8px] max-w-full md:text-[10px] md:leading-3">
                                          60 DAYS
                                          <br className="text-[9px] box-border caret-transparent leading-[10.8px] max-w-full md:text-[10px] md:leading-3" />
                                          MONEY BACK
                                          <br className="text-[9px] box-border caret-transparent leading-[10.8px] max-w-full md:text-[10px] md:leading-3" />
                                          GUARANTEE
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
                    <div className="relative box-border caret-transparent hidden flex-col justify-center max-w-full"></div>
                  </div>
                </div>
              </div>
            ) : (
              <div className={props.featuresContainerVariant}>
                <div className="relative box-border caret-transparent flex flex-col justify-center max-w-full">
                  <div className="box-border caret-transparent max-w-full">
                    <div className="box-border caret-transparent flex max-w-full">
                      <div className="bg-[url('')] bg-no-repeat bg-cover box-border caret-transparent max-w-full text-left w-full bg-center">
                        <ul className={props.featuresListVariant}>
                          <li className={props.featuresItemVariant}>
                            <div className="relative box-border caret-transparent flex flex-col max-w-full">
                              <div
                                role="presentation"
                                className="relative box-border caret-transparent shrink-0 max-w-full text-center"
                              >
                                <div className="box-border caret-transparent flex h-full justify-center max-w-full w-full">
                                  <picture className="box-border caret-transparent contents max-w-full">
                                    <img
                                      src={props.guaranteeIconUrl}
                                      alt={props.guaranteeIconAlt}
                                      className="aspect-[32_/_32] box-border caret-transparent max-w-full object-cover w-8"
                                    />
                                  </picture>
                                </div>
                              </div>
                            </div>
                            <div className="relative box-border caret-transparent flex flex-col max-w-full w-full">
                              <div className="box-border caret-transparent max-w-full">
                                <div className="box-border caret-transparent flex max-w-full">
                                  <div className="text-zinc-600 text-[9px] bg-[url('')] bg-no-repeat bg-cover box-border caret-transparent leading-[10.8px] max-w-full w-full overflow-hidden bg-center font-cabin md:text-[10px] md:leading-3">
                                    <p className="text-[9px] box-border caret-transparent leading-[10.8px] max-w-full md:text-[10px] md:leading-3">
                                      60 DAYS
                                      <br className="text-[9px] box-border caret-transparent leading-[10.8px] max-w-full md:text-[10px] md:leading-3" />
                                      MONEY BACK
                                      <br className="text-[9px] box-border caret-transparent leading-[10.8px] max-w-full md:text-[10px] md:leading-3" />
                                      GUARANTEE
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
                <div className="relative box-border caret-transparent flex flex-col justify-center max-w-full">
                  <div className="box-border caret-transparent max-w-full">
                    <div className="box-border caret-transparent flex max-w-full">
                      <div className="bg-[url('')] bg-no-repeat bg-cover box-border caret-transparent max-w-full text-center w-full bg-center pl-0 pt-1 md:pl-[5px] md:pt-1.5">
                        <ul className={props.shippingListVariant}>
                          <li className={props.shippingItemVariant}>
                            <div className="relative box-border caret-transparent flex flex-col max-w-full">
                              <div
                                role="presentation"
                                className="relative box-border caret-transparent shrink-0 max-w-full"
                              >
                                <div className="box-border caret-transparent flex h-full justify-center max-w-full w-full">
                                  <picture className="box-border caret-transparent contents max-w-full">
                                    <img
                                      src={props.shippingIconUrl}
                                      alt={props.shippingIconAlt}
                                      className="aspect-[32_/_32] box-border caret-transparent max-w-full object-cover w-8 md:w-full"
                                    />
                                  </picture>
                                </div>
                              </div>
                            </div>
                            <div className="relative box-border caret-transparent flex flex-col max-w-full w-full">
                              <div className="box-border caret-transparent max-w-full text-right md:text-left">
                                <div className="box-border caret-transparent flex max-w-full text-right md:text-left">
                                  <div className="text-zinc-600 text-[9px] bg-[url('')] bg-no-repeat bg-cover box-border caret-transparent leading-[10.8px] max-w-full text-left w-auto overflow-hidden bg-center font-cabin md:text-[10px] md:leading-3 md:w-full">
                                    <p className="text-[9px] box-border caret-transparent leading-[10.8px] max-w-full md:text-[10px] md:leading-3">
                                      FREE
                                      <br className="text-[9px] box-border caret-transparent leading-[10.8px] max-w-full md:text-[10px] md:leading-3" />
                                      SHIPPING
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
                <div className="relative box-border caret-transparent flex flex-col justify-center max-w-full">
                  <div className="box-border caret-transparent max-w-full">
                    <div className="box-border caret-transparent flex max-w-full">
                      <div className="bg-[url('')] bg-no-repeat bg-cover box-border caret-transparent max-w-full text-right w-full bg-center pl-0 md:pl-px">
                        <ul className={props.treatListVariant}>
                          <li className={props.treatItemVariant}>
                            <div className="relative box-border caret-transparent flex flex-col max-w-full">
                              <div
                                role="presentation"
                                className="relative box-border caret-transparent shrink-0 max-w-full text-center"
                              >
                                <div className="box-border caret-transparent flex h-full justify-center max-w-full w-full">
                                  <picture className="box-border caret-transparent contents max-w-full">
                                    <img
                                      src={props.treatIconUrl}
                                      alt={props.treatIconAlt}
                                      className="aspect-[32_/_32] box-border caret-transparent max-w-full object-cover w-8 md:w-full"
                                    />
                                  </picture>
                                </div>
                              </div>
                            </div>
                            <div className="relative box-border caret-transparent flex flex-col max-w-full w-full">
                              <div className="box-border caret-transparent max-w-full text-right md:text-left">
                                <div className="box-border caret-transparent flex max-w-full text-right md:text-left">
                                  <div className="text-zinc-600 text-[9px] bg-[url('')] bg-no-repeat bg-cover box-border caret-transparent leading-[10.8px] max-w-full text-left w-auto overflow-hidden bg-center font-cabin md:text-[10px] md:leading-3 md:w-full">
                                    <p className="text-[9px] box-border caret-transparent leading-[10.8px] max-w-full md:text-[10px] md:leading-3">
                                      FREE
                                      <br className="text-[9px] box-border caret-transparent leading-[10.8px] max-w-full md:text-[10px] md:leading-3" />
                                      HALLOWEEN
                                      <br className="text-[9px] box-border caret-transparent leading-[10.8px] max-w-full md:text-[10px] md:leading-3" />
                                      TREAT
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
            )}
          </div>
        </div>
      </form>
    </div>
  );
};
