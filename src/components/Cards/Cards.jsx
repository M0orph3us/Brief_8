"use client";
import Link from "next/link";
import Image from "next/image";
import "./cards.css";

export default function Cards({ data }) {
  function addFav(id) {
    localStorage.setItem("my fav", id);
  }
  return (
    <div className="card-container">
      {data.map((result, k) => (
        <div key={k}>
          <Link href={`/detail/${result.id}`}>
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
          <button onClick={() => addFav(result.id)}>Add Fav</button>
        </div>
      ))}
    </div>
  );
}
