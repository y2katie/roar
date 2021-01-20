import React from 'react'
import { Menu } from 'semantic-ui-react'

const items = [
  { key: 'editorials', active: true, name: 'Editorials' },
  { key: 'review', name: 'Reviews' },
  { key: 'events', name: 'Upcoming Events' },
]

const Navbar = () => <Menu items={items} />

export default Navbar
