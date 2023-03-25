// import React from "react";
// import { Circle, Line } from "react-svg";

// const Gauge = ({ value }) => {
//   const radius = 50;
//   const strokeWidth = 10;
//   const circumference = 2 * Math.PI * radius;
//   const progress = value / 100;

//   const dashOffset = circumference * (1 - progress);

//   return (
//     <svg viewBox="-50 -50 100 50" width="100" height="50">
//       <Circle
//         cx="0"
//         cy="0"
//         r={radius}
//         stroke="#ccc"
//         strokeWidth={strokeWidth}
//         fill="none"
//       />
//       <Circle
//         cx="0"
//         cy="0"
//         r={radius}
//         stroke="#4CAF50"
//         strokeWidth={strokeWidth}
//         fill="none"
//         strokeDasharray={`${circumference} ${circumference}`}
//         strokeDashoffset={dashOffset}
//         strokeLinecap="round"
//       />
//       <Line x1="-50" y1="0" x2="50" y2="0" stroke="#ccc" strokeWidth="1" />
//       <Line x1="0" y1="-50" x2="0" y2="0" stroke="#ccc" strokeWidth="1" />
//       <Line x1="0" y1="0" x2="50" y2="0" stroke="#4CAF50" strokeWidth="3" />
//     </svg>
//   );
// };

// export default Gauge;