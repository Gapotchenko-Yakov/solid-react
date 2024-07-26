import React from "react";


const Todos Page
=
() => {
=
useState([]);
const [todos, setTodos]
useEffect(() => {
async function getTodos () {
const {data} = await axios.get("https://someapi/todos/"); setTodos (firstTen);
getTodos();
};
}, []);
return (
<div>
<h1>My Todos:</h1>
<ul>
{todos.map(todo => (
<li key={todo.id}>{`ID: ${todo.id}, Title: ${todo.title}``}</li>
))}
</ul>
</div>