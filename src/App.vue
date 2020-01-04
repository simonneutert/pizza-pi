<template>
  <div id="app">
    <div id="nav">
      <div class="row">
        <div class="col-sm-12 col-md-3">
          <router-link to="/">
            Home
          </router-link>
        </div>
        <div class="col-sm-12 col-md-3">
          <router-link to="/squaremeterofpizza">
            Square Meter Price
          </router-link>
        </div>
        <div class="col-sm-12 col-md-3">
          <router-link to="/squaremeterofpizzasquared">
            Square Meter Price Squared Pizza
          </router-link>
        </div>
        <div class="col-sm-12 col-md-3">
          <router-link to="/1or2pizzas">
            Best Bang for my Bucks
          </router-link>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding-bottom: 0.5cm;
  margin-bottom: 0.5cm;
  border-bottom: 1px solid green;
  a {
    line-height: 2em;
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
