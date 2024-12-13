import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdDeleteForever } from "react-icons/md";
import { addTask, deleteTask } from "../Store";

const Todo = () => {
  const [task, setTask] = useState("");
  const state = useSelector((state) => state.task);
  const dispatch = useDispatch();


  const handleForm = (e) => {
    e.preventDefault();
     dispatch(addTask(task));
     return setTask("")
  };

  const handleDelete = (id)=>{
    return dispatch(deleteTask(id))
  }

  return (
    <>
      <div className="flex   w-[50%] bg-pink-200  m-auto h-[600px]">
        <div className="px-20 border w-full">
          <div className="my-10 text-center">
            <h1>TO-DO</h1>
          </div>

          <form
            className="w-full flex justify-between border"
            action=""
            onSubmit={handleForm}
          >
            <input
              className="w-full text-black px-5"
              type="text"
              placeholder="write your tasks"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
            <button className="px-4 py-2 bg-black text-white">Add</button>
          </form>

          <ul className="my-10 px-10">
            {state.map((curtask, index) => {
              return (
                <li key={index} className="flex justify-between">
                  <p>
                    {index}: {curtask}
                  </p>
                  <button>
                    <MdDeleteForever className="icon-style text-red-600" onClick={()=>handleDelete(index)} />
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Todo;
