import "./navbar.css";
import Image from "next/image";
// import LogoDesktop from "../../../public/imgs/Logo_desktop.webp";

export default function Navbar() {
  return (
    <header>
      <div className="navbar-mobile"></div>
      <div className="navbar-desktop">
        <Image
          className="logo-desktop"
          src="/imgs/Logo_desktop.webp"
          width={200}
          height={113}
          alt="logo"
          priority={true}
        />
      </div>
    </header>
  );
}
