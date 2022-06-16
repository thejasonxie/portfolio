const NavLink = ({
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
            width="24"
            height="24"
            className="w-6 h-6 sm:inline-block mx-auto"
            src={imgSrc}
            alt={imgAlt}
          />
          <span className="inline-block mx-2 text-xs text-center sm:text-base dark:text-white">
            {name}
          </span>
        </>
      )}
    </a>
  );
};

export default NavLink;
