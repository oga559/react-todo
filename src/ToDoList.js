import styled from 'styled-components';

const List = styled.div`
    text-align: center;
    width: 30%;
    margin: 0 auto;
`

const Button = styled.button`
	padding: 10px;
    display: block;
    margin: 2px auto 10px auto;
	color: white;
    width: 80px;
	background: dodgerblue;
	border:1px solid white;
    cursor: pointer;
`
export const ToDoList = ({ list,deleteList,modalShow }) => {
    return(
        <div>
            {
                list.map((list ,index) => {
                    return (
                        <List key={ index }>
                            { list }
                            <Button onClick={() => modalShow(index)}>Update</Button>
                            <Button onClick={() => deleteList(index)}>Delete</Button>
                            <hr/>
                        </List>
                        )
                })
            }
        </div>
    )
}