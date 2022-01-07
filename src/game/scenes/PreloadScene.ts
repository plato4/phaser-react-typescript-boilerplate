import "phaser";
export class PreloadScene extends Phaser.Scene {
	constructor() {
		super("PreloadScene");
	}

	public init(): void {}
	public preload(): void {
		this.load.image("logo", "assets/Phaser-Logo-Small.png");
		this.load.on(Phaser.Loader.Events.COMPLETE, () => this.scene.start("MenuScene"));
	}
	public create(): void {}
	public update(time: Number, delta: Number): void {}
}
