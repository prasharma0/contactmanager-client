
import {Link} from "react-router-dom";
const Navbar = ({title = "Contact Manager"}) => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container-fluid">
        <Link to="/" style={{ textDecoration: 'none' }}>
        <a class="navbar-brand">
          {title}
        </a>
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse"id="navbarColor01" >
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <Link to = "/login" style={{ textDecoration: 'none' }}>
              <a class="nav-link" >
                Login
                
              </a>
              </Link>
            </li>
            <li class="nav-item" >
              <Link to = "/register" style={{ textDecoration: 'none' }}>
              <a class="nav-link" >
                Register
              </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
