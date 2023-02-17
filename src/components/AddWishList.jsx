import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Box } from '@mui/material';
import { AddBox } from '@mui/icons-material';
import { Formik } from 'formik';
import * as yup from 'yup';

const initialValues = {
  name: '',
  link: '',
  imgLink: '',
};

const useSchema = yup.object().shape({
  name: yup.string().required('This is required'),
  link: yup.string().required('This is required'),
  imgLink: yup.string().required('This is required'),
});

export default function AddWishList(selected) {
  const [open, setOpen] = useState(false);
  // console.log(selected);
  useEffect(() => {
    console.log(selected);
  }, [selected]);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddWishList = (name, link, imgLink) => {
    console.log(name, link, imgLink);
    setOpen(false);
  };

  return (
    <Box>
      <Button
        sx={{
          backgroundColor: ' 	#097969',
          border: 'none',
          fontWeight: 'bold',
          color: '#FFFBF5',
          ':hover': {
            backgroundColor: '#023020',
            border: 'none',
          },
        }}
        variant="outlined"
        startIcon={<AddBox />}
        onClick={handleClickOpen}
      >
        ADD NEW
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle
          sx={{
            backgroundColor: '#404258',
            color: '#FFFBF5',
            fontWeight: 'bold',
            paddingBottom: '20px',
          }}
        >
          Add New Wishlist Item
        </DialogTitle>
        <DialogContent sx={{ backgroundColor: '#404258' }}>
          <Formik
            onSubmit={handleAddWishList}
            initialValues={initialValues}
            validationSchema={useSchema}
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
                      '& .MuiInputBase-input': {
                        backgroundColor: '#374151',
                        color: '#FFFBF5',
                        borderRadius: '4px',
                      },
                      '& .MuiInputLabel-root': {
                        color: '#6B728E',
                      },
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
                      helperText={touched.name && errors.name}
                      sx={{ gridColumn: 'span 4' }}
                    />
                    <TextField
                      fullWidth
                      variant="filled"
                      type="text"
                      label="Link"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.link}
                      name="link"
                      error={!!touched.link && !!errors.link}
                      helperText={touched.link && errors.link}
                      sx={{ gridColumn: 'span 4' }}
                    />
                    <TextField
                      fullWidth
                      variant="filled"
                      type="text"
                      label="Image Link"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.imgLink}
                      name="imgLink"
                      error={!!touched.imgLink && !!errors.imgLink}
                      helperText={touched.imgLink && errors.imgLink}
                      sx={{ gridColumn: 'span 4' }}
                    />
                  </Box>
                  <DialogActions
                    sx={{ paddingTop: '30px', display: 'flex', gap: '10px' }}
                  >
                    <Button
                      sx={{
                        backgroundColor: '#9f2525',
                        border: 'none',
                        fontWeight: 'bold',
                        color: '#FFFBF5',
                        ':hover': {
                          backgroundColor: '#5e1616',
                          border: 'none',
                        },
                      }}
                      onClick={handleClose}
                    >
                      Cancel
                    </Button>
                    <Button
                      sx={{
                        backgroundColor: ' 	#097969',
                        border: 'none',
                        fontWeight: 'bold',
                        color: '#FFFBF5',
                        ':hover': {
                          backgroundColor: '#023020',
                          border: 'none',
                        },
                      }}
                      type="submit"
                      onClick={handleAddWishList}
                    >
                      ADD ITEM
                    </Button>
                  </DialogActions>
                </form>
              );
            }}
          </Formik>
        </DialogContent>
      </Dialog>
    </Box>
  );
}
