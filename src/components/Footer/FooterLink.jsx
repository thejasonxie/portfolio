const FooterLink = ({ name, href, imgSrc, imgAlt }) => {
  return (
    <>
      <a href={href} target="_blank" className="block sm:flex gap-2">
        <img src={imgSrc} alt={imgAlt} className="w-8 h-8 mx-auto" />
        <span className="dark:text-neutral-300 leading-8">{name}</span>
      </a>
    </>
  );
};

export default FooterLink;
