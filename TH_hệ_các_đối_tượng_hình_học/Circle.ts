import {Shape} from "./Shape";

export  class Circle extends  Shape {
    private _radius: number;

    constructor(radius: number, color: string, filled: boolean) {
        super(color, filled);
        this._radius = radius;
    }

    getRadius(): number {
        return this._radius;
    }

    setRadius(value: number) {
        this._radius = value;
    }

    getArea() {
        return this._radius * this._radius * Math.PI;
    }

    getPerimeter() {
        return 2 * this._radius * Math.PI;
    }

    toString(): string {
        return `A Circle with radius = ${this._radius}, which is a subclass of ${super.toString()}`
    }
}