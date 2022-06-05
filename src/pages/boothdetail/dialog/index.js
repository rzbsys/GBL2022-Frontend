import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import './style.scss';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide({ open, setOpen, Boothname, agree }) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className='DialogBlock'>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle className='DialogTitle' style={{fontWeight:'800'}}>
          {Boothname}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            선택하신 부스를 예약하시겠습니까?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="error" onClick={() => { handleClose(); }}>취소하기</Button>
          <Button onClick={() => { handleClose(); agree(); }}>예약하기</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
