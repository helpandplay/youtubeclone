import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

const Navigator = (props) => {
  const searchRef = useRef();
  const handleSearch = (e) => {
    e.preventDefault();
    props.onSearch(searchRef.current.value);
  };
  return (
    <>
      <header className="header">
        <Link to="/">
          <figure className="logo">
            <i className="fab fa-earlybirds" />
            <span>PenguinTube</span>
          </figure>
        </Link>
        <form onSubmit={handleSearch} className="search_form">
          <input
            ref={searchRef}
            type="text"
            className="search"
            placeholder="search"
          />
          <button type="submit">
            <i className="fas fa-search" />
          </button>
        </form>
      </header>
    </>
  );
};

export default Navigator;
