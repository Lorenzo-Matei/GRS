import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import "./expanding-search-box.styles.scss";

function ExpandingSearchBox() {
  const navigate = useNavigate();
  const [query, setQuery] = useState(""); // state for the search entered by user

  const submitHandler = (e) => {
    e.preventDefault();
    // navigate(`/products/query/${query}`); //alternate
    navigate(
      query
        ? `/search?category=all&subCategory=all&microCategory=all&query=${query}&price=all&rating=all&order=relevant&page=1`
        : "/search"
    ); //previous code
  };

  const enterKeySubmitHandler = (event) => {
    if (event.key == "Enter") {
      submitHandler(event);
    }
  };

  return (
    <div class="search">
      <input
        type="text"
        class="search__input"
        aria-label="search"
        placeholder="Search Products Here!"
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={enterKeySubmitHandler}
      />

      <button
        type="submit"
        class="search__submit"
        aria-label="submit search"
        id="button-search"
        onClick={submitHandler}
      >
        <FaSearch className="fa-search" />
      </button>
    </div>
  );
}

export default ExpandingSearchBox;
