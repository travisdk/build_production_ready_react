import { useMemo } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

const LogIn = () => {
  const { login, currentUser } = useAuthContext();

  return (
    !currentUser && (
      <button type="button" className="btn btn-warning" onClick={login}>
        Login
      </button>
    )
  );
};
const LogOut = () => {
  const { logout, currentUser } = useAuthContext();

  // !!currentUser ( = currentUser == true)

  return (
    !!currentUser && (
      <button type="button" className="btn btn-danger" onClick={logout}>
        Logout
      </button>
    )
  );
};
const Navigation = () => {
  const { currentUser } = useAuthContext();
  return (
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      {/* remove all links except HOME */}
      <li className="nav-item">
        <Link to="/" className="nav-link active" aria-current="page">
          Home
        </Link>
      </li>
      <li className="nav-item">
        {currentUser && (
          <Link to="/stockimages" className="nav-link" aria-current="page">
            My Stock Images
          </Link>
        )}
      </li>
    </ul>
  );
};

const SearchForm = () => {
  return (
    <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success" type="submit">
        Search
      </button>
    </form>
  );
};
function Dropdown() {
  const { currentUser } = useAuthContext();
  const username = useMemo(() => {
    return currentUser?.displayName || "Profile";
  }, [currentUser]);
  const avatar = useMemo(() => {
    return !!currentUser ? (
      <img
        className="rounded-circle"
        referrerPolicy="no-referrer"
        src={currentUser?.photoURL}
        alt={currentUser?.displayName}
        width={34}
        height={34}
      />
    ) : (
      "Login"
    );
  }, [currentUser]);
  return (
    <ul className="navbar-nav mb-2 mb-lg-0">
      {" "}
      {/* remove ms-auto */}
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          {avatar}
        </a>
        <ul className="dropdown-menu dropdown-menu-end " aria-labelledby="navbarDropdown">
          <li>
            {currentUser && (
              <Link className="dropdown-item text-center" to="/profile">
                {username}
              </Link>
            )}
          </li>
          <li>
            <hr className="dropdown divider" />
          </li>
          <div className="d-flex justify-content-center">
            <LogIn />
            <LogOut />
          </div>
        </ul>
      </li>
    </ul>
  );
}

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          ⚡ Firestock
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <Navigation />
          <SearchForm />
          <Dropdown />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
