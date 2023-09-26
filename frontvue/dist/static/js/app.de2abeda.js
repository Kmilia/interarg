(function (e) {
	function t(t) {
		for (
			var n, l, i = t[0], c = t[1], s = t[2], u = 0, f = [];
			u < i.length;
			u++
		)
			(l = i[u]),
				Object.prototype.hasOwnProperty.call(r, l) &&
					r[l] &&
					f.push(r[l][0]),
				(r[l] = 0);
		for (n in c)
			Object.prototype.hasOwnProperty.call(c, n) && (e[n] = c[n]);
		d && d(t);
		while (f.length) f.shift()();
		return a.push.apply(a, s || []), o();
	}
	function o() {
		for (var e, t = 0; t < a.length; t++) {
			for (var o = a[t], n = !0, l = 1; l < o.length; l++) {
				var c = o[l];
				0 !== r[c] && (n = !1);
			}
			n && (a.splice(t--, 1), (e = i((i.s = o[0]))));
		}
		return e;
	}
	var n = {},
		r = { app: 0 },
		a = [];
	function l(e) {
		return (
			i.p +
			"static/js/" +
			({ about: "about" }[e] || e) +
			"." +
			{ about: "ea91861d" }[e] +
			".js"
		);
	}
	function i(t) {
		if (n[t]) return n[t].exports;
		var o = (n[t] = { i: t, l: !1, exports: {} });
		return e[t].call(o.exports, o, o.exports, i), (o.l = !0), o.exports;
	}
	(i.e = function (e) {
		var t = [],
			o = r[e];
		if (0 !== o)
			if (o) t.push(o[2]);
			else {
				var n = new Promise(function (t, n) {
					o = r[e] = [t, n];
				});
				t.push((o[2] = n));
				var a,
					c = document.createElement("script");
				(c.charset = "utf-8"),
					(c.timeout = 120),
					i.nc && c.setAttribute("nonce", i.nc),
					(c.src = l(e));
				var s = new Error();
				a = function (t) {
					(c.onerror = c.onload = null), clearTimeout(u);
					var o = r[e];
					if (0 !== o) {
						if (o) {
							var n =
									t &&
									("load" === t.type ? "missing" : t.type),
								a = t && t.target && t.target.src;
							(s.message =
								"Loading chunk " +
								e +
								" failed.\n(" +
								n +
								": " +
								a +
								")"),
								(s.name = "ChunkLoadError"),
								(s.type = n),
								(s.request = a),
								o[1](s);
						}
						r[e] = void 0;
					}
				};
				var u = setTimeout(function () {
					a({ type: "timeout", target: c });
				}, 12e4);
				(c.onerror = c.onload = a), document.head.appendChild(c);
			}
		return Promise.all(t);
	}),
		(i.m = e),
		(i.c = n),
		(i.d = function (e, t, o) {
			i.o(e, t) ||
				Object.defineProperty(e, t, { enumerable: !0, get: o });
		}),
		(i.r = function (e) {
			"undefined" !== typeof Symbol &&
				Symbol.toStringTag &&
				Object.defineProperty(e, Symbol.toStringTag, {
					value: "Module",
				}),
				Object.defineProperty(e, "__esModule", { value: !0 });
		}),
		(i.t = function (e, t) {
			if ((1 & t && (e = i(e)), 8 & t)) return e;
			if (4 & t && "object" === typeof e && e && e.__esModule) return e;
			var o = Object.create(null);
			if (
				(i.r(o),
				Object.defineProperty(o, "default", {
					enumerable: !0,
					value: e,
				}),
				2 & t && "string" != typeof e)
			)
				for (var n in e)
					i.d(
						o,
						n,
						function (t) {
							return e[t];
						}.bind(null, n),
					);
			return o;
		}),
		(i.n = function (e) {
			var t =
				e && e.__esModule
					? function () {
							return e["default"];
					  }
					: function () {
							return e;
					  };
			return i.d(t, "a", t), t;
		}),
		(i.o = function (e, t) {
			return Object.prototype.hasOwnProperty.call(e, t);
		}),
		(i.p = "/"),
		(i.oe = function (e) {
			throw (console.error(e), e);
		});
	var c = (window["webpackJsonp"] = window["webpackJsonp"] || []),
		s = c.push.bind(c);
	(c.push = t), (c = c.slice());
	for (var u = 0; u < c.length; u++) t(c[u]);
	var d = s;
	a.push([0, "chunk-vendors"]), o();
})({
	0: function (e, t, o) {
		e.exports = o("56d7");
	},
	"0077": function (e, t, o) {},
	1785: function (e, t, o) {
		"use strict";
		var n = o("0077"),
			r = o.n(n);
		r.a;
	},
	"31f2": function (e, t, o) {
		"use strict";
		var n = o("b278"),
			r = o.n(n);
		r.a;
	},
	"56d7": function (e, t, o) {
		"use strict";
		o.r(t);
		o("e260"), o("e6cf"), o("cca6"), o("a79d");
		var n = o("2b0e"),
			r = function () {
				var e = this,
					t = e.$createElement,
					o = e._self._c || t;
				return o(
					"v-app",
					[
						o(
							"v-app-bar",
							{ attrs: { app: "", color: "primary", dark: "" } },
							[
								o(
									"div",
									{ staticClass: "d-flex align-center" },
									[
										o("v-card-title", [
											e._v("Constructive Feedback Demo"),
										]),
									],
									1,
								),
							],
						),
						o(
							"v-content",
							[
								o(
									"v-container",
									{ attrs: { fluid: "" } },
									[o("HelloWorld")],
									1,
								),
							],
							1,
						),
					],
					1,
				);
			},
			a = [],
			l = function () {
				var e = this,
					t = e.$createElement,
					o = e._self._c || t;
				return o(
					"v-row",
					{ staticClass: "mx-3" },
					[
						o(
							"v-col",
							{ attrs: { cols: "6" } },
							[
								o(
									"v-row",
									[
										o(
											"v-col",
											{ attrs: { cols: "12" } },
											[
												o(
													"v-alert",
													{
														attrs: {
															value: !!e.error,
															color: "pink",
															dark: "",
															dismissible: "",
															border: "top",
															icon: "mdi-cloud-alert",
															transition:
																"scale-transition",
														},
													},
													[e._v(e._s(e.error))],
												),
											],
											1,
										),
										o(
											"v-col",
											{ attrs: { cols: "12" } },
											[
												o("v-select", {
													staticStyle: {
														"font-size": "1.2em",
													},
													attrs: {
														"item-text": "label",
														"item-value": "value",
														items: e.topics,
														label: "Topic",
													},
													model: {
														value: e.topicSelect,
														callback: function (t) {
															e.topicSelect = t;
														},
														expression:
															"topicSelect",
													},
												}),
											],
											1,
										),
									],
									1,
								),
								o(
									"v-row",
									[
										o("v-col", { attrs: { cols: "12" } }, [
											o("div", {
												ref: "editor",
												staticClass: "editor",
												staticStyle: {
													"font-size": "1.8em",
													"border-color": "black",
													"border-style": "rounded",
												},
												attrs: {
													contenteditable: "true",
													autocomplete: "off",
													autocorrect: "off",
													autocapitalize: "off",
													spellcheck: "false",
													id: "feedback-editor",
													placeholder:
														"Enter response here...",
												},
												on: { blur: e.onEdit },
											}),
										]),
									],
									1,
								),
							],
							1,
						),
						o(
							"v-col",
							{ attrs: { cols: "6" } },
							[
								o("v-row"),
								o(
									"v-row",
									{ staticStyle: { width: "700px" } },
									[
										o(
											"v-expansion-panels",
											e._l(
												e.alert.alerts,
												function (t, n) {
													return o(
														"v-expansion-panel",
														{ key: n },
														[
															o(
																"v-expansion-panel-header",
																[
																	o(
																		"v-alert",
																		{
																			attrs: {
																				color: "cyan",
																				border: "left",
																				elevation:
																					"0",
																				"colored-border":
																					"",
																			},
																		},
																		[
																			e._v(
																				e._s(
																					t.help,
																				),
																			),
																		],
																	),
																],
																1,
															),
															o(
																"v-expansion-panel-content",
																{
																	staticStyle:
																		{
																			"margin-left":
																				"50px",
																		},
																},
																[
																	o(
																		"v-alert",
																		{
																			attrs: {
																				color: "deep-purple accent-4",
																				border: "left",
																				elevation:
																					"0",
																				"colored-border":
																					"",
																			},
																		},
																		[
																			o(
																				"div",
																				{
																					domProps:
																						{
																							innerHTML:
																								e._s(
																									t.detailed,
																								),
																						},
																				},
																			),
																			o(
																				"v-divider",
																				{
																					staticClass:
																						"my-4 info",
																					staticStyle:
																						{
																							opacity:
																								"0.22",
																						},
																				},
																			),
																		],
																		1,
																	),
																],
																1,
															),
														],
														1,
													);
												},
											),
											1,
										),
									],
									1,
								),
							],
							1,
						),
					],
					1,
				);
			},
			i = [],
			c = (o("4de4"), o("d3b7"), o("bc3a")),
			s = o.n(c),
			u = {
				name: "HelloWorld",
				data: function () {
					return {
						error: "",
						show: !1,
						msg: "This is too big",
						txt: "<v-icon>mdi-account</v-icon>",
						topic: "",
						argument: "",
						loading: !1,
						topicSelect: {
							label: "School Uniforms: Good or Bad?",
							value: "uniforms",
						},
						topics: [
							{
								label: "School Uniforms: Good or Bad?",
								value: "uniforms",
							},
							{
								label: "Ban plastic water bottles",
								value: "bottles",
							},
							{ label: "TV is better than books", value: "tv" },
						],
						alert: { html: "", alerts: [] },
					};
				},
				mounted: function () {},
				methods: {
					fetchFeedback: function (e) {
						var t = this;
						s.a
							.get(
								"/api/feedback/?argument=".concat(
									this.argument,
									"&topic=uniforms",
								),
							)
							.then(function (e) {
								console.log(e.data);
								var o =
									document.getElementById("feedback-editor");
								(o.innerHTML = e.data.html), (t.alert = e.data);
							})
							.catch(function (e) {
								console.log(e), (t.error = e);
							})
							.finally(function () {
								return (t.loading = !1);
							});
					},
					onEdit: function (e) {
						var t = e.target.innerText;
						(this.argument = t),
							console.log("onEdit"),
							t && this.fetchFeedback(e);
					},
					resolve: function (e) {
						console.log(e.id);
						var t = document.getElementById(e.id);
						console.log(t),
							console.log(
								t.parentElement.classList.remove("error"),
							),
							(t.outerHTML = e.action),
							(this.alert.alerts = this.alert.alerts.filter(
								function (t) {
									return t.id !== e.id;
								},
							));
					},
				},
			},
			d = u,
			f = (o("31f2"), o("2877")),
			p = o("6544"),
			v = o.n(p),
			m = o("0798"),
			b = o("62ad"),
			h = o("ce7e"),
			g = o("cd55"),
			y = o("49e2"),
			w = o("c865"),
			x = o("0393"),
			k = o("0fd9"),
			S = o("b974"),
			_ = Object(f["a"])(d, l, i, !1, null, null, null),
			E = _.exports;
		v()(_, {
			VAlert: m["a"],
			VCol: b["a"],
			VDivider: h["a"],
			VExpansionPanel: g["a"],
			VExpansionPanelContent: y["a"],
			VExpansionPanelHeader: w["a"],
			VExpansionPanels: x["a"],
			VRow: k["a"],
			VSelect: S["a"],
		});
		var j = {
				name: "App",
				components: { HelloWorld: E },
				data: function () {
					return {};
				},
			},
			V = j,
			C = (o("1785"), o("7496")),
			O = o("40dc"),
			P = o("99d9"),
			T = o("a523"),
			H = o("a75b"),
			A = Object(f["a"])(V, r, a, !1, null, "fa0fa84a", null),
			B = A.exports;
		v()(A, {
			VApp: C["a"],
			VAppBar: O["a"],
			VCardTitle: P["a"],
			VContainer: T["a"],
			VContent: H["a"],
		});
		var M = o("8c4f"),
			F = function () {
				var e = this,
					t = e.$createElement,
					n = e._self._c || t;
				return n(
					"div",
					{ staticClass: "home" },
					[
						n("img", {
							attrs: { alt: "Vue logo", src: o("cf05") },
						}),
						n("HelloWorld", {
							attrs: { msg: "Welcome to Your Vue.js App" },
						}),
					],
					1,
				);
			},
			L = [],
			W = { name: "Home", components: { HelloWorld: E } },
			$ = W,
			z = Object(f["a"])($, F, L, !1, null, null, null),
			D = z.exports;
		n["a"].use(M["a"]);
		var N = [
				{
					path: "/",
					name: "Home",
					component: D,
					meta: { title: "Constructive Feedback Demo" },
				},
				{
					path: "/about",
					name: "About",
					component: function () {
						return o.e("about").then(o.bind(null, "f820"));
					},
				},
			],
			q = new M["a"]({ mode: "history", base: "/", routes: N }),
			G = q,
			I = o("2f62");
		n["a"].use(I["a"]);
		var J = new I["a"].Store({
				state: {},
				mutations: {},
				actions: {},
				modules: {},
			}),
			U = o("9483");
		Object(U["a"])("".concat("/", "service-worker.js"), {
			ready: function () {
				console.log(
					"App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB",
				);
			},
			registered: function () {
				console.log("Service worker has been registered.");
			},
			cached: function () {
				console.log("Content has been cached for offline use.");
			},
			updatefound: function () {
				console.log("New content is downloading.");
			},
			updated: function () {
				console.log("New content is available; please refresh.");
			},
			offline: function () {
				console.log(
					"No internet connection found. App is running in offline mode.",
				);
			},
			error: function (e) {
				console.error("Error during service worker registration:", e);
			},
		});
		var R = o("f309");
		n["a"].use(R["a"]);
		var Y = new R["a"]({});
		(n["a"].config.productionTip = !1),
			new n["a"]({
				router: G,
				store: J,
				vuetify: Y,
				render: function (e) {
					return e(B);
				},
			}).$mount("#app");
	},
	b278: function (e, t, o) {},
	cf05: function (e, t, o) {
		e.exports = o.p + "static/img/logo.c3b11b01.png";
	},
});
//# sourceMappingURL=app.de2abeda.js.map
