export default class Pizza {
  constructor(diameter = 30, price = 8) {
    this.diameter = diameter;
    this.price = price;
    this.relativePrice = this.relativePriceSquareMeter();
  }
  area() {
    return Math.pow(this.diameter / 2, 2) * 3.1415;
  }
  relativePriceSquareMeter() {
    let area = this.area();
    let pizzaPrice = this.price;
    if (
      isNaN(area) ||
      area == 0 ||
      area === undefined ||
      pizzaPrice == "" ||
      isNaN(pizzaPrice)
    ) {
      return "unberechenbare";
    } else {
      let factor = 1 / (area / 10000);
      let result = (factor * this.price).toFixed(2);
      this.relativePrice = result;
      return result;
    }
  }
}
