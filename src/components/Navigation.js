import React from 'react'
import { Link, withRouter } from 'react-router-dom'
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

          <NavDropdown title={elipsis} className="basic-nav-dropdown" name="Dropdown" id="nav-elipsis-toggle" style={{ position: 'static' }}>
            <div className="elipsis-container">
              <div className="elipsis-main">
                <div className="elipsis-col">
                  <h2>Categories</h2>
                  <div>
                    <div>
                      <Link to="/" alt="GIPHY Studios">GIPHY Studios</Link>
                      <Link to="/" alt="Animals">Animals</Link>
                      <Link to="/" alt="Actions">Actions</Link>
                      <Link to="/" alt="Anime">Anime</Link>
                      <Link to="/" alt="Cartoons">Cartoons</Link>
                      <Link to="/" alt="Emotions">Emotions</Link>
                    </div>
                    <div>
                      <Link to="/" alt="Food/Drink">Food/Drink</Link>
                      <Link to="/" alt="Gaming">Gaming</Link>
                      <Link to="/" alt="Holidays/Greetings">Holidays/Greetings</Link>
                      <Link to="/" alt="Memes">Memes</Link>
                      <Link to="/" alt="Clips">Clips</Link>
                    </div>
                  </div>
                </div>
                <div className="elipsis-col">
                  <h2>Stickers</h2>
                  <Link to="/" alt="Originals">Originals</Link>
                  <Link to="/" alt="Trending">Trending</Link>
                  <Link to="/" alt="Reactions">Reactions</Link>
                  <Link to="/" alt="Packs">Packs</Link>
                  <Link to="/" alt="Cartoons">Cartoons</Link>
                  <Link to="/" alt="Emotions">Emotions</Link>
                </div>
                <div className="elipsis-col">
                  <h2>Apps</h2>
                  <Link to="/" alt="GIPHY">GIPHY</Link>
                  <Link to="/" alt="GIPHY World">GIPHY World</Link>
                  <Link to="/" alt="GIPHY Capture">GIPHY Capture</Link>
                </div>
                <div className="elipsis-col">
                  <h2>About</h2>
                  <div>
                    <div>
                      <Link to="/" alt="Team">Team</Link>
                      <Link to="/" alt="Engineering Blog">Engineering Blog</Link>
                      <Link to="/" alt="GIPHY Arts">GIPHY Arts</Link>
                      <Link to="/" alt="Studios">Studios</Link>
                      <Link to="/" alt="Developers">Developers</Link>
                      <Link to="/" alt="Labs">Labs</Link>
                    </div>
                    <div>
                      <Link to="/" alt="FAQ">FAQ</Link>
                      <Link to="/" alt="Support">Support</Link>
                      <Link to="/" alt="Jobs">Jobs</Link>
                      <Link to="/" alt="DMCA">DMCA</Link>
                      <Link to="/" alt="Guidelines">Guidelines</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="elipsis-lower">
                <h6>© 2021 GIPHY, Inc.</h6>
                <Link to="/" alt="Terms of Service">Terms of Service</Link>
                <Link to="/" alt="Community Guidelines">Community Guidelines</Link>
                <Link to="/" alt="Privacy Policy">Privacy Policy</Link>
                <Link to="/" alt="Copyright<">Copyright</Link>
                <Link to="/" alt="Manage Cookies">Manage Cookies</Link>
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