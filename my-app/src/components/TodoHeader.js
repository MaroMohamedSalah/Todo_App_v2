import sunIcon from "../image/icon-sun.svg";
import moonIcon from "../image/icon-moon.svg";
import "./TodoHeader.css";
const TodoHeader = () => {
	const mode = sunIcon;
	return (
		<div className="todoHeader">
			<div className="header mb-5 d-flex justify-content-between align-items-center">
				<div className="title">
					<h1>TODO</h1>
				</div>
				<div className="colorMode">
					<img src={mode} alt="" />
				</div>
			</div>
		</div>
	);
};

export default TodoHeader;
