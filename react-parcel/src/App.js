import React, { useState, useEffect } from "react";
import { listenEvent } from "@mf/utils";

const App = () => {
  const [tasks, updateTasks] = useState([]);

  useEffect(() => {
    listenEvent("@mf/react-route/todo/add-task", (event) => {
      updateTasks((prevState) => [...prevState, event.detail]);
    });
  }, []);

  return (
    <>
      <h1>@mf/react-parcel</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Task</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.describe}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default App;
