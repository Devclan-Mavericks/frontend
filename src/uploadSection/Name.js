import React from "react";

function Name ({filename, date}) {
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