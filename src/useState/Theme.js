import React, { useState } from "react"

const Theme = () => {

    const [darkTheme, setDarkTheme] = useState();

    const theme = {
        darkTheme: {
            backgroundColor: 'gray',
            color: 'white',
            padding: '20px'
        },
        lightTheme: {
            backgroundColor: 'white',
            color: 'black',
            padding: '20px'

        }
    }
    return (
        <>
            <hr />
            Enable Dark Theme:
            <input type="checkbox" checked={darkTheme}  onChange={() => setDarkTheme(prevTheme => !prevTheme)}/>
            <div style={darkTheme ? theme.darkTheme : theme.lightTheme}>

                <h1>useState hook in react</h1>
                <p>Top Enterprise client. I would like to check your availability and interest for below position.</p>
            </div>
            <hr />
        </>
    )
}
export default Theme;