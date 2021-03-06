import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home.vue";

import PizzaSquareMeterCalculator from "./views/PizzaSquareMeterCalculator.vue";
import PizzaSquareMeterCalculatorSquared from "./views/PizzaSquareMeterCalculatorSquared.vue";
import PizzaComparator from "./views/PizzaComparator.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/squaremeterofpizza",
      name: "squaremeterofpizza",
      component: PizzaSquareMeterCalculator
    },
    {
      path: "/squaremeterofpizzasquared",
      name: "squaremeterofpizzasquared",
      component: PizzaSquareMeterCalculatorSquared
    },
    {
      path: "/1or2pizzas",
      name: "oneortwopizzas",
      component: PizzaComparator
    }
  ]
});
