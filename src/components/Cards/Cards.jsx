import "./cards.css";
import Image from "next/image";

export default function Cards({ data }) {
  return (
    <>
      {data.map((result, k) => (
        <div className="cards" key={k}>
          <h2>{result.title}</h2>
          <Image
            className="img-card"
            src={`https://image.tmdb.org/t/p/original${result["backdrop_path"]}`}
            width={200}
            height={113}
            alt={`image of ${result["title"]}`}
            priority={true}
          />
        </div>
      ))}
    </>
  );
}
