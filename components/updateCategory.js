"use client";
import React, { useState, useEffect } from "react";
import { TextField, Box, Button, Modal, Typography } from "@mui/material";
import NoteAltOutlinedIcon from "@mui/icons-material/NoteAltOutlined";
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);
import { UploadFirebase } from "../utils/UploadFirebase";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 550,
  height: 650,
  maxHeight: 650,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  color: "#000",
  borderRadius: "20px",
  padding: "40px 30px 20px",
  textAlign: "center",
};
function updateCategory(props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [id, setId] = useState();
  const [file, setFile] = useState();
  const [name, setName] = useState();
  const [image, setImage] = useState();

  useEffect(() => {
    setId(props.categories.id);
    setName(props.categories.name);
    setImage(props.categories.image);
  }, []);

  const handlesave = async (url) => {
    setImage(url);
    const cat = {
      id: id,
      name: name,
      image: url,
    };
    const res = await (
      await fetch("https://api.escuelajs.co/api/v1/categories/" + id, {
        method: "PUT",
        body: JSON.stringify(cat),
        headers: {
          "Content-Type": "application/json",
        },
      })
    ).json();
    if (res) {
      console.log("successfully updated!");

      handleClose();
    } else {
      console.log(res);
    }
  };

  const handleUpload = (event) => {
    event.preventDefault();
    if (!file) {
      const url = image;
      handlesave(url);
    } else {
      console.log(file[0].file);
      resultHandleUpload(file[0].file);
    }
  };
  const resultHandleUpload = async (file) => {
    try {
      const url = await UploadFirebase(file);
      console.log(url);

      handlesave(url);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <span onClick={handleOpen} style={{ cursor: "pointer" }}>
        <NoteAltOutlinedIcon color="success" />
      </span>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Update Category
          </Typography>
          <hr />

          <div className="mb-4">
            <TextField
              variant="outlined"
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            {!file ? (
              <img src={image} style={{ width: 50, height: 50 }} />
            ) : null}
            <h6>Selet new image</h6>
            <center>
              <div style={{ width: 200, height: 250 }}>
                <FilePond
                  files={file}
                  allowMultiple={false}
                  onupdatefiles={setFile}
                  labelIdle='<span class="filepond--label-action">Browse 
One</span>'
                />
              </div>
            </center>
          </div>
          <hr />
          <div className="mb-3">
            <Button
              type="button"
              className="btn btn-success"
              onClick={(event) => handleUpload(event)}
            >
              Update
            </Button>
            <Button
              type="button"
              className="btn btn-secondary"
              onClick={handleClose}
            >
              Close
            </Button>
          </div>
        </Box>
      </Modal>
    </>
  );
}
export default updateCategory;
