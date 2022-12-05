import { signOut } from "firebase/auth";
import React from "react";
import { Button } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../Hooks/useAdmin";
import "./Header.css";
function Header() {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);

  const logout = () => {
    admin == false;
    signOut(auth);
    navigate("/");
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-custom py-2">
        <div className="container">
          <NavLink
            as={Link}
            to="/"
            className={({ isActive }) => (isActive ? "navbrand " : "navbrand")}
          >
            Syntax
          </NavLink>
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-center"
          >
            <Nav className="">
              <NavLink
                as={Link}
                to="/"
                className={({ isActive }) =>
                  isActive ? "navbarsActive" : "navbars"
                }
              >
                Home
              </NavLink>
              <NavLink
                as={Link}
                to="/service"
                className={({ isActive }) =>
                  isActive ? "navbarsActive" : "navbars"
                }
              >
                Service
              </NavLink>
              <NavLink
                as={Link}
                to="/content"
                className={({ isActive }) =>
                  isActive ? "navbarsActive" : "navbars"
                }
              >
                Content
              </NavLink>
              {admin && user ? (
                <>
                  <NavLink
                    as={Link}
                    to="/admin"
                    className={({ isActive }) =>
                      isActive ? "navbarsActive" : "navbars"
                    }
                  >
                    Admin
                  </NavLink>
                </>
              ) : (
                <></>
              )}
            </Nav>
          </Navbar.Collapse>
          <Nav className="justify-content-end ">
            {user ? (
              <>
                <Button className="d-none d-lg-block" onClick={logout}>
                  SignOut
                </Button>
              </>
            ) : (
              <NavLink
                as={Link}
                to="/login"
                className={({ isActive }) =>
                  isActive
                    ? "fs-4 text-warning px-3"
                    : "fs-4 text-white text-decoration-none px-3"
                }
              >
                Login
              </NavLink>
            )}

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasExample"
              aria-controls="offcanvasExample"
            >
              <span>
                <i className="fa-solid fa-bars-staggered text-white"></i>
              </span>
            </button>
          </Nav>

          <div
            className="offcanvas offcanvas-start d-lg-none"
            tabindex="-1"
            id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasExampleLabel">
                Logo
              </h5>
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <Nav className="d-block">
                <Nav.Link
                  href="#features"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseExample"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  Home<i className="fa-solid fa-chevron-down fa-xs"></i>
                </Nav.Link>
                <li className="nav-item dropdown">
                  <div
                    className="collapse ms-4"
                    id="collapseExample"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <Nav.Link className="text-black" href="#features">
                      Home 2
                    </Nav.Link>
                    <Nav.Link href="#features">Home 3</Nav.Link>
                    <Nav.Link href="#features">Home 4</Nav.Link>
                    <Nav.Link href="#features">Home 5</Nav.Link>
                    <Nav.Link href="#features">Home 6</Nav.Link>
                  </div>
                </li>
                <Nav.Link href="#features">About</Nav.Link>
                <Nav.Link href="#pricing">Projects</Nav.Link>
                <Nav.Link href="#pricing">Contact</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="#deets" className="text-white">
                  <i className="fa-brands fa-behance"></i>
                </Nav.Link>
                <Nav.Link href="#deets" className="text-white">
                  <i className="fa-brands fa-linkedin-in"></i>
                </Nav.Link>
                <Nav.Link href="#deets" className="text-white">
                  <i className="fa-brands fa-slack"></i>
                </Nav.Link>
              </Nav>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Header;
