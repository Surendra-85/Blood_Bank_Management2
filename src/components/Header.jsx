import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <div class="container-fluid p-0">
             <div class="row"> 
              <div class="col-sm-12">

        <nav class="navbar navbar-expand-sm header-container">
  <div class="container-fluid">
    <Link class="navbar-brand"   to={'/'}>Blood Bank</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse navbar-container" id="navbarNav">
      <ul class="navbar-nav ">
        <li class="nav-item">
          <Link class="nav-link" aria-current="page"  to={'/'}>Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to={'/our_team'}>Out Team</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link"   to={'/about'}>About</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link"   to={'/contact'}>Contact</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
                      </div>
                     </div>
              </div>
    </div>
  )
}

export default Header;
