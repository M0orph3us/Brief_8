import ReactCaroussel from "react-caroussel";
import "react-caroussel/dist/index.css";
import Image from "next/image";
import "./caroussel.css";

export default function Caroussel({ data }) {
  console.log(data);
  // return (
  //   <>
  //     <ReactCaroussel
  //       slidesToShow={3}
  //       slidesToScroll={3}
  //       infinite={true}
  //       autoplay={false}
  //       speed={2} // 2s: speed of autoplay
  //       display={{
  //         arrows: true,
  //         dots: true,
  //       }}
  //     >
  //       {props.map((img, k) => (
  //         <Image
  //           key={k}
  //           className="img-caroussel"
  //           src={`/imgs/${img}`}
  //           width={200}
  //           height={113}
  //           alt="image carousel"
  //           priority={true}
  //         />
  //       ))}
  //     </ReactCaroussel>
  //   </>
  // );
}
