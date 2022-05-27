import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';

const Round = [1, 2, 3, 4, 5, 6, 7];

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props}/>;
});

function SimpleDialog({open, setOpen, callbackfunc}) {  
  function handleListItemClick(cnt) {
    setOpen(false);
    callbackfunc(cnt);
  }

  return (
    <Dialog 
      open={open}
      TransitionComponent={Transition}
      onClose={() => {setOpen(false)}}
      style={{borderRadius:'20px'}}
    >
      <DialogTitle style={{fontWeight:'800', textAlign:'center'}}>체험을 진행할 차시를 선택하세요.</DialogTitle>
      <List sx={{ pt: 0 }}>
        {Round.map((cnt) => (
          <ListItem button onClick={() => handleListItemClick(cnt)} key={cnt} style={{textAlign:'center'}}>
            <ListItemText primary={cnt + '교시'} />
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}

export default SimpleDialog;