import { useState } from 'react';

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
        <div>
            <h2>ToDOアプリ</h2>
            <form onSubmit={ formSubmit }>
                <div>
                     {/* ReactではvalueやonChangeを使ってinputの値を反映  */}
                    <input type="text" value={ text } onChange={(e) => setText(e.target.value)} required/>
                </div>
                <div>
                    <button>登録</button>
                </div>
                <hr/>
            </form>
        </div>
    )
}