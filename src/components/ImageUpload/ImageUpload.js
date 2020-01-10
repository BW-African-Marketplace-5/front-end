import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import styled from "styled-components";

import { Spinner } from "reactstrap";

const DragDiv = styled.div`
  border: 1px dotted gray;
  padding: 4%; 0%; 0; 0%;
  color: #dc3545;
  &&:focus {
    outline: none !important;
  }
  p {
    margin-bottom: 0;
  }
`;

const ImageDiv = styled.div`
  color: #dc3545;
  &&:focus {
    outline: none !important;
  }
  p {
    margin-bottom: 0;
  }
`;

const UpP = styled.p`
  color: black;
`;

const ImageUpload = ({ setImage }) => {
  const [isFetching, setIsFetching] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);

  const onDrop = useCallback(
    acceptedFiles => {
      // Do something with the files

      const data = new FormData();
      for (let i = 0; i < acceptedFiles.length; i++) {
        let file = acceptedFiles[i];
        data.append("image", file);
        console.log(data, acceptedFiles);
      }
      axios(
        {
          url: "https://api.imgur.com/3/upload",
          method: "post",
          data: data,
          headers: {
            Authorization: "Client-ID 63fd2a84739f9df",
            "Content-Type": "multipart/form-data"
          }
        },
        setIsFetching(true)
      )
        .then(res => {
          setImage(res.data.data.link);
          setIsFetching(false);
          setIsUploaded(true);
        })
        .catch(err => err.message);
    },
    [setImage]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <ImageDiv {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <DragDiv>
          <p>Drop the files here ...</p>
        </DragDiv>
      ) : isFetching ? (
        <div>
          <Spinner color="danger" />
          <br />
          <UpP>Uploading...</UpP>
        </div>
      ) : isUploaded ? (
        <p>Upload Successful</p>
      ) : (
        <DragDiv>
          <p>Drag or click here to upload Profile Photo</p>
        </DragDiv>
      )}
    </ImageDiv>
  );
};

export default ImageUpload;
