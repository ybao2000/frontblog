<template>
  <nav>
    <ul>
      <!-- <a href="#/film">film</a>
      <a href="#/cinema">cinema</a>
      <a href="#/center">center</a> -->

      <!-- <li>
        <router-link to="/film">film</router-link>
      </li>
      <li>
        <router-link to="/cinema">cinema</router-link>
      </li>
      <li>
        <router-link to="/center">center</router-link>
      </li> -->
      <router-link to="/film" tag="li" activeClass="myactive">film</router-link>
      <router-link to="/cinema" tag="li" activeClass="myactive">cinema</router-link>
      <router-link to="/center" tag="li" activeClass="myactive">center</router-link>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
  .myactive {
    color: red;
  }
</style>
