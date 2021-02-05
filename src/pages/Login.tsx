import React from 'react';
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import Grid from '../components/Grid';
import Button from '../components/Button';
import ButtonGoogle from '../components/ButtonGoogle';

function Login() {
  const messageRequired = '* Este campo não pode ser vazio.';
  const messageMailError = 'O e-mail está incorreto';

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email(messageMailError)
      .required(messageRequired),
    password: Yup.string()
      .concat(Yup.string().required(messageRequired))
  });

  function validateUseName(value: string) {
    let error;
    if (!value) {
      error = messageRequired;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = messageRequired;
    }

    return error;
  }

  function validatePassWord(value: string) {
    let error;
    if (!value) {
      error = messageRequired;
    }

    return error;
  }

  return (
    <Grid title="Welcome to Invision">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={() => { }}
      >
        {({ errors, touched, isSubmitting, setFieldValue }) => {
          // const [user, setUser] = useState({});
          // const [showPassword, setShowPassword] = useState(false);

          return (
            <Form className="login-form">
              <div className="field">
                <label>Users name or Email</label>
                <Field name="email" type="text"
                  className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                <ErrorMessage name="email" component="div" className="invalid-feedback" />
              </div>

              <div className="field">
                <label>Password</label>
                <Field name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                <ErrorMessage name="password" component="div" className="invalid-feedback" />
              </div>

              <p className="forgot-password">Forgot password?</p>

              <Button type="submit" disabled={isSubmitting}>Sign in</Button>

              <div className="or">
                <div className="hr"></div>
                <span>Or</span>
                <div className="hr"></div>
              </div>

              <ButtonGoogle>Sign in with Google</ButtonGoogle>
            </Form>
          );
        }}
      </Formik>
    </Grid >);
}

export default Login;