import {
  InsertEmoticonOutlined,
  PhotoLibraryRounded,
  VideoCallRounded,
} from "@mui/icons-material";
import { Box, Avatar, TextField, Typography, IconButton } from "@mui/material";
import  React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Dialog from "@mui/material/Dialog";
import AvatarProfile from './images/avatarprofile.jpg'
import { styled } from '@mui/material/styles';
import { useData } from "./DataContext";


function ConfirmationDialogRaw(props) {
  const [image, setImage] = useState(null);
  const [text,setText]=useState(" ")
  
  const { onClose, value: valueProp, open, ...other } = props;
  const [value, setValue] = useState(valueProp);
  const radioGroupRef = useRef(null);

  const post=useData()

  const handleChange = () => {
    if (value.trim() !== '') {
      const newPost = {
        id: Date.now(),
        author: 'You',
        time: new Date().toLocaleString(),
        content: text,
        image: image,
        likes: 0,
        bookmarks: 0,
      };
      post.addNewPost(newPost);
      setText('');
      setImage(null);
    }
  };
  function handleImage(e){
    console.log(e,"oiuygtfrds e image")
    setImage(e.target.files[0])
     
    console.log(image,"chacahacaga")
  }
  

  React.useEffect(() => {
    if (!open) {
      setValue(valueProp);
    }
  }, [valueProp, open]);

  const handleEntering = () => {
    if (radioGroupRef.current != null) {
      radioGroupRef.current.focus();
    }
  };

  const handleCancel = () => {
    onClose();
  };

  const handleOk = () => {
    onClose(value);
    console.log(image,text)
  };

  // const handleChange = (event) => {
  //   setValue(event.target.value);
  // };
  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });
  return (
    <Dialog
      sx={{ "& .MuiDialog-paper": { width: "80%", maxHeight: 435 } }}
      maxWidth="xs"
      TransitionProps={{ onEntering: handleEntering }}
      open={open}
      {...other}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <DialogTitle>Create Post</DialogTitle>
        {/* {
          image && {image}
        } */}
        
                
             
        <Button autoFocus onClick={handleCancel}>
          X
        </Button>
      </Box>

      <DialogContent>
        <Box sx={{display:"flex"}}>
      <Avatar alt="Zayn M" src={AvatarProfile} sx={{height:30,width:30,mr:1,mb:1}} />
         
        <Typography >Zayn M</Typography>
        </Box>
     

        <TextField placeholder="What's on your mind, Zayn M ?" sx={{width:"400px"}} onChange={(e)=>setText(e.target.value)}></TextField>
        <Box sx={{display:"flex",mt:1,justifyContent:"space-between"}}>
        <Typography >Add to your story</Typography>
       
    
       
        <Button component="label" variant="text"  startIcon={<PhotoLibraryRounded sx={{color:"lightgreen"}} />}>
   
     <VisuallyHiddenInput type="file" onChange={handleImage}
        accept="image/*" />
    </Button>
   
      </Box>
      </DialogContent>
      <DialogActions>
        <Box>
        <Button onClick={handleChange}>Post</Button>
        </Box>
      </DialogActions>
     
    </Dialog>
  );
}

ConfirmationDialogRaw.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
};

export default function CreatePost() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("Dione");

  const handleClickListItem = () => {
    setOpen(true);
  };

  const handleClose = (newValue) => {
    setOpen(false);

    if (newValue) {
      setValue(newValue);
    }
  };
  const callStyle = {
    display: "flex",
    alignItems: "center",
    p: "2px 20px",
    mt: "2px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "whitesmoke",
    },
  };
  const callNameStyle = { ml: "10px", fontSize: "12px" };

  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: "#fff",
        width: 550,
        p: "15px",
        borderRadius: "10px",
        mt: "30px",
    
        boxShadow: "4px 2px 10px #ccc",
        flexDirection: "column",
        boxSizing: "border-box",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", flex: 1 }}>
        <Avatar />
        <Box
          sx={{
            backgroundColor: "white",
            p: "1px",
            borderRadius: "20px",
            ml: "10px",
            flex: 1,
          }}
        >
          <TextField
            placeholder="what's on your mind Zayn M "
            sx={{
              backgroundColor: "whitesmoke",
              borderRadius: "200px",
              textDecoration: "none",
              width: "450px",
            }}
            size="small"
            onClick={handleClickListItem}
          ></TextField>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderTop: "1px solid lightgray",
          mt: "15px",
        }}
      >
        <Box sx={callStyle}>
          <VideoCallRounded sx={{ color: "red" }} fontSize="large" />
          <Typography sx={callNameStyle}>Live Video</Typography>
        </Box>
        <Box sx={callStyle}>
          <PhotoLibraryRounded sx={{ color: "lightgreen" }} fontSize="large" />
          <Typography sx={callNameStyle}>Photo/Video</Typography>
        </Box>
        <Box sx={callStyle}>
          <InsertEmoticonOutlined sx={{ color: "#ffb100" }} fontSize="large" />
          <Typography sx={callNameStyle}>Feeling/Activity</Typography>
        </Box>
      </Box>
      <ConfirmationDialogRaw open={open} onClose={handleClose} value={value} />
    </Box>
  );
}
