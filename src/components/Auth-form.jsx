import { useState, useRef } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';

import { Box, Button, TextField } from '@mui/material';
import { Formik } from 'formik';
import * as yup from 'yup';

const initialValues = {
  name: '',
  email: '',
  password: '',
  imgUrl: '',
};

const userSchema = yup.object().shape({
  name: yup.string(),
  email: yup.string().email('Invalid Email').required('This is required'),
  password: yup.string().required('This is required'),
});

// This goes to our signup API endpoint
async function createUser(name, email, password, imgUrl) {
  const response = await fetch('/api/auth/signup', {
    method: 'POST',
    body: JSON.stringify({ name, email, password, imgUrl }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong!');
  }

  return data;
}

// This gets handled by the [...nextauth] endpoint
function AuthForm() {
  const [registered, setRegistered] = useState(false);

  // We keep track of whether in a login / or register state
  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();

  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState);
  }

  const submitHandler = async (values, { resetForm }) => {
    const enteredName = values.name;
    const enteredEmail = values.email;
    const enteredPassword = values.password;
    const enteredImgUrl = values.imgUrl;

    console.log(values);
    // optional: Add validation here

    if (isLogin) {
      await signIn('credentials', {
        email: enteredEmail,
        password: enteredPassword,
        redirect: '/dashboard',
      });
    } else {
      try {
        const result = await createUser(
          enteredName,
          enteredEmail,
          enteredPassword,
          enteredImgUrl
        );
        setRegistered(true);
      } catch (error) {
        console.log(error);
      }
    }

    resetForm();
  };

  return (
    <section className="max-w-xl mx-auto my-7">
      {!registered ? (
        <>
          <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
          <Box m="20px">
            <Formik
              onSubmit={submitHandler}
              initialValues={initialValues}
              validationSchema={userSchema}
            >
              {({
                values,
                errors,
                touched,
                handleBlur,
                handleChange,
                handleSubmit,
              }) => {
                return (
                  <form onSubmit={handleSubmit}>
                    <Box
                      display="grid"
                      gap="30px"
                      gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                    >
                      {!isLogin ? (
                        <TextField
                          fullWidth
                          variant="filled"
                          type="text"
                          label="Name"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.name}
                          name="name"
                          error={!!touched.name && !!errors.name}
                          helperText={touched.name && errors.name}
                          sx={{ gridColumn: 'span 2' }}
                        />
                      ) : (
                        ''
                      )}

                      <TextField
                        fullWidth
                        variant="filled"
                        type="text"
                        label="Email"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.email}
                        name="email"
                        error={!!touched.email && !!errors.email}
                        helperText={touched.email && errors.email}
                        sx={{ gridColumn: 'span 2' }}
                      />

                      <TextField
                        fullWidth
                        variant="filled"
                        type="password"
                        label="password"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.password}
                        name="password"
                        error={!!touched.password && !!errors.password}
                        helperText={touched.password && errors.password}
                        sx={{ gridColumn: 'span 2' }}
                      />
                      {!isLogin ? (
                        <TextField
                          fullWidth
                          variant="filled"
                          type="text"
                          label="Image URL"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.imgUrl}
                          name="imgUrl"
                          error={!!touched.imgUrl && !!errors.imgUrl}
                          helperText={touched.imgUrl && errors.imgUrl}
                          sx={{ gridColumn: 'span 2' }}
                        />
                      ) : (
                        ''
                      )}
                    </Box>
                    <Box display="flex" justifyContent="end" mt="20px">
                      <Button
                        type="submit"
                        color="secondary"
                        variant="contained"
                      >
                        {isLogin ? 'Login' : 'Create Account'}
                      </Button>
                      <Button
                        onClick={switchAuthModeHandler}
                        type="button"
                        color="secondary"
                        variant="contained"
                      >
                        {isLogin
                          ? 'No Account? Create One'
                          : 'Already a user? Login'}
                      </Button>
                    </Box>
                  </form>
                );
              }}
            </Formik>
          </Box>
        </>
      ) : (
        <div className="">
          <p>You have successfully registered!</p>

          <button
            onClick={() => router.reload()}
            className="button button-color"
          >
            Login Now
          </button>
        </div>
      )}
    </section>
  );
}

export default AuthForm;
