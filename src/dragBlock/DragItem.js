import React, { useState } from "react";
import styled from "styled-components";
import { map } from "lodash";

const StyledBoard = styled.div`
  background-color: lightblue;
  height: 300px;
`;

const StyledItem = styled.div.attrs((props) => ({
  style: {
    left: props.position.left + "px",
    top: props.position.top + "px",
  },
}))`
  border: 1px solid grey;
  background-color: lightgrey;
  padding: 6px;

  position: fixed;
`;

const MoveItem = () => {
  const [mouseDown, setMouseDown] = useState(false);
  const [position, setPosition] = useState({ left: 0, top: 0 });

  function handleMouseMove(e) {
    e.preventDefault();
    if (mouseDown) {
      setPosition({ left: e.clientX, top: e.clientY });
    }
  }

  return (
    <StyledBoard onMouseMove={(e) => handleMouseMove(e)}>
      <StyledItem
        position={position}
        onMouseDown={() => setMouseDown(true)}
        onMouseUp={() => setMouseDown(false)}
      >
        left:{position.left}, top:{position.top}
      </StyledItem>
    </StyledBoard>
  );
};

export default MoveItem;
