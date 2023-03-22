import React, {useState, useEffect} from "react";

const Counter = (props) => {

    let [seconds, setSeconds] = useState(0);
    
    useEffect( () => {
        let interval = setInterval(() => {
            setSeconds(seconds += 1)
        }, 1000)

        return () => clearInterval(interval)
    },[])   

    return (
    <div className="d-flex flex-column align-items-center">
        
        <h3>Simple Counter</h3>
        
        <div className="container rounded border fs-1 d-flex justify-content-center">
            
            {seconds}
        </div>
    </div>
    );
}

export default Counter;
