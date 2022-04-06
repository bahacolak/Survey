import React, { useState, useEffect} from "react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import "./Loading.css";

export default function Loading(){
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
        setLoading(false)
        }, 18000)
    }, [])
    return(
        <div className="loading--screen">
             <div>
             <ClimbingBoxLoader 
                size={30}
                color={"#9013FE"}
                loading={loading}
                />
                </div>  
            </div>
    )
}