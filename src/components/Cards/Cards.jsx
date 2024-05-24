import Link from "next/link";
import Image from "next/image";
import "./cards.css";

export default function Cards({ data }) {
  return (
    <div className="card-container">
      {data.map((result, k) => (
        <Link key={k} href={`/detail/${result.id}`}>
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
        </Link>
      ))}
    </div>
  );
}
