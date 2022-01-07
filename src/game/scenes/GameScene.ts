import "phaser";
import Toggle from "../components/Toggle";
import Wiggle from "../components/Wiggle";

export class GameScene extends Phaser.Scene {
	public toggle?: Toggle;
	constructor() {
		super("GameScene");
	}

	public init(): void {}
	public preload(): void {}
	public create(): void {
		let logo = new Phaser.GameObjects.Sprite(this, this.renderer.width / 3, this.renderer.height / 3, "logo");
		this.add.existing(logo);
		new Wiggle(logo, "Wiggle");
		this.toggle = new Toggle(logo, "Toggle");
	}
	public update(time: number, delta: number): void {}
}
