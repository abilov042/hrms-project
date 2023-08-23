import React from 'react'
import { Button, Container, Form } from 'semantic-ui-react'

export default function EmployeeSignUp() {
  return (
    <div>
       <Container style={{display:"flex", justifyContent:"center", marginTop:"100px", marginBottom:"200px"}}>
        <Form style={{width:"400px"}}>
            <Form.Field>
            <label>First Name</label>
            <input placeholder='first Name' />
            </Form.Field>
            <Form.Field>
            <label>Last Name</label>
            <input placeholder='last Name' />
            </Form.Field>
            <Form.Field>
            <label>Birth of year</label>
            <input placeholder='birth of year' />
            </Form.Field>
            <Form.Field>
            <label>Identitiy number</label>
            <input placeholder='identity namber' />
            </Form.Field>
            <Form.Field>
            <label>Email</label>
            <input placeholder='email' />
            </Form.Field>
            <Form.Field>
            <label>Password</label>
            <input placeholder='password' type='password' />
            </Form.Field>
            <Form.Field>
            <label>Confirme password</label>
            <input placeholder='confirme password' type='password' />
            </Form.Field>
            <Button type='submit'>Submit</Button>
        </Form>
      
      </Container>
    </div>
  )
}
