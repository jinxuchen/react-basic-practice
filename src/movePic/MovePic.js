import React, { useState } from "react";
import styled, { keyframes, css } from "styled-components";

const StyledDiv = styled.div`
  margin-top: 200px;
  margin-left: 200px;
`;

const StyledGrids = styled.div`
  display: flex;
`;

const StyledPicture = styled.img`
  position: fixed;
  left: ${(props) => props.position.left + "px"};
  top: ${(props) => props.position.top + "px"};

  width: ${(props) => props.chessSize.width + "px"};
  height: ${(props) => props.chessSize.height + "px"};
`;

const StyledCell = styled.div`
  position: fixed;
  left: ${(props) => props.position.left + "px"};
  top: ${(props) => props.position.top + "px"};

  width: ${(props) => props.chessSize.width + "px"};
  height: ${(props) => props.chessSize.height + "px"};
  border: 1px solid black;

  &:hover {
    background-color: lightGrey;
  }
`;

const MovePic = () => {
  const chessWidth = 211 / 2;
  const chessHeight = 385 / 2;
  const chessSize = { width: chessWidth, height: chessHeight };

  const [position, setPosition] = useState({
    left: chessWidth,
    top: 0,
  });
  const gridSize = { left: "100px", top: "100px" };

  const Cell = (props) => {
    const CellPosition = props.position;
    return (
      <StyledCell
        chessSize={chessSize}
        position={CellPosition}
        onClick={() => setPosition(CellPosition)}
      ></StyledCell>
    );
  };

  return (
    <StyledDiv>
      <StyledGrids>
        <Cell position={{ left: 0, top: 0 }} />
        <Cell position={{ left: chessWidth, top: 0 }} />
        <Cell position={{ left: chessWidth * 2, top: 0 }} />
        <Cell position={{ left: chessWidth * 3, top: 0 }} />

        <Cell position={{ left: 0, top: chessHeight }} />
        <Cell position={{ left: chessWidth, top: chessHeight }} />
        <Cell position={{ left: chessWidth * 2, top: chessHeight }} />
        <Cell position={{ left: chessWidth * 3, top: chessHeight }} />
      </StyledGrids>

      <StyledPicture
        chessSize={chessSize}
        position={position}
        src="./chess.png"
      />
    </StyledDiv>
  );
};

export default MovePic;
