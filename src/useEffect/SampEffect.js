import { useEffect } from "react";
import dbConnection from "../dbConnection";

const SampEffect = ({ counter }) => {
    // console.log(counter);
    const conn = dbConnection();

    useEffect(() => {
        conn.connect();

        //cleanUp work
        return () => {
            conn.disconnect();
        }
    }, []);

    // [] -> mounting phase -> execute only once
    // [state, prop] ->during first rendering, everytime there is change in value of your state, prop that you have passed as dependency
    return (
        <div>
            <h1>User Component</h1>
        </div>
    );
}
export default SampEffect;
