"use client";

import ReactCaroussel from "react-caroussel";
import "react-caroussel/dist/index.css";
import Image from "next/image";
import "./caroussel.css";
import Link from "next/link";

export default function Caroussel({ title, results }) {
  return (
    <div className="caroussel-container">
      <h2>{title}</h2>
      <ReactCaroussel
        slidesToShow={4}
        slidesToScroll={1}
        infinite={true}
        autoplay={true}
        speed={5} // 2s: speed of autoplay
        display={{
          arrows: false,
          dots: false,
        }}
      >
        {results.map((result, k) => (
          <Link key={k} href={`/detail/${result.id}`}>
            <Image
              className="img-caroussel"
              src={`https://image.tmdb.org/t/p/w500${result["backdrop_path"]}`}
              width={200}
              height={113}
              alt={`image of ${result["title"]}`}
              priority={true}
            />
          </Link>
        ))}
      </ReactCaroussel>
    </div>
  );
}
