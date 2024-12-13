import { createStore } from "redux";

// making a function to use easily and also makes dynamic
// the folloeing function is used  for adding an ddeleting task

const addTask = (data) => {
  return { type: ADD_TASK, payload: data };
};

const deleteTask = (index) => {
  return {
    type: DELETE_TASK,
    payload: index,
  };
};

const ADD_TASK = "task/add";
const DELETE_TASK = "task/delete";

const initialState = {
  task: [],
};

const reducerfunction = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        task: [...state.task, action.payload],
      };
    case DELETE_TASK:
      const updatedTask = state.task.filter((curtask, index) => {
        return index !== action.payload;
      });
      return {
        ...state,
        task: updatedTask,
      };

    default:
      return state;
  }
};

export const store = createStore(reducerfunction);
console.log(store);

console.log("initial", store.getState());
// store.dispatch({ type: ADD_TASK, payload: "Hi alika" });
store.dispatch(addTask("Hi Alika"));
console.log("updated", store.getState());

store.dispatch({ type: ADD_TASK, payload: "hi roshana" });
console.log("updated", store.getState());

// store.dispatch({ type: DELETE_TASK, payload: 1 })
store.dispatch(deleteTask(1));
console.log("deleted", store.getState());
store.dispatch(addTask("add roshanaa"))
store.dispatch(addTask("add both"))
