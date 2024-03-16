import React, { useState } from "react";
import "../uploadSection/upload.css";
import toast from "react-hot-toast";
import Name from "./Name";
import Folder from "../svg/Folder";

const Upload = ({ filename, setFilename, setQuerySection, setUploadSection }) => {

  const [fileList, setFileList] = useState({
    filename: "",
    date: ""
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const requestBody = new FormData();

  const handleFileUpload = async (e) => {
    const files = e.target.files[0];
    console.log(files.name)
    requestBody.append("file", files)
    console.log(requestBody)
    setFilename(files.name)
  };

  const submit = async () => {
    const backendUrl = "https://flask-end-vp25.onrender.com/upload";

    try {
      setIsSubmitting(true)

      //reject no upload
      if (!filename) {
        return toast.error("Upload a CSV");
      }

      const response = await fetch(backendUrl, {
        method: "POST",
        body: requestBody,
      })

      if (response.status !== 200) {
        console.log(response)
        return toast.error(`Failed to upload file \n Check the console for details`)
      }

      const result = await response.json();

      if(result.filename !== filename) {
        return toast.error("Something went wrong \n Upload the file again");
      }

      //update uploaded file list
      const newFile = {
        filename: filename,
        date: `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`,
      };
      setFileList((prev) => ({ ...prev, ...newFile }));

      toast.success('Successful!');

      //send user to query page
      setTimeout(() => {
        setQuerySection(true);
        setUploadSection(false);
      }, 2000)
    } catch (error) {
      console.error("Failed to submit: ", error);
      toast.error("Network error")
    } finally {
      setIsSubmitting(false)
    }

  }

  var fu1 = document.getElementById("FileInput"); //For little Dave, do not delete

  return (
    <div
      class="screen-division"
      style={{
        width: "80%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div class="container">
        <div class="upload">
          <div class="attach">Kindly attach csv file</div>
          <div class="uploadfolder">
            <Folder />
            <div>
              <label htmlFor="fileInput" class="input">
                <input
                  type="file"
                  id="fileInput"
                  className="hidden"
                  accept="text/csv"
                  onChange={(e) => handleFileUpload(e)}
                />
              </label>
              <div class="choose">
                <div>Drag &amp; drop or click to upload csv file</div>
              </div>
            </div>
          </div>
          {
            isSubmitting ?
              <button className="button">
                <span class="sr-only">Loading...</span>
              </button> :
              <button className="button" onClick={submit}>Submit</button>
          }

        </div>
      </div>

      <div>
        <Name filename={fileList.filename} date={fileList.date} />
      </div>
    </div>
  );
};
export default Upload;
