// import React, { useState } from "react";

// const SetUpPin = ({ setUpPin, userPin }) => {
//   const [pin, setPin] = useState(1234);
//   const handelPin = () => {
//     setPin(userPin);
//     if (userPin !== pin) {
//       alert("Incorrect PIN,try again!");
//     } else {
//       alert("Welcome come back");
//       setUpPin(userPin);
//       setPin("");
//     }
//   };
//   return (
//     <div>
//       <label>
//         Enter your pin:
//         <input
//           type="number"
//           maxLength={4}
//           placeholder="example 1234"
//           value={pin}
//           onChange={(e) => setPin(e.target.value)}
//         />
//       </label>
//       <button onClick={handelPin}>Enter PIN</button>
//     </div>
//   );
// };

// export default SetUpPin;
