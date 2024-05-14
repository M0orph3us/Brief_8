"use client";

import Caroussel from "@/components/Caroussel/Caroussel";
import HeroBanner from "@/components/HeroBanner/HeroBanner";
import { getData } from "./api/route";

export default function Home() {
  const data = getData();
  return (
    <>
      <HeroBanner />
      <Caroussel data={data} />
    </>
  );
}
