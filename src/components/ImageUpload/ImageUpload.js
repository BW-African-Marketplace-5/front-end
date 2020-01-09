import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import {
  FormGroup,
  Label,
  Input,
  FormText
} from 'reactstrap'
import axios from "axios";

const ImageUpload = ({ setImage }) => {
  const onDrop = useCallback(
    acceptedFiles => {
      // Do something with the files

      const data = new FormData();
      for (let i = 0; i < acceptedFiles.length; i++) {
        let file = acceptedFiles[i];
        data.append("image", file);
      }
      axios({
        url: "https://api.imgur.com/3/upload",
        method: "post",
        data: data,
        headers: {
          Authorization: "Client-ID 63fd2a84739f9df",
          "Content-Type": "multipart/form-data"
        }
      })
        .then(res => {
          setImage(res.data.data.link);
        })
        .catch(err => err.message);
    },
    [setImage]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <FormGroup>
        <Label for="exampleFile">File</Label>
        <Input type="file" name="file" id="exampleFile" />
        <FormText color="muted">
          This is some placeholder block-level help text for the above input.
          It's a bit lighter and easily wraps to a new line.
        </FormText>
      </FormGroup>
      )}
    </div>
  );
};

export default ImageUpload;
