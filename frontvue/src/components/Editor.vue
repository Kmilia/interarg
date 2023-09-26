<template>
	<v-row class="mx-3">
		<!--Editor section | create 2 column view -->
		<!-- First column is for editor and second colum for alerts -->
		<v-col cols="6">
			<v-row>
				<v-col cols="12">
					<v-alert
						:value="error ? true : false"
						color="pink"
						dark
						dismissible
						border="top"
						icon="mdi-cloud-alert"
						transition="scale-transition"
						>{{ error }}</v-alert
					>
				</v-col>
				<v-col cols="12">
					<v-select
						style="font-size: 1.2em"
						v-model="topicSelect"
						item-text="label"
						item-value="value"
						:items="topics"
						label="Topic"
					/>
				</v-col>
			</v-row>
			<v-row>
				<v-col cols="12">
					<div
						style="
							font-size: 1.8em;
							border-color: black;
							border-style: rounded;
						"
						ref="editor"
						class="editor"
						contenteditable="true"
						@blur="onEdit"
						autocomplete="off"
						autocorrect="off"
						autocapitalize="off"
						spellcheck="false"
						id="feedback-editor"
						placeholder="Enter response here..."
					></div>
				</v-col>
			</v-row>
		</v-col>
	</v-row>
</template>

<script>
import axios from "axios";

export default {
	name: "Topic",
	data: () => ({
		error: "",
		show: false,
		msg: "This is too big",
		txt: `<v-icon>mdi-account</v-icon>`,
		topic: "",
		argument: "",
		loading: false,
		topicSelect: {
			label: "School Uniforms: Good or Bad?",
			value: "uniforms",
		},
		topics: [
			{ label: "School Uniforms: Good or Bad?", value: "uniforms" },
			{ label: "Ban plastic water bottles", value: "bottles" },
			{ label: "TV is better than books", value: "tv" },
		],
		alert: {
			html: "",
			alerts: [],
		},
	}),
	methods: {
		fetchFeedback(evt) {
			axios
				.get(`/api/feedback/?argument=${this.argument}&topic=uniforms`)
				.then((response) => {
					console.log(response.data);
					let el = document.getElementById("feedback-editor");
					el.innerHTML = response.data.html;
					this.alert = response.data;
				})
				.catch((error) => {
					console.log(error);
					this.error = error;
				})
				.finally(() => (this.loading = false));
		},
		onEdit(evt) {
			var src = evt.target.innerText;
			this.argument = src;
			console.log("onEdit");
			if (src) {
				this.fetchFeedback(evt);
			}
		},
		resolve(item) {
			console.log(item.id);
			let el = document.getElementById(item.id);
			console.log(el);
			el.outerHTML = item.action;
			this.alert.alerts = this.alert.alerts.filter(
				(obj) => obj.id !== item.id,
			);
		},
	},
};
</script>

<style>
.editor {
	background: white;
	padding: 10px;
	height: 550px;
	border-radius: 10px;
	border-style: rounded !important;
	border-color: black !important;
}

body {
	font-size: 20pt !important;
}

.v-label {
	font-size: 20pt !important;
	height: 60px !important;
}

.v-alert__content {
	font-size: 23pt !important;
	margin-left: 50px !important;
}

.v-input,
.v-input__slot,
.v-input__control {
	min-height: 70px;
}

.v-select__selections {
	min-height: 70px;
}

.v-select {
	font-size: 1.2em;
}

.v-select__selections {
	line-height: 30px !important;
}

[contenteditable="true"]:empty:before {
	content: attr(placeholder);
	color: grey;
	pointer-events: none;
	display: block; /* For Firefox */
}

/* Tooltip container */
.tooltip {
	position: relative;
	display: inline-block;
	border-bottom: 1px dotted black; /* If you want dots under the hoverable text */
	font-size: 100px;
}

/* Tooltip text */
.tooltip .tooltiptext {
	visibility: hidden;
	width: 300px;
	background-color: black;
	color: #fff;
	text-align: center;
	padding: 5px 0;
	border-radius: 6px;
	font-size: 100px;

	/* Position the tooltip text - see examples below! */
	position: absolute;
	z-index: 1;
}

/* Show the tooltip text when you mouse over the tooltip container */
.tooltip:hover .tooltiptext {
	visibility: visible;
}

.tooltip .tooltiptext {
	width: 300px;
	top: 100%;
	left: 50%;
	font-size: 100px;
	margin-left: -60px; /* Use half of the width (120/2 = 60), to center the tooltip */
}

.tooltip .tooltiptext::after {
	content: " ";
	position: absolute;
	bottom: 100%; /* At the top of the tooltip */
	left: 50%;
	margin-left: -5px;
	border-width: 5px;
	border-style: solid;
	border-color: transparent transparent black transparent;
}
</style>
