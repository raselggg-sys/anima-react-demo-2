export type FooterColumnProps = {
  title: string;
  links: Array<{
    href: string;
    ariaLabel: string;
    text: string;
    className?: string;
  }>;
  columnVariant?: string;
};

export const FooterColumn = (props: FooterColumnProps) => {
  return (
    <div
      className={`items-start box-border caret-transparent flex flex-col overflow-hidden ${props.columnVariant || ""}`}
    >
      <div className="text-black font-bold box-border caret-transparent mb-[5px] font-poppins">
        {props.title}
      </div>
      <div className="text-sm box-border caret-transparent flex flex-col leading-[22px] gap-y-3">
        {props.links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            aria-label={link.ariaLabel}
            className="text-slate-600/80 items-center box-border caret-transparent flex"
          >
            <span
              className={`relative text-black font-medium box-border caret-transparent block leading-[16.8px] overflow-hidden before:accent-auto before:bg-slate-600 before:box-border before:caret-transparent before:text-black before:block before:text-sm before:not-italic before:normal-nums before:font-medium before:h-px before:tracking-[normal] before:leading-[16.8px] before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-start before:indent-[0px] before:normal-case before:visible before:w-full before:overflow-hidden before:border-separate before:left-0 before:bottom-0 before:font-dm_sans ${link.className || ""}`}
            >
              {link.text}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};
