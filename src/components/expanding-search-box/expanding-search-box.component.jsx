import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import "./expanding-search-box.styles.scss";

function ExpandingSearchBox() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    navigate(query ? `/search/?query=${query}` : "/search");
  };

  return (
    <div class="search">
      <input
        type="text"
        class="search__input"
        aria-label="search"
        placeholder="Search Products Here!"
        onChange={(e) => setQuery(e.target.value)}
        // onSubmit={submitHandler} 
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
