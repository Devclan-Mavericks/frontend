import React from "react";

function Name ({filename, date}) {
    console.log("filename: ", filename, "date: ", date)
    if(!filename || !date) {
        return (
            <div>

            </div>
        )
    }
    return(
        <div>
            <h2>FileName:</h2>
            <p>{filename}</p>
            <h2>Date:</h2>
            <p>{date}</p>

        </div>
    )       
}
export default Name