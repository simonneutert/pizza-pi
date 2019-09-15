<template>
  <form>
    <div class="row">
      <div class="col-md-6">
        <div class="form-group">
          <label for="diameter">Diameter</label>
          <input
            class="form-control"
            v-model="pizza.diameter"
            placeholder="Größe in cm"
          />
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <label for="Preis">Price</label>
          <input
            class="form-control"
            v-model="pizza.price"
            placeholder="Price in Euro"
          />
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "pizza-calculator-form",
  props: ["pizza"]
};
</script>
