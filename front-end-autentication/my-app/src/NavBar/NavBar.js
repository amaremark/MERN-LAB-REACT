import React, { Component } from 'react'
import { Navbar, NavItem } from 'react-materialize'
import './NavBar.css'

class NavBar extends Component {
  render () {
    
    let navBarItems = [<NavItem key={1} href='/'>Meet Your friend !</NavItem>]
    if (this.props.isLoggedIn) {
      navBarItems.push(<NavItem key={2} href='/logout'>Go to ...</NavItem>)
    } else {
      navBarItems.push(<NavItem key={3} href='/signup'>Keep it  Up</NavItem>)
      navBarItems.push(<NavItem key={4} href='/login'>Meet me there</NavItem>)
    }
     
    return (
      <Navbar brand='Join new People' className='nav' right >
        {navBarItems}
      </Navbar>
    )
  
  }


}

export default NavBar
