"use client";
import React, { useState } from "react";
import { TextField, Box, Button, Modal, Typography } from "@mui/material";
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
  height: 550,
  maxHeight: 550,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  color: "#000",
  borderRadius: "20px",
  padding: "40px 30px 20px",
  textAlign: "center",
};
function AjoutCat() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [file, setFile] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  const handlesave = async (url) => {
    setImage(url);
    const cat = {
      name: name,
      image: url,
    };
    const res = await (
      await fetch("https://api.escuelajs.co/api/v1/categories", {
        method: "POST",
        body: JSON.stringify(cat),
        headers: {
          "Content-Type": "application/json",
        },
      })
    ).json();
    if (res) {
      console.log("successfully inserted!");

      handleClose();
      setFile("");
      setName("");
      setImage("");
    } else {
      console.log(res);
    }
  };
  const handleUpload = (event) => {
    event.preventDefault();
    if (!file[0].file) {
      alert("Please upload an image first!");
    } else {
      console.log(file[0].file);
      resultHandleUpload(file[0].file, event);
    }
    if (!file[0].file) {
      alert("Please upload an image first!");
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
    <div>
      <Button type="button" className="btn btn-primary" onClick={handleOpen}>
        ADD
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add Category
          </Typography>
          <hr />

          <div className="mb-4">
            <TextField
              variant="outlined"
              label="Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <h6>Select image</h6>
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
              className="btn btn-danger"
              onClick={(event) => handleUpload(event)}
            >
              Save
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
    </div>
  );
}
export default AjoutCat;
