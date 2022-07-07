import React, { useState, useEffect } from "react";

const App = () => {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/todo/")
      .then((res) => res.json())
      .then((data) => setTodoList(data));
  }, []);

  const renderItems = () => {
    const uncompleteItems = todoList.filter((item) => item.completed === false);
    return uncompleteItems.map((item, index) => (
      <ul
        key={`todo-list-item-${index}`}
        className="list-group list-group-flush"
      >
        <div>
          <h1>{item.title}</h1>
          <span>{item.description}</span>
        </div>
      </ul>
    ));
  };

  return (
    <main className="content">
      <div className="row">
        <h1>Tasks To Do: </h1>
        <div className="col-md-6 col-sm-10 mx-auto p-0">
          <div className="card p-3">{renderItems()}</div>
        </div>
      </div>
    </main>
  );
};

export default App;
