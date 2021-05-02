import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    text-align: center;
    margin: 0 auto;
    width: 30%;
`

const Button = styled.button`
    margin: 10px 5px 0px 10px;
	padding: 0.8em;
	color: white;
	background: dodgerblue;
    width: 80px;
	border:1px solid white;
    cursor: pointer;
`

export const Form = ({ addList }) => {
    const [text, setText] = useState('');

    // AppのaddListを発火して配列に追加
    const formSubmit = (e) =>{
        //送信してもページ遷移が起きないようにする
        e.preventDefault();
        //AppのaddList()を反映
        addList(text);
        //入力値を空
        setText('');
    }

    return (
        <Container>
            <h1>ToDo Application</h1>
            <form onSubmit={ formSubmit }>
                <div>
                     {/* ReactではvalueやonChangeを使ってinputの値を反映  */}
                    <input type="text" value={ text } onChange={(e) => setText(e.target.value)} required placeholder="To Do Add"/>
                </div>
                <div>
                    <Button>Add</Button>
                </div>
                <hr/>
            </form>
        </Container>
    )
}