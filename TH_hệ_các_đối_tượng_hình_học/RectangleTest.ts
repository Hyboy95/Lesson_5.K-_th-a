import {Rectangle} from "./Rectangle";

let rectangle: Rectangle = new Rectangle('red',false, 12, 20);
console.log(rectangle);
console.log(rectangle.getArea());
console.log(rectangle.getPerimeter());
console.log(rectangle.toString());