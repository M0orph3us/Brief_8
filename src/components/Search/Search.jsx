"use client";

import "./search.css";

export default function Search() {
  return (
    <form className="search-form" action="/search">
      <label htmlFor="search-movie">Search : </label>
      <input
        type="text"
        id="search-movie"
        name="search-movie"
        placeholder="Search movie"
      />
      <button type="submit">Search</button>
    </form>
  );
}
