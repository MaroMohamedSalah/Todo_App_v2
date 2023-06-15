import logo from "./logo.svg";
import "./App.css";
import IntroBg from "./components/IntroBg";
import Todo from "./components/Todo";

function App() {
	return (
		<div className="App">
			<div className="d-flex justify-content-center align-items-center w-100 min-vh-100">
				<IntroBg />
				<Todo />
			</div>
		</div>
	);
}

export default App;
