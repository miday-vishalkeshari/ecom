import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { BsShop } from 'react-icons/bs'
import { useAuth } from '../../Context/Auth'

const Header = () => {
  const [auth, setAuth] = useAuth();

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: '',
    })
    localStorage.removeItem('auth');
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link to="/" className="navbar-brand" href="#" >{<BsShop />} Ecomm V</Link>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link " >Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/category" className="nav-link">Category</NavLink>
              </li>


              {
                (!auth.user) ? (
                  <>
                    <li className="nav-item">
                      <NavLink to="/register" className="nav-link " >Register</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/login" className="nav-link " >Login</NavLink>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="nav-item dropdown">
                      <NavLink
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        {auth?.user?.name}
                      </NavLink>
                      <ul className="dropdown-menu">
                        <li>
                        
                          <NavLink
                           className="dropdown-item"
                           to={`/dashboard/${auth?.user?.role === 1 ? "admin" : "user"}`}
                           
                          >
                            Dashboard
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            className="dropdown-item"
                            onClick={handleLogout}
                            to="/login"
                            
                          >
                            Logout
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                  </>
                )
              }

              <li className="nav-item">
                <NavLink to="/cart" className="nav-link " >Cart(0)</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </>
  )
}

export default Header
