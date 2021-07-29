import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { Navbar, Container, Nav } from 'react-bootstrap'

import { logoutUser } from '../../store/users'

import { NavBarContainer, NavBarBrand, NavLogo } from './styledComponents'

class Header extends Component {
   onClickLogout = () => {
      const { logoutUser } = this.props
      logoutUser()
   }

   renderAuthItems = () => {
      const { isLoggedIn } = this.props
      if (isLoggedIn) {
         return (
            <Nav.Link>
               <div onClick={this.onClickLogout}>Logout</div>
            </Nav.Link>
         )
      } else {
         return (
            <React.Fragment>
               <Nav.Link as={Link} to='/register'>
                  Register
               </Nav.Link>
               <Nav.Link as={Link} to='/login'>
                  Login
               </Nav.Link>
            </React.Fragment>
         )
      }
   }

   render() {
      return (
         <NavBarContainer collapseOnSelect expand='lg' bg='dark' variant='dark'>
            <Container>
               <NavBarBrand>
                  <NavLogo
                     src={'/images/logo.png'}
                     width='35'
                     height='35'
                     alt='App Logo'
                  />
                  Bug Tracker
               </NavBarBrand>
               <Navbar.Toggle aria-controls='responsive-navbar-nav' />
               <Navbar.Collapse id='responsive-navbar-nav'>
                  <Nav className='ms-auto'>
                     <Nav.Link as={Link} to='/dashboard'>
                        Dashboard
                     </Nav.Link>
                     {this.renderAuthItems()}
                  </Nav>
               </Navbar.Collapse>
            </Container>
         </NavBarContainer>
      )
   }
}

const mapStateToProps = state => {
   return {
      isLoggedIn: state.entities.users.loginStatus
   }
}

const mapDispatchToProps = dispatch => {
   return {
      logoutUser: () => {
         dispatch(logoutUser())
      }
   }
}

const HeaderWithRouter = withRouter(Header)

export default connect(mapStateToProps, mapDispatchToProps)(HeaderWithRouter)
