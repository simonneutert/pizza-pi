<template>
  <div>
    <h4>Pizza, hier dreht sich alles um Pizza!</h4>
    <ul>
      <li>
        <p>
          Wieviel kostet deine Pizza pro Quadratmeter?
          <br />
          <router-link to="/durchmesser">Durchmesser</router-link>
        </p>
      </li>
      <li>
        <p>
          Nie wieder rätseln, um satt zu werden! Wieviel Pizza brauchst du, um
          satt zu werden?
          <br />
          <router-link to="/vergleich">Vergleich</router-link>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>
