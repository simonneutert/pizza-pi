<template>
  <div class="card">
    <div class="card-body">
      <h4>Result</h4>
      {{ priceDiff() }}
    </div>
  </div>
</template>

<script>
export default {
  name: "pizza-comparison-result",
  props: ["pizzas"],
  methods: {
    whichPizzas: function() {
      let pizzas = this.pizzas;
      let largePizza = pizzas[0];
      let smallPizza = pizzas[1];
      let largePizzaArea = largePizza.area();
      let smallPizzaArea = smallPizza.area();
      if (largePizzaArea >= 2 * smallPizzaArea) {
        return largePizza;
      } else {
        return smallPizza;
      }
    },
    priceDiff: function() {
      let pizzas = this.pizzas;
      let largePizza = pizzas[0];
      let smallPizza = pizzas[1];
      if (this.whichPizzas() == largePizza) {
        return this.largePizzaChoice(smallPizza, largePizza);
      } else {
        return this.smallPizzeChoice(smallPizza, largePizza);
      }
    },
    percDiff: function(highVal, lowVal) {
      return parseInt(((highVal - lowVal) / lowVal) * 100);
    },
    largePizzaChoice: function(smallPizza, largePizza) {
      let priceDiff = largePizza.price - 2 * smallPizza.price;
      let percDiff = this.percDiff(largePizza.area(), 2 * smallPizza.area());
      if (priceDiff < 0) {
        return this.buildResultString(
          "large",
          smallPizza,
          largePizza,
          priceDiff,
          percDiff,
          "less"
        );
      } else {
        return this.buildResultString(
          "large",
          smallPizza,
          largePizza,
          priceDiff,
          percDiff,
          "more"
        );
      }
    },
    smallPizzeChoice: function(smallPizza, largePizza) {
      let priceDiff = 2 * smallPizza.price - largePizza.price;
      let percDiff = this.percDiff(2 * smallPizza.area(), largePizza.area());
      if (priceDiff < 0) {
        return this.buildResultString(
          "small",
          smallPizza,
          largePizza,
          priceDiff,
          percDiff,
          "less"
        );
      } else {
        return this.buildResultString(
          "small",
          smallPizza,
          largePizza,
          priceDiff,
          percDiff,
          "more"
        );
      }
    },
    buildResultString: function(
      pizzaSize,
      smallPizza,
      largePizza,
      priceDiff,
      percDiff,
      diffString
    ) {
      let str = "";
      if (pizzaSize == "small") {
        str += "2 small pizzas cost ";
      } else {
        str += "1 large pizza costs ";
      }
      str += Math.abs(priceDiff);
      str += " € ";
      str += diffString;
      str += " and you get ";
      str += percDiff;
      str += " % more.";
      return str;
    }
  }
};
</script>
