// initial state
const initialState = {
  count: 0,
  name: "seb",
  todoList: ["good luck", "have fun!"],
  todoObject: { foo: "bar" },
};

// reducer functions
const addCount = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, name: "abby", count: state.count + 1 };
    case "DECREMENT":
      return { ...state, name: "lothric", count: state.count - 1 };
    case "ADDTODO":
      const todo = action.todo;
      const newTodoList = state.todoList;
      newTodoList.push(todo);
      console.log(state.todoList);

      return { ...state, todoList: newTodoList, todoObject: { foo: "foo" } };
    case "DELETETODO":
      return {};
    default:
      return state;
  }
};

export default addCount;
