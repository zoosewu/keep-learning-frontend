import React, { Fragment } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import pkg from '@/../package.json'
import { containerRouter } from '@/App'
export const Component: React.FC = () => {
  return (
    <Navbar bg='light' expand='lg'>
      <Link className='navbar-brand' to='/'>{pkg.displayName}</Link>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ml-auto'>
          {containerRouter.map((value, index) => (
            value.label != null ? <Link key={index} to={'/' + (value.path ?? '')} className='nav-link'>{value.label}</Link> : <Fragment key={index} />
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
