import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Dropdown } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

const Navigation = () => {

  const elipsis = <FontAwesomeIcon icon={faEllipsisV} size="1x" />
  // Absolute file path option for images, GitHub pages needs this
  const imagePath = process.env.NODE_ENV === 'development' ? './img/' : './src/img/'

  return (

    <Navbar expand="xl">
      <Navbar.Brand href="/" >
        <img id="logo" src={`${imagePath}logo.png`} alt="Giphy logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">

        <Nav className="mr-auto">

          <Nav.Link href="/">Reactions</Nav.Link>
          <Nav.Link href="/">Entertainment</Nav.Link>
          <Nav.Link href="/">Sports</Nav.Link>
          <Nav.Link href="/">Stickers</Nav.Link>
          <Nav.Link href="/">Artists</Nav.Link>

          <NavDropdown title={elipsis} className="basic-nav-dropdown" id="nav-elipsis-toggle" style={{ position: 'static' }}>
            <div className="elipsis-container">
              <div className="elipsis-main">
                <div className="elipsis-col">
                  <h2>Categories</h2>
                  <div>
                    <div>
                      <Link to="/">GIPHY Studios</Link>
                      <Link to="/" >Actions</Link>
                      <Link to="/">Anime</Link>
                      <Link to="/" >Cartoons</Link>
                      <Link to="/" >Emotions</Link>
                    </div>
                    <div>
                      <Link to="/" >Food/Drink</Link>
                      <Link to="/" >Gaming</Link>
                      <Link to="/" >Holidays/Greetings</Link>
                      <Link to="/">Memes</Link>
                      <Link to="/">Clips</Link>
                    </div>
                  </div>
                </div>
                <div className="elipsis-col">
                  <h2>Stickers</h2>
                  <Link to="/" >Originals</Link>
                  <Link to="/">Trending</Link>
                  <Link to="/" >Reactions</Link>
                  <Link to="/">Packs</Link>
                  <Link to="/" >Cartoons</Link>
                  <Link to="/">Emotions</Link>
                </div>
                <div className="elipsis-col">
                  <h2>Apps</h2>
                  <Link to="/">GIPHY</Link>
                  <Link to="/" >GIPHY World</Link>
                  <Link to="/">GIPHY Capture</Link>
                </div>
                <div className="elipsis-col">
                  <h2>About</h2>
                  <div>
                    <div>
                      <Link to="/" >Team</Link>
                      <Link to="/" >Engineering Blog</Link>
                      <Link to="/" >GIPHY Arts</Link>
                      <Link to="/" >Studios</Link>
                      <Link to="/" >Developers</Link>
                      <Link to="/" >Labs</Link>
                    </div>
                    <div>
                      <Link to="/" >FAQ</Link>
                      <Link to="/" >Support</Link>
                      <Link to="/" >Jobs</Link>
                      <Link to="/" >DMCA</Link>
                      <Link to="/" >Guidelines</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="elipsis-lower">
                <h6>© 2021 GIPHY, Inc.</h6>
                <Link to="/" >Terms of Service</Link>
                <Link to="/" >Community Guidelines</Link>
                <Link to="/" >Privacy Policy</Link>
                <Link to="/" >Copyright</Link>
                <Link to="/" >Manage Cookies</Link>
              </div>
            </div>
          </NavDropdown>


          <div className="creator-container">
            <Nav.Link href="/" className="nav-link-creator" style={{ marginLeft: '1rem', marginRight: '.5rem' }}>Upload</Nav.Link>
            <Nav.Link href="/" className="nav-link-creator" style={{ marginRight: '1rem' }}>Create</Nav.Link>
          </div>

          <Dropdown>

            <Dropdown.Toggle variant="success" id="dropdown-basic">
              <img className="nav-user-picture" src={`${imagePath}profile.gif`} alt="Profile picture" />
              <p>kasjan</p>
            </Dropdown.Toggle>

            <Dropdown.Menu id="nav-dropdown-user">
              <Dropdown.Item href="/">Settings</Dropdown.Item>
              <Dropdown.Item href="/">Favorites</Dropdown.Item>
              <Dropdown.Item href="/">Log Out</Dropdown.Item>
            </Dropdown.Menu>

          </Dropdown>

        </Nav>

      </Navbar.Collapse >

    </Navbar >

  )

}


export default withRouter(Navigation)