const NavButton = ({
  name,
  href,
  imgSrc,
  imgAlt,
  children,
  target,
  extraClass,
}) => {
  return (
    <a className={`nav-link ${extraClass}`} href={href} target={target}>
      {children ? (
        children
      ) : (
        <>
          <img
            className="w-6 h-6 sm:inline-block mx-auto"
            src={imgSrc}
            alt={imgAlt}
          />
          <span className="inline-block mx-2 text-xs sm:text-base">{name}</span>
        </>
      )}
    </a>
  );
};

export default NavButton;
