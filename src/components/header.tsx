import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__logo-container">
        <Link to="/">
          <img src="/images/logo.svg" alt="Movie Pop" />
        </Link>
      </h1>
      <a href="/pages/bookmark.html" className="header__bookmark-btn">
        <span>bookmarked movies</span>
      </a>
      <div className="header__search-wrapper">
        <button
          type="button"
          className="header__open-search-form-btn"
          aria-label="open search"
        ></button>
        <form role="search" className="header__search-form">
          <button
            type="submit"
            className="header__search-submit"
            aria-label="search"
          ></button>
          <input className="header__search-input" type="text" required />
          <button
            type="button"
            className="header__cancel-btn"
            aria-label="cancel search"
          ></button>
        </form>
      </div>
    </header>
  );
};
export default Header;
