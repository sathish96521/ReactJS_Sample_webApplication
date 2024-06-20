import React, { useState } from "react";

function Loading() {
    const [isLoading, setLoading] = useState();
    return (
        <>
            <h3>UseState</h3>
            <button onClick={() => setLoading((prevState) => !prevState)}>Togle Loading</button>

            {isLoading ? <p>LOading......</p> : <h3>Data will display here</h3>}
        </>
    )
}
export default Loading;