import React, { useCallback, useContext } from "react";
import ReactECharts from "echarts-for-react";
import TextArea from "./component/InpText";
import Nav from "./component/Nav";
import { Data, Text } from "./state/context/index";

const Page = () => {
  let text = useContext(Text);
  let [option ,setOption] = useContext(Data)



  return (
    <>
      <Nav />
      <div className="App" style={{ display: "flex", flexDirection: "row" }}>
        <TextArea className="textArea" content={text}  />
        <ReactECharts
        theme='dark'
          option={{...option}}
          style={{ height: "90vh", width: "100%" }}
        />
      </div>
    </>
  );
};

export default Page;
