

// es5做为类【继承】

this.x = x;
this.y = y;


Point.prototype.getPosition = function() {
  return '(' + this.x + ',' + this.y + ')';
}

var p1 = new Point(1,1)
console.log(p1)
console.log(p1.getPosition())

var p2 = new Point(2,2)
console.log(p2)
console.log(p2.getPosition())



// es6
class Point1 {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  getPosition() {
    return `${this.x} ${this.y}`
  }
}

var p3 = new Point1(1,1);
console.log(p3);
console.log(p3.getPosition())


