import { useState } from "react"

export default function Counter() {
    const [score, setScore] = useState(0);
    
    function increment() {
        setScore(score => score +1);
        // console.log('clicked',score);
    }
    
    return(
        <>
            <button onClick={() => increment()}>+1</button>
            <button onClick={() => {
                increment();
                increment();
                increment();
            }}>+3</button>
            <h1>Score: {score}</h1>
            <hr />
            <hr />
        </>
    )
}