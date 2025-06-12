import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants';

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container"> 
        <a href="/">
          <img 
          src={headerLogo}
          alt="Logo"
          width={130}
          height={29}
          />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
{/* //We could have just wriiten each links with <a></a> tag but another way with the use of constants.
// THAT WAY WE CAN IMMEDIATELY RETURN WITH PARENTHESIS FUNCTION AFTER BEING IMPORTED. */}
          {navLinks.map((item) => (
            <li key={item.label}>
              <a 
              href={item.href}
              className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="w-8 h-8 object-contain max-lg:block hidden cursor-pointer">
          <img 
            src={hamburger}
            alt="Hamburger Menu"
            width={25}
            height={25}
          />
        </div>
      </nav>
    </header>
  )
}

export default Nav