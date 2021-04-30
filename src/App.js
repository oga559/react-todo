import { useState } from 'react';
import { ToDoList } from './ToDoList';
import { Form } from './Form';
import { listArray } from './component/listArray';
import { Modal } from './Modal';

function App() {
  const [list, setList] = useState(listArray);
  const [show, setShow] = useState(false);
  const [number, setNumber] = useState('');

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

  const updateList = (index,update) => {
    console.log(index);
    console.log(update);
    list[index] = update;
    setList(list);
  }

  const modalShow = (index) => {
    setShow(true);
    setNumber(index);
  }

  const modalClose = () => {
    setShow(false);
  }

  return (
    <div>
      {/* FromにaddList()渡す */}
      <Form addList={ addList }/>
      {/* ToDoListに配列(list)を渡す */}
      <ToDoList list={ list } deleteList={ deleteList } modalShow={ modalShow }/>
      <Modal show={ show } list={ list } modalClose={ modalClose } number={ number } updateList={ updateList }/>
    </div>
  );
}

export default App;
