import React from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import logo from '../assets/logo.png';
import menu from '../assets/menu.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import '../styles/Navbar.css';

function Navbar (props) {

    const navigate = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams();

    function handleSearchSubmit(event) {
        event.preventDefault();
        const searchQuery = event.target.elements.search.value;

        setSearchParams({ query: searchQuery });

        navigate(`/search?query=${encodeURIComponent(searchQuery)}`);

        window.location.reload();

    }
    
    return (
        <nav className="navbar" style={props.color}>
            <Link to={"/"} style={{ textDecoration: 'none' }}>
                <span className="logo">
                    <img src={logo} />
                    <p>MovieBox</p>
                </span>
            </Link>
            <form className="search-bar" onSubmit={handleSearchSubmit}>
                <input id="search" name="search" type="text" placeholder="Search"/>
                <button type="submit">
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </form>
            <span className="menu">
                <a className="sign-in" href="#">Sign in</a>
                <span className="menu-icon">
                    <img src={menu} />
                </span>
            </span>
        </nav>
    )
}

export default Navbar