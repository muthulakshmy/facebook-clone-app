import {
  InsertEmoticonOutlined,
  PhotoLibraryRounded,
  VideoCallRounded,
} from "@mui/icons-material";
import { Box, Avatar, TextField, Typography,Card } from "@mui/material";
import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Dialog from "@mui/material/Dialog";
import { styled } from "@mui/material/styles";
import { useData } from "./DataContext";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

function ConfirmationDialogRaw(props) {
  const [image, setImage] = useState(null);
  const [text, setText] = useState(" ");
  const dataContext = useData();

  const { onClose, value: valueProp, open, ...other } = props;
  const [value, setValue] = useState(valueProp);
  const radioGroupRef = useRef(null);

  const post = useData();
  const d=post.posts.filter((v)=>v.name===post.logName)
const d1= d.length > 0 ? d[0].avatar :post.logName
  const handleChange = () => {
    if (value.trim() !== "") {
      const newPost = {
        id: new Date(),
        name: post.logName,
        time:  new Date().toISOString(),
        content: text,
        image: image,
        avatar: d1,
        likes: 0,
        bookmarks: 0,
      };
      post.addNewPost(newPost);
      setText("");
      setImage(null);
      console.log(newPost);
    }
    onClose();
  };
  function handleImage(e) {
    // console.log(e, "oiuygtfrds e image");
    const img = e.target.files[0];
    setImage(URL.createObjectURL(img));

    // console.log(image, "chacahacaga");/
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
    console.log(image, text);
  };

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });
  function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }

  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(" ")[0][0]}`,
    };
  }
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
        <Button autoFocus onClick={handleCancel}>
          X
        </Button>
      </Box>
      <DialogContent>
        <Box sx={{ display: "flex" }}>
       
{
          d.length > 0 ? (  <Avatar
            alt={dataContext.logName}
            src={d[0].avatar}
            sx={{ height: 40, width: 40, mr: 1, mb: 1 }}
          />):(<Avatar
            alt={dataContext.logName}
            // src={d[0].avatar}
            {...stringAvatar(`${dataContext.logName}`)}
            sx={{ height: 40, width: 40 , mr: 1, mb: 1}}
          />)
        }
          <Typography sx={{ mt: 1 }}>{post.logName}</Typography>
        </Box>
        <TextField
          placeholder="What's on your mind,`${}`  ?"
          sx={{ width: "400px" }}
          onChange={(e) => setText(e.target.value)}
        ></TextField>
        <Box sx={{ display: "flex", mt: 1, justifyContent: "space-between" }}>
          <Typography>Add to your story</Typography>

          <Button
            component="label"
            variant="text"
            startIcon={<PhotoLibraryRounded sx={{ color: "lightgreen" }} />}
          >
            <VisuallyHiddenInput
              type="file"
              onChange={handleImage}
              accept="image/*"
            />
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
  const dataContext = useData();

  const handleClose = (newValue) => {
    setOpen(false);
    if (newValue) {
      setValue(newValue);
    }
  };
  const d=dataContext.posts.filter((v)=>v.name==dataContext.logName)

  function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }

  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(" ")[0][0]}`,
    };
  }
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
    <Card
      sx={{
        display: "flex",
        width: 550,
        p: "15px",
        borderRadius: "10px",
        mt: "30px",
        boxShadow: "1px 1px 2px  #ccc",
        flexDirection: "column",
        boxSizing: "border-box",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", flex: 1 }}>
        {
          d.length > 0 ? (  <Avatar
            alt={dataContext.logName}
            src={d[0].avatar}
            sx={{ height: 40, width: 40 }}
          />):(<Avatar
            alt={dataContext.logName}
            // src={d[0].avatar}
            {...stringAvatar(`${dataContext.logName}`)}
            sx={{ height: 40, width: 40 }}
          />)
        }
        {/* <Avatar
          alt={dataContext.logName}
          src={d[0].avatar}
          // {...stringAvatar(`${dataContext.logName}`)}
          sx={{ height: 40, width: 40 }}
        /> */}

        <Box
          sx={{
            // backgroundColor: "white",
            p: "1px",
            borderRadius: "20px",
            ml: "10px",
            flex: 1,
          }}
        >
          <TextField
            placeholder="whats on your mind"
            sx={{
              // backgroundColor: "whitesmoke",
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
        <Box sx={callStyle} onClick={handleClickListItem}>
          <VideoCallRounded sx={{ color: "red" }} fontSize="large" />
          <Typography sx={callNameStyle}>Live Video</Typography>
        </Box>
        <Box sx={callStyle} onClick={handleClickListItem}>
          <PhotoLibraryRounded sx={{ color: "lightgreen" }} fontSize="large" />
          <Typography sx={callNameStyle}>Photo/Video</Typography>
        </Box>
        <Box sx={callStyle} onClick={handleClickListItem}>
          <InsertEmoticonOutlined sx={{ color: "#ffb100" }} fontSize="large" />
          <Typography sx={callNameStyle}>Feeling/Activity</Typography>
        </Box>
      </Box>
      <ConfirmationDialogRaw open={open} onClose={handleClose} value={value} />
    </Card>
  );
}
