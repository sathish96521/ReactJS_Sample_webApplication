import React, { useState } from "react";

function Users() {
    const usersList = [
        { id: 1, name: 'sathish' },
        { id: 2, name: 'Rama' }
    ];
    const [users, setUsers] = useState(usersList);

    function updateUserList(newUser) {
        setUsers([
            ...users,
            {
                id: users.length + 1,
                name: newUser
            }
        ]);
        // console.log(newUser);
    }

    return (
        <>
            <h3>UseState with Array Type</h3>
            <form>
                <label>Add User:
                    <input type="text" name="name" onBlur={(e) => updateUserList(e.target.value)} />
                </label>
            </form>
            <p>{JSON.stringify(users)}</p>
            <hr />
        </>
    )
}
export default Users;