
export class Point2D {
    private _x: number;
    private _y: number;

    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
    }


    getX(): number {
        return this._x;
    }

    setX(value: number) {
        this._x = value;
    }

    getY(): number {
        return this._y;
    }

    setY(value: number) {
        this._y = value;
    }
    getXY(): object {
        return {x_position: this._x, y_position: this._y};
    }
    setXY(x: number, y: number) {
        this._x = x;
        this._y = y;
    }
}
