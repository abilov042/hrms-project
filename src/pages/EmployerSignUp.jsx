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
      validationSchema: Yup.object({
        email: Yup.string().email("Invalud email").required("required"),
        webAddress: Yup.string().required("required"),
        phoneNumber: Yup.string().max(13,"phone number must be 13 character").min(13,"phone number must be 13 character"),
        password: Yup.string().required("required"),
        cPassword: Yup.string().required("required")
      }),
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
    
  return (
    <div>
       <Container style={{display:"flex", justifyContent:"center", marginTop:"100px", marginBottom:"200px"}}>
        <Form onSubmit={formik.handleSubmit} style={{width:"400px"}}>
           
            <Form.Field>
            <label>Email</label>
            <input id='email' onBlur={formik.handleBlur} value={formik.values.email} onChange={formik.handleChange} placeholder='email' />
            </Form.Field>
            {formik.errors.email && formik.touched.email?<p style={{color:"red"}}>{formik.errors.email}</p>:null}
            <Form.Field>
            <label>Web address</label>
            <input id='webAddress' onBlur={formik.handleBlur} value={formik.values.webAddress} onChange={formik.handleChange} placeholder='web address' type='text'/>
            </Form.Field>
            {formik.errors.webAddress && formik.touched.webAddress?<p style={{color:"red"}}>{formik.errors.webAddress}</p>:null}
            <Form.Field>
            <label>Phone number</label>
            <input id='phoneNumber' onBlur={formik.handleBlur} value={formik.values.phoneNumber} onChange={formik.handleChange} placeholder='phone number' type='text'/>
            </Form.Field>
            {formik.errors.phoneNumber && formik.touched.phoneNumber?<p style={{color:"red"}}>{formik.errors.phoneNumber}</p>:null}
            <Form.Field>
            <label>Password</label>
            <input id='password' onBlur={formik.handleBlur} value={formik.values.password} onChange={formik.handleChange} placeholder='password' type='password' />
            </Form.Field>
            {formik.errors.password && formik.touched.password?<p style={{color:"red"}}>{formik.errors.password}</p>:null}
            <Form.Field>
            <label>Confirme password</label>
            <input id='cPassword' onBlur={formik.handleBlur} value={formik.values.cPassword} onChange={formik.handleChange} placeholder='confirme password' type='password' />
            </Form.Field>
            {formik.errors.cPassword && formik.touched.cPassword?<p style={{color:"red"}}>{formik.errors.cPassword}</p>:null}
            <p>{massage}</p>
            <Button type='submit'>Submit</Button>
        </Form>
      
      </Container>
    </div>
  )
}
