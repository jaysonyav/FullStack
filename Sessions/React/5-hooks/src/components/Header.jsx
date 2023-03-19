import React from 'react'

const Header = ({toggleShow}) => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-primary shadow">
      <div className="container">
        <a className="navbar-brand" href="#">Expense Tracker</a>
        <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#myNavBar">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="myNavBar">
            <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                <li className="nav-item">
                    <button className="nav-link btn btn-primary" href="#" aria-current="page" onClick={toggleShow}>ADD</button>
                </li>
                </ul>
        </div>
  </div>
</nav>
  )
}

export default Header


