import "./TodoInput.css";
import { useState } from "react";
const TodoInput = () => {
	const [show, setShow] = useState(false);
	return (
		<div className="todoInput position-relative" id="todo-in">
			<input
				type="text"
				placeholder="Create a new todo.."
				className="w-100 ps-5 py-4 rounded"
				onChange={(e) =>
					e.target.value.length !== 0 ? setShow(true) : setShow(false)
				}
			/>
			{show === true && (
				<button className="add-btn position-absolute px-3 py-2">ADD</button>
			)}
		</div>
	);
};
export default TodoInput;
