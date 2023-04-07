import {Point2D} from "./Point2D";
import {Point3D} from "./Point3D";

let point2D: Point2D = new Point2D(3,3);
let point3D: Point3D = new Point3D(2,2,2);
// console.log(point2D);
// console.log(point2D.getXY());
// point2D.setXY(1,1);
// console.log(point2D);
console.log(point3D);
console.log(point3D.getXYZ());
point3D.setXYZ(1,2,3);
console.log(point3D);
