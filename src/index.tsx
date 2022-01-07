import React from "react";
import ReactDOM from "react-dom";
import { App } from "./components/app";
import { createGame } from "./game";

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);

// Game must come after react render as it hooks into the <Game> component
createGame();
