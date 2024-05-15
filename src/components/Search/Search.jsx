import { useState, useFormState } from "react";
import "./search.css";
import Button from "../Button/Button";

export default function Search() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <form className="search-form" action={searchMovie}>
      <label htmlFor="search-movie"></label>
      <input
        type="text"
        id="search-movie"
        name="search-movie"
        value={inputValue}
        onChange={handleInputChange}
      />
      <Button type="submit" text="Search" id="btn-search" />
    </form>
  );
}
