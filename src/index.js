import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Data, Text, OptionContext } from "./state/context/index";


// let passingData = {
//   series: [
//     {
//       type: "graph",
//       layout: "force",
//       animation: false,
//       draggable: true,
//       data: [
//         { value: 1, symbolSize: 40 },
//         { value: 2, symbolSize: 40 },
//         { value: 3, symbolSize: 40 },
//         { value: 4, symbolSize: 40 },
//         { value: 5, symbolSize: 40 },
//         { value: 6, symbolSize: 40 },
//         { value: 7, symbolSize: 40 },
//         { value: 8, symbolSize: 40 },
//         { value: 9, symbolSize: 40 },
//       ],
//       itemStyle: {
//         color: "rgba( 0, 0, 0, 1 )",
//       },
//       force: {
//         initLayout: "circular",
//         // gravity: 0,
//         repulsion: 100,
//         edgeLength: 100,
//       },
//       edges: [
//         { source: 1, target: 2 },
//         { source: 2, target: 3 },
//         { source: 4, target: 5 },
//         { source: 6, target: 7 },
//         { source: 8, target: 9 },
//       ],
//     },
//   ],
// };
ReactDOM.render(
  <React.StrictMode>
    {/* <Data.Provider value={passingData}> */}
    <OptionContext>
      <Text.Provider value='working'>
        <App />
      </Text.Provider>
      {/* </Provider> */}
    {/* </Data.Provider> */}
    </OptionContext>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
