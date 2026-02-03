import { ProductForm } from "@/sections/ProductSelector/components/ProductForm";

export type ProductCardProps = {
  cardVariant: string;
  badgeVariant: string;
  badgeTextVariant: string;
  badgeTitle: string;
  hasDiscount: boolean;
  discountPercentage?: string;
  discountBadgeVariant?: string;
  productImageUrl: string;
  productImageAlt: string;
  productImageVariant: string;
  pricePerBottle: string;
  priceVariant: string;
  totalPrice: string;
  originalPrice: string;
  isInStock: boolean;
  guaranteeIconUrl: string;
  guaranteeIconAlt: string;
  buyButtonIconUrl: string;
  buyButtonIconAlt: string;
  featuresContainerVariant: string;
  featuresListVariant: string;
  featuresItemVariant: string;
  shippingListVariant: string;
  shippingItemVariant: string;
  treatListVariant: string;
  treatItemVariant: string;
  shippingIconUrl?: string;
  shippingIconAlt?: string;
  treatIconUrl?: string;
  treatIconAlt?: string;
};

export const ProductCard = (props: ProductCardProps) => {
  return (
    <div
      className={`relative content-start bg-white bg-[url('')] bg-no-repeat bg-cover box-border caret-transparent gap-x-2 grid grid-cols-[minmax(0px,12fr)] grid-rows-[1fr] justify-start max-w-full w-full bg-center mb-5 mx-auto pb-6 rounded-[20px] border-solid md:w-[1200px] md:mb-0 ${props.cardVariant}`}
    >
      <div className="relative box-border caret-transparent flex flex-col justify-start max-w-full">
        <div
          className={`relative content-start bg-[url('')] bg-no-repeat bg-cover box-border caret-transparent gap-x-2 grid grid-cols-[minmax(0px,12fr)] grid-rows-[1fr] justify-start max-w-full w-full bg-center -mt-0.5 mb-4 mx-auto px-2.5 py-[15px] md:w-[1200px] ${props.badgeVariant}`}
        >
          <div className="relative box-border caret-transparent flex flex-col justify-start max-w-full">
            <div className="box-border caret-transparent max-w-full text-left">
              <div className="box-border caret-transparent flex max-w-full">
                <h2
                  className={`text-lg font-bold bg-[url('')] bg-no-repeat bg-cover box-border caret-transparent leading-[23.4px] max-w-full text-center uppercase w-full overflow-hidden bg-center font-inter md:text-xl md:leading-[26px] ${props.badgeTextVariant}`}
                >
                  {props.badgeTitle}
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="box-border caret-transparent block max-w-full">
          <ProductForm
            hasDiscount={props.hasDiscount}
            discountPercentage={props.discountPercentage}
            discountBadgeVariant={props.discountBadgeVariant}
            productImageUrl={props.productImageUrl}
            productImageAlt={props.productImageAlt}
            productImageVariant={props.productImageVariant}
            pricePerBottle={props.pricePerBottle}
            priceVariant={props.priceVariant}
            totalPrice={props.totalPrice}
            originalPrice={props.originalPrice}
            isInStock={props.isInStock}
            guaranteeIconUrl={props.guaranteeIconUrl}
            guaranteeIconAlt={props.guaranteeIconAlt}
            buyButtonIconUrl={props.buyButtonIconUrl}
            buyButtonIconAlt={props.buyButtonIconAlt}
            featuresContainerVariant={props.featuresContainerVariant}
            featuresListVariant={props.featuresListVariant}
            featuresItemVariant={props.featuresItemVariant}
            shippingListVariant={props.shippingListVariant}
            shippingItemVariant={props.shippingItemVariant}
            treatListVariant={props.treatListVariant}
            treatItemVariant={props.treatItemVariant}
            shippingIconUrl={props.shippingIconUrl}
            shippingIconAlt={props.shippingIconAlt}
            treatIconUrl={props.treatIconUrl}
            treatIconAlt={props.treatIconAlt}
          />
        </div>
      </div>
    </div>
  );
};
