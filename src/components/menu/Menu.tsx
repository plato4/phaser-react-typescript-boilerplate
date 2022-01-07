import { Button, Container, Grid } from "@mui/material";
import React from "react";
import { Game } from "../../game";
import "./menu.css";
import { GameScene } from "../../game/scenes";

export const Menu: React.FC = () => {
	return (
		<Grid id="menu" sx={{ position: "absolute", top: "0%", height: "100%" }} container>
			<Grid item xs={8}></Grid>
			<Grid item xs={4}>
				<Container
					id="menu"
					sx={{
						margin: "10%",
						marginLeft: "0%",
						width: "90%",
						height: "90%",
						bgcolor: "primary.dark",
						border: "3px dotted",
					}}
				>
					<h1 id="header">Example react/html menu</h1>
					<Button
						variant="contained"
						onClick={() => {
							var scene = Game.instance?.scene.getScene("GameScene") as GameScene;
							if (Game.instance?.scene.isActive(scene)) {
								if (scene.toggle) scene.toggle.enabled = !scene.toggle.enabled;
							}
						}}
					>
						CLICK ME!
					</Button>
				</Container>
			</Grid>
		</Grid>
	);
};
