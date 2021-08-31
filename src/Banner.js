import React from 'react'
import "./Banner.css"
function Banner() {
    function truncate(string, n)
    {
        return string?.length > n ? string.substr(0, n - 1) + '...' : string;
    }

    return (
        <header className="banner" style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://lanetaneta.com/wp-content/uploads/2021/06/Los-programas-y-peliculas-mas-importantes-de-Netflix-en-2021.jpg")`,
            backgroundPosition: "center center"
        }}>
            <div className="banner__contents">
                <h1 className="banner__title">Movie Name</h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>                   
                    <button className="banner__button">My List</button>
                </div>
                <div className="banner__description">
                    {truncate("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 150)}
                </div>
            </div>
            <div className="banner__fadeButton">
                </div>
        </header>
    )
}

export default Banner
