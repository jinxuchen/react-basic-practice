import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { map } from "lodash";
import Block from "./Block";

const StyledBoard = styled.div`
  background-color: lightgreen;
  height: 300px;
`;

const AddBlock = () => {
  const [blockArr, setBlockArr] = useState([]);
  const [click, setClick] = useState(false);
  const [mousePos, setMousePos] = useState({ left: null, top: null });

  function clickToAdd() {
    if (click) {
      setClick(false);
    } else {
      setClick(true);
    }
  }

  function clickBoard() {
    const newBlock = {
      position: mousePos,
      size: { width: 100, height: 100 },
      content: "i am pic1!",
      color: "yellow",
    };
    const newBlockArr = [...blockArr, newBlock];
    if (click) {
      setBlockArr(newBlockArr);
    }
  }

  const blocks = map(blockArr, (block, key) => (
    <Block key={key} attr={block} />
  ));

  return (
    <div>
      <button onClick={() => setBlockArr([])}>delete block</button>
      <button onClick={clickToAdd}>click to add block!</button>

      <div>
        <StyledBoard
          onClick={clickBoard}
          onMouseDown={(e) => setMousePos({ left: e.clientX, top: e.clientY })}
        >
          {blocks}
        </StyledBoard>
      </div>
    </div>
  );
};

export default AddBlock;
