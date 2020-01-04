<template>
  <form>
    <div class="row">
      <div class="col-md-3">
        <div class="form-group">
          <label for="pizza.x">x in cm</label>
          <input
            class="form-control"
            type="number"
            v-model="pizza.x"
            placeholder="diameter in cm"
          />
          <div class="error" v-if="!$v.pizza.x.required">
            Field is required
          </div>
          <div class="error" v-if="!$v.pizza.x.between">
            Price cannot be negative or higher than 100
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="form-group">
          <label for="pizza.y">y in cm</label>
          <input
            class="form-control"
            type="number"
            v-model="pizza.y"
            placeholder="diameter in cm"
          />
          <div class="error" v-if="!$v.pizza.y.required">
            Field is required
          </div>
          <div class="error" v-if="!$v.pizza.y.between">
            Price cannot be negative or higher than 100
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <label for="pizza.price">Price in Euro</label>
          <input
            class="form-control"
            type="number"
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
  name: "pizza-calculator-form-squared",
  props: ["pizza"],
  validations: {
    pizza: {
      price: {
        required,
        between: between(0, 100)
      },
      x: {
        required,
        between: between(0, 100)
      },
      y: {
        required,
        between: between(0, 100)
      }
    }
  }
};
</script>
