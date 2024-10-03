import { useState } from "react";

export function CreateTodo() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  return (
    <div>
      <input
        type="text"
        style={{
          margin: 10,
          padding: 10,
        }}
        placeholder="title" onChange={function (e) {
          const value = e.target.value;
          setTitle(e.target.value)
        }}
      ></input>{" "}
      <br />
      <input
        type="text"
        style={{
          margin: 10,
          padding: 10,
        }}
        placeholder="description" onChange={function (e) {
          const value = e.target.value;
          setDescription(e.target.value)
        }}
      ></input>
      <br />
      <button
        style={{
          margin: 10,
          padding: 10,
        }} onClick={() => {
          fetch("http://localhost:3000/todos", {
            method: "POST",
            body: JSON.stringify({
              title: title,
              description: description
            }),
            headers: {
              "content-type": "application/json"
            }
          }).then(async function (res) {
            const json = await res.json();
            alert("Todo added");
          })
        }}
      >
        Add a todo
      </button>
    </div >
  );
}

//export infront of a function is one of the modern ways to do an export operation
//this filename should start with a capital letter and end with jsx
