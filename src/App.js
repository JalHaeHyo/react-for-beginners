import { createElement, useEffect, useState } from "react";

function App() {
    const [toDo, setToDo] = useState(""); // 현재 입력 중인 값
    const [toDos, setToDos] = useState([]); // 입력이 완료 된 값
    const onChange = (event) => setToDo(event.target.value);
    const onSubmit = (event) => {
        event.preventDefault(); // submit의 기본동작(새로고침) 방지
        if (toDo == "") {
            return;
        }
        setToDo("");
        setToDos((currentArray) => [toDo, ...currentArray]); // ...(배열) 로 배열의 요소를 가져온다
    };
    console.log(toDos);
    return (
        <div>
            <h1>My To Dos ({toDos.length})</h1>
            <form onSubmit={onSubmit}>
                <input
                    onChange={onChange} // 값이 입력 될때마다 반응(이벤트 리스너)
                    value={toDo}
                    type="text"
                    placeholder="Write your to do..."
                />
                <button>Add to Do</button>
            </form>
            <hr />
            <ul>
                {toDos.map((toDo, index) => (
                    <li key={index}>{toDo}</li> // (배열).map 으로 배열의 요소별로 함수를 실행
                ))}
            </ul>
        </div>
    );
}

export default App;
