import * as VueRouter from 'vue-router';
import App from "../App.vue";

const routes = [
	{
		path: "/",
		name: "App",
		component: App,
		meta: { title: "Constructive Feedback Demo" },
	},
];

const router = VueRouter.createRouter({
	history: VueRouter.createWebHashHistory(),
	routes,
});

export default router;
