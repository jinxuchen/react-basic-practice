import { React, useState } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { createSelector } from "reselect";
import { map } from "lodash";

const selectTodoListLength = createSelector(
  (state) => state.todoList,
  (todoList) => todoList.length
);

// memorizing selector: maintain state, dont re-render when the component is rendered.
const TodoLength = () => {
  const todoLength = useSelector(selectTodoListLength);
  return <div>{todoLength} </div>;
};

const TodoLength2 = () => {
  const todoLength = useSelector((state) => state.todoList.length);
  return <div>{todoLength} </div>;
};

const ReduxEg = () => {
  const [input, setInput] = useState("");

  const count = useSelector((state) => state.count, shallowEqual);
  const name = useSelector((state) => state.name);
  const todoList = useSelector((state) => state.todoList);
  useSelector((state) => state.todoList.length);

  const dispatch = useDispatch();
  const onIncrement = { type: "INCREMENT", name: "abby" };
  const onDecrement = { type: "DECREMENT", name: "ceb" };
  const onAddToto = { type: "ADDTODO", todo: input };

  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  return (
    <div>
      3.redux-hook useSelector/useDispatch:
      <div>
        <button onClick={() => dispatch(onIncrement)}>Increment</button>
        <button onClick={() => dispatch(onDecrement)}>Decrement</button>
        <p>
          {count} {name}
        </p>
        <br />
      </div>
      4.redux-hook todo list:
      <div>
        <input
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <button onClick={() => dispatch(onAddToto)}>Add todo</button>
        <div>
          Things to do today:
          <div>
            {map(todoList, (todo, key) => (
              <div key={key}>@ {todo}</div>
            ))}
          </div>
          <br />
          <div>
            todoList length get from todoList.length:
            <p>{todoList.length}</p>
            todoList length get from createSelector: (maintain)
            <TodoLength />
            todoList length get from useSelect:
            <TodoLength2 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReduxEg;
