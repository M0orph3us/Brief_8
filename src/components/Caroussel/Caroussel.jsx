"use client";

import ReactCaroussel from "react-caroussel";
import "react-caroussel/dist/index.css";
import Image from "next/image";
import "./caroussel.css";

export default function Caroussel({ results }) {
  return (
    <>
      <ReactCaroussel
        slidesToShow={4}
        slidesToScroll={1}
        infinite={true}
        autoplay={true}
        speed={5} // 2s: speed of autoplay
        display={{
          arrows: false,
          dots: true,
        }}
      >
        {results.map((result, k) => (
          <Image
            key={k}
            className="img-caroussel"
            src={`https://image.tmdb.org/t/p/w500${result["backdrop_path"]}`}
            width={200}
            height={113}
            alt={`image of ${result["title"]}`}
            priority={true}
          />
        ))}
      </ReactCaroussel>
    </>
  );
}
