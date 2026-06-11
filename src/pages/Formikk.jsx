import { useFormik } from 'formik'
import React from 'react'

const Formikk = () => {
    const formik = useFormik({
        initialValues:{
            firstname:"",
            lastname:"",
            email:"",
            password:""
        }
    })

    console.log(formik.values);
    
  return (
    <div>
        <input type="text" placeholder='first name' name='firstname' onChange={formik.handleChange}/>
        <input type="text" placeholder='last name' name='lastname' onChange={formik.handleChange}/>
        <input type="text" placeholder='email' name='email' onChange={formik.handleChange}/>
        <input type="text" placeholder='password'name='password' onChange={formik.handleChange}/>


    </div>
  )
}

export default Formikk