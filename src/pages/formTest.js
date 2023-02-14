import { Box, Button, TextField } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import { Formik } from 'formik';
import * as yup from 'yup';

const initialValues = {
  name: '',
  clickedDate: '',
  totalClick: '',
};

const userSchema = yup.object().shape({
  name: yup.string().required('This is required'),
  clickedDate: yup.string().required('This is required'),
  totalClick: yup.string().required('This is required'),
});

export default function formTest() {
  const isNonMobile = useMediaQuery('(min-width:600px)');

  const handleFormSubmit = async (values, { resetForm }) => {
    // await fetch('https://bamgamesofc.vercel.app/api/postTest', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(values),
    // }).catch((error) => {
    //   window.alert(error);
    //   return;
    // });
    console.log(values);
    resetForm();
  };

  return (
    <Box m="20px">
      <Formik
        onSubmit={handleFormSubmit}
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
                sx={{
                  '& > div': { gridColumn: isNonMobile ? undefined : 'span 4' },
                }}
              >
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
                  helperText={touched.firstName && errors.name}
                  sx={{ gridColumn: 'span 2' }}
                />

                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="clickedDate"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.clickedDate}
                  name="clickedDate"
                  error={!!touched.clickedDate && !!errors.clickedDate}
                  helperText={touched.clickedDate && errors.clickedDate}
                  sx={{ gridColumn: 'span 2' }}
                />

                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="totalClick"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.totalClick}
                  name="totalClick"
                  error={!!touched.totalClick && !!errors.totalClick}
                  helperText={touched.totalClick && errors.totalClick}
                  sx={{ gridColumn: 'span 4' }}
                />
              </Box>
              <Box display="flex" justifyContent="end" mt="20px">
                <Button type="submit" color="secondary" variant="contained">
                  Create New User
                </Button>
              </Box>
            </form>
          );
        }}
      </Formik>
    </Box>
  );
}
