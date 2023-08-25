import { useFormik } from 'formik'
import React, { useState } from 'react'
import { Button, Container, Form } from 'semantic-ui-react'
import { CandidateService } from '../services/candidateService'
import * as Yup from 'yup'

export default function CandidateSignUp() {
    const [massage, setMassage] = useState("")
    const formik = useFormik({
        initialValues:{
            firstName: "",
            lastName: "",
            birthOfYear: "",
            idenitityNumber: "",
            email: "",
            password: "",
            cPassword: "",
        },
        validationSchema: Yup.object({
            firstName: Yup.string().max(15, "15 herfden yuxar olmaz").required("required"),
            lastName: Yup.string().max(20,"character must be few than 20").required("required"),
            birthOfYear: Yup.string().max(4,"character must be few than 4").min(4,"character must be more then 4").required("required"),
            idenitityNumber: Yup.string().max(7,"character must be few than 7").required("required"),
            email: Yup.string().email("Invalud email").required("required"),
            password: Yup.string().required("required"),
            cPassword: Yup.string().required("required")
        })
        ,
        onSubmit: (values)=>{
            let obj = {
                birthOfYear: values.birthOfYear,
                cpassword: values.cPassword,
                email: values.email,
                firstName: values.firstName,
                identityNumber: values.idenitityNumber,
                lastName: values.lastName,
                password: values.password
              }
            let candidateService = new CandidateService();
            candidateService.postCandidate(obj).then(res=> setMassage(res.data.massage))
            
        }
    })
    
  return (
    <div>
       <Container style={{display:"flex", justifyContent:"center", marginTop:"100px", marginBottom:"200px"}}>
        <Form onSubmit={formik.handleSubmit} style={{width:"400px"}}>
            <Form.Field>
            <label>First Name</label>
            <input id='firstName' onBlur={formik.handleBlur} value={formik.values.firstName} onChange={formik.handleChange} placeholder='first Name' />
            </Form.Field>
            {(formik.errors.firstName && formik.touched.firstName)?<p style={{color:"red"}}>{formik.errors.firstName}</p>: null}
            <Form.Field>
            <label>Last Name</label>
            <input id='lastName' onBlur={formik.handleBlur} value={formik.values.lastName} onChange={formik.handleChange}  placeholder='last Name' />
            </Form.Field>
            {(formik.errors.lastName && formik.touched.lastName)?<p style={{color:"red"}}>{formik.errors.lastName}</p>: null}
            <Form.Field>
            <label>Birth of year</label>
            <input id='birthOfYear' onBlur={formik.handleBlur} value={formik.values.birthOfYear} onChange={formik.handleChange}  placeholder='birth of year' />
            </Form.Field>
            {(formik.errors.birthOfYear && formik.touched.birthOfYear )?<p style={{color:"red"}}>{formik.errors.birthOfYear}</p>: null}
            <Form.Field>
            <label>Identitiy number</label>
            <input id='idenitityNumber' onBlur={formik.handleBlur} value={formik.values.idenitityNumber} onChange={formik.handleChange}  placeholder='identity namber' />
            </Form.Field>
            {(formik.errors.idenitityNumber && formik.touched.idenitityNumber)?<p style={{color:"red"}}>{formik.errors.idenitityNumber}</p>: null}
            <Form.Field>
            <label>Email</label>
            <input id='email' onBlur={formik.handleBlur} value={formik.values.email} onChange={formik.handleChange}  placeholder='email' />
            </Form.Field>
            {(formik.errors.email && formik.touched.email)?<p style={{color:"red"}}>{formik.errors.email}</p>: null}
            <Form.Field>
            <label>Password</label>
            <input id='password' onBlur={formik.handleBlur} value={formik.values.password} onChange={formik.handleChange}  placeholder='password' type='password' />
            </Form.Field>
            {(formik.errors.password && formik.touched.password)?<p style={{color:"red"}}>{formik.errors.password}</p>: null}
            <Form.Field>
            <label>Confirme password</label>
            <input id='cPassword' onBlur={formik.handleBlur} value={formik.values.cPassword} onChange={formik.handleChange}  placeholder='confirme password' type='password' />
            </Form.Field>
            {(formik.errors.cPassword && formik.touched.cPassword)?<p style={{color:"red"}}>{formik.errors.cPassword}</p>: null}
            <p>{massage}</p>
            <Button type='submit'>Submit</Button>
        </Form>
      
      </Container>
    </div>
  )
}
