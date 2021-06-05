import React from 'react'
import { withRouter } from 'react-router-dom'
import { Navbar, Nav, NavDropdown, Dropdown } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'

const Navigation = () => {

  const elipsis = <FontAwesomeIcon icon={faEllipsisV} size="1x" />

  return (

    <Navbar expand="xl">
      <Navbar.Brand href="/" name="Home" alt="Home">
        <img id="logo" src="./src/img/logo.png" name="Giphy logo" alt="Giphy logo" />
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
                      <a href="/" alt="GIPHY Studios">GIPHY Studios</a>
                      <a href="/" alt="Animals">Animals</a>
                      <a href="/" alt="Actions">Actions</a>
                      <a href="/" alt="Anime">Anime</a>
                      <a href="/" alt="Cartoons">Cartoons</a>
                      <a href="/" alt="Emotions">Emotions</a>
                    </div>
                    <div>
                      <a href="/" alt="Food/Drink">Food/Drink</a>
                      <a href="/" alt="Gaming">Gaming</a>
                      <a href="/" alt="Holidays/Greetings">Holidays/Greetings</a>
                      <a href="/" alt="Memes">Memes</a>
                      <a href="/" alt="Clips">Clips</a>
                    </div>
                  </div>
                </div>
                <div className="elipsis-col">
                  <h2>Stickers</h2>
                  <a href="/" alt="Originals">Originals</a>
                  <a href="/" alt="Trending">Trending</a>
                  <a href="/" alt="Reactions">Reactions</a>
                  <a href="/" alt="Packs">Packs</a>
                  <a href="/" alt="Cartoons">Cartoons</a>
                  <a href="/" alt="Emotions">Emotions</a>
                </div>
                <div className="elipsis-col">
                  <h2>Apps</h2>
                  <a href="/" alt="GIPHY">GIPHY</a>
                  <a href="/" alt="GIPHY World">GIPHY World</a>
                  <a href="/" alt="GIPHY Capture">GIPHY Capture</a>
                </div>
                <div className="elipsis-col">
                  <h2>About</h2>
                  <div>
                    <div>
                      <a href="/" alt="Team">Team</a>
                      <a href="/" alt="Engineering Blog">Engineering Blog</a>
                      <a href="/" alt="GIPHY Arts">GIPHY Arts</a>
                      <a href="/" alt="Studios">Studios</a>
                      <a href="/" alt="Developers">Developers</a>
                      <a href="/" alt="Labs">Labs</a>
                    </div>
                    <div>
                      <a href="/" alt="FAQ">FAQ</a>
                      <a href="/" alt="Support">Support</a>
                      <a href="/" alt="Jobs">Jobs</a>
                      <a href="/" alt="DMCA">DMCA</a>
                      <a href="/" alt="Guidelines">Guidelines</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="elipsis-lower">
                <h6>© 2021 GIPHY, Inc.</h6>
                <a href="/" alt="Terms of Service">Terms of Service</a>
                <a href="/" alt="Community Guidelines">Community Guidelines</a>
                <a href="/" alt="Privacy Policy">Privacy Policy</a>
                <a href="/" alt="Copyright<">Copyright</a>
                <a href="/" alt="Manage Cookies">Manage Cookies</a>
              </div>
            </div>
          </NavDropdown>


          <div className="creator-container">
            <Nav.Link href="/" id="nav-link-creator" style={{ marginLeft: '1rem', marginRight: '.5rem' }}>Upload</Nav.Link>
            <Nav.Link href="/" id="nav-link-creator" style={{ marginRight: '1rem' }}>Create</Nav.Link>
          </div>

          <Dropdown>

            <Dropdown.Toggle variant="success" id="dropdown-basic">
              <img className="nav-user-picture" src="./src/img/profile.gif" alt="Profile picture" />
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