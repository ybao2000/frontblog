<template>
  <div>
    <tabbar></tabbar>
    <!-- hello vue -->
    <!-- <input type="text" ref="mytext">
    <button @click="handleAdd">add</button>

    <ul>
      <li v-for="item in items" :key="item">
        {{ item }}
      </li>
    </ul>

    <navbar>
      <button @click="isShow=!isShow">navbar click</button>
    </navbar>
    <sidebar v-show="isShow"></sidebar> -->
    <router-view></router-view>
  </div>
</template>

<script>
// import navbar from './components/Navbar'
// import sidebar from './components/Sidebar'
import tabbar from './components/Tabbar'

import axios from 'axios'

// global components
// import Vue from 'vue'
// Vue.component("navbar", navbar)
// Vue.component("sidebar", sidebar)

export default {
	data() {
		return {
			items: [],
			isShow: false
		}
	},
	methods: {
		handleAdd() {
			// console.log("add", this.$refs.mytext.value)
			this.items.push(this.$refs.mytext.value)
		}
	},
	components: {
		// navbar: navbar,
		// sidebar: sidebar
		tabbar
	},
	mounted() {
		axios.get("/api/v1/theatres?language=en-us&range=100000&skip=0&take=1000").then(res => {
			console.log(res.data)
		})
		// axios.get("/api/location/search/?query=calgary").then(res => {
		//   console.log(res.data)
		// })
		// axios.get("https://www.kwelo.com/media/identicon/carpool").then(res => {
		//   console.log(res.data)
		// })
	}
}
</script>

<style lang="scss">

</style>
