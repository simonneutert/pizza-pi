import Pizza from "./Pizza";

export default class SquaredPizza extends Pizza {
  constructor(x = 20, y = 20, price = 10) {
    super(price);
    this.x = x;
    this.y = y;
    this.relativePrice = this.relativePriceSquareMeter();
  }
  area() {
    let xFloat = parseFloat(this.x);
    let yFloat = parseFloat(this.y);
    return xFloat * yFloat;
  }
}
