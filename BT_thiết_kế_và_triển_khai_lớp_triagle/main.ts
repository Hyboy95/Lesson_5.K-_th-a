import {Triangle} from "./Triangle";
import {Shape} from "./Shape";

let shape: Shape = new Shape('hinh_1','blue');
let triangle: Triangle = new Triangle('tam giac 1', 'red', 3,3,3);
console.log(shape);
console.log(shape.getName());
console.log(shape.getColor());
console.log(triangle);
console.log(triangle.getArea());
console.log(triangle.getPerimeter());