import { useState } from "react";

function CommentsList() {
    const [inputText, setInputText] = useState("");
    const [arrComments, setArrComments] = useState([]);

    function addComment() {
        if (!inputText.trim()) {
            return;
        }
        setArrComments([...arrComments, inputText]);
        setInputText("");
    }

    function DeleteComments(keyItem) {
        console.log("kkk");
        const arrFilterComments = arrComments.filter((number) => number !== keyItem);
        console.log(arrComments);
    }

    return (
        <div>
            <label htmlFor="input">Введите комментарий:</label>
            <input
                type="text"
                id="input"
                value={inputText}
                onChange={(event) => setInputText(event.target.value)}>
            </input>
            <button onClick={addComment}>Добавить комментарий</button>
            <ul>
                {arrComments.map((item) => (
                    <li key={arrComments.indexOf(item)}>{item}
                        <button data-id={arrComments.indexOf(item)} onClick={DeleteComments(item)}>Удалить</button></li>
                ))}
            </ul>
        </div >
    );
}

export default CommentsList;