import React from 'react'
import { Button, Container, Form } from 'semantic-ui-react'

export default function Login() {
  return (
    <div>
      <Container style={{display:"flex", justifyContent:"center", marginTop:"100px", marginBottom:"200px"}}>
      <Form style={{width:"400px"}}>
        <Form.Field>
          <label>First Name</label>
          <input placeholder='First Name' />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input placeholder='Last Name' />
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
      
      </Container>
    </div>
  )
}
