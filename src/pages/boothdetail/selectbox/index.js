import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import { useSelector } from 'react-redux';
import BookJsonToList from 'utils/BookJsonToList';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function SimpleDialog({ open, setOpen, callbackfunc }) {
  function handleListItemClick(cnt) {
    setOpen(false);
    callbackfunc(cnt);
  }

  const BookState = useSelector((state) => {
    return BookJsonToList(state.Book.books);
  });
  console.log(BookState);

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      onClose={() => { setOpen(false) }}
      style={{ borderRadius: '20px' }}
    >
      <DialogTitle style={{ fontWeight: '800', textAlign: 'center' }}>체험을 진행할 차시를 선택하세요.</DialogTitle>
      <List sx={{ pt: 0 }}>
        {
          BookState.map((item, index) => {
            if (index !== 0) {
              console.log(item);
              if (BookState[item] === -1) {
                return (
                  <ListItem button onClick={() => handleListItemClick(index)} key={index} style={{ textAlign: 'center' }}>
                    <ListItemText primary={(index) + '교시'} />
                  </ListItem>
                )
              } else {
                return (
                  <ListItem disabled button key={index} style={{ textAlign: 'center' }}>
                    <ListItemText primary={(index) + '교시 🚫'} />
                  </ListItem>
                )
              }
            }
          })
        }

      </List>
    </Dialog>
  );
}

export default SimpleDialog;