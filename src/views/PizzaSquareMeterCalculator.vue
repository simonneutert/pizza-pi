<template>
  <div>
    <h2>Compare pizzas by price for square meter.</h2>

    <br />
    <pizza-relative-price v-bind:pizza="pizzas[0]"></pizza-relative-price>
    <br />
    <pizza-calculator-form v-bind:pizza="pizzas[0]"></pizza-calculator-form>
    <br />
  </div>
</template>

<script>
import Pizza from "@/models/Pizza";
import PizzaRelativePrice from "@/components/PizzaRelativePrice.vue";
import PizzaCalculatorForm from "@/components/PizzaCalculatorForm.vue";

export default {
  components: {
    PizzaRelativePrice,
    PizzaCalculatorForm
  },
  data: function() {
    return {
      pizzas: [new Pizza(34, 10), new Pizza(24, 5)]
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
