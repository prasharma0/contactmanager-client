import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const Home = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  useEffect(() => {
    !user && navigate("/login", { replace: true });
  }, []);
  return (
    <>
      <div className="jumbotron">
        <h3>Welcome {user ? user.name : null}</h3>
        <p className="lead">This is your dashboard</p>
        <hr className="my-4" />

        {/* <Link to="/create" style={{ textDecoration: "none" }}>
          <a className="bt bt-info">create</a>
        </Link> */}
        <Link className="btn btn-info" to={`/create`}>
            Create 
          </Link>


      </div>
    </>
  );
};
export default Home;
