import React from "react";
import { useSelector } from "react-redux";

const Todo = () => {
  const state = useSelector((state) => state.task);

  return (
    <>
      <div className="flex   w-[50%] bg-pink-500 text-white m-auto h-[600px]">
        <div className="px-20 border w-full">
          <div className="my-10 text-center">
            <h1>TO-DO</h1>
          </div>
          
            <form className="w-full flex justify-between border" action=""><input className="w-full text-black px-5" type="text" placeholder="write your tasks" />
            <button className="px-4 py-2 bg-black">Add</button></form>
            
          
          <ul className="my-10">
            {state.map((curtask, index) => {
              return (
                <li key={index}>
                  <p>
                    {index}: {curtask}
                  </p>
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
