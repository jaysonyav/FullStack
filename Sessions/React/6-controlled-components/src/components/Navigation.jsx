import React from 'react'

const Navigation = ({auth}) => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div className="container">
            <a className="navbar-brand" href="#">My App</a>
            <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        {auth?
                            <a href='' className='nav-link'>Home</a>
                           : <button className='btn btn-warning'>Login</button>}
                    </li>
                </ul>
                
            </div>
      </div>
    </nav>
    
  )
}

export default Navigation