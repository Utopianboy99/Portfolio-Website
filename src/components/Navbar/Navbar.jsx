import React, { useState } from "react";
import "./Navbar.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button, IconButton, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <nav className="nav">
      <p id="me" onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
        Nhlakanipho Madlanga
      </p>

      {/* DESKTOP LINKS */}
      <div className="nav-link-box desktop">
        <div className="navlinks">
          {!isHome && <Link to="/">Home</Link>}
          <Link to="/about">About</Link>
          <Link to="/work">Work</Link>
        </div>

        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/contact")}
        >
          Get in Touch
        </Button>
      </div>

      {/* MOBILE MENU ICON (visible only on small screens) */}
      {isSmall && (
        <IconButton className="menu-btn" onClick={() => setOpen(!open)}>
          {open ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      )}

      {/* MOBILE DROPDOWN */}
      {open && (
        <div className="mobile-menu">
          {!isHome && (
            <Link to="/" onClick={() => setOpen(false)}>
              Home
            </Link>
          )}
          <Link to="/about" onClick={() => setOpen(false)}>
            About
          </Link>
          <Link to="/work" onClick={() => setOpen(false)}>
            Work
          </Link>

          <Button
            variant="contained"
            fullWidth
            onClick={() => {
              navigate("/contact");
              setOpen(false);
            }}
          >
            Get in Touch
          </Button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
