import { useState } from "react";
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

interface proptype {
  home: boolean;
}

export default function Navbar(props: proptype) {
  const [openNavText, setOpenNavText] = useState(false);

  function depends(x: boolean) {
    if (x) {
      return (
        <MDBNavbarLink
          href="#roomSearch"
          className="no-underline text-gray-500 hover:text-gray-700"
        >
          Browse rooms
        </MDBNavbarLink>
      );
    } else {
      return (
        <MDBNavbarLink>
          <Link
            to="/browse-all-rooms"
            className="no-underline text-gray-500 hover:text-gray-700"
          >
            {" "}
            Browse rooms
          </Link>
        </MDBNavbarLink>
      );
    }
  }

  return (
    <MDBNavbar expand="lg" light bgColor="light">
      <MDBContainer fluid>
        <MDBNavbarBrand>
          <Link to="/" className="text-black no-underline font-medium">
            Prosper's Hotel
          </Link>
        </MDBNavbarBrand>
        <MDBNavbarToggler
          type="button"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setOpenNavText(!openNavText)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar open={openNavText}>
          <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
            {/* <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='#'>
                Home
              </MDBNavbarLink>
            </MDBNavbarItem> */}
            <MDBNavbarItem>{depends(props.home)}</MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink>
                <Link
                  to="/manage-rooms"
                  className="no-underline text-gray-500 hover:text-gray-700"
                >
                  Manage Rooms
                </Link>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink>
                <Link
                  to="/find-my-booking"
                  className="no-underline text-gray-500 hover:text-gray-700"
                >
                  Find My Booking
                </Link>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink>
                <Link
                  to="/account"
                  className="no-underline text-gray-500 hover:text-gray-700"
                >
                  Account
                </Link>
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
          <span className="navbar-text text-xs">
            {" "}
            A Hotel Booking Site made by Prosper{" "}
          </span>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
