import "./cards.css";
import Image from "next/image";

export default function Cards(props) {
  return (
    <>
      {props.map((img, k) => (
        <div className="cards" key={k}>
          <Image
            className="img-caroussel"
            src={`/imgs/${img}`}
            width={200}
            height={113}
            alt="image carousel"
            priority={true}
          />
        </div>
      ))}
    </>
  );
}
