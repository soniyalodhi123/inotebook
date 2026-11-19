// import React from "react";

// function Alert(props){
//   const capitalize = (word)=>{
//     if(word==="danger"){
//       word = "error"
//     }
//     const lower = word.toLowerCase();
//     return lower.charAt(0).toUpperCase() + lower.slice(1);

//   }
//   return(
//     <div style={{height: '50px'}}>
//       {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
//         <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
//     </div>}
//     </div>
//   )
    
  
// };

// export default Alert

import React from 'react';

function Alert(props) {
  const capitalize = (word) => {
    if (word === "danger") {
      word = "error";
    }
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  return (
    <>
      {props.alert && (
        <div
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            zIndex: 9999,
            minWidth: "280px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.3)"
          }}
        >
          <div
            className={`alert alert-${props.alert.type} alert-dismissible fade show mb-0`}
            role="alert"
          >
            <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
          </div>
        </div>
      )}
    </>
  );
}

export default Alert;