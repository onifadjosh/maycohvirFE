import axios from "axios";
import { useFormik } from "formik";
import { jwtDecode } from "jwt-decode";
import React, { useState } from "react";
import Cookies from "universal-cookie";
import * as yup from "yup";

const Formikk = () => {
  const cookie = new Cookies();
  const [Image, setImage] = useState(null);

  const handleChange = (e) => {
    console.log(e.target.files[0]);
    // setImage(e.target.files[0]);
    let image = e.target.files[0]

    const reader = new FileReader();

    reader.onloadend = () => {
      console.log(reader.result);
      setImage(reader.result);
    };

    reader.readAsDataURL(image);
    
  };
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    },

    onSubmit: async (values) => {
      console.log(values);
      try {
        const response = await axios.post(
          "http://localhost:5009/api/v1/register",
          {
            firstName: formik.values.firstname,
            lastName: formik.values.lastname,
            email: formik.values.email,
            password: formik.values.password,
            image:Image
          }
        );
        // alert("user registered successfully")
        console.log(response.data);
        alert(response.data.message);

        const token = response.data.data.token;
        console.log(token);

        const expiryTime = jwtDecode(token);

        cookie.set("token", token, {
          expires: new Date(expiryTime.exp * 1000),
        });
      } catch (error) {
        console.log(error);

        alert(error.response.data.message);
        console.log(error.response.data.message);
      }
    },

    validationSchema: yup.object({
      firstname: yup
        .string()
        .required("First name is required")
        .min(3, "minimum of three letters"),
      lastname: yup.string().required("Last name is required"),
      email: yup.string().required("email is required").email("invalid email"),
      password: yup
        .string()
        .required("Password is required")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
          "Password is too weak"
        ),
    }),
  });

  // console.log(formik.values);
  // console.log(formik.errors);
  console.log(formik.touched);

  return (
    <div>
      <img src={Image} alt="" width={200} height={200} />
      <input type="file" onChange={(e) => handleChange(e)} />
      <br />
      <input
        type="text"
        placeholder="first name"
        name="firstname"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.firstname && formik.errors.firstname ? (
        <small className="text-danger">{formik.errors.firstname}</small>
      ) : (
        ""
      )}{" "}
      <br />
      <input
        type="text"
        placeholder="last name"
        name="lastname"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.lastname && formik.errors.lastname ? (
        <small className="text-danger">{formik.errors.lastname}</small>
      ) : (
        ""
      )}
      <br />
      <input
        type="text"
        placeholder="email"
        name="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.email && formik.errors.email ? (
        <small className="text-danger">{formik.errors.email}</small>
      ) : (
        ""
      )}
      <br />
      <input
        type="text"
        placeholder="password"
        name="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.password && formik.errors.password ? (
        <small className="text-danger">{formik.errors.password}</small>
      ) : (
        ""
      )}
      <br />
      <button onClick={formik.handleSubmit} type="submit">
        {formik.isSubmitting ? "Registering..." : "Register"}
      </button>
    </div>
  );
};

export default Formikk;
