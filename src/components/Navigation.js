import React from 'react'
import { withRouter } from 'react-router-dom'
import { Navbar, Nav, NavDropdown, Dropdown } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'

const Navigation = () => {

  const elipsis = <FontAwesomeIcon icon={faEllipsisV} size="1x" />

  return (

    <Navbar expand="xl">
      <Navbar.Brand href="/">
        <img id="logo" src="./src/img/logo.png" />
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
                      <a href="/">GIPHY Studios</a>
                      <a href="/">Animals</a>
                      <a href="/">Actions</a>
                      <a href="/">Anime</a>
                      <a href="/">Cartoons</a>
                      <a href="/">Emotions</a>
                    </div>
                    <div>
                      <a href="/">Food/Drink</a>
                      <a href="/">Gaming</a>
                      <a href="/">Holidays/Greetings</a>
                      <a href="/">Memes</a>
                      <a href="/">Clips</a>
                    </div>
                  </div>
                </div>
                <div className="elipsis-col">
                  <h2>Stickers</h2>
                  <a href="/">Originals</a>
                  <a href="/">Trending</a>
                  <a href="/">Reactions</a>
                  <a href="/">Packs</a>
                  <a href="/">Cartoons</a>
                  <a href="/">Emotions</a>
                </div>
                <div className="elipsis-col">
                  <h2>Apps</h2>
                  <a href="/">GIPHY</a>
                  <a href="/">GIPHY World</a>
                  <a href="/">GIPHY Capture</a>
                </div>
                <div className="elipsis-col">
                  <h2>About</h2>
                  <div>
                    <div>
                      <a href="/">Team</a>
                      <a href="/">Engineering Blog</a>
                      <a href="/">GIPHY Arts</a>
                      <a href="/">Studios</a>
                      <a href="/">Developers</a>
                      <a href="/">Labs</a>
                    </div>
                    <div>
                      <a href="/">FAQ</a>
                      <a href="/">Support</a>
                      <a href="/">Jobs</a>
                      <a href="/">DMCA</a>
                      <a href="/">Guidelines</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="elipsis-lower">
                <h6>© 2021 GIPHY, Inc.</h6>
                <a href="/">Terms of Service</a>
                <a href="/">Community Guidelines</a>
                <a href="/">Privacy Policy</a>
                <a href="/">Copyright</a>
                <a href="/">Manage Cookies</a>
              </div>
            </div>
          </NavDropdown>


          <div className="creator-container">
            <Nav.Link href="/" id="nav-link-creator" style={{ marginLeft: '1rem', marginRight: '.5rem' }}>Upload</Nav.Link>
            <Nav.Link href="/" id="nav-link-creator" style={{ marginRight: '1rem' }}>Create</Nav.Link>
          </div>

          <Dropdown>

            <Dropdown.Toggle variant="success" id="dropdown-basic">
              <img className="nav-user-picture" src="./src/img/profile.gif" />
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