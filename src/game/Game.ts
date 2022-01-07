import "phaser";
import { PreloadScene, MenuScene, GameScene } from "./scenes";
export class Game {
	public static instance: Phaser.Game;
	public config = {
		type: Phaser.AUTO,
		width: 1920,
		height: 1080,
		backgroundColor: "#000000",
		pixelArt: false,
		scale: {
			mode: Phaser.Scale.ScaleModes.FIT,
			autoCenter: Phaser.Scale.Center.CENTER_BOTH,
		},
	};
	constructor(gameScenes: typeof Phaser.Scene[], parent = "game") {
		(this.config as any).scene = gameScenes;
		(this.config as any).parent = "game";
		Game.instance = new Phaser.Game(this.config);
	}
}

export const createGame = (): Game => {
	var s = [PreloadScene, MenuScene, GameScene];
	return new Game(s);
};
