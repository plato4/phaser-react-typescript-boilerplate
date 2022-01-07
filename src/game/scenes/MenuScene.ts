import "phaser";
export class MenuScene extends Phaser.Scene {
	constructor() {
		super("MenuScene");
	}

	public init(): void {}
	public preload(): void {}
	public create(): void {
		this.scene.start("GameScene");
	}
	public update(time: Number, delta: Number): void {}
}
