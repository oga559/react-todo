import { useState } from 'react';
import { ToDoList } from './ToDoList';
import { Form } from './Form';
import { listArray } from './component/listArray';

function App() {
  const [list, setList] = useState(listArray);

  // 入力値を配列に追加
  const addList = (text) => {
    setList([...list, text]);
  }

  const deleteList = (index) => {
    console.log(index);
    const delList = [...list];
    delList.splice(index,1);
    setList(delList);
  }

  return (
    <div>
      {/* FromにaddList()渡す */}
      <Form addList={ addList }/>
      {/* ToDoListに配列(list)を渡す */}
      <ToDoList list={ list } deleteList={ deleteList }/>
    </div>
  );
}

export default App;
