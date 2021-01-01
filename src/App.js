import React from "react";
import MovePic from "./movePic/MovePic";
import DragItem from "./dragBlock/DragItem";
import AddBlock from "./addBlock/AddBlock";
import ReduxEg from "./todoList/ReduxEg";
import DrawFrame from "./addBlock/DrawFrame";
import Promise from "./promise/PromiseEg";
import ArrMethods from "./ArrMethods/ArrMethod1";

const App = () => {
  return (
    <div>
      <DragItem />
      <br />
      2.add block
      <AddBlock />
      <ReduxEg />
      <Promise />
      <ArrMethods />
      {/* <MovePic /> */}
    </div>
  );
};

export default App;
