import React, { useEffect } from 'react'
import PropTypes from 'prop-types';
const TestComponent = ({setValue, value}) => {

    const changeValue = ()=>{
        setValue((prev)=>prev+1);
    }

  useEffect(()=>{
      console.log("child useeffect ran");
  },[])

  return (
    <div>
        <button onClick={changeValue}>Click:{value}</button>
    </div>
  )
  
}

TestComponent.propTypes = {
  setValue:PropTypes.func
}

export default TestComponent