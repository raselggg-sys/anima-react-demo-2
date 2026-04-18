export const FooterLogo = () => {
  return (
    <div className="items-start box-border caret-transparent flex col-end-[span_2] col-start-1 overflow-hidden">
      <a
        href="https://beyondalpha.co/"
        aria-label="Logo"
        className="box-border caret-transparent block text-start w-60 mr-5 mb-8 md:text-right md:mb-0"
      >
        <img
          src="https://beyondalpha.co/cdn/shop/files/ba-logo.png?v=1728284143&width=160"
          alt=""
          className="aspect-[auto_1_/_1] box-border caret-transparent max-w-full text-start w-[140px] md:text-right"
        />
      </a>
      <div className="text-slate-600/80 text-sm box-border caret-transparent leading-[22px] overflow-hidden">
        <p className="text-black box-border caret-transparent leading-[18.2px]">
          <strong className="font-bold box-border caret-transparent">
            About Beyond Alpha
          </strong>
          <br className="box-border caret-transparent" />
          100% natural formulas for men that adapt to your unique body’s
          chemistry to boost weight loss &amp; muscle growth, supercharge your
          drive, elevate your energy, and restore your confidence.{" "}
          <strong className="font-bold box-border caret-transparent">
            Born in NYC.
          </strong>
        </p>
        <ul
          role="list"
          className="items-center box-border caret-transparent gap-x-3 flex list-none gap-y-3 mt-[15px] pl-0"
        >
          <li className="bg-stone-200 box-border caret-transparent rounded-[100px]">
            <a
              href="https://www.instagram.com/gobeyondalpha/"
              aria-label="Instagram"
              className="text-black text-[15.4px] font-medium items-center box-border caret-transparent flex h-11 justify-center leading-[24.2px] max-w-full w-11"
            >
              <img
                src="https://c.animaapp.com/ml2ohkbneWFNKS/assets/icon-13.svg"
                alt="Icon"
                className="box-border caret-transparent shrink-0 h-5 w-5"
              />
            </a>
          </li>
          <li className="bg-stone-200 box-border caret-transparent rounded-[100px]">
            <a
              href="https://www.facebook.com/gobeyondalpha/"
              aria-label="Facebook"
              className="text-black text-[15.4px] font-medium items-center box-border caret-transparent flex h-11 justify-center leading-[24.2px] max-w-full w-11"
            >
              <img
                src="https://c.animaapp.com/ml2ohkbneWFNKS/assets/icon-14.svg"
                alt="Icon"
                className="box-border caret-transparent shrink-0 h-5 w-5"
              />
            </a>
          </li>
          <li className="bg-stone-200 box-border caret-transparent rounded-[100px]">
            <a
              href="https://youtube.com/@gobeyondalpha"
              aria-label="Youtube"
              className="text-black text-[15.4px] font-medium items-center box-border caret-transparent flex h-11 justify-center leading-[24.2px] max-w-full w-11"
            >
              <img
                src="https://c.animaapp.com/ml2ohkbneWFNKS/assets/icon-15.svg"
                alt="Icon"
                className="box-border caret-transparent shrink-0 h-5 w-5"
              />
            </a>
          </li>
          <li className="bg-stone-200 box-border caret-transparent rounded-[100px]">
            <a
              href="https://www.tiktok.com/@_beyondalpha_"
              aria-label="Tiktok"
              className="text-black text-[15.4px] font-medium items-center box-border caret-transparent flex h-11 justify-center leading-[24.2px] max-w-full w-11"
            >
              <img
                src="https://c.animaapp.com/ml2ohkbneWFNKS/assets/icon-16.svg"
                alt="Icon"
                className="box-border caret-transparent shrink-0 h-5 w-5"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
