import React, { useState } from "react";
import '../uploadSection/upload.css'
import toast from 'react-hot-toast';
import Name from "./Name";

const Upload = () => {

  const [fileList, setfilelist] = useState({
    filename: "",
    date: ""
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const requestBody = new FormData();

  const handleFileUpload = async (e) => {
    // Logic to handle file upload
    const files = e.target.files[0];
    // Process the files as needed
    requestBody.append("file", files);
    console.log('Files uploaded:', files);
    
  };

  const submit = async () => {
    const backendUrl = "https://flask-end-vp25.onrender.com/upload";
    try {
      setIsSubmitting(true)
      const response = await fetch(backendUrl, {
        method: "POST",
        body: requestBody,
      })
      if(response.status !== 200) {
        toast.error(`Failed to upload file \n Check the console for details`)
      }

      console.log(response.status);
      toast.success('Successfully!');
    } catch(error) {
      console.error("Failed to submit: ", error);
      toast.error("Network error")
    } finally {
      setIsSubmitting(false)
    }
    
  }



  var fu1 = document.getElementById("FileInput"); //Little Dave

  return (

    <div class='screen-division' style={{ width: '80vw', display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
      <div class="container">



        <div class="upload">
          <div class='attach' >
            Kindly attach  csv file
          </div>
          <div class="uploadfolder" >

            <svg
              class="svgfolder"
              // className="shrink-0 w-6 h-6    "
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Your SVG path here */}
              <path
                d="M2.25 13.002V12.252C2.25 11.0093 3.25736 10.002 4.5 10.002H19.5C20.7426 10.002 21.75 11.0093 21.75 12.252V13.002M13.0607 6.56261L10.9393 4.44129C10.658 4.15999 10.2765 4.00195 9.87868 4.00195H4.5C3.25736 4.00195 2.25 5.00931 2.25 6.25195V18.252C2.25 19.4946 3.25736 20.502 4.5 20.502H19.5C20.7426 20.502 21.75 19.4946 21.75 18.252V9.25195C21.75 8.00931 20.7426 7.00195 19.5 7.00195H14.1213C13.7235 7.00195 13.342 6.84392 13.0607 6.56261Z"
                stroke="#606060"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div  >
              <label htmlFor="fileInput" class="input">
                <input
                  type="file"
                  id="fileInput"
                  className="hidden"
                  accept="text/csv"
                  onChange={(e) => handleFileUpload(e)}
                />

              </label>
              <div class='choose' >
                <div >
                  Drag &amp; drop or  click to upload  csv file
                </div>
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
        {Object.entries(fileList).map(([key, value]) => {
          return <Name key={key} filename={value.filename} date={value.date}/>
        })}
      </div>
    </div>




  )
}
export default Upload
