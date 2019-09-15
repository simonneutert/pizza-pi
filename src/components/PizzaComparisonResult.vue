<template>
  <div class="card">
    <div class="card-body">
      <h4>Ergebnis</h4>
      {{priceDiff()}}
    </div>
  </div>
</template>

<script>
export default {
  name: "pizza-comparison-result",
  props: ['pizzas'],
  methods: {
    whichPizzas: function() {
      let pizzas = this.pizzas
      let largePizza = pizzas[0]
      let smallPizza = pizzas[1]
      let largePizzaArea = largePizza.area()
      let smallPizzaArea = smallPizza.area()
      if (largePizzaArea >= 2 * smallPizzaArea) {
        return largePizza
      } else {
        return smallPizza
      }
    },
    priceDiff: function() {
      let pizzas = this.pizzas
      let largePizza = pizzas[0]
      let smallPizza = pizzas[1]
      if (this.whichPizzas() == largePizza) {
        return this.largePizzaChoice(smallPizza, largePizza)
      } else {
        return this.smallPizzeChoice(smallPizza, largePizza)
      }
    },
    percDiff: function(highVal, lowVal) {
      return parseInt((highVal - lowVal) / lowVal * 100)
    },
    largePizzaChoice: function(smallPizza, largePizza) {
      let priceDiff = largePizza.price - 2 * smallPizza.price
      let percDiff = this.percDiff(largePizza.area(), 2 * smallPizza.area())
      if (priceDiff < 0) {
        return this.buildResultString('large', smallPizza, largePizza, priceDiff, percDiff, 'weniger')
      } else {
        return this.buildResultString('large', smallPizza, largePizza, priceDiff, percDiff, 'mehr')
      }
    },
    smallPizzeChoice: function(smallPizza, largePizza) {
      let resultString = ''
      let priceDiff = 2 * smallPizza.price - largePizza.price
      let percDiff = this.percDiff(2 * smallPizza.area(), largePizza.area())
      if (priceDiff < 0) {
        return this.buildResultString('small', smallPizza, largePizza, priceDiff, percDiff, 'weniger')
      } else {
        return this.buildResultString('small', smallPizza, largePizza, priceDiff, percDiff, 'mehr')
      }
    },
    buildResultString: function(pizzaSize, smallPizza, largePizza, priceDiff, percDiff, diffString) {
      let str = ''
      if (pizzaSize == 'small') {
        str += '2 kleine Pizzen kosten '
      }
      else {
        str += '1 große Pizza kostet '
      }
      str += Math.abs(priceDiff)
      str += ' € '
      str += diffString
      str += ' und du bekommst '
      str += percDiff
      str += ' % mehr.'
      return str
    }
  }
}
</script>
