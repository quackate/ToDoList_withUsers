import React, { useState, useEffect } from "react";
//import { Context } from "../store/appContext";
import "../../styles/list.css";

export const List = () => {
	const [newTodo, setNewTodo] = useState("");
	const [list, setList] = useState(["Make the bed", "Wash my hands", "Brush my teeth"]);

	//Trying to use the get fetch 

	/*useEffect(() => {
	}, [])*/

	//Finish of the get fetch code

	const keyPress = (e) => {
		if (e.key === "Enter") {
			setList(list.concat(newTodo))
			setNewTodo("");

			//add fetch code below

			fetch('https://jsonplaceholder.typicode.com/todos', {
				method: 'POST',
				body: JSON.stringify(newTodo),
				headers: {
					'Content-Type': 'application/json'
				}
			})
				.then(res => {
					if (!res.ok) throw Error(res.statusText);
					return res.json();
				})
				.then(response => console.log('Success:', response))
				.catch(error => console.error(error));

			//end of fetch code
		}

	};

	const deleteItem = (i) => {
		setList(list.filter((l, currentIndex) => i != currentIndex));

		//fetch code below

		fetch(`https://jsonplaceholder.typicode.com/todos/${i}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json'
			}
		})
			.then(res => {
				if (!res.ok) throw Error(res.statusText);
				return res.json();
			})
			.then(response => console.log('Success:', response))
			.catch(error => console.error(error));

		//fetch code above
	};

	const clearAll = () => {
		setList([]);

		//fetch code below

		fetch(`https://jsonplaceholder.typicode.com/todos`, {
			method: 'PUT',
			body: JSON.stringify([]),
			headers: {
				'Content-Type': 'application/json'
			}
		})
			.then(res => {
				if (!res.ok) throw Error(res.statusText);
				return res.json();
			})
			.then(response => console.log('Success:', response))
			.catch(error => console.error(error));

		//fetch code above

	}

	return (
		<div className="container main-list-wrapper">
			<h1 className="todo_title">To Do List &#x2705;&#x1F41D;</h1>
			<div className="listWrapper">
				<ul>
					<li className="item list_input px-5">
						<input type="text" className="todo_input" onChange={e => setNewTodo(e.target.value)} value={newTodo} onKeyDown={keyPress} id="add-todo" placeholder="What needs to be done?" />
					</li>

					{list.map((l, i) => (
						<li className=" item px-5 d-flex">{l}
							<div className="trash">
								<i className="delete_icon far fa-trash-alt" onClick={() => { deleteItem(i) }}></i>
							</div>
						</li>
					))}

					<li className="px-4 tasks-left">
						{list.length} {list.length === 1 ? "task" : "tasks"}{list.length === 0 ? ", add a task!" : ""}
					</li>
				</ul>
			</div>
			<button type="button" className="clearlist_btn" onClick={clearAll}>Clear List</button>
		</div>
	);
};