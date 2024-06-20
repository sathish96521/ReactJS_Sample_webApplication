// UseState with object

import React, { useState } from "react";

function UserForm() {
    const intialObj = {
        username: "",
        password:"",
    }
    const [user, setUser] = useState(intialObj);

    function handleChange(e) {
        setUser({
            ...user,
            [e.target.name] : e.target.value,
        });
        // console.log(e.target.value);
    }

    return (
        <>
            <h3>UseState with object</h3>
            <p>{JSON.stringify(user)}</p>
            <form>
                <label>UserName:
                    <input type="text" name="username" onChange={handleChange}/>
                </label>
                <br />
                <label>Password:
                    <input type="text" name="password" onChange={handleChange}/>
                </label>
            </form>
            <hr />
        </>
    )
}
export default UserForm;