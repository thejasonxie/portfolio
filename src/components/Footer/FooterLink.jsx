const FooterLink = ({ name, href, imgSrc, imgAlt }) => {
  return (
    <>
      <a
        href={href}
        target="_blank"
        className="flex flex-col justify-end sm:flex-row sm:items-center"
      >
        <div className="flex w-8 h-8 mx-auto">
          <img
            height="32"
            width="32"
            src={imgSrc}
            alt={imgAlt}
            className="mx-auto object-contain max-h-full max-w-full"
          />
        </div>
        <span className="dark:text-neutral-300 leading-8">{name}</span>
      </a>
    </>
  );
};

export default FooterLink;
