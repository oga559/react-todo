export const ToDoList = ({ list,deleteList }) => {
    return(
        <div>
            {
                list.map((list ,index) => {
                    return (
                        <div key={ index }>
                            <li>{ list }</li>
                            <button onClick={() => deleteList(index)}>削除</button>
                            <hr/>
                        </div>
                    )
                })
            }
        </div>
    )
}