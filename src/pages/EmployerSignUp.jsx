import React, { useState } from 'react'
import { Button, Container, Form } from 'semantic-ui-react'
import {Formik, useFormik} from 'formik'
import * as Yup from 'yup'
import { EmployerService } from '../services/employerService'

export default function EmployeeSignUp() {
   const [massage, setMassage] = useState("");
    const formik = useFormik({
      initialValues:{
        email: "",
        webAddress: "",
        phoneNumber: "",
        password: "",
        cPassword: ""
      }, 
      onSubmit :(values)=>{
        let obj ={
          cpassword: values.cPassword,
          email: values.email,
          password: values.password,
          phoneNumber: values.phoneNumber,
          webAddress: values.webAddress
        }
       let employerService = new EmployerService();
       employerService.postEmployer(obj).then((res)=> setMassage(res.data.massage));
      },
      
    })
    console.log(massage);
  return (
    <div>
       <Container style={{display:"flex", justifyContent:"center", marginTop:"100px", marginBottom:"200px"}}>
        <Form onSubmit={formik.handleSubmit} style={{width:"400px"}}>
           
            <Form.Field>
            <label>Email</label>
            <input id='email' value={formik.values.email} onChange={formik.handleChange} placeholder='email' />
            </Form.Field>
            <Form.Field>
            <label>Web address</label>
            <input id='webAddress' value={formik.values.webAddress} onChange={formik.handleChange} placeholder='web address' type='text'/>
            </Form.Field>
            <Form.Field>
            <label>Phone number</label>
            <input id='phoneNumber' value={formik.values.phoneNumber} onChange={formik.handleChange} placeholder='phone number' type='text'/>
            </Form.Field>
            <Form.Field>
            <label>Password</label>
            <input id='password' value={formik.values.password} onChange={formik.handleChange} placeholder='password' type='password' />
            </Form.Field>
            <Form.Field>
            <label>Confirme password</label>
            <input id='cPassword' value={formik.values.cPassword} onChange={formik.handleChange} placeholder='confirme password' type='password' />
            </Form.Field>
            <Button type='submit'>Submit</Button>
        </Form>
      
      </Container>
    </div>
  )
}
