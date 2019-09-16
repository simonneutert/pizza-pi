<template>
  <form>
    <div class="row">
      <div class="col-md-6">
        <div class="form-group">
          <label for="pizza.diameter">Diameter in cm</label>
          <input
            class="form-control"
            v-model="pizza.diameter"
            placeholder="diameter in cm"
          />
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <label for="pizza.price">Price in Euro</label>
          <input
            class="form-control"
            v-model="pizza.price"
            placeholder="price in Euro"
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
