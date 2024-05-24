import Link from "next/link";
import Image from "next/image";
import "./navbar.css";

export default function Navbar() {
  return (
    <>
      <div className="navbar-mobile"></div>
      <div className="navbar-desktop">
        <Link href="/">
          <Image
            className="logo-desktop"
            src="/imgs/Logo_desktop.webp"
            width={200}
            height={113}
            alt="logo"
            priority={true}
          />
        </Link>

        <ul>
          <li>
            <Link href="/popular/">Popular</Link>
          </li>
          <li>
            <Link href="/topRated/">Top Rated</Link>
          </li>
          <li>
            <Link href="/upComming/">Up Comming</Link>
          </li>
          <li>
            <Link href="/my-favorites/">My Favorites</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
