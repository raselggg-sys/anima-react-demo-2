export type LogoProps = {
  linkClassName: string;
  imageClassName: string;
};

export const Logo = (props: LogoProps) => {
  return (
    <a
      href="https://beyondalpha.co/"
      aria-label="Logo"
      className={`box-border caret-transparent col-end-[logo] col-start-[logo] row-end-[logo] row-start-[logo] justify-self-auto z-[2] md:justify-self-center ${props.linkClassName}`}
    >
      <img
        src="https://beyondalpha.co/cdn/shop/files/beyond-alpha-logo-svg.svg?v=1727351067&width=160"
        alt=""
        className={`aspect-[auto_1_/_1] box-border caret-transparent w-[60px] md:w-[100px] ${props.imageClassName}`}
      />
    </a>
  );
};
