import React from "react";
import '../uploadSection/upload.css'


function Name({ filename, date }) {
    console.log("filename: ", filename, "date: ", date)
    if (!filename || !date) {
        return (
            <div>

            </div>
        )
    }
    return (
        <div class="Container-name">
            <div  class='pname'>
            <p>FileName:</p>
            <p>{filename}</p>
            </div>
            <div class='pdate'>
            <p >Date:</p>
            <p>{date}</p>
            </div>

            <div class='active'>  
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#1FDB81" class="bi bi-circle-fill" viewBox="0 0 16 16">
  <circle cx="8" cy="8" r="8"/>
</svg>
            Active
            </div>
        </div>


    )
}
export default Name