import Component from "./Component";

export default class Toggle extends Component {
	public enabled = true;
	public colorON = 0xff0000;
	public colorOFF = 0xffffff;
	public onUpdate = (): void => {
		if (this.gameObject instanceof Phaser.GameObjects.Sprite) {
			this.gameObject.setTint(this.enabled ? this.colorOFF : this.colorON);
		}
	};
}
