import "./app.css";
import { Game } from "../game";
import { Menu } from "../menu";

export const App: React.FC = () => {
	return (
		<div>
			<Game />
			<Menu />
		</div>
	);
};
