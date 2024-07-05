
// import './App.css';
import { useState } from 'react';
import Form from './components/Form';
import Logo from './components/Logo';
import PackingList from './components/PackingList';
import Stats from './components/Stats';

function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }
  function handleDeleteItems(id) {
    setItems((item) => item.filter((item) => item.id !== id))
  }
  function handleToggelItems(id) {
    setItems((item) => item.map((item) => item.id === id ? { ...item, packed: !item.packed } : item))
  }
  function handelClearList() {
    let clearr = window.confirm('Are you shure you want to delete all items')
    if (clearr)
      clearr = setItems([])
  }
  return (
    <div>
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} OnDeleteItem={handleDeleteItems} onToggelItem={handleToggelItems} onClear={handelClearList} />

      <Stats items={items} />
    </div>
  );
}

export default App;
