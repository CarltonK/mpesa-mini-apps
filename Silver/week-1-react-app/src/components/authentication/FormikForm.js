import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { object, string } from 'yup';

const validationSchema = object({
    email: string().email('Invalid email').required('Email is required'),
    password: string().min(6,'Password too short').required('Password is required'),
});

function FormikForm() {
  return (
    <Formik 
    initialValues={{ email: '', password: '' }}
    validationSchema={validationSchema}
    onSubmit={(values) => console.log(values)}
    >
      {({errors}) => (
        <Form>
        <Field
          name="email"
          placeholder="Email Address"
        ></Field>
        {errors.email ? <div>{errors.email}</div> : null}
        
        <Field
          name="password"
          placeholder="Password"
        ></Field>
        {errors.password ? <div>{errors.password}</div> : null}

        <button type="submit">Login</button>
      </Form>
      )}
    </Formik>
  );
}

export default FormikForm;
