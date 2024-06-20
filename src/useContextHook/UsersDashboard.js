import Users from "./Users";
import UserContext from "../context/UserContext";

const UserDashboard = () => {
    const userName = 'Sathish';
    return(
        <UserContext.Provider value={userName}>
            <h4>useContext Hook</h4>
            <Users /> 
        </UserContext.Provider>
    )
}
export default UserDashboard;