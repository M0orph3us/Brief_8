"use client";
import { useEffect, useState } from "react";
import { searchMovie } from "@/server/searchMovie";
import "./search.css";

export default function Search() {
  const [value, setValue] = useState("");
  function handleSearch(inputValue) {
    setValue(inputValue);
  }
  useEffect(() => {
    if (value) {
      searchMovie(value);
    }
  }, [value]);

  return (
    <div className="search-form">
      <label htmlFor="search-movie">Search : </label>
      <input
        type="text"
        id="search-movie"
        name="search-movie"
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
      />
    </div>
  );
}
