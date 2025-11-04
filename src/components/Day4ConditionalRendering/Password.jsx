import React from 'react'

 const ValidPassword = () => <h1>Valid Password</h1>;
 const InvalidPassword = () => <h1>InValid Password</h1>;

const Password = ({isValid}) => {
   
      if(isValid){
        return <ValidPassword/>;
      }
      return <InvalidPassword/>

      // Using Ternary operators for minizing code

    //   isValid? <ValidPassword/> :<InvalidPassword/>
}

export default Password
