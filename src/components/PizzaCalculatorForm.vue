<template>
  <div>
    <form>
      <div class="form-group">
        <label for="diameter">Durchmesser</label>
        <input class="form-control"
          v-model="pizza.diameter"
          placeholder="Größe in cm">
      </div>
      <div class="form-group">
        <label for="Preis">Preis</label>
        <input class="form-control"
          v-model="pizza.price"
          placeholder="Preis in Euro">
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "pizza-calculator-form",
  props: ['pizza']
};
</script>
