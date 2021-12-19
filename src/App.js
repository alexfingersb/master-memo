import { useMemo, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  const increment = () => {
    setCount((c) => c + 1);
  }

  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
  }

  

  return (
    <>
      <h1>React - Master useMemo</h1>

      <div>

        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>
        })}
        <button onClick={addTodo}>Add Todo</button>
      </div>
      
      <hr />

        Count: {count}
        <button onClick={increment}>+</button>
        
        <h2>Expensive Calculation</h2>
        {calculation}
    </>
  );
}

const expensiveCalculation = (num) => {
  console.log("Calculating...");
  for (let i = 0; i < 1000000000; i++) {
    num += i;
  }
  console.log('Finish');
  return num;
}

export default App;
