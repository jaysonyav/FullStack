import React from 'react'

const Navigation = ({brand,classes}) => {
  return (
    <nav className={`navbar navbar-expand-lg ${classes}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{brand}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link active">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Services</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navigation