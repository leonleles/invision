import React from 'react';
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import Grid from '../components/Grid';
import Button from '../components/Button';
import ButtonGoogle from '../components/ButtonGoogle';

const CreateAccount = () => {
  const messageRequired = '* Este campo não pode ser vazio.';
  const messageMailError = 'O e-mail está incorreto';

  const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required(messageRequired),
    email: Yup.string()
      .email(messageMailError)
      .required(messageRequired),
    password: Yup.string()
      .concat(Yup.string().required(messageRequired))
      .min(6, 'A senha não pode ter menos de 6 caracteres'),
    confirmPassword: Yup.string()
      .when('password', (password, schema) => {
        if (password) return schema.required(messageRequired);
      })
      .oneOf([Yup.ref('password')], 'As senhas devem corresponder')
  });

  return (
    <Grid title="Getting Started">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={() => { }}
      >
        {({ errors, touched, isSubmitting, setFieldValue }) => {

          return (
            <Form className="login-form">
              <div className="field-group">
                <label>Full Name</label>
                <Field name="name" type="text"
                  className={'form-control' + (errors.name && touched.name ? ' is-invalid' : '')} />
                <ErrorMessage name="name" component="div" className="invalid-feedback" />
              </div>

              <div className="field-group">
                <label>Users name or Email</label>
                <Field name="email" type="text"
                  className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                <ErrorMessage name="email" component="div" className="invalid-feedback" />
              </div>

              <div className="field-group">
                <label>Create Password</label>
                <Field name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                <ErrorMessage name="password" component="div" className="invalid-feedback" />
              </div>

              <div className="field-group">
                <label>Confirm Password</label>
                <Field name="confirmPassword" type="password" className={'form-control' + (errors.confirmPassword && touched.confirmPassword ? ' is-invalid' : '')} />
                <ErrorMessage name="confirmPassword" component="div" className="invalid-feedback" />
              </div>

              <Button type="submit" disabled={isSubmitting}>Sign up</Button>

              <div className="or">
                <div className="hr"></div>
                <span>Or</span>
                <div className="hr"></div>
              </div>

              <ButtonGoogle />

              <p className="terms">
                By signing up, you agree to <b>Invision</b><br />
                <a href="">Terms of Conditions</a>
                 and
                 <a href="">Privacy Policy</a>
              </p>

              <p className="createAccount">
                <span>New <b>Invision</b>? </span>
                <Link to='/'>Log in</Link>
              </p>
            </Form>
          );
        }}
      </Formik>
    </Grid>
  );
}

export default CreateAccount;