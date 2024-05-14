import Link from "next/link";
import Image from "next/image";
import "./navbar.css";

export default function Navbar() {
  return (
    <>
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
        <ul>
          <li>
            <Link href=""></Link>
          </li>
          <li>
            <Link href=""></Link>
          </li>
          <li>
            <Link href=""></Link>
          </li>
        </ul>
      </div>
    </>
  );
}
