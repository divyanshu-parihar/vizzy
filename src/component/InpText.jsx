import { useContext, useEffect, useState } from "react";
import { parse } from "uuid";
import { Data } from "../state/context";
// const uuidv4 = require("uuid/v4");
function uuidv4() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
}

const TextArea = ({ content }) => {
  const [option, setOption] = useContext(Data);
  // const [newData, setNewData] = useState();

  const onChangeFunction = (e) => {
    let nodes = new Set();
    let edges = [];

    let newData = {
      series: [
        {
          type: "graph",
          layout: "force",
          label: {
            show: true,
          },
          animation: true,
          draggable: true,
          data: [
            // { value: 1, symbolSize: 40 },
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
            // { source: 1, target: 2 },
          ],
          textStyle: {
            color: "white",
          },
        },
      ],
    };
    // let arr = e.target.value.split("\n");
    // console.log(arr);
    // // console.log("arr.length" + arr.length);

    // arr.forEach((el) => {
    //   let nodes = el.split(" ");
    //   console.log(nodes);
    //   nodes.forEach((node) => {
    //     if (
    //       !(nodes.filter((e) => e.name === node).length > 0) &&
    //       (node !== undefined || node != "")
    //     ) {
    //       console.log(node);

    //       newData.series[0].data.push({
    //         // id: uuidv4(),
    //         name: node,
    //         value: parseInt(node),
    //         symbolSize: 40,
    //       });
    //     }
    //   });
    //   if (nodes[0] !== '' || nodes[1] !== '') {
    //     console.log("source:" + nodes[0], nodes[1]);
    //     newData.series[0].edges.push({
    //       source: parseInt(nodes[0]),
    //       target: parseInt(nodes[1]),
    //     });
    //   }
    // });

    // setOption(newData);
    let arr = e.target.value.split("\n");
    arr.forEach((line) => {
      line.split(" ").forEach((node) => {
        if (!isNaN(parseFloat(node))) {
          nodes.add(parseInt(node));
        }
      });
      let splittedLine = line.split(" ");
      if (!isNaN(parseInt(splittedLine[0]))) {
        edges.push({
          source: splittedLine[0],
          target: splittedLine[splittedLine.length - 1],
        });
      }
    });
    newData.series[0].data = Array.from(nodes);
    newData.series[0].edges = edges;
    console.log(nodes);
    console.log(edges);
    setOption(newData);
  };
  return (
    <div className="textarea">
      <textarea
        id="inpBox"
        name="inpBox"
        defaultValue={content ? content : "Loading"}
        onChange={onChangeFunction}
        style={{
          resize: "none",
          width: "100%",
          height: "90vh",
          border: "none",
        }}
      />
    </div>
  );
};

export default TextArea;
