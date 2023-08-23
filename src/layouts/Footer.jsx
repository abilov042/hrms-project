import React from 'react'
import { Container } from 'semantic-ui-react'
import { Menu } from 'semantic-ui-react'

export default function Footer() {
    
  return (
    <div>
      <Container>
      <Menu text vertical>
        <Menu.Item header>Sort By</Menu.Item>
        <Menu.Item
          name='closest'
          
        />
        <Menu.Item
          name='mostComments'
         
        />
        <Menu.Item
          name='mostPopular'
         
        />
      </Menu>
      </Container>
    </div>
  )
}
