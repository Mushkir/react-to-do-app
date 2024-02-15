import React from "react";
import { useState } from "react";
// import { useForm } from "react-hook-form";

function App() {
  let number = 1;

  // * This State for storing tasks in an array format.
  const [task, setTask] = useState([]);

  // * This state for Handling Input
  const [currentTask, setCurrentTask] = useState("");

  const addTask = (e) => {
    e.preventDefault();
    if (currentTask !== "") {
      setTask([...task, currentTask]);
      setCurrentTask("");
    }
  };

  const handleInput = (e) => {
    // console.log(e.target.value);
    setCurrentTask(e.target.value);
  };

  const deleteTask = (index) => {
    console.log(index);
    const taskArray = [...task];
    taskArray.splice(index, 1);
    setTask(taskArray);
  };

  // console.log(task);
  return (
    <div className="bg-gray-800 min-h-screen font-Sen">
      <div className="mx-auto max-w-4xl pt-[200px]">
        <form className="">
          <input
            type="text"
            name="task-input"
            id="task-input"
            placeholder="Enter your task here"
            className="px-5 py-2 rounded w-full outline-none"
            value={currentTask}
            onChange={handleInput}
          />
          <div className="mt-5 max-w-56">
            <button
              className="bg-gray-400 w-full px-5 py-2 rounded bg-top"
              onClick={addTask}
            >
              Add
            </button>
          </div>
        </form>
        <ol className="text-white mt-10">
          {task.map((tasks, index) => {
            return (
              <li
                key={index}
                className="bg-gray-400 px-5 mb-5 py-2 rounded text-gray-800 flex justify-between items-center cursor-pointer hover:bg-gray-500 hover:text-white"
              >
                {`#${number++}. ${tasks}`}
                <button
                  type="button"
                  className="text-3xl"
                  onClick={() => deleteTask(index)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M7 21q-.825 0-1.412-.587T5 19V6q-.425 0-.712-.288T4 5q0-.425.288-.712T5 4h4q0-.425.288-.712T10 3h4q.425 0 .713.288T15 4h4q.425 0 .713.288T20 5q0 .425-.288.713T19 6v13q0 .825-.587 1.413T17 21zM17 6H7v13h10zm-7 11q.425 0 .713-.288T11 16V9q0-.425-.288-.712T10 8q-.425 0-.712.288T9 9v7q0 .425.288.713T10 17m4 0q.425 0 .713-.288T15 16V9q0-.425-.288-.712T14 8q-.425 0-.712.288T13 9v7q0 .425.288.713T14 17M7 6v13z"
                    ></path>
                  </svg>
                </button>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}

export default App;
