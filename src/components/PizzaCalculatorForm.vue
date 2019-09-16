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
          <div class="error" v-if="!$v.pizza.diameter.required">
            Field is required
          </div>
          <div class="error" v-if="!$v.pizza.diameter.between">
            Price cannot be negative or higher than 100
          </div>
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
          <div class="error" v-if="!$v.pizza.price.required">
            Field is required
          </div>
          <div class="error" v-if="!$v.pizza.price.between">
            Price cannot be negative or higher than 100
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import { required, between } from "vuelidate/lib/validators";

export default {
  name: "pizza-calculator-form",
  props: ["pizza"],
  validations: {
    pizza: {
      price: {
        required,
        between: between(0, 100)
      },
      diameter: {
        required,
        between: between(0, 100)
      }
    }
  }
};
</script>
