import React from "react";

class User extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        // console.log(this.props);
        const { user } = this.props;
        return(
            <div>
                <h1>Welcome {user}</h1>
            </div>
        )
    }
}

export default User;