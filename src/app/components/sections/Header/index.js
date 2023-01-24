import { useEffect, useState } from "react";
import { HEADER } from "../../../data";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { Link, Events, scrollSpy } from "react-scroll";

function Header() {
  const [opened, setOpened] = useState(false);
  const [navbarSticky, setNavbarSticky] = useState(false);

  const { logo, menus } = HEADER

  const nav = () => window.scrollY > 20 ? setNavbarSticky(true) : setNavbarSticky(false);

  useEffect(() => {
    // add event listener for scroll (react-scroll)
    Events.scrollEvent.register("begin");
    Events.scrollEvent.register("end");
    scrollSpy.update();
    window.addEventListener("scroll", nav);

    return () => {
      // remove event listener for scroll to unsubscribe
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
      window.removeEventListener("scroll", nav);
    };
  }, []);

  return (
    <header
      className={`z-50 w-full text-white fixed top-0 shadow-md sm:py-4 py-2.5 ${navbarSticky && "NavBar__sticky"}`}
    >
      <div className="container flex flex-wrap items-center justify-between">
        {/* ==== Logo ==== */}
        <a href="/">
          {logo.src ? (
            <img src={logo.src} className="h-12" alt="logo" />
          ) : (
            <h3 className="text-3xl font-Poppins font-medium text-white">
              {logo.alt}
            </h3>
          )}
        </a>
        {/* ==== Burger Menu ==== */}
        <span className="md:hidden">
          <div
            className="cursor-pointer text-white"
            onClick={() => setOpened((o) => !o)}
          >
            {!opened ? (
              <AiOutlineMenu size={29} />
            ) : (
              <AiOutlineClose size={29} />
            )}
          </div>
        </span>
        {/* ==== Menus ==== */}
        <div
          className={`${!opened && "hidden"} justify-between items-center w-full md:flex md:w-auto md:order-1`}
          id="mobile-menu-4"
        >
          <nav className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-base md:font-medium">
            {menus.map((link, index) => {
              return (
                <Link
                  activeClass="NavBar__active_menu"
                  key={index}
                  className={`NavBar__menu`}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
