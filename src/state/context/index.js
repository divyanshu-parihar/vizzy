import React, { useState } from "react";
export const Text = React.createContext('working');
export const Data = React.createContext();




export const OptionContext = (props)=>{
   const [option, setOption] =  useState({
    series: [
      {
        type: "graph",
        layout: "force",
        animation: true,
        draggable: true,
        data: [
          { value: 1, symbolSize: 40 },
          { value: 2, symbolSize: 40 },
          { value: 3, symbolSize: 40 },
          { value: 4, symbolSize: 40 },
          { value: 5, symbolSize: 40 },
          { value: 6, symbolSize: 40 },
          { value: 7, symbolSize: 40 },
          { value: 8, symbolSize: 40 },
          { value: 9, symbolSize: 40 },
        ],
        itemStyle: {
          color: "rgba( 255,255,255, 1 )",
        },
        force: {
          initLayout: "circular",
          // gravity: 0,
          repulsion: 100,
          edgeLength: 100,
        },
        edges: [
          { source: 1, target: 2 },
          { source: 2, target: 3 },
          { source: 4, target: 5 },
          { source: 6, target: 7 },
          { source: 8, target: 9 },
        ],
		texrStyle:{
			color:'white'
		}
      },
    ],
  })

  return (
      <Data.Provider value={[option,setOption]}>
      {props.children}
      </Data.Provider>
  )
}