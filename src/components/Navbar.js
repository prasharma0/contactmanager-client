import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import ToastContext from "../context/ToastContext";
const Navbar = ({ title = "AMS console" }) => {
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const { toast } = useContext(ToastContext);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <Link to="/" style={{ textDecoration: "none" }}>
          <a className="navbar-brand">{title}</a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav ms-auto">
            {user ? (
              <>

              <li className="nav-item" >
              <Link to = "/mycontacts" style={{ textDecoration: 'none' }}>
              <a className="nav-link" >
                All Contacts
                
              </a>
              </Link>
            </li>





              <li className="nav-item" >
              <Link to = "/create" style={{ textDecoration: 'none' }}>
              <a className="nav-link" >
                create
                
              </a>
              </Link>
            </li>

           

                <li
                  className="nav-item"
                  onClick={() => {
                    console.log(setUser(null));
                    localStorage.clear();
                    toast.success(" You are Logged out!");
                    navigate("/login", { replace: true });
                  }}
                >
                  <button className="btn btn-danger">Logout</button>
                </li>{" "}
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link to="/login" style={{ textDecoration: "none" }}>
                    <a className="nav-link">Login</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/register" style={{ textDecoration: "none" }}>
                    <a className="nav-link">Register</a>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
