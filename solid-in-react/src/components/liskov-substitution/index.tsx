interface Shape {
  getArea: () => number;
}

class Rectangle implements Shape {
  constructor(private width: number, private height: number) {}

  getArea() {
    return this.width * this.height;
  }
}

class Circle implements Shape {
  constructor(private radius: number) {}

  getArea() {
    return Math.PI * this.radius * this.radius;
  }
}

function printArea(shape: Shape) {
  console.log("Area:", shape.getArea());
}

const rect = new Rectangle(10, 5);
const circ = new Circle(7);

printArea(rect); // Works
printArea(circ); // Works

const LiskovSubstitution = () => {
  return <>CHECK THE CODE!!!!!!!!</>;
};

export default LiskovSubstitution;
