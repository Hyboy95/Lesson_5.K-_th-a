import {Circle} from "./Circle";

export class Cylinder extends Circle {
    private _height: number;
    constructor(radius: number, color: string, height: number) {
        super(radius, color);
        this._height = height;
    }

    getHeight(): number {
        return this._height;
    }

    setHeight(value: number) {
        this._height = value;
    }
    getArea(): number {
        return 2 * super.getArea() + super.getPerimeter() * this._height;
    }

    // getPerimeter(): number {
    //     return Infinity;
    // }

    getVolume(): number {
        return super.getArea() * this._height;
    }
}