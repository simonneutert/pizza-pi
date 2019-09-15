<template>
  <div>
    <div 
      class="" 
      v-if="this.pizza.relativePriceSquareMeter() != 'unberechenbare'">
      {{this.pizza.relativePriceSquareMeter()}} €/m² / {{parseInt(this.pizza.area()) + ' cm²'}}
    </div>
    <div class="" v-else>
      <small>
        Das kann ich nicht berechnen, bitte überprüfe deine Eingaben.
      </small>
    </div>
  </div>
</template>

<script>
export default {
  name: "pizza-relative-price",
  props: ["pizza"]
};
</script>
