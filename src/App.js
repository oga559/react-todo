import { useState } from 'react';
import { ToDoList } from './ToDoList';
import { Form } from './Form';
import { listArray } from './component/listArray';
import { Modal } from './Modal';

function App() {
  const [list, setList] = useState(listArray);
  const [show, setShow] = useState(false);
  const [number, setNumber] = useState('');
  const [editList, setEditList] = useState('');

  // 追加処理
  const addList = (text) => {
    setList([...list, text]);
  }

  //削除処理
  const deleteList = (index) => {
    console.log(index);
    const delList = [...list];
    delList.splice(index,1);
    setList(delList);
  }

  //更新処理
  const updateList = (index,update) => {
    //キーで指定して配列の値を更新
    list[index] = update;
    //値を変更
    setList(list);
  }

  //モーダル表示
  const modalShow = (index) => {
    //モーダル表示にための値変更
    setShow(true);
    //配列のキーを取得
    setNumber(index);
    setEditList(list[index]);
  }

  //モーダルを閉じる
  const modalClose = () => {
    setShow(false);
  }

  return (
    <div>
      {/* FromにaddList()渡す */}
      <Form addList={ addList }/>
      {/* ToDoListに配列(list)を渡す */}
      <ToDoList list={ list } deleteList={ deleteList } modalShow={ modalShow }/>
      <Modal show={ show } editList={ editList } modalClose={ modalClose } number={ number } updateList={ updateList }/>
    </div>
  );
}

export default App;
