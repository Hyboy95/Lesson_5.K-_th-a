
export class Shape {
    private _color: string;
    private _filled: boolean;
	constructor(_color: string, _filled: boolean) {
		this._color = _color;
		this._filled = _filled;
	}

	getColor(): string {
		return this._color;
	}

	setColor(value: string) {
		this._color = value;
	}

	getFilled(): boolean {
		return this._filled;
	}

	setFilled(value: boolean) {
		this._filled = value;
	}

	toString() {
        return `A shape with color of ${this.getColor()} and ${this.getFilled() ? "filled" : "not filled"}`
    }
}
