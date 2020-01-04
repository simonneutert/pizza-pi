<template>
  <div>
    <h2>Compare pizzas by price for square meter of a squared pizza.</h2>

    <br />
    <pizza-relative-price v-bind:pizza="pizzas[0]"></pizza-relative-price>
    <br />
    <pizza-calculator-form-squared v-bind:pizza="pizzas[0]">
    </pizza-calculator-form-squared>
    <br />
  </div>
</template>

<script>
import SquaredPizza from "@/models/SquaredPizza";
import PizzaRelativePrice from "@/components/PizzaRelativePrice.vue";
import PizzaCalculatorFormSquared from "@/components/PizzaCalculatorFormSquared.vue";

export default {
  components: {
    PizzaRelativePrice,
    PizzaCalculatorFormSquared
  },
  data: function() {
    return {
      pizzas: [new SquaredPizza(40, 60, 15), new SquaredPizza(30, 30, 10)]
    };
  },
  methods: {
    comparePizzas: function() {
      return this.pizzas.sort(function(a, b) {
        return a.relativePrice - b.relativePrice;
      });
    }
  }
};
</script>
