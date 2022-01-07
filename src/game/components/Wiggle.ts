import Component from "./Component";

export default class Wiggle extends Component {
	public intensity = 2;
	public onUpdate = (): void => {
		if (this.gameObject instanceof Phaser.GameObjects.Sprite) {
			this.gameObject.x += Math.sin(this.gameObject.scene.game.getTime() * 0.0025) * this.intensity;
			this.gameObject.y += Math.sin(this.gameObject.scene.game.getTime() * 0.001) * this.intensity;
		}
	};
}
