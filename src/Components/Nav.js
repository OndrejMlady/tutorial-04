import React from "react";
import { Link } from "react-router-dom";


const Nav = ({ search, setSearch, title, }) => {
  return (
    <nav className="Nav">
      <h1 className="H1"><Link className="H1" to="/">{title}</Link></h1>
      
      <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="search">Search Post</label>
        <input
          id="search"
          type="text"
          placeholder="Search Posts"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/post">Post</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  )
}
export default Nav;