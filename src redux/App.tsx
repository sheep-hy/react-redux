import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';
import { RootState } from './store'


function App() {
  // 取出数据做渲染
  // const todos = useSelector<{ todos: [] }>((state) => state.todos)
  // const todos = useSelector((state: { todos: { id: number, name: string, isDone: boolean }[] }) => state.todos)
  const todos = useSelector((state: RootState) => state.todos)
  // const goods = useSelector((state: { goods: { id: number, name: string, price: number }[] }) => state.goods)
  // console.log(goods, '---goods')
  return (
    <div className="App">
      {/* react
      todos1111111
      {
        todos.map((item) => (<p key={item.id}>{item.name}</p>))
      } */}
    </div>
  );
}

export default App;
