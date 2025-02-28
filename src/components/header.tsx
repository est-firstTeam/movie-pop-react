import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import IcoSearch from "../../src/images/ico_search.svg?react";
import IcoClose from "../../src/images/ico_cancel.svg?react";
import useInput from "../hooks/useInput";

const Header = () => {
  const navigate = useNavigate();
  const [openSearchForm, setOpenSearchForm] = useState<boolean>(false);
  const { value: inputValue, onChange, resetValue } = useInput("");

  const goToBookMark = () => {
    navigate("/bookmark");
  };

  const handleToggleOpenSearchForm = () => {
    setOpenSearchForm(!openSearchForm);
  };

  const handleSearchSubmit = (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    event.preventDefault();
    navigate(`/search/${inputValue}`);
  };

  return (
    <header className="header">
      <h1 className="header__logo-container">
        <Link to="/">
          <img src="public/logo.svg" alt="Movie Pop" />
        </Link>
      </h1>
      <button onClick={goToBookMark} className="header__bookmark-btn">
        <span>bookmarked movies</span>
      </button>
      <div className="header__search-wrapper">
        {!openSearchForm && (
          <button
            type="button"
            className="header__open-search-form-btn"
            aria-label="open search"
            onClick={handleToggleOpenSearchForm}
          >
            <IcoSearch width="30" height="30" />
          </button>
        )}

        {openSearchForm && (
          <form role="search" className="header__search-form">
            <button
              type="submit"
              className="header__search-submit"
              aria-label="search"
              onClick={handleSearchSubmit}
            >
              <IcoSearch width="30" height="30" />
            </button>
            <input
              className="header__search-input"
              type="text"
              value={inputValue}
              onChange={onChange}
              required
              autoFocus
            />
            <button
              type="button"
              className="header__cancel-btn"
              aria-label="cancel search"
              onClick={() => {
                resetValue();
                handleToggleOpenSearchForm();
              }}
            >
              <IcoClose width="30" height="30" />
            </button>
          </form>
        )}
      </div>
    </header>
  );
};
export default Header;
