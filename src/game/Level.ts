export interface ISpriteAddedCallback {
	(x: number, y: number, cell: string, level: Level, go?: Phaser.GameObjects.Sprite): void;
}

export class Level {
	private _mappings: Map<string, string> = new Map();
	public get mappings(): Map<string, string> {
		return this._mappings;
	}

	public data: string[] = [];

	private _sprites: Map<Phaser.Math.Vector2, Phaser.GameObjects.Sprite> = new Map();
	public get sprites(): Map<Phaser.Math.Vector2, Phaser.GameObjects.Sprite> {
		return this._sprites;
	}

	private _offset: Phaser.Math.Vector2 = Phaser.Math.Vector2.ZERO;
	public get offset(): Phaser.Math.Vector2 {
		return this._offset;
	}
	public set offset(value: Phaser.Math.Vector2) {
		this._offset = value;
	}

	private _padding: number = 0;
	public get padding(): number {
		return this._padding;
	}
	public set padding(value: number) {
		this._padding = value;
	}

	private _cellSize: number = 16;
	public get cellSize(): number {
		return this._cellSize;
	}
	public set cellSize(value: number) {
		this._cellSize = value;
	}

	public addMapping(char: string, image: string): void {
		this.mappings.set(char[0], image);
	}

	public generate(scene: Phaser.Scene, callback?: ISpriteAddedCallback): void {
		this.sprites.forEach((s) => s.destroy());
		this.data.forEach((row, x) => row.split("").forEach((cell, y) => this.addSprite(scene, x, y, cell, callback)));
	}

	private addSprite(scene: Phaser.Scene, x: number, y: number, cell: string, callback?: ISpriteAddedCallback) {
		var image = this._mappings.get(cell);

		if (!image) {
			if (callback) callback(x, y, cell, this, undefined);
			return;
		}

		var go = new Phaser.GameObjects.Sprite(
			scene,
			y * this.cellSize + this.cellSize * 0.5 + y * this.padding + this.offset.x,
			x * this.cellSize + this.cellSize * 0.5 + x * this.padding + this.offset.y,
			image
		);
		scene.add.existing(go);
		this.sprites.set(new Phaser.Math.Vector2(x, y), go);
		if (callback) callback(x, y, cell, this, go);
	}
}
