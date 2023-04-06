import {Shape} from "./Shape";

export class Rectangle extends Shape {
    private _width: number;
    private _height: number;

    constructor(color: string, filled: boolean, width: number, height: number) {
        super(color, filled);
        this._width = width;
        this._height = height;
    }

    getWidth(): number {
        return this._width;
    }

    setWidth(value: number) {
        this._width = value;
    }

    getHeight(): number {
        return this._height;
    }

    setHeight(value: number) {
        this._height = value;
    }

    getArea() {
        return this._width * this._height;
    }

    getPerimeter() {
        return 2 * (this._width + this._height);
    }
    toString(): string {
        return `A Rectangle with ${this._width} and length ${this._height}, which is a subclass of ${super.toString()}`;
    }
}
