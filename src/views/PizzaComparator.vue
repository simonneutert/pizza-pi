<template>
  <div>
    <h2>1 große oder 2 kleine Pizzen?</h2>

    <pizza-comparison-result v-bind:pizzas="pizzas"></pizza-comparison-result>

    <br />

    <div v-bind:key="index" v-for="(pizza, index) in pizzas">
      <div v-if="index == 0">
        <h4>große Pizza</h4>
      </div>
      <div v-else>
        <h4>kleine Pizza</h4>
      </div>

      <pizza-calculator-form v-bind:pizza="pizza"></pizza-calculator-form>
      <br />
    </div>
  </div>
</template>

<script>
import Pizza from "@/models/Pizza.js";
import PizzaCalculatorForm from "@/components/PizzaCalculatorForm";
import PizzaComparisonResult from "@/components/PizzaComparisonResult";

export default {
  components: {
    PizzaCalculatorForm,
    PizzaComparisonResult
  },
  data: function() {
    return {
      pizzas: [new Pizza(34, 10), new Pizza(24, 5)],
      selectedMenu: "zum Pizzavergleicher"
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
