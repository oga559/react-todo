import { useState,useEffect } from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background-color:rgba(0,0,0,0.5);
    display: flex;
    align-items: center;
    justify-content: center;
`

const Container = styled.div`
    z-index: 2;
    width: 30%;
    padding: 40px;
    text-align: center;
    background: #fff;
`

const Button = styled.button`
    margin: 2px 5px 0px 5px;
	padding: 0.8em;
	color: white;
	background: dodgerblue;
    width: 80px;
	border: 1px solid white;
    cursor: pointer;
`

export const Modal = ({ show,modalClose,editList,number,updateList }) => {
    const [update,setUpdate] = useState('');

    useEffect(() => {
        setUpdate(editList);
    },[editList]);

    //更新処理を実行
    const updateSubmit = (e) =>{
        //送信してもリロードが走らないようにする
        e.preventDefault();
        //Appの関数で、配列を更新する
        updateList(number,update);
        //Appの関数で、モーダルを閉じる
        modalClose();
    }

    if (show) {
    return (
        <Overlay>
            <Container>
                <form onSubmit={ updateSubmit }>
                    <input type="text" value={ update } onChange={(e) => setUpdate(e.target.value)} required/>
                    <div>
                        <Button>Update</Button>
                        <Button onClick={modalClose}>Close</Button>
                    </div>
                </form>
            </Container>
        </Overlay>
                )
            } else {
            return null;}
}