import React, { useEffect, useState } from 'react'

const ErrorBoundryComponent = ({children}) => {
    const [hasError,setError] = useState(null);

    useEffect(()=>{
        const handleError = (error,errInfo)=>{
            console.log("something webt wrong",errInfo);

            setError(true);

        }
        window.addEventListener("error",handleError);

        return ()=>{
            window.removeEventListener('error',handleError);
        }
        
    },[])

    if(hasError)
    {
        return (
            <p>something went wrong</p>
        )
    }

    

  return children;

}

export default ErrorBoundryComponent