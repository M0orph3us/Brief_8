import Image from "next/image";
import "./herroBanner.css";

export default function HeroBanner() {
  return (
    <>
      <Image
        className="logo-desktop"
        src="/imgs/Logo_desktop.webp"
        width={200}
        height={113}
        alt="hero banner"
        priority={true}
      />
      <h1>Banner</h1>
    </>
  );
}
