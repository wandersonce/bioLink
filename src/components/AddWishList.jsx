import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { AddBox } from '@mui/icons-material';
import { Formik } from 'formik';

const initialValues = {
  name: '',
  link: '',
  imgLink: '',
};

export default function AddWishList() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
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
        <DialogTitle>Add New Wishlist Item</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
