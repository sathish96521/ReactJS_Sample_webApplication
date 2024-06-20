import React, { useState } from "react";

function Comment() {
    const [title, handleTitle] = useState('Good Morning');

    return (
        <div>
            <h1>{title}</h1>
            <button onClick={() => handleTitle('Good Evening')}>Change Title</button>
        </div>
    )
}

export default Comment;