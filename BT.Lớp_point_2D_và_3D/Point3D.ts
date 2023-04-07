import {Point2D} from "./Point2D";

export class Point3D extends Point2D {
    private _z: number;

    constructor(x: number, y: number, z: number) {
        super(x, y);
        this._z = z;
    }


    getZ(): number {
        return this._z;
    }

    setZ(value: number) {
        this._z = value;
    }

    getXYZ(): object {
        return {x_position: super.getX(), y_position: super.getY(), z_position: this._z};
    }
    setXYZ(x: number, y: number, z: number) {
        super.setXY(x, y);
        this._z = z;
    }
}