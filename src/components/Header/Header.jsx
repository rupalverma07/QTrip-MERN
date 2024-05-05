import React from 'react'

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light ps-3">
    <a className="navbar-brand" href="../../">QTrip</a>
    <div id="city-name"></div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav d-flex justify-content-end w-100">
            <li className="nav-item active">
                <a className="nav-link" href="../../">Home</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="./reservations/">Reservations</a>
            </li>
        </ul>
    </div>
</nav>
  )
}

export default Header
