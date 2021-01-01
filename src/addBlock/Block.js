import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledBlock = styled.div.attrs((props) => ({
  style: {
    left: props.left + "px",
    top: props.top + "px",
    width: props.width + "px",
    height: props.height + "px",
    backgroundColor: props.color,
  },
}))`
  position: absolute;
  border: 1px solid grey;
`;

const Block = (props) => {
  const left = props.attr.position.left;
  const top = props.attr.position.top;
  const width = props.attr.size.width;
  const height = props.attr.size.height;
  const color = props.attr.color;

  return (
    <StyledBlock
      left={left}
      top={top}
      width={width}
      height={height}
      color={color}
    />
  );
};

Block.propTypes = {
  attr: PropTypes.object.isRequired,
};

export default Block;
//proptype
