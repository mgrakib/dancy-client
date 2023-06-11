/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				"primary-color": "var(--primary-color)",
				"secondary-color": "var(--secondary-color)",
				"common-color": "var( --common-color)",
				"gray-color": "var(  --gray-color)",
				"action-color": "var(--action-color)",
				"dashboard-color": "var(--dashboard-color)",
				"dark-primary-colro": "var(--dark-primary-color)",
				"dark-secondary-colro": "var(--dark-secondary-color)",
				"dark-common-color": "var(--dark-common-color)",
				"dark-dashboard-color": "var(--dark-dashboard-color)",
			},
		},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: ["light", "dark"],
	},
};

