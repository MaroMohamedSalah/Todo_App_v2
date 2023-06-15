import "./Todo.css";
import TodoHeader from "./TodoHeader";
import TodoInput from "./TodoInput";
const Todo = () => {
	return (
		<div className="todoForm">
			<TodoHeader />
			<TodoInput />
		</div>
	);
};

export default Todo;
