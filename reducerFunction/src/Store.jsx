
 import { createStore } from 'redux'




const ADD_TASK = "task/add";
const DELETE_TASK = "task/delete"


const initialState = {
    
        task: [],
    
}

const reducerfunction =((state = initialState, action)=>{
    switch (action.type) {
        case ADD_TASK:
            return{
                ...state, task:[ ...state.task, action.payload]
            }
        case DELETE_TASK:
            const updatedTask = state.task.filter((curtask, index)=>{
                return index !== action.payload

            })
            return{
                ...state, task: [ updatedTask]
            }

    
        default:
            return state;
    }

})



const store = createStore(reducerfunction);
    console.log(store)


    console.log("initial", store.getState());
    store.dispatch({type:ADD_TASK, payload:"Hi alika"});
    console.log("updated", store.getState());
    store.dispatch({type:ADD_TASK, payload: "hi roshana"});
    console.log("updated", store.getState());
    store.dispatch({type:DELETE_TASK, payload:1})
    console.log("deleted", store.getState())