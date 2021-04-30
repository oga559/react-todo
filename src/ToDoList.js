export const ToDoList = ({ list,deleteList,modalShow }) => {
    return(
        <div>
            {
                list.map((list ,index) => {
                    return (
                        <div key={ index }>
                            <li>{ list }</li>
                            <button onClick={() => modalShow(index)}>更新</button>
                            <button onClick={() => deleteList(index)}>削除</button>
                            <hr/>
                        </div>
                        )
                })
            }
        </div>
    )
}