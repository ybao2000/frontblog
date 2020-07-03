import Vue from 'vue'
import VueRouter from 'vue-router'
import Film from '@/views/Film'
import Cinema from '@/views/Cinema'
import Center from '@/views/Center'
import Nowplaying from '@/views/Film/Nowplaying'
import Comingsoon from '@/views/Film/Comingsoon'

Vue.use(VueRouter)

const router = new VueRouter({
	// mode: 'history',
	// base: process.env.BASE_URL,
	routes: [
		{
			path: '/film',
			component: Film,
			children: [
				{
					path: "nowplaying", // or /film/nowplaying
					component: Nowplaying
				},
				{
					path: "comingsoon",
					component: Comingsoon
				}
			]
		},
		{
			path: '/cinema',
			component: Cinema
		},
		{
			path: '/center',
			component: Center
		},
		{
			path: '*',
			redirect: '/film'
		}
	]
})

export default router
