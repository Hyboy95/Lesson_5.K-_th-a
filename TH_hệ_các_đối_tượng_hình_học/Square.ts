import {Rectangle} from "./Rectangle";

export class Square extends Rectangle {

    constructor(color: string, filled: boolean, side: number) {
        super(color, filled, side, side);
    }
    getSide() {
        return this.getWidth();
    }
    setSide(side: number) {
        this.setWidth(side);
        this.setHeight(side);
    }
    setWidth(width: number) {
        this.setSide(width);
    }
    setHeight(height: number) {
        this.setSide(height);
    }

    toString(): string {
        return `A square with side = ${this.getSide()}, which is a subclass of ${super.toString()}`;
    }
}