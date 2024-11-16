import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
	const [count, setCount] = useState(0);
	const [color, setColor] = useState("white");
	const [showPopup, setShowPopup] = useState(false);
	const [popupMessage, setPopupMessage] = useState("");
	const [countStatus, setCountStatus] = useState("increment");

	const handleIncrement = () => {
		if (count >= 100) {
			setCount(count + 100);
		} else if (count >= 10) {
			setCount(count + 10);
		} else {
			setCount(count + 1);
		}
	};

	const handleDecrement = () => {
		if (count > 100) {
			setCount(count - 100);
		} else if (count > 10) {
			setCount(count - 10);
		} else {
			setCount(count - 1);
		}
	};

	const triggerPopup = (message) => {
		setShowPopup(true);
		setPopupMessage(message);
		setTimeout(() => setShowPopup(false), 3000);
	};

	const changeColor = () => {
		setColor(count === 10 ? "green" : count === 100 ? "orange" : "red");
	};

	useEffect(() => {
		if (count === 10 || count === 100 || count === 1000) {
			triggerPopup("Yes, your count reached: " + count);
			changeColor();
		}

		if (count == 1000) {
			setCountStatus("decrement");
		} else if (count == 0) {
			setCountStatus("increment");
		}
	}, [count]);

	useEffect(() => {
		triggerPopup("Hello there, welcome to my App");
	}, []);

	return (
		<div
			style={{
				backgroundColor: color,
				height: "100vh",
				textAlign: "center",
				paddingTop: "30px",
			}}
		>
			<h1>Count: {count}</h1>
			<div style={{ margin: "20px" }}>
				<button onClick={handleIncrement} disabled={countStatus != "increment"} style={{ padding: '10px' }}>
					Increment
				</button>
				<button onClick={handleDecrement} disabled={countStatus != "decrement"} style={{ margin:'10px', padding: '10px' }}>
					Decrement
				</button>
			</div>
			{showPopup && <div className="pop-up">{popupMessage}</div>}
		</div>
	);
};

export default App;
