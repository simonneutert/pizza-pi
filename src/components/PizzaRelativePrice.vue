<template>
  <div class="card">
    <div class="card-body">
      <h4>Result</h4>
      <div
        class=""
        v-if="this.pizza.relativePriceSquareMeter() != 'uncalculable'"
      >
        <p>
          <strong>relative price:</strong>
          {{ this.pizza.relativePriceSquareMeter() }} €/m²
        </p>
        <p>
          <strong>square centimeter delivered:</strong>
          {{ parseInt(this.pizza.area()) + " cm²" }}
        </p>
      </div>
      <div class="" v-else>
        <small>
          Please check your inputs, please.
        </small>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "pizza-relative-price",
  props: ["pizza"]
};
</script>
